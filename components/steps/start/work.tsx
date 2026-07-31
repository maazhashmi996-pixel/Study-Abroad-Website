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
    description: "Missing the university's final deadline for student registration.",
  },
  {
    title: "Not carrying physical originals",
    description: "Relying only on photocopies or digital screenshots at border check.",
  },
  {
    title: "Skipping orientation week",
    description: "Assuming classes are all that matter while missing vital visa compliance rules.",
  },
  {
    title: "Working before authorized",
    description: "Exceeding legal work limits or working before term start dates.",
  },
  {
    title: "Not updating the university on delays",
    description: "Failing to notify the university if your flight is delayed causes automated drop reports.",
  },
  {
    title: "No arrival night accommodation",
    description: "Arriving in a new country without guaranteed night-one housing.",
  },
];

export default function Work() {
  return (
    <main className="min-h-screen font-sans bg-slate-50">
      
      {/* SECTION 1: YELLOW/ORANGE PROCESS SECTION */}
      <section className="bg-[#e5a00d] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3a1b5c] tracking-tight">
              How This Step Works (Checklist & Process)
            </h2>
            <p className="text-[#3a1b5c]/90 text-xs sm:text-sm font-semibold max-w-xl mx-auto">
              Here is how the &quot;Start Your Program&quot; stage should be executed properly step-by-step
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-amber-200/50 flex flex-col justify-between space-y-3 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#3a1b5c] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-amber-600/80 bg-amber-50 px-2.5 py-1 rounded-md">
                        #{step.id}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner Notice */}
          <div className="bg-[#cca012] border border-amber-600/30 rounded-xl py-3.5 px-6 text-center text-xs sm:text-sm font-semibold text-slate-900 shadow-sm max-w-2xl mx-auto">
            That&apos;s it! At this point, you are no longer an applicant—you are officially an{" "}
            <strong className="underline decoration-2 underline-offset-2">International Student.</strong>
          </div>

        </div>
      </section>

      {/* SECTION 2: DARK PURPLE COMMON MISTAKES SECTION */}
      <section className="bg-[#3a1b5c] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Common Post-Visa Mistakes
            </h2>
            <p className="text-purple-200 text-xs sm:text-sm font-medium max-w-lg mx-auto">
              Avoid these frequent pitfalls students make immediately following visa approval
            </p>
          </div>

          {/* Mistakes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonMistakes.map((mistake, index) => (
              <div
                key={index}
                className="bg-[#2c1249] border border-purple-800/60 rounded-2xl p-5 text-center space-y-2 hover:border-purple-500/80 transition-all duration-200 flex flex-col justify-center shadow-sm"
              >
                <div className="flex justify-center mb-1">
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-amber-400 leading-snug">
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