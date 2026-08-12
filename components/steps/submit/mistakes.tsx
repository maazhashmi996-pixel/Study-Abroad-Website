"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Mistakes() {
  // Documents Required List
  const requiredDocs = [
    "Academic transcripts / mark sheets",
    "Degree certificate or provisional certificate (if graduated)",
    "Current semester or final year transcript (if still studying)",
    "English language test scores (IELTS / PTE / TOEFL), or proof of medium of instruction where accepted",
    "Passport ID page",
    "Statement of Purpose / Personal Statement",
    "CV / Resume (postgraduate, MBA, or skill-based programs)",
    "Work experience letters (for programs that require relevant experience)",
    "Reference letters / referee contact details (if the program requests them)",
    "Application fee payment receipt (if applicable)",
  ];

  return (
    <div className="w-full font-sans bg-slate-50 text-slate-800">
      
      {/* 1. TIMELINE & STEP NAVIGATION SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Application <span className="text-blue-600">Timeline</span>
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              &quot;Submit Application&quot; is <strong className="text-blue-600">Step 2</strong>. It comes{" "}
              <strong className="text-blue-600">after</strong> you have chosen the correct program and country, and{" "}
              <strong className="text-blue-600">before</strong> you receive any official offer letter.
            </p>
          </div>
        </div>

        {/* Timeline Key Takeaways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="bg-white border border-slate-200 text-slate-800 p-5 rounded-2xl font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center text-center leading-relaxed hover:border-blue-500/50 transition-colors">
            You should submit your university applications about 4–6 months before your intended start date.
          </div>

          <div className="bg-white border border-slate-200 text-slate-800 p-5 rounded-2xl font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center text-center leading-relaxed hover:border-blue-500/50 transition-colors">
            For a September intake, most serious students submit applications between February and May.
          </div>

          <div className="bg-white border border-slate-200 text-slate-800 p-5 rounded-2xl font-semibold text-xs sm:text-sm shadow-sm flex items-center justify-center text-center leading-relaxed hover:border-blue-500/50 transition-colors">
            The earlier you apply, the better your chances for faster decisions, seat availability, and visa processing time.
          </div>
        </div>

        {/* Step Navigation Pill Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
          <Link
            href="/study-abroad-steps/select-your-program"
            className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 active:scale-95 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all inline-flex items-center justify-center space-x-2 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 shrink-0 text-slate-600" />
            <span>Previous step: Select Your Program</span>
          </Link>

          <Link
            href="/study-abroad-steps/receive-offer-letter"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all inline-flex items-center justify-center space-x-2 shadow-sm"
          >
            <span>Next step: Receive Offer Letter</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

      </section>

      {/* 2. DOCUMENTS / PROOF REQUIRED SECTION */}
      <section className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Documents & <span className="text-blue-400">Proof Required</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 opacity-90 leading-relaxed">
              When you submit your application, you are expected to provide some or all of the following documents:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-4 flex items-center space-x-3 shadow-md hover:border-blue-500/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/60 border-l-4 border-l-red-500 border-slate-700/80 rounded-r-2xl rounded-l-md p-4 sm:p-5 text-center">
            <p className="text-xs sm:text-sm text-red-400 font-medium max-w-2xl mx-auto leading-relaxed">
              <strong className="text-red-500 font-bold">Important:</strong> Universities do not make assumptions. If a document is missing or unreadable, they will pause your file, leading to potential delays during visa filing.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}