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
    icon: <FileSearch className="w-8 h-8 sm:w-10 sm:h-10" />,
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
    icon: <FileCheck2 className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Collect and prepare required documents",
    desc: "Get official copies, scanned documents, academic transcripts, English language results, passport copy, and every document requested by the university.",
  },
  {
    icon: <Upload className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Submit the evidence back to the university",
    desc: "Upload the required documents through the university portal or send them by email if instructed. Make sure everything is clear and complete.",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Wait for confirmation",
    desc: "The admissions team reviews your documents. If everything matches their requirements, your conditions will be removed.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Receive your unconditional offer",
    desc: "After all conditions are approved, you'll receive an unconditional offer and can move towards tuition payment and visa processing.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F6A800] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B1E54] tracking-tight">
            How this step works
          </h2>
          <p className="text-slate-900 font-medium text-xs sm:text-base lg:text-lg">
            Here's how the "Fulfill Conditions" stage should be completed.
          </p>
        </div>

        {/* Responsive Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-amber-200 p-6 sm:p-7 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-[#3B1E54]">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-[#3B1E54] bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#3B1E54] leading-snug">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note Box */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-[#E8A200] border border-yellow-700/40 rounded-xl px-6 sm:px-8 py-4 shadow-sm">
            <p className="text-[#3B1E54] font-semibold text-center text-xs sm:text-base leading-relaxed">
              At the end of this step, you are no longer{" "}
              <span className="font-bold underline decoration-purple-900 decoration-2">
                conditionally accepted.
              </span>{" "}
              You are cleared.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}