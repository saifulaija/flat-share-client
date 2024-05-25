'use client'

import { formateDate, formateMoney } from "@/utils/common";
import { Clock, DollarSign, LocateIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import { useDeleteFlatMutation } from "@/redux/api/flatApi";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
// import { useToast } from "../ui/use-toast";


 const MyFlatCard = ({ item }: any) => {
  const {toast}=useToast()
  const [deleteFlat,{isLoading}]=useDeleteFlatMutation()
  const handleDelete = async (id:string) => {
   try {
    const res=await deleteFlat(id).unwrap();
    if(res?.id){
      toast({
        title:'Flat Delete',
        description:'Flat deleted successfully'
      })

    }
   } catch (error) {
    
   }
   
  };

  return (
    <article className="flex justify-between items-center gap-3 border rounded-lg p-5 hover:bg-muted/60 ">
      <Image
        src={item?.image[0].url || "logo"}
        alt="image"
        width={100}
        height={80}
        className="self-center rounded-md"
      />
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <LocateIcon size={16} className="shrink-0" />
          {item.location}
        </p>
      </div>
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          {formateMoney(item.rentAmount)}
        </p>
      </div>
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <p>Advance: </p>
          {formateMoney(item.rentAmount)}
        </p>
      </div>

      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <Clock size={16} className="shrink-0" />
          {formateDate(item?.createdAt)}
        </p>
      </div>
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          {formateDate(item?.createdAt)}
        </p>
      </div>

      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
        <Link href={`/dashboard/user/shared-flats/edit/${item.id}`}>  <Button variant="outline">Edit</Button></Link>

          <AlertDialog>
            <AlertDialogTrigger className="border px-4 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
              Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your flat and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleDelete(item.id)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </p>
      </div>
    </article>
  );
};

export default MyFlatCard;
