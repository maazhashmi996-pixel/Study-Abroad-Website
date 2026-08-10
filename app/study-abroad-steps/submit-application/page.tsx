import Submit from '@/components/steps/submit/application'
import Blue from '@/components/steps/submit/blue'
import Mistakes from '@/components/steps/submit/mistakes'
import Yellow from '@/components/steps/submit/yellow'

export default function page() {
  return (
    <div>
      <Submit/>
      <Yellow/>
      <Blue/>
      <Mistakes/>
    </div>
  )
}


