import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  BookOpen 
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Sweden Study Visa in 2026 from Pakistan | D. Education Zone',
  description: 'Complete step-by-step guide on Sweden study visa requirements, fees, process, and timeline for Pakistani students.',
};

// Structured data for requirements and application steps
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Your passport should remain valid throughout your intended stay in Sweden. You cannot be granted a permit for longer than your passport validity."
  },
  {
    title: "University Admission Letter",
    text: "Official admission confirmation from a recognised Swedish university. You count as finally admitted only once any required tuition fee has been paid."
  },
  {
    title: "Application via universityadmissions.se",
    text: "Programme applications go through the official national portal universityadmissions.se (antagning.se in Swedish), managed by the Swedish Council for Higher Education. A non-EU application fee of SEK 900 applies for up to four programmes per round."
  },
  {
    title: "Proof of Funds",
    text: "Financial evidence showing you can cover tuition fees and living expenses in Sweden (SEK 10,656 per month for 2026). Note: bank statements must be issued no more than four months before your permit start date."
  },
  {
    title: "Academic Documents",
    text: "Matric, Intermediate, Bachelor's degree, transcripts, and supporting certificates. All documents must be in Swedish or English; if translated, include certified translations alongside original copies."
  },
  {
    title: "English Language Requirement",
    text: "IELTS, TOEFL, or equivalent proof of English proficiency as required by your university (commonly IELTS 6.5, TOEFL iBT 90+, or PTE 62+)."
  },
  {
    title: "Statement of Purpose (SOP)",
    text: "An SOP explaining your academic background, study goals, and future plans. Master's applications often require two recommendation letters."
  },
  {
    title: "Health Insurance",
    text: "If your programme lasts under one year, comprehensive private health insurance is required. For programmes lasting one year or more, registering in the Swedish population register provides local healthcare access."
  },
  {
    title: "Accommodation Details",
    text: "Proof of housing arrangements in Sweden. Student housing is competitive in cities like Stockholm, Gothenburg, and Lund, so secure housing as early as possible."
  },
  {
    title: "Residence Permit Application",
    text: "Completed online application through the Migrationsverket e-service. Biometrics (fingerprints and photo) will be collected at the embassy or after arrival."
  }
];

const stepsData = [
  {
    number: "1",
    title: "Choose Your Degree Program",
    text: "Research Swedish universities and select a degree program aligned with your goals. Main autumn intake applications run from mid-October to mid-January."
  },
  {
    number: "2",
    title: "Apply via admissions.se",
    text: "Submit applications through universityadmissions.se. Choose up to four programmes per admission round and pay the SEK 900 non-EU application fee."
  },
  {
    number: "3",
    title: "Receive Admission Offer",
    text: "Once accepted, you'll receive your official admission notification from the university."
  },
  {
    number: "4",
    title: "Apply for Scholarships",
    text: "Explore university scholarships and Swedish Institute (SI) scholarships, which offer partial to full tuition coverage along with living allowances."
  },
  {
    number: "5",
    title: "Arrange Financial Documentation",
    text: "Prepare proof of funds, tuition receipts, and sponsorship details. Ensure bank statements are no older than four months relative to your permit start date."
  },
  {
    number: "6",
    title: "Apply for Residence Permit",
    text: "Submit your online application via the Swedish Migration Agency (Migrationsverket) portal after paying tuition. Pay the SEK 1,500 permit fee online."
  },
  {
    number: "7",
    title: "Receive Decision & Travel",
    text: "Upon approval, prepare for travel to Sweden. For studies of one year or more, register in the Swedish population register upon arrival."
  }
];

export default function SwedenStudyGuide() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-16">
      {/* Top Banner Header */}
      <header className="bg-black text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow">
            D. Education Zone • 2026 Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            How to Apply for a <span className="text-blue-500">Sweden Study Visa</span> in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A step-by-step roadmap covering Swedish university applications, Migrationsverket residence permit requirements, bank statements, and fees.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Sweden is a top destination for Pakistani students seeking world-class education in an innovative, safe, and modern environment. Renowned for practical research, global rankings, free PhD programs, and a 12-month post-study work search visa, Sweden provides excellent long-term career prospects.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl">
            <h4 className="font-bold text-red-950 text-sm sm:text-base">Key Distinction:</h4>
            <p className="text-red-900 text-sm mt-1">
              Sweden does not issue a standard study visa for long-term programs. For courses longer than three months, Pakistani students apply for a <strong className="font-bold text-black">Residence Permit for Studies</strong> through the <strong className="font-bold text-black">Swedish Migration Agency (Migrationsverket)</strong> after receiving university admission.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h3 className="font-extrabold text-black mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
              <BookOpen size={16} className="text-blue-600" /> In this guide
            </h3>
            <ol className="space-y-2 text-sm sm:text-base font-bold text-blue-600">
              <li>
                <a href="#requirements" className="hover:text-red-600 hover:underline flex items-center gap-2 transition-colors">
                  <ChevronRight size={16} className="text-red-600" /> 1. Requirements for Pakistani Students
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-red-600 hover:underline flex items-center gap-2 transition-colors">
                  <ChevronRight size={16} className="text-red-600" /> 2. Step-by-Step Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-red-600 hover:underline flex items-center gap-2 transition-colors">
                  <ChevronRight size={16} className="text-red-600" /> 3. Permit Fees &amp; Processing Times
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 pb-2 border-b-2 border-blue-600">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for a Swedish residence permit for studies, collect and verify these key documents:</p>

          <ul className="space-y-4">
            {requirementsData.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700">
                  <strong className="font-bold text-black">{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 pb-2 border-b-2 border-blue-600">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200 bg-slate-50">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white font-black text-sm shrink-0 shadow-md">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-black text-base sm:text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 pb-2 border-b-2 border-blue-600">
            Sweden Study Permit Fees &amp; Processing Rules (2026)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px] border border-slate-200 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-black text-white font-bold text-sm uppercase tracking-wider">
                  <th className="p-4 w-1/3">Item</th>
                  <th className="p-4 w-2/3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700 bg-white">
                <tr>
                  <td className="p-4 font-bold text-black bg-slate-50">Permit &amp; Portal Fees</td>
                  <td className="p-4">
                    Residence permit application fee is <strong className="font-bold text-black">SEK 1,500 for adults</strong> (SEK 750 for minors under 18) paid online to Migrationsverket. The university application portal fee is <strong className="font-bold text-black">SEK 900</strong>.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black bg-slate-50">Processing Time</td>
                  <td className="p-4">
                    The Swedish Migration Agency processes most complete study permit applications in approximately <strong className="font-bold text-black">2 to 3 months</strong>. Apply as soon as tuition is paid.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black bg-slate-50">Maintenance Funds</td>
                  <td className="p-4">
                    The living expense requirement is <strong className="font-bold text-black">SEK 10,656 per month</strong> for 2026. You must show full funds in a bank account under your name for the duration of the permit.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-black bg-slate-50">Dependents</td>
                  <td className="p-4">
                    Spouse and children can apply simultaneously. Additional maintenance required: <strong className="font-bold text-black">SEK 4,440/month</strong> for a spouse and <strong className="font-bold text-black">SEK 2,664/month</strong> per child.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-black text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-t-4 border-blue-600 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
            <span className="text-xs font-black tracking-widest text-red-500 uppercase bg-red-950/60 px-3 py-1 rounded-full border border-red-800 inline-block mb-3">
              Free Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">Need Assistance with Your Sweden Study Application?</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get personalized evaluation, university application management, and complete residence permit support from D. Education Zone specialists.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto relative z-10">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
              required 
            />
            
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
              <option value="">Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button 
              type="submit" 
              className="sm:col-span-2 w-full py-3.5 bg-blue-600 hover:bg-red-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-100 text-base flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} /> Book Free Expert Consultation
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}