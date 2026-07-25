"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-[#43246f] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl bg-[#56338d] p-12 flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>
            <h2 className="text-5xl font-bold">
              Ready to Study Abroad?
            </h2>

            <p className="mt-5 text-lg text-gray-200 max-w-2xl">
              Book your free consultation today and let our experts help
              you choose the right university, prepare your documents,
              and guide you through every step of your study abroad
              journey.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-full font-semibold whitespace-nowrap"
          >
            Book Free Consultation
          </Link>

        </div>

      </div>
    </section>
  );
}