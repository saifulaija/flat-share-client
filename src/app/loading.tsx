import { Loader as LucideLoader } from "lucide-react";
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LucideLoader size={35} className='animate-spin text-primary'/>
    </div>
  );
};

export default Loader;
