// import React from "react";
// import assets from "@/assets";
// import Image from "next/image";
// import SignUpForm from "@/components/Form/SignUpForm";

// const RegisterPage = () => {
//   return (
 
       
//       <div className="flex items-center justify-center mt-16 max-w-[100px] ">
//      <div className="border px-8 py-4 rounded-lg shadow-md">
//         <p className="text-center text-xl font-semibold text-primary">Register Now</p>
//           <div  className="flex flex-col md:flex-row items-center justify-center gap-8 ">
      
//             <div className="w-full max-w-[600px]">
//               <SignUpForm />
//             </div>
    
//             <div className="flex-shrink-0">
//               <Image
//                 src={assets.svg.login}
//                 width={200}
//                 height={200}
//                 alt="Login Illustration"
//               />
//             </div>
//           </div>
//      </div>
//       </div>

//   );
// };

// export default RegisterPage;



import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignUpForm from "@/components/Form/SignUpForm";

 const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center">
          <h2 className=" text-3xl font-extrabold text-gray-600">
            Register Now
          </h2>
        </div>
        <div className="pb-4 px-6 shadow rounded-lg sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-3/4">
              <SignUpForm />
            </div>
            <div className="hidden md:block md:w-1/4">
              <Image
                src={assets.svg.login}
                width={400}
                height={400}
                alt="Login Illustration"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RegisterPage