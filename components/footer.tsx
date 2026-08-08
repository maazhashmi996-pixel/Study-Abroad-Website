"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
  };

  return (
    <footer className="bg-[#1a233d] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-b border-slate-800 pb-10">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col gap-4">
            <div className="relative w-48 sm:w-56 h-auto">
              <Image 
                src="/logos/logo2.jpeg"
              alt="Education Zone Logo"
                width={240} 
                height={120} 
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              <strong className="font-semibold text-white">D.Education Zone</strong> – Pakistan’s #1 Study Abroad Consultant, Trusted Since 2004. Official Rep of 3000+ Global Universities.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg text-white tracking-wide  pl-2.5">
              Services
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/study-abroad" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Study Abroad</span>
                </Link>
              </li>
              <li>
                <Link href="/Accommodation" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Accommodations</span>
                </Link>
              </li>
              <li>
                <Link href="/languages" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Languages</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg text-white tracking-wide  pl-2.5">
              Useful Links
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/study-Destination" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Study Destination</span>
                </Link>
              </li>
              <li>
                <Link href="/About" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/Event" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link href="/study-abroad-steps" className="group flex items-center gap-2 text-slate-300 hover:text-[#0b5cff] transition-colors">
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                  <span>Student Guide</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg text-white tracking-wide  pl-2.5">
              Newsletter
            </h2>
            
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+92345678987" className="hover:text-[#0b5cff] transition-colors">+92 345 678987</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:study@d.educationzone.com" className="hover:text-[#0b5cff] transition-colors break-all">
                  education@learn.com
                </a>
              </li>
            </ul>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="relative flex items-center bg-slate-800/80 border border-slate-700 rounded-full p-1 focus-within:border-[#0b5cff] transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-24 py-2 text-xs text-white placeholder-slate-400 bg-transparent rounded-full focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1 bg-[#0b5cff] hover:bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Section: AQF & Logos */}
        <div className="flex flex-col gap-6 text-xs text-slate-400">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Agent Quality Framework (AQF) Compliance
            </h3>
            <p className="leading-relaxed text-slate-300">
              D.Education Zone is committed to upholding the highest standards in international student recruitment. We adhere to the principles of the Agent Quality Framework (AQF), ensuring ethical practices, transparency, and professionalism in all our services. Our agents are trained and certified to provide accurate and reliable guidance to students.
            </p>
          </div>

          {/* Partner & Certification Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center pt-2">
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/f.png" alt="AQF Logo 1" width={120} height={60} className="h-10 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/l.png" alt="AQF Logo 2" width={120} height={60} className="h-10 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/m.png" alt="AQF Logo 3" width={120} height={60} className="h-10 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/v.png" alt="AQF Logo 4" width={120} height={60} className="h-10 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/award.png" alt="Award Logo" width={120} height={60} className="h-10 object-contain" />
            </div>
            <div className="bg-white/5 border border-white/10 p-2 rounded-xl w-full flex justify-center hover:border-white/20 transition-colors">
              <Image src="/logos/Worlds-No1-Partner.png" alt="World's No 1 Partner Logo" width={120} height={60} className="h-10 object-contain" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}