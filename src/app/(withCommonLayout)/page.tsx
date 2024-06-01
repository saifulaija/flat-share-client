
import { Hero } from '@/components/Home/Hero/Hero'
import Flats from '@/components/Home/Flats/Flats'
import React from 'react'
import Testimonials from '@/components/Home/Testimonials/Testimonials'
import Benefits from '@/components/Home/Benefits/Benefits'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Flats/>
      <Testimonials/>
      <Benefits/>
    </div>
  )
}

export default HomePage