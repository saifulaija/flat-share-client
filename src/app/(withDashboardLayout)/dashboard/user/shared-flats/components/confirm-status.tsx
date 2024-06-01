"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import { useUpdateBookingMutation } from "@/redux/api/bookingApi";
import { useToast } from "@/components/ui/use-toast";

interface ConfirmStatusProps {
  bookingId: string;
  flatId: string;
  currentStatus: "PENDING" | "REJECTED" | "BOOKED";
  disableChange: boolean;
  onStatusChange: (
    bookingId: string,
    newStatus: "PENDING" | "REJECTED" | "BOOKED"
  ) => void;
}

const ConfirmStatus: React.FC<ConfirmStatusProps> = ({
  bookingId,
  currentStatus,
  disableChange,
  onStatusChange,
}) => {
  const { toast } = useToast();
  const [updateBooking, { isLoading }] = useUpdateBookingMutation();

  const handleStatusChange = async (
    newStatus: "PENDING" | "REJECTED" | "BOOKED"
  ) => {
    const updateData = {
      id: bookingId,
      body: {
        status: newStatus,
      },
    };

    try {
      const res = await updateBooking(updateData).unwrap();

      if (res.id) {
        toast({
          title: "Success",
          description: "User status changed successfully",
        });
        onStatusChange(bookingId, newStatus);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          disabled={disableChange}
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleStatusChange("REJECTED")}
          disabled={disableChange}
        >
          Rejected
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleStatusChange("BOOKED")}
          disabled={disableChange}
        >
          Confirm
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ConfirmStatus;
