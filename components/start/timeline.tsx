"use client";

import React, { useState } from "react";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

// Data
const timelineSteps = [
  "Visa approved → book flight right away",
  "Arrive 7-14 days before classes",
  "Enroll in first academic week",
  "Start classes and maintain attendance",
];

const requiredDocuments = [
  "Passport with student visa / study permit",
  "University offer letter / CAS / CoE / LOA",
  "Tuition fee payment receipt (at least deposit)",
  "Accommodation confirmation / address",
  "Airport pickup / contact of friend/relative (if any)",
  "Financial proof (some immigration officers ask to see funds on arrival)",
  "Medical / TB certificate (if your country requires)",
  "Copies of all previous education documents (not always asked, but good to have)",
];

const delayConsequences = [
  {
    title: "University can report you as 'did not start'",
    description: "This can affect your visa status.",
  },
  {
    title: "You may be asked to defer to next intake",
    description: "If you miss too many initial classes/orientation.",
  },
  {
    title: "Your accommodation / part-time work / student benefits get delayed",
    description: "Because many of these depend on your student ID.",
  },
  {
    title: "You waste the whole year",
    description: "After doing all 7 steps correctly.",
  },
];

const helpBulletPointsLeft = [
  "What to carry in your pre-departure file",
  "When to travel for your specific university and intake",
  "What to tell immigration if you are asked extra questions",
];

const helpBulletPointsRight = [
  "How to report to the university if your flight gets delayed",
  "What rules apply for part-time work in that country (UK, Canada, Australia rules change often)",
  "How to stay compliant so your visa remains valid",
];

const faqs: FAQItem[] = [
  {
    question: "When should I travel to my study country?",
    answer:
      "Ideally arrive 7 to 14 days before your course start date to settle down, find accommodation, and complete orientation.",
  },
  {
    question: "What documents should I carry in hand-carry when traveling as an international student?",
    answer:
      "Always keep your original passport, visa grant letter, university CAS/offer letter, financial proofs, and accommodation details in your hand luggage.",
  },
  {
    question: "What happens if my flight gets delayed past orientation?",
    answer:
      "Inform your university international office immediately so they can update your registration status and prevent visa cancellation reporting.",
  },
];

export default function Timeline() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen font-sans bg-slate-50 text-slate-900 pb-20">
      
      {/* SECTION 1: TIMELINE */}
      <section className="bg-white py-12 px-6 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-2xl font-bold text-[#3a1b5c]">Timeline</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#3a1b5c] text-white text-xs font-semibold py-3 px-4 rounded-md shadow-sm flex items-center justify-center text-center"
              >
                {step}
              </div>
            ))}
          </div>
          <div>
            <span className="inline-block bg-amber-500 text-slate-900 text-xs font-bold py-1.5 px-4 rounded-full">
              Previous Step: Apply For Visa →
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENTS / PROOF REQUIRED */}
      <section className="bg-[#3a1b5c] text-white py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Documents / proof required
            </h2>
            <p className="text-xs text-purple-200 mt-1">
              Keep these in a <span className="font-semibold underline">document folder</span> in your hand-carry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="border border-purple-400/30 rounded-lg p-3.5 bg-[#2c1249] text-xs leading-snug flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS IF YOU DELAY */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              What happens if you delay
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              If you reach late or don&apos;t complete enrollment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-500 text-slate-900 p-5 rounded-lg space-y-1 shadow-sm"
              >
                <h3 className="font-bold text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-800">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic pt-2">
            So even though this looks like a &quot;simple&quot; step, it is very sensitive.
          </p>
        </div>
      </section>

      {/* SECTION 4: HOW TIMES CONSULTANT HELPS */}
      <section className="bg-slate-100 py-14 px-6 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div>
            <h2 className="text-2xl font-bold text-[#3a1b5c]">
              How Times Consultant helps at this stage
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-xl mx-auto">
              Times Consultant doesn&apos;t stop at the visa stage, we can guide you on:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs text-slate-700">
            <ul className="space-y-2">
              {helpBulletPointsLeft.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {helpBulletPointsRight.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold py-2 px-5 rounded-full transition-colors shadow-sm">
              Get Pre-Departure Guidance
            </button>
            <button className="bg-[#3a1b5c] hover:bg-[#2c1249] text-white text-xs font-bold py-2 px-5 rounded-full transition-colors shadow-sm">
              Stay Supported After Arrival
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ ACCORDION */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Can&apos;t talk? Don&apos;t worry, we have got all the answers right here.
            </h2>
          </div>

          <div className="space-y-3 pt-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-800 text-sm bg-white hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-slate-400 font-bold text-lg">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}