





"use client"

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import DeleteFlat from "./deleteFlat";

// This type is used to define the shape of our data.
export type Flat = {
  id: string;
  location: string;
  rentAmount: string;
  advanceAmount: string;
  space: string;
  image: { id: string; url: string; flatId: string }[];
  created: string;
};

export const columns: ColumnDef<Flat>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const images = row.original.image;
      const profilePhoto = images.length > 0 ? images[0].url : '/logo';
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

//   {
//     id: "actions",
//     cell: ({ row }) => {
//       const payment = row.original
 
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <MoreHorizontal className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },



  // Uncomment and implement these if you need user status and role change functionality
  {
    id: "statusActions",
    header: "Action",
    cell: ({ row }) => {
      const flat = row.original;
      return <DeleteFlat flatId={flat.id} />;
    },
  },


  // {
  //   id: "roleActions",
  //   header: "Change Role",
  //   cell: ({ row }) => {
  //     const user = row.original;
  //     return <UpdateUserRole userId={user.id} currentStatus={user.role} />;
  //   },
  // },
];

