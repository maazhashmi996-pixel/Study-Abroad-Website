"use client";

import Image from "next/image";
import { Check } from "lucide-react";

// Top 5 Benefits Cards Data
const benefits = [
  {
    number: "01",
    title: "Meet 100+ International Universities",
    description: "Direct interaction with official university representatives.",
  },
  {
    number: "02",
    title: "Instant Eligibility Assessment",
    description: "Get on-spot evaluation of your profile, academics, and documents.",
  },
  {
    number: "03",
    title: "Exclusive Scholarships & Application Fee Waivers",
    description: "Special offers only available to expo attendees.",
  },
  {
    number: "04",
    title: "Fast-Track Admission Guidance",
    description: "Secure quick admissions for upcoming intakes with Times expert counsellors.",
  },
  {
    number: "05",
    title: "Personalized Counselling With Country Specialists",
    description: "Get tailored advice for UK, USA, Australia, Canada, Europe, and more.",
  },
];

// Why Attend Questions List
const questions = [
  "Which country should I choose?",
  "What documents do I need?",
  "Who can give me trusted advice, not just sales talk?",
  "How much will it really cost?",
  "Is my profile strong enough to get admission or a visa?",
];

// Trusted Expo Features List
const expoFeatures = [
  "Speak directly with university officials",
  "Get help with scholarships, visas, and finances",
  "Learn exactly what it takes to get admitted",
  "Get to know all the study levels",
];

export default function ExpoBenefits() {
  // Option 1: Agar aapke paas Image hai toh yahan Path add karein (e.g., "/images/events/students.jpg")
  const mainIllustrationSrc = ""; 
  const counselorBadgeSrc = ""; 

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* 1. BENEFITS SECTION (Yellow Background) */}
      <section className="bg-[#f1b317] py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3b1d5c]">
              Benefits To Join Our Study Abroad Expo
            </h2>
            <p className="text-xs md:text-sm font-semibold text-[#3b1d5c]/80 mt-1">
              Tailored Services For Your Study Abroad Success
            </p>
          </div>

          {/* Cards Layout Grid */}
          <div className="space-y-4">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.slice(0, 3).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Centered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {benefits.slice(3, 5).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-4">
                    <h3 className="text-sm font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY ATTEND SECTION (White Background) */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#3b1d5c] mb-10">
          Why Attend the Study Abroad Expo?
        </h2>

        {/* Top Part: Questions & Illustration Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              Struggling to plan your study abroad journey? You&apos;re not alone, we&apos;re here to guide you. Every year, thousands of students in Pakistan dream of studying abroad but face the same challenges:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {questions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-[11px] font-medium text-gray-700">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE 1 PLACEHOLDER (Students sitting at desk illustration) */}
          <div className="relative min-h-[220px] w-full rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden">
          
              <Image
                src="/images/events/Top-Study.jpg"
                alt="Top-Study"
                fill
                className="object-cover rounded-2xl"
              />
           
               
          </div>
        </div>

        {/* Bottom Part: Trusted Expo Info & Image Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
          
          {/* IMAGE 2 PLACEHOLDER (Counselor / Laptop Graphic) */}
          <div className="relative min-h-[200px] w-full rounded-xl border-2 border-dashed border-gray-300 bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/events/Provide.jpg"
                alt="Provide"
                fill
                className="object-cover rounded-xl"
              />
           
             
            
          </div>

          {/* Feature List */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-[#3b1d5c]">
              Pakistan&apos;s Largest & Trusted Education Expo
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Established in 2004, Times Consultant brings together 1000+ partner universities from around the globe. Our Expo series in major cities across Pakistan gives you an opportunity to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {expoFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-[11px] font-medium text-gray-700">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS BANNER (Yellow Background) */}
      <section className="bg-[#f1b317] py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#3b1d5c]">
            Explore Our Upcoming Events: Your Guide to What&apos;s Next
          </h2>
          <button className="bg-[#3b1d5c] hover:bg-[#2a1443] text-white text-xs font-bold px-6 py-2.5 rounded-md transition-colors">
            View All Events
          </button>
        </div>
      </section>

    </div>
  );
}