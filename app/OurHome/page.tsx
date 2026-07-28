
import StudyPage from '@/components/events/eventHero'
import Blogs from '@/components/home/blogs'
import Consultation from '@/components/home/consultation'
import NinePage from '@/components/home/ninePage'
import HeroSlider from '@/components/home/pics'
import SevenPage from '@/components/home/sevenPage'
import SixPage from '@/components/home/six'
import Talk from '@/components/study-destination/talk'

function page() {
  return (
    <div>
      <HeroSlider/>
      <Consultation/>
      <Blogs/>
      <StudyPage/>
      <SixPage/>
    <SevenPage/>
    <NinePage/>
      <Talk/>
    </div>
  )
}

export default page
