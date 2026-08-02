"use client";

import {
  HelpCircle,

} from "lucide-react";

function Yellow() {

     // Process Steps (Yellow Section)
  const processSteps = [
    {
      title: "University reviews your file",
      desc: "The admissions team checks your transcripts, SOP, and eligibility against their entry criteria.",
    },
    {
      title: "Decision issued: Conditional or Unconditional",
      desc: "Most initial responses are conditional offers outlining exact requirements you must meet.",
    },
    {
      title: "Review terms and conditions",
      desc: "Carefully read tuition fees, deposit deadlines, refund policies, and course start dates.",
    },
    {
      title: "Accept the offer letter",
      desc: "Confirm your place by accepting the offer formally through the student portal or email.",
    },
    {
      title: "Prepare to fulfill conditions",
      desc: "Gather final transcripts, English test results, or financial proofs required next.",
    },
    {
      title: "Keep track of response deadlines",
      desc: "Failing to accept or respond on time can lead to the university canceling your offer.",
    },
  ];
  return (
    <>
   
      {/* 3. HOW THIS STEP WORKS (YELLOW BACKGROUND) */}
      <section className="bg-[#ECA82C] text-[#3B1E54] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              How this step works (checklist / process)
            </h2>
            <p className="text-xs sm:text-sm font-medium opacity-90">
              Understanding the process after receiving your initial offer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between border border-amber-200/50 space-y-4 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#3B1E54] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-[#3B1E54] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-300/40 border border-amber-400/60 rounded-xl p-4 text-center shadow-sm">
              <p className="text-xs sm:text-sm font-semibold text-[#3B1E54] leading-relaxed">
                Once you review and accept your conditional offer, your next objective is clearing all specified conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Yellow
