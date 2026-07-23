import AboutHero from "../components/about/aboutHero";
import Awards from "../components/about/awards";
import Introduction from "../components/about/introduction";
import Journey from "../components/about/journey";
import MissionVision from "../components/about/missionVission";
import Team from "../components/about/team";
import WhyTrustUs from "../components/about/whyTrustUs";


export default function page() {
  return (
    <div>
      <AboutHero/>
      <Introduction/>
      < MissionVision/>
      <Journey/>
      <WhyTrustUs/>
      <Team/>
      <Awards/>
    </div>
  )
}


