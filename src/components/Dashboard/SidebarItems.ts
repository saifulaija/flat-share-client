import { USER_ROLE } from "@/constants/role";
import {  ISidebarItem, UserRole } from "@/types";

import { UserCog } from "lucide-react";

import {
  
    Home,
   
    Users,
    Container,
   PanelsTopLeft,
   Columns4,
    FileKey,
    Cuboid,
    Album
  } from "lucide-react";

export const drawerItems = (role: UserRole): ISidebarItem[] => {
  const roleMenus: ISidebarItem[] = [];
  const defaultMenus = [
   
    {
      title: "Change Password",
      path: `change-password`,
      icon: FileKey,
    },
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: UserCog,
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
          icon: Columns4,
        },
        {
          title: "Add Flats",
          path: `${role}/flats`,
          icon: PanelsTopLeft,
        },
        {
          title: "Shared Flats",
          path: `${role}/shared-flats`,
          icon: Cuboid,
        },
        {
          title: "Request Flats",
          path: `${role}/requested_flats`,
          icon: Album,
        }
      );

      break;
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
