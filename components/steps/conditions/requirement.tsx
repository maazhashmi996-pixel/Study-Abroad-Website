"use client";

import {
  FileText,
  FileCheck,
  Globe,
  IdCard,
  Wallet,
  Clock3,
} from "lucide-react";

const requirements = [
  {
    icon: FileText,
    title: "Your conditional offer letter in hand",
    desc: "You need to know exactly what the university is asking for. Each university lists specific conditions you must satisfy.",
  },
  {
    icon: FileCheck,
    title: "Access to your latest academic documents",
    desc: "Final semester marks, updated transcript, completion certificate, etc.",
  },
  {
    icon: Globe,
    title: "Your language test result or exam plan",
    desc: "If the offer requires IELTS / PTE / TOEFL score, you either need the score now or you must be ready to retake the test.",
  },
  {
    icon: IdCard,
    title: "Proof of identity and passport validity",
    desc: "Some universities want a clear passport scan before progressing your application.",
  },
  {
    icon: Wallet,
    title: "Financial readiness",
    desc: "Some schools (depending on country and programme) ask for proof of funds or the ability to pay a tuition deposit.",
  },
  {
    icon: Clock3,
    title: "Your timeline for intake",
    desc: "You must know how many weeks are left before visa filing deadlines.",
  },
];

export default function Requirements() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">

          {/* Section Header */}
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3B1E54] tracking-tight">
              What You Need Before Starting
            </h2>

            <p className="text-gray-600 text-sm sm:text-lg">
              To work on this stage properly, you must already have:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {requirements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-[#3B1E54]/30 hover:border-[#3B1E54] rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full bg-white"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F4EEFF] flex items-center justify-center text-[#3B1E54] mb-4 sm:mb-5 shrink-0">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#3B1E54] mb-2 sm:mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Banner Callout */}
          <div className="bg-[#F8F5FF] border border-[#E5D9F2] rounded-2xl p-6 sm:p-8 text-center space-y-3 shadow-sm">
            <p className="text-[#3B1E54] font-bold text-base sm:text-lg leading-snug">
              You must know how many weeks are left before visa filing deadlines.
            </p>

            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
              If you don't have these answers yet, you're not late. This is
              exactly{" "}
              <span className="font-semibold text-[#3B1E54]">
                what Times Consultant helps you define
              </span>{" "}
              during your first session.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}