"use client";

import React from 'react';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall 
} from 'lucide-react';

// Data structures for inline rendering
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Original passport with at least 6 months of remaining validity and at least 2 blank visa pages, along with photocopies of the personal information page."
  },
  {
    title: "University Admission Notice",
    text: "Official original Admission Notice (and photocopy) issued by a recognised university or educational institution in China."
  },
  {
    title: "JW201 or JW202 Form",
    text: "Original and photocopy of Form JW201 (for CSC scholarship students) or Form JW202/DQ (for self-funded students), issued by Chinese authorities."
  },
  {
    title: "Visa Application Form & Photo",
    text: "Completed Chinese Visa Application Form submitted online (COVA), along with a recent passport-size photo (33mm x 48mm, white background, bare head)."
  },
  {
    title: "Police Character Certificate",
    text: "Valid Police Clearance Certificate from Pakistan, attested by the Ministry of Foreign Affairs (MOFA) Pakistan (applicable for applicants aged 10 and above)."
  },
  {
    title: "Foreigner Physical Examination Form",
    text: "Completed medical examination form signed by a recognised doctor/hospital, including chest X-ray and lab test results (required for studies > 180 days)."
  },
  {
    title: "Proof of Financial Means",
    text: "Bank statement showing a minimum closing balance of around USD 2,500 to 5,000 equivalent in PKR for self-funded students, or official CSC scholarship award letter."
  },
  {
    title: "Educational Attested Documents",
    text: "Matric, Intermediate, Bachelor's degrees, and official transcripts attested by IBCC, HEC, and MOFA Pakistan."
  },
  {
    title: "Language Proficiency Proof",
    text: "IELTS/TOEFL for English-medium programs, or HSK (Chinese Proficiency Test) certificate for Chinese-taught programs."
  },
  {
    title: "Identity Documents",
    text: "Photocopies of your CNIC / Form-B and previous passports or prior Chinese visas (if applicable)."
  }
];

const stepsData = [
  {
    number: "1",
    title: "Choose Program & Secure Admission",
    text: "Apply directly to Chinese universities or through official portals (like CUCAS or university portals). Secure an admission letter."
  },
  {
    number: "2",
    title: "Receive Admission Notice & JW201/JW202 Form",
    text: "Upon acceptance, the university will issue your official Admission Notice and apply for your Form JW201 (Scholarship) or Form JW202/DQ (Self-funded)."
  },
  {
    number: "3",
    title: "Complete Medical & Police Clearance",
    text: "Undergo the Foreigner Physical Examination at an approved hospital and obtain your MOFA-attested Police Clearance Certificate."
  },
  {
    number: "4",
    title: "Fill COVA Application Online",
    text: "Complete the Chinese Online Visa Application (COVA) form, upload your photo, and print out the completed confirmation page and application form."
  },
  {
    number: "5",
    title: "Book Appointment & Submit Application",
    text: "Schedule an appointment at the Chinese Visa Application Service Center (CVASC) in Islamabad, Karachi, or Lahore. Submit all original documents and biometric data."
  },
  {
    number: "6",
    title: "Collect Visa (X1 / X2)",
    text: "Collect your passport with the X1 Visa (studies > 180 days) or X2 Visa (studies ≤ 180 days) once processed."
  },
  {
    number: "7",
    title: "Travel & Apply for Temporary Residence Permit",
    text: "After arriving in China with an X1 visa, apply for a Foreigner's Residence Permit at the local Public Security Bureau (PSB) Exit-Entry Administration within 30 days."
  }
];

export default function ChinaStudyVisaGuide() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            How to Apply for a China Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering required documents, fees, processing timelines, and residence permit procedures for Pakistani students.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            China is a top destination for Pakistani students seeking quality higher education through competitive tuition fees, Chinese Government Scholarships (CSC), and world-class universities. Whether pursuing MBBS, Engineering, Business, or Chinese language courses, understanding the visa process is crucial for a smooth journey.
          </p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <h4 className="font-semibold text-red-900 text-sm sm:text-base">Visa Types to Know:</h4>
            <p className="text-red-800 text-sm mt-1">
              For studies lasting more than 180 days, you will be issued an <strong className="font-semibold text-red-950">X1 Visa</strong>, which must be converted into a Foreigner&apos;s Residence Permit within 30 days of entering China. For studies lasting 180 days or fewer, an <strong className="font-semibold text-red-950">X2 Visa</strong> is issued.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-slate-700">
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
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for a Chinese study visa (X1/X2), Pakistani applicants need to compile the following documents:</p>

          <ul className="space-y-4">
            {requirementsData.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700">
                  <strong className="font-semibold text-slate-900">{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-red-400 font-bold text-sm shrink-0">
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
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-6 pb-2 border-b border-slate-200">
            China Study Visa Fee &amp; Processing Time
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
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Embassy Visa Fee</td>
                  <td className="p-4">
                    <strong className="font-semibold text-slate-900">0 PKR</strong> (Visa fee is waived for Pakistani citizens under bilateral agreements).
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">CVASC Service Fee</td>
                  <td className="p-4">
                    The Chinese Visa Application Service Center charges a service fee of approximately <strong className="font-semibold text-slate-900">PKR 13,200 (Regular)</strong> or <strong className="font-semibold text-slate-900">PKR 19,800 (Express)</strong> inclusive of GST.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Processing Time</td>
                  <td className="p-4">
                    Regular processing takes about <strong className="font-semibold text-slate-900">4 to 7 working days</strong>. Express service takes approximately <strong className="font-semibold text-slate-900">2 to 3 working days</strong>.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Fund Requirement</td>
                  <td className="p-4">
                    Self-funded students must show proof of funds equivalent to <strong className="font-semibold text-slate-900">USD 2,500 – 5,000 per academic year</strong> in a bank account. CSC scholarship holders present their award letter instead.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-slate-50/50">Residence Permit Fee (In China)</td>
                  <td className="p-4">
                    Upon arrival in China, converting your X1 visa into a residence permit costs approximately <strong className="font-semibold text-slate-900">RMB 400 to RMB 800</strong> per year, plus roughly RMB 400–600 for the physical exam verification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form */}
        <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your China Study Visa?</h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Get expert guidance on CSC scholarships, university applications, JW202/JW201 form processing, and embassy documentation.
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
              <option value="language">Chinese Language Program</option>
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