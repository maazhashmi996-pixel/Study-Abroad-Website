import React from "react";
import Image from "next/image";

interface RequirementCardProps {
  title: string;
  description: string;
}

const requirementItems: RequirementCardProps[] = [
  {
    title: "Your latest offer letter",
    description:
      "(conditional or now almost cleared). It should clearly mention the deposit amount and sometimes the deadline.",
  },
  {
    title: "Confirmation of conditions",
    description:
      'If your offer said "pay deposit after you send X documents," make sure those were already sent. Some universities don\'t want payment before conditions are cleared.',
  },
  {
    title: "The exact deposit amount + currency",
    description:
      "Some universities ask for a fixed amount (e.g. £2,000 / CAD 5,000 / AUD 5,000), others ask for a percentage of the first-year fee.",
  },
  {
    title: "Official payment instructions from the university",
    description:
      "(bank account, online payment portal, Flywire, Convera, etc.) Never pay to random numbers or emails.",
  },
  {
    title: "Ability to show proof of payment",
    description:
      "You will likely need a receipt or bank slip for the next step (unconditional offer / CAS / visa).",
  },
  {
    title: "Your intake timeline",
    description:
      "Because if you pay late, the university might process it late.",
  },
];

export default function PayTuition() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans pb-20">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        
        {/* SECTION 1: HERO & WHY THIS STEP MATTERS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Pay Tuition Deposit
            </h1>

            <h2 className="text-2xl font-semibold text-slate-700">
              Why this step matters
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Paying the tuition deposit is how you{" "}
              <span className="font-semibold text-slate-800">secure your seat</span> in the
              university. Up to this point, the university has said, &quot;We want you.&quot;
              But they will only <span className="font-semibold text-slate-800">reserve</span>{" "}
              your place once you pay the deposit they asked for in your offer letter.
            </p>

            <p className="text-slate-600 leading-relaxed">
              For many countries (UK, Australia, sometimes Canada and Europe), the tuition deposit
              is also connected to the next steps like getting a{" "}
              <span className="font-semibold text-slate-800">CAS / CoE / final acceptance</span>.
              If you don&apos;t pay on time, the university can:
            </p>

            {/* List of Consequences */}
            <ol className="list-decimal list-inside space-y-2 text-slate-700 font-medium pl-2">
              <li>Delay your unconditional offer,</li>
              <li>Delay your visa documents,</li>
              <li>Or give your place to someone else.</li>
            </ol>

            <p className="text-slate-600 font-medium pt-2">
              So this step is not just about money, it&apos;s about{" "}
              <span className="font-bold text-slate-900 underline">locking your intake</span>.
            </p>
          </div>

          {/* Right Column: Hero Illustration */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/steps/6-2.png" // Replace with your image asset path
                alt="6-2"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* STAR DIVIDER */}
        <div className="flex items-center justify-center">
          <div className="h-px bg-amber-400 w-full max-w-xl" />
          <span className="px-3 text-amber-500 font-bold text-xl">★</span>
          <div className="h-px bg-amber-400 w-full max-w-xl" />
        </div>

        {/* SECTION 2: WHAT YOU NEED BEFORE STARTING */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              What you need before starting
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Before you pay anything to the university, make sure you have:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Checklist Grid (2 Columns) */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirementItems.map((item, index) => (
                <div
                  key={index}
                  className="p-5 border border-slate-300 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-start space-y-2"
                >
                  {/* Icon Placeholder */}
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side Illustration */}
            <div className="flex justify-center items-center lg:sticky lg:top-8">
              <div className="relative w-full max-w-xs aspect-square">
                <Image
                  src="/images/steps/7-2.png" // Replace with your image asset path
                  alt="7-2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Callout Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-slate-700 space-y-1">
            <p>
              If any of this is unclear, pause. Times Consultant can verify the offer and payment
              instructions for you before you transfer money. Book a free consultation today!
            </p>
            <p className="text-slate-500 italic">
              If you don&apos;t have these answers yet, you&apos;re not late. This is exactly{" "}
              <span className="font-semibold text-slate-800">what Times Consultant helps</span> you
              define during your first session.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}