"use client";

import {
  FileSearch,
  FileCheck2,
  Upload,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: <FileSearch size={38} />,
    title: "Read each condition in your offer letter",
    desc: `Example conditions:
• Provide final Bachelor's transcript
• Minimum CGPA requirement
• IELTS / PTE score
• Passport copy
• Proof of funds
• Tuition deposit`,
  },
  {
    icon: <FileCheck2 size={38} />,
    title: "Collect and prepare the required documents",
    desc: "Get official copies, scanned documents, academic transcripts, English language results, passport copy and every document requested by the university.",
  },
  {
    icon: <Upload size={38} />,
    title: "Submit the evidence back to the university",
    desc: "Upload the required documents through the university portal or send them by email if instructed. Make sure everything is clear and complete.",
  },
  {
    icon: <ClipboardCheck size={38} />,
    title: "Wait for confirmation",
    desc: "The admissions team reviews your documents. If everything matches their requirements, your conditions will be removed.",
  },
  {
    icon: <BadgeCheck size={38} />,
    title: "Receive (or become eligible for) the unconditional offer",
    desc: "After all conditions are approved, you'll receive an unconditional offer and can move towards tuition payment and visa processing.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F6A800] py-20">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-extrabold text-[#3B1E54]">
            How this step works (checklist / process)
          </h2>

          <p className="text-gray-800 mt-3">
            Here's how the "Fulfill Conditions" stage should be completed.
          </p>

        </div>

        {/* Top Card */}

        <div className="flex justify-center mb-8">

          <div className="bg-white rounded-2xl shadow-lg p-7 max-w-md border">

            <div className="text-[#3B1E54] mb-5">
              {steps[0].icon}
            </div>

            <h3 className="text-xl font-bold text-[#3B1E54] mb-4">
              {steps[0].title}
            </h3>

            <p className="text-gray-600 whitespace-pre-line leading-7">
              {steps[0].desc}
            </p>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="grid md:grid-cols-2 gap-7">

          {steps.slice(1).map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-7 border hover:-translate-y-2 duration-300"
            >

              <div className="text-[#3B1E54] mb-5">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#3B1E54] mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Note */}

        <div className="flex justify-center mt-12">

          <div className="bg-[#E8A200] border border-yellow-700 rounded-xl px-8 py-4">

            <p className="text-[#3B1E54] font-semibold text-center">
              At the end of this step, you are no longer
              <span className="font-bold">
                {" "}conditionally accepted.
              </span>{" "}
              You are cleared.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}