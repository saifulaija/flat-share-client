"use client";

import assets from "@/assets";
import useUserInfo from "@/hooks/useUserInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const user = useUserInfo();

  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleShareFlat = () => {
    router.push(`/dashboard/${user?.role}/flats`);
  };

  return (
    <div className="w-full relative">
      <Image
        src={assets.images.banner}
        width={0}
        height={0}
        sizes="100vw"
        alt="banner"
        placeholder="blur"
        style={{ width: "100%", height: "auto" }}
      />
      {/* Container for centering the button */}
      <div className="absolute inset-0 flex justify-center items-center mt-8 md:mt-0">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Share Your Flat</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you want to share flat?</AlertDialogTitle>
              <AlertDialogDescription>
                You need to login at first. Would you like to go to the login
                page?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleLogin}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Hero;
