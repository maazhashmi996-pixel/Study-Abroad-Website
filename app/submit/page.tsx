import Submit from '@/components/steps/select/submit/application'
import Blue from '@/components/steps/select/submit/blue'
import Mistakes from '@/components/steps/select/submit/mistakes'
import Yellow from '@/components/steps/select/submit/yellow'

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


