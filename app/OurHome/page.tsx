import HeroSlider from '../home/pics'
import Consultant from '../home/consultant'
import Blogs from '../home/blogs'
import StudyPage from '../home/fifth'
import SixPage from '../home/six'
import SevenPage from '../home/sevenPage'
import Talk from '../study-destination/talk'

function page() {
  return (
    <div>
      <HeroSlider/>
      <Consultant/>
      <Blogs/>
      <StudyPage/>
      <SixPage/>
    <SevenPage/>
      <Talk/>
    </div>
  )
}

export default page
