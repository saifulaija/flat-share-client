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
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { logoutUser } from "@/services/actions/logoutUser";
import { useToast } from "@/components/ui/use-toast";
import { Key, Loader2, LockKeyhole } from "lucide-react";
import { useForgotPasswordMutation, useResetPasswordMutation } from "@/redux/api/authApi";
import { MyAlert } from "@/components/ShadCn/MyAlert";
import { useEffect } from "react";
import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";

const formSchema = z.object({
  newPassword: z.string().min(6, 'Must be at least 6 characters long'),
});

const ResetPasswordPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('Id');
  const token = searchParams.get('token');
  


  const [resetPassword,{isLoading}] = useResetPasswordMutation();

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
        console.log(res)

      if ("data" in res && res.data.status === 200) {
        // logoutUser(router);
        toast({
          title: "Password",
          description:
            "Password Reset Successful",
        });
        localStorage.removeItem(authKey);
        deleteCookies([authKey, 'refreshToken']);
        router.push('/login');
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
    <div className="flex items-center justify-center p-20">
      <Card className="w-full max-w-lg space-y-6 p-10 border shadow-lg ">
        <CardHeader className="space-y-1 text-center">
          <LockKeyhole size={40} className="mx-auto text-gray-600" />
          <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
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
                      placeholder="Enter your old password"
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
      </Card>
    </div>
  );
};

export default ResetPasswordPage;
