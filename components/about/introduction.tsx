import Image from "next/image";

export default function Introduction() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center">

            {/* Main Image */}
            <div
              className="
                relative
                w-full
                max-w-[300px]
                sm:max-w-[250px]
                lg:max-w-[300px]
                aspect-square
                rounded-3xl
                overflow-hidden
                border
                border-[#0b5cff]/10
                shadow-lg
              "
            >
              <Image
                src="/images/about/akson.jpg"
                alt="D.Education Zone Academic Journey"
                fill
                priority
                className="object-cover transition-transform duration-500 hover:scale-105"
              />{/* Blue Overlay Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#0b5cff]" />
            </div>

            {/* Right Image Stack */}
            <div className="flex flex-col gap-4 w-full max-w-[300px] sm:max-w-[250px] lg:max-w-[300px]">

              {/* Experience Card */}
              <div
                className="
                  bg-[#0b5cff]
                  text-white
                  rounded-3xl
                  p-5
                  sm:p-6
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-lg
                  relative
                  overflow-hidden
                "
              >
                {/* Red Decorative Circle */}
                <div
                  className="
                    absolute
                    -right-5
                    -top-5
                    w-16
                    h-16
                    bg-[#e31e24]
                    rounded-full
                    opacity-90
                  "
                />

                <span className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                  22+
                </span>

                <span className="relative z-10 text-xs sm:text-sm lg:text-base font-bold leading-snug uppercase">
                  Years of
                  <br />
                  Experience
                </span>
              </div>

              {/* Bottom Image */}
              <div
                className="
                  relative
                  w-full
                  aspect-[4/3]
                  rounded-3xl
                  overflow-hidden
                  border
                  border-[#e31e24]/10
                  shadow-lg
                "
              >
                <Image
                  src="/images/about/javier.jpg"
                  alt="D.Education Zone Student Support"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Red Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#e31e24]" />
              </div>

            </div>
          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full text-center lg:text-left">

            {/* Small Label */}
            <span
              className="
                inline-block
                mb-4
                px-4
                py-1.5
                rounded-full
                bg-[#0b5cff]/10
                text-[#0b5cff]
                font-semibold
                text-xs
                sm:text-sm
              "
            >
              About D.Education Zone
            </span>

            {/* Heading */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                font-extrabold
                text-[#000000]
                leading-tight
              "
            >
              Guiding Students Towards a{" "}
              <span className="text-[#0b5cff]">
                Brighter Future
              </span>
            </h2>

            {/* Red Accent */}
            <div className="mt-4 w-16 h-1 bg-[#e31e24] rounded-full mx-auto lg:mx-0" />

            {/* Introduction */}
            <p
              className="
                mt-5
                text-gray-600
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              "
            >
              Since April 2004, D.Education Zone has been helping students
              take confident steps towards international education. Our goal
              is to make the study abroad process simple, transparent, and
              focused on each student's academic goals.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-4
                text-gray-600
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              "
            >
              We help students explore suitable study destinations, identify
              universities and programs that match their interests, and
              understand the requirements before applying. Our team provides
              practical support throughout the application and admission
              process.
            </p>

            {/* Paragraph 3 */}
            <p
              className="
                mt-4
                text-gray-600
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
              "
            >
              From choosing the right institution to preparing for the student
              visa process, D.Education Zone is committed to providing
              student-focused guidance and helping applicants move forward
              with greater clarity and confidence.
            </p>

            {/* Highlights */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">

              {/* Highlight 1 */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-[#0b5cff]/5
                  border
                  border-[#0b5cff]/10
                "
              >
                <div className="text-[#0b5cff] font-bold text-xl sm:text-2xl">
                  22+
                </div>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                  Years of Experience
                </p>
              </div>

              {/* Highlight 2 */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-[#e31e24]/5
                  border
                  border-[#e31e24]/10
                "
              >
                <div className="text-[#e31e24] font-bold text-xl sm:text-2xl">
                  Global
                </div>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                  Study Destinations
                </p>
              </div>

              {/* Highlight 3 */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-black/5
                  border
                  border-black/10
                "
              >
                <div className="text-[#000000] font-bold text-xl sm:text-2xl">
                  Expert
                </div>

                <p className="mt-1 text-gray-600 text-xs sm:text-sm">
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