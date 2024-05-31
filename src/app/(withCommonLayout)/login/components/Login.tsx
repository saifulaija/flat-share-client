// // "use client";
// // import React from "react";
// // import assets from "@/assets";
// // import Image from "next/image";
// // import SignInForm from "@/components/Form/SignInForm";
// // import { motion } from "framer-motion";

// // const Login = () => {
// //   return (
// //     <motion.div
// //       className="flex items-center justify-center mt-16"
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
// //     >
// //       <div className="flex flex-col md:flex-row items-center justify-center gap-8 border p-8 rounded-lg shadow-md">
// //         <div className="flex-shrink-0 hidden md:block">
// //           <Image
// //             src={assets.svg.newLogo}
// //             width={200}
// //             height={200}
// //             alt="Login Illustration"
// //           />
// //         </div>
// //         <div className="w-full max-w-md ">
// //           <SignInForm />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Login;




// "use client";
// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import assets from "@/assets";
// import Image from "next/image";
// import SignInForm from "@/components/Form/SignInForm";

// const Login = () => {
//   return (
//     <AnimatePresence>
//       <motion.div
//         className="flex items-center justify-center mt-16"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
//       >
//         <div className="flex flex-col md:flex-row items-center justify-center gap-8 border p-8 rounded-lg shadow-md">
//           <div className="flex-shrink-0 hidden md:block">
//             <Image
//               src={assets.svg.newLogo}
//               width={200}
//               height={200}
//               alt="Login Illustration"
//             />
//           </div>
//           <div className="w-full max-w-md">
//             <SignInForm />
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Login;


"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import assets from "@/assets";
import Image from "next/image";
import SignInForm from "@/components/Form/SignInForm";

const Login = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center justify-center mt-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border p-4 rounded-lg shadow-md">
          <motion.div
            className="flex-shrink-0 hidden md:block"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            <Image
              src={assets.svg.newLogo}
              width={200}
              height={200}
              alt="Login Illustration"
            />
          </motion.div>
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
          >
            <SignInForm />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;

