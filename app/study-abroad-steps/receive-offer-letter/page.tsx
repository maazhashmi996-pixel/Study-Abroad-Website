import OfferPage from '@/components/steps/receive/offer'
import Hero from '@/components/steps/receive/hero'
import Mistakes from '@/components/steps/receive/mistakes'
import Timeline from '@/components/steps/receive/timeline'
import red from '@/components/steps/receive/red'

export default function page() {
  return (
    <div>
      <Hero/>
      <red/>
      <Mistakes/>
      <Timeline/>
      <OfferPage/>
    </div>
  )
}


