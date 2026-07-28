"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[380px] lg:h-[450px] flex items-center">
      <Image
        src="/images/offices/hero.webp"
        alt="Our Offices"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
        <p className="text-sm mb-4">
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
          {" / "}
          Our Offices
        </p>

        <h1 className="text-4xl md:text-6xl font-bold">
          Our Offices
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Visit the nearest Times Consultant office and get expert guidance
          for study abroad, student visas, scholarships, and admissions.
        </p>
      </div>
    </section>
  );
}