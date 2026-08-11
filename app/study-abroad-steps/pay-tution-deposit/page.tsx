import PayDeposit from '@/components/steps/tution/deposit'
import EndPage from '@/components/steps/tution/end'
import PayTuition from '@/components/steps/tution/pay'
import ProofPage from '@/components/steps/tution/proof'

function page() {
  return (
    <div>
      <PayTuition/>
      <PayDeposit/>
      <ProofPage/>
      <EndPage/>
    </div>
  )
}

export default page
