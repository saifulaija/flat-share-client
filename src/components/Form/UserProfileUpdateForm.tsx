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

import { useToast } from "../ui/use-toast";
import { useUpdateFlatMutation } from "@/redux/api/flatApi";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FlatUpdateFormProps } from "@/types";
import { Loader2 } from "lucide-react";
import { IUser } from "@/types/user";
import { useUpdateUserProfileMutation } from "@/redux/api/profileApi";
interface UserProfileInformationProps {
    data: IUser;
  }
const UserProfileUpdateForm: React.FC<UserProfileInformationProps> = ({ data }) => {
  const { toast } = useToast();
  const [updateProfile, { isLoading: update }] = useUpdateUserProfileMutation();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      address: "",
      bio: "",
      profession: "",
      contactNumber: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        userName: data.userName || "",
        email: data.email || "",
        address: data.address || "",
        contactNumber: data.contactNumber || "",
        profession: data.profession || "",
        bio: data.bio || "",
      });
    }
  }, [data, form]);

  const onSubmit = async (values: any) => {
    const updatedData = {
     
      body: values,
    };
    setLoading(true);
    try {
      const res = await updateProfile(updatedData).unwrap();

      if (res?.id) {
        toast({
          title: "Flat Request",
          description: "Your flat updated  successfully",
        });
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
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="text"
                    placeholder="Provide userName..."
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
                    type="text"
                    placeholder="Provide email..."
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
                    placeholder="Provide contact number..."
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
                    placeholder="Provide address..."
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
                    placeholder="Provide profession..."
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
                    placeholder="Provide biography..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6 flex justify-between">
          <Button type="submit" disabled={update} className="w-full">
          {update && <Loader2 className="ml-6 h-4 w-4 animate-spin" />}
            {update ? "Updating..." : "Update"}
           
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserProfileUpdateForm;
