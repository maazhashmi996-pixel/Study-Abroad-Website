
"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

 const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

export default function Journey() {
  const stepsCards = [
    {
      title: "Select Your Program",
      desc: "This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.",
    },
    {
      title: "Submit Application",
      desc: "You fill the university / portal form, upload documents, and pay the application fee (if required). Clean, complete files get faster decisions.",
    },
    {
      title: "Receive Offer Letter",
      desc: "The university reviews your file and sends a conditional offer (usually). You must read it carefully as it contains deadlines and conditions.",
    },
    {
      title: "Fulfill Conditions",
      desc: "You send whatever the university is still asking for; final transcript, IELTS/PTE, passport copy, deposit in some cases. This is what unlocks your unconditional offer.",
    },
    {
      title: "Pay Tuition Deposit",
      desc: "To secure your seat, you pay the tuition deposit mentioned in your offer letter, using the official university channel. Delays here = delays in CAS/CoE.",
    },
    {
      title: "Get Unconditional Offer",
      desc: "Now the university confirms all good, nothing pending, you're fully accepted. This is the admission proof most embassies want to see.",
    },
    {
      title: "Apply for Visa",
      desc: "You submit your student visa / study permit file with admission proof, funds, medical/biometrics, and a proper study plan (where needed).",
    },
    {
      title: "Start Your Program",
      desc: "You travel, clear immigration, enroll at the university, attend orientation, and start classes on time without breaking visa rules.",
    },
  ];

  const valueProps = [
    "We check your profile before telling you where to apply",
    "We prepare and submit applications on time",
    "We review offer letters so you don't miss conditions",
    "We guide on deposits and official payment channels",
    "We push universities to issue unconditional offers when intakes are close",
    "We build visa files according to updated rules",
    "We give pre-departure help so you arrive and enroll on time",
  ];

  return (
    <main className="w-full bg-white font-sans text-slate-800">

      {/* =====================================================
          1. STUDY ABROAD JOURNEY
      ====================================================== */}
      <section className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#EF4444]" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
                Your Journey
              </span>

              <span className="w-8 h-[2px] bg-[#EF4444]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 leading-tight">
              The 8 Study Abroad Steps
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7 max-w-2xl mx-auto">
              From selecting the right program to stepping into your
              classroom, we guide you through every stage of your
              international education journey.
            </p>
          </div>

          {/* =====================================================
              8 CARDS
          ====================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {stepsCards.map((step, idx) => (
              <div
                key={idx}
                className="
                  group
                  relative
                  bg-white
                  rounded-2xl
                  p-5 sm:p-6
                  border border-slate-200
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  hover:border-[#2563EB]/40
                  transition-all
                  duration-300
                  flex flex-col
                  h-full
                  overflow-hidden
                "
              >

                {/* Top Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-[#2563EB]
                    scale-x-0
                    group-hover:scale-x-100
                    origin-left
                    transition-transform
                    duration-300
                  "
                />

                {/* Number */}
                <div className="flex items-center justify-between mb-5">

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-xl
                      bg-[#2563EB]/10
                      text-[#2563EB]
                      text-xs
                      font-black
                      group-hover:bg-[#2563EB]
                      group-hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Red Accent */}
                  <span
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#EF4444]
                      opacity-60
                      group-hover:opacity-100
                      transition-opacity
                    "
                  />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <h3
                    className="
                      font-extrabold
                      text-sm
                      sm:text-base
                      text-slate-800
                      leading-snug
                      group-hover:text-[#2563EB]
                      transition-colors
                      duration-200
                    "
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-6">
                    {step.desc}
                  </p>

                </div>

                {/* Bottom Line */}
                <div className="mt-5 flex items-center gap-2">

                  <span className="w-6 h-[2px] bg-[#EF4444]" />

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Step {idx + 1}
                  </span>

                </div>

              </div>
            ))}
          </div>

          {/* =====================================================
              CTA
          ====================================================== */}
          <div className="mt-10 sm:mt-12 flex justify-center">

            <button
               type="button"
        onClick={() => openWhatsApp("923452066100", "Hi, I clicked Contact Us!")}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-[#2563EB]
                hover:bg-[#1D4ED8]
                text-white
                font-bold
                text-xs
                sm:text-sm
                px-6
                sm:px-7
                py-3.5
                rounded-full
                shadow-md
                hover:shadow-lg
                transition-all
                duration-200
              "
            >
              <span>Talk to a Study Abroad Advisor</span>

              <ArrowRight
                className="
                  w-4
                  h-4
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </button> </div>
        </div>
      </section>

      {/* =====================================================
          2. WHY D.EDUCATION ZONE
      ====================================================== */}
      <section className="bg-slate-50 py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#EF4444]" />

              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
                Why Choose Us
              </span>

              <span className="w-8 h-[2px] bg-[#EF4444]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800">
              We Make Your Journey Easier
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7 max-w-2xl mx-auto">
              You don't have to figure out every university, document,
              deadline, and visa requirement alone. Our team supports you
              throughout the process.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-4 sm:p-5
                  hover:border-[#2563EB]/40
                  hover:shadow-md
                  transition-all
                  duration-200
                "
              >

                <div
                  className="
                    shrink-0
                    flex
                    items-center
                    justify-center
                    w-7
                    h-7
                    rounded-full
                    bg-[#2563EB]/10
                    group-hover:bg-[#2563EB]
                    transition-colors
                  "
                >
                  <CheckCircle2
                    className="
                      w-4
                      h-4
                      text-[#2563EB]
                      group-hover:text-white
                      transition-colors
                    "
                  />
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-6">
                  {item}
                </p>

              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">

            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              Not sure which step you should start with?
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                text-[#2563EB]
                hover:text-[#1D4ED8]
                font-bold
                text-sm
                transition-colors
              "
            >
              Get your profile assessed

              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}

