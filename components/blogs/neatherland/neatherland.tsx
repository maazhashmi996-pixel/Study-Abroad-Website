"use client";

import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

export default function NetherlandsStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Netherlands Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering required documents, fees, processing timelines, and residence permit procedures.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            The Netherlands is one of the top study destinations in Europe for Pakistani students, offering a world-class education system with numerous English-taught degree programs. Known for its interactive learning style and post-study work opportunities (Orientation Year / Zoekjaar), the Netherlands provides a clear path for international graduates.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Important process note:</h4>
            <p className="text-red-800 text-sm mt-1">
              For studies longer than 90 days, Pakistani students require an entry visa (<strong className="font-semibold text-red-950">MVV</strong>) and a residence permit (<strong className="font-semibold text-red-950">VVR</strong>). In most cases, your Dutch educational institution will submit the visa application directly to the <strong className="font-semibold text-red-950">Dutch Immigration and Naturalisation Service (IND)</strong> on your behalf.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-slate-700">
              <li>
                <a href="#requirements" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 1. Requirements for Pakistani Students
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 2. Step-by-Step Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 3. Visa Fee &amp; Processing Time
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To study in the Netherlands, Pakistani applicants must provide the following essential documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Your passport must be valid for at least 6 months beyond your intended stay in the Netherlands and have at least two blank pages.
            </RequirementItem>
            <RequirementItem title="University Acceptance Letter">
              Unconditional acceptance letter from a recognized Dutch higher education institution (University of Applied Sciences or Research University).
            </RequirementItem>
            <RequirementItem title="Application via Studielink">
              Official university applications are initially initiated through <strong className="font-semibold text-slate-800">Studielink.nl</strong>, the official Dutch national portal for higher education applications.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Means">
              Proof that you can support yourself financially. You must prove living costs of approximately <strong className="font-semibold text-slate-800">€1,200 to €1,300 per month</strong> (approx. €14,500/year), usually deposited into the university’s bank account or verified via an official bank statement.
            </RequirementItem>
            <RequirementItem title="Academic Credentials">
              Attested Matric, Intermediate, Bachelor’s degrees, and official transcripts (attested by HEC/IBCC as applicable). Certified English translations are required for non-English documents.
            </RequirementItem>
            <RequirementItem title="English Language Proficiency">
              Proof of English proficiency via <strong className="font-semibold text-slate-800">IELTS (typically 6.0 – 6.5 minimum)</strong> or TOEFL iBT (80–90+), depending on course requirements.
            </RequirementItem>
            <RequirementItem title="Tuberculosis (TB) Test Declaration">
              Pakistani citizens are required to undergo a TB test upon arrival in the Netherlands or sign an agreement to take one within 3 months of arrival.
            </RequirementItem>
            <RequirementItem title="Health Insurance">
              Comprehensive private health insurance covering healthcare and emergency treatment during your initial stay until registration.
            </RequirementItem>
            <RequirementItem title="Accommodation Proof">
              Proof of booked housing or a declaration from your university confirming guaranteed student accommodation.
            </RequirementItem>
            <RequirementItem title="Completed MVV & VVR Forms">
              Completed and signed MVV application forms submitted via your Dutch university to the IND.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Your Degree & Portal Registration">
              Explore Dutch research universities or universities of applied sciences. Create an account on <strong className="font-semibold text-slate-800">Studielink.nl</strong> to apply for your target degree programs before the deadlines (usually January to May).
            </StepCard>

            <StepCard number="2" title="Receive Acceptance & Pay Tuition Deposit">
              Once admitted, accept your offer. Your university will send an invoice for the first-year tuition fee and living cost deposit to initiate your visa process.
            </StepCard>

            <StepCard number="3" title="University Submits Visa Application to IND">
              Submit your financial documents, passport copy, and signed forms to your university's international office. They will file your MVV/VVR application with the <strong className="font-semibold text-slate-800">Dutch IND</strong>.
            </StepCard>

            <StepCard number="4" title="Receive IND Approval (MVV Approval)">
              The IND processes the application (typically takes 2–6 weeks). Once approved, IND sends an official approval letter to both the university and the Netherlands Embassy in Islamabad.
            </StepCard>

            <StepCard number="5" title="Embassy Appointment in Islamabad">
              Book an appointment at the Netherlands Embassy in Islamabad to present your original passport, submit biometrics, and collect your provisional residency sticker (MVV).
            </StepCard>

            <StepCard number="6" title="Travel to the Netherlands & Pick Up Residence Card">
              Arrive in the Netherlands, register at the local municipality (Gemeente) to obtain your BSN number, complete your TB test (if required), and collect your residence permit card (VVR).
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Netherlands Study Visa Fee &amp; Processing Time
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <th className="p-4 w-1/3">Item</th>
                  <th className="p-4 w-2/3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">IND Visa &amp; Permit Fee</td>
                  <td className="p-4">
                    The statutory IND application fee for a study residence permit is <strong className="font-semibold text-slate-900">€228</strong> (subject to minor yearly adjustments by the Dutch IND). Paid via the university during visa filing.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    IND approval typically takes <strong className="font-semibold text-slate-900">2 to 6 weeks</strong> once all required documents are submitted by the university. Embassy processing for MVV sticker collection takes an additional 1 to 2 weeks.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Maintenance / Fund Requirement</td>
                  <td className="p-4">
                    Students must prove availability of approximately <strong className="font-semibold text-slate-900">€12,200 to €15,000 per year</strong> (~€1,218/month) for living costs, excluding university tuition fees.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Dependents</td>
                  <td className="p-4">
                    Students on a bachelor&apos;s or master&apos;s degree typically cannot sponsor dependents initially unless pursuing a full PhD / Research position with sufficient income proof.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your Netherlands Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on Studielink applications, financial proof options, and IND residence permit procedures.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm">
              <option value="">Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button type="submit" className="sm:col-span-2 w-full py-3.5 bg-red-400 hover:bg-red-300 text-slate-950 font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-base flex items-center justify-center gap-2">
              <PhoneCall size={18} /> Get Free Consultation
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

// Sub-components
function RequirementItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
      <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
      <div className="text-sm sm:text-base text-slate-700">
        <strong className="font-semibold text-slate-900">{title}:</strong> {children}
      </div>
    </li>
  );
}

function StepCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-red-400 font-bold text-sm shrink-0">
        {number}
      </span>
      <div>
        <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}