import { Mail, Phone, Twitter, Facebook, Linkedin, Package2 } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-background border-t p-4 shadow-2xl">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">

      <div className="hidden md:flex">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-foreground"
              >
                <Package2 className="h-6 w-6" />
                <span className="">ShareNest</span>
              </Link>
            </div>
        
        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-primary mb-4">Contact Information</h2>
          <div className="flex flex-col space-y-2 text-lg text-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="text-primary" />
              <span>Email: info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="text-primary" />
              <span>Phone: (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Twitter className="text-primary" />
              <span>Twitter: <a href="https://twitter.com/yourprofile" className="text-accent">twitter.com/yourprofile</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <Facebook className="text-primary" />
              <span>Facebook: <a href="https://facebook.com/yourprofile" className="text-accent">facebook.com/yourprofile</a></span>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="text-primary" />
              <span>LinkedIn: <a href="https://linkedin.com/yourprofile" className="text-accent">linkedin.com/yourprofile</a></span>
            </div>
          </div>
        </div>
        
        {/* Additional Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-primary mb-4">Additional Links</h2>
          <ul className="flex flex-col space-y-2 text-lg text-foreground">
            <li><a href="/terms-of-use" className="hover:text-accent">Terms of Use</a></li>
            <li><a href="/privacy-policy" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="/about-us" className="hover:text-accent">About Us</a></li>
          </ul>
        </div>
        
        {/* Copyright Information */}
    </div>
        <div className="text-center border-t-2 bg-muted/90 py-2 ">
          <p className="text-lg text-foreground">&copy; {new Date().getFullYear()} ShareNest. All rights reserved.</p>
        </div>
      </div>
  </footer>
);

export default Footer;

