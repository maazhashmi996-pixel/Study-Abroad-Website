"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function OnlineConsultation() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header / Navbar */}
      <header className="w-full border-b border-gray-100 py-3 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="font-extrabold text-2xl tracking-tight text-[#2B1C54] flex flex-col leading-none">
            <span>TIMES</span>
            <span className="text-xs tracking-widest text-amber-500 font-semibold">CONSULTANT</span>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden lg:flex items-center space-x-6 bg-[#38236B] text-white px-8 py-3 rounded-full text-sm font-medium shadow-md">
          <Link href="#" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">About</Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-amber-400 transition-colors">
            <span>Services</span>
            <span className="text-xs">▼</span>
          </div>
          <Link href="#" className="hover:text-amber-400 transition-colors">Blogs</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Events</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Our Offices</Link>
          <Link href="#" className="hover:text-amber-400 transition-colors">Study Destinations</Link>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-amber-400 transition-colors">
            <span>Study Abroad Steps</span>
            <span className="text-xs">▼</span>
          </div>
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center space-x-4">
          <a href="tel:+923452066100" className="hidden sm:flex items-center text-xs md:text-sm font-semibold text-slate-700 hover:text-[#38236B]">
            <Phone className="w-4 h-4 mr-1 text-amber-500" />
            +92 345 2066 100
          </a>
          <button className="bg-[#38236B] hover:bg-[#2b1b54] text-white text-xs md:text-sm px-4 py-2.5 rounded-full font-medium transition-all shadow-sm">
            Get Free Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#38236B] leading-tight">
              Book an Online Consultation with Our Overseas Education Consultants
            </h1>
            
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Times Consultant's online overseas education consultants help you plan your studies abroad from wherever you are. In a one-on-one video consultation, our experienced counselors review your academic background and goals, shortlist universities and courses that genuinely fit your profile, and walk you through applications, scholarships, and the student visa process step by step. Sessions are scheduled around your availability, so you receive clear, personalized advice without the guesswork of searching alone. Book your online consultation today and take a confident first step toward studying overseas.
            </p>

            <div className="pt-2">
              <button className="bg-[#FAA61A] hover:bg-[#e09313] text-white font-semibold px-8 py-3.5 rounded-md shadow-sm transition-all text-base">
                Learn more
              </button>
            </div>
          </div>

          {/* Graphic / Illustration Placeholder */}
          <div className="relative flex items-center justify-center p-6">
            <div className="w-full max-w-lg aspect-square relative flex items-center justify-center">
              {/* Replace src with your actual illustration asset URL */}
              <Image 
                src="/consultation-illustration.svg" 
                alt="Online Overseas Education Consultation Illustration" 
                width={500}
                height={500}
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </main>

      {/* Floating Action Buttons / Cookie Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 text-white text-xs py-3 px-6 flex items-center justify-between z-50">
        <p className="text-gray-300">
          We use cookies to improve your experience and track campaign performance.{' '}
          <Link href="#" className="underline text-gray-400 hover:text-white">Learn more</Link>
        </p>
        <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-4 py-1.5 rounded text-xs border border-gray-700">
          Decline
        </button>
      </div>
    </div>
  );
}