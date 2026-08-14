"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  FaGlobe, 
  FaGraduationCap, 
  FaLanguage, 
  FaBriefcase, 
  FaUserGraduate, 
  FaComments, 
  FaCheckCircle, 
  FaChevronDown,
  FaPhoneAlt,
  FaQuestionCircle
} from "react-icons/fa";

const openWhatsApp = (
  phoneNumber: string = "923452066100",
  message: string = "Hello! I need guidance for study abroad destinations."
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function StudySecond() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What are the top study abroad destinations for international students?",
      a: "Top destinations include Germany, UK, USA, Australia, Canada, Hungary, and Austria due to high-quality education, post-study work visas, and scholarship opportunities."
    },
    {
      q: "How do I choose the best country for studying abroad?",
      a: "Consider factors like your budget, course language, post-study work policies, PR opportunities, and lifestyle preferences."
    },
    {
      q: "What are the benefits of studying abroad?",
      a: "Studying abroad offers global exposure, access to world-class universities, enhanced career prospects, and personal development."
    },
    {
      q: "How can I find scholarships for studying abroad?",
      a: "You can apply for government scholarships (like Stipendium Hungaricum, MEXT, Chevening), university merit-based awards, or regional grants."
    },
    {
      q: "What makes your destination consultancy different?",
      a: "We offer end-to-end support—from university selection, documentation, and visa guidance to pre-departure briefing and post-arrival assistance."
    }
  ];

  return (
    <div className=" text-slate-800 min-h-screen space-y-20 py-16 px-4 sm:px-8 lg:px-12">
      
      {/* SECTION 1: Helping You Choose A Top Study Destination */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#0b5cff]/20 text-[#0b5cff] border border-[#0b5cff]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Expert Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-800">
            Helping You Choose A <span className="text-[#0b5cff]">Top Study Destination</span>
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Studying abroad provides numerous opportunities that can significantly benefit your personal and professional growth. We help you select the best study destination for yourself while keeping key factors in consideration.
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 hover:border-[#0b5cff] transition-all">
              <FaGlobe className="text-2xl text-[#0b5cff] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-white text-sm uppercase">Global Perspective</h4>
                <p className="text-xs text-slate-400 mt-1">Gain a broader understanding of global industries, cross-cultural teamwork, and international networks.</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 hover:border-[#0b5cff] transition-all">
              <FaGraduationCap className="text-2xl text-[#0b5cff] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-white text-sm uppercase">High-Quality Education</h4>
                <p className="text-xs text-slate-400 mt-1">Access world-famous institutions, research facilities, and practical industry-oriented curriculum.</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-start gap-4 hover:border-[#0b5cff] transition-all">
              <FaLanguage className="text-2xl text-[#0b5cff] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-white text-sm uppercase">Language Skills</h4>
                <p className="text-xs text-slate-400 mt-1">Improve your language skills by immersing yourself in a new language environment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE PLACEHOLDER 1 */}
        <div className="relative h-96 w-full bg-slate-900 border-2 border-dashed border-slate-800 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
          <FaGraduationCap className="text-6xl text-slate-800 group-hover:text-[#0b5cff] transition-colors mb-3" />
          <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">
            [ Image Placeholder 1 ]
          </span>
          <span className="text-slate-600 text-xs mt-1">Insert Destination Overview Illustration / Graphic</span>
          Real Image tag (Uncomment and set src when image is ready):
          <Image src="/images/study-dest/helping.jpg" alt="Destination Banner" fill className="object-cover" />
         
        </div>
      </section>

      {/* SECTION 2: Benefits & Opportunities (Reverse Layout) */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE PLACEHOLDER 2 */}
        <div className="order-2 lg:order-1 relative h-96 w-full bg-slate-900 border-2 border-dashed border-slate-800 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
          <FaBriefcase className="text-6xl text-slate-800 group-hover:text-[#ef4444] transition-colors mb-3" />
          <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">
          <Image src="/images/study-dest/unlock.jpg" alt="Destination Banner" fill className="object-cover" />
          </span>
          <span className="text-slate-600 text-xs mt-1">Insert Career & Growth Graphic</span>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-800">
            Unlock Career & <span className="text-[#ef4444]">Personal Growth</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-[#ef4444] transition-all">
              <h4 className="font-black text-white text-base uppercase flex items-center gap-2">
                <FaBriefcase className="text-[#ef4444]" /> Career Opportunities
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Enhance your employability with international experience, making you a competitive candidate for global companies and multi-nationals.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-[#ef4444] transition-all">
              <h4 className="font-black text-white text-base uppercase flex items-center gap-2">
                <FaUserGraduate className="text-[#ef4444]" /> Personal Growth
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Develop greater independence, adaptability, and self-confidence as you navigate life in a foreign country.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl hover:border-[#ef4444] transition-all">
              <h4 className="font-black text-white text-base uppercase flex items-center gap-2">
                <FaGlobe className="text-[#ef4444]" /> Cultural Enrichment
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Immerse yourself in new cultures, traditions, and mindsets, broadening your global worldview.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp("923452066100", "Hi Education Zone, I want to book a call for study abroad counseling.")}
            className="bg-[#0b5cff] hover:bg-[#ef4444] text-white font-black px-8 py-4 rounded-xl uppercase text-xs tracking-wider transition-colors shadow-lg"
          >
            Book A Free Call
          </button>
        </div>
      </section>

      {/* SECTION 3: What We Provide For Study Abroad Services */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 max-w-7xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
            What We Provide For <span className="text-[#0b5cff]">Study Abroad Services</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Comprehensive end-to-end guidance tailored specifically for international students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-[#0b5cff] transition-all">
            <FaCheckCircle className="text-3xl text-[#0b5cff] mb-4" />
            <h4 className="font-black text-white text-sm uppercase mb-2">Program Counseling</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Assistance in selecting the right program and university based on your academic background.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-[#0b5cff] transition-all">
            <FaCheckCircle className="text-3xl text-[#0b5cff] mb-4" />
            <h4 className="font-black text-white text-sm uppercase mb-2">Application Process</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Step-by-step guidance through the application process including document preparation.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-[#0b5cff] transition-all">
            <FaCheckCircle className="text-3xl text-[#0b5cff] mb-4" />
            <h4 className="font-black text-white text-sm uppercase mb-2">Visa Guidance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Expert support in preparing your student visa file, appointment booking, and interview preparation.</p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-[#0b5cff] transition-all">
            <FaCheckCircle className="text-3xl text-[#0b5cff] mb-4" />
            <h4 className="font-black text-white text-sm uppercase mb-2">24/7 Consultation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Continuous support to address any questions, doubts, or emergencies throughout your process.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Key Factors To Consider */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* IMAGE PLACEHOLDER 3 */}
        <div className="relative h-96 w-full bg-slate-900 border-2 border-dashed border-slate-800 rounded-3xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
          <FaComments className="text-6xl text-slate-800 group-hover:text-[#0b5cff] transition-colors mb-3" />
          <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">
          <Image src="/images/study-dest/key.jpg" alt="Destination Banner" fill className="object-cover" />
          </span>
          <span className="text-slate-600 text-xs mt-1">Insert Expert Guidance / Student Image</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-800">
            Key Factors To Consider <span className="text-[#0b5cff]">While Choosing</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-white text-sm uppercase text-[#0b5cff]">1. University Reputation</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Evaluate universities based on rankings, faculty expertise, accreditation, and research facilities.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-white text-sm uppercase text-[#0b5cff]">2. Tuition Fees & Living Expenses</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Calculate total costs including tuition fees, accommodation, food, travel, and available scholarships.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <h4 className="font-black text-white text-sm uppercase text-[#0b5cff]">3. Post-Study Work Options</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Check post-study work permits, internship options, and job opportunities available after graduation.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp("923452066100", "Hi Education Zone, I want to talk to an expert about study abroad factors.")}
            className="bg-[#ef4444] hover:bg-[#0b5cff] text-white font-black px-8 py-4 rounded-xl uppercase text-xs tracking-wider transition-colors shadow-lg"
          >
            Talk To An Expert
          </button>
        </div>
      </section>

      {/* SECTION 5: FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto pt-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#ef4444]/20 text-[#ef4444] border border-[#ef4444]/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FaQuestionCircle /> Got Questions?
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-800">
            Can't Talk? Don't Worry, We Have Got <span className="text-[#0b5cff]">All The Answers</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-850 font-bold text-sm text-white transition-colors"
              >
                <span>{faq.q}</span>
                <FaChevronDown
                  className={`text-[#0b5cff] transition-transform duration-300 ${
                    openFaq === index ? "rotate-180 text-[#ef4444]" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="p-5 pt-0 text-xs text-slate-400 border-t border-slate-800/60 leading-relaxed bg-slate-950/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}