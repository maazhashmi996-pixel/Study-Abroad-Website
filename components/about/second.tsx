"use client";

export default function Second() {
  const stats = [
    { number: "1,000+", label: "Partner Universities" },
    { number: "65+", label: "Countries" },
    { number: "3.4 M+", label: "Scholarships Secured" },
    { number: "1,000+", label: "Programs" },
  ];

  return (
    <section className="bg-[#1a233d]  w-full text-white px-4 sm:px-8 md:px-12 lg:px-14 py-8 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-red-500">
              {stat.number}
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-200">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}