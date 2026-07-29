"use client";

import React, { useState } from "react";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

// Data
const helpPointsLeft = [
  "We review your offer letter and confirm the correct deposit amount and deadline.",
  "We verify the official university payment channel so you don't fall for wrong accounts or fake invoices.",
  "We guide you on how to send proof of payment so the university updates your status quickly.",
];

const helpPointsRight = [
  "We coordinate with the university (where needed) to confirm receipt, so you can move to Step 6 without waiting blindly.",
  "We align this payment with your visa timeline to make sure you're not paying late.",
];

const faqs: FAQItem[] = [
  {
    question: "Why do universities ask international students to pay a tuition deposit?",
    answer:
      "Universities require a deposit to confirm your seat commitment before issuing key official documents (like the CAS or CoE) needed for your visa application.",
  },
  {
    question: "How much tuition deposit do I have to pay?",
    answer:
      "Deposit amounts vary by university and country. It can range from a fixed amount (e.g., £2,000 to £5,000) to a percentage of your first year's total tuition fee.",
  },
  {
    question: "Can I pay the tuition deposit in installments?",
    answer:
      "Most universities require the initial deposit in a single payment to issue visa documents, but subsequent tuition balances can usually be paid in installment plans once enrolled.",
  },
  {
    question: "What if the university doesn't receive my payment?",
    answer:
      "If you uploaded official bank payment slips or Flywire/Convera tracking proofs with your student ID, our counselors can directly contact the university finance team to trace and clear your payment.",
  },
  {
    question: "Can I get a refund if my visa is refused?",
    answer:
      "Yes, almost all public universities offer a deposit refund in the event of an official visa refusal (minus minor administrative charges), provided you submit the official refusal letter.",
  },
];

export default function EndPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen font-sans bg-white text-slate-800 pb-20">
      
      {/* SECTION 1: HOW TIMES CONSULTANT HELPS */}
      <section className="py-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a1b5c]">
              How Times Consultant helps at this stage
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              Here&apos;s where Times Consultant makes this step safer and faster for you:
            </p>
          </div>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-xs leading-relaxed text-slate-700">
            {/* Left Column */}
            <ul className="space-y-4">
              {helpPointsLeft.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Right Column */}
            <ul className="space-y-4">
              {helpPointsRight.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <span className="text-amber-500 font-bold shrink-0 mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call-to-Action Buttons & Copy */}
          <div className="pt-6 space-y-4 max-w-2xl mx-auto">
            <button className="bg-[#e5a00d] hover:bg-amber-600 text-slate-900 font-bold text-xs py-3 px-8 rounded-full shadow-sm transition-colors">
              Confirm My Deposit with Times Consultant
            </button>

            <p className="text-xs text-slate-500">
              Share your offer letter and deposit instructions with Times Consultant, we&apos;ll check them and guide you so you don&apos;t lose your intake over a payment delay.
            </p>

            <p className="text-xs font-semibold text-slate-700">
              You&apos;re very close now don&apos;t lose the intake over a missed payment or unclear bank transfer.
            </p>

            <p className="text-xs text-slate-500">
              Let Times Consultant check your offer, confirm your deposit amount and deadline, and make sure the university actually receives and updates your status.
            </p>

            <div className="pt-2">
              <button className="bg-[#e5a00d] hover:bg-amber-600 text-slate-900 font-bold text-xs py-3 px-8 rounded-full shadow-sm transition-colors">
                Get Free Deposit Guidance
              </button>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-2">
              Times Consultant has helped thousands of students move from offer letter to visa-ready status, we can do the same for you.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: FAQ ACCORDION */}
      <section className="py-16 px-6 bg-slate-50/50">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Can&apos;t talk? Don&apos;t worry, we have got all the answers right here.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-slate-400 font-medium text-base ml-2">
                    {openFaq === idx ? "›" : "›"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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