import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 

} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Canada Study Permit in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Canada Study Permit requirements, GIC proof of funds, Provincial Attestation Letter (PAL), and IRCC application process for Pakistani students.',
};

export default function CanadaPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Canada Study Permit in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering DLI admission, Provincial Attestation Letters (PAL), GIC financial requirements, and IRCC portal filing.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Canada remains a premier destination for Pakistani students due to its globally ranked universities, welcoming multicultural environment, and post-graduation work opportunities through the Post-Graduation Work Permit (PGWP) program.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">Important 2026 Update:</h4>
            <p className="text-blue-900 text-sm mt-1">
              Most undergraduate study permit applicants require a <strong className="font-semibold text-slate-900">Provincial Attestation Letter (PAL)</strong> from their institution&apos;s province before submitting their IRCC application. Master&apos;s and Doctoral degree applicants are exempt from the PAL requirement.
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
                  <ChevronRight size={16} /> 3. Visa Fee &amp; Financial Proof
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
          <p className="text-slate-600 mb-6">Ensure you have the following essential documents prepared for your IRCC online study permit submission:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Must be valid for the duration of your intended studies in Canada with at least two blank visa pages.
            </RequirementItem>
            <RequirementItem title="Letter of Acceptance (LOA)">
              An official acceptance letter issued by a Designated Learning Institution (DLI) in Canada.
            </RequirementItem>
            <RequirementItem title="Provincial Attestation Letter (PAL)">
              Issued by the province through your DLI (required for undergraduate and diploma programs; exempted for Master&apos;s and PhD candidates).
            </RequirementItem>
            <RequirementItem title="Proof of Guaranteed Investment Certificate (GIC)">
              A GIC of <strong className="font-semibold text-slate-800">$20,635 CAD</strong> deposited with an approved Canadian financial institution (e.g., Scotiabank, CIBC, RBC) to cover first-year living expenses.
            </RequirementItem>
            <RequirementItem title="Proof of First Year Tuition Payment">
              Official payment receipt or bank transfer confirmation showing full tuition payment for the first academic year.
            </RequirementItem>
            <RequirementItem title="Language Proficiency Results">
              Valid IELTS Academic (minimum overall band score of 6.0–6.5) or PTE Academic / TOEFL iBT score report.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP) / Study Plan">
              A clear explanation detailing your chosen program, academic history, career objectives, and ties to Pakistan demonstrating your intent to return.
            </RequirementItem>
            <RequirementItem title="Immigration Medical Exam (IME)">
              Upfront medical assessment completed by a Panel Physician designated by IRCC in Pakistan.
            </RequirementItem>
            <RequirementItem title="Police Clearance Certificate">
              Character certificate issued by the local police department in Pakistan and attested by MOFA.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Select a DLI & Apply">
              Choose a recognized Designated Learning Institution (DLI) offering PGWP-eligible programs. Submit your application and fulfill university entry criteria.
            </StepCard>

            <StepCard number="2" title="Receive LOA & Request PAL">
              Upon receiving your Letter of Acceptance (LOA), pay the tuition deposit so your institution can issue your Provincial Attestation Letter (PAL) if applicable.
            </StepCard>

            <StepCard number="3" title="Purchase GIC & Pay 1st Year Tuition">
              Open a Canadian student bank account (e.g., Scotiabank or CIBC) and transfer $20,635 CAD for your GIC certificate. Pay the first-year tuition fee to your university.
            </StepCard>

            <StepCard number="4" title="Complete Upfront Medical Exam">
              Schedule an appointment with an IRCC panel physician in Islamabad, Lahore, or Karachi to obtain your medical tracking sheet.
            </StepCard>

            <StepCard number="5" title="Submit IRCC Online Application">
              Create an account on the official IRCC portal, upload all academic transcripts, GIC, tuition receipts, PAL, SOP, and financial proof, and pay the visa fee.
            </StepCard>

            <StepCard number="6" title="Provide Biometrics at VFS Global">
              After receiving your Biometric Instruction Letter (BIL), book an appointment at the VFS Canada Visa Application Centre (VAC) in Pakistan to submit biometrics and fingerprints.
            </StepCard>

            <StepCard number="7" title="Passport Request (PPR) & Travel">
              Once approved, submit your passport to VFS for the visa counterfoil and Port of Entry (POE) Letter of Introduction. Travel to Canada and obtain your study permit upon arrival.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Canada Study Permit Fee &amp; Financial Overview
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Study Permit Processing Fee</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">$150 CAD</strong> (paid online during application submission).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Biometrics Fee</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">$85 CAD</strong> per applicant.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">GIC Requirement (Living Expenses)</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">$20,635 CAD</strong> for a single applicant (plus 1st year tuition fees).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Average Processing Time</td>
                  <td className="p-4">
                    Typically ranges between <strong className="font-semibold text-slate-900">7 to 12 weeks</strong> for applicants applying from Pakistan.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Work Entitlement</td>
                  <td className="p-4">
                    Students can work off-campus up to <strong className="font-semibold text-slate-900">20 hours per week</strong> during regular academic semesters and full-time during scheduled breaks.
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
              Need Help With Your Canada Study Permit Application?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert guidance on DLI selection, Provincial Attestation Letters (PAL), SOP drafting, and IRCC portal filing.
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
              <option value="diploma">Undergraduate Diploma / College</option>
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