import Common from '@/components/steps/apply for visa/common'
import EndPage from '@/components/steps/apply for visa/end'
import Proof from '@/components/steps/apply for visa/proof'
import ApplyForVisaPage from '@/components/steps/apply for visa/visa1'

function page() {
  return (
    <div>
      <ApplyForVisaPage/>
      <Common/>
      <Proof/>
      <EndPage/>
    </div>
  )
}

export default page
