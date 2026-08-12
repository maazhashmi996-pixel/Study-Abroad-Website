"use client";

import React from "react";
import Image from "next/image";

interface ProcessStep {
  image: string;
  title: string;
  desc: string;
}

export default function Red() {
  const processSteps: ProcessStep[] = [
    {
      image: "/images/steps/resume.png",
      title: "Create an application account / portal login",
      desc: "Some countries use centralized portals (like UCAS in the UK for undergrad). Others require applying directly on the university website. You'll create a profile and select your program.",
    },
    {
      image: "/images/steps/leadership.png",
      title: "Fill in your personal and academic details",
      desc: "Provide accurate personal details, previous educational qualifications, grades, and relevant work or extracurricular experience.",
    },
    {
      image: "/images/steps/countries.png",
      title: "Upload all required documents",
      desc: "This usually includes transcripts, certificates, passport scan, English test score, CV, and Statement of Purpose. Missing or blurry documents slow down your file.",
    },
    {
      image: "/images/steps/check.png",
      title: "Answer course-specific questions",
      desc: "Some programs ask why you chose that course, how it fits your career plan, or whether you understand the fees. Treat these seriously. Admissions and later, visa officers, both look at intent.",
    },
    {
      image: "/images/steps/budget.png",
      title: "Pay the application fee (if there is one)",
      desc: "Some universities charge an application fee. In some cases there is no fee. But if there is a fee, payment is part of 'submission' — it's not considered 'submitted' until paid.",
    },
    {
      image: "/images/steps/completed-form.png",
      title: "Submit before the deadline for your intake",
      desc: "Once submitted, you receive either a confirmation email or an application ID/reference number. Keep that safe. You will need it for follow-up.",
    },
  ];

  return (
    <section className="bg-slate-900 text-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
            Process Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            How This Step <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-400 leading-relaxed">
            Here is what &quot;Submit Application&quot; actually involves step-by-step
          </p>
        </div>

        {/* 6 Process Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-800/80 rounded-2xl p-6 border border-slate-700/60 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle accent bar on top hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Card Header with Step Image & Number Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="relative shrink-0 bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/50 group-hover:border-blue-500/30 transition-colors">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-black text-slate-600 group-hover:text-red-500 transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Banner */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="relative bg-slate-800/50 border-l-4 border-red-500 border-y border-r border-slate-700/60 rounded-r-xl p-5 shadow-lg backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
              <strong className="text-red-400 font-bold uppercase tracking-wider block mb-1">
                Next Phase
              </strong>
              After submitting, your file is with the university. Next, you wait for the decision: conditional offer, request for additional documents, interview invitation, or rejection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}