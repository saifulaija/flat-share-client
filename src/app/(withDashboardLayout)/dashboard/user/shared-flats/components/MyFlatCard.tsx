"use client";

import { formateDate, formateMoney } from "@/utils/common";
import { Clock, DollarSign, LocateIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useDeleteFlatMutation } from "@/redux/api/flatApi";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import MyAlertDialog from "@/components/ShadCn/MyAlertDialog";
// import { useToast } from "../ui/use-toast";

const MyFlatCard = ({ item }: any) => {
  const { toast } = useToast();
  const [deleteFlat, { isLoading }] = useDeleteFlatMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFlat(id).unwrap();
      if (res?.id) {
        toast({
          title: "Flat Delete",
          description: "Flat deleted successfully",
        });
      }
    } catch (error) {}
  };

  return (
    <article className="flex flex-col md:flex-row justify-between   items-center gap-3 border rounded-lg p-2">
      <Image
        src={item?.image[0].url || "logo"}
        alt="image"
        width={100}
        height={80}
        className="self-center rounded-md"
      />
      <div className="text-muted-foreground ">
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
          <span>FlatRequest:</span>
          {item?.Request_Flat?.length}
        </p>
      </div>

      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <Link href={`/dashboard/user/shared-flats/edit/${item.id}`}>
           
            <Button variant="outline">Edit</Button>
          </Link>

          <MyAlertDialog
            title="Confirm Deletion"
            description="Are you sure you want to delete this item? This action cannot be undone."
            onConfirm={() => handleDelete(item.id)}
          />
        </p>
      </div>
    </article>

 

  );
};

export default MyFlatCard;


