"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  CheckCircle,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function OfferPage() {
  // Prerequisites Data
  const prerequisites = [
    {
      title: "Your submitted university application",
      desc: "Step 2 completed and submitted to the university portal.",
    },
    {
      title: "Your application reference number",
      desc: "Keep your student portal login or reference code ready to track status.",
    },
    {
      title: "Active email monitoring",
      desc: "Check your inbox and spam folder daily for offer updates or requests.",
    },
    {
      title: "Understanding of entry requirements",
      desc: "Know what pending grades or language scores you still need to provide.",
    },
    {
      title: "Clear timeline awareness",
      desc: "Be prepared to act fast on offer deadlines to secure your seat.",
    },
    {
      title: "Financial planning in progress",
      desc: "Have a plan ready for how you will pay the tuition deposit when requested.",
    },
  ];

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

  // Common Mistakes (Purple Section)
  const mistakes = [
    {
      title: "Not reading offer conditions carefully",
      desc: "Missing specific academic or language score requirements can delay your unconditional offer.",
    },
    {
      title: "Ignoring offer acceptance deadlines",
      desc: "Universities can withdraw offers if you don't accept them before the stated date.",
    },
    {
      title: "Confusing conditional with unconditional offer",
      desc: "Assuming a conditional offer is final admission without clearing pending requirements.",
    },
    {
      title: "Delaying submission of pending documents",
      desc: "Waiting too long to submit final transcripts or IELTS results loses valuable processing time.",
    },
    {
      title: "Not checking email regularly",
      desc: "Missing important updates or clarifications sent by the admissions team.",
    },
  ];

  // Documents Required List
  const requiredDocs = [
    "Copy of Conditional Offer Letter",
    "Application Reference / Student ID",
    "Final Semester Transcripts (when ready)",
    "Official Language Test Score (IELTS/PTE/TOEFL)",
    "Updated Passport Copy (if requested)",
    "SOP / CV updates (if conditions specify)",
    "Financial Proofs / Sponsorship Letters",
    "Signed Offer Acceptance Form",
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
    {/* 1. HERO & WHY THIS STEP MATTERS */}
<section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 sm:space-y-12">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    
    {/* Left Content */}
    <div className="lg:col-span-7">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-[#3B1E54] tracking-tight">
        Receive Offer Letter
      </h1>

      <div className="space-y-3 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-[#3B1E54]">
          Why this step matters
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Your offer letter is the university saying, “We are willing to give you a place if you meet our conditions.”
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          This is the first official confirmation from the university after you submit your application. Most students receive a conditional offer letter first, which means you’re not fully approved yet, but you’re on track.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          You cannot move forward to deposit payment, visa, or travel without an offer letter. It’s the document that proves the university wants you.
        </p>

        <p className="text-xs sm:text-sm text-[#3B1E54] font-semibold pt-1">
          In short: Step 3 is the point where your application stops being “maybe” and becomes “yes, if...”
        </p>
      </div>
    </div>

    {/* Right Hero Image Container (FIXED) */}
    <div className="lg:col-span-5 flex justify-center items-center">
      <div className="relative w-full max-w-[380px] aspect-[4/3]">
        <Image 
          src="/images/steps/3-1.png"
          alt="Receive Offer Letter"  
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>

  </div>

  {/* DIVIDER WITH STAR */}
  <div className="relative flex py-2 items-center">
    <div className="flex-grow border-t border-slate-200"></div>
    <span className="flex-shrink mx-4 text-[#3B1E54] text-xs">★</span>
    <div className="flex-grow border-t border-slate-200"></div>
  </div>

  {/* 2. WHAT YOU NEED BEFORE STARTING */}
  <div className="space-y-6">
    <div>
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#3B1E54]">
        What you need before starting
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 mt-1">
        Before receiving and processing your offer letter, ensure you have:
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* Left Grid Cards */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prerequisites.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-[#3B1E54] p-5 rounded-2xl shadow-sm space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <CheckCircle className="w-5 h-5 text-[#3B1E54]" />
              <h3 className="font-extrabold text-xs sm:text-sm text-[#3B1E54]">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Prerequisites Image Container (FIXED) */}
      <div className="lg:col-span-4 flex justify-center items-center">
        <div className="relative w-full max-w-[300px] aspect-square">
          <Image 
            src="/images/steps/3.png"
            alt="Prerequisites Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 3. HOW THIS STEP WORKS (YELLOW BACKGROUND) */}
      <section className="bg-[#ECA82C] text-[#3B1E54] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              How this step works (checklist / process)
            </h2>
            <p className="text-xs sm:text-sm font-medium opacity-90">
              Understanding the process after receiving your initial offer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between border border-amber-200/50 space-y-4"
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
            <div className="bg-amber-300/40 border border-amber-400/60 rounded-xl p-4 text-center">
              <p className="text-xs sm:text-sm font-semibold text-[#3B1E54]">
                Once you review and accept your conditional offer, your next objective is clearing all specified conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMON MISTAKES (PURPLE BACKGROUND) */}
      <section className="bg-[#3B1E54] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Common mistakes
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90">
              Avoid these pitfalls after receiving your offer letter
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mistakes.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 shadow-lg space-y-2.5"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mistakes.slice(2, 4).map((item, idx) => (
                <div
                  key={idx + 2}
                  className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 shadow-lg space-y-2.5"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-6 shadow-lg space-y-2.5 text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                  {mistakes[4].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {mistakes[4].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B1E54]">Timeline</h2>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            “Receive Offer Letter” is Step 3. It comes <strong className="text-[#3B1E54]">after</strong> you’ve submitted your application, and <strong className="text-[#3B1E54]">before</strong> fulfilling your conditions and paying tuition deposit.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            Universities typically take 2 to 6 weeks to issue an offer letter after application submission.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            High-demand courses or competitive universities may take longer during peak submission windows.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            Promptly responding to offer letters gives you sufficient time for condition clearance and visa filing.
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/study-abroad-steps/submit-application"
            className="w-full sm:w-auto bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center space-x-2 shadow"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Previous step: Submit Application</span>
          </Link>

          <Link
            href="/study-abroad-steps/fulfill-conditions"
            className="w-full sm:w-auto bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center space-x-2 shadow"
          >
            <span>Next step: Fulfill Conditions</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>

      {/* 6. DOCUMENTS REQUIRED */}
      <section className="bg-[#3B1E54] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Documents / proof required
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90">
              Key documents involved during the offer letter acceptance phase
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#2E1643] border border-amber-400/40 rounded-xl p-4 flex items-center space-x-3 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#ECA82C] shrink-0" />
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">
                  {doc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}