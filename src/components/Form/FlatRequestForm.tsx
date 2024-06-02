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
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {useToast } from "../ui/use-toast";
import useUserInfo from "@/hooks/useUserInfo";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { Loader2 } from "lucide-react";
import CustomLoader from "../shared/CustomLoader/CustomLoader";

const formSchema = z.object({
  userName: z.string().min(1, { message: "User name must be provided" }),
  address: z.string().min(1, { message: "Address must be provided" }),
  contactNumber: z
    .string()
    .min(1, { message: "Contact number must be provided" }),
  bio: z.string().min(1, { message: "Bio must be provided" }),
  email: z.string().min(1, { message: "Email must be provided" }),
  profession: z.string().min(1, { message: "Profession must be provided" }),
  additionalInformation: z
    .string()
    .min(1, { message: "Additional information must be provided" }),
  termsAndCondition: z
    .string()
    .min(1, { message: "Terms and conditions must be provided" }),
});

const FlatRequestForm = ({ flatId }: { flatId: string }) => {
  const { toast } = useToast();
  const router = useRouter();
  const user = useUserInfo();
  console.log(user);

  const { data, isLoading: isLoadingProfile } = useGetMyProfileQuery({});
  const [createBooking, { isLoading: update }] = useCreateBookingMutation();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      contactNumber: "",
      bio: "",
      address: "",
      profession: "",
      additionalInformation: "",
      termsAndCondition: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        userName: data.userName || "",
        email: data.email || "",
        contactNumber: data.contactNumber || "",
        bio: data.bio || "",
        address: data.address || "",
        profession: data.profession || "",
        additionalInformation: "",
        termsAndCondition: "",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: any) => {
    
    try {
      const res = await createBooking({ ...values, flatId }).unwrap();

      if (res?.id) {
        toast({
          title: "Flat Request",
          description: "Your flat share request added successfully",
        });
        router.push(`/dashboard/${user?.role}/requested_flats`);
      }
    } catch (err: any) {}
  };

  return (
    <div>
      {isLoadingProfile ? (
       <CustomLoader/>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg mx-auto">
         <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="User Name..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="email"
                          placeholder="Email..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profession</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Profession..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Biography</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Biography..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Address..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Contact Number..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalInformation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Enter additional information..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="termsAndCondition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Terms and Conditions</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="text"
                          placeholder="Enter terms and conditions..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-6">
                <Button type="submit" disabled={update} className="w-full">
                  submit
                  {update && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
                </Button>
              </div>
         </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default FlatRequestForm;





