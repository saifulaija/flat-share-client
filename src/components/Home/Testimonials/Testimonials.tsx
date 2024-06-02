"use client";
import CustomHeader from "@/components/shared/CustomHeader/CustomHeader";
import { useState } from "react";

import { MyCarousel } from "@/components/ShadCn/MyCarousel";
import MyAccordion from "@/components/ShadCn/MyAccordian";

interface Testimonial {
  name: string;
  testimonial: string;
}

interface Tip {
  title: string;
  content: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "John Doe",
    testimonial:
      "I found the perfect flat-mate through ShareNest! Highly recommend!",
  },
  {
    name: "Jane Smith",
    testimonial: "ShareNest made it so easy to find a compatible flat-mate.",
  },
  {
    name: "Mark Johnson",
    testimonial:
      "Great platform with lots of options. Found my current roomie here!",
  },
];

const tipsData: Tip[] = [
  {
    title: "Set Clear Expectations",
    content: "Discuss cleaning schedules, guests, and noise levels upfront.",
  },
  {
    title: "Communicate Regularly",
    content: "Maintain open communication to address any issues promptly.",
  },
  {
    title: "Respect Each Other's Space",
    content: "Give your flat-mate privacy and respect their personal space.",
  },
  {
    title: "Be Flexible and Considerate",
    content:
      "Understand that living with others requires compromise and consideration of each other's habits and schedules.",
  },
  {
    title: "Establish Financial Responsibilities",
    content:
      "Clearly outline how rent, utilities, and other expenses will be divided and ensure everyone is on the same page.",
  },
];

const Testimonials: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>(testimonialsData);
  const [tips] = useState<Tip[]>(tipsData);

  const testimonialItems = testimonials.map((testimonial) => ({
    title: testimonial.name,
    content: testimonial.testimonial,
  }));

  return (
    <div className="container mx-auto">
      <div>
        <CustomHeader title="Testimonials" />
        <div className="space-y-16">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-48">
            <div className="lg:w-1/2 w-full">
              <MyAccordion data={tips} />
            </div>
            <div className="hidden lg:block lg:w-1/2">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <video className="rounded-xl" autoPlay muted loop>
                  <source src="/content/advice.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-48">
            <div className="hidden lg:block lg:w-1/2">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <video className="rounded-xl" autoPlay muted loop>
                  <source src="/content/feed-back.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-10 md:px-0">
              <MyCarousel items={testimonialItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
