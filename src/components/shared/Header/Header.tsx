"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignJustify, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AuthDropdown from "./AuthDropdown";
import { ModeToggle } from "./ModeToggle";
import useUserInfo from "@/hooks/useUserInfo";

const Header = () => {
  const pathname = usePathname();
  const user = useUserInfo();
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

  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "About Us", path: "/about-us", show: true },
    { label: "Dashboard", path: `/dashboard/${user?.role}`, show: !!user },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
          : "bg-background/70"
      }`}
    >
      <div className="container mx-auto px-4">
        <header className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden">
                  <AlignJustify className="h-6 w-6" />
                  <span className="sr-only">Toggle Navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold text-foreground"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">ShareNest</span>
                </Link>
                <div className="grid gap-2 py-6">
                  {menuItems.map((menuItem) =>
                    menuItem.show ? (
                      <Link
                        href={menuItem.path}
                        key={menuItem.label}
                        className={`link ${
                          pathname === menuItem.path
                            ? "border-b-2 border-blue-600"
                            : ""
                        } text-foreground`}
                      >
                        {menuItem.label}
                      </Link>
                    ) : null
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-foreground"
              >
                <Package2 className="h-6 w-6" />
                <span className="">ShareNest</span>
              </Link>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link
                  href={menuItem.path}
                  key={menuItem.label}
                  className={`group inline-flex h-9 w-max items-center rounded-md px-4 py-2 text-sm font-medium ${
                    pathname === menuItem.path
                      ? "border-b-2 border-blue-600"
                      : ""
                  } text-foreground`}
                >
                  {menuItem.label}
                </Link>
              ) : null
            )}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <AuthDropdown />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
