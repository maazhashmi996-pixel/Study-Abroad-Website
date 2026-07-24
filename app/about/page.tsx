import AboutHero from "../components/about/aboutHero";
import Introduction from "../components/about/introduction";

import Second from "../components/about/second";
import Secure from "../components/about/secure";
import Testimonials from "../components/home/testimonials";


export default function page() {
  return (
    <div>
      <AboutHero/>
      <Second/>
      <Introduction/>
     <Testimonials/>
    <Secure/>
    </div>
  )
}


