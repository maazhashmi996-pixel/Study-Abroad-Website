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
    icon: <FileWarning size={40} />,
    title: "Sending partial documents",
    desc: "Example: you send only your 5th semester marks when the university clearly requested your complete final transcript. Incomplete submissions stop your application from moving forward.",
  },
  {
    icon: <FileSearch size={40} />,
    title: "Submitting documents that don't match your application",
    desc: "If your application says a CGPA of 3.2 but your transcript shows different information, the university may pause your application for clarification.",
  },
  {
    icon: <Globe size={40} />,
    title: "Ignoring English language requirements",
    desc: "Many students delay taking IELTS or PTE. Waiting too long can cause you to miss visa deadlines and lose your admission opportunity.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Not understanding the deadline",
    desc: "Universities usually provide strict deadlines for document submission. Missing even one deadline can result in cancellation of your conditional offer.",
  },
  {
    icon: <AlertTriangle size={40} />,
    title: "Assuming a 'Conditional Offer' means final admission",
    desc: "A conditional offer is not final acceptance. Until every condition is approved, your admission and visa process cannot move forward.",
  },
  
];

export default function Mistakes() {

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
    <>
    <section className="bg-[#3B1E54] py-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Common mistakes
          </h2>

          <p className="text-white/80 mt-4 text-lg">
            This is where many students lose time and, in some cases,
            lose the entire intake.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {mistakes.slice(0, 4).map((item, index) => (

            <div
              key={index}
              className="bg-[#4A2A6B] border border-[#5d3c80] rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl duration-300"
            >

              <div className="text-[#F6A800] mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#F6A800] mb-4">
                {item.title}
              </h3>

              <p className="text-white leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Center Card */}

        <div className="flex justify-center mt-8">

          <div className="bg-[#4A2A6B] border border-[#5d3c80] rounded-2xl p-8 max-w-3xl shadow-lg hover:-translate-y-2 duration-300">

            <div className="text-[#F6A800] mb-5">
              {mistakes[4].icon}
            </div>

            <h3 className="text-2xl font-bold text-[#F6A800] mb-4">
              {mistakes[4].title}
            </h3>

            <p className="text-white leading-8">
              {mistakes[4].desc}
            </p>

          </div>

        </div>

        {/* Bottom Warning */}

        <div className="flex justify-center mt-12">

          <div className="bg-[#4A2A6B] border border-[#5d3c80] rounded-xl px-8 py-5 max-w-4xl">

            <p className="text-center text-white font-semibold text-lg">
              The biggest mistake is thinking this step is just paperwork.
              <span className="text-[#F6A800]">
                {" "}It's actually about timing, accuracy, and compliance.
              </span>
            </p>

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
</>
  );
}