'use client';

import CustomHeader from '@/components/shared/CustomHeader/CustomHeader';
import { useState } from 'react';
import MyAccordion from '@/components/ShadCn/MyAccordian';
import { MyCarousel } from '@/components/ShadCn/MyCarousel';

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
    testimonial: "I found the perfect flat-mate through ShareNest! Highly recommend!",
  },
  {
    name: "Jane Smith",
    testimonial: "ShareNest made it so easy to find a compatible flat-mate.",
  },
  {
    name: "Mark Johnson",
    testimonial: "Great platform with lots of options. Found my current roomie here!",
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
    content: "Understand that living with others requires compromise and consideration of each other's habits and schedules.",
  },
  {
    title: "Establish Financial Responsibilities",
    content: "Clearly outline how rent, utilities, and other expenses will be divided and ensure everyone is on the same page.",
  },
];

const Testimonials: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>(testimonialsData);
  const [tips] = useState<Tip[]>(tipsData);

  const testimonialItems = testimonials.map(testimonial => ({
    title: testimonial.name,
    content: testimonial.testimonial,
  }));

  return (
    <div className="container mx-auto p-8">
      <CustomHeader title="Testimonials" />

      <div className="flex flex-col items-center gap-12 py-8">
        <div className="flex w-full justify-evenly items-center">
          <p className="text-2xl font-bold">Success Stories</p>
          <p className="text-2xl font-bold">Tips for Finding</p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 w-full">
          <section className="lg:w-3/5 px-4">
            <div className="p-6 rounded-lg flex-center">
              <MyCarousel items={testimonialItems} />
            </div>
          </section>

          <section className="lg:w-2/5 px-4">
            <div className="p-6 rounded-lg flex-center">
              <MyAccordion data={tips} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
