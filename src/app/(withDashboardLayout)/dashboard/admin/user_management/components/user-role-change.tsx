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

import { useToast } from "@/components/ui/use-toast";
import { useUpdateUserMutation } from "@/redux/api/userApi";
import { RowSelection } from "@tanstack/react-table";

interface UpdateUserStatusProps {
  userId: string;
  currentStatus: "ADMIN" | "USER";
}

const UpdateUserRole: React.FC<UpdateUserStatusProps> = ({
  userId,
  currentStatus,
}) => {
  const { toast } = useToast();
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleStatusChange = async (newStatus: "ADMIN" | "USER") => {
    const updateData = {
      id: userId,
      body: {
        role: newStatus,
      },
    };

    try {
      const res = await updateUser(updateData).unwrap();

      if (res.id) {
        toast({
          title: "Success",
          description: "User status changed successfully",
        });
      }
    } catch (error: any) {
      toast({
        title: "Success",
        description: error?.message,
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleStatusChange("ADMIN")}>
          Set as Admin
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleStatusChange("USER")}>
          Set as User
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdateUserRole;
