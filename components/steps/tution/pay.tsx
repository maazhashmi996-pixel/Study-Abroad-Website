"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  CheckCircle2,
  Coins,
  Building2,
  Receipt,
  CalendarClock,
  AlertCircle,
} from "lucide-react";

interface RequirementCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const requirementItems: RequirementCardProps[] = [
  {
    title: "Your latest offer letter",
    description:
      "(Conditional or almost cleared). It should clearly specify the deposit amount and submission deadline.",
    icon: FileText,
  },
  {
    title: "Confirmation of conditions",
    description:
      'If your offer states "pay deposit after sending X documents," ensure those have been submitted. Some institutions require conditions to be satisfied prior to payment.',
    icon: CheckCircle2,
  },
  {
    title: "Exact deposit amount & currency",
    description:
      "Institutions either specify a fixed fee (e.g., £2,000 / CAD $5,000 / AUD $5,000) or a percentage of first-year tuition.",
    icon: Coins,
  },
  {
    title: "Official payment portal instructions",
    description:
      "Official bank accounts, online student portals, Flywire, or Convera. Never send payments to unverified individual accounts.",
    icon: Building2,
  },
  {
    title: "Ability to retain proof of payment",
    description:
      "You will require a bank receipt or transaction confirmation for subsequent processing (Unconditional Offer / CAS / Visa).",
    icon: Receipt,
  },
  {
    title: "Intake processing timeline",
    description:
      "Submitting payments close to deadlines can result in administrative delays that jeopardize your visa processing schedule.",
    icon: CalendarClock,
  },
];

export default function PayTuition() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* SECTION 1: HERO & WHY THIS STEP MATTERS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block">
                Tuition & Enrollment
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Pay Tuition Deposit
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-700">
              Why this step matters
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Paying the tuition deposit is how you{" "}
              <strong className="font-semibold text-slate-900">secure your seat</strong> in the
              university. Up to this point, the institution has issued an offer, but they will only{" "}
              <strong className="font-semibold text-slate-900">reserve your placement</strong> once
              the required deposit is received.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In major study destinations (UK, Australia, Canada, Europe), the deposit triggers essential next steps, such as obtaining your{" "}
              <strong className="font-semibold text-slate-900">CAS, CoE, or Unconditional Acceptance</strong>. Delaying payment can result in:
            </p>

            {/* List of Consequences */}
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium pt-1">
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <span>Delays in obtaining your unconditional offer letter</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <span>Delays in generating official visa documentation</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <span>Forfeiture of your seat to waitlisted applicants</span>
              </li>
            </ul>

            <p className="text-xs sm:text-sm text-slate-700 font-medium pt-2">
              This milestone goes beyond financial clearance—it officially{" "}
              <span className="font-extrabold text-slate-900 underline decoration-amber-400 decoration-2 underline-offset-2">
                locks in your intake
              </span>.
            </p>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl bg-slate-50/50 p-4">
              <Image
                src="/images/steps/6-2.png"
                alt="Tuition deposit illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </section>

        {/* STAR DIVIDER */}
        <div className="flex items-center justify-center">
          <div className="h-px bg-amber-300 w-full max-w-md" />
          <span className="px-4 text-amber-500 font-bold text-lg">★</span>
          <div className="h-px bg-amber-300 w-full max-w-md" />
        </div>

        {/* SECTION 2: WHAT YOU NEED BEFORE STARTING */}
        <section className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What You Need Before Starting
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Ensure you have verified the following items prior to transferring funds:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Checklist Grid (2 Columns on Medium+) */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {requirementItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 border border-slate-200 rounded-2xl bg-white shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-start space-y-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-slate-900 text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side Illustration */}
            <div className="flex justify-center items-center lg:sticky lg:top-8">
              <div className="relative w-full max-w-xs aspect-square rounded-2xl bg-slate-50/50 p-4">
                <Image
                  src="/images/steps/7-2.png"
                  alt="Requirements verification illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>

          {/* Bottom Callout Notice */}
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 space-y-2 flex items-start space-x-3 shadow-xs">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-slate-800 leading-relaxed">
                Need verification before transferring funds?
              </p>
              <p className="text-slate-600 leading-relaxed">
                Times Consultant can verify your offer letter and official payment channels before you initiate an international transfer. Book a free consultation to ensure a smooth transition.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}