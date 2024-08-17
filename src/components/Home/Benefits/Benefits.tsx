// pages/benefits.tsx
'use client'
import React from "react";
import { HandCoins, PackageCheck, CheckCheck } from "lucide-react";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assets from "@/assets";
import Image from "next/image";

const benefits = [
  {
    title: "Cost Savings",
    description:
      "Sharing a flat can significantly reduce your living expenses, allowing you to save more.",
    icon: assets.images.cost,
  },
  {
    title: "Community Living",
    description:
      "Live with like-minded individuals and enjoy a sense of community and belonging.",
    icon: assets.images.increase,
  },
  {
    title: "Unique Experiences",
    description:
      "Experience diverse cultures and lifestyles by sharing a flat with different people.",
    icon: assets.images.experience,
  },
];



const Benefits = () => {
  const ref = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0 1", "1.33 1"],
});
const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="container mx-auto py-16 px-4"
    >
      <div className="text-center mb-12">
        <CustomHeader title="Benefits of Sharing" />
        <p className="text-lg mt-4 text-balance">
          Discover the advantages of living with roommates and how it can enrich
          your life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  shadow-md border rounded-lg hover:scale-105 transform transition-all duration-500 ease-in-out"
          >
            <Image
              src={benefit.icon}
              alt={benefit.title}
              width={40}
              height={40}
              className="group-hover:scale-90 transition-all duration-75"
            />
            <h2 className="text-2xl font-semibold mb-2">{benefit.title}</h2>
            <p className=" text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Benefits;
