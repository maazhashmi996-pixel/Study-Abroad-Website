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

interface ProcessStep {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export default function Yellow() {
  const processSteps: ProcessStep[] = [
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
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between border border-amber-300/60 space-y-4"
              >
                <div className="space-y-3">
                  {/* Icon & Step Number Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#3B1E54] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-[#3B1E54]/70 bg-purple-50 px-2.5 py-1 rounded-md">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-[#3B1E54] leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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