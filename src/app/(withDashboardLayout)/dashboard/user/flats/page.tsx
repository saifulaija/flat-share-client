"use client"
import { motion } from "framer-motion";

import AddFlatForm from "@/components/Form/AddFlatForm";
import React from "react";

const FlatSharePage = () => {
  return (
    <motion.div className="mt-10 flex justify-center items-center w-full mx-auto shadow-md rounded-sm"  initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ ease: "easeInOut", duration: 1, delay: 1 }}>
      <div className="w-full max-w-[1000px]">
        <p className="text-center font-semibold text-xl uppercase tracking-widest pb-10">
          Add Your flat
        </p>

        <AddFlatForm />
      </div>
    </motion.div>
  );
};

export default FlatSharePage;
