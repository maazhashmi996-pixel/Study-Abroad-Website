"use client";

import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

export default function SouthKoreaStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a South Korea Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering D-2 visa requirements, bank statements, TB health checks, fees, and Alien Registration Card (ARC) procedures.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            South Korea is rapidly becoming a top destination for Pakistani students seeking world-class education, advanced technological research, and generous scholarship programs like the Global Korea Scholarship (GKS). Renowned for its globally ranked universities (such as Seoul National University, KAIST, and Yonsei), South Korea offers extensive English-taught degree programs, rich cultural immersion, and post-graduation work options.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Key Requirement Before You Apply:</h4>
            <p className="text-red-800 text-sm mt-1">
              For full degree programs (Bachelor&apos;s, Master&apos;s, or PhD), Pakistani students must apply for a <strong className="font-semibold text-red-950">D-2 Student Visa</strong>. You can only apply once you receive an official <strong className="font-semibold text-red-950">Standard Admission Letter</strong> (issued by an IEQAS-certified Korean university) and complete mandatory medical TB screening.
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
          <p className="text-slate-600 mb-6">To apply for a South Korea D-2 study visa, Pakistani applicants must prepare the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Original passport valid for at least six months beyond your intended duration of stay, along with copies of current and previous visa pages.
            </RequirementItem>
            <RequirementItem title="Standard Admission Letter">
              Official Standard Admission Letter (표준입학허가서) issued by an accredited South Korean university holding International Education Quality Assurance System (IEQAS) recognition.
            </RequirementItem>
            <RequirementItem title="Tuberculosis (TB) Test Certificate">
              Because Pakistan is categorized as a high-incidence country for TB, you must get tested at a hospital or diagnostic center approved by the Embassy of South Korea in Pakistan.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Capability">
              A official bank statement showing at least <strong className="font-semibold text-slate-800">USD $15,000 to $20,000</strong> (approx. KRW 20,000,000+) maintained for at least 28 days. If using a sponsor (parents), attach an FRC (Family Registration Certificate), sponsorship affidavit, and sponsor tax returns.
            </RequirementItem>
            <RequirementItem title="Attested Academic Certificates">
              Matriculation, Intermediate, or Bachelor&apos;s degrees and transcripts attested by IBCC, HEC, and the Ministry of Foreign Affairs (MOFA) Pakistan.
            </RequirementItem>
            <RequirementItem title="Language Proficiency Proof">
              <strong className="font-semibold text-slate-800">IELTS (5.5 - 6.5+)</strong> or TOEFL for English-taught programs, or <strong className="font-semibold text-slate-800">TOPIK (Level 3 or higher)</strong> for Korean-taught programs.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP)">
              A detailed study plan and SOP describing your educational background, selection of South Korea, course goals, and post-study career plans.
            </RequirementItem>
            <RequirementItem title="Completed Visa Application Form">
              Fully filled and signed Visa Application Form with recent passport-sized color photographs (3.5 x 4.5 cm with a white background).
            </RequirementItem>
            <RequirementItem title="Accommodation Details">
              Proof of university dormitory allotment or housing rental contract in South Korea.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Select University & Program">
              Research recognized South Korean universities (IEQAS accredited) and select your preferred degree program. Main intakes are <strong className="font-semibold text-slate-800">Spring (March)</strong> and <strong className="font-semibold text-slate-800">Autumn (September)</strong>.
            </StepCard>

            <StepCard number="2" title="Submit Admission Application">
              Apply directly through the university&apos;s online international portal, upload academic transcripts, language scores, and pay the university application fee.
            </StepCard>

            <StepCard number="3" title="Receive Standard Admission Letter">
              Upon approval and payment of tuition fees (or scholarship award), the university issues your official Standard Admission Letter.
            </StepCard>

            <StepCard number="4" title="Complete Medical TB Check & Document Attestation">
              Undergo the mandatory TB screening at an embassy-approved clinic in Pakistan and ensure all degrees are attested by HEC and MOFA.
            </StepCard>

            <StepCard number="5" title="Prepare Financial Evidence">
              Secure a bank statement of USD $15,000+ (or scholarship certificate) to prove you can cover tuition and living expenses during your stay.
            </StepCard>

            <StepCard number="6" title="Submit Visa Application">
              Submit your D-2 visa application, passport, and documents to the Embassy of the Republic of Korea in Islamabad or through the designated Korea Visa Application Center (KVAC).
            </StepCard>

            <StepCard number="7" title="Travel & Register for ARC">
              After receiving your D-2 visa, travel to South Korea. Within 90 days of arrival, register for your <strong className="font-semibold text-slate-800">Alien Registration Card (ARC)</strong> at your local South Korean immigration office.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            South Korea Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Visa Fee</td>
                  <td className="p-4">
                    Approximately <strong className="font-semibold text-slate-900">$60 USD</strong> for a single-entry long-stay visa (over 90 days). Additional processing fees may apply if submitting via KVAC.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Typically <strong className="font-semibold text-slate-900">2 to 4 weeks</strong>. It is recommended to apply at least 6 weeks before your program start date.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Fund Requirement</td>
                  <td className="p-4">
                    Minimum <strong className="font-semibold text-slate-900">USD $15,000 to $20,000</strong> (KRW 20,000,000+) in a bank account maintained for at least 28 days prior to visa submission.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Alien Registration Card (ARC)</td>
                  <td className="p-4">
                    ₩30,000 KRW fee payable upon arrival in South Korea when registering at the local immigration office.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your South Korea Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on university applications, Global Korea Scholarship (GKS), document attestation, and visa filing.
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