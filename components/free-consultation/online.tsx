"use client";

import Image from 'next/image';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function OnlineConsultation() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-6">
            
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-4 py-2 border-l-4 border-[#ef4444]">
              <span>Online Overseas Guidance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              Book an Online Consultation with Our <span className="text-[#0b5cff]">Education Consultants</span>
            </h1>
            
            {/* Lead Paragraph */}
            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
              D. Education Zone&apos;s online overseas education consultants help you plan your studies abroad from wherever you are. In a one-on-one video consultation, our experienced counselors review your academic background and goals, shortlist universities and courses that genuinely fit your profile, and walk you through applications, scholarships, and the student visa process step by step.
            </p>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-slate-700 text-sm font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ef4444]" />
                <span>1-on-1 Video Session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0b5cff]" />
                <span>Visa & Application Roadmap</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
             
              
              <a 
                href="tel:+923452066100" 
                className="inline-flex items-center gap-2 text-slate-900 hover:text-[#0b5cff] font-black text-xs uppercase tracking-wider px-6 py-4 border-2 border-slate-300 hover:border-[#0b5cff] bg-white transition-all"
              >
                <Phone className="w-4 h-4 text-[#ef4444]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Graphic / Illustration Card */}
          <div className="relative flex items-center justify-center p-6 bg-slate-100 border-b-8 border-[#0b5cff] rounded-none shadow-sm">
            <div className="w-full max-w-lg aspect-square relative flex items-center justify-center">
              <Image 
                src="/images/home/online.jpg" 
                alt="Online Consultation" 
                width={500}
                height={500}
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}