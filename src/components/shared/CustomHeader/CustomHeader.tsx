


import React from 'react';

type TProps = {
  title: string;
};

const CustomHeader = ({ title }: TProps) => {
  return (
    <div className="flex justify-center items-center my-6">
      <p className="relative text-2xl md:text-3xl font-bold text-center leading-tight">
      <span className="inline-block px-2 py-1 bg-primary text-transparent bg-clip-text">
      {title}
    </span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-teal-900 rounded"></span>
      </p>
    </div>
  );
};

export default CustomHeader;


