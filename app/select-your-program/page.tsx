
"use client";
import Mistakes from '@/components/steps/conditions/mistakes';
import Journey from '@/components/steps/select/journey'
import Selection from '@/components/steps/select/selection'

export default function page() {
  return (
    <div>
      <Selection/>
      <Journey/>
      <Mistakes/>
    </div>
  )
}


