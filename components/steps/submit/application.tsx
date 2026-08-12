"use client";

import React from "react";
import Image from "next/image";

import {
  GraduationCap,
  FileCheck,
  Globe,
  FileText,
  UserCheck,
  Award,
  CheckCircle2,
} from "lucide-react";

interface PrerequisiteItem {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export default function Submit() {
  const prerequisites: PrerequisiteItem[] = [
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
    <main className="min-h-screen bg-slate-50 text-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
        
        {/* TOP HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Submit Your <span className="text-blue-600">Application</span>
            </h1>

            <div className="space-y-3 pt-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Why this step matters
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This is the stage where your profile becomes official in front of the university.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Submitting your application is not &quot;just filling a form.&quot; It&apos;s how you convince an admissions team that:
              </p>

              <ul className="space-y-2 text-left max-w-md mx-auto sm:mx-0 text-xs sm:text-sm text-slate-900 font-semibold pt-1">
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>You&apos;re academically eligible,</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>You&apos;re serious about this intake,</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>And you can actually join the program on time.</span>
                </li>
              </ul>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                If you do this step properly, you receive an offer letter (conditional or unconditional). If you do this step weakly or with missing documents, you lose time, and in some cases you&apos;re rejected for the entire intake.
              </p>
            </div>
          </div>

          {/* Right Hero Graphic Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-xs sm:max-w-md aspect-[4/3] bg-white rounded-3xl p-4 border border-slate-200/80 shadow-sm">
              <Image
                src="/images/steps/istock.jpg"
                alt="Application submission"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-contain p-2"
              />
            </div>
          </div>

        </section>

        {/* DIVIDER WITH STAR */}
        <div className="relative flex py-2 items-center" aria-hidden="true">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="shrink-0 mx-4 text-slate-400 text-xs">★</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        {/* WHAT YOU NEED BEFORE STARTING SECTION */}
        <section className="space-y-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              What you need <span className="text-blue-600">before starting</span>
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
                    className="bg-white border border-slate-200 hover:border-blue-500/60 p-5 rounded-2xl shadow-sm space-y-3 flex flex-col justify-between hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="space-y-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                        <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-200" />
                      </div>
                      <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
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
              <div className="bg-red-50/60 border border-red-200 border-l-4 border-l-red-600 p-5 rounded-r-2xl rounded-l-md flex flex-col justify-center space-y-2">
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  If these are not ready, pause. Submitting a half-ready application is worse than waiting 1-2 days and submitting a clean, complete file. Need help?{" "}
                  <strong className="text-red-600 underline cursor-pointer hover:text-red-700">
                    Book a free online consultation today!
                  </strong>
                </p>
              </div>

            </div>

            {/* Right Side Graduation Student Graphic */}
            <div className="lg:col-span-4 flex justify-center items-center p-6 bg-white rounded-3xl border border-slate-200 shadow-sm lg:sticky lg:top-8">
              <div className="relative w-full max-w-xs aspect-square">
                <Image
                  src="/images/steps/submit.jpg"
                  alt="submit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}