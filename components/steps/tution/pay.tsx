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
  ArrowRight,
} from "lucide-react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

interface RequirementCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const requirementItems: RequirementCardProps[] = [
  {
    title: "Your latest offer letter",
    description:
      "Conditional or almost cleared. It should clearly specify the deposit amount and submission deadline.",
    icon: FileText,
  },
  {
    title: "Confirmation of conditions",
    description:
      'If your offer states "pay deposit after sending X documents," ensure those documents have been submitted before payment.',
    icon: CheckCircle2,
  },
  {
    title: "Exact deposit amount & currency",
    description:
      "Universities may specify a fixed fee such as £2,000, CAD $5,000, or AUD $5,000, or a percentage of first-year tuition.",
    icon: Coins,
  },
  {
    title: "Official payment portal instructions",
    description:
      "Use official university bank accounts, student portals, Flywire, or Convera. Never transfer funds to an unverified account.",
    icon: Building2,
  },
  {
    title: "Proof of payment",
    description:
      "Keep your bank receipt or transaction confirmation. You may need it for your unconditional offer, CAS, CoE, or visa processing.",
    icon: Receipt,
  },
  {
    title: "Intake processing timeline",
    description:
      "Payments made close to deadlines can cause administrative delays and may affect your visa processing schedule.",
    icon: CalendarClock,
  },
];

export default function PayTuition() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        {/* =========================================================
            HERO SECTION
        ========================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* Small Label */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Tuition & Enrollment
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Pay Tuition Deposit
              </h1>

              <div className="w-16 h-1 rounded-full bg-blue-600" />
            </div>

            {/* Why This Matters */}
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Why this step matters
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-7">
                Paying the tuition deposit is how you{" "}
                <strong className="font-semibold text-slate-900">
                  secure your seat
                </strong>{" "}
                at the university. The institution may have already issued
                your offer, but your placement is generally reserved only
                after the required deposit has been received.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-7">
                In major study destinations such as the UK, Australia, Canada
                and Europe, payment can trigger important next steps including
                your{" "}
                <strong className="font-semibold text-blue-700">
                  CAS, CoE, or Unconditional Acceptance
                </strong>
                .
              </p>
            </div>

            {/* Consequences */}
            <div className="space-y-3 pt-1">
              <p className="text-sm font-bold text-slate-900">
                Delaying your payment may result in:
              </p>

              <ul className="space-y-3">
                {[
                  "Delays in obtaining your unconditional offer letter",
                  "Delays in generating official visa documentation",
                  "Risk of losing your seat to waitlisted applicants",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 border border-red-100 text-red-600 font-bold text-xs shrink-0">
                      {index + 1}
                    </span>

                    <span className="pt-0.5 leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Statement */}
            <div className="border-l-4 border-blue-600 pl-4 py-1">
              <p className="text-sm sm:text-base text-slate-700 leading-7">
                This milestone goes beyond financial clearance — it helps
                officially{" "}
                <span className="font-bold text-blue-700">
                  secure your intake
                </span>{" "}
                and move your application toward the next stage.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden">
              <Image
                src="/images/steps/tuition.jpg"
                alt="Tuition deposit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain p-6 sm:p-8"
              />

              {/* Blue Decorative Element */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-100" />

              <div className="absolute bottom-5 left-5 w-20 h-2 rounded-full bg-blue-600/20" />
            </div>
          </div>
        </section>

        {/* =========================================================
            DIVIDER
        ========================================================== */}
        <div className="flex items-center gap-4 my-14 sm:my-20">
          <div className="h-px flex-1 bg-slate-200" />

          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 border border-blue-100">
            <span className="text-blue-600 font-bold text-sm">01</span>
          </div>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* =========================================================
            REQUIREMENTS SECTION
        ========================================================== */}
        <section>

          {/* Section Heading */}
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
              Before You Pay
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              What You Need Before Starting
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-500 leading-7">
              Make sure the following information has been checked and
              verified before transferring any tuition funds.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

            {/* REQUIREMENT CARDS */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {requirementItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      bg-white
                      border border-slate-200
                      rounded-2xl
                      p-5 sm:p-6
                      transition-all duration-300
                      hover:border-blue-200
                      hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]
                    "
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="text-xs font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* IMAGE */}
            <div className="flex justify-center items-start">
              <div className="relative w-full max-w-sm aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden lg:sticky lg:top-8">
                <Image
                  src="/images/steps/isfinance.jpg"
                  alt="Financial requirements verification"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-contain p-6"
                />

                {/* Decorative Blue Circle */}
                <div className="absolute top-5 right-5 w-14 h-14 rounded-full border-8 border-blue-100" />

                {/* Decorative Red Accent */}
                <div className="absolute bottom-6 left-6 w-10 h-10 rounded-xl bg-red-50 border border-red-100" />
              </div>
            </div>
          </div>

          {/* =========================================================
              VERIFICATION NOTICE
          ========================================================== */}
          <div className="mt-10 rounded-2xl border border-slate-500 bg-slate-50/60 p-5 sm:p-6">

           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 border border-slate-900">
            <FaCheckCircle className="text-slate-200" />
            <span className="text-slate-200" >Secure International Transfers</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-600 tracking-tight">
            Need verification before transferring funds?
          </h2>
          
          <p className=" text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            <strong className="text-slate-900">D.Education Zone</strong> can help verify your offer letter, deposit amount, and official payment channels before you initiate an international transfer.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0">
          <a
            href="tel:+923000000000" // Apna Contact Number yahan replace karein
            className="group flex items-center gap-3 bg-blue-500 hover:bg-red-600 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="p-2 bg-white/20 rounded-full group-hover:rotate-12 transition-transform">
              <FaPhoneAlt className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <span className="block text-xs text-green-100 uppercase tracking-wider font-semibold">Get Instant Assistance</span>
              <span className="text-lg leading-none">Call Us Now</span>
            </div>
          </a>
        </div>

      </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM TRUST STRIP
        ========================================================== */}
        <section className="mt-14 sm:mt-20">

          <div className="border-t border-slate-200 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Verify First
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Confirm payment details before transferring funds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Receipt className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Keep Your Receipt
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Save every payment confirmation for future processing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <CalendarClock className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Watch Deadlines
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Avoid unnecessary delays in your intake processing.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}