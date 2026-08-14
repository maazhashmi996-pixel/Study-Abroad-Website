"use client"

import Red from '@/components/steps/receive/yellow'
import Submit from '@/components/steps/submit/application'
import Blue from '@/components/steps/submit/blue'
import Mistakes from '@/components/steps/submit/mistakes'

export default function page() {
  return (
    <div>
      <Submit/>
      <Red/>
      <Blue/>
      <Mistakes/>
    </div>
  )
}


