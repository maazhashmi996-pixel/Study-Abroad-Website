"use client";

import { useState } from "react";
import Get from "@/components/study-destination/get";

export default function Expert() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-amber-500 px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 text-[#43246f]">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Book A Meeting With An Expert
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-3xl">
            Danish universities are small, research-focused, and highly ranked
            but the application process has strict deadlines.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="mt-2 bg-[#43246f] text-white hover:text-[#43246f] hover:bg-amber-400 border-2 border-[#43246f] font-semibold py-3 px-8 rounded-full transition"
          >
            APPLY NOW
          </button>
</div>
      </section>

      {isOpen && (
        <Get onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}