'use client'
import React from 'react';
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to format the current date
const getCurrentDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PrivacyPolicy = () => (
  <AnimatePresence>
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Privacy Policy
      </motion.h1>
      
      {[
        {
          title: "Effective Date: " + getCurrentDate(),
          content: "Welcome to ShareNest! We are committed to protecting your privacy and ensuring a safe experience for all our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
        },
        {
          title: "1. Information We Collect",
          content: (
            <>
              <p className="text-lg text-foreground">
                <strong>Personal Data:</strong> When you register on ShareNest, we may collect personal information that can be used to identify you, such as your name, email address, phone number, and payment information.
              </p>
              <p className="text-lg text-foreground">
                <strong>Usage Data:</strong> We collect information that your browser sends whenever you visit our Site. This may include your computer&apos;s IP address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
              </p>
              <p className="text-lg text-foreground">
                <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </>
          ),
        },
        {
          title: "2. How We Use Your Information",
          content: (
            <ul className="list-disc list-inside text-lg text-foreground">
              <li>Provide, operate, and maintain our Site</li>
              <li>Improve, personalize, and expand our Site</li>
              <li>Understand and analyze how you use our Site</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Site, and for marketing and promotional purposes</li>
              <li>Process your transactions and manage your bookings</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          ),
        },
        {
          title: "3. Sharing Your Information",
          content: (
            <>
              <p className="text-lg text-foreground">
                We do not sell or rent your personal data to third parties. However, we may share your information with:
              </p>
              <ul className="list-disc list-inside text-lg text-foreground">
                <li>Service providers who help us operate our Site, conduct our business, or provide services to you, so long as those parties agree to keep this information confidential</li>
                <li>Law enforcement or government agencies if required to do so by law or in response to valid requests by public authorities</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. Security of Your Information",
          content: (
            <p className="text-lg text-foreground">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          ),
        },
        {
          title: "5. Your Data Protection Rights",
          content: (
            <>
              <p className="text-lg text-foreground">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-lg text-foreground">
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
            </>
          ),
        },
        {
          title: "6. Changes to This Privacy Policy",
          content: (
            <p className="text-lg text-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          ),
        },
        {
          title: "Contact Us",
          content: (
            <div className="flex flex-col space-y-4 text-lg text-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="text-primary" />
                <span>Email: <a href="mailto:support@sharenest.com" className="text-blue-600">support@sharenest.com</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-primary" />
                <span>Address: Parbotipur,Dinajpur</span>
              </div>
            </div>
          ),
        }
      ].map((section, index) => (
        <motion.section
          key={index}
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.3, ease: "easeInOut" }}
        >
          <Card className="p-6 bg-background shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">{section.title}</h2>
            <div>{section.content}</div>
          </Card>
        </motion.section>
      ))}
    </motion.div>
  </AnimatePresence>
);

export default PrivacyPolicy;
