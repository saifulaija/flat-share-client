// "use client";

// import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
// import CustomHeader from "../../shared/CustomHeader/CustomHeader";
// import CustomLoader from "../../shared/CustomLoader/CustomLoader";
// import NoData from "@/components/shared/NoData/NoData";
// import FlatCard from "./FlatCard";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import { useDebounced } from "@/redux/hooks";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// const Flats = () => {
//   const query: Record<string, any> = {};
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(2);
//   query["page"] = page;
//   query["limit"] = limit;
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const debounceTerm = useDebounced({ searchQuery: searchTerm, delay: 700 });
//   if (!!debounceTerm) {
//     query["searchTerm"] = searchTerm;
//   }
//   const { data, isLoading } = useGetAllFlatsQuery({ ...query });

//   const flats = data?.flats?.data;
//   console.log(flats, "flats----------------------------");

//   const meta = data?.meta;
//   if (isLoading) {
//     return <CustomLoader />;
//   }

//   const handlePrePage = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };
//   const handleNextPage = () => {
//     if (page < page.length) {
//       setPage(page + 1);
//     }
//   };

//   let pageCount: number;

//   if (meta?.total) {
//     pageCount = Math.ceil(meta.total / limit);
//   }

//   return (
//     <div className="w-full">
//       <CustomHeader title="Find Flats" />

//       <div className="my-10 max-w-lg relative mx-auto">
//         <Input
//           className="pr-10 pl-4"
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search your desired flats..."
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center px-2">
//           <Search className="w-6 h-6 text-gray-400" />
//         </div>
//       </div>
//       <div className="flex gap-3 justify-center items-center flex-wrap">
//         {flats && flats?.length > 0 ? (
//           flats?.map((flat, index) => <FlatCard key={index} flat={flat} />)
//         ) : (
//           <NoData />
//         )}
//       </div>
//       <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious onClick={() => handlePrePage()} />
//           </PaginationItem>
//           {pageCount?.map((currentPage:any, idx:number) => (
//             <PaginationItem
//               key={idx}
//               className={page === currentPage ? "bg-primary" : ""}
//             >
//               <PaginationLink onClick={() => setPage(currentPage)}>
//                 {currentPage}
//               </PaginationLink>
//             </PaginationItem>
//           ))}
//           <PaginationItem>
//             <PaginationNext onClick={() => handleNextPage()} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   );
// };

// export default Flats;



"use client";

import { useGetAllFlatsQuery } from "@/redux/api/flatApi";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import CustomLoader from "../../shared/CustomLoader/CustomLoader";
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

const Flats = () => {
  const query: Record<string, any> = {};
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  query["page"] = page;
  query["limit"] = limit;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceTerm = useDebounced({ searchQuery: searchTerm, delay: 700 });

  if (debounceTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useGetAllFlatsQuery({...query});

  const flats = data?.flats?.data;
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

  const pageCount = meta?.total ? Math.ceil(meta.total / limit) : 0;
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="w-full">
      <CustomHeader title="Find Flats" />

      <div className="my-10 max-w-lg relative mx-auto">
        <Input
          className="pr-10 pl-4"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your desired flats..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-2">
          <Search className="w-6 h-6 text-gray-400" />
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center flex-wrap">
        {flats && flats.length > 0 ? (
          flats.map((flat, index) => <FlatCard key={index} flat={flat} />)
        ) : (
          <NoData />
        )}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrePage} />
          </PaginationItem>
          {pages.map((currentPage) => (
            <PaginationItem
              key={currentPage}
              className={page === currentPage ? "bg-primary" : ""}
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
  );
};

export default Flats;
