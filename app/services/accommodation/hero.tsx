"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-162.5 flex items-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/accommodation-hero.webp"
        alt="Student Accommodation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white">
        
        <p className="text-orange-400 font-semibold text-lg mb-4">
          Student Accommodation Services
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Helping You Secure the 
          <span className="text-orange-400"> Best Place </span>
          to Stay
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Finding the right accommodation is an important part of your study
          journey. We help international students find safe, comfortable, and
          affordable places to live near their universities.
        </p>


        <div className="mt-8 flex flex-wrap gap-4">

          <button
            className="bg-orange-500 hover:bg-orange-600 transition 
            duration-300 px-8 py-3 rounded-md font-semibold"
          >
            Find Accommodation
          </button>


          <button
            className="border border-white hover:bg-white 
            hover:text-black transition duration-300 
            px-8 py-3 rounded-md font-semibold"
          >
            Contact Us
          </button>

        </div>

      </div>

    </section>
  );
}