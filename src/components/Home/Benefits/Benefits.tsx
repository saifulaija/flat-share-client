// pages/benefits.tsx

import React from "react";
import { HandCoins, PackageCheck, CheckCheck } from "lucide-react";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";

const benefits = [
  {
    title: "Cost Savings",
    description:
      "Sharing a flat can significantly reduce your living expenses, allowing you to save more.",
    icon: HandCoins,
  },
  {
    title: "Community Living",
    description:
      "Live with like-minded individuals and enjoy a sense of community and belonging.",
    icon: PackageCheck,
  },
  {
    title: "Unique Experiences",
    description:
      "Experience diverse cultures and lifestyles by sharing a flat with different people.",
    icon: CheckCheck,
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto py-16 px-4">
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
            <benefit.icon className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{benefit.title}</h2>
            <p className=" text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
