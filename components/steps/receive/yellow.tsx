
"use client";

import { HelpCircle } from "lucide-react";

function Red() {
  // Process Steps
  const processSteps = [
    {
      title: "University reviews your file",
      desc: "The admissions team checks your transcripts, SOP, and eligibility against their entry criteria.",
    },
    {
      title: "Decision issued: Conditional or Unconditional",
      desc: "Most initial responses are conditional offers outlining the exact requirements you must meet.",
    },
    {
      title: "Review terms and conditions",
      desc: "Carefully read tuition fees, deposit deadlines, refund policies, and course start dates.",
    },
    {
      title: "Accept the offer letter",
      desc: "Confirm your place by accepting the offer formally through the student portal or email.",
    },
    {
      title: "Prepare to fulfill conditions",
      desc: "Gather final transcripts, English test results, or financial proofs required for the next stage.",
    },
    {
      title: "Keep track of response deadlines",
      desc: "Failing to accept or respond on time can lead to the university cancelling your offer.",
    },
  ];

  return (
    <>
      {/* ================= HOW THIS STEP WORKS ================= */}
      <section className=" text-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Section Heading */}
          <div className="text-center space-y-2">

            <span className="inline-block text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider">
              Step 3 • Offer Letter
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800">
              How This Step Works
            </h2>

            <p className="text-xs sm:text-sm font-medium text-blue-700">
              Understand what happens after receiving your initial offer
            </p>

          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="
                  group
                  bg-white
                  rounded-2xl
                  p-5 sm:p-6
                  shadow-md
                  flex flex-col
                  justify-between
                  border border-slate-200
                  space-y-4
                  hover:-translate-y-1
                  hover:border-red-400
                  transition-all
                  duration-300
                "
              >

                <div className="space-y-3">

                  {/* Step Icon + Number */}
                  <div className="flex items-center justify-between">

                    <div
                      className="
                        w-10 h-10
                        rounded-xl
                        bg-red-50
                        text-[#DC2626]
                        flex items-center justify-center
                        shrink-0
                        group-hover:bg-red-600
                        group-hover:text-white
                        transition-colors
                        duration-300
                      "
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-extrabold text-slate-400">
                      0{idx + 1}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="space-y-1.5">

                    <h3 className="font-bold text-sm sm:text-base text-slate-800 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Bottom Information */}
          <div className="max-w-3xl mx-auto">

            <div
              className="
                bg-slate-900
                border border-slate-700
                rounded-xl
                p-4
                text-center
                shadow-md
              "
            >

              <div className="flex items-start justify-center gap-2">

                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0"></span>

                <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-relaxed">
                  Once you review and accept your conditional offer, your next
                  objective is clearing all specified conditions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Red;

