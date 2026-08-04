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
        "that actually match the 2025 rules of that country (Canada increased funds from Sept 1, 2025; you can’t show old amounts).",
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
    <main className="min-h-screen py-6 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-4 sm:p-8 lg:p-10">
        
        {/* Header Section */}
        <header className="border-b border-slate-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Apply for Visa
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base lg:text-lg">
            How to Apply for a Student Visa - 2026 Rules Guide
          </p>
        </header>

        {/* Section 1: Why this step matters */}
        <section className="mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">
                Why This Step Matters
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                This is the part where everything becomes real. You already have
                your <span className="font-bold text-black">unconditional offer</span>{" "}
                (or CAS/CoE/LOA depending on country), but you{" "}
                <span className="font-bold text-black">cannot travel</span> or start
                classes until the embassy/high commission approves your{" "}
                <span className="font-bold text-black">
                  student visa / study permit.
                </span>
              </p>

              <div className="bg-slate-50 p-4 sm:p-5 rounded-lg border-l-4 border-slate-900">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-slate-900">
                  A strong visa file shows 4 things:
                </h3>
                <ul className="space-y-1.5 text-slate-700 text-xs sm:text-sm md:text-base list-disc list-inside">
                  <li>
                    You have a <span className="font-bold text-black">genuine offer</span>{" "}
                    from a recognized institution (CAS – UK, LOA – Canada, CoE – Australia).
                  </li>
                  <li>
                    You have <span className="font-bold text-black">enough money</span> to pay tuition + live in that country.
                  </li>
                  <li>
                    You meet <span className="font-bold text-black">English / academic</span> requirements.
                  </li>
                  <li>
                    You're a <span className="font-bold text-black">genuine student</span> who will follow visa rules and return/transition legally.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/steps/8-2.png"
                alt="Visa overview diagram"
                height={500}
                width={400}
                className="w-full h-auto max-w-sm rounded-lg object-contain"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Checklist */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
            What You Need Before Starting
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-4 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-medium"
                >
                  <Image
                    src={box.icon}
                    alt="icon"
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                  <h4 className="text-blue-950 font-extrabold text-sm sm:text-base">
                    {box.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:sticky lg:top-6">
              <Image
                src="/images/steps/offer.png"
                alt="Offer letter checklist"
                height={400}
                width={400}
                className="w-full h-auto max-w-xs object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Process */}
        <section className="bg-amber-500 font-sans text-slate-900 py-12 px-4 rounded-2xl mb-8 sm:mb-10">
          <div className="pb-8 text-center px-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              How this step works (checklist / process)
            </h2>
            <p className="text-slate-800 text-xs md:text-sm font-medium">
              We can generalize the student-visa flow across UK / Canada / Australia like this
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Top Feature Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-50 rounded-xl text-slate-800 shrink-0">
                  <FileText className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    Gather country-specific checklist
                  </h3>
                  <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 leading-relaxed">
                    <li>
                      <strong className="text-slate-900">UK:</strong> CAS, funds, English, passport.
                    </li>
                    <li>
                      <strong className="text-slate-900">Canada:</strong> LOA, proof of funds (now higher), biometrics, explanation letter.
                    </li>
                    <li>
                      <strong className="text-slate-900">Australia:</strong> CoE, OSHC, funds, GTE/statement.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3x2 Grid for Process Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <PenTool className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Fill the visa / study-permit application online
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You enter your personal data, course details, university address, start/end dates, and financial info exactly as on the CAS/CoE/LOA.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <Upload className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Upload documents clearly
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Passport, offer/CAS/CoE, payment proof, bank statements, sponsor letters, family income, property (if showing ties), English test, medical if done.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <CreditCard className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Pay the visa fee + biometrics fee
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Canada specifically says pay biometrics fee at submission or it delays the file.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <CalendarCheck className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Book biometrics / VAC appointment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Show up with original passport and confirmation.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <Clock className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Wait for decision / respond to ADR
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Some cases get asked for more financials or explanation; answer fast.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-start">
                <CheckCircle className="w-7 h-7 stroke-[1.5] text-slate-800 mb-3" />
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                  Receive visa / study permit approval
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Once you have it, you can move to Step 8.
                </p>
              </div>
            </div>
          </div>
        </section>

       

     

      </div>
    </main>
  );
}