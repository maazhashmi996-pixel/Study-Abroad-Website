"use client";

import { 
  GraduationCap, 
  Users, 
  FileText, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

export default function Explore() {
  return (
    <div className="w-full font-sans bg-amber-500 text-slate-800">
      {/* Hero Header Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Explore Our Upcoming Events: Your Guide to What's Next
        </h1>
        <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-2 rounded-md text-sm transition-colors mb-12">
          View All Events
        </button>

        {/* 2x2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-900 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-purple-950 mb-3">
              Personalised UG & PG Admission Strategies
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you've recently graduated Matric/O-Levels or are pursuing a Master's degree, our Expo caters to all levels of education. Our counselors will advise you through program selection, matching courses to your background and goals, and highlighting high-demand, globally competitive fields to help you succeed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-900 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-purple-950 mb-3">
              Meet University Delegate
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              No middle person, just officials who set the admission rules. Ask them about:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Course features & teaching style</li>
              <li>What makes an applicant stand out</li>
              <li>Life on campus, accommodation, social life, and part-time work</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-900 mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-purple-950 mb-3">
              Financial & Scholarship Support
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Incomplete or late applications can miss out on opportunities. At the Expo, you'll learn:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Which documents are mandatory for admission and a visa</li>
              <li>How to write standout personal statements and secure references</li>
              <li>When to apply to maximize acceptance</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-start">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-900 mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-purple-950 mb-3">
              Documents & Application Game Plan
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Incomplete or late applications can miss out on opportunities. At the Expo, you'll learn:
            </p>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
              <li>Which documents are mandatory for admission and a visa</li>
              <li>How to write standout personal statements and secure references</li>
              <li>When to apply to maximize acceptance</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Expo Expectation Section */}
      <section className="bg-white/90 py-10 px-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side: Text and Checklist */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-950 mb-6">
              What to Expect at the D.Education Zone Study Abroad Expo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 shrink-0 mt-0.5" />
                <span>What to Expect at the D.Education Zone Study Abroad Expo</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 shrink-0 mt-0.5" />
                <span>Expert Guidance on Course Selection & Applications</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 shrink-0 mt-0.5" />
                <span>Free Visa Support from Overseas Educational Counsellors</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 shrink-0 mt-0.5" />
                <span>On-the-Spot Admissions & Offers</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-900 shrink-0 mt-0.5" />
                <span>Learn About the 2-Year Post-Study Work Visa (PSW)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Illustration Placeholder */}
          
            <div className="
        ">
              <img 
                src="/images/events/Top-Study.jpg" 
                alt="Top-Study" 
                width={500}
                height={400}
                className="mx-auto rounded object-cover"
              />
            </div>
          
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link href="/get" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs px-6 py-2.5 rounded shadow transition-colors">
            Reserve Your Seat
          </Link>
        </div>
      </section>

     
    </div>
  );
}