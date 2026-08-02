import OfferPage from '@/components/steps/receive/offer'
import Hero from '@/components/steps/receive/hero'
import Mistakes from '@/components/steps/receive/mistakes'
import Timeline from '@/components/steps/receive/timeline'
import Yellow from '@/components/steps/receive/yellow'

export default function page() {
  return (
    <div>
      <Hero/>
      <Yellow/>
      <Mistakes/>
      <Timeline/>
      <OfferPage/>
    </div>
  )
}


