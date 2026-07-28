"use client";

import Image from "next/image";

export default function Hero() {
  return (
   <section className="relative w-full h-[450px] overflow-hidden">
      <Image
        src="/images/services/ACCOMMODATION-scaled.png"
        alt="Student Accommodation"
        fill
        priority
        className="object-cover"
      />

     

    </section>
  );
}