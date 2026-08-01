

import Adventages from '@/components/home/adventages'
import Blogs from '@/components/home/blogs'
import Choose from '@/components/home/choose'
import EightPage from '@/components/home/eightPage'
import HeroSection from '@/components/home/hero'
import Popular from '@/components/home/popular'
import Share from '@/components/home/share'
import Speak from '@/components/home/speak'
import Time from '@/components/home/time'

function page() {
  return (
    <div>
      <HeroSection/>
      <Blogs/>
      <Share/>
      <Adventages/>
      <Choose/>
      <EightPage/>
      <Popular/>
      <Time/>
      <Speak/>

    </div>
  )
}

export default page
