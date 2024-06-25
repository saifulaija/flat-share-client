import { Loader2 } from 'lucide-react';
import React from 'react';

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    
<Loader2 size={40} className='animate-spin text-primary'/>
  
    </div>
  );
};

export default CustomLoader;
