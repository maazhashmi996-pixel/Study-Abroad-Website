import React from "react";
import Image from "next/image";

interface ChecklistCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

const checklistItems: ChecklistCardProps[] = [
  {
    title: "Valid student visa / study permit approval letter",
  },
  {
    title: "University acceptance / CAS / CoE / LOA printout",
  },
  {
    title: "Tuition payment proof / receipt",
    subtitle: "(some universities ask at enrollment)",
  },
  {
    title: "Accommodation address",
    subtitle: "(even temporary)",
  },
  {
    title: "Airport pickup / arrival plan",
    subtitle: "(especially if you're landing late or first time traveler)",
  },
  {
    title: "Emergency & university contact numbers",
  },
  {
    title: "Travel Insurance / health cover",
    subtitle: "(OSHC for Australia, NHS access for UK, or what your university recommends)",
  },
  {
    title: "Enough funds for first month",
    subtitle: "(in cash + card)",
  },
  {
    title: "Times Consultant pre-departure checklist",
    subtitle: "(so you don't forget anything)",
  },
];

export default function ProgrammePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* SECTION 1: HERO & INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Start Your Program
            </h1>
            
            <h2 className="text-2xl font-semibold text-slate-700">
              Why this step matters
            </h2>

            <p className="text-slate-600 leading-relaxed">
              You&apos;ve done all the hard work, picked the right course, got the offer, paid
              the deposit, cleared conditions, and secured your visa.{" "}
              <span className="font-semibold text-slate-800">
                Now comes the real goal of the whole journey:
              </span>{" "}
              actually reaching your study destination and starting classes on time.
            </p>

            <p className="text-slate-600 leading-relaxed">
              This step is important because this is where many students make small
              post-visa mistakes that cause big problems, like:
            </p>

            {/* Bullet List */}
            <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium pl-2">
              <li>Arriving late and missing enrollment.</li>
              <li>Not carrying original documents at the airport.</li>
              <li>Not attending mandatory orientation.</li>
              <li>Breaking visa/work rules in the first month.</li>
            </ol>

            <div className="pt-4 space-y-2">
              <p className="font-semibold text-slate-800">Starting right means:</p>
              <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-2">
                <li>You enter the country smoothly.</li>
                <li>You enroll at the university on time.</li>
                <li>You keep your visa status active.</li>
                <li>You settle easily (accommodation, bank, SIM, transport).</li>
              </ol>
            </div>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/images/steps/9-1.png" // Replace with your image path
                alt="9-1"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* SECTION 2: WHAT YOU NEED BEFORE STARTING */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              What you need before starting
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Before you fly, make sure you already have:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Checklist Grid (2 Columns inside grid wrapper) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {checklistItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 border border-slate-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start space-y-2"
                >
                  {/* Placeholder SVG Icon */}
                  <div className="w-8 h-8 text-indigo-600">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm leading-snug">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-slate-500">{item.subtitle}</p>
                  )}
                </div>
              ))}

              {/* Consultation / Help Box */}
              <div className="p-5 border border-indigo-200 rounded-xl bg-indigo-50/50 flex flex-col justify-center space-y-2">
                <p className="text-xs text-slate-600">
                  If any of this is missing, fix it before you travel. Need help?
                  Book a free consultation today!
                </p>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="flex justify-center items-center lg:sticky lg:top-8">
              <div className="relative w-full max-w-sm aspect-square">
                <Image
                  src="/images/steps/8.png" // Replace with your image path
                  alt="8"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-500 pt-4">
            If you don&apos;t have these answers yet, you&apos;re not late. This is exactly{" "}
            <span className="font-semibold text-slate-700">
              what Times Consultant helps
            </span>{" "}
            you define during your first session.
          </p>
        </section>

      </div>
    </main>
  );
}