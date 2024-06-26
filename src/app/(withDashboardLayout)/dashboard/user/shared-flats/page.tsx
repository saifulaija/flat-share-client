"use client";

import { useGetMyFlatsQuery } from "@/redux/api/flatApi";

import NoData from "@/components/shared/NoData/NoData";

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
import CustomLoader from "@/components/shared/CustomLoader/CustomLoader";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";

import MyFlatCard from "./components/MyFlatCard";

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

  const { data, isLoading } = useGetMyFlatsQuery({ ...query });


  const flats = data?.flats;

  const meta = data?.meta;

  if (isLoading) {
    return <CustomLoader />;
  }

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

  const pageCount = meta?.total ? Math.ceil(meta?.total / limit) : 0;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="flex-center">
      <div>
        <CustomHeader title="Your Shared Flats" />

        <div className="my-5 max-w-lg relative mx-auto">
          <Input
            className="pr-10 pl-4"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your desired flats..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        <section className="w-full">
          <div className="space-y-4">
            {data?.data &&
            Array.isArray(data?.data) &&
            data?.data?.length > 0 ? (
              data?.data?.map((item: any) => (
                <MyFlatCard key={item.id} item={item} />
              ))
            ) : (
              <NoData />
            )}
          </div>
        </section>
      <div className="my-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePrePage} />
              </PaginationItem>
              {pages.map((currentPage) => (
                <PaginationItem
                  key={currentPage}
                  className={page === currentPage ? "bg-primary rounded-full" : ""}
                >
                  <PaginationLink onClick={() => setPage(currentPage)}>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={handleNextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
      </div>
      </div>
    </div>
  );
};

export default Flats;
