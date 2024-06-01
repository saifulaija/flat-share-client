import { ColumnDef } from "@tanstack/react-table";
import { RequestFlat } from "@/types/requestFlat";
import MyBadge from "@/components/shared/MyBadge/MyBadge";
import { formateDate } from "@/utils/common";
import ConfirmStatus from "./confirm-status";

export const columns: ColumnDef<RequestFlat>[] = [
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      const address = row.original.address;
      return <p>{address}</p>;
    },
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
    cell: ({ row }) => {
      const contactNumber = row.original.contactNumber;
      return <p>{contactNumber}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.booking.status;
      return <MyBadge>{status}</MyBadge>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt as unknown as Date;
      return <div>{formateDate(createdAt)}</div>;
    },
  },
  {
    id: "statusActions",
    header: "Change Status",
    cell: ({ row }) => {
      const booking = row.original.booking;
      return (
        <ConfirmStatus
          bookingId={booking.id}
          currentStatus={booking.status}
          flatId={booking.flatId}
          disableChange={false}
          onStatusChange={() => {}}
        />
      );
    },
  },
];
