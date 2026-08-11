"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Award,
  Plane,
  Briefcase,
  ShieldCheck,
  FolderCheck,
  CheckCircle2,
  LucideIcon,
  Globe,
  Home,
  Languages,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  features: Feature[];
  icon: LucideIcon;
}

const servicesData: ServiceCardProps[] = [
  {
    title: "Student Visa Services",
    description:
      "Applying for a student visa can be tough. Our expert consultants offer:",
    icon: ShieldCheck,
    features: [
      {
        title: "Visa Application Help",
        description: "Step-by-step guidance to complete your visa application correctly.",
      },
      {
        title: "Interview Practice",
        description:
          "Mock interviews and tips to boost your confidence for the visa interview.",
      },
      {
        title: "Document Preparation",
        description:
          "Assistance in collecting and organizing all necessary documents.",
      },
      {
        title: "Ongoing Support",
        description:
          "Continuous support and updates on your application status until you get your visa.",
      },
    ],
  },
  {
    title: "Admission Guidance",
    description:
      "Getting into a good university needs a strong application. Our services include:",
    icon: GraduationCap,
    features: [
      {
        title: "Application Review",
        description: "Detailed feedback on your application documents.",
      },
      {
        title: "Statement of Purpose (SOP) Writing",
        description: "Guidance on writing an effective and compelling SOP.",
      },
      {
        title: "Recommendation Letters",
        description: "Help in obtaining and preparing recommendation letters.",
      },
      {
        title: "Interview Practice",
        description: "Coaching to help you perform well in university interviews.",
      },
    ],
  },
  {
    title: "University and Course Selection",
    description:
      "Picking the right university and course is important for your studies and future career. We provide:",
    icon: Briefcase,
    features: [
      {
        title: "Personalized Counseling",
        description:
          "One-on-one sessions to understand your interests, strengths, and career goals.",
      },
      {
        title: "University Suggestions",
        description:
          "Recommendations based on your preferences, academic background, and career goals.",
      },
      {
        title: "Application Assistance",
        description:
          "Help with completing and submitting applications to various universities.",
      },
    ],
  },
  {
    title: "Scholarship Assistance",
    description:
      "Are you worried about how to get scholarships to study abroad? We are here to help you:",
    icon: Award,
    features: [
      {
        title: "Scholarship Search",
        description: "Identifying scholarships that match your profile.",
      },
      {
        title: "Application Help",
        description: "Assistance with completing and submitting scholarship applications.",
      },
      {
        title: "Financial Aid Counseling",
        description: "Advice on other financial aid options, such as grants and loans.",
      },
    ],
  },
  {
    title: "Pre-departure Support",
    description:
      "Getting ready to study abroad involves many tasks. We offer:",
    icon: Plane,
    features: [
      {
        title: "Pre-departure Orientation",
        description: "Orientation sessions prior to traveling.",
      },
      {
        title: "Travel Arrangements",
        description:
          "Help with booking flights and arranging airport pickups.",
      },
      {
        title: "Packing Lists",
        description:
          "Detailed lists to ensure you have everything you need for your new life abroad.",
      },
      {
        title: "Cultural Adaptation Guidance",
        description:
          "Tips and insights to help you adjust smoothly to the culture, lifestyle, and social norms of your study destination.",
      },
    ],
  },
  {
    title: "Students Will Need",
    description: "",
    icon: FolderCheck,
    features: [
      {
        title: "Proof of Enrollment",
        description: "",
      },
      {
        title: "Proof of Financial Ability",
        description: "to Afford the Cost of Travel, Course Tuition Fees, and Living Expenses",
      },
      {
        title: "Valid Six-Month Passport",
        description: "Beyond the Length of Stay",
      },
      {
        title: "Evidence of English Language Proficiency",
        description: "may be required",
      },
      {
        title: "Medical Report",
        description: ", Health Examination",
      },
    ],
  },
];

export default function StudyAbroadServices() {
  const pathname = usePathname();

  const sidebarItems = [
    { name: "Study Abroad", icon: Globe, href: "/services/study-abroad" },
    { name: "Accommodation", icon: Home, href: "/services/Accommodation" },
    { name: "Languages", icon: Languages, href: "/services/languages" },
  ];

  return (
    <div className="min-h-screen  text-slate-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-10">
        
        {/* Main Title */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 tracking-tight">
            Our Study Abroad Services
          </h1>
        </div>

        {/* Main Grid: Navigation + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          
          {/* NAVIGATION SIDEBAR */}
          <div className="lg:col-span-1 w-full sticky top-4 sm:top-6 z-20">
            <div className="bg-slate-900 p-2.5 sm:p-4 rounded-2xl shadow-xl border border-slate-800 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2.5 sm:space-x-3 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-left whitespace-nowrap shrink-0 lg:shrink lg:w-full cursor-pointer border ${
                      isActive
                        ? "bg-[#0b5cff] text-white border-blue-400/30 shadow-lg"
                        : "bg-slate-950/60 text-slate-300 border-slate-800/80 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isActive ? "text-white" : "text-[#0b5cff]"}`} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-2xl border border-slate-800 hover:border-[#0b5cff]/50 shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header Box */}
                      <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-xl flex items-center space-x-3 mb-4 group-hover:border-[#0b5cff]/30 transition-colors">
                        <IconComponent className="w-5 h-5 text-[#0b5cff] shrink-0" />
                        <h2 className="text-sm sm:text-base font-bold tracking-wide text-white">
                          {service.title}
                        </h2>
                      </div>

                      {/* Optional Description */}
                      {service.description && (
                        <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                      )}

                      {/* Bullet Items */}
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0b5cff] shrink-0 mt-0.5" />
                            <div className="text-xs sm:text-sm">
                              <span className="font-bold text-slate-200">
                                {feature.title}
                              </span>
                              {feature.description && (
                                <span className="text-slate-400">
                                  {" "}{feature.description}
                                </span>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* LOWER CONTENT SECTION */}
            <div className="pt-6 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-900">
              <p className="font-medium text-slate-700">
                Our study visa consultants will explain the entire procedure and guide you through the document needs following the most recent immigration legislation.
              </p>

              <div className="space-y-3 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-[#0b5cff]">#</span> Why Choose D. Education Zone for Your Student Visa Requirements?
                </h2>

                <p className="text-slate-400">
                  With <strong className="font-bold text-white">over 22 years</strong> of experience in study visa services in Pakistan, we have a proven track record of success. Our expertise guarantees a high acceptance percentage for student visa applications.
                </p>

                <p className="text-slate-400">
                  Thousands of students have trusted D. Education Zone for their study visa applications. Our solid track record for dependability and success makes us the top choice for students looking to study abroad.
                </p>

                <p className="text-slate-400">
                  We acknowledge that each student is unique and offer customized help matching your needs. Our study visa consultants are committed to your success and ready to answer any queries you may have.
                </p>

                <p className="text-slate-400">
                  To enhance your visa application success, consider improving your language proficiency through our{" "}
                  <Link href="/languages" className="text-[#0b5cff] underline font-semibold hover:text-blue-400 transition-colors">
                    Language Test Preparation
                  </Link>
                  , tailored to help you meet the requirements of your study abroad program.
                </p>
              </div>

              <div className="space-y-1.5 pt-2">
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Take the First Step Towards Your International Education Today!
                </h3>
                <p className="text-slate-700">
                  Do not let the complexities of the student visa process hold you back from achieving your academic dreams. Contact D. Education Zone now to schedule your consultation and start your journey to studying abroad with confidence.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}