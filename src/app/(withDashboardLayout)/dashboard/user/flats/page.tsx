"use client";

import AddFlatForm from "@/components/Form/AddFlatForm";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";
import React from "react";

const FlatSharePage = () => {
  return (
    <div className="mt-10 flex justify-center items-center w-full mx-auto shadow-md rounded-sm">
      <div className="w-full max-w-[1000px]">
       <CustomHeader title="Add Flat"/>

        <AddFlatForm />
      </div>
    </div>
  );
};

export default FlatSharePage;
