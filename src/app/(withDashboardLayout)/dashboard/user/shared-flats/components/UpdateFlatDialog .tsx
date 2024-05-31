import FlatUpdateForm from "@/components/Form/FlatUpdateForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { UpdateFlatDialogProps } from "@/types";

const UpdateFlatDialog = ({ data }: UpdateFlatDialogProps) => (
  <AlertDialog>
    <AlertDialogTrigger className="border w-full px-4 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
      Edit Flat
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Edit Flat Details</AlertDialogTitle>
        <AlertDialogDescription>
          <FlatUpdateForm data={data} />
        </AlertDialogDescription>
      </AlertDialogHeader>
    </AlertDialogContent>
  </AlertDialog>
);

export default UpdateFlatDialog;
