import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  Calendar 
} from 'lucide-react';

export const metadata = {
  title: 'How to Apply for Sweden Study Visa in 2026 from Pakistan',
  description: 'Complete step-by-step guide on Sweden study visa requirements, fees, process, and timeline for Pakistani students.',
};

// Data structures for inline rendering
const requirementsData = [
  {
    title: "Valid Passport",
    text: "Your passport should remain valid throughout your intended stay in Sweden. You cannot be granted a permit for longer than your passport is valid."
  },
  {
    title: "University Admission Letter",
    text: "Official admission confirmation from a recognised Swedish university. You count as finally admitted only once any tuition fee has been paid."
  },
  {
    title: "Application Through universityadmissions.se",
    text: "Programme applications go through the official national portal universityadmissions.se (the Swedish-language version is antagning.se), run by the Swedish Council for Higher Education. A non-EU application fee of SEK 900 applies, and you can choose up to four programmes per round."
  },
  {
    title: "Proof of Funds",
    text: "Financial evidence showing you can cover tuition fees and living expenses in Sweden. Note: the bank statement must be issued no more than four months before your permit start date."
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
    text: "Research Swedish universities and select a degree program that matches your academic interests. The main intake is autumn, with applications usually open from mid-October to mid-January deadline."
  },
  {
    number: "2",
    title: "Apply through admissions.se",
    text: "Submit your university applications through the official national portal universityadmissions.se. You can apply to up to four programmes in a round, and a non-EU application fee of SEK 900 applies."
  },
  {
    number: "3",
    title: "Receive Admission Offer",
    text: "Once accepted, you'll receive your admission confirmation from the university."
  },
  {
    number: "4",
    title: "Apply for Scholarships",
    text: "Look for scholarships from your university and from the Swedish Institute. Coverage ranges from partial to full tuition, and some scholarships also support living costs."
  },
  {
    number: "5",
    title: "Arrange Financial Documents",
    text: "Prepare proof of funds, tuition payment receipts, and sponsorship documents if required. Make sure your bank statement is issued no more than four months before your permit start date."
  },
  {
    number: "6",
    title: "Apply for a Residence Permit",
    text: "Apply online through the Swedish Migration Agency (Migrationsverket) e-service after you are admitted and have paid any tuition. You pay the SEK 1,500 fee by card and state which Swedish embassy you will visit."
  },
  {
    number: "7",
    title: "Receive Approval & Travel",
    text: "Once approved, prepare for your journey to Sweden. If your studies last a year or more, register in the Swedish population register after arrival to access healthcare."
  }
];

const relatedBlogsData = [
  {
    country: "Malaysia",
    title: "How to Apply for a Malaysia Study Visa in 2026 from Pakistan",
    desc: "Malaysia is a top choice for Pakistani students because of its affordable tuition fees...",
    date: "June 15, 2026",
    link: "/malaysia"
  },
  {
    country: "South Korea",
    title: "How to Apply for South Korea Study Visa in 2026 from Pakistan",
    desc: "South Korea has become a preferred destination for Pakistani students in a very short time...",
    date: "August 4, 2026",
    link: "/south-korea"
  },
  {
    country: "Austria",
    title: "How to Apply for Austria Study Visa in 2026 from Pakistan",
    desc: "Austria is one of the most affordable options for students who want a respected European degree...",
    date: "July 17, 2026",
    link: "/austria"
  }
];

export default function Canada() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Header */}
      <header className="bg-indigo-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-amber-400 text-indigo-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Guide 2026
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

          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
            <h4 className="font-semibold text-amber-900 text-sm sm:text-base">One point to understand from the start:</h4>
            <p className="text-amber-800 text-sm mt-1">
              Sweden does not issue a separate &ldquo;study visa&rdquo; for longer courses. For studies of more than three months, Pakistani students apply online to the <strong className="font-semibold text-amber-950">Swedish Migration Agency (Migrationsverket)</strong> for a residence permit for studies, after being admitted to a Swedish university.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mt-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">In this guide:</h3>
            <ol className="space-y-2 text-sm sm:text-base font-medium text-indigo-700">
              <li><a href="#requirements" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 1. Requirements for Pakistani Students</a></li>
              <li><a href="#steps" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 2. Step-by-Step Application Process</a></li>
              <li><a href="#fees" className="hover:underline flex items-center gap-2"><ChevronRight size={16} /> 3. Visa Fee &amp; Processing Time</a></li>
            </ol>
          </div>
        </section>

        {/* Section 1: Requirements */}
        <section id="requirements" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 mb-6 pb-2 border-b border-slate-200">
            Requirements for Pakistani Students
          </h2>
          <p className="text-slate-600 mb-6">To apply for a Swedish study visa, Pakistani students need the following documents:</p>

          <ul className="space-y-4">
            {requirementsData.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-slate-700">
                  <strong className="font-semibold text-slate-900">{item.title}:</strong> {item.text}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 2: Step-by-step Process */}
        <section id="steps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 mb-6 pb-2 border-b border-slate-200">
            Step-by-Step Application Process
          </h2>

          <div className="space-y-6">
            {stepsData.map((step) => (
              <div key={step.number} className="flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-900 text-amber-400 font-bold text-sm shrink-0">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 mb-6 pb-2 border-b border-slate-200">
            Sweden Study Visa Fee &amp; Processing Time
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
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-indigo-800">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Need Help With Your Sweden Study Visa?</h2>
            <p className="text-indigo-200 text-sm sm:text-base">
              Get expert guidance on scholarship applications, financial documentation, and residence permit procedures.
            </p>
          </div>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-indigo-300 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" required />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-indigo-300 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" required />
            <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-indigo-300 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm" required />
            
            <select className="w-full px-4 py-3 rounded-xl bg-indigo-900 text-indigo-100 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm">
              <option value="">Preferred Study Level</option>
              <option value="bachelors">Bachelor&apos;s Degree</option>
              <option value="masters">Master&apos;s Degree</option>
              <option value="phd">PhD / Doctorate</option>
            </select>

            <button type="submit" className="sm:col-span-2 w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 text-base flex items-center justify-center gap-2">
              <PhoneCall size={18} /> Get Free Consultation
            </button>
          </form>
        </section>

        {/* Recent Blogs */}
        <section className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">Recent Blogs</span>
              <h3 className="text-2xl font-bold text-slate-900">Journeys of Discovery</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedBlogsData.map((blog, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="p-5">
                  <div className="bg-indigo-950 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">
                    {blog.country}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-indigo-600 transition-colors mb-2">
                    {blog.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 mb-4">{blog.desc}</p>
                </div>
                <Link href={blog.link} className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date}</span>
                  <span className="font-semibold text-indigo-600 group-hover:underline">Read More →</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}