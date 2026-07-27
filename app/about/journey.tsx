"use client";

import Image from "next/image";
import {
  FaBriefcase,
  FaSearchLocation,
  FaBalanceScale,
  FaClipboardCheck,
  FaUniversity,
  FaPassport,
} from "react-icons/fa";

interface CardProps {
  title: string;
  icon: React.ReactNode;
}

function JourneyCard({ title, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl hover: border border-gray-300 p-7 h-32 hover:shadow-xl duration-300 cursor-pointer">
      <div className="text-[#44246f] text-3xl mb-5">
        {icon}
      </div>

      <h3 className="text-3xl font-semibold text-[#44246f]">
        {title}
      </h3>
    </div>
  );
}

export default function Journey() {
  const cards = [
    {
      title: "Explore",
      icon: <FaBriefcase />,
    },
    {
      title: "Apply",
      icon: <FaSearchLocation />,
    },
    {
      title: "Compare",
      icon: <FaBalanceScale />,
    },
    {
      title: "Track",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Decide",
      icon: <FaUniversity />,
    },
    {
      title: "Prepare",
      icon: <FaPassport />,
    },
  ];

  return (
    <section className="bg-[#f8f8fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-bold text-[#44246f] mb-14">
          Simplifying the Study Abroad Journey
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {cards.map((item, index) => (
              <JourneyCard
                key={index}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-5">
              <Image
                src="/images/about/Simplifying.jpg"
                alt="Times Consultant"
                width={420}
                height={420}
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}