'use client'
import React from 'react';
import { Mail, Phone, Twitter, Facebook, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => (
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
        About Us
      </motion.h1>
      
      {[
        {
          title: "Mission Statement",
          content: "Our mission is to provide high-quality, user-friendly services that enhance productivity and foster innovation. We strive to deliver exceptional value to our users and make a positive impact on the community.",
        },
        {
          title: "Team Information",
          content: "We are a team of dedicated professionals with a passion for technology and innovation. Our team consists of experienced developers, designers, and strategists who work collaboratively to achieve our goals.",
        },
        {
          title: "Contact Information",
          content: (
            <div className="flex flex-col space-y-4 text-lg text-foreground">
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
                <span>Twitter: <a href="https://twitter.com/yourprofile" >twitter.com/yourprofile</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="text-primary" />
                <span>Facebook: <a href="https://facebook.com/yourprofile">facebook.com/yourprofile</a></span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="text-primary" />
                <span>LinkedIn: <a href="https://linkedin.com/yourprofile">linkedin.com/yourprofile</a></span>
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
            <div className="text-lg text-foreground">{section.content}</div>
          </Card>
        </motion.section>
      ))}
    </motion.div>
  </AnimatePresence>
);

export default AboutUs;
