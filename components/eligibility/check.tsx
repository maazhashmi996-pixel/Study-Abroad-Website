'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Top Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Text Area */}
        <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3B2063] leading-tight sm:leading-snug">
            Contact Our Student Visa <br className="hidden sm:inline" />
            Consultants Near You
          </h1>
          
          <p className="text-amber-500 font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase sm:normal-case">
            Always on the lookout for a better way
          </p>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-xs sm:text-sm md:text-base leading-relaxed">
            Our team at Times Consultant is here to help you with course selection,
            applications, visa support, and every step of your study abroad journey.
            Reach out to us anytime, we&apos;re just a message away!
          </p>

          <div className="pt-2">
            <Link
              href="#contact-form"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm uppercase tracking-wider"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Graphic/Illustration Area */}
        <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg flex justify-center items-center">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/contactus.webp"
              alt="Times Consultant Contact Us Illustration"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Bottom Yellow Contact Info Bar */}
      <section className="bg-amber-400 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-[#3B2063]">
          
          {/* Email */}
          <div className="flex flex-col items-center justify-center gap-1.5 p-2 transition-transform hover:scale-105">
            <div className="p-2 rounded-full bg-[#3B2063]/10">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B2063]" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Email</h3>
            <a 
              href="mailto:info@timesconsultant.com" 
              className="text-xs sm:text-sm font-semibold hover:underline break-all"
            >
              info@timesconsultant.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center gap-1.5 p-2 transition-transform hover:scale-105">
            <div className="p-2 rounded-full bg-[#3B2063]/10">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B2063]" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Phone</h3>
            <a 
              href="tel:+923452066100" 
              className="text-xs sm:text-sm font-semibold hover:underline"
            >
              +92 345 2066 100
            </a>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center justify-center gap-1.5 p-2 sm:col-span-2 md:col-span-1 transition-transform hover:scale-105">
            <div className="p-2 rounded-full bg-[#3B2063]/10">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#3B2063]" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider">Opening Hours</h3>
            <p className="text-xs sm:text-sm font-semibold">
              Mon-Sat: 11 AM - 07 PM
            </p>
          </div>

        </div>
      </section>
    </>
  );
}