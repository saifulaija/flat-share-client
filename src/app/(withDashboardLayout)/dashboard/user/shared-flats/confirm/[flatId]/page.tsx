"use client";

import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { Flat } from "@/types/requestFlat";

import { useState, useMemo } from "react";
import { columns as defaultColumns } from "../../components/columns";
import ConfirmStatus from "../../components/confirm-status";
import { RequestFlatDataTable } from "../../components/requestDataTable";
type TParams = {
  params: {
    flatId: string;
  };
};

const ConfirmRequestPage = ({ params }: TParams) => {
  const id = params.flatId;
  const { data, isLoading } = useGetSingleFlatQuery(id);
  const flatData: Flat = data;

  const [bookedRowId, setBookedRowId] = useState<string | null>(null);

  const handleStatusChange = (
    bookingId: string,
    newStatus: "PENDING" | "REJECTED" | "BOOKED"
  ) => {
    if (newStatus === "BOOKED") {
      setBookedRowId(bookingId);
    } else {
      // Handle other status changes
      if (bookingId === bookedRowId) {
        setBookedRowId(null);
      }
    }
  };

  const columns = useMemo(
    () =>
      defaultColumns.map((col) => {
        if (col.id === "statusActions") {
          return {
            ...col,
            cell: ({ row }: any) => {
              const booking = row.original.booking;
              const disableChange =
                bookedRowId !== null && booking.id !== bookedRowId;
              return (
                <ConfirmStatus
                  bookingId={booking.id}
                  currentStatus={booking.status}
                  flatId={booking.flatId}
                  disableChange={disableChange}
                  onStatusChange={handleStatusChange}
                />
              );
            },
          };
        }
        return col;
      }),
    [bookedRowId]
  );

  return (
    <section className="py-5">
      <div>
        <h3 className="text-xl md:text-3xl font-bold mb-4">
          All Requested User
        </h3>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <RequestFlatDataTable
            data={flatData.Request_Flat}
            columns={columns}
          />
        )}
      </div>
    </section>
  );
};

export default ConfirmRequestPage;
