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
import { motion } from "framer-motion";

import { logoutUser } from "@/services/actions/logoutUser";
import { useToast } from "@/components/ui/use-toast";
import { Key, Loader2, LockKeyhole } from "lucide-react";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { MyAlert } from "@/components/ShadCn/MyAlert";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
});

const ForgotPassword = () => {
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
    <motion.div className="flex items-center justify-center py-16 px-1   md:p-20"  initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ ease: "easeInOut", duration: 1, delay: 1 }}>
      <div className="w-full max-w-lg space-y-6 p-4 md:p-10 border-[.25px] border-primary/40 rounded-sm ">
        <CardHeader className="space-y-1 text-center">
          <LockKeyhole size={40} className="mx-auto text-primary" />
          <CardTitle className="text-xl md:text-2xl font-semibold text-primary"> Forgot password</CardTitle>
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
      </div>
    </motion.div>
  );
};

export default ForgotPassword;
