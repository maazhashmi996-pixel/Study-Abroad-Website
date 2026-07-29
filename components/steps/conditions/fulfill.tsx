"use client";

import Image from "next/image";

export default function FulfillConditionsPage() {
  return (
    <div className="w-full bg-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-14">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#3B1E54] mb-8">
              Fulfill Conditions
            </h1>

            <h2 className="text-3xl font-bold text-[#3B1E54] mb-8">
              Why this step matters
            </h2>

            <div className="space-y-6 text-gray-700 leading-9 text-lg">

              <p>
                After you receive a conditional offer, the university is basically
                saying:
                <span className="font-semibold">
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

              <p className="font-semibold text-[#3B1E54]">
                This is the point where students either stay on track or fall
                behind and miss the intake.
              </p>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <Image
              src="/images/steps/3-1.png"
              alt="Fulfill Conditions"
              width={700}
              height={700}
              priority
              className="w-full max-w-xl lg:max-w-2xl h-auto object-contain"
            />

          </div>

        </div>

      </section>

      {/* Divider */}

      <div className="max-w-7xl mx-auto px-5">

        <div className="flex items-center">

          <div className="flex-1 border-t border-yellow-400"></div>

          <div className="mx-5 text-[#3B1E54] text-xl">
            ★
          </div>

          <div className="flex-1 border-t border-yellow-400"></div>

        </div>

      </div>

    </div>
  );
}