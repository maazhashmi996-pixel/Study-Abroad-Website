import Fulfill from '@/components/steps/conditions/fulfill'
import Mistakes from '@/components/steps/conditions/mistakes'
import ProcessSection from '@/components/steps/conditions/proccess'
import Requirements from '@/components/steps/conditions/requirement'

function page() {
  return (
    <div>
      <Fulfill/>
<Requirements/>
<ProcessSection/>
<Mistakes/>

    </div>
  )
}

export default page
