

"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { useToast } from "@/components/ui/use-toast";
import { Key, Loader2, LockKeyhole } from "lucide-react";

const formSchema = z
  .object({
    oldPassword: z.string().min(6, {
      message: "Old password must be at least 6 characters",
    }),
    newPassword: z.string().min(6, {
      message: "New password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, "password confirmation is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password do not match!!!",
  });

const ChangePassword = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await changePassword(values);

      if ("data" in res && res.data.status === 200) {
        logoutUser(router);
        toast({
          title: "Success",
          description:
            "Password changed successfully. You have been logged out.",
        });
      } else {
        throw new Error("Incorrect old password");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "Failed to change password",
      });
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-full max-w-lg space-y-4 p-6 border rounded-md">
        <CardHeader className="space-y-1 text-center">
          <LockKeyhole size={40} className="mx-auto text-gray-600" />
          <CardTitle className="text-2xl font-bold">Change Password</CardTitle>
          <CardDescription className="text-gray-500">
            Enter your old password and a new password to update your password.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your old password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
           
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem  className="space-y-1">
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your new password"
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
                <FormItem   className="space-y-1">
                  <FormLabel>Re-Enter new password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Re-Enter confirm new password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              Submit
              {isLoading && <Loader2 className="ml-10 h-4 w-4 animate-spin" />}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
