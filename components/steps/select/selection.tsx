"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  FileText,
  AlertCircle,
  FileCheck,
} from "lucide-react";

export default function Selection() {
  const stepsList = [
    { number: 1, title: "Select Your Program", href: "/study-abroad-steps/select-your-program" },
    { number: 2, title: "Submit Application", href: "/study-abroad-steps/submit-application" },
    { number: 3, title: "Receive Offer Letter", href: "/study-abroad-steps/receive-offer-letter" },
    { number: 4, title: "Fulfill Conditions", href: "/study-abroad-steps/fulfill-conditions" },
    { number: 5, title: "Pay Tuition Deposit", href: "/study-abroad-steps/pay-tution-deposit" },
    { number: 6, title: "Get Unconditional Offer", href: "/study-abroad-steps/get-unconditional-offer" },
    { number: 7, title: "Apply for Visa", href: "/study-abroad-steps/apply-for-visa" },
    { number: 8, title: "Start Your Program", href: "/study-abroad-steps/start-your-program" },
  ];

  const reasonCards = [
    {
      icon: GraduationCap,
      text: "The university can't issue an offer letter if you don't submit an application.",
    },
    {
      icon: FileText,
      text: "Universities will not convert a conditional offer until all requirements are met.",
    },
    {
      icon: AlertCircle,
      text: "Seat allocation and official documents (CAS/CoE) depend on tuition deposit verification.",
    },
    {
      icon: FileCheck,
      text: "Embassies require an official unconditional acceptance before issuing a student visa.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 py-6 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3B1E54] leading-tight tracking-tight">
              Study Abroad Steps: From Course Selection to Your First Class
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Studying abroad is not one form or one email; it’s a{" "}
              <strong className="text-[#3B1E54]">structured sequence</strong>. Every successful international student follows these 8 core stages:
            </p>

            {/* 8 Steps Numbered List */}
            <ol className="space-y-2.5 pt-1 text-left w-full">
              {stepsList.map((step) => (
                <li key={step.number} className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#3B1E54]">
                  <span className="w-5 text-right text-slate-400 shrink-0">{step.number}.</span>
                  <Link
                    href={step.href}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                  >
                    {step.title}
                  </Link>
                </li>
              ))}
            </ol>

            <p className="text-xs sm:text-sm text-slate-500 italic pt-1">
              Miss one step or delay submission and you risk missing your target intake.
            </p>
          </div>

          {/* Right Hero Illustration Container */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square">
              <Image
                src="/images/steps/2-1.png"
                alt="Study abroad step illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* DIVIDER WITH STAR */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs">★</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* WHY FOLLOW THE STEPS IN ORDER SECTION */}
        <div className="space-y-8">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#3B1E54] tracking-tight">
              Why follow the steps in order?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Universities and immigration authorities follow strict procedural checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 Cards Grid */}
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasonCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border-2 border-[#3B1E54] p-5 rounded-2xl shadow-sm space-y-3 flex flex-col justify-between min-h-[120px] hover:shadow-md transition-shadow"
                    >
                      <Icon className="w-6 h-6 text-[#3B1E54] shrink-0" />
                      <p className="text-xs sm:text-sm font-bold text-[#3B1E54] leading-snug">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Formula Badge Box */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                <p className="text-xs sm:text-sm text-slate-700">
                  The most reliable pathway (utilized by Times Consultant) is{" "}
                  <strong className="text-[#3B1E54] inline-block">
                    1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
                  </strong>
                  , with zero skipped stages.
                </p>
              </div>
            </div>

            {/* Right Decision Illustration */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5]">
                <Image
                  src="/images/steps/1.png"
                  alt="Decision step illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-slate-500 pt-2 max-w-xl mx-auto">
            If you aren't sure where to start, you are not late. This is precisely what{" "}
            <strong className="text-[#3B1E54]">Times Consultant</strong> structures during your first profile assessment session.
          </p>
        </div>

      </div>
    </div>
  );
}