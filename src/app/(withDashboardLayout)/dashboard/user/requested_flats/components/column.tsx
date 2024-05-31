"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import MyDialog from "@/components/ShadCn/MyDialog";
import { Button } from "@/components/ui/button";
import FlatUpdateForm from "@/components/Form/FlatUpdateForm";
import { formateDate, formateMoney } from "@/utils/common";
import MyBadge from "@/components/shared/MyBadge/MyBadge";

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


export type TRequestFlat={
    id:string,
    status:'PENDING' | "REJECT" | 'APPROVE'
    flat:Flat,
    createdAt:Date
}

export const columns: ColumnDef<TRequestFlat>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const images = row.original.flat.image;
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
    cell: ({ row }) => {
        const locationNew = row.original.flat.location;
     
        return <p>{locationNew}</p>
      },
  },
  {
    accessorKey: "rentAmount",
    header: "Rent Amount",
    cell: ({ row }) => {
      const rentAmount = row.original.flat.rentAmount;
      return <div>{formateMoney(rentAmount)}</div>;
    },
  },
  {
    accessorKey: "rentAmount",
    header: "Rent Amount",
    cell: ({ row }) => {
      const status = row.original.status;
      return <div>
       <MyBadge>
        {status}
       </MyBadge>
      </div>;
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

//   {
//     id: "statusActions",
//     header: "Action",
//     cell: ({ row }) => {
//       const flat = row.original;
//       return <DeleteFlat flatId={flat.id} />;
//     },
//   },

//   {
//     id: "editActions",
//     header: "Action",
//     cell: ({ row }) => {
//       const flat = row.original;
//       return (
//         <div className="my-10">
//           <MyDialog triggerButton={<Button variant="outline">Edit</Button>}>
//             <FlatUpdateForm data={flat} />
//           </MyDialog>
//         </div>
//       );
//     },
//   },
];
