import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  Calendar,
  ArrowRight,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for United Kingdom Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on United Kingdom student visa requirements, fees, IHS surcharge, CAS, processing times, and financial requirements for Pakistani students.',
};

// UK-specific requirements data
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Your passport must be valid for the duration of your intended stay in the UK, with at least two blank visa pages."
  },
  {
    title: "Confirmation of Acceptance for Studies (CAS)",
    text: "An official reference number issued by a UK Licensed Student Sponsor university once you accept an offer and pay any required deposit."
  },
  {
    title: "Proof of Financial Support",
    text: "Bank statements showing funds to cover tuition fees for year 1 plus living costs (£1,334/month for London or £1,023/month outside London for up to 9 months). Funds must be held continuously for at least 28 days."
  },
  {
    title: "Tuberculosis (TB) Test Certificate",
    text: "Pakistani applicants staying longer than 6 months must undergo TB screening at an approved IOM (International Organization for Migration) clinic in Pakistan."
  },
  {
    title: "English Language Proficiency",
    text: "Proof of English ability via SELT (IELTS UKVI, PTE Academic UKVI, or LanguageCert International ESOL SELT) or an approved university MOI waiver where applicable."
  },
  {
    title: "Academic & ATAS Certificates",
    text: "Original degrees, transcripts, and (if studying specific postgraduate STEM or tech subjects) Academic Technology Approval Scheme (ATAS) clearance."
  },
  {
    title: "Statement of Purpose (SOP)",
    text: "A well-written personal statement detailing your course choice, why you chose the UK, and your long-term career aspirations."
  },
  {
    title: "Immigration Health Surcharge (IHS)",
    text: "Mandatory payment granting access to the UK National Health Service (NHS) during your studies."
  }
];

const stepsData = [
  {
    number: "1",
    title: "Choose Course & Apply to UK Universities",
    text: "Select your program at a UK licensed sponsor institution through UCAS (undergraduate) or directly through university portals (postgraduate)."
  },
  {
    number: "2",
    title: "Receive CAS (Confirmation of Acceptance for Studies)",
    text: "Meet all conditional offer terms, pay the required tuition deposit, and obtain your official 14-digit CAS number from the university."
  },
  {
    number: "3",
    title: "Complete Medical (TB) Test",
    text: "Book and complete your TB test at an officially designated IOM clinic in Islamabad, Lahore, Karachi, or Mirpur."
  },
  {
    number: "4",
    title: "Prepare & Hold Bank Funds",
    text: "Ensure required tuition balance and living expense funds are deposited in an eligible bank account and maintained for a minimum of 28 consecutive days."
  },
  {
    number: "5",
    title: "Submit GOV.UK Online Application",
    text: "Fill out the Student Visa application form online on the UK government website, pay the visa fee and Immigration Health Surcharge (IHS)."
  },
  {
    number: "6",
    title: "Book & Attend VFS Biometric Appointment",
    text: "Schedule an appointment at a VFS Global center in Pakistan (Lahore, Islamabad, Karachi) to submit biometrics, photograph, and passport."
  },
  {
    number: "7",
    title: "Receive Visa Decision & Fly",
    text: "Collect your stamped passport with a vignette sticker, travel to the UK, and collect your Biometric Residence Permit (BRP) or digital eVisa status upon arrival."
  }
];

export default function UK() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Header Section */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a United Kingdom Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A complete step-by-step roadmap covering UK Student Visa requirements, CAS, IHS fee, bank statement rules, and VFS processing.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            The United Kingdom remains one of the top destinations for Pakistani students offering world-class academic institutions, 1-year Master's degree options, and the popular <strong className="font-semibold text-slate-900">Graduate Route (2-year post-study work visa)</strong>. To study in the UK for a course lasting longer than 6 months, international students must apply for a <strong className="font-semibold text-slate-900">Student Visa (formerly Tier 4)</strong>.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">Key Requirement Before Visa Application:</h4>
            <p className="text-blue-900 text-sm mt-1">
              You cannot submit a UK Student Visa application without a valid <strong className="font-semibold">CAS (Confirmation of Acceptance for Studies)</strong> issued by your university, which can be requested up to 6 months before your course start date.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-semibold text-blue-600">
              <li>
                <a href="#requirements" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 1. Document Requirements for Pakistani Students
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 2. Step-by-Step UK Visa Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 3. Visa Fees, IHS & Processing Timeline
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Document Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">
            Ensure you have the following essential documents prepared before submitting your UK Student Visa application:
          </p>

          <ul className="space-y-4">
            {requirementsData.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700">
                  <strong className="font-semibold text-slate-900">{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm shrink-0">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Fees & Table */}
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            UK Student Visa Fees &amp; Processing Information
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
                    <strong className="font-semibold text-slate-900">£516</strong> per applicant (paid online during application submission).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Immigration Health Surcharge (IHS)</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">£776 per year</strong> of study (discounted rate for students, grants full access to NHS).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Standard Processing Time</td>
                  <td className="p-4">
                    Typically <strong className="font-semibold text-slate-900">3 weeks</strong> following biometric submission at VFS Global in Pakistan.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Priority & Super Priority Visa Services</td>
                  <td className="p-4">
                    Priority service (5 working days) costs an additional ~£500; Super Priority service (24 hours) costs an additional ~£1,000.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Financial Maintenance Funds</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">Inner London:</strong> £1,334/month | <strong className="font-semibold text-slate-900">Outer London / Rest of UK:</strong> £1,023/month (for up to 9 months) + remaining tuition fees. Must be held for 28 consecutive days.
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
              Need Expert Advice for Your UK Student Visa?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get direct assistance with university admissions, CAS processing, financial documentation, and visa filing.
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