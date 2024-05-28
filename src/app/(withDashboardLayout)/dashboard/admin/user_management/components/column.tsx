"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import UpdateUserStatus from "./user-status"
import UpdateUserRole from "./user-role-change"

// This type is used to define the shape of our data.
export type User = {
  id: string
  userName: string
  email: string
  status: "ACTIVE" | "DEACTIVE"
  profilePhoto: string
  role: "ADMIN" | "USER"
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "profilePhoto",
    header: "Image",
    cell: ({ row }) => {
      const profilePhoto = row.getValue<string>("profilePhoto");
      return (
        <Image
          src={profilePhoto || '/logo'}
          width={70}
          height={70}
          alt="profilePhoto"
          className="self-center rounded-md"
        />
      );
    },
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "statusActions",
    header: "Change Status",
    cell: ({ row }) => {
      const user = row.original;
      return <UpdateUserStatus userId={user.id} currentStatus={user.status} />;
    },
  },
  {
    id: "roleActions",
    header: "Change Role",
    cell: ({ row }) => {
      const user = row.original;
      return <UpdateUserRole userId={user.id} currentStatus={user.role} />;
    },
  },
];
