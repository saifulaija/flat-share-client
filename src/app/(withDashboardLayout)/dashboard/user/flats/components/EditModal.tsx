// // import { useMediaQuery, } from "@/hooks/use-media-query";


// import { Button } from "@/components/ui/button";

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import EditForm from "./EditForm";

// // import ProfileForm from "./ProfileFom";
// // import { TUserType } from "../page";


// export const EditModal = ({
//   open,
//   setOpen,

// }: {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;

 
// }) => {
//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button>Request For Blood</Button>
//       </DrawerTrigger>
//       <DrawerContent className="flex justify-center items-center ">
//         <div className="bg-white p-6 rounded-lg w-5/12 mx-auto">
//           <DrawerHeader className="text-center">
//             {/* <DrawerTitle>User Request</DrawerTitle>
//             <DrawerDescription>
//               Use proper location and hospital name
//             </DrawerDescription> */}
//           </DrawerHeader>
//           <EditForm   />
//           <DrawerFooter className="pt-2 flex justify-end">
//             <DrawerClose asChild>
//               <Button variant="outline">Cancel</Button>
//             </DrawerClose>
//           </DrawerFooter>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// };