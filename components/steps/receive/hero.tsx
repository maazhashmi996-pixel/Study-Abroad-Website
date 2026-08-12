
"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

function Hero() {
  // What students need before receiving their offer letter
  const prerequisites = [
    {
      title: "Complete University Application",
      desc: "Make sure your application has been submitted successfully with all required documents.",
    },
    {
      title: "Valid Application Reference",
      desc: "Keep your university application number or student portal details available for tracking.",
    },
    {
      title: "Regular Email Monitoring",
      desc: "Check your email and spam folder regularly for admission updates, offer letters, or document requests.",
    },
    {
      title: "Meet Admission Requirements",
      desc: "Ensure your academic qualifications, English language scores, and other requirements are fulfilled.",
    },
    {
      title: "Be Ready for the Next Step",
      desc: "Once your offer arrives, D.Education Zone will guide you through the next admission and visa steps.",
    },
    {
      title: "Plan Your Finances",
      desc: "Prepare for tuition deposits, application-related payments, and other study-abroad expenses.",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">

            <span className="inline-block text-xs sm:text-sm font-bold text-[#2563EB] uppercase tracking-wider">
              Step 3 • Admission Process
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2563EB] tracking-tight">
              Receive Your Offer Letter
            </h1>

            <div className="space-y-3 pt-1">

              <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
                Why this step matters
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receiving your offer letter is an important milestone in your
                study-abroad journey. It means the university has reviewed your
                application and is ready to offer you a place, subject to any
                remaining conditions.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Most students initially receive a conditional offer. This means
                you may still need to provide documents, meet academic
                requirements, submit an English language score, or complete
                another university requirement.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At D.Education Zone, our counsellors help you understand your
                offer letter, explain its conditions, and guide you on what needs
                to be completed before moving towards the next stage.
              </p>

              <p className="text-xs sm:text-sm text-[#2563EB] font-semibold pt-1">
                In short: Your offer letter confirms that your study-abroad
                journey is moving forward — and D.Education Zone is here to
                guide you through every next step.
              </p>

            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3]">
              <Image
                src="/images/steps/offer-letter.jpg"
                alt="D.Education Zone offer letter guidance"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200"></div>

          <span className="flex-shrink mx-4 text-[#DC2626] text-xs sm:text-sm">
            ★
          </span>

          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* ================= REQUIREMENTS SECTION ================= */}
        <div className="space-y-6 sm:space-y-8">

          <div className="text-center sm:text-left">

            <span className="text-xs sm:text-sm font-bold text-[#DC2626] uppercase tracking-wider">
              Get Ready
            </span>

            <h2 className="text-xl sm:text-3xl font-extrabold text-[#2563EB] tracking-tight mt-1">
              What You Need Before Receiving Your Offer
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              To make the admission process smooth, make sure you have the
              following ready:
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {prerequisites.map((item, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white
                    border border-slate-200
                    p-4 sm:p-5
                    rounded-2xl
                    shadow-sm
                    space-y-2
                    flex flex-col
                    justify-between
                    hover:border-[#2563EB]/40
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="space-y-2">

                    <CheckCircle className="w-5 h-5 text-[#DC2626] shrink-0" />

                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* Right Image */}
            <div className="lg:col-span-4 flex justify-center items-center">

              <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
                <Image
                  src="/images/steps/receive.jpg"
                  alt="D.Education Zone admission guidance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain"
                />
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

