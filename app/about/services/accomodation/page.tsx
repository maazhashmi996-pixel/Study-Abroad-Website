import Hero from '@/app/components/services/accomodation/hero'
import ServicesOffer from '@/app/components/services/accomodation/servicesOffer'
import StudentAccommodation from '@/app/components/services/accomodation/studentAccomodation'
import UniversityAccommodation from '@/app/components/services/accomodation/uniAccomodation'


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


