import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall,
  AlertCircle
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Sweden Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Sweden study visa requirements, fees, process, and timeline for Pakistani students.',
};

// Data structures for inline rendering
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Your passport should remain valid throughout your intended stay in Sweden. You cannot be granted a permit for longer than your passport validity."
  },
  {
    title: "University Admission Letter",
    text: "Official admission confirmation from a recognized Swedish university. You count as finally admitted only once any required tuition fee has been paid."
  },
  {
    title: "Application Through universityadmissions.se",
    text: "Programme applications go through the official national portal universityadmissions.se (the Swedish-language version is antagning.se), run by the Swedish Council for Higher Education. A non-EU application fee of SEK 900 applies, and you can choose up to four programmes per round."
  },
  {
    title: "Proof of Funds",
    text: "Financial evidence showing you can cover tuition fees and living expenses in Sweden. The maintenance requirement for 2026 is SEK 10,656 per month. Note: bank statements must be issued no more than four months before your permit start date."
  },
  {
    title: "Academic Documents",
    text: "Matric, Intermediate, Bachelor's degree, transcripts, and other supporting certificates. All documents must be in Swedish or English; if translated, include a certified translation together with a copy of the original."
  },
  {
    title: "English Language Requirement",
    text: "IELTS, TOEFL, or equivalent proof of English proficiency as required by the university, commonly around IELTS 6.0 to 6.5, TOEFL iBT 90 to 100, or PTE 62 and above."
  },
  {
    title: "Statement of Purpose (SOP)",
    text: "An SOP explaining your academic background, study goals, and plans. Master's applications often also ask for two letters of recommendation."
  },
  {
    title: "Health Insurance",
    text: "If your programme lasts less than one year, you need comprehensive health insurance covering medical care, hospitalisation, emergency dental care, and medical repatriation. If your studies last one year or more, you register in the Swedish population register, which gives you access to healthcare."
  },
  {
    title: "Accommodation Details",
    text: "Proof of housing arrangements in Sweden. Student housing is limited in cities like Stockholm, Gothenburg, and Lund, so arrange a place as early as you can."
  },
  {
    title: "Residence Permit Documents",
    text: "Completed online residence permit application through the Migrationsverket e-service, with passport-size photographs. Your fingerprints and photo are taken later when you present your passport."
  }
];

const stepsData = [
  {
    number: "1",
    title: "Choose Your Program",
    text: "Research Swedish universities and select a degree program that matches your academic interests. The main intake is autumn, with applications usually open from mid-October to mid-January."
  },
  {
    number: "2",
    title: "Apply through universityadmissions.se",
    text: "Submit your university applications through the official national portal universityadmissions.se. You can apply to up to four programmes in a round, and a non-EU application fee of SEK 900 applies."
  },
  {
    number: "3",
    title: "Receive Admission Offer & Pay Tuition",
    text: "Once accepted, receive your admission notification and pay your first tuition installment to confirm your seat."
  },
  {
    number: "4",
    title: "Apply for Scholarships",
    text: "Look for scholarships from your university and from the Swedish Institute (SI). Coverage ranges from partial to full tuition, and some scholarships also support living costs."
  },
  {
    number: "5",
    title: "Arrange Financial Documents",
    text: "Prepare proof of funds (SEK 10,656/month), tuition payment receipts, and bank statements. Ensure your bank statement is issued within 4 months of your permit start date."
  },
  {
    number: "6",
    title: "Apply for a Residence Permit",
    text: "Apply online through the Swedish Migration Agency (Migrationsverket) e-service after receiving your admission. Pay the SEK 1,500 fee by card and specify the Swedish embassy you will visit."
  },
  {
    number: "7",
    title: "Receive Approval & Travel",
    text: "Once approved, prepare for your journey. If your studies last a year or more, register in the Swedish population register after arrival to access healthcare."
  }
];

export default function ExchangePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Top Banner / Header (Black & Electric Blue with Minor Red Badge) */}
      <header className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
            Guide 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
            How to Apply for a Sweden Study Visa in 2026 from Pakistan
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive step-by-step roadmap covering required documents, financial proof, processing timelines, and residence permit procedures.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Intro Section */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Sweden is becoming a top choice for Pakistani students who want high-quality international education in a safe, modern, and student-friendly environment. Known for its innovative teaching style and globally recognised universities, Sweden offers a wide range of English-taught programs, tuition-free PhD positions, and the chance to stay for up to 12 months post-graduation to look for employment.
          </p>

          {/* Minor Red Callout Box */}
          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">Key Requirement to Understand:</h4>
              <p className="text-slate-700 text-sm mt-1">
                Sweden does not issue a separate &ldquo;study visa&rdquo; for degree courses. For studies of more than three months, Pakistani students apply online to the <strong className="font-semibold text-slate-900">Swedish Migration Agency (Migrationsverket)</strong> for a residence permit for studies after receiving university admission.
              </p>
            </div>
          </div>

          {/* Table of Contents (Slate & Electric Blue) */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-semibold text-blue-600">
              <li>
                <a href="#requirements" className="hover:text-blue-700 hover:underline flex items-center gap-2">
                  <ChevronRight size={16} className="text-slate-500" /> 1. Requirements for Pakistani Students
                </a>
              </li>
              <li>
                <a href="#steps" className="hover:text-blue-700 hover:underline flex items-center gap-2">
                  <ChevronRight size={16} className="text-slate-500" /> 2. Step-by-Step Application Process
                </a>
              </li>
              <li>
                <a href="#fees" className="hover:text-blue-700 hover:underline flex items-center gap-2">
                  <ChevronRight size={16} className="text-slate-500" /> 3. Visa Fee &amp; Processing Time
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">
            To apply for a Swedish residence permit for studies, Pakistani students need the following documents:
          </p>

          <ul className="space-y-4">
            {requirementsData.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700">
                  <strong className="font-bold text-slate-900">{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-blue-500 transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-blue-400 font-bold text-sm shrink-0">
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
        <section id="fees" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-slate-200">
            Sweden Residence Permit Fee &amp; Processing Details
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-slate-900 text-white font-bold">
                  <th className="p-4 w-1/3 border-b border-slate-800">Item</th>
                  <th className="p-4 w-2/3 border-b border-slate-800">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm sm:text-base text-slate-700">
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50">Application Fees</td>
                  <td className="p-4">
                    The residence permit application fee is <strong className="font-bold text-slate-900">SEK 1,500 for adults</strong> (SEK 750 for children under 18), paid online by credit card. The university portal fee is <strong className="font-bold text-slate-900">SEK 900</strong> at universityadmissions.se.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50">Processing Time</td>
                  <td className="p-4">
                    The Swedish Migration Agency reports that complete online applications are generally processed within <strong className="font-bold text-slate-900">2 to 3 months</strong>.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50">Maintenance Funds (2026)</td>
                  <td className="p-4">
                    The required living expense proof is <strong className="font-bold text-slate-900">SEK 10,656 per month</strong> for each month of study in 2026.
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900 bg-slate-50">Dependents</td>
                  <td className="p-4">
                    Allowed. Family members need additional maintenance proof of <strong className="font-bold text-slate-900">SEK 4,440/month</strong> for a spouse and <strong className="font-bold text-slate-900">SEK 2,664/month</strong> per child.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA Contact Form (Black Card with Electric Blue Button and Minor Red Accent) */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-blue-600 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center mb-8 relative z-10">
            <span className="inline-block text-xs font-bold text-red-500 uppercase tracking-widest mb-2">
              Free Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">Need Help With Your Sweden Study Visa?</h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Get expert guidance on university applications, scholarship opportunities, financial documentation, and Migrationsverket residence permit filing.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto relative z-10">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm" 
              required 
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm" 
              required 
            />
            
            <select className="w-full px-4 py-3 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm">
              <option value="">Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button 
              type="submit" 
              className="sm:col-span-2 w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all hover:shadow-lg hover:shadow-blue-600/30 text-base flex items-center justify-center gap-2"
            >
              <PhoneCall size={18} /> Get Free Consultation
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}