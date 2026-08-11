'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <>
      {/* Top Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12 bg-black text-white">
        
        {/* Left Text Area */}
        <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4 w-full z-10">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]">
              Student Support Center
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight sm:leading-snug">
            Contact Our Student Visa <br className="hidden sm:inline" />
            Consultants Near You
          </h1>
          
          <p className="text-[#0b5cff] font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase sm:normal-case">
            Always on the lookout for a better way
          </p>

          <p className="text-slate-400 max-w-lg mx-auto md:mx-0 text-xs sm:text-sm md:text-base leading-relaxed">
            Our team at D. Education Zone is here to help you with course selection,
            applications, visa support, and every step of your study abroad journey.
            Reach out to us anytime, we&apos;re just a message away!
          </p>

          <div className="pt-2">
            <Link
              href="#contact-form"
              className="inline-block bg-[#0b5cff] hover:bg-blue-600 text-white font-extrabold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg border border-blue-400/20 text-xs sm:text-sm uppercase tracking-wider active:scale-95 cursor-pointer"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Graphic/Illustration Area */}
        <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-lg flex justify-center items-center z-10">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 shadow-2xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/images/home/contactus.webp"
                alt="D. Education Zone Contact Us Illustration"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                className="object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Contact Info Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-white">
          
          {/* Email */}
          <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 transition-all duration-300 hover:border-[#0b5cff]/50 hover:scale-105">
            <div className="p-3 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b5cff]" />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-300">Email</h3>
            <a 
              href="mailto:info@timesconsultant.com" 
              className="text-xs sm:text-sm font-semibold text-white hover:text-[#0b5cff] transition-colors break-all"
            >
              info@timesconsultant.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 transition-all duration-300 hover:border-[#0b5cff]/50 hover:scale-105">
            <div className="p-3 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b5cff]" />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-300">Phone</h3>
            <a 
              href="tel:+923452066100" 
              className="text-xs sm:text-sm font-semibold text-white hover:text-[#0b5cff] transition-colors"
            >
              +92 345 2066 100
            </a>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 sm:col-span-2 md:col-span-1 transition-all duration-300 hover:border-[#0b5cff]/50 hover:scale-105">
            <div className="p-3 rounded-xl bg-[#0b5cff]/10 border border-[#0b5cff]/20">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b5cff]" />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-slate-300">Opening Hours</h3>
            <p className="text-xs sm:text-sm font-semibold text-white">
              Mon-Sat: 11 AM - 07 PM
            </p>
          </div>

        </div>
      </section>
    </>
  );
}