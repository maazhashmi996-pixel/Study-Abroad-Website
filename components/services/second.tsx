"use client";

export default function Second() {
  const stats = [
    { number: "1,000+", label: "Partner Universities" },
    { number: "65+", label: "Countries" },
    { number: "3.4 M+", label: "Scholarships Secured" },
    { number: "1,000+", label: "Programs" },
  ];

  return (
    <section className=" text-slate-900 px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-14 border-y border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-lg hover:border-[#0b5cff]/40 transition-all"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0b5cff]">
              {stat.number}
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-bold text-slate-300 flex items-center gap-1.5 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}