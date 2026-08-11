"use client";

import Link from "next/link";
import {
  FileWarning,
  FileSearch,
  Globe,
  Clock3,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const mistakes = [
  {
    icon: <FileWarning className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "Sending partial documents",
    desc: "Example: you send only your 5th semester marks when the university clearly requested your complete final transcript. Incomplete submissions stop your application from moving forward.",
  },
  {
    icon: <FileSearch className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "Submitting documents that don't match your application",
    desc: "If your application says a CGPA of 3.2 but your transcript shows different information, the university may pause your application for clarification.",
  },
  {
    icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "Ignoring English language requirements",
    desc: "Many students delay taking IELTS or PTE. Waiting too long can cause you to miss visa deadlines and lose your admission opportunity.",
  },
  {
    icon: <Clock3 className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "Not understanding the deadline",
    desc: "Universities usually provide strict deadlines for document submission. Missing even one deadline can result in cancellation of your conditional offer.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />,
    title: "Assuming a 'Conditional Offer' means final admission",
    desc: "A conditional offer is not final acceptance. Until every condition is approved, your admission and visa process cannot move forward.",
  },
];

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

export default function Mistakes() {
  return (
    <div className="w-full font-sans bg-black text-white">
      
      {/* 1. MISTAKES SECTION */}
      <section className="bg-slate-950 border-y border-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Pitfalls to Avoid
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Common Mistakes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
              This is where many students lose time and, in some cases, lose the entire intake.
            </p>
          </div>

          {/* Grid Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {mistakes.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800/80 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 flex flex-col justify-start group"
              >
                <div className="mb-4 shrink-0 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 5th Centered Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900 border border-slate-800/80 hover:border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 group">
              <div className="mb-4 transition-transform group-hover:scale-110">
                {mistakes[4].icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-red-400 transition-colors mb-3">
                {mistakes[4].title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
                {mistakes[4].desc}
              </p>
            </div>
          </div>

          {/* Bottom Warning Callout */}
          <div className="max-w-3xl mx-auto pt-2">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg">
              <p className="text-center text-slate-300 font-medium text-xs sm:text-base leading-relaxed">
                The biggest mistake is thinking this step is just paperwork.{" "}
                <span className="text-[#0b5cff] font-extrabold block sm:inline mt-1 sm:mt-0">
                  It's actually about timing, accuracy, and compliance.
                </span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Expectations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Timeline
          </h2>
        </div>

        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 sm:p-5 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            “Receive Offer Letter” is Step 3. It comes <strong className="text-white">after</strong> you’ve submitted your application, and <strong className="text-[#0b5cff]">before</strong> fulfilling your conditions and paying tuition deposit.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 text-slate-300 p-4 sm:p-5 rounded-2xl font-semibold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            Universities typically take 2 to 6 weeks to issue an offer letter after application submission.
          </div>

          <div className="bg-slate-900 border border-slate-800 text-slate-300 p-4 sm:p-5 rounded-2xl font-semibold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            High-demand courses or competitive universities may take longer during peak submission windows.
          </div>

          <div className="bg-slate-900 border border-slate-800 text-slate-300 p-4 sm:p-5 rounded-2xl font-semibold text-xs sm:text-sm lg:text-base shadow-md leading-snug">
            Promptly responding to offer letters gives you sufficient time for condition clearance and visa filing.
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <Link
            href="/study-abroad-steps/submit-application"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-lg active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 shrink-0 text-[#0b5cff]" />
            <span>Previous step: Submit Application</span>
          </Link>

          <Link
            href="/study-abroad-steps/fulfill-conditions"
            className="w-full sm:w-auto bg-[#0b5cff] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-lg shadow-[#0b5cff]/20 active:scale-95"
          >
            <span>Next step: Fulfill Conditions</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </section>

      {/* 3. DOCUMENTS REQUIRED SECTION */}
      <section className="bg-slate-950 border-t border-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Documents / Proof Required
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Key documents involved during the offer letter acceptance phase
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center space-x-3 shadow-md hover:border-[#0b5cff]/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#0b5cff] shrink-0" />
                <p className="text-xs sm:text-sm text-slate-200 font-semibold leading-snug">
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