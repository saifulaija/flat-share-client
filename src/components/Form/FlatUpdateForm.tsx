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

const FlatUpdateForm = ({ data  }: FlatUpdateFormProps) => {
  const { toast } = useToast();
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
          <Button type="submit" disabled={update} className="w-full">
            Submit
            {update && <Loader2 className="ml-6 h-4 w-4 animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FlatUpdateForm;
