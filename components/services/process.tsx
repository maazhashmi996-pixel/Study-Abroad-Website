"use client";

const process = [
  "Free Consultation",
  "Profile Evaluation",
  "University Selection",
  "Application Submission",
  "Offer Letter",
  "Visa Filing",
  "Departure",
];

export default function Process() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-orange-500 font-semibold uppercase text-xs sm:text-sm tracking-widest">
            Study Process
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#43246f] mt-2 sm:mt-4 tracking-tight">
            Your Journey Starts Here
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg sm:text-xl font-bold mb-4 sm:mb-6 shadow-md shrink-0">
                {index + 1}
              </div>

              <h3 className="font-semibold text-base sm:text-xl text-[#43246f]">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}