import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import Image from "next/image";
import { DollarSign, MapPin } from "lucide-react";
import Link from "next/link";
import useUserInfo from "@/hooks/useUserInfo";

import { IFlat, IFlatData } from "@/types/flat";
import { formateMoney } from "@/utils/common";

const FlatCard = ({ flat }: any) => {
  const user = useUserInfo();

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 10).join(" ") + "...";
    }
    return description;
  };

  return (
    // <div className="shadow-lg w-[350px] md:w-96  max-h-[500px] border rounded-md h-full overflow-hidden hover:scale-105 transform transition-all duration-500 ease-in-out">
    <div className="shadow-lg w-[350px] md:w-96  max-h-[500px] border rounded-md h-full overflow-hidden hover:scale-95 transform transition-all duration-500 ease-in-out">
      <CardHeader>
        <Image
          className="rounded-lg"
          src={flat?.image[0]?.url}
          width={200}
          height={150}
          alt="image"
         
          
          layout="responsive"
        />
        <div className="flex-between">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-gray-600" />
            <p className="text-gray-500">{flat.location}</p>
          </div>
       
          <div className="flex items-center">
            
            <p className="text-gray-500">{formateMoney(flat.rentAmount)}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Display truncated description */}
        <p>{truncateDescription(flat?.description)}</p>
      </CardContent>
      <CardFooter className="flex-between">
        <p>Rooms:{flat?.bedRooms}</p>

        <Link href={`/flats/details/${flat?.id}`}>
         
          <Button>Details</Button>
        </Link>
      </CardFooter>
    </div>
  );
};

export default FlatCard;
