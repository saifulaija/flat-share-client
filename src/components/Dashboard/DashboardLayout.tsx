"use client";

import Link from "next/link";
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

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [userRole, setUserRole] = useState("");
  const [scrolled, setScrolled] = useState(false);

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
              <Package2 className="h-6 w-6" />
              <span>ShareNest</span>
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
          <div className="mt-auto p-4">
            <p>Settings</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header
          className={`flex h-14 items-center fixed top-0 left-0 md:left-[280px] right-0 z-50 gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ${
            scrolled ? "bg-opacity-90 border-b backdrop-blur-lg" : ""
          }`}
        >
          <Sheet>
            <SheetTrigger asChild>
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
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {sidebarItems.map((item, index) => (
                  <SidebarLink key={index} item={item} />
                ))}
              </nav>
              <div className="mt-auto p-4">
                <p>Settings</p>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <AuthDropdown />
        </header>
        <main className="flex flex-1 flex-col gap-4  lg:gap-6 p-16">
          {children}
        </main>
      </div>
    </div>
  );
}
