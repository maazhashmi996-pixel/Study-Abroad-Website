import Services from '@/app/components/home/ourServices'
import Benefits from '@/app/components/services/benefits'
import ContactCTA from '@/app/components/services/contact'
import FAQ from '@/app/components/services/faq'
import VisaHero from '@/app/components/services/heroServices'
import Process from '@/app/components/services/proccess'
import WhyChooseUs from '@/app/components/services/whyChoose'


export default function Page() {
  return (
    <div>
      <VisaHero/>
      <Services/>
      <Process/>
      <Benefits/>
      <WhyChooseUs/>
      <FAQ/>
      <ContactCTA/>
    </div>
  )
}


