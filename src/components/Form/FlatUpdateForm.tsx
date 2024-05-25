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
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { toast, useToast } from "../ui/use-toast";
// import { useCreateFlatMutation } from "@/redux/api/flatApi";
// import useUserInfo from "@/hooks/useUserInfo";
// import { useGetMyProfileQuery } from "@/redux/api/userApi";
// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import { useCreateBookingMutation } from "@/redux/api/bookingApi";
// import { space } from "postcss/lib/list";

// const formSchema = z.object({
//   userName: z.string().min(1, { message: "User name must be provided" }),
//   address: z.string().min(1, { message: "Address must be provided" }),
//   contactNumber: z
//     .string()
//     .min(1, { message: "Contact number must be provided" }),
//   bio: z.string().min(1, { message: "Bio must be provided" }),
//   email: z.string().min(1, { message: "Email must be provided" }),
//   profession: z.string().min(1, { message: "Profession must be provided" }),
//   additionalInformation: z
//     .string()
//     .min(1, { message: "Additional information must be provided" }),
//   termsAndCondition: z
//     .string()
//     .min(1, { message: "Terms and conditions must be provided" }),
// });

// const FlatUpdateForm = ({ data,isLoading }: {data:any,isLoading:boolean}) => {
//   const { toast } = useToast();
//   const router = useRouter();
//   const user = useUserInfo();
//   console.log(user);

//   const [createBooking] = useCreateBookingMutation();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       location: "",
//       space: "",
//       rentAmount: "",
//       advanceAmount: "",
//       description: "",
//       amenities: "",
//       bedRooms: "",
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       form.reset({
//         location: data.location || "",
//         space: data.space || "",
//         rentAmount: data.rentAmount || "",
//         advanceAmount: data.advanceAmount || "",
//         description: data.description || "",
//         amenities: data.amenities || "",
//         bedRooms: data.bedRooms || "",
//       });
//     }
//   }, [data, form]);

//   const onSubmit = async (values: any) => {
//     console.log(values);
//     try {
//       const res = await createBooking({ ...values, flatId }).unwrap();

//       if (res?.id) {
//         toast({
//           title: "Flat Request",
//           description: "Your flat share request added successfully",
//         });
//         router.push(`/dashboard/${user?.role}/requested_flats`);
//       }
//     } catch (err: any) {}
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
//               <FormField
//                 control={form.control}
//                 name="location"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Location</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="text"
//                         placeholder="Provide location..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="description"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Description</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="email"
//                         placeholder="provide description..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="rentAmount"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Rent Amount</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="text"
//                         placeholder="Provide rent amount..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="advanceAmount"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Advance Amount</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="text"
//                         placeholder="Provide advance amount..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="space"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Space</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="text"
//                         placeholder="Space..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="amenities"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel> Amenities</FormLabel>
//                     <FormControl>
//                       <Input
//                         required
//                         type="text"
//                         placeholder=" Amenities..."
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="mt-6">
//               <Button className="w-full" type="submit">
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </Form>
//       )}
//     </div>
//   );
// };

// export default FlatUpdateForm;

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
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { toast, useToast } from "../ui/use-toast";
// import {
//   useCreateFlatMutation,
//   useUpdateFlatMutation,
// } from "@/redux/api/flatApi";
// import useUserInfo from "@/hooks/useUserInfo";
// import { useGetMyProfileQuery } from "@/redux/api/userApi";
// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import { useCreateBookingMutation } from "@/redux/api/bookingApi";
// import { Loader2 } from "lucide-react";

// const formSchema = z.object({
//   userName: z.string().min(1, { message: "User name must be provided" }),
//   address: z.string().min(1, { message: "Address must be provided" }),
//   contactNumber: z
//     .string()
//     .min(1, { message: "Contact number must be provided" }),
//   bio: z.string().min(1, { message: "Bio must be provided" }),
//   email: z.string().min(1, { message: "Email must be provided" }),
//   profession: z.string().min(1, { message: "Profession must be provided" }),
//   additionalInformation: z
//     .string()
//     .min(1, { message: "Additional information must be provided" }),
//   termsAndCondition: z
//     .string()
//     .min(1, { message: "Terms and conditions must be provided" }),
// });

// const FlatUpdateForm = ({
//   data,
//   isLoading,
//   onSuccess,
// }: {
//   data: any;
//   isLoading: boolean;
//   onSuccess: () => void;
// }) => {
//   const { toast } = useToast();
//   const router = useRouter();
//   const user = useUserInfo();

//   const [updateFlat, { isLoading: update }] = useUpdateFlatMutation();

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       location: "",
//       space: "",
//       rentAmount: "",
//       advanceAmount: "",
//       description: "",
//       amenities: "",
//       bedRooms: "",
//     },
//   });

//   useEffect(() => {
//     if (data) {
//       form.reset({
//         location: data.location || "",
//         space: data.space || "",
//         rentAmount: data.rentAmount || "",
//         advanceAmount: data.advanceAmount || "",
//         description: data.description || "",
//         amenities: data.amenities || "",
//         bedRooms: data.bedRooms || "",
//       });
//     }
//   }, [data, form]);

//   const onSubmit = async (values: any) => {
//     console.log(values);
//     const updatedData = {
//       id: data?.id,
//       body: values,
//     };
//     try {
//       const res = await updateFlat(updatedData).unwrap();

//       if (res?.id) {
//         toast({
//           title: "Flat update",
//           description: "Your flat updated successfully",
//         });
//         onSuccess();
//       }
//     } catch (err: any) {
//       toast({
//         title: "Error",
//         description: "Something went wrong",
//       });
//     }
//   };

//   return (
//     <Form {...form}>
//       <form
//         id="flat-update-form"
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="w-full"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
//           <FormField
//             control={form.control}
//             name="location"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Location</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Provide location..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Description</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Provide description..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="rentAmount"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Rent Amount</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Provide rent amount..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="advanceAmount"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Advance Amount</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Provide advance amount..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="space"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Space</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Space..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="amenities"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Amenities</FormLabel>
//                 <FormControl>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Amenities..."
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//         <div className="mt-6">
//           <Button className="w-full" type="submit">
//             {update && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//             Submit
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default FlatUpdateForm;



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
import { toast, useToast } from "../ui/use-toast";
import { useCreateFlatMutation, useUpdateFlatMutation } from "@/redux/api/flatApi";
import useUserInfo from "@/hooks/useUserInfo";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useCreateBookingMutation } from "@/redux/api/bookingApi";
import { FlatUpdateFormProps } from "@/types";
import { Loader2 } from "lucide-react";

// const formSchema = z.object({
//   location: z.string().min(1, { message: "Location must be provided" }),
//   description: z.string().min(1, { message: "Description must be provided" }),
//   rentAmount: z.string().min(1, { message: "Rent amount must be provided" }),
//   advanceAmount: z.string().min(1, { message: "Advance amount must be provided" }),
//   space: z.string().min(1, { message: "Space must be provided" }),
//   amenities: z.string().min(1, { message: "Amenities must be provided" }),
//   bedRooms: z.string().min(1, { message: "Bedrooms must be provided" }),
// });

const FlatUpdateForm = ({ data, isLoading, onSuccess, onCancel }:FlatUpdateFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const user = useUserInfo();
  const [updateFlat, { isLoading: update }] = useUpdateFlatMutation();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      space: "",
      rentAmount: "",
      advanceAmount: "",
      description: "",
      amenities: "",
      bedRooms: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        location: data.location || "",
        space: data.space || "",
        rentAmount: data.rentAmount || "",
        advanceAmount: data.advanceAmount || "",
        description: data.description || "",
        amenities: data.amenities || "",
        bedRooms: data.bedRooms || "",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: any) => {

   
        const updatedData = {
          id: data?.id,
          body: values,
        };
    setLoading(true);
    try {
      const res = await updateFlat(updatedData).unwrap();

      if (res?.id) {
        toast({
          title: "Flat Request",
          description: "Your flat updated  successfully",
        });
        onSuccess(); // Close the dialog
     
      }
    } catch (err: any) {
      setSubmitError("Something went wrong. Please try again."); // Set submit error message
      toast({
        title: "Error",
        description: "Something went wrong",
       
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        {submitError && <div className="text-red-500">{submitError}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide location..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="rentAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rent Amount</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide rent amount..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="advanceAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Advance Amount</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide advance amount..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="space"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Space</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide space..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="amenities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amenities</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide amenities..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  
          <FormField
            control={form.control}
            name="bedRooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide bedrooms..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button  type="submit" disabled={update}>
            {update && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
          </div>
      </form>
    </Form>
  );
};

export default FlatUpdateForm;

