import OfferPage from '@/components/steps/receive/offer'
import Hero from '@/components/steps/receive/hero'
import Timeline from '@/components/steps/receive/timeline'
import Red from '@/components/steps/receive/yellow'
import Mistakes from '@/components/steps/receive/mistakes'

export default function page() {
  return (
    <div>
      <Hero/>
      <Red/>
      <Timeline/>
      <OfferPage/>
      <Mistakes/>
    </div>
  )
}


