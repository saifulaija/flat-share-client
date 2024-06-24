"use client";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./PageHeader";
import { Button, buttonVariants } from "../../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import useUserInfo from "@/hooks/useUserInfo";

import assets from "@/assets";
import Image from "next/image";

import { useRouter } from "next/navigation";

export const Hero = () => {
  const user = useUserInfo();
  console.log(user)
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }
  const handleShareFlat = () => {
    router.push(`/dashboard/${user?.role}/flats`)
  }

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

          {
            user?.userId ? <Button disabled={user.role === 'admin'} onClick={handleShareFlat}>Share Your Flat</Button> : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Share Your Flat</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you want to share flat?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You need to login at first. Would you like to go to the login page?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogin}>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )
          }

        </PageActions>
      </PageHeader>
      <video className="rounded-xl md:-mt-14" autoPlay muted loop>
        <source src="/content/new-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
