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
      {/* 2. WHY ATTEND SECTION (Slate & White Background) */}
      <section className="bg-slate-50 border-y border-slate-200 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Title */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block bg-[#ef4444] text-white text-xs font-black px-4 py-1.5 uppercase tracking-widest mb-3">
              Event Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Why Attend the <span className="text-[#0b5cff]">Study Abroad Expo?</span>
            </h2>
          </div>

          {/* Top Part: Questions & Illustration Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-5 text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Struggling to plan your study abroad journey? You&apos;re not alone, we&apos;re here to guide you. Every year, thousands of students in Pakistan dream of studying abroad but face the same challenges:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                {questions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-3 border border-slate-200 shadow-sm">
                    <Check className="w-4 h-4 text-[#ef4444] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE 1 */}
            <div className="relative h-[240px] sm:h-[300px] w-full border-b-8 border-[#0b5cff] shadow-md overflow-hidden bg-black">
              <Image
                src="/images/events/Top-Study.jpg"
                alt="Top Study Abroad Guidance"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom Part: Trusted Expo Info & Image Space */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center bg-slate-900 text-white p-6 sm:p-10 border-t-8 border-[#ef4444] shadow-xl">
            
            {/* IMAGE 2 */}
            <div className="relative h-[220px] sm:h-[280px] w-full border-4 border-slate-800 overflow-hidden order-2 md:order-1 bg-black">
              <Image
                src="/images/events/Provide.jpg"
                alt="Trusted Consultant Support"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature List */}
            <div className="space-y-5 order-1 md:order-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                Pakistan&apos;s Largest & <span className="text-[#0b5cff]">Trusted</span> Education Expo
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Established in 2004, D. Education Zone brings together 1000+ partner universities from around the globe. Our Expo series in major cities across Pakistan gives you an opportunity to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                {expoFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-800/80 p-3 border border-slate-700">
                    <Check className="w-4 h-4 text-[#0b5cff] mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-200">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Third;