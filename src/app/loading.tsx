import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-primary"></div>
    </div>
  );
};

export default Loader;
