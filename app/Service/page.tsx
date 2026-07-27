import Benefits from '../services/benefits'
import ContactCTA from '../services/contact'
import FAQ from '../services/faq'
import VisaHero from '../services/heroServices'
import Process from '../services/process'
import WhyChooseUs from '../services/whyChoose'
import Services from '../services/services'

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
