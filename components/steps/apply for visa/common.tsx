"use client";

import React from "react";
import Link from "next/link";

export default function Common() {
  const commonMistakes = [
    {
      title: "Showing outdated or too-low funds",
      description: "(big one for Canada, as requirement thresholds have increased).",
    },
    {
      title: "Not matching university data",
      description:
        "(visa application dates don't match CoE/CAS; course name spelled wrong).",
    },
    {
      title: "Weak intention / no proper study plan",
      description: "(visa officer not convinced you're going to study).",
    },
    {
      title: "Bank statements without ownership/explanation",
      description: "(who is paying? what is their relation?).",
    },
    {
      title: "Submitting before final offer",
      description: "(trying to file visa with conditional offer).",
    },
    {
      title: "Applying too late",
      description:
        "(embassies are slow near intake, so even a good file can miss the start date).",
    },
  ];

  return (
    <div className="w-full font-sans  text-slate-800 px-4 sm:px-6 md:px-8 lg:px-12">
      
      {/* Section 1: Common Mistakes */}
      <section className="py-10 sm:py-14 mx-auto   rounded-3xl p-6 sm:p-10 max-w-7xl text-center shadow-2xl relative overflow-hidden">
        
        {/* Subtle Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
            Avoid Refusals
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-slate-800 tracking-tight">
          Common Mistakes
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-8 font-medium max-w-xl mx-auto">
          This is a high-refusal step. Here are the most frequent reasons applications get rejected:
        </p>

        {/* Grid of Mistakes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
          {commonMistakes.map((mistake, index) => (
            <div
              key={index}
              className="bg-slate-900 border hover:bg-slate-100 border-slate-900 hover:border-[#0b5cff]/50 transition-all duration-200 rounded-2xl p-5 text-center flex flex-col justify-center min-h-[100px] shadow-lg group"
            >
              <h3 className="text-white hover:text-slate-700 group-hover:text-[#0b5cff] transition-colors font-extrabold text-sm sm:text-base mb-1">
                {mistake.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {mistake.description}
              </p>
            </div>
          ))}
        </div>

        {/* Small Notice Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl max-w-xl mx-auto py-2.5 px-4 text-xs text-slate-100 shadow-inner">
          Most of these are fixable <strong className="text-white">before</strong> submission—that's where D. Education Zone should be involved.
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-slate-900 my-8 text-center relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-[#0b5cff] text-xs font-bold">★</span>
      </div>

      {/* Section 2: Timeline */}
      <section className="py-6 px-4 max-w-7xl mx-auto text-center">
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2  px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Key Deadlines
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            Timeline (When This Happens in the Journey)
          </h2>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto mb-10 text-xs sm:text-sm">
          {/* UK Pill */}
          <div className="bg-slate-900 text-slate-300 py-3.5 px-6 rounded-2xl border border-slate-800 font-medium text-left sm:text-center shadow-md">
            <strong className="text-[#0b5cff] font-extrabold">UK:</strong> Often 6 months before course start when applying from outside the UK.
          </div>

          {/* Canada Pill */}
          <div className="bg-slate-900 text-slate-300 py-3.5 px-6 rounded-2xl border border-slate-800 font-medium text-left sm:text-center shadow-md">
            <strong className="text-[#0b5cff] font-extrabold">Canada:</strong> As soon as you have LOA and funds, due to caps and higher fund requirements leading to strict processing.
          </div>

          {/* Australia Pill */}
          <div className="bg-slate-900 text-slate-300 py-3.5 px-6 rounded-2xl border border-slate-800 font-medium text-left sm:text-center shadow-md">
            <strong className="text-[#0b5cff] font-extrabold">Australia:</strong> Apply early; CoE + OSHC must be ready prior to submission.
          </div>

          {/* Special Note Box */}
          <div className="bg-slate-950 text-slate-300 py-3 px-6 rounded-2xl font-semibold border border-slate-800 text-xs sm:text-sm mt-6 shadow-xl">
            Rule for students in Pakistan: <span className="font-black text-red-500 uppercase tracking-wider">Don't wait for "1 month before intake"</span>—that's how people miss flights.
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 pb-12">
          <Link
            href="#"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition duration-200 shadow-lg active:scale-95"
          >
            &larr; Previous Step: Get Unconditional Offer
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto bg-[#0b5cff] hover:bg-blue-600 border border-blue-400/20 text-white font-extrabold text-xs px-6 py-3 rounded-xl transition duration-200 shadow-lg active:scale-95"
          >
            Next Step: Start Your Program &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}