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
  return (
    <div className="w-full bg-white font-sans text-gray-800">
      
      {/* 1. BENEFITS SECTION (Yellow Background) */}
      <section className="bg-[#f1b317] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3b1d5c] leading-tight">
              Benefits To Join Our Study Abroad Expo
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-[#3b1d5c]/80 mt-2">
              Tailored Services For Your Study Abroad Success
            </p>
          </div>

          {/* Cards Layout Grid */}
          <div className="space-y-4">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {benefits.slice(0, 3).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Centered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {benefits.slice(3, 5).map((item) => (
                <div
                  key={item.number}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-gray-300">
                    {item.number}
                  </span>
                  <div className="mt-3 sm:mt-4">
                    <h3 className="text-sm sm:text-base font-bold text-[#3b1d5c] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#3b1d5c] mb-8 sm:mb-12">
          Why Attend the Study Abroad Expo?
        </h2>

        {/* Top Part: Questions & Illustration Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center mb-10 sm:mb-16">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Struggling to plan your study abroad journey? You&apos;re not alone, we&apos;re here to guide you. Every year, thousands of students in Pakistan dream of studying abroad but face the same challenges:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left">
              {questions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {q}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE 1 */}
          <div className="relative h-[220px] sm:h-[280px] w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src="/images/events/Top-Study.jpg"
              alt="Top Study Abroad Guidance"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Part: Trusted Expo Info & Image Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center bg-gray-50/70 p-5 sm:p-8 rounded-2xl border border-gray-100">
          
          {/* IMAGE 2 */}
          <div className="relative h-[200px] sm:h-[260px] w-full rounded-xl overflow-hidden shadow-sm order-2 md:order-1">
            <Image
              src="/images/events/Provide.jpg"
              alt="Trusted Consultant Support"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Feature List */}
          <div className="space-y-4 order-1 md:order-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#3b1d5c]">
              Pakistan&apos;s Largest & Trusted Education Expo
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Established in 2004, Times Consultant brings together 1000+ partner universities from around the globe. Our Expo series in major cities across Pakistan gives you an opportunity to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-left">
              {expoFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPCOMING EVENTS BANNER (Yellow Background) */}
      <section className="bg-[#f1b317] py-8 sm:py-10 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-lg sm:text-2xl font-bold text-[#3b1d5c] leading-snug">
            Explore Our Upcoming Events: Your Guide to What&apos;s Next
          </h2>
          <button className="bg-[#3b1d5c] hover:bg-[#2a1443] text-white text-xs sm:text-sm font-bold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all active:scale-95 shadow-sm">
            View All Events
          </button>
        </div>
      </section>

    </div>
  );
}