"use client";

import React from "react";

import { columns } from "./components/column";
import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";

import { useGetMyBookingQuery } from "@/redux/api/bookingApi";
import { RequestedDataTable } from "./components/RequestedDataTable";

const RequestedFlats = () => {
  const { data, isLoading } = useGetMyBookingQuery({});


  return (
    <section className="py-5">
      <div>
        <h3 className="text xl md:text-3xl font-bold mb-4">All Requested Flats</h3>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <RequestedDataTable data={data} columns={columns} />
        )}
      </div>
    </section>
  );
};

export default RequestedFlats;
