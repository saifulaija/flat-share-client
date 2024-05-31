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

const TermsOfUse = () => (
  <AnimatePresence>
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        Terms of Use
      </motion.h1>
      
      {[
        {
          title: "Effective Date: " + getCurrentDate(),
          content: "Welcome to ShareNest! By accessing or using our services, you agree to comply with and be bound by these Terms of Use. Please read them carefully.",
        },
        {
          title: "1. Acceptance of Terms",
          content: (
            <p className="text-lg text-foreground">
              By using ShareNest, you agree to abide by these Terms of Use and any modifications thereto. If you do not agree with any part of these terms, you must not use our services.
            </p>
          ),
        },
        {
          title: "2. Changes to Terms",
          content: (
            <p className="text-lg text-foreground">
              We reserve the right to modify these Terms of Use at any time. We will notify you of any changes by posting the new terms on our website. Your continued use of the service after such modifications constitutes your acknowledgment and acceptance of the new terms.
            </p>
          ),
        },
        {
          title: "3. User Responsibilities",
          content: (
            <ul className="list-disc list-inside text-lg text-foreground">
              <li>Provide accurate, current, and complete information when creating an account.</li>
              <li>Maintain the security of your account by safeguarding your password.</li>
              <li>Immediately notify us of any unauthorized use of your account or any other breach of security.</li>
              <li>Comply with all applicable laws and regulations while using our services.</li>
            </ul>
          ),
        },
        {
          title: "4. Prohibited Activities",
          content: (
            <ul className="list-disc list-inside text-lg text-foreground">
              <li>Engage in any unlawful, fraudulent, or malicious activity.</li>
              <li>Infringe on the rights of others, including intellectual property rights.</li>
              <li>Transmit any harmful or disruptive code, such as viruses or malware.</li>
              <li>Use our services to send unsolicited advertisements or spam.</li>
            </ul>
          ),
        },
        {
          title: "5. Termination",
          content: (
            <p className="text-lg text-foreground">
              We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice or liability, for any reason, including if you breach the Terms of Use.
            </p>
          ),
        },
        {
          title: "6. Limitation of Liability",
          content: (
            <p className="text-lg text-foreground">
              ShareNest and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
            </p>
          ),
        },
        {
          title: "7. Governing Law",
          content: (
            <p className="text-lg text-foreground">
              These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
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
                <span>Address: [Insert Physical Address]</span>
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

export default TermsOfUse;
