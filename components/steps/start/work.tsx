
"use client";

import React from "react";
import {
  Calendar,
  Briefcase,
  ShieldCheck,
  Home,
  GraduationCap,
  Users,
  Compass,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

// Types
interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
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
      "Ideally arrive a few days to 2 weeks before your classes start. Arriving too early may cause questioning at immigration; arriving too late risks missing enrollment.",
    icon: Calendar,
  },
  {
    id: 2,
    title: "Carry all original documents in hand luggage",
    description:
      "Passport, visa letter, university offer, CAS/CoE/LOA, fee receipt, accommodation confirmation, and TB/medical results. Never pack these in checked baggage.",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Clear immigration confidently",
    description:
      'Be prepared to answer: "Where will you study?", "Where will you stay?", "How will you cover living expenses?", and "When do classes start?"',
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Reach accommodation and notify family",
    description:
      "Share your location with family, and notify the university international team if they are expecting your arrival.",
    icon: Home,
  },
  {
    id: 5,
    title: "Attend university registration / enrollment",
    description:
      'Crucial step: failure to enroll on time may prompt the university to report your status to immigration as "did not commence."',
    icon: GraduationCap,
  },
  {
    id: 6,
    title: "Attend orientation / induction week",
    description:
      "Learn about mandatory attendance, part-time work limits, obtaining your student ID card, library access, and support services.",
    icon: Users,
  },
  {
    id: 7,
    title: "Set up local essentials",
    description:
      "Acquire a local SIM card, open a student bank account, set up a transit pass, and register emergency contact details.",
    icon: Compass,
  },
  {
    id: 8,
    title: "Start classes and maintain attendance",
    description:
      "Maintain active class attendance. Dropping below required attendance thresholds poses a direct risk to your student visa validity.",
    icon: CheckCircle,
  },
];

const commonMistakes: CommonMistake[] = [
  {
    title: "Traveling too late",
    description:
      "Missing the university's final deadline for student registration.",
  },
  {
    title: "Not carrying physical originals",
    description:
      "Relying only on photocopies or digital screenshots at border check.",
  },
  {
    title: "Skipping orientation week",
    description:
      "Assuming classes are all that matter while missing vital visa compliance rules.",
  },
  {
    title: "Working before authorized",
    description:
      "Exceeding legal work limits or working before term start dates.",
  },
  {
    title: "Not updating the university on delays",
    description:
      "Failing to notify the university if your flight is delayed causes automated drop reports.",
  },
  {
    title: "No arrival night accommodation",
    description:
      "Arriving in a new country without guaranteed night-one housing.",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen font-sans bg-white text-slate-900">

      {/* =====================================================
          SECTION 1: PROCESS / CHECKLIST
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">

        {/* Subtle Background Decorations */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#2563EB]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#2563EB]/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-8 sm:space-y-10">

          {/* Section Header */}
          <div className="text-center space-y-2">

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              Step-by-Step Guide
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              How This Step Works
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-xl mx-auto leading-relaxed">
              Here is how the &quot;Start Your Program&quot; stage should be
              executed properly, step-by-step.
            </p>

          </div>


          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    p-5
                    border border-slate-200
                    shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                    hover:border-[#2563EB]/30
                    hover:shadow-[0_8px_25px_rgba(37,99,235,0.08)]
                    hover:-translate-y-1
                    transition-all duration-300
                    flex flex-col justify-between
                  "
                >

                  <div className="space-y-4">

                    {/* Icon + Number */}
                    <div className="flex items-center justify-between">

                      <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">

                        <Icon className="w-5 h-5" />

                      </div>

                      <span className="text-[10px] font-extrabold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-lg">
                        STEP {String(step.id).padStart(2, "0")}
                      </span>

                    </div>


                    {/* Content */}
                    <div className="space-y-2">

                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {step.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {step.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          {/* Banner Notice */}
          <div className="relative overflow-hidden max-w-3xl mx-auto rounded-2xl border border-[#2563EB]/15 bg-white shadow-sm">

            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB]" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-5 py-4 text-center">

              <CheckCircle className="w-5 h-5 text-[#2563EB] shrink-0" />

              <p className="text-xs sm:text-sm font-semibold text-slate-700">

                That&apos;s it! At this point, you are no longer an applicant—
                you are officially an{" "}

                <strong className="text-[#2563EB]">
                  International Student.
                </strong>

              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2: COMMON MISTAKES
      ====================================================== */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">

          {/* Section Header */}
          <div className="text-center space-y-2">

            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EF4444]/10 text-[#EF4444] text-[10px] sm:text-xs font-bold uppercase tracking-wider">

              <AlertTriangle className="w-3.5 h-3.5" />

              Important

            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Common Post-Visa Mistakes
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm font-medium max-w-lg mx-auto leading-relaxed">
              Avoid these frequent pitfalls students make immediately
              following visa approval.
            </p>

          </div>


          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {commonMistakes.map((mistake, index) => (

              <div
                key={index}
                className="
                  group
                  bg-slate-50
                  border border-slate-200
                  rounded-2xl
                  p-5
                  text-left
                  space-y-3
                  hover:bg-white
                  hover:border-[#EF4444]/25
                  hover:shadow-[0_8px_25px_rgba(239,68,68,0.06)]
                  hover:-translate-y-0.5
                  transition-all duration-300
                  flex flex-col justify-center
                "
              >

                {/* Icon + Number */}
                <div className="flex items-center justify-between">

                  <div className="w-9 h-9 rounded-xl bg-[#EF4444]/10 flex items-center justify-center">

                    <AlertTriangle className="w-4 h-4 text-[#EF4444]" />

                  </div>

                  <span className="text-[10px] font-bold text-slate-300">
                    0{index + 1}
                  </span>

                </div>


                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                  {mistake.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {mistake.description}
                </p>

              </div>

            ))}

          </div>


          {/* Bottom Reminder */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500">

            <AlertTriangle className="w-4 h-4 text-[#EF4444]" />

            <span>
              Plan carefully and stay informed throughout your arrival process.
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPTIONAL CTA
      ====================================================== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">

        <div className="max-w-4xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl bg-[#2563EB] px-6 sm:px-10 py-8 sm:py-10 text-center">

            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-16 w-44 h-44 rounded-full bg-white/10" />

            <div className="relative space-y-4">

              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Ready to Start Your Program?
              </h3>

              <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto leading-relaxed">
                D.Education Zone can help you prepare for your journey and
                make your transition to your study destination smoother.
              </p>

              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-white
                  text-[#2563EB]
                  hover:bg-slate-100
                  px-5
                  py-2.5
                  rounded-xl
                  text-xs sm:text-sm
                  font-bold
                  shadow-sm
                  transition-all
                  active:scale-95
                "
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

