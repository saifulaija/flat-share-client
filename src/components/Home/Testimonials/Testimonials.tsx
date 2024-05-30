'use client';

import CustomHeader from '@/components/shared/CustomHeader/CustomHeader';
import { useState } from 'react';

import MyAccordion from '@/components/ShadCn/MyAccordian';

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

  return (
    <div className="container mx-auto p-8">
      <CustomHeader title='Testimonials' />

      <div className="flex flex-col lg:flex-row gap-8 py-5">
        <section className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
          <div className="space-y-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 border rounded-lg shadow">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gray-700 mt-2">{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Tips for Finding and Sharing Flats</h2>
          <MyAccordion data={tips} />
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
