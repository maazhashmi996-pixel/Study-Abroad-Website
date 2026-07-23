import Pics from './components/home/pics'
import Stats from './components/home/stats'
import Consultant from './components/home/consultant'
import Partners from './components/home/partner'
import Services from './components/home/ourServices'
import Destinations from './components/home/destinations'
import FeaturedUniversities from './components/home/features'
import Testimonials from './components/home/testimonials'
import Blogs from './components/home/blogs'
import Consultation from './components/home/consultation'



export default function Page() {
  return (
    <div>
     <Pics/>
     <Stats/>
     <Consultant/>  
    <Partners/>
    <Services/>
    <Destinations/>
    <FeaturedUniversities/>
    <Testimonials/>
    <Blogs/>
    <Consultation/>
    </div>
  )
}


