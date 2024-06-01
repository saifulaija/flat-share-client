import { CircleSlash, Rabbit, Rat } from "lucide-react";
import React from "react";

const NoData = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="flex flex-col items-center justify-center text-center  shadow rounded-lg p-6">
        <div className="mb-4">
          <Rat size={100} className="text-primary" strokeWidth={0.5} />
        </div>
        <div className="text-lg ">No data found</div>
      </div>
    </div>
  );
};

export default NoData;
