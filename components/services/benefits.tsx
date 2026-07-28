"use client";

import {
  FaCheckCircle,
} from "react-icons/fa";

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
    <section className="bg-[#43246f] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-bold">
              Why Choose Times Consultant?
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-200">
              Our experienced consultants guide students from university
              selection to successful visa approval with personalized support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-6 flex items-center gap-4"
              >
                <FaCheckCircle className="text-orange-400 text-2xl" />

                <h3 className="font-semibold text-lg">
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