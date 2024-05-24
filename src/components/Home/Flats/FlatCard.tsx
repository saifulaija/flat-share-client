import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IFlat } from "@/types/flat";
import Image from "next/image";
import { DollarSign, MapPin } from 'lucide-react';
import Link from 'next/link';
import useUserInfo from '@/hooks/useUserInfo';
import { userInfo } from 'os';
import { getUserInfo } from '@/services/authServics';

const FlatCard = ({ flat }: IFlat) => {
  const user =useUserInfo();
  // const user = getUserInfo()
  console.log(user)
  // Function to truncate the description to show only 20 words
  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 20) {
      return words.slice(0, 10).join(' ') + '...';
    }
    return description;
  };



  return (
    <Card className='shadow-xl w-96 max-h-[500px] h-full overflow-hidden group'>
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
      </CardContent>
      <CardFooter className='flex-between'>
    
          <p>Rooms:{flat?.bedRooms}</p>
         
          
         <Link href={`/flats/details/${flat?.id}`}>  <Button>Details</Button></Link>
        
         
    
      </CardFooter>
    </Card>
  );
};

export default FlatCard;
