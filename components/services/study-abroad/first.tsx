"use client";

import Image from "next/image";

export default function First() {
  return (
    <section className="w-full py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl sm:rounded-2xl shadow-sm">
        
        {/* Responsive Container using Aspect Ratio */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
          <Image
            src="/images/services/study-Abroad.png"
            alt="Study Abroad"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}