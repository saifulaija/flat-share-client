import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignInForm from "@/components/Form/SignInForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center mt-16">
    
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 border p-8 rounded-lg shadow-md">
        <div className="flex-shrink-0 hidden md:block">
          <Image
            src={assets.svg.login}
            width={200}
            height={200}
            alt="Login Illustration"
          />
        </div>
        <div className="w-full max-w-md ">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
