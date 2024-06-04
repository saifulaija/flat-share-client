"use client";
import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";

import { useGetSingleFlatQuery } from "@/redux/api/flatApi";

import { Button } from "@/components/ui/button";
import useUserInfo from "@/hooks/useUserInfo";
import ImageSlider from "./ImageSlider";

import { formateDate, formateMoney } from "@/utils/common";
import { useToast } from "@/components/ui/use-toast";

const DetailsCard = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const user = useUserInfo();

  const { data, isLoading } = useGetSingleFlatQuery(id);

  const isBooked = data?.booking?.some(
    (booking: any) => booking.status === "BOOKED"
  );

  const handleFlatShareClick = () => {
    if (isBooked) {
      toast({
        variant: "destructive",
        title: "Flat Booked",
        description: "This flat is already booked!!",
      });

      return;
    }
    if (!user?.userId) {
      const confirmLogin = window.confirm(
        "You need to log in first. Would you like to go to the login page?"
      );
      if (confirmLogin) {
        window.location.href = "/login";
      }
    } else {
      window.location.href = `/flats/flat-request/${data?.id}`;
    }
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  const flat = data;

  const images: any[] = data?.image;
  const isDisabled = user?.userId === data?.userId;

  return (
    <div className="mt-10 border-[.25px] border-primary/40 rounded-lg p-5">
      <div className="md:p-4 md:flex md:justify-between">
        <div className="max-w-full md:max-w-[400px] w-full">
          <ImageSlider images={images} />
        </div>
        <div className="max-w-[800px] w-full p-1 md:p-4 space-y-2">
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Location:</p>
            <p className="text-sm">{flat?.location}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Amenities:</p>
            <p className="text-sm">{flat?.amenities}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Rent Amounts:</p>
            <p className="text-sm">{formateMoney(flat?.rentAmount)}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Advance Amounts:</p>
            <p className="text-sm">{formateMoney(flat?.advanceAmount)}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Bed Rooms:</p>
            <p className="text-sm">{flat?.bedRooms}</p>
          </div>

          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Space:</p>
            <p className="text-sm">{flat?.space} sq.ft</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Booking Request:</p>
            <p className="text-sm">{flat?.Request_Flat?.length}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Created Time:</p>
            <p className="text-sm">{formateDate(flat?.createdAt)}</p>
          </div>
          <div className="flex flex-col space-x-2">
            <p className="font-medium text-lg">Description:</p>
            <p className="text-sm">{flat?.description}</p>
          </div>

          <div className="relative mt-4 group">
            {/* <Button
              onClick={handleFlatShareClick}
              disabled={isDisabled}
              className={`relative ${isDisabled ? "cursor-not-allowed" : ""}`}
            >
              {isDisabled ? "Your Shared Flat" : "Share Request"}
            </Button> */}

            
            {isDisabled && (
              <div className="absolute bottom-full mb-2 left-40 transform -translate-x-1/2 w-40 bg-muted/95  text-center text-xs rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                It is your shared flat
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
