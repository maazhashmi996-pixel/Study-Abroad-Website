"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden bg-purple-950">
      
      {/* Background Image */}
      <Image
        src="/images/services/ACCOMMODATION-scaled.png"
        alt="Student Accommodation"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Optional Dark Overlay for Visual Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Optional Hero Overlay Content Slot */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        {/* You can add section titles or CTAs here */}
      </div>

    </section>
  );
}