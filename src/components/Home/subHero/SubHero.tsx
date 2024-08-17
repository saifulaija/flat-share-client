// SubHero.tsx
import assets from "@/assets";
import React from "react";
import SubHeroCard from "./SubHeroCard";




// TData type definition
export type TData = {
  title: string;
  icon: string;
  color: string;
};

const SubHero: React.FC = () => {
  // const icon: assets.subHero.upload;
 const data: TData[] = [
   {
     title: "Discover Available Flats",
     icon: assets.images.flat,
     color: "purple-500",
   },
   {
     title: "Subscribe for New Listings",
     icon: assets.images.subscribe,
     color: "#ff8c00",
   },
   {
     title: "Engage with the Community",
     icon: assets.images.community,
     color: "#00bfff",
   },
   {
     title: "User-Friendly Booking",
     icon: assets.images.booking,
     color: "#32cd32",
   },
 ];


  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 -mt-2">
      {data.map((item, index) => (
        <SubHeroCard key={index} item={item} />
      ))}
    </div>
  );
};

export default SubHero;
