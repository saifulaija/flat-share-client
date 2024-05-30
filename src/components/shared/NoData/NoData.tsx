


import { CircleSlash, Rabbit } from 'lucide-react';
import React from 'react';

const NoData = () => {
  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="flex flex-col items-center justify-center text-center  shadow rounded-lg p-6">
        <div className="mb-4">
          <Rabbit className="w-16 h-16 text-gray-500" />
        </div>
        <div className="text-lg text-gray-700">No data found</div>
      </div>
    </div>
  );
};

export default NoData;

