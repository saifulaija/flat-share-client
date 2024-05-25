import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthDropdown = () => {
  const{toast}=useToast()
  const user = useUserInfo();

  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
    toast({title:'Logout',description:'user logout successfully'})
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />

          {user && user?.userId ? (
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          ) : (
            <Link href="/login">
              <DropdownMenuItem>Login</DropdownMenuItem>
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthDropdown;
