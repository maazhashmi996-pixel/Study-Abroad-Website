import Image from "next/image";

export default function Secure() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ================= TEXT CONTENT ================= */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6">

            {/* Small Label */}
            <span
              className="
                inline-block
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
              Your Future Starts Here
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
              Secure Your Future With{" "}
              <span className="text-[#0b5cff]">
                D.Education Zone
              </span>
            </h2>

            {/* Red Accent */}
            <div className="w-16 h-1 bg-[#e31e24] rounded-full" />

            {/* Description */}
            <p
              className="
                text-sm
                sm:text-base
                lg:text-lg
                text-gray-600
                leading-relaxed
                max-w-2xl
              "
            >
              Your journey to study abroad starts with the right guidance.
              D.Education Zone helps students explore suitable universities,
              choose the right study destination, prepare their applications,
              and navigate the student visa process with confidence.
            </p>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-600
                leading-relaxed
                max-w-2xl
              "
            >
              From university selection to visa assistance, our team provides
              practical and student-focused support at every important step of
              your international education journey.
            </p>

            {/* Button */}
            <button
              className="
                mt-2
                px-7
                sm:px-9
                py-3
                sm:py-3.5
                bg-[#0b5cff]
                hover:bg-[#084dcc]
                text-white
                border-2
                border-[#0b5cff]
                font-semibold
                text-sm
                sm:text-base
                rounded-full
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
                hover:-translate-y-0.5
                active:scale-95
              "
            >
              Book a Free Consultation
            </button>

            {/* Trust Points */}
            <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e31e24]" />
                <span className="text-sm text-gray-700">
                  Expert Guidance
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0b5cff]" />
                <span className="text-sm text-gray-700">
                  Visa Assistance
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#000000]" />
                <span className="text-sm text-gray-700">
                  University Support
                </span>
              </div>

            </div>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Red Decorative Shape */}
            <div
              className="
                absolute
                -top-4
                -right-3
                sm:-top-5
                sm:-right-5
                w-24
                h-24
                sm:w-32
                sm:h-32
                bg-[#e31e24]
                rounded-3xl
                opacity-10
              "
            />

            {/* Image Container */}
            <div
              className="
                relative
                z-10
                w-full
                max-w-[600px]
                bg-[#f7f9fc]
                rounded-3xl
                p-4
                sm:p-6
                border
                border-[#0b5cff]/10
                shadow-md
              "
            >
              <Image
                src="/images/about/Secure.png"
                alt="D.Education Zone Student Guidance"
                width={800}
                height={700}
                priority
                className="
                  w-full
                  h-auto
                  object-contain
                  rounded-2xl
                "
              />

              {/* Blue Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-6
                  right-6
                  h-1.5
                  bg-[#0b5cff]
                  rounded-full
                "
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}