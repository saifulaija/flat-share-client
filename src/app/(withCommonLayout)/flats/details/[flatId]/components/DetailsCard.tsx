// 'use client'

// import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
// import { Card } from "@/components/ui/card";
// import { useGetSingleFlatQuery } from "@/redux/api/flatApi";

// const DetailsCard = ({id}:{id:string}) => {
//     console.log(id)
//     const {data,isLoading}=useGetSingleFlatQuery(id);
//     console.log(data)

//     if(isLoading){
//         return <CustomLoader/>
//     }
//   return (
//     <Card className=" mt-10">

//         <div className="md:flex justify-between items-center">
//             <div className="max-w-[400px] bg-red-600 w-full">
//                 image
//             </div>
//             <div className="max-w-[800px] bg-green-600 w-full">
//               details
//             </div>

//         </div>

//     </Card>
//   )
// }

// export default DetailsCard

"use client";

import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { MapPin, DollarSign, Bed, Expand, CreditCard } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import useUserInfo from "@/hooks/useUserInfo";
import ImageSlider from "./ImageSlider";
import { IImage } from "@/types/image";

const DetailsCard = ({ id }: { id: string }) => {
  const user = useUserInfo();
  const { data, isLoading } = useGetSingleFlatQuery(id);

  const handleFlatShareClick = () => {
    if (!user?.userId) {
      const confirmLogin = window.confirm(
        "You need to log in first. Would you like to go to the login page?"
      );
      if (confirmLogin) {
        window.location.href = "/login";
      }
    } else {
      // If user is already logged in, proceed to blog page
      window.location.href = `/flats/flat-request/${data?.id}`;
    }
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  const flat = data;

  const images: IImage = data?.image;
  console.log(flat);

  return (
    <div className="mt-10 border rounded-lg p-5">
      <CardContent className="p-4 md:flex justify-between">
        <div className="max-w-[400px] w-full">
          <ImageSlider images={images} />
        </div>
        <div className="max-w-[800px] w-full p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              {flat?.location}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              Rent: ${flat?.rentAmount}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              Advance: ${flat?.advanceAmount}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Expand className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              Space: {flat?.space} sq.ft
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Bed className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">
              Bedrooms: {flat?.bedRooms}
            </p>
          </div>
          <p className="text-gray-700">{flat?.description}</p>
          <Button onClick={handleFlatShareClick} className="mt-4">
            Share Request
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default DetailsCard;
