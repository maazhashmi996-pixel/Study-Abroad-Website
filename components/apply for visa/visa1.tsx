import React from 'react';

export default function ApplyForVisaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-6 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
        
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-blue-600 bg-blue-50 px-2.5 sm:px-3 py-1 rounded-full inline-block mb-2">
            Step 07
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Apply for Visa
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base lg:text-lg">
            How to Apply for a Student Visa - 2026 Rules Guide
          </p>
        </header>

        {/* Section 1: Why this step matters */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
            Why This Step Matters
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            This is the part where everything becomes real. You already have your unconditional offer (or CAS/CoE/LOA depending on country), but you cannot travel or start classes until the embassy/high commission approves your student visa / study permit.
          </p>
          
          <div className="mt-4 sm:mt-6 bg-blue-50/50 border-l-4 border-blue-600 p-4 sm:p-5 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2">
              A strong visa file shows 4 things:
            </h3>
            <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-slate-700 text-xs sm:text-sm md:text-base">
              <li>You have a genuine offer from a recognized institution (CAS – UK, LOA – Canada, CoE – Australia).</li>
              <li>You have enough money to pay tuition + live in that country.</li>
              <li>You meet English / academic requirements.</li>
              <li>You're a genuine student who will follow visa rules and return/transition legally.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Checklist */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
            What You Need Before Starting
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            {[
              "Unconditional offer (CAS / CoE / LOA)",
              "Valid passport (covering study period)",
              "Proof of tuition payment / deposit",
              "Proof of funds matching current country rules",
              "English test scores (if required)",
              "Medical / TB test / biometrics readiness",
              "SOP / Study plan / GTE explanation",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2.5 bg-slate-50 p-2.5 sm:p-3 rounded-lg border border-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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