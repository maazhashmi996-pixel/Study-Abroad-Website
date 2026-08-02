"use client";

import City from "@/components/events/city"
import EventHero from "@/components/events/eventHero"
import Explore from "@/components/events/explore"
import ExpoBenefits from "@/components/events/expoBenefits"
import Third from "@/components/events/third"


 function page() {
  return (
    <div>
      <EventHero/>
      <ExpoBenefits/>
      <Third/>
      <Explore/>
      <City/>
    </div>
  )
}
export default page


