"use client";

import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import Image from "next/image";
import React from "react";
import { MapPin, Bed, DollarSign, LocateIcon, Clock } from "lucide-react";

import { formateDate, formateMoney } from "@/utils/common";
import { z } from "zod";

import { uploadImage } from "@/utils/imgbb";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { useCreateImageMutation } from "@/redux/api/imageApi";

type TProps = {
  params: {
    flatId: string;
  };
};

const formSchema = z.object({
  url: z.any(),
});

const UpdateFlatPage = ({ params }: TProps) => {
  const { toast } = useToast();
  const id = params.flatId;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: null,
    },
  });

  const [createImage, { isLoading: update }] = useCreateImageMutation();
  const { data, isLoading, error } = useGetSingleFlatQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.url && values.url.length > 0) {
      const url = await uploadImage(values.url[0]);
      values.url = url;
    } else {
      values.url = "";
    }

    const imageData = {
      ...values,
      flatId: data?.id,
    };

    console.log(values, "values.........");
    console.log(imageData, "values.........");
    try {
      const res = await createImage(imageData).unwrap();

      console.log(res, "res...........");
      if (res?.id) {
        toast({
          title: "Success!",
          description: `Image added successfully`,
        });
      }
    } catch (err: any) {
      toast(err?.message);
    }
  };

  return (
    <article className="flex flex-col md:flex-row justify-between items-start gap-5 border rounded-lg p-5 hover:bg-muted/60 ">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 w-full lg:sticky top-0">
            <Image
              src={data.image[0].url}
              width={200}
              height={200}
              alt="image"
              className="rounded object-cover"
            />
            <hr className="border-muted-foreground border-2 my-5" />
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {data?.image?.map((imageItem: any) => (
                <Image
                  key={imageItem.id}
                  src={imageItem.url}
                  alt="imageItem"
                  width={100}
                  height={100}
                  className="rounded cursor-pointer"
                />
              ))}
            </div>
            <hr className="border-muted-foreground border-2 my-5" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full space-y-4 px-10 py-6 border-0 ">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>profilePhoto</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => field.onChange(e.target.files)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button className="w-[100%] mt-2" type="submit">
                  { update?  "Uploading..............": "Upload Image More"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="lg:col-span-2 items-center">
            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <LocateIcon size={16} className="shrink-0" />
                {data?.location}
              </p>
            </div>
            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5">
                {formateMoney(data?.rentAmount)}
              </p>
            </div>

            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <Clock size={16} className="shrink-0" />
                {formateDate(data?.createdAt)}
              </p>
            </div>
            <div className="text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <p>{data?.description}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default UpdateFlatPage;
