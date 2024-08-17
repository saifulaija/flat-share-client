import Flats from "@/components/Home/Flats/Flats";
import React from "react";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Benefits from "@/components/Home/Benefits/Benefits";
import Hero from "@/components/Home/Hero/Hero";
import SubHero from "@/components/Home/subHero/SubHero";

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <SubHero/>
      <Flats />
      <Testimonials />
      <Benefits />
    </div>
  );
};

export default HomePage;
