import FlatUpdateForm from "@/components/Form/FlatUpdateForm";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { UpdateFlatDialogProps } from "@/types";

  
  const UpdateFlatDialog = ({ data, isLoading, onConfirm, onCancel }:UpdateFlatDialogProps) => (
    <AlertDialog>
      <AlertDialogTrigger className="border w-full px-4 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
        Edit Flat
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Flat Details</AlertDialogTitle>
          <AlertDialogDescription>
            <FlatUpdateForm data={data} isLoading={isLoading} onSuccess={onConfirm} onCancel={onCancel} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        {/* <AlertDialogFooter className="flex justify-between">
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={onCancel}>Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button type="submit" form="flat-update-form">Submit</Button>
          </AlertDialogAction>
        </AlertDialogFooter> */}
      </AlertDialogContent>
    </AlertDialog>
  );
  
  export default UpdateFlatDialog;
  