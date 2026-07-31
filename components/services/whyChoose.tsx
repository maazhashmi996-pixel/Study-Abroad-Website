"use client";

import {
  FaUserGraduate,
  FaGlobeEurope,
  FaUniversity,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaUserGraduate />,
    title: "Experienced Counsellors",
    description:
      "Our certified education consultants provide one-to-one guidance throughout your study abroad journey.",
  },
  {
    id: 2,
    icon: <FaUniversity />,
    title: "Top Universities",
    description:
      "We work with leading universities across the UK, Canada, Australia, Europe and many other destinations.",
  },
  {
    id: 3,
    icon: <FaGlobeEurope />,
    title: "Visa Expertise",
    description:
      "From application preparation to visa submission, we help maximise your chances of approval.",
  },
  {
    id: 4,
    icon: <FaAward />,
    title: "Trusted Since 1965",
    description:
      "Thousands of students have successfully started their international education with our support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-orange-500 uppercase font-semibold text-xs sm:text-sm tracking-widest">
            Why Choose Us
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#43246f] mt-2 sm:mt-4 tracking-tight">
            Your Trusted Study Abroad Partner
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 bg-[#f8f7fc] rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#43246f] text-white flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-md">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-semibold text-[#43246f]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 sm:mt-4 text-xs sm:text-base leading-relaxed sm:leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}