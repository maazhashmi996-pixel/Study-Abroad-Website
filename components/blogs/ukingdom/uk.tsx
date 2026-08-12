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
  title: 'How to Apply for UK Student Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on UK Student Visa requirements, CAS, bank statement 28-day rule, IHS fee, and application process for Pakistani students.',
};

export default function UKPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a UK Student Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A complete step-by-step roadmap covering CAS issuance, financial requirements, IHS healthcare surcharge, and VFS visa submission.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            The United Kingdom remains one of the premier study-abroad destinations for Pakistani students, offering world-ranked universities, shorter degree durations (typically 1-year Master’s and 3-year Bachelor’s), and post-study work pathways through the Graduate Route visa.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">Core Requirement:</h4>
            <p className="text-blue-900 text-sm mt-1">
              To apply for a UK Student Visa from Pakistan, you must first obtain a valid <strong className="font-semibold text-slate-900">Confirmation of Acceptance for Studies (CAS)</strong> from a UKVI-licensed student sponsor university and satisfy the Points-Based Immigration System requirements.
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
                  <ChevronRight size={16} /> 3. Visa Fees &amp; Financial Maintenance Rules
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
          <p className="text-slate-600 mb-6">Ensure you have all the necessary documents prepared before starting your UK visa application:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Must have at least six months of validity beyond your course start date and at least one blank page for the entry vignette sticker.
            </RequirementItem>
            <RequirementItem title="CAS Statement (Confirmation of Acceptance for Studies)">
              Issued by your UK university once you accept an unconditional offer and pay any required tuition deposit.
            </RequirementItem>
            <RequirementItem title="Tuberculosis (TB) Test Certificate">
              Must be issued by an IOM (International Organization for Migration) approved health center in Pakistan (Islamabad, Lahore, Karachi, or Mirpur).
            </RequirementItem>
            <RequirementItem title="Proof of Financial Maintenance (28-Day Rule)">
              Bank statement showing required tuition balance plus 9 months of living expenses held in your personal or parental bank account for at least 28 consecutive days without dropping below the required minimum.
            </RequirementItem>
            <RequirementItem title="Parental Consent & Relationship Proof (If using parent's account)">
              If relying on parental funds, provide a signed consent letter, your birth certificate attested by Nadra/MOFA, and parent's identity documents.
            </RequirementItem>
            <RequirementItem title="English Language Proficiency">
              IELTS UKVI, PTE Academic UKVI, or university-internal English assessments accepted on your CAS letter.
            </RequirementItem>
            <RequirementItem title="Academic Transcripts & Certificates">
              Matric, Intermediate, Bachelor's degree, and transcripts as listed in the academic evidence section of your CAS statement.
            </RequirementItem>
            <RequirementItem title="ATAS Certificate (If applicable)">
              Academic Technology Approval Scheme clearance certificate required for specific technical, STEM, or research-based postgraduate courses.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Course & Receive Unconditional Offer">
              Apply to your chosen UK universities via UCAS (for undergraduate) or directly through university portals (for postgraduate). Meet academic and English language conditions.
            </StepCard>

            <StepCard number="2" title="Pay Deposit & Receive CAS">
              Pay the required tuition deposit to your university. The institution will issue your 14-digit CAS reference number containing details of your course, fees, and documents.
            </StepCard>

            <StepCard number="3" title="Complete TB Screening">
              Book and complete a Tuberculosis (TB) medical test at an official IOM clinic in Pakistan.
            </StepCard>

            <StepCard number="4" title="Fulfill the 28-Day Bank Statement Rule">
              Ensure your remaining 1st-year tuition fee + living expenses balance remains continuously in your bank account for a full 28-day window before submitting the online visa application.
            </StepCard>

            <StepCard number="5" title="Submit Online Application on GOV.UK">
              Fill out the UK Student Visa form online, pay the <strong className="font-semibold text-slate-800">£558 visa application fee</strong> and the mandatory <strong className="font-semibold text-slate-800">Immigration Health Surcharge (IHS)</strong>.
            </StepCard>

            <StepCard number="6" title="Book & Attend VFS Global Appointment">
              Schedule your appointment at the VFS Global center in Islamabad, Lahore, or Karachi to submit biometrics (fingerprints and photo) and upload scanned documents.
            </StepCard>

            <StepCard number="7" title="Passport Retrieval & Arrival in the UK">
              Upon approval, collect your passport with the entry vignette, fly to the UK, and collect your e-Visa / Biometric Residence Permit (BRP) after arrival.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            UK Student Visa Fees &amp; Financial Requirements
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Visa Application Fee</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">£558</strong> per applicant (paid online at the time of submission).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Immigration Health Surcharge (IHS)</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">£776 per year</strong> of visa duration. Grants access to the UK National Health Service (NHS).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Living Expenses Maintenance (Inside London)</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">£1,529 per month</strong> for up to 9 months (Total max: £13,761) + unpaid tuition fee.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Living Expenses Maintenance (Outside London)</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">£1,171 per month</strong> for up to 9 months (Total max: £10,539) + unpaid tuition fee.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Standard processing takes approx. <strong className="font-semibold text-slate-900">3 weeks</strong>. Priority (~5 days) and Super Priority (~24 hours) services are available at extra cost.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Work Entitlement</td>
                  <td className="p-4">
                    Degree-level students can work up to <strong className="font-semibold text-slate-900">20 hours per week</strong> during term time and full-time during official official course breaks.
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
              Need Help With Your UK Student Visa Application?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert advice on CAS issuance, 28-day bank statement verification, IHS calculation, and visa filing.
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