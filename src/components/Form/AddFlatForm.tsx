"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

import { uploadImage } from "@/utils/imgbb";
import { useCreateFlatMutation } from "@/redux/api/flatApi";
import useUserInfo from "@/hooks/useUserInfo";

import { Loader2 } from "lucide-react";

const formSchema = z.object({
  description: z
    .string()
    .min(6, { message: "Description at least 6 characters" }),
  location: z.string().min(1, { message: "Location must be provided" }),
  amenities: z.string().min(1, { message: "Enter flat amenities" }),
  bedRooms: z.string().min(1, { message: "Enter number of bed rooms" }),
  rentAmount: z.string().min(1, "Rent amount must be provided"),
  advanceAmount: z.string().min(1, "Advance amount must be provided"),
  space: z.string().min(1, "Flat space must be provided"),
  image: z.any(),
});

const AddFlatForm = () => {
  const router = useRouter();
  const user = useUserInfo();
  const [createFlat, { isLoading, isError }] = useCreateFlatMutation();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      description: "",
      rentAmount: "",
      advanceAmount: "",
      bedRooms: "",
      amenities: "",
      space: "",
      image: null,
    },
  });

  const onSubmit = async (values: any) => {
    if (values.image && values.image.length > 0) {
      const url = await uploadImage(values.image[0]);
      values.image = url;
    } else {
      values.image = "";
    }

    try {
      const res = await createFlat(values).unwrap();
     
      if (res?.id) {
        toast({
          title: "Success!",
          description: `Flat created successfully`,
        });
        router.push(`/dashboard/${user?.role}/shared-flats`);
      }
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full space-y-4 px-10 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      placeholder="Location..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      placeholder="Description"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Amount</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="number"
                      placeholder="Enter rent amount..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="advanceAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Advance Amount</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="number"
                      placeholder="Enter advance amount..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bedRooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bed Rooms</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      placeholder="Enter bed rooms..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      placeholder="Enter amenities..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="space"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Space</FormLabel>
                  <FormControl>
                    <Input
                      required
                      type="text"
                      placeholder="Enter flat space..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
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
          <div className="mt-6">
          <Button type="submit" disabled={isLoading} className="w-full">
            Add Now
            {isLoading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
          </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AddFlatForm;
