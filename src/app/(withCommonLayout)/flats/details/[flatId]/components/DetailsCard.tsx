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





'use client'

import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useGetSingleFlatQuery } from "@/redux/api/flatApi";
import { MapPin, DollarSign, Bed, Expand, CreditCard } from 'lucide-react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const DetailsCard = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetSingleFlatQuery(id);

  if (isLoading) {
    return <CustomLoader />;
  }

  const flat = data;

  return (
    <Card className="mt-10 ">
      <CardHeader>
        <Image
          src={flat?.image[0]?.url || '/default-image.jpg'}
          alt={flat?.location || 'Flat Image'}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
          layout="responsive"
        />
      </CardHeader>
      <CardContent className="p-4 md:flex justify-between">
        <div className="max-w-[400px] w-full">
          <Image
            src={flat?.image[0]?.url || '/default-image.jpg'}
            alt={flat?.location || 'Flat Image'}
            width={400}
            height={300}
            className="w-full h-auto object-cover"
            layout="responsive"
          />
        </div>
        <div className="max-w-[800px] w-full p-4 space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">{flat?.location}</p>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">Rent: ${flat?.rentAmount}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CreditCard className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">Advance: ${flat?.advanceAmount}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Expand className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">Space: {flat?.space} sq.ft</p>
          </div>
          <div className="flex items-center space-x-2">
            <Bed className="w-6 h-6 text-gray-700" />
            <p className="text-lg font-medium text-gray-700">Bedrooms: {flat?.bedRooms}</p>
          </div>
          <p className="text-gray-700">{flat?.description}</p>
          <Button className="mt-4">Share Request</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
