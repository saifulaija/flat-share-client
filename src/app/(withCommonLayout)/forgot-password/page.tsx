import { Metadata } from "next";
import React from "react";
import ForgotPassword from "./components/ForgotPassword";
export const metadata: Metadata = {
  title: "ShareNest || forgot-password",
  description: "Generated by create ShareNest",
};
const ForgotPasswordPage = () => {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;
