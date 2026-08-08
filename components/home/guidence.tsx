import Image from "next/image";
import Link from "next/link";

export default function AdmissionGuidance() {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
        
        {/* Decorative Shapes */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#0b5cff]/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#e31e24]/10 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Hero Content */}
            <div className="text-center lg:text-left">

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
                Admission Guidance
              </span>

              <h1
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  xl:text-6xl
                  font-extrabold
                  text-[#000000]
                  leading-tight
                "
              >
                Your Path to
                <span className="text-[#0b5cff]"> University Admission </span>
                Starts Here
              </h1>

              <div className="mt-5 w-16 h-1 bg-[#e31e24] rounded-full mx-auto lg:mx-0" />

              <p
                className="
                  mt-6
                  text-gray-600
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                  lg:mx-0
                "
              >
                Choosing the right university and preparing a strong
                application can make your study abroad journey much easier.
                D.Education Zone provides practical admission guidance to help
                students understand their options and apply with confidence.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-3.5
                    bg-[#0b5cff]
                    hover:bg-[#084dcc]
                    text-white
                    rounded-full
                    font-semibold
                    text-sm
                    sm:text-base
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Get Admission Guidance
                </Link>

                <Link
                  href="/study-Destination"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-7
                    py-3.5
                    border-2
                    border-[#0b5cff]
                    text-[#0b5cff]
                    hover:bg-[#0b5cff]
                    hover:text-white
                    rounded-full
                    font-semibold
                    text-sm
                    sm:text-base
                    transition-all
                    duration-300
                  "
                >
                  Explore Destinations
                </Link>

              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center lg:justify-end">

              <div
                className="
                  absolute
                  -top-4
                  -right-4
                  w-24
                  h-24
                  sm:w-32
                  sm:h-32
                  bg-[#e31e24]
                  rounded-3xl
                  opacity-15
                "
              />

              <div
                className="
                  relative
                  z-10
                  w-full
                  max-w-[600px]
                  bg-white
                  p-3
                  sm:p-5
                  rounded-3xl
                  border
                  border-[#0b5cff]/10
                  shadow-xl
                "
              >
                <Image
                  src="/images/about/Academic-Journey.jpg"
                  alt="University Admission Guidance"
                  width={700}
                  height={550}
                  priority
                  className="w-full h-auto rounded-2xl object-cover"
                />

                <div className="absolute bottom-0 left-8 right-8 h-1.5 bg-[#0b5cff] rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center">

            <span
              className="
                text-[#e31e24]
                font-semibold
                text-sm
                uppercase
                tracking-wide
              "
            >
              How We Help
            </span>

            <h2
              className="
                mt-3
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-extrabold
                text-[#000000]
              "
            >
              Complete Admission Support for Your Study Abroad Journey
            </h2>

            <div className="mx-auto mt-4 w-16 h-1 bg-[#0b5cff] rounded-full" />

            <p className="mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Every student has different academic goals, preferences, and
              plans. Our admission guidance focuses on understanding your
              requirements and helping you make informed decisions about your
              international education.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          GUIDANCE STEPS
      ===================================================== */}
      <section className="bg-[#f7f9fc] py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14">

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
              Our Admission Process
            </span>

            <h2
              className="
                mt-3
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-extrabold
                text-[#000000]
              "
            >
              Step-by-Step Admission Guidance
            </h2>

            <div className="mx-auto mt-4 w-16 h-1 bg-[#e31e24] rounded-full" />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

            {/* Step 1 */}
            <AdmissionCard
              number="01"
              title="Understand Your Goals"
              description="We discuss your academic background, interests, preferred study level and future plans to understand what type of program may suit you."
            />

            {/* Step 2 */}
            <AdmissionCard
              number="02"
              title="Choose a Study Destination"
              description="Explore suitable countries and study destinations based on your academic goals, program preferences and available opportunities."
            />

            {/* Step 3 */}
            <AdmissionCard
              number="03"
              title="Find the Right University"
              description="We help you explore universities and programs that align with your academic profile and chosen field of study."
            />

            {/* Step 4 */}
            <AdmissionCard
              number="04"
              title="Check Admission Requirements"
              description="Understand academic requirements, English language requirements, documents and other criteria before submitting your application."
            />

            {/* Step 5 */}
            <AdmissionCard
              number="05"
              title="Prepare Your Application"
              description="Get support in organizing your application documents and presenting your academic information clearly and accurately."
            />

            {/* Step 6 */}
            <AdmissionCard
              number="06"
              title="Application Follow-Up"
              description="Stay informed about your application progress and understand the next steps after submitting your university application."
            />

          </div>
        </div>
      </section>


      {/* =====================================================
          WHY ADMISSION GUIDANCE
      ===================================================== */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image */}
            <div className="relative">

              <div
                className="
                  absolute
                  -bottom-4
                  -left-4
                  w-24
                  h-24
                  bg-[#e31e24]
                  rounded-3xl
                  opacity-10
                "
              />

              <Image
                src="/images/about/Empowering.jpg"
                alt="D.Education Zone Admission Support"
                width={700}
                height={550}
                className="
                  relative
                  z-10
                  w-full
                  rounded-3xl
                  shadow-lg
                  object-cover
                "
              />
            </div>


            {/* Content */}
            <div className="text-center lg:text-left">

              <span className="text-[#e31e24] font-semibold text-sm">
                Why Choose Guidance?
              </span>

              <h2
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-extrabold
                  text-[#000000]
                  leading-tight
                "
              >
                Make Your Admission Journey Clearer and More Organized
              </h2>

              <div className="mt-4 w-16 h-1 bg-[#0b5cff] rounded-full mx-auto lg:mx-0" />

              <p className="mt-5 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Applying to universities abroad involves many decisions.
                Getting the right information at the right time can help you
                avoid confusion and prepare your application more effectively.
              </p>

              <div className="mt-7 space-y-4">

                <Benefit text="Personalized university and program guidance" />

                <Benefit text="Clear information about admission requirements" />

                <Benefit text="Application document guidance" />

                <Benefit text="Support throughout the admission process" />

                <Benefit text="Practical guidance for your next steps" />

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#0b5cff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

          <h2
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-extrabold
              text-white
            "
          >
            Ready to Start Your Admission Journey?
          </h2>

          <p className="mt-4 text-blue-100 text-sm sm:text-base lg:text-lg">
            Get practical guidance from D.Education Zone and take the next
            step towards your international education goals.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              mt-7
              px-8
              py-3.5
              bg-[#e31e24]
              hover:bg-[#c9181f]
              text-white
              rounded-full
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Book a Free Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}


/* =====================================================
   ADMISSION CARD
===================================================== */

function AdmissionCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group
        bg-white
        rounded-2xl
        p-6
        sm:p-7
        border
        border-[#0b5cff]/10
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        hover:border-[#0b5cff]/30
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-12
          h-12
          flex
          items-center
          justify-center
          rounded-xl
          bg-[#0b5cff]/10
          text-[#0b5cff]
          font-extrabold
          text-sm
          group-hover:bg-[#e31e24]
          group-hover:text-white
          transition-all
          duration-300
        "
      >
        {number}
      </div>

      <h3
        className="
          mt-5
          text-lg
          sm:text-xl
          font-bold
          text-[#000000]
          group-hover:text-[#0b5cff]
          transition-colors
          duration-300
        "
      >
        {title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}


/* =====================================================
   BENEFIT
===================================================== */

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">

      <span
        className="
          mt-1
          shrink-0
          w-5
          h-5
          rounded-full
          bg-[#0b5cff]
          text-white
          flex
          items-center
          justify-center
          text-xs
          font-bold
        "
      >
        ✓
      </span>

      <p className="text-gray-700 text-sm sm:text-base">
        {text}
      </p>

    </div>
  );
}