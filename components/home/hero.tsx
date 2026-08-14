
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Globe2,
  FileCheck2,
  Plane,
  Building2,
  Languages,
  ShieldCheck,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

  const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

export default function Home() {
  

  const services = [
    {
      icon: GraduationCap,
      title: "Study Abroad",
      description:
        "Get guidance to choose the right country, university and program according to your goals.",
      href: "/services/study-abroad",
    },
    {
      icon: FileCheck2,
      title: "Admission Guidance",
      description:
        "Get support throughout your university application and admission process.",
      href: "/guidance",
    },
    {
      icon: ShieldCheck,
      title: "Visa Guidance",
      description:
        "Prepare your student visa application with proper documentation and guidance.",
      href: "/study-abroad-steps/apply-for-visa",
    },
    {
      icon: Building2,
      title: "Accommodation",
      description:
        "Find suitable accommodation options for your international study journey.",
      href: "/services/Accommodation",
    },
    {
      icon: Languages,
      title: "Language Support",
      description:
        "Improve your language skills and prepare for your international education journey.",
      href: "/services/languages",
    },
    {
      icon: Plane,
      title: "Pre-Departure Support",
      description:
        "Get practical guidance before travelling and starting your studies abroad.",
      href: "/departure",
    },
  ];

 

  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Students Guided",
    },
    {
      icon: GraduationCap,
      number: "50+",
      label: "Universities",
    },
    {
      icon: Globe2,
      number: "10+",
      label: "Study Destinations",
    },
    {
      icon: Award,
      number: "95%",
      label: "Student Satisfaction",
    },
  ];

  return (
    <main className="bg-white text-[#1a233d]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#1a233d]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a233d] via-[#17294d] to-[#0b5cff]/80" />

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0b5cff]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#0b5cff]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
              <Globe2 className="h-4 w-4 text-[#0b5cff]" />
              Your Journey. Our Guidance.
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your Future
              <span className="block text-[#0b5cff]">Starts Here.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-200 sm:text-base lg:mx-0 lg:text-lg">
              Turn your dream of studying abroad into reality with
              D.Education Zone. Get expert guidance for universities,
              admissions, visas and your complete international education
              journey.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/free-consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0b5cff]/20 transition-all hover:bg-white hover:text-[#1a233d]"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/study-Destination"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#1a233d]"
              >
                Explore Destinations
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-300 lg:justify-start">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0b5cff]" />
                Expert Guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0b5cff]" />
                University Support
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0b5cff]" />
                Visa Guidance
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#0b5cff]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/home/first.jpg"
                  alt="first"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a233d]/70 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#1a233d]/80 p-4 text-white backdrop-blur-md">
                  <p className="text-xs text-slate-300">
                    Start your international education journey
                  </p>
                  <p className="mt-1 text-lg font-bold">
                    Study. Grow. Succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="relative z-10 -mt-8 px-4">
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-100 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="border-b border-slate-100 p-5 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <Icon className="mx-auto h-6 w-6 text-[#0b5cff]" />

                <h3 className="mt-2 text-2xl font-black text-[#1a233d]">
                  {stat.number}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#0b5cff]">
              What We Do
            </span>

            <h2 className="mt-2 text-3xl font-black text-[#1a233d] sm:text-4xl">
              Complete Support For Your Study Abroad Journey
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              From selecting a university to preparing for your journey,
              D.Education Zone is here to guide you through every important
              step.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0b5cff]/30 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff] transition-colors group-hover:bg-[#0b5cff] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#1a233d]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#0b5cff]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="bg-[#1a233d] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#0b5cff]">
              Why D.Education Zone
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Guidance That Keeps Your Journey Simple
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              Studying abroad involves many decisions. We help you understand
              your options and move through each stage with confidence.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Personalized guidance according to your academic goals",
                "Support with university and course selection",
                "Application and documentation assistance",
                "Student visa guidance",
                "Pre-departure support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b5cff]" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/About"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b5cff] px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#1a233d]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: BookOpen,
                title: "Right Program",
                text: "Find programs aligned with your goals.",
              },
              {
                icon: GraduationCap,
                title: "Right University",
                text: "Explore suitable university options.",
              },
              {
                icon: FileCheck2,
                title: "Application Help",
                text: "Get support with your application.",
              },
              {
                icon: Globe2,
                title: "Global Options",
                text: "Explore multiple destinations.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b5cff]/15 text-[#0b5cff]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-bold">{item.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

   

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1a233d] to-[#0b5cff] px-6 py-12 text-center text-white sm:px-10 lg:px-16">
          <Globe2 className="mx-auto h-10 w-10 text-white/90" />

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Ready To Start Your Study Abroad Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Talk to D.Education Zone and get guidance for your next academic
            step.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/free-consultation"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1a233d]  hover:bg-[#0b5cff] hover:text-white transition duration-500"
            >
              Get Free Consultation
            </Link>

             <button
        type="button"
        onClick={() => openWhatsApp("923452066100", "Hi, I clicked Contact Us!")}
        className="bg-[#0b5cff] hover:bg-white hover:text-slate-700 text-white transition duration-500 border-white font-semibold text-sm px-7 py-3.5 rounded-full  shadow-md"
      >
        Contact Us
      </button>
          </div>
        </div>
      </section>
    </main>
  );
}
