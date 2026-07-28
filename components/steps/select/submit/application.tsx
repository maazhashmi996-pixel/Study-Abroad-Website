"use client";

import Image from "next/image";

import React from "react";
import {
  GraduationCap,
  FileCheck,
  Globe,
  FileText,
  UserCheck,
  Award,
  HelpCircle,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function Submit() {
  const prerequisites = [
    {
      title: "Shortlisted programs and universities",
      desc: "You should not be applying randomly. By Step 2, you should already know 'I'm applying to Program X at University Y for Intake Z.'",
      icon: GraduationCap,
    },
    {
      title: "Your academic documents ready to upload",
      desc: "Transcripts, mark sheets, degree certificates, provisional certificates.",
      icon: FileCheck,
    },
    {
      title: "Your English language test status",
      desc: "IELTS / PTE / TOEFL score, or a clear plan if the university accepts 'English as Medium of Instruction' instead for certain countries/programs.",
      icon: Globe,
    },
    {
      title: "A valid passport scan",
      desc: "Many universities require passport ID pages when you apply.",
      icon: FileText,
    },
    {
      title: "Statement of Purpose / Personal Statement (if required)",
      desc: "Some programs (especially postgraduate) need to understand 'Why this course?' and 'Why now?'",
      icon: FileText,
    },
    {
      title: "CV / Resume (for postgraduate / professional programs)",
      desc: "Especially important for MBAs, Masters with industry focus, etc.",
      icon: UserCheck,
    },
    {
      title: "Referee details / recommendation letters (if needed)",
      desc: "Some schools ask for academic or professional references at the application stage.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* TOP HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3B1E54] tracking-tight">
              Submit Your Application
            </h1>

            <div className="space-y-3 pt-2">
              <h2 className="text-lg sm:text-xl font-bold text-[#3B1E54]">
                Why this step matters
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This is the stage where your profile becomes official in front of the university.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submitting your application is not “just filling a form.” It’s how you convince an admissions team that:
              </p>

              <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-[#3B1E54] font-medium">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B1E54] flex-shrink-0" />
                  <span>You're academically eligible,</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B1E54] flex-shrink-0" />
                  <span>You're serious about this intake,</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B1E54] flex-shrink-0" />
                  <span>And you can actually join the program on time.</span>
                </li>
              </ul>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                If you do this step properly, you receive an offer letter (conditional or unconditional). If you do this step weakly or with missing documents, you lose time, and in some cases you're rejected for the entire intake.
              </p>
            </div>
          </div>

          {/* Right Hero Graphic Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-sky-50 rounded-3xl p-6 flex items-center justify-center border border-sky-100 shadow-sm">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 w-full text-center space-y-3">
                <div className="w-16 h-16 bg-[#3B1E54] text-[#ECA82C] rounded-2xl mx-auto flex items-center justify-center shadow">
                  <Search className="w-8 h-8" />
                </div>
                <div className="w-full">
                <Image
                      src="/images/steps/2.png"
                      alt="2"
                    width={500}
                    height={200}
                      className="object-cover"
                    />
              </div>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER WITH STAR */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs">★</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* WHAT YOU NEED BEFORE STARTING SECTION */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-[#3B1E54]">
              What you need before starting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Before you submit any university application, you should already have:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 8 Cards Grid (2 columns on medium+) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {prerequisites.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border-2 border-[#3B1E54] p-5 rounded-2xl shadow-sm space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <Icon className="w-6 h-6 text-[#3B1E54]" />
                      <h3 className="font-extrabold text-xs sm:text-sm text-[#3B1E54]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* 8th Warning / Advisory Box */}
              <div className="bg-slate-50 border-2 border-slate-300 p-5 rounded-2xl flex flex-col justify-center">
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  If these are not ready, pause. Submitting a half-ready application is worse than waiting 1-2 days and submitting a clean, complete file. Need help? Book a free online consultation today!
                </p>
              </div>

            </div>

            {/* Right Side Graduation Student Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-amber-50/60 rounded-3xl border border-amber-100 text-center space-y-4">
              <div className="w-20 h-20 bg-[#3B1E54] text-[#ECA82C] rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-[#3B1E54]">
                  Ready for Submission?
                </h3>
                <p className="text-xs text-slate-600">
                  Let Times Consultant double-check your application documents for maximum success rate.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}