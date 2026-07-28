"use client";

  import Image from "next/image";

import {
  GraduationCap,
  FileText,
  AlertCircle,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  MapPin,
} from "lucide-react";

export default function Selection() {
  const stepsList = [
    { number: 1, title: "Select Your Program", href: "/study-abroad-steps/select-your-program" },
    { number: 2, title: "Submit Application", href: "/study-abroad-steps/submit-application" },
    { number: 3, title: "Receive Offer Letter", href: "/study-abroad-steps/receive-offer-letter" },
    { number: 4, title: "Fulfill Conditions", href: "/study-abroad-steps/fulfill-conditions" },
    { number: 5, title: "Pay Tuition Deposit", href: "/study-abroad-steps/pay-tuition-deposit" },
    { number: 6, title: "Get Unconditional Offer", href: "/study-abroad-steps/get-unconditional-offer" },
    { number: 7, title: "Apply for Visa", href: "/study-abroad-steps/apply-for-visa" },
    { number: 8, title: "Start Your Program", href: "/study-abroad-steps/start-your-program" },
  ];

  const reasonCards = [
    {
      icon: GraduationCap,
      text: "University can't issue an offer if you don't apply.",
    },
    {
      icon: FileText,
      text: "University won't make it unconditional if you don't clear conditions.",
    },
    {
      icon: AlertCircle,
      text: "University won't make it unconditional if you don't clear conditions.",
    },
    {
      icon: FileCheck,
      text: "The Embassy won't issue a visa if you don't have final admission.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#3B1E54] leading-tight">
              Study Abroad Steps: From Course Selection to Your First Class
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Studying abroad is not one form or one email, it’s a{" "}
              <strong className="text-[#3B1E54]">sequence</strong>. Every successful student basically follows these 8 stages:
            </p>

            {/* 8 Steps Numbered List */}
            <ol className="space-y-2.5 pt-1">
              {stepsList.map((step) => (
                <li key={step.number} className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#3B1E54]">
                  <span>{step.number}.</span>
                  <a
                    href={step.href}
                    className="text-blue-600 hover:underline transition-colors"
                  >
                    {step.title}
                  </a>
                </li>
              ))}
            </ol>

            <p className="text-xs sm:text-sm text-slate-500 italic pt-2">
              Miss one step or do it late and you can lose the intake.
            </p>
          </div>

          {/* Right Hero Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-purple-50 rounded-full p-8 flex items-center justify-center border border-purple-100 shadow-sm">
              {/* Central Graphic Composition */}
              <div className="text-center space-y-4">
                <div className="flex justify-center space-x-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#3B1E54] text-[#ECA82C] flex items-center justify-center shadow">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-[#ECA82C] text-[#3B1E54] flex items-center justify-center shadow">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
               <div>
                <Image
                      src="/images/steps/selection.jpg"
                      alt="field selection"
                       width={400}
          height={200}
          className="w-full  object-cover"
                    />
               </div>
              </div>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B1E54]">
              Why follow the steps in order?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Because universities and embassies follow a process.
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
                      className="bg-white border-2 border-[#3B1E54] p-5 rounded-2xl shadow-sm space-y-3 flex flex-col justify-between min-h-[120px]"
                    >
                      <Icon className="w-6 h-6 text-[#3B1E54]" />
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
                  So the safest way (and the one we use at Times Consultant) is{" "}
                  <strong className="text-[#3B1E54]">
                    1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
                  </strong>
                  , no skipping.
                </p>
              </div>
            </div>

            {/* Right Decision Illustration */}
           
    <div>
                <Image
                      src="/images/steps/Why-follow.jpg"
                      alt="field selection"
                       width={1200}
          height={800}
          className="w-full  object-cover"
                    />
               </div>
          </div>

          <p className="text-center text-xs text-slate-500 pt-2">
            If you don't have these answers yet, you're not late. This is exactly what{" "}
            <strong className="text-[#3B1E54]">Times Consultant helps</strong> you define during your first session.
          </p>
        </div>

      </div>
    </div>
  );
}