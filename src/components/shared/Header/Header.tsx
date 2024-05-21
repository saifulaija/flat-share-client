// "use client";

// import Link from "next/link";

// import { AlignJustify, CircleUser, Package2 } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";

// import AuthDropdown from "./AuthDropdown";

// const Header = () => {
//   const menuItems = [
//     {
//       label: "Home",
//       path: "/",
//       show: true,
//     },
//     {
//       label: "About Us",
//       path: "/about-us",
//       show: true,
//     },

//     {
//       label: "Dashboard",
//       path: "/dashboard",
//       show: true,
//     },
//   ];
//   return (
//     <div className="container mx-auto bg-neutral-100/50">
//       <header className="flex h-16 shrink-0 w-full items-center">
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button className="lg:hidden">
//               <AlignJustify className="h-6 w-6" />
//               <span className="sr-only">Toggle Navigation menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left">
//             <Link href="/" className="flex items-center gap-2 font-semibold">
//               <Package2 className="h-6 w-6" />
//               <span className="">ShareNest</span>
//             </Link>
//             <div className="grid gap-2 py-6">
//               {menuItems.map((menuItem) =>
//                 menuItem.show ? (
//                   <Link href={menuItem.path} key={menuItem.label}>
//                     {menuItem.label}
//                   </Link>
//                 ) : null
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>

//         <div className="hidden md:flex">
//           <Link href="/" className="flex items-center gap-2 font-semibold">
//             <Package2 className="h-6 w-6" />
//             <span className="">ShareNest</span>
//           </Link>
//         </div>
//         <nav className="ml-auto hidden lg:flex gap-6">
//           {menuItems.map((menuItem) =>
//             menuItem.show ? (
//               <Link
//                 href={menuItem.path}
//                 key={menuItem.label}
//                 className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
//               >
//                 {menuItem.label}
//               </Link>
//             ) : null
//           )}
//         </nav>
//         <AuthDropdown />
//       </header>
//     </div>
//   );
// };

// export default Header;



"use client";

import Link from "next/link";
import { AlignJustify, CircleUser, Package2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AuthDropdown from "./AuthDropdown";

const Header = () => {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "About Us",
      path: "/about-us",
      show: true,
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      show: true,
    },
  ];

  return (
   <div className="border-b">
     <div className="container mx-auto">
      <header className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden">
                <AlignJustify className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">ShareNest</span>
              </Link>
              <div className="grid gap-2 py-6">
                {menuItems.map((menuItem) =>
                  menuItem.show ? (
                    <Link href={menuItem.path} key={menuItem.label}>
                      {menuItem.label}
                    </Link>
                  ) : null
                )}
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ShareNest</span>
            </Link>
          </div>
        </div>

        <nav className="hidden lg:flex gap-6">
          {menuItems.map((menuItem) =>
            menuItem.show ? (
              <Link
                href={menuItem.path}
                key={menuItem.label}
                className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
        </nav>

        <div className="flex items-center">
          <AuthDropdown />
        </div>
      </header>
    </div>
   </div>
  );
};

export default Header;

