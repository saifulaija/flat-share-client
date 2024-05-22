import { USER_ROLE } from "@/constants/role";
import {  ISidebarItem, UserRole } from "@/types";

import { UserCog } from "lucide-react";

import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    Container,
    KeySquare,
    FileKey
  } from "lucide-react";

export const drawerItems = (role: UserRole): ISidebarItem[] => {
  const roleMenus: ISidebarItem[] = [];
  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: UserCog,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: FileKey,
    },
  ];
  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Home,
        },
        {
          title: "User Management",
          path: `${role}/user_management`,
          icon: Users,
        },
        {
          title: "Flat Management",
          path: `${role}/flat_management`,
          icon: Container,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: UserCog,
        },
        {
          title: "Flats",
          path: `${role}/flats`,
          icon: UserCog,
        },
        {
          title: "Request Flats",
          path: `${role}/requested_flats`,
          icon: UserCog,
        }
      );

      break;
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
