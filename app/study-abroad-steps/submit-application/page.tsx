import Submit from '@/components/steps/submit/application'
import Blue from '@/components/steps/submit/blue'
import Mistakes from '@/components/steps/submit/mistakes'
import red from '@/components/steps/submit/red'

export default function page() {
  return (
    <div>
      <Submit/>
      <red/>
      <Blue/>
      <Mistakes/>
    </div>
  )
}


