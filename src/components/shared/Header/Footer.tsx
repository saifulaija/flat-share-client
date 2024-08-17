import {
  Mail,
  Phone,
  Twitter,
  Facebook,
  Linkedin,
  MapPin,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import assets from "@/assets";

const Footer = () => (
  <footer className="bg-background border-t h-20 w-full">
    <div className="container mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Brand and Address */}
        <div className="flex flex-col gap-2 text-foreground">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-foreground"
          >
            {/* <Package2 className="h-6 w-6" /> */}
            <Image src={assets.images.logo} width={30} height={30} alt="logo" />
            <span className="tracking-wide">
              Share<span className="text-primary text-xl">N</span>est
            </span>
          </Link>
          <p className="flex items-center gap-2 text-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-md text-foreground">
              Parbatipur, Dinajpur
            </span>
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <Mail className="h-4 w-4" />
            <span className="text-md">sobujapm87@gmail.com</span>
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <PhoneCall className="h-4 w-4" />
            <span className="text-md">+8801874767969</span>
          </p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">
            Connect Us
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/sobuj.sorker.3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.images.facebook}
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/reactjs-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.images.linkedin}
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/reactjs-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.images.instagram}
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-2">
            Additional Links
          </h2>
          <ul className="flex flex-col text-foreground">
            <li>
              <Link href="/term-of-use" className="text-md">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-md">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-md">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
    </div>
    <div className="text-center bg-muted/95 py-4 mt-2">
      <p className="text-lg text-foreground">
        &copy; {new Date().getFullYear()} ShareNest. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
