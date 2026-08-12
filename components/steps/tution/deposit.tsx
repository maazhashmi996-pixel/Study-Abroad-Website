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
    <main className="min-h-screen font-sans bg-slate-50">
      
      {/* SECTION 1: red/ORANGE PROCESS SECTION */}
      <section className="bg-[#e5a00d] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3a1b5c] tracking-tight">
              How This Step Works (Checklist & Process)
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[#3a1b5c]/90 leading-relaxed">
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
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-amber-200/60 flex flex-col justify-between space-y-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#3a1b5c] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-amber-700/80 bg-amber-50 px-2.5 py-1 rounded-md">
                        #{step.id}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
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
            <div className="bg-[#cca012] border border-amber-600/40 rounded-xl py-3 px-6 text-center text-xs sm:text-sm font-semibold text-slate-900 shadow-sm max-w-xl">
              At the completion of this step, the university confirms:{" "}
              <span className="font-extrabold underline decoration-2 underline-offset-2">
                &quot;This applicant has secured their placement.&quot;
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: DARK PURPLE COMMON MISTAKES SECTION */}
      <section className="bg-[#3a1b5c] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Common Mistakes to Avoid
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm font-medium leading-relaxed">
              Prevent processing holds and seat forfeitures by avoiding these frequent tuition deposit pitfalls
            </p>
          </div>

          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className={`bg-[#2c1249] border border-purple-800/60 rounded-2xl p-5 sm:p-6 text-center space-y-3 hover:border-purple-500/80 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between shadow-sm ${
                  index === commonMistakes.length - 1
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="space-y-2">
                  <div className="flex justify-center mb-1">
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-amber-400 leading-snug">
                    {mistake.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
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