"use client";


import Benefits from '@/components/services/benefits'
import ContactCTA from '@/components/services/contact'
import FAQ from '@/components/services/faq'
import Process from '@/components/services/process'
import WhyChooseUs from '@/components/services/whyChoose'
import Services from '@/components/services/services'
import VisaHero from '@/components/services/heroServices'

function page() {
  return (
    <div>
        <VisaHero/>
     <Benefits/>
     <ContactCTA/>
     <FAQ/>
     <Process/>
     <WhyChooseUs/>
     <Services/>

    </div>
  )
}

export default page
