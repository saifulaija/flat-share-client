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


import Link from "next/link";
import { useCreateUserMutation } from "@/redux/api/userApi";

import { useRouter } from "next/navigation";

import { toast } from "../ui/use-toast";
import { uploadImage } from "@/utils/imgbb";
import { Loader2 } from "lucide-react";
const formSchema = z
  .object({
    email: z.string().email({
      message: "Please enter valid email",
    }),
    password: z.string().min(6, {
      message: "Password at least 6 characters",
    }),
    userName: z.string().min(1, {
      message: "Enter your yserName",
    }),
    contactNumber: z.string().min(1, {
      message: "Enter your contact number",
    }),
    profilePhoto: z.any(),

    confirmPassword: z.string().min(6, "password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password do not match!!!",
  });

const SignUpForm = () => {
  const router = useRouter();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      userName: "",
      confirmPassword: "",
      profilePhoto: null,
      contactNumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.profilePhoto && values.profilePhoto.length > 0) {
      const url = await uploadImage(values.profilePhoto[0]);
      values.profilePhoto = url;
    } else {
      values.profilePhoto = "";
    }

    console.log(values,'values.........')
    try {
      const res = await createUser(values).unwrap();
      console.log(res,'res...........')
      if (res?.id) {
        toast({
          title: "Success!",
          description: `User created successfully`,
        });
        router.push("/login");
      }
    } catch (err: any) {
      toast(err?.message);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full space-y-4 md:px-10 py-6 border-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="jondho" {...field} />
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
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Re-Enter your password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-Enter your password"
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
                  <FormLabel>contactNumber</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Contact Number.."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="profilePhoto"
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
          <Button type="submit" disabled={isLoading} className="w-full">
            SignUp
            {isLoading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
          </Button>

          <div className="text-balance flex justify-center items-center gap-1 text-center">
           <span> Already have an account?</span>
            <Link href="/login" className="text-primary hover:underline">
              Login Here
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
