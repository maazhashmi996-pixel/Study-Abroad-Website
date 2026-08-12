"use client";

import React from "react";

export default function Proof() {
  const leftDocuments = [
    "Valid passport",
    "Proof of tuition payment / deposit",
    "English test (if required)",
    "OSHC (for Australia)",
    "Photos (as per embassy spec)",
  ];

  const rightDocuments = [
    "Unconditional offer / CAS (UK) / CoE (Australia) / LOA (Canada)",
    "Proof of funds (bank statement, GIC, sponsor letter, income docs)",
    "Medical/TB where applicable",
    "Visa application form + payment receipt",
    "Statement of Purpose / Study Plan / GTE (Canada/Australia)",
  ];

  const delayConsequences = [
    {
      title: "You may get a decision after your course start date",
      subtitle: "then you must defer.",
    },
    {
      title: "Exchange rate or fund rules may change",
      subtitle: "(embassies update thresholds periodically).",
    },
    {
      title: "You might miss biometric/medical windows",
      subtitle: "and your file goes late.",
    },
    {
      title: "University can push you to next intake",
      subtitle: "because you didn't get visa in time.",
    },
  ];

  return (
    <div className="w-full font-sans  text-slate-800 px-4 sm:px-6 md:px-8 lg:px-12 py-8">
      
      {/* Section 1: Documents / Proof Required */}
      <section className="  rounded-3xl p-6 sm:p-10 max-w-7xl mx-auto text-center shadow-2xl relative overflow-hidden mb-12">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
            Master Checklist
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-slate-900 tracking-tight">
          Documents / Proof Required
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 mb-8 font-medium max-w-xl mx-auto">
          Exact list varies, but a safe master checklist looks like:
        </p>

        {/* 2-Column Checklist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto text-left">
          
          {/* Left Column */}
          <div className="space-y-3">
            {leftDocuments.map((doc, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-2xl p-4 bg-slate-900 text-xs sm:text-sm text-slate-300 flex items-center min-h-[56px] hover:border-[#0b5cff]/50 transition-all duration-200 shadow-md group"
              >
                <span className="w-2 h-2 rounded-full bg-[#0b5cff] mr-3 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-white transition-colors">{doc}</span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {rightDocuments.map((doc, index) => (
              <div
                key={index}
                className="border border-slate-800 rounded-2xl p-4 bg-slate-900 text-xs sm:text-sm text-slate-300 flex items-center min-h-[56px] hover:border-[#0b5cff]/50 transition-all duration-200 shadow-md group"
              >
                <span className="w-2 h-2 rounded-full bg-[#0b5cff] mr-3 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="group-hover:text-white transition-colors">{doc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-slate-900 my-8 text-center relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-3 text-[#0b5cff] text-xs font-bold">★</span>
      </div>

      {/* Section 2: What Happens If You Delay */}
      <section className="max-w-7xl mx-auto text-center py-6">
        
        <div className="space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Timing Risk Factors
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
            What Happens If You Delay
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            If you wait too long to file your visa application:
          </p>
        </div>

        {/* Delay Consequences Grid */}
        <div className="bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-5xl mx-auto mb-8 shadow-2xl">
          {delayConsequences.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800/80 p-5 rounded-2xl flex flex-col justify-center hover:border-red-500/40 transition-all duration-200 group"
            >
              <h3 className="font-extrabold text-sm sm:text-base text-white leading-snug mb-1 group-hover:text-red-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote Box */}
        <div className="inline-block bg-slate-900 border border-slate-800 rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold text-slate-500 shadow-lg">
          So Step 7 should be treated like a strict deadline, not{" "}
          <span className="italic text-red-400 font-bold">"I'll do it when I'm free."</span>
        </div>

      </section>

    </div>
  );
}