import React from 'react';

export default function Expert() {
  return (
    <section className="bg-amber-500 px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 text-[#43246f]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Book A Meeting With An Expert
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-900 max-w-3xl">
          Danish universities are small, research-focused, and highly ranked but the application process has strict deadlines. Share your details in the short form below and our team will get back to you within 24 hours. Book Free Consultation now!
        </p>

        {/* Action Button */}
        <button className="mt-2 bg-[#43246f] text-white hover:text-[#43246f] hover:bg-amber-400 border-2 border-[#43246f] font-semibold py-3 px-8 sm:px-10 rounded-full transition duration-300 shadow-md">
          APPLY NOW
        </button>

      </div>
    </section>
  );
}