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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold text-[#43246f] mt-4">
            Your Trusted Study Abroad Partner
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {features.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-[#f8f7fc] rounded-3xl p-8 hover:shadow-lg duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#43246f] text-white flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#43246f]">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
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