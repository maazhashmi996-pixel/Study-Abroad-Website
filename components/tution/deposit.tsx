import React from "react";

// Types
interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

interface CommonMistake {
  title: string;
  description: string;
}

// Data
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Read the offer letter carefully",
    description:
      'Find the section that says "Tuition Deposit," "Initial Fee," or "To secure your place..." It will mention the amount, deadline, and method.',
  },
  {
    id: 2,
    title: "Confirm your conditions are okay to proceed",
    description:
      "Some universities want you to pay after clearing academic/English conditions. Others want the deposit as part of the conditions. If you're not sure, ask.",
  },
  {
    id: 3,
    title: "Choose a payment method the university accepts",
    description:
      "Most universities accept international bank transfer, card via portal, or trusted platforms (like Flywire). Use only the method mentioned in the offer.",
  },
  {
    id: 4,
    title: "Make the payment within the deadline",
    description:
      "Always keep currency conversion + bank transfer time in mind. International payments can take 1-3 business days (sometimes more).",
  },
  {
    id: 5,
    title: "Keep proof of payment",
    description:
      "Save your bank slip / payment receipt / university portal confirmation. Name it properly and send/upload it to the university if they require proof.",
  },
  {
    id: 6,
    title: "Follow up for confirmation",
    description:
      "After payment, the university will confirm they received your deposit. That confirmation is often what triggers the next step (issuing your unconditional offer / CAS / CoE).",
  },
];

const commonMistakes: CommonMistake[] = [
  {
    title: "Paying to the wrong account or without reference number",
    description:
      "Universities receive many payments every day. If you don't include your application ID / student number, your payment can't be matched easily.",
  },
  {
    title: "Paying after the deadline",
    description:
      '"I paid but late" can still mean "we don\'t have seats anymore."',
  },
  {
    title: "Not sending proof of payment",
    description:
      "Some universities don't auto-track bank transfers. If you don't email/upload the receipt, they won't move you forward.",
  },
  {
    title: "Paying before clearing conditions (when the uni said don't)",
    description:
      "In some cases, you should clear academic/English first. Paying too early can create confusion.",
  },
  {
    title: "Using someone else's random account",
    description: "Very risky. Always pay via official university channels only.",
  },
];

export default function PayDeposit() {
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
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col space-y-3"
              >
                {/* Icon Placeholder */}
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5"
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

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Confirmation Tag */}
          <div className="flex justify-center">
            <div className="bg-[#cca012] border border-amber-600/30 rounded-lg py-2.5 px-6 text-center text-xs font-medium text-slate-900 inline-block">
              At the end of this step, the university knows:{" "}
              <span className="font-bold">&quot;This student is serious and coming.&quot;</span>
            </div>
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
              Students get stuck here because of simple issues
            </p>
          </div>

          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonMistakes.slice(0, 4).map((mistake, index) => (
              <div
                key={index}
                className="bg-[#2c1249] border border-purple-800/60 rounded-xl p-6 text-center space-y-2 hover:border-purple-600 transition-colors"
              >
                <h3 className="text-sm font-bold text-amber-400">
                  {mistake.title}
                </h3>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  {mistake.description}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Last Mistake Card */}
          {commonMistakes.length > 4 && (
            <div className="max-w-md mx-auto">
              <div className="bg-[#2c1249] border border-purple-800/60 rounded-xl p-6 text-center space-y-2 hover:border-purple-600 transition-colors">
                <h3 className="text-sm font-bold text-amber-400">
                  {commonMistakes[4].title}
                </h3>
                <p className="text-xs text-purple-200/80 leading-relaxed">
                  {commonMistakes[4].description}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}