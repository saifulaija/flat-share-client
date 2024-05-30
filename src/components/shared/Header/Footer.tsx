// import { Mail, Phone, Twitter, Facebook, Linkedin, Package2 } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import assets from "@/assets";

// const Footer = () => (
//   <footer className="bg-background border-t p-4 shadow-2xl">
//     <div className="container mx-auto px-4">
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start">

//       <div className="flex flex-col gap-2">
//               <Link
//                 href="/"
//                 className="flex items-center gap-2 font-semibold text-foreground"
//               >
//                 <Package2 className="h-6 w-6" />
//                 <span className="">ShareNest</span>
//               </Link>
//               <p>Parbotipur,Dinajpur</p>
//             </div>
        
//         {/* Contact Information */}
//         <div className="mb-6 md:mb-0 flex gap-2">
//           <Image src={assets.images.facebook} alt="facebook" width={50} height={50} layout="responsive" />
//           <Image src={assets.images.linkedin} alt="linkedin" width={50} height={50} layout="responsive" />
//           <Image src={assets.images.instagram} alt="instagram" width={50} height={50} layout="responsive" />
//         </div>
        
//         {/* Additional Links */}
//         <div className="mb-6 md:mb-0">
//           <h2 className="text-xl font-semibold text-primary mb-4">Additional Links</h2>
//           <ul className="flex flex-col space-y-2 text-lg text-foreground">
//             <li><a href="/terms-of-use" className="hover:text-accent">Terms of Use</a></li>
//             <li><a href="/privacy-policy" className="hover:text-accent">Privacy Policy</a></li>
//             <li><a href="/about-us" className="hover:text-accent">About Us</a></li>
//           </ul>
//         </div>
        
//         {/* Copyright Information */}
//     </div>
//         <div className="text-center border-t-2 bg-muted/90 py-2 ">
//           <p className="text-lg text-foreground">&copy; {new Date().getFullYear()} ShareNest. All rights reserved.</p>
//         </div>
//       </div>
//   </footer>
// );

// export default Footer;



import { Mail, Phone, Twitter, Facebook, Linkedin, Package2, LocateOffIcon, MapPin, MailCheck, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const Footer = () => (
  <footer className="bg-background border-t h-20">
    <div className="container mx-auto px-4 pt-4">
      
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
   
        {/* Brand and Address */}
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold  text-primary">
            <Package2 className="h-6 w-6" />
            <span className="text-xl">ShareNest</span>
          </Link>
          <p  className="flex items-center gap-2 font-semibold text-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Parbatipur,Dinajpur</span>
          </p>
          <p  className="flex items-center gap-2 font-semibold text-foreground">
            <Mail className="h-4 w-4" />
            <span className="text-sm">sobujapm87@gmail.com</span>
          </p>
          <p  className="flex items-center gap-2 font-semibold text-foreground">
            <PhoneCall className="h-4 w-4" />
            <span className="text-sm">+8801874767969</span>
          </p>
        
        </div>
        
        {/* Social Media Icons */}
        <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Connect Us</h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.images.facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.images.linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src={assets.images.instagram} alt="Instagram" width={24} height={24} />
            </a>
          </div>
        </div>
        
        {/* Additional Links */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">Additional Links</h2>
          <ul className="flex flex-col space-y-1 text-lg text-foreground">
            <li>
              <Link href="/terms-of-use" className="hover:text-accent">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-accent">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Information */}
     
    </div>
    <div className="text-center bg-muted/95 py-4 mt-8">
        <p className="text-lg text-foreground">&copy; {new Date().getFullYear()} ShareNest. All rights reserved.</p>
      </div>
  </footer>
);

export default Footer;
