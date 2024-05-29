// "use client";

// import { z } from "zod";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { useForm } from "react-hook-form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";

// import Link from "next/link";
// import { useState } from "react";
// import { signInUser } from "@/services/actions/signInUser";
// import { storeUserInfo } from "@/services/authServics";
// import { useToast } from "../ui/use-toast";
// import { useRouter } from "next/navigation";


// const formSchema = z.object({
//   email: z.string().email({
//     message: "Please enter valid email",
//   }),
//   password: z.string().min(6, {
//     message: "Password at least 6 characters",
//   }),
// });

// const SignInForm = () => {

//   const router = useRouter();
//   const {toast}=useToast()
//   const [error, setError] = useState("");
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {

//     try {
//       const res = await signInUser(values);

//       if (res?.data?.accessToken) {
//         storeUserInfo({ accessToken: res?.data?.accessToken });
//         toast({title:'Login', description:'User login successfully'})
//         router.refresh()
//       } else {
//         setError(res?.message);
//       }
//     } catch (err: any) {
//       setError(err?.message);
//     }
   
//   };
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
//         <Card className="w-full max-w-md space-y-4 p-4 border-0 shadow-sm">
//           <CardHeader>
//             <CardTitle className="text-2xl">Login</CardTitle>
//             <CardDescription>
//               Enter your email below to login to your account.
//             </CardDescription>
//           </CardHeader>

//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>password</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="password"
//                     placeholder="Enter your password"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button className="w-[100%]" type="submit">
//             SignIN
//           </Button>

//           <CardFooter>
//             if you don&apos;t have an account,please
//             <Link href="/register" className="text-blue-500 hover:underline">
//               Sign up
//             </Link>
//           </CardFooter>
//         </Card>
//       </form>
//     </Form>
//   );
// };

// export default SignInForm;






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
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Link from "next/link";
import { useState } from "react";
import { signInUser } from "@/services/actions/signInUser";
import { storeUserInfo } from "@/services/authServics";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

const SignInForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setError("");

    try {
      const res = await signInUser(values);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast({ title: "Login", description: "User login successfully" });
        router.refresh();
      } else {
        setError(res?.message || "An unexpected error occurred.");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <Card className="w-full max-w-md space-y-4 p-4 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>

          {error && <p className="text-red-500">{error}</p>}

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
                <FormLabel>Password</FormLabel>
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
          <Button type="submit" disabled={loading} className="w-full">
            SignIn
            {loading && <Loader2 className="ml-6 h-5 w-5 animate-spin" />}
          </Button>

          <CardFooter>
            If you don&apos;t have an account, please
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default SignInForm;

