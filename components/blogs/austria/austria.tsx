import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  FileText, 
  GraduationCap, 
  HelpCircle, 
  Calendar,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Austria Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Austria study visa requirements, tuition fees, proof of funds, and residence permit process for Pakistani students.',
};

export default function AustriaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for an Austria Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A step-by-step roadmap covering university admission, document legalisation, proof of funds, and residence permit procedures.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Austria offers world-class higher education at highly affordable tuition rates in the heart of Europe. With low tuition fees at public universities, rich culture, and strong post-study career prospects across the Schengen zone, Austria is an ideal choice for Pakistani students seeking an internationally recognised degree.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">Key Visa Concept:</h4>
            <p className="text-blue-900 text-sm mt-1">
              For studies lasting more than six months, Pakistani students must apply for a <strong className="font-semibold text-slate-900">Residence Permit – Student (Aufenthaltstitel - Studierender)</strong> through the Austrian Embassy in Islamabad prior to traveling to Austria.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-semibold text-blue-600">
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
                  <ChevronRight size={16} /> 3. Visa Fee &amp; Processing Details
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for an Austrian student residence permit, prepare the following checklist:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Must be valid for at least 3 months beyond your intended stay with at least two blank pages.
            </RequirementItem>
            <RequirementItem title="Admission Letter (Zulassungsbescheid)">
              An official letter of admission from a recognized Austrian public or private university.
            </RequirementItem>
            <RequirementItem title="Legalised Educational Documents">
              Matric, Intermediate, or Bachelor’s degrees verified by IBCC/HEC, MOFA Pakistan, and legalised by the Austrian Embassy in Islamabad.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Means">
              Bank statement showing sufficient funds covering 12 months of living expenses. Funds must be in a personal bank account under the applicant&apos;s name or sponsor.
            </RequirementItem>
            <RequirementItem title="Language Proficiency Proof">
              IELTS/TOEFL for English-taught programs (usually IELTS 6.0–6.5) or Goethe/ÖSD certificates (B1/B2) for German-taught programs.
            </RequirementItem>
            <RequirementItem title="Proof of Accommodation">
              Rental agreement, student dormitory booking (e.g., OeAD housing), or lease confirmation covering at least 3–6 months.
            </RequirementItem>
            <RequirementItem title="Health Insurance Cover">
              Travel health insurance covering at least €30,000 before arrival, followed by enrollment in Austrian national health insurance (ÖGK) upon arrival.
            </RequirementItem>
            <RequirementItem title="Police Clearance Certificate">
              Character certificate issued by police authorities in Pakistan, attested by MOFA and legalised by the Austrian Embassy.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Select Program & University">
              Research Austrian public universities (e.g., University of Vienna, TU Wien) and verify application deadlines (Winter semester: September/October; Summer semester: February/March).
            </StepCard>

            <StepCard number="2" title="Attest Your Documents">
              Get all academic certificates attested by IBCC/HEC and the Ministry of Foreign Affairs (MOFA) in Pakistan.
            </StepCard>

            <StepCard number="3" title="Submit University Application">
              Apply directly to the university portal or via postal mail as required. Receive your official admission letter (*Zulassungsbescheid*).
            </StepCard>

            <StepCard number="4" title="Austrian Embassy Document Legalisation">
              Book an appointment with the Austrian Embassy in Islamabad to get your educational documents and Police Clearance Certificate officially legalised.
            </StepCard>

            <StepCard number="5" title="Prepare Financials & Housing">
              Transfer living funds into a bank account and secure valid student accommodation in Austria.
            </StepCard>

            <StepCard number="6" title="Submit Residence Permit Application">
              Book a visa appointment at the Austrian Embassy in Islamabad and submit your complete *Aufenthaltstitel - Studierender* application along with biometrics.
            </StepCard>

            <StepCard number="7" title="Receive Entry Visa (Visa D) & Fly">
              Once approved by the Austrian immigration authority (Magistrat/Bezirkshauptmannschaft), obtain Visa D to travel to Austria and collect your residence permit card upon arrival.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Austria Study Visa Fee &amp; Financial Overview
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="p-4 w-1/3">Item</th>
                  <th className="p-4 w-2/3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">University Tuition Fee</td>
                  <td className="p-4">
                    Approximately <strong className="font-semibold text-slate-900">€726.72 per semester</strong> + student union fee (~€22.70) for non-EU/EEA students at public universities.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Permit Application Fee</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">€160</strong> total (€120 application fee + €20 issuance fee + €20 biometric fee).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Typically ranges between <strong className="font-semibold text-slate-900">2 to 4 months</strong>. Early application submission is strongly advised.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Maintenance Funds (2026)</td>
                  <td className="p-4">
                    Under 24 years old: approx. <strong className="font-semibold text-slate-900">€633.83/month</strong> (~€7,600/year).<br />
                    24 years or older: approx. <strong className="font-semibold text-slate-900">€1,147.91/month</strong> (~€13,770/year).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Work Rights</td>
                  <td className="p-4">
                    Students can work part-time up to <strong className="font-semibold text-slate-900">20 hours per week</strong> during study semesters.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Free Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Need Help With Your Austria Study Visa?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert advice on legalisation, university admissions, bank statements, and Embassy filings.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" 
              required 
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm" 
              required 
            />
            
            <select className="w-full px-4 py-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm">
              <option value="">Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button 
              type="submit" 
              className="sm:col-span-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-base flex items-center justify-center gap-2"
            >
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
      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
      <div className="text-sm sm:text-base text-slate-700">
        <strong className="font-semibold text-slate-900">{title}:</strong> {children}
      </div>
    </li>
  );
}

function StepCard({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm shrink-0">
        {number}
      </span>
      <div>
        <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">{title}</h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}