import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Malaysia Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Malaysia study visa requirements, fees, process, and timeline for Pakistani students.',
};

export default function MalaysiaStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Malaysia Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering required documents, fees, EMGS processing timelines, and eVAL procedures.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Malaysia is a top destination for Pakistani students seeking affordable, world-class education in a safe and multicultural environment. Home to renowned public institutions and branch campuses of top UK and Australian universities, Malaysia offers top-tier English-taught degree programs with lower tuition and living costs.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Key process to understand:</h4>
            <p className="text-red-800 text-sm mt-1">
              Pakistani students must first obtain a Visa Approval Letter (<strong className="font-semibold text-red-950">eVAL</strong>) online through <strong className="font-semibold text-red-950">Education Malaysia Global Services (EMGS)</strong> before applying for a Single Entry Visa (SEV) to enter Malaysia.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-slate-700">
              <li>
                <Link href="#requirements" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 1. Requirements for Pakistani Students
                </Link>
              </li>
              <li>
                <Link href="#steps" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 2. Step-by-Step Application Process
                </Link>
              </li>
              <li>
                <Link href="#fees" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 3. Visa Fee &amp; Processing Time
                </Link>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for a Malaysian student pass via EMGS, you will need the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Your passport must be valid for at least 18 months from the date of application and have multiple blank pages.
            </RequirementItem>
            <RequirementItem title="University Offer Letter">
              An official letter of acceptance from a recognized Malaysian higher education institution or university.
            </RequirementItem>
            <RequirementItem title="EMGS Application via Website">
              Applications for Student Visa approval are submitted directly through the official <strong className="font-semibold text-slate-800">EMGS Portal (educationmalaysia.gov.my)</strong> or through your university.
            </RequirementItem>
            <RequirementItem title="Academic Credentials">
              Attested Matric, Intermediate, Bachelor&apos;s degree certificates and transcripts (attested by IBCC/HEC and MOFA Pakistan).
            </RequirementItem>
            <RequirementItem title="Proof of Financial Funds">
              Bank statement showing sufficient balance to cover tuition and living costs in Malaysia (typically around MYR 15,000–20,000 equivalent).
            </RequirementItem>
            <RequirementItem title="Medical Health Declaration">
              Pre-arrival health examination form completed at an accredited medical panel in Pakistan, along with required vaccination records.
            </RequirementItem>
            <RequirementItem title="Passport Size Photographs">
              Passport-sized photos with a white background adhering strictly to EMGS photo guidelines.
            </RequirementItem>
            <RequirementItem title="English Proficiency Proof">
              IELTS (5.0 to 6.0 minimum depending on course level), TOEFL, or equivalent recognized test scores.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Course & Get Offer Letter">
              Apply to your chosen Malaysian university. Once accepted, you will receive an official Offer Letter.
            </StepCard>

            <StepCard number="2" title="Submit EMGS Visa Application">
              Submit your document set and visa fee online through the EMGS portal (either directly or via your university&apos;s international office).
            </StepCard>

            <StepCard number="3" title="Pre-Arrival Medical Screening">
              Complete the required medical health screening at an approved panel clinic in Pakistan and upload the report to EMGS.
            </StepCard>

            <StepCard number="4" title="Receive Electronic Visa Approval Letter (eVAL)">
              Once EMGS and Malaysian Immigration review and approve your application (EMGS status reaches 35%–70%), your eVAL will be issued.
            </StepCard>

            <StepCard number="5" title="Apply for Single Entry Visa (SEV)">
              Apply for a Single Entry Visa (SEV) online (eVisa) or at the Malaysian High Commission / Embassy in Islamabad / Karachi using your eVAL.
            </StepCard>

            <StepCard number="6" title="Travel to Malaysia & Post-Arrival Medical Check">
              Fly to Malaysia, undergo a mandatory post-arrival medical checkup within 7 days, and complete registration at your university to receive your Student Pass sticker / i-Kad.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Malaysia Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">EMGS Processing Fee</td>
                  <td className="p-4">
                    The total EMGS fee ranges approximately from <strong className="font-semibold text-slate-900">MYR 2,000 to MYR 3,000</strong> (varies depending on institution and insurance package), covering application processing, medical insurance, and student pass fees.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    eVAL approval usually takes between <strong className="font-semibold text-slate-900">14 to 21 working days</strong> once complete documents are submitted to EMGS.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Living Cost Requirement</td>
                  <td className="p-4">
                    Average living expenses in Malaysia range from <strong className="font-semibold text-slate-900">MYR 1,500 to MYR 2,500 per month</strong> (approx. USD 350 to USD 600) covering accommodation, food, and transport.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Dependents</td>
                  <td className="p-4">
                    Dependents (spouse &amp; children) are generally allowed for postgraduate students (Master&apos;s by Research &amp; PhD programs) through Dependent Passes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your Malaysia Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on university applications, EMGS submission, eVAL processing, and scholarship options.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" required />
            
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" defaultValue="">
              <option value="" disabled>Preferred Study Level</option>
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