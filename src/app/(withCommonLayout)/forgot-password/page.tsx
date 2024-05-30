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

import { logoutUser } from "@/services/actions/logoutUser";
import { useToast } from "@/components/ui/use-toast";
import { Key, Loader2, LockKeyhole } from "lucide-react";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { MyAlert } from "@/components/ShadCn/MyAlert";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [forgotPassword, { isSuccess,isLoading }] = useForgotPasswordMutation();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        const res = await forgotPassword(values);

      if ("data" in res && res.data.status === 200) {
        // logoutUser(router);
        toast({
          title: "Email sent",
          description:
            "Check Your Email for Reset Link",
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
    <div className="flex items-center justify-center p-20">
      <Card className="w-full max-w-lg space-y-6 p-10 border shadow-lg ">
        <CardHeader className="space-y-1 text-center">
          <LockKeyhole size={40} className="mx-auto text-gray-600" />
          <CardTitle className="text-2xl font-bold"> Forgot password</CardTitle>
          <CardDescription className="text-gray-500 text-balance">
            Enter your email to reset your password.
          </CardDescription>
          {isSuccess && (
               <div>
                  <MyAlert title="Email sent" description="An Email with reset password link was sent to your email"/>
               </div>
            )}
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
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
                "Submit Email"
              )}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
