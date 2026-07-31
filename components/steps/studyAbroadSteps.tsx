import React from 'react';
import Image from 'next/image';

export default function StudyAbroadSteps() {
  const stepsList = [
    'Select Your Program',
    'Submit Application',
    'Receive Offer Letter',
    'Fulfill Conditions',
    'Pay Tuition Deposit',
    'Get Unconditional Offer',
    'Apply for Visa',
    'Start Your Program',
  ];

  const whyStepsCards = [
    {
      text: "University can't issue an offer if you don't apply.",
    },
    {
      text: "University won't make it unconditional if you don't clear conditions.",
    },
    {
      text: "University won't make it unconditional if you don't clear conditions.",
    },
    {
      text: "The Embassy won't issue a visa if you don't have final admission.",
    },
  ];

  return (
    <div className="w-full bg-white text-gray-800 font-sans">
      
      {/* ---------------- SECTION 1: HERO & STEPS LIST ---------------- */}
      <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Column: Heading & Ordered Steps */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2a1747] leading-tight mb-4">
            Study Abroad Steps: From Course Selection to Your First Class
          </h1>
          
          <p className="text-sm text-gray-600 mb-6">
            Studying abroad is not one form or one email, it's a <strong className="text-gray-900">sequence</strong>.<br />
            Every successful student basically follows these 8 stages:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-sm text-blue-600 font-semibold mb-6">
            {stepsList.map((step, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <p className="text-xs text-gray-500 italic">
            Miss one step or do it late and you can lose the intake.
          </p>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-square">
            <Image
              src="/images/steps/selection.jpg" // Apni image Path yahan lagayein
              alt="selction"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-amber-400 my-4 text-center relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-amber-500 text-xs">★</span>
      </div>

      {/* ---------------- SECTION 2: WHY FOLLOW STEPS ---------------- */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2a1747]">
            Why follow the steps in order?
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Because universities and embassies follow a process.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* 2x2 Grid Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyStepsCards.map((card, idx) => (
              <div
                key={idx}
                className="border border-purple-900/30 rounded-lg p-5 bg-white shadow-sm flex items-start gap-4 hover:border-purple-600 transition"
              >
                <div className="text-purple-900 text-2xl font-bold">↳</div>
                <p className="text-xs font-semibold text-gray-800 leading-snug">
                  {card.text}
                </p>
              </div>
            ))}

            {/* Bottom Full-width Note Box inside Grid */}
            <div className="md:col-span-2 border border-purple-900/30 rounded-lg p-4 bg-gray-50 text-center">
              <p className="text-xs text-gray-700">
                So the safest way (and the one we use at Times Consultant) is{' '}
                <span className="font-semibold text-purple-900">1 → 2 → 3 → 4 → 5 → 6 → 7 → 8</span>, no skipping.
              </p>
            </div>
          </div>

          {/* Right Direction Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-full max-w-[250px] aspect-square">
              <Image
                src="/images/steps/Why-follow.jpg" // Apni image Path yahan lagayein
                alt="follow"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          If you don't have these answers yet, you're not late. This is exactly{' '}
          <strong className="text-gray-900">what Times Consultant helps</strong> you define during your first session.
        </p>
      </section>

      {/* ---------------- SECTION 3: BANNER ---------------- */}
      <section className="bg-[#f5a623] py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2a1747] text-center md:text-left">
            The 8 Study Abroad Steps
          </h2>

          {/* Feature Card Preview */}
          <div className="bg-white rounded-lg p-5 max-w-xs w-full shadow-md border-l-4 border-purple-900">
            <h3 className="font-bold text-sm text-[#2a1747] mb-1">Select Your Program</h3>
            <p className="text-[11px] text-gray-600 leading-tight">
              This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}