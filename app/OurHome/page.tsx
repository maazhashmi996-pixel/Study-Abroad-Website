

import Blogs from '@/components/home/blogs'
import Consultant from '@/components/home/consultant'
import EightPage from '@/components/home/eightPage'
import HeroSection from '@/components/home/hero'
import Speak from '@/components/home/speak'
import Third from '@/components/home/third'
import Time from '@/components/home/time'

function page() {
  return (
    <div>
      <HeroSection/>
      <Consultant/>
      <Blogs/>
      <Third/>
      <EightPage/>
      <Time/>
      <Speak/>

  
    </div>
  )
}

export default page
