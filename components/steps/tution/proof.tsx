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
    <main className="min-h-screen font-sans  text-slate-100 pb-16 sm:pb-20">

      {/* SECTION 1: TIMELINE */}
      <section className=" py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
              Timeline & <span className="text-blue-500">Sequence</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Where this deposit step sits within your overall university admission journey
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-slate-800 p-5 rounded-2xl space-y-2 shadow-lg border border-slate-700/60">
              <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs sm:text-sm">
                <Clock className="w-4 h-4 shrink-0 text-red-500" />
                <span>Process Placement</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 space-y-1 pt-1">
                <p>
                  <strong className="text-white">After:</strong> Step 4 (Fulfill Conditions)
                </p>
                <p>
                  <strong className="text-white">Before:</strong> Step 6 (Unconditional Offer & Visa)
                </p>
              </div>
            </div>

            <div className="bg-slate-800 p-5 rounded-2xl space-y-2 shadow-lg border border-slate-700/60">
              <div className="flex items-center space-x-2 text-blue-400 font-bold text-xs sm:text-sm">
                <Calendar className="w-4 h-4 shrink-0 text-red-500" />
                <span>Typical September Intake Schedule</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-300 space-y-1 pt-1">
                <p>
                  <strong className="text-white">Conditional Offer:</strong> March–June
                </p>
                <p>
                  <strong className="text-white">Fulfill Conditions:</strong> April–July
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Timing Box */}
          <div className="bg-blue-950/60 border border-blue-500/30 text-slate-200 p-4 rounded-xl text-xs sm:text-sm font-medium text-center shadow-md leading-relaxed">
            <span className="text-blue-400 font-bold">Payment Window:</span> Submit tuition deposit promptly after meeting conditions, typically within 1–4 weeks of offer issuance depending on institutional deadlines.
          </div>

          {/* Full Width Outcome Box */}
          <div className="bg-red-500/10 border border-red-500/30 text-white p-4 rounded-xl text-xs sm:text-sm font-bold text-center flex items-center justify-center space-x-2">
            <span className="text-slate-400">Next Milestone:</span>
            <span className="text-red-400 font-extrabold">
              University Issues Unconditional Offer / CAS / CoE → Proceed to Visa Filing
            </span>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Step 4: Fulfill Conditions</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-md cursor-pointer"
            >
              <span>Step 6: Get Unconditional Offer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOCUMENTS / PROOF REQUIRED */}
      <section className=" text-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl mx-auto flex items-center justify-center mb-2">
              <FileCheck className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Required Documents & <span className="text-blue-500">Proof</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Have these details ready when submitting your tuition deposit:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="border border-slate-800 rounded-xl p-4 bg-slate-900/80 text-xs sm:text-sm leading-snug flex items-start space-x-3 hover:border-blue-500/50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 font-medium">{doc.text}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 italic pt-2 max-w-2xl mx-auto leading-relaxed">
            Note: Payment receipts form an essential component of your official visa application package for consular review.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT HAPPENS IF YOU DELAY */}
      <section className="bg-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="w-10 h-10 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl mx-auto flex items-center justify-center mb-2">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Consequences of <span className="text-red-500">Payment Delays</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Risks associated with missing tuition deposit submission deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {delayConsequences.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 text-white p-5 rounded-2xl space-y-1.5 shadow-md border-l-4 border-l-red-500 border-y border-r border-slate-700/60 flex flex-col justify-between"
              >
                <h3 className="font-extrabold text-sm sm:text-base leading-snug text-red-400">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <span className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm font-bold py-2.5 px-6 rounded-xl shadow-md">
              <ArrowRight className="w-4 h-4 text-blue-400" />
              <span>Key Takeaway: Timely Deposit = Reserved Seat = Fast-Track Visa</span>
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}