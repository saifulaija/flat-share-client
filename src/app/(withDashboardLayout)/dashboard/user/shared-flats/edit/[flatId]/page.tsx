"use client";

import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import Image from "next/image";
import React, { useState } from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import FlatUpdateForm from "@/components/Form/FlatUpdateForm";
import UpdateFlatDialog from "../../components/UpdateFlatDialog ";

type TProps = {
  params: {
    flatId: string;
  };
};

const formSchema = z.object({
  url: z.any(),
});

const UpdateFlatPage = ({ params }: TProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  const handleConfirm = () => {
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
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
                          <FormLabel>Upload Image</FormLabel>
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
                    {update ? "Uploading.............." : "Upload Image More"}
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
            <div className="my-10">
              {/* <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <AlertDialogTrigger className="border w-full px-4 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Edit Flat
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    <FlatUpdateForm data={data} isLoading={isLoading} onSuccess={() => setIsDialogOpen(false)} />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction form="flat-update-form">Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog> */}

              <UpdateFlatDialog
                data={data}
                isLoading={false}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default UpdateFlatPage;

// 'use client'

// import { useGetSingleFlatQuery } from '@/redux/api/flatApi'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { MapPin, Bed, DollarSign } from 'lucide-react'
// import {
//   AlertDialog,
//   AlertDialogTrigger,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogCancel,
//   AlertDialogAction,
// } from "@/components/ui/alert-dialog"
// import FlatUpdateForm from '@/components/Form/FlatUpdateForm'
// // Adjust the import path according to your project structure

// type TProps = {
//   params: {
//     flatId: string
//   }
// }

// const UpdateFlatPage = ({ params }: TProps) => {
//   const id = params.flatId
//   const { data, isLoading, error } = useGetSingleFlatQuery(id)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)

//   if (isLoading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error loading data.</div>
//   }

//   return (
//     <article className="flex flex-col md:flex-row justify-between items-start gap-5 border rounded-lg p-5 hover:bg-muted/60 dark:bg-gray-800">
//       {data && (
//         <>
//           <div className="w-full md:w-1/4 flex-shrink-0">
//             {data.image && data.image.length > 0 && (
//               <Image src={data.image[0].url} alt='Flat image' width={300} height={300} className="rounded-lg" />
//             )}
//           </div>

//           <div className="w-full md:w-3/4 flex flex-col gap-3">
//             <h2 className="text-xl font-bold flex items-center"><MapPin className="inline-block mr-2" />{data.location}</h2>
//             <p className="text-gray-700 dark:text-gray-300">Description: {data.description}</p>
//             <p className="text-gray-700 dark:text-gray-300 flex items-center"><Bed className="inline-block mr-2" />Bedrooms: {data.bedRooms}</p>
//             <p className="text-gray-700 dark:text-gray-300">Space: {data.space} sqft</p>
//             <p className="text-gray-700 dark:text-gray-300">Amenities: {data.amenities}</p>
//             <p className="text-gray-700 dark:text-gray-300 flex items-center"><DollarSign className="inline-block mr-2" />Rent Amount: ${data.rentAmount}</p>
//             <p className="text-gray-700 dark:text-gray-300 flex items-center"><DollarSign className="inline-block mr-2" />Advance Amount: ${data.advanceAmount}</p>
//             <p className="text-gray-500 dark:text-gray-400">Posted on: {new Date(data.createdAt).toLocaleDateString()}</p>

//             <AlertDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen}>
//               <AlertDialogTrigger className="border w-full px-4 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
//                 Edit Flat
//               </AlertDialogTrigger>
//               <AlertDialogContent>
//                 <AlertDialogHeader>
//                   <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                   <AlertDialogDescription>
//                     <FlatUpdateForm data={data} isLoading={isLoading} onSuccess={() => setIsDialogOpen(false)} />
//                   </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <AlertDialogFooter>
//                   <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancel</AlertDialogCancel>
//                   <AlertDialogAction type="submit" form="flat-update-form">Continue</AlertDialogAction>
//                 </AlertDialogFooter>
//               </AlertDialogContent>
//             </AlertDialog>
//           </div>
//         </>
//       )}
//     </article>
//   )
// }

// export default UpdateFlatPage
