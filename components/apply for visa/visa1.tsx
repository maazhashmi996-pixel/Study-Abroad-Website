"use client";
import Image from 'next/image';
export default function ApplyForVisaPage() {
const boxes=[
  {
    icon:'/images/steps/research.png',
    title:"Unconditional offer ",
    description:"from the university (or CAS for UK, CoE for Australia, LOA for Canada). No final admission = no visa."
  },
  {
    icon:'/images/steps/preference.png',
    title:"Valid passport  ",
    description:"(covering your study period)."
  },
  {
    icon:'/images/steps/location.png',
    title:"Proof of tuition payment / deposit ",
    description:"(many UK/Aus universities ask for this before giving CAS/CoE)"
  },
  {
    icon:'/images/steps/budget.png',
    title:" Proof of funds ",
    description:"that actually match the 2025 rules of that country (Canada increased funds from Sept 1, 2025; you can’t show old amounts)."
  },
  {
    icon:'/images/steps/language.png',
    title:"English test ",
    description:" (if your visa route requires separate proof)."
  },
  {
    icon:'/images/steps/product.png',
    title:" Medical / TB test / biometrics readiness",
    description:"(Canada gives 30 days for biometrics after letter; Australia needs health & OSHC; UK sometimes asks for TB for certain countries)."
  },
  {
    icon:'/images/steps/product.png',
    title:"SOP / Study plan / GTE-style explanation ",
    description:"(Canada & Australia especially care about intention)."
  },
]

  return (
    <main className="min-h-screen   py-6 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 lg:p-10    ">
        
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
        
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Apply for Visa
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base lg:text-lg">
            How to Apply for a Student Visa - 2026 Rules Guide
          </p>
        </header>

        {/* Section 1: Why this step matters */}
        <section className="mb-8 sm:mb-10">
          <div className='grid grid-cols-2'>
            <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
            Why This Step Matters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            This is the part where everything becomes real. You already have your <span className='font-bold text-black'>unconditional offer</span>  (or CAS/CoE/LOA depending on country), but you <span className='font-bold text-black'> cannot travel</span>  or start classes until the embassy/high commission approves your<span className='font-bold text-black'>student visa / study permit.</span> 
          </p>
          
          <div className="   sm:p-5 rounded-r-lg">
            <h3 className=" text-base sm:text-lg mb-2">
              A strong visa file shows 4 things:
            </h3>
            <ul className="   text-slate-700 text-xs sm:text-sm md:text-base">
              <li>You have a <span className='font-bold text-black'> genuine offer</span> from a recognized institution (CAS – UK, LOA – Canada, CoE – Australia).</li>
              <li>You have <span className='font-bold text-black'>enough money</span> to pay tuition + live in that country.</li>
              <li>You meet <span className='font-bold text-black'>English / academic</span> requirements.</li>
              <li>You're a <span className='font-bold text-black'> genuine student</span> who will follow visa rules and return/transition legally.</li>
            </ul>
          </div>
          </div>
         
          <div className=''>
            <Image
                    src="/images/steps/8-2.png"
                    alt="8-2"
                   height={500}
                  width={400}
                    className=""
                  />
          </div>
           </div>
        </section>

        {/* Section 2: Checklist */}
        <section className="mb-8 sm:mb-10">
          <div className='flex justify-between gap-10'>

            <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            What You Need Before Starting
              </h2>
            <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {boxes.map((boxes, index) => (
              <div key={index} className="flex flex-col gap-2  space-x-2.5  p-4 sm:p-3 rounded-lg border border-black text-xs sm:text-sm font-medium text-black">
                <Image 
                src={boxes.icon}
                alt='icon'
                height={80}
                width={80}
                className='text-black'
                />
                <h4 className='text-blue-950 font-extrabold'>{boxes.title}</h4>
                <p className='text-black'>{boxes.description}</p>
                
              </div>
            ))}
            </div>
            </div>
             </div>
               <div className=''>
              <Image
                    src="/images/steps/offer.png"
                    alt="offer"
                 height={800}
                  width={800}
                  className="  "
                  />
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            How This Step Works
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              { title: "Gather country-specific checklist", desc: "UK: CAS & funds; Canada: LOA & proof of funds; Australia: CoE & OSHC." },
              { title: "Fill application online", desc: "Enter personal, course, and financial data accurately as shown on official documents." },
              { title: "Upload documents clearly", desc: "Upload passport, offer letters, bank statements, sponsor details, and test scores." },
              { title: "Pay visa & biometrics fees", desc: "Complete payments directly through official portals." },
              { title: "Book biometrics appointment", desc: "Attend appointment at VAC/Gerry's with original documents." },
            ].map((step, index) => (
              <div key={index} className="flex gap-3 sm:gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs sm:text-sm">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Box */}
        <div className="bg-slate-900 text-white p-5 sm:p-8 rounded-xl text-center my-8 sm:my-10">
          <h2 className="text-lg sm:text-2xl font-bold mb-2">Need Expert Help with Your Visa File?</h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed">
            One small mistake can undo months of work. Let Times Consultant review your documents before submission.
          </p>
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base px-6 py-2.5 sm:py-3 rounded-lg transition duration-200">
            Submit My Visa with Expert Help
          </button>
        </div>

        {/* Section 4: FAQs */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="border border-slate-200 rounded-lg p-3.5 sm:p-4">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                When should I apply for my student visa?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                You should apply as soon as you have your unconditional offer/CAS/CoE/LOA and your funds are ready to avoid last-minute delays.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-3.5 sm:p-4">
              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
                Can I apply for a study visa with a conditional offer?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                In most cases, no. You need an unconditional offer or final acceptance document before filing your application.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}