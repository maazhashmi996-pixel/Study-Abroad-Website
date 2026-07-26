import Hero from '@/app/components/services/accommodation/hero'
import ServicesOffer from '@/app/components/services/accommodation/servicesOffer'
import StudentAccommodation from '@/app/components/services/accommodation/studentAccomodation'
import UniversityAccommodation from '@/app/components/services/accommodation/uniAccomodation'


export default function page() {
  return (
    <div>
      <Hero/>
      <ServicesOffer/>
      <StudentAccommodation/>
      <UniversityAccommodation/>
    </div>
  )
}


