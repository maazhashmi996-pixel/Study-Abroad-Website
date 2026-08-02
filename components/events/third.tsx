"use client";

import Image from "next/image";
import { Check } from "lucide-react";

function Third() {
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
  return (
    <>
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
    </>
  )
}

export default Third
