import PayDeposit from '@/components/tution/deposit'
import EndPage from '@/components/tution/end'
import PayTuition from '@/components/tution/pay'
import ProofPage from '@/components/tution/proof'

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
