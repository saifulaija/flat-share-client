// import React from "react";
// import assets from "@/assets";
// import Image from "next/image";
// import SignInForm from "@/components/Form/SignInForm";

// const LoginPage = () => {
//   return (
//     <div className="flex justify-between items-center ">
//       <div className=" md:flex justify-between gap-5">
//         <div>
//           <Image src={assets.svg.login} width={200} height={200} alt="image" />
//         </div>
//         <div>
//           <SignInForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import React from "react";
import assets from "@/assets";
import Image from "next/image";
import SignInForm from "@/components/Form/SignInForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[cal(100vh-190px)] bg-gray-100 p-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-lg shadow-md">
        <div className="flex-shrink-0">
          <Image src={assets.svg.login} width={200} height={200} alt="Login Illustration" />
        </div>
        <div className="w-full max-w-md">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

