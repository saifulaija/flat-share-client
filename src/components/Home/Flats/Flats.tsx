



"use client";

import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import NoData from "@/components/shared/NoData/NoData";
import FlatCard from "./FlatCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { useDebounced } from "@/redux/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";


const Flats = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  query["page"] = page;
  query["limit"] = limit;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceTerm = useDebounced({ searchQuery: searchTerm, delay: 700 });

  if (debounceTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllFlatsQuery({ ...query });

  const meta = data?.meta;

  const handlePrePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pageCount) {
      setPage(page + 1);
    }
  };

  const pageCount = meta?.total ? Math.ceil(meta.total / limit) : 0;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
  <div className="w-full">
      <div className="container flex justify-center items-center">
        <div>
        <CustomHeader title="Find Flats" />
  
  <div className="w-full flex justify-center items-center">
    <div className="my-5 w-full max-w-md md:max-w-lg">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by location, rent price..."
          className="w-full appearance-none bg-background pl-8 shadow-none"
        />
      </div>
    </div>
  </div>

  <div className="w-full flex justify-center items-center">
    {data?.data?.length > 0 ? (
      <div className="grid md:grid-cols-3 gap-5 px-5 md:px-0 ">
        {data?.data?.map((flat: any, index: any) => (
          <FlatCard key={index} flat={flat} />
        ))}
      </div>
    ) : (
      <NoData />
    )}
  </div>

  <div className="my-4 flex justify-center">
    <Pagination>
      <PaginationPrevious
        onClick={handlePrePage}
        className={page <= 1 ? "pointer-events-none text-gray-400" : ""}
      >
        Previous
      </PaginationPrevious>
      <PaginationContent className="flex items-center">
        {pages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => setPage(pageNumber)}
              className={`px-1 py-1 mx-1 rounded-full ${
                page === pageNumber ? "bg-primary text-white" : ""
              }`}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
      </PaginationContent>
      <PaginationNext
        onClick={handleNextPage}
        className={
          page >= pageCount ? "pointer-events-none text-gray-400" : ""
        }
      >
        Next
      </PaginationNext>
    </Pagination>
  </div>
        </div>
      </div>
  </div>
  );
};

export default Flats;

