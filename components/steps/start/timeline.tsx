"use client";

import React, { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

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
    description: "This can directly affect your valid visa status.",
  },
  {
    title: "You may be asked to defer to next intake",
    description: "If you miss too many initial orientation days or classes.",
  },
  {
    title: "Your student benefits get delayed",
    description: "Accommodation, part-time work permit, and student IDs rely on enrollment.",
  },
  {
    title: "You waste valuable time & money",
    description: "Delaying your career after completing all application steps.",
  },
];

const helpBulletPointsLeft = [
  "What to carry in your pre-departure document file",
  "When to travel for your specific university intake",
  "What to tell immigration officers during border entry questions",
];

const helpBulletPointsRight = [
  "How to report to the university if your flight gets delayed",
  "Work hour rules for UK, Canada, Australia & Europe",
  "How to maintain full compliance so your visa stays valid",
];

const faqs: FAQItem[] = [
  {
    question: "When should I travel to my study country?",
    answer:
      "Ideally arrive 7 to 14 days before your course start date to settle down, find accommodation, and complete mandatory university orientation.",
  },
  {
    question: "What documents should I carry in hand-carry when traveling?",
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
    <main className="min-h-screen font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-20">
      
      {/* SECTION 1: TIMELINE */}
      <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3a1b5c] tracking-tight">
            Arrival & Program Start Timeline
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#3a1b5c] text-white text-xs sm:text-sm font-semibold p-4 rounded-xl shadow-sm flex flex-col justify-center items-center text-center space-y-2"
              >
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                  Step 0{idx + 1}
                </span>
                <span className="leading-snug">{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center bg-amber-500 text-slate-900 text-xs font-bold py-2 px-5 rounded-full shadow-sm">
              Previous Step: Apply For Visa →
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENTS / PROOF REQUIRED */}
      <section className="bg-[#3a1b5c] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Documents & Proof Required at Immigration
            </h2>
            <p className="text-xs sm:text-sm text-purple-200 max-w-md mx-auto">
              Keep these in a <strong className="underline text-amber-300">document folder inside your hand-carry bag</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-left">
            {requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="border border-purple-400/30 rounded-xl p-3.5 bg-[#2c1249] text-xs sm:text-sm leading-snug flex items-center space-x-3 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span className="text-purple-50 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS IF YOU DELAY */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What Happens If You Delay?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              If you arrive late or fail to complete mandatory enrollment on time:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-500 text-slate-900 p-5 rounded-2xl space-y-1.5 shadow-sm flex flex-col justify-between h-full"
              >
                <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-800 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic pt-2 max-w-md mx-auto">
            Although this seems like a final administrative step, it is extremely time-sensitive.
          </p>
        </div>
      </section>

      {/* SECTION 4: HOW D.Education Zone HELPS */}
      <section className="bg-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3a1b5c] tracking-tight">
              How D.Education Zone Helps at This Stage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Our support continues well past visa approval. Here is how we assist prior to your departure:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-xs sm:text-sm text-slate-700">
            <ul className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              {helpBulletPointsLeft.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              {helpBulletPointsRight.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs sm:text-sm font-bold py-3 px-6 rounded-full transition-all shadow-sm active:scale-95">
              Get Pre-Departure Guidance
            </button>
            <button className="bg-[#3a1b5c] hover:bg-[#2c1249] text-white text-xs sm:text-sm font-bold py-3 px-6 rounded-full transition-all shadow-sm active:scale-95">
              Stay Supported After Arrival
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ ACCORDION */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers to common arrival and orientation inquiries.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-bold text-slate-800 text-xs sm:text-sm bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-2">{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100 pt-3">
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