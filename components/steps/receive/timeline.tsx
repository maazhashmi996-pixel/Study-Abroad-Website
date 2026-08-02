"use client";

import Link from "next/link";
import {

  ArrowLeft,
  ArrowRight,
} from "lucide-react";

function Timeline() {
  return (
      <>
      {/* 5. TIMELINE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B1E54] tracking-tight">
          Timeline
        </h2>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            “Receive Offer Letter” is Step 3. It comes <strong className="text-[#3B1E54]">after</strong> you’ve submitted your application, and <strong className="text-[#3B1E54]">before</strong> fulfilling your conditions and paying tuition deposit.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            Universities typically take 2 to 6 weeks to issue an offer letter after application submission.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            High-demand courses or competitive universities may take longer during peak submission windows.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            Promptly responding to offer letters gives you sufficient time for condition clearance and visa filing.
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <Link
            href="/study-abroad-steps/submit-application"
            className="w-full sm:w-auto bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Previous step: Submit Application</span>
          </Link>

          <Link
            href="/study-abroad-steps/fulfill-conditions"
            className="w-full sm:w-auto bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow active:scale-95"
          >
            <span>Next step: Fulfill Conditions</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>
</>
  )
}

export default Timeline
