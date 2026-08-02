"use client";

import Image from "next/image";

export default function FulfillConditionsPage() {
  return (
    <div className="w-full bg-white font-sans text-slate-800">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3B1E54] tracking-tight">
              Fulfill Conditions
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3B1E54]">
              Why this step matters
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">

              <p>
                After you receive a conditional offer, the university is basically
                saying:
                <span className="font-semibold text-gray-900">
                  {" "}
                  "We want you, but prove you meet our requirements."
                </span>
              </p>

              <p>
                In this step, you submit whatever the university is still asking
                for such as final transcripts, updated IELTS/PTE score,
                financial evidence, passport copy, etc.
              </p>

              <p>
                Once all conditions are met and approved, the university can move
                you to an
                <span className="font-bold text-[#3B1E54]">
                  {" "}
                  unconditional offer,
                </span>{" "}
                which is usually required before you pay tuition fees or apply
                for your student visa.
              </p>

              <p>
                If you do not clear these conditions on time, you risk losing
                your place in the intake even after receiving an offer.
              </p>

              <p className="font-semibold text-[#3B1E54] pt-2">
                This is the point where students either stay on track or fall
                behind and miss the intake.
              </p>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-square sm:aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/steps/3-1.png"
                alt="Fulfill Conditions Illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain"
              />
            </div>
          </div>

        </div>

      </section>

      {/* Divider */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

        <div className="flex items-center">

          <div className="flex-1 border-t border-yellow-400"></div>

          <div className="mx-4 sm:mx-6 text-[#3B1E54] text-lg sm:text-xl">
            ★
          </div>

          <div className="flex-1 border-t border-yellow-400"></div>

        </div>

      </div>

    </div>
  );
}