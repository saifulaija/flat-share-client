import { CircleSlash, Icon } from 'lucide-react';
import React from 'react';


const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-4">
        <Icon as={CircleSlash} className="w-12 h-12 text-gray-400" />
      </div>
      <div className="text-lg text-gray-600">No data found</div>
    </div>
  );
};

export default NoData;
