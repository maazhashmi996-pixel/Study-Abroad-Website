"use client";

import Image from "next/image";

// Top 5 Benefits Cards Data
const benefits = [
  {
    number: "01",
    title: "Meet 100+ Top Global Universities",
    description: "Direct interaction with official university representatives and admission officers.",
  },
  {
    number: "02",
    title: "Instant Profile & Eligibility Assessment",
    description: "Get on-spot evaluation of your academic credentials and visa profile.",
  },
  {
    number: "03",
    title: "Exclusive Scholarships & Fee Waivers",
    description: "Access merit scholarships and application fee waivers exclusive to event attendees.",
  },
  {
    number: "04",
    title: "Fast-Track Application Guidance",
    description: "Secure quick offers for upcoming intakes with D. Education Zone's senior advisors.",
  },
  {
    number: "05",
    title: "Expert Visa & Country Specialist Counseling",
    description: "Tailored advice for top destinations including UK, USA, Australia, Canada, and Europe.",
  },
];

export default function ExpoBenefits() {
  return (
    <div className="w-full bg-slate-950 font-sans text-slate-100 border-t border-slate-900">
      
      {/* BENEFITS SECTION */}
      <section className="bg-black py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0b5cff] bg-slate-900 px-4 py-1.5 rounded-full inline-block mb-3 border border-slate-800">
              Why Attend <span className="text-red-500">•</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              Benefits of Joining D. Education Zone Expo
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-medium text-slate-400 mt-2 max-w-xl mx-auto">
              Tailored services and expert guidance designed to accelerate your study abroad success.
            </p>
          </div>

          {/* Cards Layout Grid */}
          <div className="space-y-6">
            {/* Top Row - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((item) => (
                <div
                  key={item.number}
                  className="bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 flex flex-col justify-between hover:-translate-y-1 hover:border-[#0b5cff]/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-slate-700 group-hover:text-[#0b5cff] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-8 h-1 bg-red-500 rounded-full" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#0b5cff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Centered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.slice(3, 5).map((item) => (
                <div
                  key={item.number}
                  className="bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 flex flex-col justify-between hover:-translate-y-1 hover:border-[#0b5cff]/50 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-black text-slate-700 group-hover:text-[#0b5cff] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-8 h-1 bg-red-500 rounded-full" />
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#0b5cff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}