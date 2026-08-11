"use client";

import Image from "next/image";
import {
  FileText,
  PenTool,
  Upload,
  CreditCard,
  CalendarCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ApplyForVisaPage() {
  const boxes = [
    {
      icon: "/images/steps/research.png",
      title: "Unconditional offer ",
      description:
        "from the university (or CAS for UK, CoE for Australia, LOA for Canada). No final admission = no visa.",
    },
    {
      icon: "/images/steps/preference.png",
      title: "Valid passport ",
      description: "(covering your study period).",
    },
    {
      icon: "/images/steps/location.png",
      title: "Proof of tuition payment / deposit ",
      description:
        "(many UK/Aus universities ask for this before giving CAS/CoE)",
    },
    {
      icon: "/images/steps/budget.png",
      title: " Proof of funds ",
      description:
        "that actually match the current rules of that country (you must meet updated financial thresholds).",
    },
    {
      icon: "/images/steps/language.png",
      title: "English test ",
      description: " (if your visa route requires separate proof).",
    },
    {
      icon: "/images/steps/product.png",
      title: " Medical / TB test / biometrics readiness",
      description:
        "(Canada gives 30 days for biometrics after letter; Australia needs health & OSHC; UK sometimes asks for TB for certain countries).",
    },
    {
      icon: "/images/steps/product.png",
      title: "SOP / Study plan / GTE-style explanation ",
      description: "(Canada & Australia especially care about intention).",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-8 sm:py-14 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <header className="border-b border-slate-900 pb-6 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Step 7 Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Apply for Visa
          </h1>
          <p className="text-slate-400 mt-2 text-sm sm:text-base lg:text-lg font-medium">
            How to Apply for a Student Visa - Updated Rules Guide
          </p>
        </header>

        {/* Section 1: Why this step matters */}
        <section className="bg-slate-950 border border-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-32 bg-[#0b5cff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 tracking-tight">
                Why This Step Matters
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                This is the part where everything becomes real. You already have
                your <span className="font-bold text-white">unconditional offer</span>{" "}
                (or CAS/CoE/LOA depending on country), but you{" "}
                <span className="font-bold text-red-400">cannot travel</span> or start
                classes until the embassy/high commission approves your{" "}
                <span className="font-bold text-[#0b5cff]">
                  student visa / study permit.
                </span>
              </p>

              <div className="bg-slate-900 p-5 rounded-2xl border-l-4 border-[#0b5cff] border-y border-r border-slate-800/80 shadow-lg">
                <h3 className="font-extrabold text-base sm:text-lg mb-3 text-white">
                  A strong visa file shows 4 key things:
                </h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5cff] font-bold">•</span>
                    <span>You have a <strong className="text-white">genuine offer</strong> from a recognized institution (CAS – UK, LOA – Canada, CoE – Australia).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5cff] font-bold">•</span>
                    <span>You have <strong className="text-white">enough money</strong> to pay tuition + live in that country.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5cff] font-bold">•</span>
                    <span>You meet <strong className="text-white">English / academic</strong> requirements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0b5cff] font-bold">•</span>
                    <span>You're a <strong className="text-white">genuine student</strong> who will follow visa rules and return/transition legally.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-slate-900 rounded-2xl p-3 border border-slate-800 shadow-2xl">
                <Image
                  src="/images/steps/8-2.png"
                  alt="Visa overview diagram"
                  fill
                  priority
                  className="w-full h-auto rounded-xl object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Checklist */}
        <section>
          <div className="space-y-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Requirements
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              What You Need Before Starting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 p-5 rounded-2xl border border-slate-800 bg-slate-950 text-xs sm:text-sm font-medium hover:border-[#0b5cff]/50 transition-all duration-200 shadow-lg group"
                >
                  <div className="p-2 bg-slate-900 rounded-xl w-fit border border-slate-800">
                    <Image
                      src={box.icon}
                      alt="icon"
                      height={36}
                      width={36}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-white font-extrabold text-sm sm:text-base group-hover:text-[#0b5cff] transition-colors">
                    {box.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:sticky lg:top-6">
              <div className="relative w-full max-w-xs aspect-[3/4] bg-slate-950 rounded-2xl p-3 border border-slate-900 shadow-2xl">
                <Image
                  src="/images/steps/offer.png"
                  alt="Offer letter checklist"
                  fill
                  className="w-full h-auto object-contain rounded-xl opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="bg-slate-950 border border-slate-900 text-white py-10 px-6 sm:px-8 rounded-3xl shadow-2xl relative overflow-hidden">
          
          <div className="pb-8 text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
                Step-By-Step Flow
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              How This Step Works (Checklist / Process)
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              We can generalize the student-visa flow across UK / Canada / Australia like this:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Top Feature Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-950 rounded-xl text-[#0b5cff] border border-slate-800 shrink-0">
                  <FileText className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-2">
                    Gather Country-Specific Checklist
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <li>
                      <strong className="text-white">UK:</strong> CAS, funds, English, passport.
                    </li>
                    <li>
                      <strong className="text-white">Canada:</strong> LOA, proof of funds, biometrics, explanation letter.
                    </li>
                    <li>
                      <strong className="text-white">Australia:</strong> CoE, OSHC, funds, GTE/statement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3x2 Grid for Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <PenTool className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Fill the visa / study-permit application online
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  You enter your personal data, course details, university address, start/end dates, and financial info exactly as on the CAS/CoE/LOA.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <Upload className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Upload documents clearly
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passport, offer/CAS/CoE, payment proof, bank statements, sponsor letters, family income, property (if showing ties), English test, medical if done.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <CreditCard className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Pay the visa fee + biometrics fee
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Canada specifically requires paying the biometrics fee at submission to avoid filing delays.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <CalendarCheck className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Book biometrics / VAC appointment
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Show up with your original passport and official confirmation appointment letter.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <Clock className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Wait for decision / respond to ADR
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Some cases get asked for additional financials or explanation; respond promptly to avoid delays.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-5 shadow-lg flex flex-col justify-start hover:border-[#0b5cff]/50 transition-all duration-200">
                <CheckCircle className="w-6 h-6 text-[#0b5cff] mb-3" />
                <h3 className="text-sm sm:text-base font-extrabold text-white mb-1.5">
                  Receive visa / study permit approval
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Once approved, you are ready to prepare for travel and move to Step 8.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}