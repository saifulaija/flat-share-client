"use client";

import Image from "next/image";
import React, { useState } from "react";

import {Loader2, UserRound } from "lucide-react";

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


import MyDialog from "@/components/ShadCn/MyDialog";
import {
  useGetSingleUserQuery,
  useUpdateUserProfileMutation,
} from "@/redux/api/profileApi";
import UserProfileUpdateForm from "@/components/Form/UserProfileUpdateForm";
import UserProfileInformation from "./components/UserProfileInformation";
import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";


const formSchema = z.object({
  profilePhoto: z.any(),
});

const ProfilePage = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profilePhoto: null,
    },
  });

  const [updateProfile, { isLoading: update }] = useUpdateUserProfileMutation();
  const { data, isLoading, error } = useGetSingleUserQuery();
  const userData:any=data

  if (isLoading) {
    return <CustomLoader/>;
  }

  if (error) {
    return <div>Error loading data.</div>;
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.profilePhoto && values.profilePhoto.length > 0) {
      const profilePhoto = await uploadImage(values.profilePhoto[0]);
      values.profilePhoto = profilePhoto;
    } else {
      values.profilePhoto = "";
    }

    const data = {
      body: values,
    };

    try {
      const res = await updateProfile(data).unwrap();

      if (res?.id) {
        toast({
          title: "Success!",
          description: `Image updated successfully`,
        });

        form.setValue("profilePhoto", "");
      }
    } catch (err: any) {
      toast(err?.message);
    }
  };

  return (
    <article className="flex flex-col md:flex-row justify-between items-start gap-5 border rounded-lg p-5  ">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 w-full lg:sticky top-0">
            {data?.profilePhoto ? (
              <div className="flex-center">
                <Image
                  src={data?.profilePhoto}
                  width={200}
                  height={200}
                  alt="Profile Photo"
                  className="rounded object-cover self-center"
                />
              </div>
            ) : (
              <div className="w-200 h-200 flex items-center justify-center rounded">
                <UserRound size={200} />
              </div>
            )}

            <hr className="border-muted-foreground border-2 my-5" />

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="w-full space-y-4 px-10 py-6 border-0 ">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name="profilePhoto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Upload Image</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              required
                              onChange={(e) => field.onChange(e.target.files)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" disabled={update} className="w-full">
                    Update
                    {update && (
                      <Loader2 className="ml-6 h-4 w-4 animate-spin" />
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="w-full">
              <div className="w-full">
                <MyDialog
                  triggerButton={
                    <div className="w-full">
                      <Button>Update Your Profile</Button>
                    </div>
                  }
                >
                  <UserProfileUpdateForm data={userData} />
                </MyDialog>
              </div>
            </div>
          </div>

          <UserProfileInformation data={userData} />
        </div>
      </div>
    </article>
  );
};

export default ProfilePage;
