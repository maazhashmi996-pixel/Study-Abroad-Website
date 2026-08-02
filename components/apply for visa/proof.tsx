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
    "Proof of funds (bank statement, GIC, sponsor letter, income docs) using 2025 updated amounts for Canada.",
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
      subtitle: "(Canada 2025 did exactly this).",
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
    <div className="w-full font-sans">
      {/* Section 1: Documents / Proof Required */}
      <section className="bg-[#2a1a4a] text-white py-12 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Documents / proof required
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 font-medium">
            Exact list varies, but a safe master checklist looks like
          </p>

          {/* 2-Column Checklist Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            {/* Left Column */}
            <div className="space-y-4">
              {leftDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="border border-amber-500/80 rounded-lg p-3.5 bg-[#2a1a4a] text-xs sm:text-sm text-slate-100 flex items-center min-h-[52px]"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-2.5 shrink-0"></span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="border border-amber-500/80 rounded-lg p-3.5 bg-[#2a1a4a] text-xs sm:text-sm text-slate-100 flex items-center min-h-[52px]"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-2.5 shrink-0"></span>
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What happens if you delay */}
      <section className="bg-white text-slate-900 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl text-[#2a1a4a] font-extrabold mb-2">
            What happens if you delay
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-8 font-medium">
            If you wait too long to file your visa:
          </p>

          {/* Yellow Banner Grid */}
          <div className="bg-amber-500  rounded-2xl p-8 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-5xl mx-auto mb-8 shadow-sm">
            {delayConsequences.map((item, index) => (
              <div key={index} className="flex flex-col p-6  text-white justify-start ">
                <h3 className="font-extrabold  text-sm sm:text-base gap-10 leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm  font-medium">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quote Box */}
          <div className="inline-block bg-slate-50 border border-slate-200 rounded-lg px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
            So Step 7 should be treated like a deadline, not{" "}
            <span className="italic">"I'll do it when I'm free."</span>
          </div>
        </div>
      </section>
    </div>
  );
}