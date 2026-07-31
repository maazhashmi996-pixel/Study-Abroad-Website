import Image from 'next/image'


export default function Secure() {
  return (
    <div className='flex justify-between px-20 py-10 gap-20 bg-amber-500 text-white'>
        <div className='gap-10 flex flex-col  items-center '>
      <h1 className='text-4xl font-bold text-[#43246f]'>Secure Your Future With Times Consultant</h1>
      <p className=' text-xl' >Unlock your future with guaranteed guidance  and secure <br /><span> admission in 3000+ world-class universities through </span> our expert counseling.</p>
      <button className='px-4 py-2 bg-[#43246f] hover:bg-amber-500 border rounded-full  '>Book a free Consultation</button>
      </div>
      <div>
        <Image
                     src="/images/about/Secure.jpg"
                     alt="About Hero"
                     width={800}
                     height={700}
                     className="w-full max-w-[650px]"
                   />
      </div>
    </div>
  )
}


