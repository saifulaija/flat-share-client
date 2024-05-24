import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { DollarSign, MapPin } from 'lucide-react';
import Link from 'next/link';
import useUserInfo from '@/hooks/useUserInfo';



const  MyFlatCard = ({ flat }:any ) => {
  const user =useUserInfo();
  // const user = getUserInfo()
  console.log(user)
  // Function to truncate the description to show only 20 words
  const truncateDescription = (description:string) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };



  return (
    <Card className='shadow-xl w-[350px]  h-auto overflow-hidden group'>
      <CardHeader>
        <Image
        className='group-hover:scale-90   group-hover:duration-300 group-hover:transition'
          src={flat?.image[0]?.url}
          width={200}
          height={150}
          alt="image"
          layout="responsive"
        />
        <div className="flex-between">
        <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1 text-gray-600" />
              <p className="text-gray-600">{flat.location}</p>
            </div>
            {/* Lucide Icon for Price */}
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1 text-gray-600" />
              <p className="text-gray-600">{flat.rentAmount}</p>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Display truncated description */}
        <p>{truncateDescription(flat?.description)}</p>
        <p>Rooms:{flat?.bedRooms}</p>
      </CardContent>
      <CardFooter className='flex-between'>
    
        
         
          
         <Link href={`/flats/details/${flat?.id}`}>  <Button>Details</Button></Link>
         <Button>Delete</Button>
        
         
    
      </CardFooter>
    </Card>
  );
};

export default MyFlatCard;
