import React from "react";

// Types
interface StepItem {
  id: number;
  title: string;
  description: string;
}

interface CommonMistake {
  title: string;
  description: string;
}

// Data
const processSteps: StepItem[] = [
  {
    id: 1,
    title: "Plan your travel date",
    description:
      "Ideally arrive a few days to 2 weeks before your classes start. Too early → could be questioned at immigration. Too late → you may miss enrollment.",
  },
  {
    id: 2,
    title: "Carry all original documents in hand luggage",
    description:
      "Passport, visa letter, university offer, CAS/CoE/LOA, fee receipt, accommodation letter, TB/medical (if applicable). Don't put these in checked baggage.",
  },
  {
    id: 3,
    title: "Clear immigration confidently",
    description:
      'Be ready to answer: "Where will you study?", "Where will you stay?", "How will you pay for living?", "When do classes start?"',
  },
  {
    id: 4,
    title: "Reach your accommodation and notify home",
    description:
      "Share location with family, keep university informed if they're expecting you.",
  },
  {
    id: 5,
    title: "Attend university registration / enrollment",
    description:
      'This is VERY important. If you don\'t enroll, the university can report you to immigration as "did not commence."',
  },
  {
    id: 6,
    title: "Attend orientation / induction week",
    description:
      "This is where you learn about attendance, part-time work rules, how to get student card, how to access library, and how to get help.",
  },
  {
    id: 7,
    title: "Set up local essentials",
    description: "SIM, bank account, transport card, student ID, emergency contacts.",
  },
  {
    id: 8,
    title: "Start classes and maintain attendance",
    description: "Low attendance = risk to your visa in many countries.",
  },
];

const commonMistakes: CommonMistake[] = [
  {
    title: "Traveling late",
    description: "and missing university's last date to enroll",
  },
  {
    title: "Not carrying originals",
    description: "(they only bring photocopies/WhatsApp screenshots)",
  },
  {
    title: "Ignoring orientation",
    description:
      '("I\'ll just start classes") bad idea, you miss immigration and academic rules',
  },
  {
    title: "Working before allowed",
    description: "or over allowed hours can affect visa status",
  },
  {
    title: "Not updating the university",
    description: "if delayed university assumes you didn't come",
  },
  {
    title: "No accommodation booked for arrival night",
    description: "creates stress on day 1",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen font-sans">
      {/* SECTION 1: YELLOW/ORANGE PROCESS SECTION */}
      <section className="bg-[#e5a00d] py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3a1b5c]">
              How this step works (checklist / process)
            </h2>
            <p className="text-[#3a1b5c]/90 text-sm font-medium">
              Here&apos;s how the &quot;Select Your Program&quot; stage should be done properly
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col space-y-3"
              >
                {/* Step Icon Placeholder */}
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
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

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Banner Notice */}
          <div className="bg-[#cca012] border border-amber-600/30 rounded-lg py-3 px-6 text-center text-xs font-semibold text-slate-900">
            That&apos;s it! At this point, you are no longer &quot;an applicant.&quot; You&apos;re an{" "}
            <span className="font-bold underline">International student.</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK PURPLE COMMON MISTAKES SECTION */}
      <section className="bg-[#3a1b5c] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Common mistakes
            </h2>
            <p className="text-purple-200 text-sm font-medium">
              Students often make these mistakes right after visa approval
            </p>
          </div>

          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className="bg-[#2c1249] border border-purple-800/60 rounded-xl p-6 text-center space-y-2 hover:border-purple-600 transition-colors"
              >
                <h3 className="text-base font-bold text-amber-400">
                  {mistake.title}
                </h3>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}