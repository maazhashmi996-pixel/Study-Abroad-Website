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
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold uppercase">
            Study Process
          </span>

          <h2 className="text-5xl font-bold text-[#43246f] mt-4">
            Your Journey Starts Here
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mb-6">
                {index + 1}
              </div>

              <h3 className="font-semibold text-xl text-[#43246f]">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}