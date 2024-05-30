"use client";
import { MyAvatar } from "@/components/ShadCn/MyAvater";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import useUserInfo from "@/hooks/useUserInfo";
import { useGetSingleUserQuery } from "@/redux/api/profileApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthDropdown = () => {
  const { toast } = useToast();
  const user = useUserInfo();

  const { data } = useGetSingleUserQuery();

  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
    toast({ title: "Logout", description: "user logout successfully" });
  };

  return (
    <>
      {user?.userId ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              {data?.id ? (
                <MyAvatar url={data?.profilePhoto} alt="image" />
              ) : (
                <CircleUser className="h-5 w-5" />
              )}

              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/dashboard/${user.role}/profile`}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">
          {" "}
          <Button variant="outline">Login</Button>
        </Link>
      )}
    </>
  );
};

export default AuthDropdown;
