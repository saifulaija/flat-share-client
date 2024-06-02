"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, LockKeyhole } from "lucide-react";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { useEffect } from "react";
import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";

import { motion } from "framer-motion";
const formSchema = z.object({
  newPassword: z.string().min(6, "Must be at least 6 characters long"),
});

const ResetPassword = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("Id");
  const token = searchParams.get("token");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  useEffect(() => {
    if (!token) return;
    localStorage.setItem(authKey, token);
  }, [token]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const updatedData = { ...values, id };
    try {
      const res = await resetPassword(updatedData);

      if ("data" in res && res.data.status === 200) {
        // logoutUser(router);
        toast({
          title: "Password",
          description: "Password Reset Successful",
        });
        localStorage.removeItem(authKey);
        deleteCookies([authKey, "refreshToken"]);
        router.push("/login");
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
    <motion.div
      className="flex items-center justify-center py-16 px-1   md:p-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
    >
      <div className="w-full max-w-lg space-y-6 p-4 md:p-10 border-[.25px] border-primary/40 rounded-sm">
        <CardHeader className="space-y-1 text-center">
          <LockKeyhole size={40} className="mx-auto text-primary" />
          <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
            Reset password
          </CardTitle>
          <CardDescription className="text-gray-500 text-balance">
            Enter your new password to reset your password.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
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

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  Submitting...
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default ResetPassword;
