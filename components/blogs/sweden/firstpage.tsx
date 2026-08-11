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
  title: 'How to Apply for Sweden Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Sweden study visa requirements, fees, process, and timeline for Pakistani students.',
};

export default function Sweden() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Sweden Study Visa in 2026 from Pakistan
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
            Sweden is becoming a popular choice for Pakistani students who want a high-quality international education in a safe, modern, and student-friendly environment. Known for its innovative teaching style and globally recognised universities, Sweden offers a wide range of English-taught programs, free PhD study, and the chance to stay for up to 12 months after graduation to look for work.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">One point to understand from the start:</h4>
            <p className="text-blue-900 text-sm mt-1">
              Sweden does not issue a separate &ldquo;study visa&rdquo; for longer courses. For studies of more than three months, Pakistani students apply online to the <strong className="font-semibold text-slate-900">Swedish Migration Agency (Migrationsverket)</strong> for a residence permit for studies, after being admitted to a Swedish university.
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
                  <ChevronRight size={16} /> 3. Visa Fee &amp; Processing Time
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
          <p className="text-slate-600 mb-6">To apply for a Swedish study visa, Pakistani students need the following documents:</p>

          <ul className="space-y-4">
            <RequirementItem title="Valid Passport">
              Your passport should remain valid throughout your intended stay in Sweden. You cannot be granted a permit for longer than your passport is valid.
            </RequirementItem>
            <RequirementItem title="University Admission Letter">
              Official admission confirmation from a recognised Swedish university. You count as finally admitted only once any tuition fee has been paid.
            </RequirementItem>
            <RequirementItem title="Application Through universityadmissions.se">
              Programme applications go through the official national portal universityadmissions.se (the Swedish-language version is antagning.se), run by the Swedish Council for Higher Education. A <strong className="font-semibold text-slate-800">non-EU application fee of SEK 900</strong> applies, and you can choose up to four programmes per round.
            </RequirementItem>
            <RequirementItem title="Proof of Funds">
              Financial evidence showing you can cover tuition fees and living expenses in Sweden. <em>Note: the bank statement must be issued no more than four months before your permit start date.</em>
            </RequirementItem>
            <RequirementItem title="Academic Documents">
              Matric, Intermediate, Bachelor&apos;s degree, transcripts, and other supporting certificates. All documents must be in Swedish or English; if translated, include a certified translation together with a copy of the original.
            </RequirementItem>
            <RequirementItem title="English Language Requirement">
              IELTS, TOEFL, or equivalent proof of English proficiency as required by the university, commonly around <strong className="font-semibold text-slate-800">IELTS 6.0 to 6.5</strong>, TOEFL iBT 90 to 100, or PTE 62 and above.
            </RequirementItem>
            <RequirementItem title="Statement of Purpose (SOP)">
              An SOP explaining your academic background, study goals, and plans. Master&apos;s applications often also ask for two letters of recommendation.
            </RequirementItem>
            <RequirementItem title="Health Insurance">
              If your programme lasts less than <strong className="font-semibold text-slate-800">one year</strong>, you need comprehensive health insurance covering medical care, hospitalisation, emergency dental care, and medical repatriation. If your studies last <strong className="font-semibold text-slate-800">one year or more</strong>, you register in the Swedish population register, which gives you access to healthcare.
            </RequirementItem>
            <RequirementItem title="Accommodation Details">
              Proof of housing arrangements in Sweden. Student housing is limited in cities like Stockholm, Gothenburg, and Lund, so arrange a place as early as you can.
            </RequirementItem>
            <RequirementItem title="Residence Permit Documents">
              Completed online residence permit application through the <strong className="font-semibold text-slate-800">Migrationsverket e-service</strong>, with passport-size photographs. Your fingerprints and photo are taken later when you present your passport.
            </RequirementItem>
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            <StepCard number="1" title="Choose Your Program">
              Research Swedish universities and select a degree program that matches your academic interests. The <strong className="font-semibold text-slate-800">main intake is autumn</strong>, with applications usually open from <strong className="font-semibold text-slate-800">mid-October to mid-January</strong> deadline.
            </StepCard>

            <StepCard number="2" title="Apply through admissions.se">
              Submit your university applications through the official national portal universityadmissions.se. You can apply to up to <strong className="font-semibold text-slate-800">four programmes in a round</strong>, and a non-EU application fee of <strong className="font-semibold text-slate-800">SEK 900</strong> applies.
            </StepCard>

            <StepCard number="3" title="Receive Admission Offer">
              Once accepted, you&apos;ll receive your admission confirmation from the university.
            </StepCard>

            <StepCard number="4" title="Apply for Scholarships">
              Look for scholarships from your university and from the Swedish Institute. Coverage ranges from partial to full tuition, and some scholarships also support living costs.
            </StepCard>

            <StepCard number="5" title="Arrange Financial Documents">
              Prepare proof of funds, tuition payment receipts, and sponsorship documents if required. Make sure your bank statement is issued no more than four months before your permit start date.
            </StepCard>

            <StepCard number="6" title="Apply for a Residence Permit">
              Apply online through the Swedish Migration Agency (<strong className="font-semibold text-slate-800">Migrationsverket</strong>) e-service after you are admitted and have paid any tuition. You pay the <strong className="font-semibold text-slate-800">SEK 1,500 fee by card</strong> and state which Swedish embassy you will visit.
            </StepCard>

            <StepCard number="7" title="Receive Approval & Travel">
              Once approved, prepare for your journey to Sweden. If your studies last a year or more, register in the Swedish population register after arrival to access healthcare.
            </StepCard>
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Sweden Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Visa Fee</td>
                  <td className="p-4">
                    There is no separate study visa fee. The residence permit for studies application fee is <strong className="font-semibold text-slate-900">SEK 1,500 for adults</strong> (SEK 750 for children under 18), paid by card in the online application. A separate university application fee of SEK 900 is paid at universityadmissions.se.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    The Migration Agency does not give a fixed time, but reports that about 75 percent of recent cases were decided within <strong className="font-semibold text-slate-900">2 months</strong>. Apply as soon as you are admitted and have paid tuition.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Fund Requirement</td>
                  <td className="p-4">
                    The maintenance requirement is <strong className="font-semibold text-slate-900">SEK 10,656 per month for 2026</strong> (set by the Migration Agency and revised yearly), to cover living costs for each month of your studies.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Dependents</td>
                  <td className="p-4">
                    Allowed. Family members can apply at the same time, showing additional maintenance of SEK 4,440 per month for a spouse and SEK 2,664 per month for each child.
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
              Need Help With Your Sweden Study Visa?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert guidance on scholarship applications, financial documentation, and residence permit procedures.
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