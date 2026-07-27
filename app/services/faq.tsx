"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can Times Consultant help me?",
    answer:
      "We provide university admissions, visa assistance, scholarship guidance, accommodation support and complete counselling.",
  },
  {
    question: "Which countries can I apply to?",
    answer:
      "UK, Canada, Australia, Denmark, Sweden, Germany, Hungary, Ireland and many more.",
  },
  {
    question: "Do you help with visa applications?",
    answer:
      "Yes. Our consultants prepare your documents and guide you throughout the visa process.",
  },
  {
    question: "Can I get scholarship guidance?",
    answer:
      "Absolutely. We help identify scholarship opportunities based on your academic profile.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f8f7fc]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="uppercase text-orange-500 font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-[#43246f] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg text-[#43246f]">
                  {faq.question}
                </span>

                {open === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}