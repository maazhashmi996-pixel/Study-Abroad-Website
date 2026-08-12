"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, PhoneCall } from "lucide-react";

export default function EuropeStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Europe Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering required documents, fees, processing timelines, and residence permit procedures for European universities.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Europe is one of the most preferred destinations for Pakistani students seeking world-class education, affordable tuition options, and post-study work opportunities. Whether you choose public universities in Germany, Italy, Hungary, Austria, or France, gaining admission and securing a National Long-Stay Student Visa (Type D) is your pathway to higher education in Europe.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Key Visa Type to Understand:</h4>
            <p className="text-red-800 text-sm mt-1">
              For degree courses lasting longer than 90 days, Pakistani students must apply for a <strong className="font-semibold text-red-950">National Long-Stay Visa (Type D / Study Visa)</strong> through the respective European embassy or visa application center (such as VFS Global or BLS) in Pakistan.
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
          <p className="text-slate-600 mb-6">To apply for a European study visa (National Long-Stay Type D), Pakistani students typically need the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Original passport valid for at least 12 months beyond your intended departure date, with at least two blank visa pages, plus copies of previous passports and visas.
            </RequirementItem>
            <RequirementItem title="Official Admission Letter">
              Unconditional acceptance/admission letter from a recognized European university or higher education institution specifying course details and start date.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Funds">
              Evidence of financial capacity through a Blocked Bank Account (€11,904/year for Germany), 6-month bank statement, or official scholarship award letter (e.g., Stipendium Hungaricum, Erasmus+).
            </RequirementItem>
            <RequirementItem title="Attested Educational Documents">
              Matriculation, Intermediate, Bachelor&apos;s degree certificates, and transcripts attested by IBCC, HEC, and the Ministry of Foreign Affairs (MOFA) Pakistan.
            </RequirementItem>
            <RequirementItem title="English / Language Proficiency Proof">
              IELTS (typically 6.0 to 6.5 overall), TOEFL, or alternative language test scores as mandated by your chosen university and degree program.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP) & Motivation Letter">
              A detailed SOP explaining your academic background, choice of course and target European destination, and long-term career aspirations.
            </RequirementItem>
            <RequirementItem title="Comprehensive Health Insurance">
              Schengen / European medical travel health insurance covering hospitalization and medical repatriation with minimum coverage of €30,000.
            </RequirementItem>
            <RequirementItem title="Accommodation & Flight Itinerary">
              Proof of arranged student housing, university hostel confirmation, or lease agreement along with a preliminary flight booking/itinerary.
            </RequirementItem>
            <RequirementItem title="Police Clearance Certificate">
              Valid character certificate issued by Pakistan Police, officially attested by MOFA Pakistan.
            </RequirementItem>
            <RequirementItem title="National Visa Application Form">
              Duly filled and signed National Visa (Type D) application form with recent passport-size biometric photographs compliant with Schengen standards.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Course & Secure Admission">
              Research European universities, verify eligibility criteria, and submit your application directly or through national application portals (e.g., Uni-Assist for Germany, Campus France).
            </StepCard>

            <StepCard number="2" title="Receive Official Acceptance & Pay Tuition">
              Accept your admission offer and pay any required tuition fees or deposit to finalize your registration and receive your official acceptance letter.
            </StepCard>

            <StepCard number="3" title="Prepare Financials & Blocked Account">
              Set up your proof of funds via a Blocked Account (e.g., €11,904 via Expatrio/Fintiba for Germany) or prepare a sponsored 6-month bank statement.
            </StepCard>

            <StepCard number="4" title="Attest Academic & Civil Documents">
              Get all relevant degrees, transcripts, and police certificates attested by IBCC, HEC, and MOFA Pakistan.
            </StepCard>

            <StepCard number="5" title="Book Embassy / VFS Appointment">
              Schedule an appointment with the respective European Embassy or authorized application center (e.g., VFS Global or BLS International) in Islamabad, Lahore, or Karachi.
            </StepCard>

            <StepCard number="6" title="Submit Application & Biometrics">
              Attend your appointment, submit all original documents, provide biometric data (fingerprints and photo), and pay the national visa application fee.
            </StepCard>

            <StepCard number="7" title="Receive Visa & Travel to Europe">
              Collect your passport once processed, travel to your European destination, and apply for your Local Residence Permit (TRC) within 30–90 days of arrival.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Embassy Visa Fee</td>
                  <td className="p-4">
                    The standard National Long-Stay (Type D) student visa fee ranges between <strong className="font-semibold text-slate-900">€75 to €100</strong> (~PKR 23,000 - PKR 31,000), depending on the specific European country.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Service Center Fee</td>
                  <td className="p-4">
                    If applying via VFS Global or BLS, an additional service fee of approximately <strong className="font-semibold text-slate-900">PKR 6,000 to PKR 12,000</strong> applies.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Long-stay study visa processing usually takes <strong className="font-semibold text-slate-900">4 to 12 weeks</strong>. Students are strongly advised to apply at least 2–3 months before their semester intake begins.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Maintenance / Fund Proof</td>
                  <td className="p-4">
                    Required living expenses range between <strong className="font-semibold text-slate-900">€700 to €992 per month</strong> (approx. €8,500 – €11,904 per year depending on country).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Dependents</td>
                  <td className="p-4">
                    Master&apos;s and PhD students in many European countries can bring family members via family reunion visas, subject to showing additional maintenance funds and adequate accommodation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your Europe Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on European university admissions, blocked accounts, document attestation, and embassy appointment booking.
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