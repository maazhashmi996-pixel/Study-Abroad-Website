"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#43246f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="rounded-2xl sm:rounded-3xl bg-[#56338d] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 lg:gap-8 shadow-xl">

          {/* Left Text Box */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to Study Abroad?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Book your free consultation today and let our experts help
              you choose the right university, prepare your documents,
              and guide you through every step of your study abroad
              journey.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="w-full sm:w-auto shrink-0 pt-2 lg:pt-0">
            <Link
              href="/contact"
              className="inline-block w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base whitespace-nowrap active:scale-95 shadow-md"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}