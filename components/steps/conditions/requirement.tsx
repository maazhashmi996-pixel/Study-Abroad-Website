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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#3B1E54] mb-3">
            What You Need Before Starting
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            To work on this stage properly, you must already have:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-[#3B1E54] rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F4EEFF] flex items-center justify-center text-[#3B1E54] mb-5">
                    <Icon size={34} />
                  </div>

                  <h3 className="text-xl font-bold text-[#3B1E54] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-[#F8F5FF] border border-[#E5D9F2] rounded-xl p-8 text-center">
            <p className="text-[#3B1E54] font-bold text-lg">
              You must know how many weeks are left before visa filing deadlines.
            </p>

            <p className="text-gray-600 mt-4 leading-7">
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