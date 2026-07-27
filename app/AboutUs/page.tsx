import Hero from '../about/aboutHero'
import Introduction from '../about/introduction'
import Second from '../about/second'
import Secure from '../about/secure'
import Testimonials from '../about/testimonials'
import Journey from '../about/journey'

export default function page() {
  return (
    <div>
      <Hero/>
      <Second/>
      <Introduction/>
      <Journey/>
      <Secure/>
      <Testimonials/>

    </div>
  )
}


