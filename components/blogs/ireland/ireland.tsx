import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  AlertCircle 
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Ireland Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Ireland study visa requirements, fees, process, and timeline for Pakistani students.',
};

export default function IrelandPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans scroll-smooth">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for an Ireland Study Visa in 2026 from Pakistan
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
            Ireland is one of the premier destinations for Pakistani students seeking a world-class, English-medium education in Europe. Home to globally ranked universities and booming tech and pharmaceutical hubs, Ireland offers top-tier academic degree programs, part-time work rights during study, and up to 2 years of post-study work authorization (Stamp 1G) for Master&apos;s graduates.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-re-900 text-sm sm:text-base">Key Requirement to Understand:</h4>
              <p className="text-red-800 text-sm mt-1">
                Pakistani students require a <strong className="font-semibold text-red-950">Long Stay &lsquo;D&rsquo; Study Visa</strong>. Applications must be completed online via the <strong className="font-semibold text-red-950">AVATS portal</strong> (Irish Immigration Service Delivery), followed by document and biometrics submission at a VFS Global center in Pakistan (Islamabad, Lahore, or Karachi).
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-slate-700">
              <li>
                <a href="#requirements" className="hover:underline flex items-center gap-2 transition-colors hover:text-slate-900">
                  <ChevronRight size={16} /> 1. Requirements for Pakistani Students
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:underline flex items-center gap-2 transition-colors hover:text-slate-900">
                  <ChevronRight size={16} /> 2. Step-by-Step Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:underline flex items-center gap-2 transition-colors hover:text-slate-900">
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
          <p className="text-slate-600 mb-6">To apply for an Irish study visa, Pakistani students need to prepare the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Your passport must be valid for at least 12 months after your proposed arrival date in Ireland, with at least two blank visa pages.
            </RequirementItem>
            <RequirementItem title="Official Acceptance Letter">
              Unconditional letter of acceptance from an eligible Irish university or college listed on the Interim List of Eligible Programmes (ILEP).
            </RequirementItem>
            <RequirementItem title="Proof of Tuition Fee Payment">
              Receipt showing full tuition fee payment or a minimum payment of €6,000 if the fee exceeds €6,000 prior to visa lodgment.
            </RequirementItem>
            <RequirementItem title="Proof of Financial Funds">
              Evidence that you have immediate access to at least <strong className="font-semibold text-slate-800">€10,000 per year</strong> for living costs, plus full tuition fees for each subsequent year. Bank statements must cover the immediate 6 months prior to application.
            </RequirementItem>
            <RequirementItem title="Academic Qualifications">
              Attested copies of Matric, Intermediate, Bachelor&apos;s degree certificates, and official transcripts.
            </RequirementItem>
            <RequirementItem title="English Language Proficiency">
              Proof of English language proficiency. Standard requirements are <strong className="font-semibold text-slate-800">IELTS 6.0 to 6.5</strong>, TOEFL iBT 80+, or PTE Academic 58+.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP)">
              A detailed letter outlining your choice of course, career plans, justification for studying in Ireland, and strong ties to Pakistan confirming return after study.
            </RequirementItem>
            <RequirementItem title="Private Medical Insurance">
              Proof of private medical insurance coverage for at least your first year of study in Ireland.
            </RequirementItem>
            <RequirementItem title="Explanation of Educational/Employment Gaps">
              Detailed CV along with supporting documents (experience letters, pay slips) accounting for any gaps between studies.
            </RequirementItem>
            <RequirementItem title="AVATS Summary Sheet &amp; Fee Receipts">
              Signed AVATS online application summary sheet and VFS submission appointment confirmation.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Your Program & Apply">
              Research eligible programs on the ILEP list and submit applications directly to Irish universities or colleges. Intakes are primarily in <strong className="font-semibold text-slate-800">Autumn (September)</strong> and <strong className="font-semibold text-slate-800">Spring (January)</strong>.
            </StepCard>

            <StepCard number="2" title="Receive Admission & Pay Fees">
              Upon receiving your offer letter, pay the required tuition fees (minimum €6,000 or total tuition if under €6,000) through approved electronic transfer methods like PayToStudy or Flywire.
            </StepCard>

            <StepCard number="3" title="Prepare Document Portfolio">
              Gather 6-month bank statements, financial proof of funds, sponsorship letters, private health insurance, and academic transcripts.
            </StepCard>

            <StepCard number="4" title="Complete AVATS Online Application">
              Fill out the visa application online on the official <strong className="font-semibold text-slate-800">AVATS portal</strong> (Irish Immigration Service Delivery), select &lsquo;Study&rsquo; as the visa type, and print the summary form.
            </StepCard>

            <StepCard number="5" title="Book & Attend VFS Global Appointment">
              Schedule an appointment at a VFS Global center in Islamabad, Lahore, or Karachi to submit your physical documents, original passport, and register biometrics.
            </StepCard>

            <StepCard number="6" title="Receive Decision & Travel to Ireland">
              Track your application. Once your visa is granted, arrange travel to Ireland.
            </StepCard>

            <StepCard number="7" title="Register for Irish Residence Permit (Stamp 2)">
              After arrival in Ireland, book an appointment with the Burgh Quay Registration Office (Dublin) or local Garda station to obtain your Irish Residence Permit (IRP) card and Stamp 2 study permission.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Ireland Study Visa Fee &amp; Processing Time
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
                    <strong className="font-semibold text-slate-900">€60 for Single Entry</strong> (Long Stay &lsquo;D&rsquo;) or <strong className="font-semibold text-slate-900">€100 for Multiple Entry</strong>. Additional VFS Global service charges apply at the center in Pakistan.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Standard visa processing time ranges between <strong className="font-semibold text-slate-900">4 to 8 weeks</strong>. It is strongly recommended to submit your application at least 8 to 12 weeks before course commencement.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Living Expenses Fund</td>
                  <td className="p-4">
                    Minimum requirement is <strong className="font-semibold text-slate-900">€10,000 per academic year</strong> in liquid funds for living expenses, plus proof of access to remaining tuition fees.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Work Rights</td>
                  <td className="p-4">
                    Students with a Stamp 2 permission can work up to <strong className="font-semibold text-slate-900">20 hours per week</strong> during term time and up to <strong className="font-semibold text-slate-900">40 hours per week</strong> during official holidays.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Post-Study Work (Stamp 1G)</td>
                  <td className="p-4">
                    Graduates qualify for <strong className="font-semibold text-slate-900">1 year</strong> (Bachelor&apos;s degree) or <strong className="font-semibold text-slate-900">up to 2 years</strong> (Master&apos;s &amp; PhD) stay back under the Third Level Graduate Scheme.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your Ireland Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on university applications, AVATS registration, financial documentation, and VFS visa lodgment.
            </p>
          </div>

          <form 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              aria-label="Full Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" 
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              aria-label="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" 
              required 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Mobile Number" 
              aria-label="Mobile Number"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-slate-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm" 
              required 
            />
            
            <select 
              name="studyLevel"
              aria-label="Preferred Study Level"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button 
              type="submit" 
              className="sm:col-span-2 w-full py-3.5 bg-red-400 hover:bg-red-300 text-slate-950 font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-base flex items-center justify-center gap-2"
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
interface RequirementItemProps {
  title: string;
  children: React.ReactNode;
}

function RequirementItem({ title, children }: RequirementItemProps) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
      <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
      <div className="text-sm sm:text-base text-slate-700">
        <strong className="font-semibold text-slate-900">{title}:</strong> {children}
      </div>
    </li>
  );
}

interface StepCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

function StepCard({ number, title, children }: StepCardProps) {
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