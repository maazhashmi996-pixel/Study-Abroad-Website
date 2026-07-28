"use client";

import React, { useState } from "react";
import {
  FileText,
  UserCheck,
  FolderCheck,
  CheckCircle2,
  GraduationCap,
  Award,
  Plane,
  Briefcase,
  ShieldCheck,
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
        description: "Pre-departure Orientation.",
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
        title: "Evidence of your English Language Proficiency",
        description: "may be Require",
      },
      {
        title: "Medical Report",
        description: ", Health Examination",
      },
    ],
  },
];

export default function StudyAbroadServices() {
  const [activeTab, setActiveTab] = useState("Study Abroad");

  const sidebarItems = [
    { name: "Study Abroad", icon: Globe },
    { name: "Accommodations", icon: Home },
    { name: "Languages", icon: Languages },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#3B1E54] tracking-tight text-center md:text-left">
          Our Study Abroad Services
        </h1>

        {/* Main Grid: Left Navigation + Right Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT SIDEBAR NAVIGATION */}
          <div className="lg:col-span-1">
            <div className="bg-[#3B1E54] p-4 rounded-2xl shadow-md space-y-3 sticky top-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 text-left ${
                      isActive
                        ? "bg-[#ECA82C] text-[#3B1E54] shadow"
                        : "bg-white text-[#3B1E54] hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT AREA: ALL 6 CARDS */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicesData.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header Header Box */}
                      <div className="bg-[#3B1E54] text-white p-3.5 rounded-xl flex items-center space-x-3 mb-4">
                        <IconComponent className="w-5 h-5 text-[#ECA82C] flex-shrink-0" />
                        <h2 className="text-base font-bold tracking-wide">
                          {service.title}
                        </h2>
                      </div>

                      {/* Optional Description */}
                      {service.description && (
                        <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                          {service.description}
                        </p>
                      )}

                      {/* Bullet Items */}
                      <ul className="space-y-3">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start space-x-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#3B1E54] flex-shrink-0 mt-0.5" />
                            <div className="text-xs sm:text-sm">
                              <span className="font-bold text-slate-800">
                                {feature.title}
                              </span>
                              {feature.description && (
                                <span className="text-slate-600">
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

            {/* LOWER CONTENT / COPYWRITING SECTION */}
            <div className="pt-6 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
              <p className="font-medium text-slate-900">
                Our study visa consultants will explain the entire procedure and guide you through the document needs following the most recent immigration legislation.
              </p>

              <div className="space-y-3">
                <h2 className="text-lg sm:text-xl font-bold text-[#3B1E54]">
                  Why Choose Times Consultant for Your Student Visa Requirements?
                </h2>

                <p>
                  With <strong className="font-semibold text-slate-900">over 22 years</strong> of experience in study visa services in Pakistan, we have a proven track record of success. Our expertise guarantees a high acceptance percentage for student visa applications.
                </p>

                <p>
                  Thousands of students have trusted Times Consultant for their study visa applications. Our solid track record for dependability and success makes us the top choice for students looking to study abroad.
                </p>

                <p>
                  We acknowledge that each student is unique and offer customized help matching your needs. Our study visa consultants are committed to your success and ready to answer any queries you may have.
                </p>

                <p>
                  To enhance your visa application success, consider improving your language proficiency through our{" "}
                  <a href="#" className="text-blue-600 underline font-medium hover:text-blue-800">
                    Language Test Preparation
                  </a>
                  , tailored to help you meet the requirements of your study abroad program.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="text-base font-bold text-[#3B1E54]">
                  Take the First Step Towards Your International Education Today!
                </h3>
                <p>
                  Do not let the complexities of the student visa process hold you back from achieving your academic dreams. Contact Times Consultant now to schedule your consultation and start your journey to studying abroad with confidence.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}