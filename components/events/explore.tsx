"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  DollarSign, 
  CheckCircle2 
} from 'lucide-react';

export default function Explore() {
  return (
    <div className="w-full font-sans  text-slate-800">
      {/* Hero Header Section */}
      <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0b5cff]  px-3.5 py-1 rounded-full inline-block mb-3 border border-slate-800">
          D. Education Zone Events <span className="text-red-500">•</span>
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
          Explore Our Upcoming Events: <span className="text-[#0b5cff]">Your Guide to What's Next</span>
        </h1>
        <Link 
          href="/view"
          className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg inline-block mb-10 uppercase tracking-wider border border-blue-400/20"
        >
          View All Events
        </Link>

        {/* 2x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-md border border-slate-800 hover:border-[#0b5cff]/50 transition-all flex flex-col items-start group">
            <div className="p-3 bg-[#0b5cff]/10 rounded-xl text-[#0b5cff] mb-4 group-hover:bg-[#0b5cff] group-hover:text-white transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#0b5cff] transition-colors">
              Personalised UG & PG Admission Strategies
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Whether you've recently completed Matric/O-Levels, Intermediate/A-Levels, or are seeking a Master's degree, our Expo caters to all education levels. Our counselors match courses to your academic background and global career goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-md border border-slate-800 hover:border-[#0b5cff]/50 transition-all flex flex-col items-start group">
            <div className="p-3 bg-[#0b5cff]/10 rounded-xl text-[#0b5cff] mb-4 group-hover:bg-[#0b5cff] group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#0b5cff] transition-colors">
              Meet University Delegates Directly
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
              No middle persons—interact directly with official admissions representatives. Get direct answers on:
            </p>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-2 list-disc list-inside">
              <li>Course curricula and specialized majors</li>
              <li>How to build a standout profile for high acceptance</li>
              <li>Campus facilities, housing, and part-time work options</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-md border border-slate-800 hover:border-[#0b5cff]/50 transition-all flex flex-col items-start group">
            <div className="p-3 bg-[#0b5cff]/10 rounded-xl text-[#0b5cff] mb-4 group-hover:bg-[#0b5cff] group-hover:text-white transition-colors">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#0b5cff] transition-colors">
              Financial & Scholarship Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
              Make international education affordable with D. Education Zone guidance:
            </p>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-2 list-disc list-inside">
              <li>Exclusive merit-based and partial scholarships</li>
              <li>Application fee waivers for event participants</li>
              <li>Proof-of-funds and financial documentation assistance</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-md border border-slate-800 hover:border-[#0b5cff]/50 transition-all flex flex-col items-start group">
            <div className="p-3 bg-[#0b5cff]/10 rounded-xl text-[#0b5cff] mb-4 group-hover:bg-[#0b5cff] group-hover:text-white transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#0b5cff] transition-colors">
              Documents & Application Game Plan
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3">
              Avoid delays and missing key intakes by preparing ahead. Learn:
            </p>
            <ul className="text-xs sm:text-sm text-slate-400 space-y-2 list-disc list-inside">
              <li>Mandatory documents required for admission and visas</li>
              <li>How to craft winning Personal Statements & LORs</li>
              <li>Application timelines to maximize acceptance chances</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Expo Expectation Section */}
      <section className=" py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side: Text and Checklist */}
          <div className="flex-1">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0b5cff]  px-3.5 py-1 rounded-full inline-block mb-3 border border-slate-800">
              Expo Highlights <span className="text-red-500">•</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 mb-6">
              What to Expect at the D. Education Zone Study Abroad Expo
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b5cff] shrink-0 mt-0.5" />
                <span>Direct University Representation & Networking</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b5cff] shrink-0 mt-0.5" />
                <span>Expert Guidance on Course & University Selection</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b5cff] shrink-0 mt-0.5" />
                <span>Free Visa & Counseling Support from Senior Advisors</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0b5cff] shrink-0 mt-0.5" />
                <span>On-the-Spot Profile Evaluations & Offer Letters</span>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Insights into Post-Study Work Visas (PSW) & Overseas Career Pathways</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-left">
              <Link 
                href="/get" 
                className="bg-[#0b5cff] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 inline-block uppercase tracking-wider border border-blue-400/20"
              >
                Reserve Your Seat Now
              </Link>
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <Image 
                src="/images/services/photo.jpg" 
                alt="Top Study Destinations - D. Education Zone" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}