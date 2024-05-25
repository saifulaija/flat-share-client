"use client";

import NoData from "@/components/shared/NoData/NoData";
import { useGetMyBookingQuery } from "@/redux/api/bookingApi";
import RequestFlatCard from "./RequestFlatCard/RequestFlatCard";

const RequestedFlats = () => {
  const { data, isLoading } = useGetMyBookingQuery({});
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-5xl w-full m-auto px-3 my-10 space-y-10">
      <section>
        <div className="space-y-4">
          {data && Array.isArray(data) && data.length > 0 ? (
            data?.map((item) => <RequestFlatCard key={item.id} item={item} />)
          ) : (
            <NoData />
          )}
        </div>
      </section>
    </main>
  );
};

export default RequestedFlats;
