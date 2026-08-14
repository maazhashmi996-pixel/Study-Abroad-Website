"use client";
import React from 'react';
import Link from 'next/link';
import { 
  
  Calendar 
} from 'lucide-react'; 
 
export default function RelatedBlogCard({ country, title, desc, date }: { country: string; title: string; desc: string; date: string }) {

 {/* Recent Blogs Carousel / Cards */}
        <section className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">Recent Blogs</span>
              <h3 className="text-2xl font-bold text-slate-900">Journeys of Discovery</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <RelatedBlogCard 
              country="Malaysia"
              title="How to Apply for a Malaysia Study Visa in 2026 from Pakistan"
              desc="Malaysia is a top choice for Pakistani students because of its affordable tuition fees..."
              date="June 15, 2026"
            />
            <RelatedBlogCard 
              country="South Korea"
              title="How to Apply for South Korea Study Visa in 2026 from Pakistan"
              desc="South Korea has become a preferred destination for Pakistani students in a very short time..."
              date="August 4, 2026"
            />
            <RelatedBlogCard 
              country="Austria"
              title="How to Apply for Austria Study Visa in 2026 from Pakistan"
              desc="Austria is one of the most affordable options for students who want a respected European degree..."
              date="July 17, 2026"
            />
          </div>
        </section>


  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div className="p-5">
        <div className="bg-slate-950 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md inline-block mb-3">
          {country}
        </div>
        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-slate-600 transition-colors mb-2">
          {title}
        </h4>
        <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 mb-4">{desc}</p>
      </div>
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
        <span className="font-semibold text-slate-600 group-hover:underline">Read More →</span>
      </div>
    </div>
  );
}