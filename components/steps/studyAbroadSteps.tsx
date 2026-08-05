"use client";

import React from "react";
import Image from "next/image";

export default function StudyAbroadSteps() {
  const stepsList = [
    "Select Your Program",
    "Submit Application",
    "Receive Offer Letter",
    "Fulfill Conditions",
    "Pay Tuition Deposit",
    "Get Unconditional Offer",
    "Apply for Visa",
    "Start Your Program",
  ];

  const whyStepsCards = [
    {
      text: "University can't issue an offer if you don't apply.",
    },
    {
      text: "University won't make it unconditional if you don't clear conditions.",
    },
    {
      text: "Deposit guarantees your seat allocation before CAS/CoE issuance.",
    },
    {
      text: "The Embassy won't issue a visa if you don't have final admission.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* ---------------- SECTION 1: HERO & STEPS LIST ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Column: Heading & Ordered Steps */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#2a1747] leading-tight tracking-tight">
            Study Abroad Steps: From Course Selection to Your First Class
          </h1>
          
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Studying abroad is not one form or one email, it's a{" "}
            <strong className="text-gray-900 font-bold">sequence</strong>.<br />
            Every successful student basically follows these 8 stages:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-blue-600 font-semibold pt-2 text-left max-w-xs mx-auto md:mx-0">
            {stepsList.map((step, index) => (
              <li key={index} className="cursor-pointer hover:underline hover:text-blue-700 transition-colors">
                <span className="text-gray-800 hover:text-blue-700">{step}</span>
              </li>
            ))}
          </ol>

          <p className="text-[11px] sm:text-xs text-gray-500 italic pt-2">
            Miss one step or do it late and you can lose the intake.
          </p>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square">
            <Image
              src="/images/steps/selection.jpg"
              alt="Course and Program Selection Illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="object-contain"
            />
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-amber-400 my-4 text-center relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-amber-500 text-xs">★</span>
      </div>

      {/* ---------------- SECTION 2: WHY FOLLOW STEPS ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-3xl font-bold text-[#2a1747] tracking-tight">
            Why follow the steps in order?
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Because universities and embassies follow a strict, structured process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* 2x2 Grid Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyStepsCards.map((card, idx) => (
              <div
                key={idx}
                className="border border-purple-900/20 rounded-xl p-4 sm:p-5 bg-white shadow-sm flex items-start gap-3 sm:gap-4 hover:border-purple-600 transition-all duration-200"
              >
                <div className="text-purple-900 text-xl sm:text-2xl font-bold shrink-0 leading-none pt-0.5">↳</div>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                  {card.text}
                </p>
              </div>
            ))}

            {/* Bottom Full-width Note Box inside Grid */}
            <div className="sm:col-span-2 border border-purple-900/20 rounded-xl p-4 bg-purple-50/50 text-center">
              <p className="text-xs sm:text-sm text-gray-700">
                So the safest way (and the one we use at D.Education Zone) is{" "}
                <span className="font-bold text-[#2a1747] whitespace-nowrap">
                  1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
                </span>
                , no skipping.
              </p>
            </div>
          </div>

          {/* Right Direction Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[260px] aspect-square">
              <Image
                src="/images/steps/Why-follow.jpg"
                alt="Why follow process steps illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 260px"
                className="object-contain"
              />
            </div>
          </div>

        </div>

        <p className="text-center text-xs sm:text-sm text-gray-500 max-w-xl mx-auto pt-2">
          If you don't have these answers yet, you're not late. This is exactly{" "}
          <strong className="text-gray-900 font-semibold">what D.Education Zone helps</strong> you define during your first session.
        </p>
      </section>

      {/* ---------------- SECTION 3: BANNER ---------------- */}
      <section className="bg-[#f5a623] py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2a1747] text-center md:text-left tracking-tight">
            The 8 Study Abroad Steps
          </h2>

          {/* Feature Card Preview */}
          <div className="bg-white rounded-xl p-5 max-w-sm w-full shadow-md border-l-4 border-[#2a1747]">
            <h3 className="font-bold text-sm sm:text-base text-[#2a1747] mb-1">
              Select Your Program
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}