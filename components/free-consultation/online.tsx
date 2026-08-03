"use client";

import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function OnlineConsultation() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
    

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
              <button className="bg-[#FAA61A] hover:bg-[#43246f] transform duration-500 text-white font-semibold px-8 py-3.5 rounded-md shadow-sm transition-all text-base">
                Learn more
              </button>
            </div>
          </div>

          {/* Graphic / Illustration Placeholder */}
          <div className="relative flex items-center justify-center p-6">
            <div className="w-full max-w-lg aspect-square relative flex items-center justify-center">
              {/* Replace src with your actual illustration asset URL */}
              <Image 
                src="/images/steps/consultation.webp" 
                alt="consultation" 
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