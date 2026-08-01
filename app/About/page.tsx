import Hero from "@/components/about/aboutHero";
import Introduction from "@/components/about/introduction";
import Journey from "@/components/about/journey";
import Second from "@/components/about/second";
import Secure from "@/components/about/secure";
import Talk from "@/components/study-destination/talk";


export default function page() {
  return (
    <div>
      <Hero/>
      <Second/>
      <Introduction/>
      <Journey/>
      <Secure/>
<Talk/>
    </div>
  )
}


