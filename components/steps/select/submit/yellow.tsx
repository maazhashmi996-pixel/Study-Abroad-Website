"use client";

import React from "react";
import {
  UserPlus,
  UserCheck,
  Upload,
  HelpCircle,
  CreditCard,
  Clock,
} from "lucide-react";

export default function Yellow() {
  const processSteps = [
    {
      title: "Create an application account / portal login",
      desc: "Some countries use centralized portals (like UCAS in the UK for undergrad). Others require applying directly on the university website. You'll create a profile and select your program.",
      icon: UserPlus,
    },
    {
      title: "Fill in your personal and academic details",
      desc: "You enter your personal information, education history, grades, graduation dates, and (if applicable) work experience. This must match your documents exactly.",
      icon: UserCheck,
    },
    {
      title: "Upload all required documents",
      desc: "This usually includes transcripts, certificates, passport scan, English test score, CV, and Statement of Purpose. Missing or blurry documents slow down your file.",
      icon: Upload,
    },
    {
      title: "Answer course-specific questions",
      desc: "Some programs ask why you chose that course, how it fits your career plan, or whether you understand the fees. Treat these seriously. Admissions and later, visa officers, both look at intent.",
      icon: HelpCircle,
    },
    {
      title: "Pay the application fee (if there is one)",
      desc: "Some universities charge an application fee. In some cases there is no fee. But if there is a fee, payment is part of 'submission' — it's not considered 'submitted' until paid.",
      icon: CreditCard,
    },
    {
      title: "Submit before the deadline for your intake",
      desc: "Once submitted, you receive either a confirmation email or an application ID/reference number. Keep that safe. You will need it for follow-up.",
      icon: Clock,
    },
  ];

  return (
    <section className="bg-[#ECA82C] text-[#3B1E54] py-14 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            How this step works (checklist / process)
          </h2>
          <p className="text-xs sm:text-sm font-medium opacity-90">
            This is what "Submit Application" actually means in practice
          </p>
        </div>

        {/* 6 Process Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-amber-200/50 space-y-4"
              >
                <div className="space-y-3">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#3B1E54] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
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
            );
          })}
        </div>

        {/* Bottom Status Banner */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-300/40 border border-amber-400/60 rounded-xl p-4 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#3B1E54]">
              After this, your file is now with the university. You wait for the result: conditional offer, request for more documents, interview request, or rejection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}