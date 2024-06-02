"use client";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./PageHeader";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../../ui/button";

import useUserInfo from "@/hooks/useUserInfo";

import assets from "@/assets";
import Image from "next/image";

export const Hero = () => {
  const user = useUserInfo();

  const handleFlatShareClick = () => {
    if (!user?.userId) {
      const confirmLogin = window.confirm(
        "You need to log in first. Would you like to go to the login page?"
      );
      if (confirmLogin) {
        window.location.href = "/login";
      }
    } else {
      // If user is already logged in, proceed to blog page
      window.location.href = `/dashboard/${user?.role}/flats`;
    }
  };

  return (
    <div className=" relative container">
      <PageHeader>
        <div className="flex">
          <span className="flex items-center gap-2 font-semibold text-foreground">
            <Image src={assets.svg.logo} width={40} height={40} alt="logo" />
            <span className="text-xl md:text-2xl">ShareNest</span>
          </span>
        </div>
        <PageHeaderHeading className="hidden md:block tracking-wide">
          Find Your Perfect Flat Share
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">
          {" "}
          Find Your Perfect Flat Share
        </PageHeaderHeading>
        <PageHeaderDescription>
          Discover amazing places to live with friendly roommates. Affordable,
          verified, and easy to book.
        </PageHeaderDescription>
        <PageActions>
          <Button
            onClick={handleFlatShareClick}
            className={cn(buttonVariants(), "rounded-[6px]")}
          >
            Share Your Flat
          </Button>
        </PageActions>
      </PageHeader>
      <video className="rounded-xl md:-mt-14" autoPlay muted loop>
        <source src="/content/new-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
