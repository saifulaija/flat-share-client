import React from 'react';

type TProps = {
  title: string;
};

const CustomHeader = ({ title }: TProps) => {
  return (
    <div className="flex justify-center items-center my-4">
      <h3 className="relative text-2xl md:text-4xl font-semibold  text-center font-serif">
        <span className="inline-block border-b-4 border-primary">{title}</span>
      </h3>
    </div>
  );
};

export default CustomHeader;
