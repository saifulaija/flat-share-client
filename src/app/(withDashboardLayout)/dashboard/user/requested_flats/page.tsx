"use client";

import React from "react";

import { columns } from "./components/column";
import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";

import { useGetMyBookingQuery } from "@/redux/api/bookingApi";
import { RequestedDataTable } from "./components/RequestedDataTable";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";

const RequestedFlats = () => {
  const { data, isLoading } = useGetMyBookingQuery({});


  return (
    <section className="py-5">
      <div>
       <CustomHeader title="Your's Requested Flats"/>
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
