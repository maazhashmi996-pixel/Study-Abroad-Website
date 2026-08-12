"use client";

import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

export default function FranceStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a France Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering Etudes en France (EEF) registration, France-Visas portal, fees, processing timelines, and VLS-TS validation.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            France is a premier destination for Pakistani students seeking world-class academic institutions, low public tuition fees, and rich post-study career opportunities across Europe. Known for its top business schools, engineering faculties, and research universities, France offers a vast selection of English-taught and French-taught programs, as well as a 2-year post-study work visa (APS) for Master&apos;s graduates.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Key Process to Understand:</h4>
            <p className="text-red-800 text-sm mt-1">
              For studies exceeding 90 days, Pakistani students must complete the mandatory procedure via <strong className="font-semibold text-red-950">Campus France Pakistan</strong> using the <strong className="font-semibold text-red-950">Etudes en France (EEF)</strong> portal before submitting their <strong className="font-semibold text-red-950">VLS-TS (Long-Stay Visa equivalent to Residence Permit)</strong> application at VFS Global.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-slate-700">
              <li><a href="#requirements" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 1. Requirements for Pakistani Students</a></li>
              <li><a href="#steps" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 2. Step-by-Step Application Process</a></li>
              <li><a href="#fees" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 3. Visa Fee &amp; Processing Time</a></li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for a French Long-Stay Study Visa (VLS-TS), Pakistani students need to prepare the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Original passport valid for at least 15 months, issued within the last 10 years, with at least two blank visa pages.
            </RequirementItem>
            <RequirementItem title="Campus France Attestation">
              Official Campus France Authorization/Certificate obtained after completing the Etudes en France (EEF) interview process in Pakistan.
            </RequirementItem>
            <RequirementItem title="University Enrollment / Admission Letter">
              Unconditional acceptance letter from a French higher education institution (via EEF or direct university portal) specifying program details, duration, and tuition fee structure.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Funds">
              Bank statement showing living expenses of at least <strong className="font-semibold text-slate-800">€877.50 per month</strong> (or equivalent in PKR) for an academic year (approx. €8,775 – €10,530 annually), or proof of an official scholarship (e.g., Eiffel, Erasmus+).
            </RequirementItem>
            <RequirementItem title="Academic Qualifications">
              Matriculation, Intermediate, Bachelor&apos;s degrees, and transcripts attested by IBCC, HEC, and the Ministry of Foreign Affairs (MOFA) Pakistan.
            </RequirementItem>
            <RequirementItem title="Language Proficiency Proof">
              IELTS/TOEFL for English-taught courses (typically <strong className="font-semibold text-slate-800">IELTS 6.0 to 6.5</strong>) or DELF/DALF (B2 level or higher) for French-taught programs.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP) & CV">
              An SOP detailing your academic background, career objectives, reason for choosing France, and a professional Europass-style CV.
            </RequirementItem>
            <RequirementItem title="Accommodation Proof">
              Proof of housing for at least the first 3 months in France (CROUS university dormitory allocation, hotel booking, lease agreement, or host declaration).
            </RequirementItem>
            <RequirementItem title="Medical Travel Insurance">
              Schengen travel health insurance with a minimum coverage of €30,000 for emergency medical care and repatriation for the initial travel period.
            </RequirementItem>
            <RequirementItem title="France-Visas Form">
              Completed and signed Long-Stay Visa Application Form downloaded from the official <strong className="font-semibold text-slate-800">France-Visas</strong> portal, along with the application receipt and biometric photos.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Program Selection & University Application">
              Choose your university and program. Applications are submitted either directly to the university or through the <strong className="font-semibold text-slate-800">Etudes en France (EEF)</strong> platform during the admission campaign window.
            </StepCard>

            <StepCard number="2" title="Campus France Pakistan Registration">
              Create an account on the Etudes en France portal. Upload your academic documents, CV, SOP, and university offer letter, then pay the mandatory Campus France processing fee.
            </StepCard>

            <StepCard number="3" title="Campus France Academic Interview">
              Attend your in-person or online interview with Campus France Pakistan officers in Islamabad, Lahore, or Karachi to discuss your study plans and academic background.
            </StepCard>

            <StepCard number="4" title="Complete France-Visas Application">
              Once you receive the Campus France attestation, fill out your visa application on the official <strong className="font-semibold text-slate-800">France-Visas</strong> portal to generate your registration summary sheet.
            </StepCard>

            <StepCard number="5" title="Book & Attend VFS Global Appointment">
              Schedule a visa submission appointment at the VFS Global France Visa Application Center in Pakistan (Islamabad, Lahore, or Karachi). Submit your physical document dossier and provide biometric data.
            </StepCard>

            <StepCard number="6" title="Visa Decision & Passport Collection">
              Wait for Embassy processing. Once approved, collect your passport containing your VLS-TS long-stay study visa.
            </StepCard>

            <StepCard number="7" title="Arrival & VLS-TS Online Validation">
              Upon arriving in France, pay the CVEC student contribution (€105) and validate your VLS-TS visa online on the ANEF portal within 3 months to make it equivalent to a formal Residence Permit (Titre de Séjour).
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            France Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Campus France Fee</td>
                  <td className="p-4">
                    The Campus France Etudes en France (EEF) application processing fee is <strong className="font-semibold text-slate-900">PKR 30,000</strong>, payable prior to scheduling your Campus France interview.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Long-Stay Visa Fee</td>
                  <td className="p-4">
                    The French Embassy visa fee for a Long-Stay Student Visa (VLS-TS) is <strong className="font-semibold text-slate-900">€99</strong> (~PKR 30,000). A separate VFS Global service fee applies.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Standard visa processing at the French Embassy takes between <strong className="font-semibold text-slate-900">3 to 6 weeks</strong> after your VFS appointment. Total duration including Campus France procedures is roughly 2 to 3 months.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Monthly Living Fund Proof</td>
                  <td className="p-4">
                    Students must demonstrate financial resources of at least <strong className="font-semibold text-slate-900">€877.50 per month</strong> (approx. €8,775 for a 10-month academic year) through a bank statement, scholarship, or sponsor.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Work Rights</td>
                  <td className="p-4">
                    International students in France holding a valid VLS-TS visa are legally allowed to work part-time up to <strong className="font-semibold text-slate-900">964 hours per year</strong> (60% of full-time annual work).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your France Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on Campus France registration, EEF interview preparation, financial documentation, and visa submission.
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