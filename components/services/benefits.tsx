"use client";

import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  "Expert Counsellors",
  "High Visa Success Rate",
  "University Partnerships",
  "Scholarship Guidance",
  "Application Assistance",
  "Pre Departure Support",
];

export default function Benefits() {
  return (
    <section className="bg-[#43246f] py-12 sm:py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Why Choose Times Consultant?
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Our experienced consultants guide students from university
              selection to successful visa approval with personalized support.
            </p>
          </div>

          {/* Right Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex items-center gap-3.5 sm:gap-4 transition-all hover:bg-white/15"
              >
                <FaCheckCircle className="text-orange-400 text-xl sm:text-2xl shrink-0" />

                <h3 className="font-semibold text-base sm:text-lg">
                  {item}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}