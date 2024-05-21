import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignUpForm from "@/components/Form/SignUpForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[cal(100vh-60px)] bg-gray-100 p-1">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-lg shadow-md">
        <div className="w-full max-w-md">
          <SignUpForm />
        </div>

        <div className="flex-shrink-0">
          <Image
            src={assets.svg.login}
            width={200}
            height={200}
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
