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
  title: 'How to Apply for Turkey Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Turkey student visa requirements, Anatolia Travel Services visa filing, fees, Türkiye Bursları scholarships, and residence permit procedures for Pakistani students.',
};

// Turkey-specific requirements data
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Your passport must be valid for at least 6 months beyond your intended stay in Turkey, with at least two blank pages."
  },
  {
    title: "Official University Acceptance Letter",
    text: "Formal acceptance letter from a recognized Turkish public or foundation university, or proof of award for the Türkiye Bursları scholarship."
  },
  {
    title: "Anatolia Visa Application Form",
    text: "Duly filled and signed Turkish student visa application form processed through Anatolia Travel Services (the official visa agency in Pakistan)."
  },
  {
    title: "Proof of Financial Funds",
    text: "Official bank statement (personal or sponsor's) showing sufficient funds to cover tuition and living expenses in Turkey, along with an account maintenance certificate and affidavit of support."
  },
  {
    title: "Attested Academic Documents",
    text: "Matriculation, Intermediate, Bachelor's degree, and transcripts attested by IBCC, HEC, and the Ministry of Foreign Affairs (MOFA) Pakistan."
  },
  {
    title: "Language Proficiency Certificate",
    text: "IELTS, TOEFL, or TOMER (for Turkish-taught programs) as required by the admitting university."
  },
  {
    title: "Travel & Health Insurance",
    text: "Comprehensive travel medical insurance valid in Turkey for the duration of stay, issued by an authorized insurance provider."
  },
  {
    title: "Police Clearance Certificate",
    text: "Recent Character Certificate issued by local police authorities in Pakistan, legally attested."
  }
];

const stepsData = [
  {
    number: "1",
    title: "Apply & Secure Admission",
    text: "Research Turkish universities or apply through the Türkiye Bursları official scholarship portal. Obtain your official University Acceptance Letter."
  },
  {
    number: "2",
    title: "Attest Educational Documents",
    text: "Get your academic degrees and transcripts verified and attested by IBCC/HEC and MOFA Pakistan."
  },
  {
    number: "3",
    title: "Prepare Financial & Travel Documents",
    text: "Gather bank statements, travel health insurance, police clearance, and accommodation details in Turkey."
  },
  {
    number: "4",
    title: "Book Appointment at Anatolia Travel Services",
    text: "Schedule an appointment at the nearest Anatolia Travel Services visa application center (Islamabad, Lahore, Karachi, Peshawar, etc.)."
  },
  {
    number: "5",
    title: "Submit Visa Application & Biometrics",
    text: "Attend your visa appointment, submit all physical document sets, provide biometrics, and pay the visa processing fee."
  },
  {
    number: "6",
    title: "Receive Visa Stamp & Travel",
    text: "Collect your passport with the stamped Turkish Student Entry Visa upon approval and arrange travel to Turkey."
  },
  {
    number: "7",
    title: "Apply for Student Residence Permit (İkamet)",
    text: "Within 30 days of arrival in Turkey, apply online via the e-İkamet portal and submit documents to the Directorate General of Migration Management (Göç İdaresi)."
  }
];

export default function Turkey() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Hero Header Section */}
      <header className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            2026 Official Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a Turkey Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A step-by-step roadmap covering university acceptance, Anatolia visa processing, required documents, fees, and Student Residence Permit (İkamet).
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Turkey is a top destination for Pakistani students seeking affordable, world-class education with globally recognized degrees. Featuring modern university campuses, competitive tuition fees, and generous government scholarships like <strong className="font-semibold text-slate-900">Türkiye Bursları</strong>, Turkey offers an ideal academic pathway bridging Europe and Asia.
          </p>

          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
            <h4 className="font-bold text-blue-950 text-sm sm:text-base">Visa Processing in Pakistan:</h4>
            <p className="text-blue-900 text-sm mt-1">
              All Turkish student visa applications in Pakistan are submitted through <strong className="font-semibold">Anatolia Travel Services</strong>, the official visa application processing agency authorized by the Embassy/Consulate General of the Republic of Turkey.
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
                  <ChevronRight size={16} /> 2. Step-by-Step Turkey Visa Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:underline flex items-center gap-2">
                  <ChevronRight size={16} /> 3. Visa Fees, Processing Time &amp; Residence Permit
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
            Ensure you have the following essential documents prepared for your visa filing at Anatolia Travel Services:
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
            Turkey Study Visa Fee &amp; Processing Details
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Anatolia Visa Fee</td>
                  <td className="p-4">
                    Visa fee + Anatolia service fee is payable in cash (USD/PKR equivalent) at the center during submission.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Typically <strong className="font-semibold text-slate-900">3 to 4 weeks</strong> from the date of submission at Anatolia centers.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Student Residence Permit (İkamet)</td>
                  <td className="p-4">
                    After arriving in Turkey, students pay a nominal card fee (~356 TRY) and obtain an İkamet permit for legal stay during their degree.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Financial Requirement</td>
                  <td className="p-4">
                    Bank balance showing at least <strong className="font-semibold text-slate-900">$4,000 to $6,000 USD</strong> equivalent, maintained for 3 to 6 months.
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
              Need Help With Your Turkey Study Visa?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert guidance on Turkish university admissions, Türkiye Bursları scholarship applications, and Anatolia visa submission.
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