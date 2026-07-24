import React from 'react'
import Blogs from '../components/home/blogs'
import Consultant from '../components/home/consultant'
import Destinations from '../components/home/destinations'
import FeaturedUniversities from '../components/home/features'
import Services from '../components/home/ourServices'
import Partners from '../components/home/partner'
import Stats from '../components/home/stats'
import Testimonials from '../components/home/testimonials'
import HeroSlider from '../components/home/pics'

export default function Page() {
  return (
    <div>
      <HeroSlider/>
      <Consultant/>
      <Blogs/>
      <Destinations/>
      <FeaturedUniversities/>
      <Services/>
      <Partners/>
      <Stats/>
      <Testimonials/>
    </div>
  )
}


