"use client";

import React from "react";
import {
  FileSearch,
  CheckCircle2,
  CreditCard,
  CalendarClock,
  Receipt,
  MailCheck,
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

// Types
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

interface CommonMistake {
  title: string;
  description: string;
}

// Data
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Read the offer letter carefully",
    description:
      'Locate the section stating "Tuition Deposit," "Initial Fee," or "To secure your place." Note the exact deposit amount, deadline, and payment terms.',
    icon: FileSearch,
  },
  {
    id: 2,
    title: "Confirm conditions before proceeding",
    description:
      "Verify whether the deposit should be paid before or after meeting academic/English entry conditions to avoid hold-ups.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Select an approved payment method",
    description:
      "Use only approved university payment portals, international bank transfers, or official partner platforms (such as Flywire or Convera).",
    icon: CreditCard,
  },
  {
    id: 4,
    title: "Pay ahead of the deadline",
    description:
      "Factor in currency exchange windows and bank processing time. Overseas transfers typically require 1–3 business days.",
    icon: CalendarClock,
  },
  {
    id: 5,
    title: "Retain and submit proof of payment",
    description:
      "Save your official bank wire receipt or digital portal confirmation. Upload or email the proof promptly with your application ID.",
    icon: Receipt,
  },
  {
    id: 6,
    title: "Request official receipt confirmation",
    description:
      "Verify that the university acknowledges receipt of funds. This step triggers issuance of your CAS, CoE, or Unconditional Offer.",
    icon: MailCheck,
  },
];

const commonMistakes: CommonMistake[] = [
  {
    title: "Missing payment reference numbers",
    description:
      "Omitting your application ID or student ID makes matching your transfer difficult for university finance teams.",
  },
  {
    title: "Missing deposit deadlines",
    description:
      "Submitting payment past the deadline risks losing your reserved place in oversubscribed programs.",
  },
  {
    title: "Failing to send payment receipts",
    description:
      "Many institutions do not automatically map wire transfers. Forgetting to upload your receipt delays application progress.",
  },
  {
    title: "Paying before required conditions are met",
    description:
      "Transferring funds prior to satisfying academic pre-requisites can cause administrative delays or refund complications.",
  },
  {
    title: "Using unverified third-party accounts",
    description:
      "Avoid transferring funds through unverified third-party agents. Stick strictly to verified university payment paths.",
  },
];

export default function PayDeposit() {
  return (
    <main className="min-h-screen font-sans bg-white text-slate-900 pb-16 sm:pb-20">
      
      {/* SECTION 1: PROCESS CHECKLIST */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full mb-1">
              Checklist & Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How This Step <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed">
              Step-by-step guidance on securing your university seat with your initial tuition deposit
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="group relative bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-blue-400/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-blue-600 bg-blue-100/60 border border-blue-200/50 px-2.5 py-1 rounded-md">
                        Step 0{step.id}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Confirmation Tag */}
          <div className="flex justify-center pt-2">
            <div className="bg-blue-50/80 border border-blue-200/80 rounded-xl py-3.5 px-6 text-center text-xs sm:text-sm font-medium text-slate-800 shadow-2xs max-w-2xl">
              At the completion of this step, the university confirms:{" "}
              <span className="font-bold text-blue-600 underline decoration-2 underline-offset-2">
                &quot;This applicant has secured their placement.&quot;
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: COMMON MISTAKES TO AVOID */}
      <section className="bg-slate-50/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="w-10 h-10 bg-red-50 text-red-600 border border-red-100 rounded-xl mx-auto flex items-center justify-center mb-2">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common Mistakes to <span className="text-red-600">Avoid</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              Prevent processing holds and seat forfeitures by avoiding these frequent tuition deposit pitfalls
            </p>
          </div>

          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className={`bg-white border-l-4 border-l-red-500 border-y border-r border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3 hover:shadow-sm transition-all duration-200 flex flex-col justify-between shadow-2xs ${
                  index === commonMistakes.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-extrabold text-red-600 leading-snug">
                      {mistake.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {mistake.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}