"use client";

import { useToast } from "@/components/ui/use-toast";

import { useDeleteFlatMutation } from "@/redux/api/flatApi";

import MyAlertDialog from "@/components/ShadCn/MyAlertDialog";

interface DeleteFlatProps {
  flatId: string;
}

const DeleteFlat: React.FC<DeleteFlatProps> = ({ flatId }) => {
  const { toast } = useToast();
  const [deleteFlat, { isLoading }] = useDeleteFlatMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteFlat(flatId).unwrap();

      if (res.id) {
        toast({
          title: "Success",
          description: "Flat deleted successfully",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
      });
    }
  };

  return (
    <>
      <MyAlertDialog
        title="Confirm Deletion"
        description="Are you sure you want to delete this item? This action cannot be undone."
        onConfirm={handleDelete}
      />
    </>
  );
};

export default DeleteFlat;
