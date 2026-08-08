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
    <div
      className="
        group
        flex
        items-center
        gap-4
        bg-white
        border
        border-[#1769D1]/15
        rounded-2xl
        p-5
        sm:p-6
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        hover:border-[#1769D1]/30
        transition-all
        duration-300
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          items-center
          justify-center
          shrink-0
          w-12
          h-12
          sm:w-14
          sm:h-14
          rounded-xl
          bg-[#1769D1]/10
          text-[#1769D1]
          group-hover:bg-[#E31E24]
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="
          text-base
          sm:text-lg
          md:text-xl
          font-bold
          text-[#17213D]
          group-hover:text-[#1769D1]
          transition-colors
          duration-300
        "
      >
        {title}
      </h3>
    </div>
  );
}

export default function Journey() {
  const cards = [
    {
      title: "Explore",
      icon: <FaSearchLocation className="text-xl sm:text-2xl" />,
    },
    {
      title: "Apply",
      icon: <FaClipboardCheck className="text-xl sm:text-2xl" />,
    },
    {
      title: "Compare",
      icon: <FaBalanceScale className="text-xl sm:text-2xl" />,
    },
    {
      title: "Track",
      icon: <FaBriefcase className="text-xl sm:text-2xl" />,
    },
    {
      title: "Decide",
      icon: <FaUniversity className="text-xl sm:text-2xl" />,
    },
    {
      title: "Prepare",
      icon: <FaPassport className="text-xl sm:text-2xl" />,
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">

          {/* Small Label */}
          <span
            className="
              inline-block
              mb-3
              px-4
              py-1.5
              rounded-full
              bg-[#1769D1]/10
              text-[#1769D1]
              font-semibold
              text-xs
              sm:text-sm
            "
          >
            Your Journey
          </span>

          {/* Main Heading */}
          <h2
            className="
              text-2xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-[#17213D]
              leading-tight
            "
          >
            Simplifying the Study Abroad Journey
          </h2>

          {/* Red Accent */}
          <div className="mx-auto mt-4 w-16 h-1 bg-[#E31E24] rounded-full" />

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-gray-600
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            From exploring your options to preparing for your international
            education, we help make every step of your study abroad journey
            simple and clear.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

          {/* ================= CARDS ================= */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((item, index) => (
              <JourneyCard
                key={index}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center w-full">

            <div
              className="
                relative
                w-full
                max-w-[420px]
              "
            >

              {/* Red Decorative Shape */}
              <div
                className="
                  absolute
                  -top-3
                  -right-3
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  bg-[#E31E24]
                  rounded-2xl
                  z-0
                "
              />

              {/* Image Card */}
              <div
                className="
                  relative
                  z-10
                  bg-white
                  rounded-3xl
                  p-4
                  sm:p-5
                  border
                  border-[#1769D1]/15
                  shadow-md
                  overflow-hidden
                "
              >
                <Image
                  src="/images/about/aboutImg.png"
                  alt="aboutImg"
                  width={420}
                  height={420}
                  className="
                    w-full
                    h-auto
                    object-contain
                    rounded-2xl
                  "
                />

                {/* Bottom Blue Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-1.5
                    bg-[#1769D1]
                  "
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}