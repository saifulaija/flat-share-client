"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import DeleteFlat from "./deleteFlat";
import MyDialog from "@/components/ShadCn/MyDialog";
import { Button } from "@/components/ui/button";
import FlatUpdateForm from "@/components/Form/FlatUpdateForm";
import { formateDate, formateMoney } from "@/utils/common";

export type Flat = {
  id: string;
  location: string;
  rentAmount: string;
  advanceAmount: string;
  bedRooms: string;
  space: string;
  amenities: string;
  description: string;
  createdAt:Date;
  image: { id: string; url: string; flatId: string }[];
  created: string;
};

export const columns: ColumnDef<Flat>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const images = row.original.image;
      const profilePhoto = images.length > 0 ? images[0].url : "/logo";
      return (
        <Image
          src={profilePhoto}
          width={40}
          height={40}
          alt="flat image"
          className="self-center rounded-md"
        />
      );
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "rentAmount",
    header: "Rent Amount",
    cell: ({ row }) => {
      const rentAmount = row.original.rentAmount;
      return <div>{formateMoney(rentAmount)}</div>;
    },
  },
  {
    accessorKey: "advanceAmount",
    header: "Advance Amount",
    cell: ({ row }) => {
      const advanceAmount = row.original.advanceAmount;
      return <div>{formateMoney(advanceAmount)}</div>;
    },
  },
 
  {
    accessorKey: "space",
    header:"Space",
    cell: ({ row }) => {
      const space = row.original.space;
      return <div>{space} sq ft</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header:"Created At",
    cell: ({ row }) => {
      const lastSeen = row.original.createdAt;
      return <div>{formateDate(lastSeen)}</div>;
    },
  },

  {
    id: "statusActions",
    header: "Action",
    cell: ({ row }) => {
      const flat = row.original;
      return <DeleteFlat flatId={flat.id} />;
    },
  },

  {
    id: "editActions",
    header: "Action",
    cell: ({ row }) => {
      const flat = row.original;
      return (
        <div>
          <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
            <FlatUpdateForm data={flat} />
          </MyDialog>
        </div>
      );
    },
  },
];
