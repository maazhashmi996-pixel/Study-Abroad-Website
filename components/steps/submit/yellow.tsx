"use client";

import React from "react";
import Image from "next/image";

interface ProcessStep {
  image: string;
  title: string;
  desc: string;
}

export default function Yellow() {
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
    <section className="bg-[#ECA82C] text-[#3B1E54] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            How This Step Works (Checklist & Process)
          </h2>
          <p className="text-xs sm:text-sm font-semibold opacity-90 leading-relaxed">
            Here is what &quot;Submit Application&quot; actually involves step-by-step
          </p>
        </div>

        {/* 6 Process Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between border border-amber-300/60 space-y-4"
            >
              {/* Card Header with Step Image & Number */}
              <div className="flex items-center gap-3">
                <div className="relative shrink-0  rounded-lg p-1.5 flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
               
              </div>

              {/* Text Content */}
              <div className="space-y-1.5 flex-1">
                <h3 className="font-bold text-sm sm:text-base text-[#3B1E54] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Banner */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="bg-[#3B1E54]/10 border border-[#3B1E54]/20 rounded-xl p-4 text-center shadow-sm backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-bold text-[#3B1E54] leading-relaxed">
              After submitting, your file is with the university. Next, you wait for the decision: conditional offer, request for additional documents, interview invitation, or rejection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}