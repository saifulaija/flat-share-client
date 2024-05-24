// pages/404.tsx
import Link from "next/link";

import { HomeIcon, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Custom404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-center p-4">
      <StickyNote className="w-16 h-16 text-gray-500 mb-4" />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button size="lg" className=" text-white flex items-center">
          <HomeIcon className="w-5 h-5 mr-2" />
          Go to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default Custom404;
