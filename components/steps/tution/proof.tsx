import React from "react";

// Types
interface RequiredDoc {
  text: string;
}

interface DelayConsequence {
  title: string;
  description: string;
}

// Data
const requiredDocs: RequiredDoc[] = [
  { text: "Offer letter / student ID / application number" },
  { text: "Bank transfer receipt or payment confirmation" },
  { text: "Passport (for reference, if the university asks)" },
  { text: "In some cases, sponsor / parent / guardian details if someone else is paying" },
  { text: "Email to send payment proof to (often given in the offer letter)" },
  { text: "If paying from Pakistan: correct purpose of remittance as per bank requirement (your bank can guide you)" },
];

const delayConsequences: DelayConsequence[] = [
  {
    title: "Your seat may not be reserved",
    description: "The university can simply fill your place with another student who paid on time.",
  },
  {
    title: "Your CAS / CoE / final acceptance can't be issued",
    description: "In the UK, for example, many universities issue CAS only after deposit. No deposit = no CAS = no visa.",
  },
  {
    title: "Visa filing becomes rushed",
    description: "Since you can't start visa without final university confirmation, any delay here pushes you closer to intake date risk.",
  },
  {
    title: "You may be pushed to the next intake",
    description: "If your payment comes too late, the university may tell you to join the next available intake.",
  },
];

export default function ProofPage() {
  return (
    <main className="min-h-screen font-sans bg-slate-50 text-slate-900 pb-20">

      {/* SECTION 1: TIMELINE */}
      <section className="bg-white py-12 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3a1b5c]">
            Timeline
          </h2>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs">
            <div className="bg-[#3a1b5c] text-white p-4 rounded-xl space-y-1 shadow-sm">
              <p className="font-semibold text-amber-400">It comes:</p>
              <p className="text-slate-200">after: Step 4 (Fulfill Conditions)</p>
              <p className="text-slate-200">before: Step 6 (Get Unconditional Offer)</p>
            </div>

            <div className="bg-[#3a1b5c] text-white p-4 rounded-xl space-y-1 shadow-sm">
              <p className="font-semibold text-amber-400">Typical timing for a September intake:</p>
              <p className="text-slate-200">Offer letter: March–June</p>
              <p className="text-slate-200">Fulfill conditions: April–July</p>
            </div>
          </div>

          {/* Full Width Timing Box */}
          <div className="bg-[#3a1b5c] text-white p-3.5 rounded-xl text-xs font-semibold text-center">
            Pay tuition deposit: soon after conditions are accepted, often 1–4 weeks after the offer (depending on university deadline)
          </div>

          {/* Full Width Outcome Box */}
          <div className="bg-[#3a1b5c] text-white p-3.5 rounded-xl text-xs font-semibold text-center">
            Then: university issues unconditional offer / CAS / CoE → you go to visa
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold py-1.5 px-4 rounded-full cursor-pointer transition-colors shadow-sm">
              Previous step: Fulfill Conditions •
            </span>
            <span className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold py-1.5 px-4 rounded-full cursor-pointer transition-colors shadow-sm">
              Next step: Get Unconditional Offer •
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENTS / PROOF REQUIRED */}
      <section className="bg-[#3a1b5c] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Documents / proof required
            </h2>
            <p className="text-xs text-purple-200 mt-1">
              When you pay the tuition deposit, be ready with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="border border-purple-400/30 rounded-xl p-4 bg-[#2c1249] text-xs leading-snug flex items-start space-x-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                <span className="text-purple-100">{doc.text}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-purple-300 italic pt-2">
            Later, this payment proof becomes part of your visa file as well (some embassies / visa officers want to see that you have paid).
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS IF YOU DELAY */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What happens if you delay
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              If you don&apos;t pay the tuition deposit on time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-500 text-slate-900 p-5 rounded-xl space-y-1 shadow-sm"
              >
                <h3 className="font-bold text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-900/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="inline-block bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold py-1.5 px-6 rounded-md">
              So: deposit = commitment = speed for next steps.
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}