"use client";

import React from "react";
import {
  Clock,
  Calendar,
  ArrowRight,
  FileCheck,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

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
  { text: "Offer letter / student ID / application reference number" },
  { text: "Bank transfer receipt or portal payment confirmation" },
  { text: "Passport (for reference, if requested by the university)" },
  { text: "Sponsor / parent / guardian details if funded externally" },
  { text: "Official payment proof submission email address" },
  { text: "Correct purpose of remittance details (per bank guidelines)" },
];

const delayConsequences: DelayConsequence[] = [
  {
    title: "Your seat may not be reserved",
    description:
      "The university may allocate your reserved place to waitlisted applicants who complete payment on time.",
  },
  {
    title: "CAS / CoE / Final acceptance holds",
    description:
      "In major destinations like the UK, CAS issuance depends on deposit confirmation. No deposit means no visa processing.",
  },
  {
    title: "Visa filing becomes rushed",
    description:
      "Without final university confirmation, visa preparation is delayed, increasing the risk of missing your program intake.",
  },
  {
    title: "Deferral to subsequent intake",
    description:
      "Late deposit clearance may force the university to defer your enrollment to the next available academic term.",
  },
];

export default function ProofPage() {
  return (
    <main className="min-h-screen font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-20">

      {/* SECTION 1: TIMELINE */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3a1b5c] tracking-tight">
              Timeline & Sequence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Where this deposit step sits within your overall university admission journey
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-[#3a1b5c] text-white p-5 rounded-2xl space-y-2 shadow-xs border border-purple-900/50">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs sm:text-sm">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Process Placement</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 space-y-1 pt-1">
                <p>
                  <strong className="text-purple-300">After:</strong> Step 4 (Fulfill Conditions)
                </p>
                <p>
                  <strong className="text-purple-300">Before:</strong> Step 6 (Unconditional Offer & Visa)
                </p>
              </div>
            </div>

            <div className="bg-[#3a1b5c] text-white p-5 rounded-2xl space-y-2 shadow-xs border border-purple-900/50">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs sm:text-sm">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Typical September Intake Schedule</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-200 space-y-1 pt-1">
                <p>
                  <strong className="text-purple-300">Conditional Offer:</strong> March–June
                </p>
                <p>
                  <strong className="text-purple-300">Fulfill Conditions:</strong> April–July
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Timing Box */}
          <div className="bg-[#3a1b5c]/95 text-white p-4 rounded-xl text-xs sm:text-sm font-semibold text-center border border-purple-800/50 shadow-xs leading-relaxed">
            <span className="text-amber-400">Payment Window:</span> Submit tuition deposit promptly after meeting conditions, typically within 1–4 weeks of offer issuance depending on institutional deadlines.
          </div>

          {/* Full Width Outcome Box */}
          <div className="bg-amber-500/10 border border-amber-500/30 text-[#3a1b5c] p-4 rounded-xl text-xs sm:text-sm font-bold text-center flex items-center justify-center space-x-2">
            <span>Next Milestone:</span>
            <span className="text-amber-700 font-extrabold">
              University Issues Unconditional Offer / CAS / CoE → Proceed to Visa Filing
            </span>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-900 text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Step 4: Fulfill Conditions</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 active:scale-98 text-slate-900 text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-xs cursor-pointer"
            >
              <span>Step 6: Get Unconditional Offer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENTS / PROOF REQUIRED */}
      <section className="bg-[#3a1b5c] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-purple-900/80 text-amber-400 rounded-xl mx-auto flex items-center justify-center mb-2">
              <FileCheck className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Required Documents & Proof
            </h2>
            <p className="text-xs sm:text-sm text-purple-200">
              Have these details ready when submitting your tuition deposit:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="border border-purple-800/60 rounded-xl p-4 bg-[#2c1249] text-xs sm:text-sm leading-snug flex items-start space-x-3 hover:border-purple-600 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-purple-100 font-medium">{doc.text}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-purple-300/80 italic pt-2 max-w-2xl mx-auto leading-relaxed">
            Note: Payment receipts form an essential component of your official visa application package for consular review.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS IF YOU DELAY */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl mx-auto flex items-center justify-center mb-2">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Consequences of Payment Delays
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Risks associated with missing tuition deposit submission deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="bg-amber-500 text-slate-900 p-5 rounded-2xl space-y-1.5 shadow-xs border border-amber-600/30 flex flex-col justify-between"
              >
                <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-900/90 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold py-2 px-6 rounded-xl shadow-2xs">
              <ArrowRight className="w-4 h-4 text-amber-600" />
              <span>Key Takeaway: Timely Deposit = Reserved Seat = Fast-Track Visa</span>
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}