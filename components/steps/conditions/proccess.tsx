"use client";

import {
  FileSearch,
  FileCheck2,
  Upload,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: <FileSearch className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b5cff]" />,
    title: "Read each condition in your offer letter",
    desc: `Example conditions:
• Provide final Bachelor's transcript
• Minimum CGPA requirement
• IELTS / PTE score
• Passport copy
• Proof of funds
• Tuition deposit`,
  },
  {
    icon: <FileCheck2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b5cff]" />,
    title: "Collect and prepare required documents",
    desc: "Get official copies, scanned documents, academic transcripts, English language results, passport copy, and every document requested by the university.",
  },
  {
    icon: <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b5cff]" />,
    title: "Submit the evidence back to the university",
    desc: "Upload the required documents through the university portal or send them by email if instructed. Make sure everything is clear and complete.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b5cff]" />,
    title: "Wait for confirmation",
    desc: "The admissions team reviews your documents. If everything matches their requirements, your conditions will be removed.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#0b5cff]" />,
    title: "Receive your unconditional offer",
    desc: "After all conditions are approved, you'll receive an unconditional offer and can move towards tuition payment and visa processing.",
  },
];

export default function ProcessSection() {
  return (
    <section className=" border-y border-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans text-slate-800 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-32 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Execution Phase
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-800 tracking-tight">
            How This Step Works
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-base lg:text-lg">
            Here's how the "Fulfill Conditions" stage should be completed.
          </p>
        </div>

        {/* Responsive Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-6 sm:p-7 hover:border-[#0b5cff]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-[#0b5cff]/40 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-xs font-extrabold text-[#0b5cff] bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug group-hover:text-[#0b5cff] transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note Box */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-lg">
            <p className="text-slate-300 font-medium text-center text-xs sm:text-base leading-relaxed">
              At the end of this step, you are no longer{" "}
              <span className="font-extrabold text-white underline decoration-[#0b5cff] decoration-2">
                conditionally accepted.
              </span>{" "}
              <span className="text-[#0b5cff] font-extrabold">You are cleared.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}