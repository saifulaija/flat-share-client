"use client";

import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  HomeIcon,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useEffect, useState } from "react";

import { getUserInfo } from "@/services/authServics";
import { UserRole } from "@/types";
import { drawerItems } from "./SidebarItems";
import SidebarLink from "./SidebarLink";
import AuthDropdown from "../shared/Header/AuthDropdown";
import { useGetSingleUserQuery } from "@/redux/api/profileApi";
import assets from "@/assets";
import Image from "next/image";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { data, isLoading } = useGetSingleUserQuery();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  const sidebarItems = drawerItems(userRole as UserRole);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              {/* <Package2 className="h-6 w-6" /> */}
              <Image src={assets.svg.logo} width={30} height={30} alt="logo" />
              <span className="tracking-wide">Share<span className="text-primary text-xl">N</span>est</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {sidebarItems.map((item, index) => (
                <SidebarLink key={index} item={item} />
              ))}
            </nav>

          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className={`flex h-14 items-center fixed top-0 left-0 md:left-[280px] right-0 z-50 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ${scrolled ? "bg-opacity-90 border-b backdrop-blur-lg" : ""
            }`}
        >
          <Sheet>
            <SheetTrigger asChild >
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >

                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>

              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-foreground"
              >
                {/* <Package2 className="h-6 w-6" /> */}
                <Image
                  src={assets.svg.logo}
                  width={30}
                  height={30}
                  alt="logo"
                />
                <span className="tracking-wide">
                  Share<span className="text-primary text-xl">N</span>est
                </span>
              </Link>
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarItems.map((item, index) => (
                  <SidebarLink key={index} item={item} />
                ))}
              </nav>

            </SheetContent>

          </Sheet>
          <div className="w-full flex-1">
            <div className="text-muted-foreground">
              <p className="text-lg font-semibold">
                Welcome{" "}
                <span className="italic text-primary">
                  {data?.userName ? ` ${data.userName}` : "Guest"}
                </span>
              </p>
            </div>
          </div>
          <AuthDropdown />
        </header>
        <main className="flex flex-1 flex-col gap-4  lg:gap-6 py-16 md:px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
