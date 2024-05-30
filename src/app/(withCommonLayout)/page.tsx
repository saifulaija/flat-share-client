
import { Hero } from '@/components/Home/Hero/Hero'
import Flats from '@/components/Home/Flats/Flats'
import React from 'react'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Flats/>
      <Testimonials/>
    </div>
  )
}

export default HomePage