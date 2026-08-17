import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-20">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Small Label */}
            <span
              className="
                mb-4
                px-4
                py-1.5
                rounded-full
                bg-[#43246f]/10
                text-[#43246f]
                font-semibold
                text-xs
                sm:text-sm
              "
            >
              D.Education Zone
            </span>

            {/* Heading */}
            <h1
              className="
                text-[#1a233d]
                font-bold
                leading-tight
                text-3xl
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
            >
              Empowering Your Academic Journey With Expert Student Visa
              Guidance
            </h1>

            {/* Red Line */}
            <div className="mt-5 w-16 h-1 bg-[#E53935] rounded-full" />

            {/* Description */}
            <p
              className="
                mt-5
                max-w-2xl
                text-gray-600
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              "
            >
              Since April 2004, D.Education Zone has been among the leading
              Study Abroad Consultants in Pakistan, connecting prospective
              students with suitable universities and study destinations.
              We act as a direct link between students and international
              institutions, with a clear focus on honest guidance and
              practical study abroad support.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">

              {/* Primary Button */}
              {/* <button
                className="
                  bg-[#E53935]
                  hover:bg-white
                  border border-[#E53935]
                 hover:text-black
                  px-8
                  sm:px-10
                  py-3.5
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  active:scale-95
                  transition-all
                  duration-300
                "
              >
                Get Started
              </button> */}

              {/* Secondary Button */}
              <Link
                className="
                  border-2
                  border-[#0b5cff]
                bg-[#0b5cff]  text-white shadow-lg shadow-[#0b5cff]/20  hover:bg-white 
                  hover:text-black
                  px-8
                  sm:px-10
                  py-3
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  transition-all
                  duration-300
                "
                  href="/study-Destination"
              >
                Explore Destinations
              </Link>

            </div>
          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Purple Decorative Background */}
            <div
              className="
                absolute
                -top-4
                -right-4
                sm:-top-5
                sm:-right-5
                w-full
                h-full
                max-w-[650px]
                rounded-3xl
                bg-[#43246f]/10
              "
            />

            {/* Image Container */}
            <div className="relative z-10 w-full max-w-[650px]">

              <Image
                src="/images/about/austin.jpg"
                alt="About Hero"
                width={650}
                height={600}
                priority
                className="
                  w-full
                  h-auto
                  aspect-[6/5]
                  object-cover
                  rounded-3xl
                  shadow-xl
                "
              />

              {/* Red Accent */}
              <div
                className="
                  absolute
                  -bottom-3
                  -left-3
                  sm:-bottom-4
                  sm:-left-4
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  bg-[#E53935]
                  rounded-2xl
                  -z-10
                "
              />

              {/* Floating Info Card */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-6
                  sm:left-6
                  bg-white
                  rounded-2xl
                  shadow-lg
                  px-4
                  py-3
                  sm:px-5
                  sm:py-4
                "
              >
                <p className="text-[#0b5cff] font-bold text-lg sm:text-xl">
                  20+ Years
                </p>

                <p className="text-gray-500 text-xs sm:text-sm">
                  Student Guidance
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}