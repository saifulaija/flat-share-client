"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import DeleteFlat from "./deleteFlat";
import MyDialog from "@/components/ShadCn/MyDialog";
import { Button } from "@/components/ui/button";
import FlatUpdateForm from "@/components/Form/FlatUpdateForm";

// This type is used to define the shape of our data.
export type Flat = {
  id: string;
  location: string;
  rentAmount: string;
  advanceAmount: string;
  bedRooms: string;
  space: string;
  amenities:string;
  description:string;
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
          width={70}
          height={70}
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
  },
  {
    accessorKey: "advanceAmount",
    header: "Advance Amount",
  },
  {
    accessorKey: "space",
    header: "Space",
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
        <div className="my-10">
          <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
            <FlatUpdateForm data={flat} />
          </MyDialog>
        </div>
      );
    },
  },
];
