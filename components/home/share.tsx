
"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  MessageCircle,
} from "lucide-react";

export default function Share() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    destination: "",
    city: "",
    counsellingMode: "",
    studyLevel: "",
    question: "",
    agreeTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);
  };

  return (
    <section className="relative overflow-hidden bg-[#1a233d] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#0b5cff]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#0b5cff]/15 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="text-center lg:text-left">

          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-sm">
            <MessageCircle className="h-4 w-4 text-[#0b5cff]" />
            Free Consultation
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xl font-black text-[#0b5cff] sm:text-2xl">
                65+
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Countries
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xl font-black text-[#0b5cff] sm:text-2xl">
                3000+
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Universities
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xl font-black text-[#0b5cff] sm:text-2xl">
                3.4M+
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Programs
              </p>
            </div>

          </div>

          {/* Heading */}
          <div className="mt-8">

            <p className="text-base font-semibold text-[#0b5cff] sm:text-lg">
              Not Sure Where to Begin?
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Let our education experts guide you towards the right
              destination, university and program.
            </p>

          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Share Your Details.
            <span className="block text-[#0b5cff]">
              We'll Help You Plan Your Future.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 lg:mx-0 sm:text-base">
            Tell us about your study plans and our team will help you
            understand your options and next steps.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-3">

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0b5cff]" />
              <span className="text-sm text-slate-200">
                Personalized study guidance
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0b5cff]" />
              <span className="text-sm text-slate-200">
                University and course selection support
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0b5cff]" />
              <span className="text-sm text-slate-200">
                Application and visa guidance
              </span>
            </div>

          </div>

        </div>

        {/* =====================================================
            FORM CARD
        ===================================================== */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-3 rounded-[2rem] bg-[#0b5cff]/10 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white p-5 shadow-2xl sm:p-7 lg:p-8">

            {/* Form Header */}
            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b5cff]/10 text-[#0b5cff]">
                <Globe2 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#1a233d]">
                  Get Free Consultation
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Fill in your details and we'll contact you.
                </p>
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >

              {/* Full Name */}
              <div className="sm:col-span-2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                />
              </div>

              {/* Mobile */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number *"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                />
              </div>

              {/* Destination */}
              <div>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                >
                  <option value="" disabled>
                    Preferred Study Destination
                  </option>

                  <option value="uk">United Kingdom</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="finland">Finland</option>
                  <option value="hungary">Hungary</option>
                  <option value="cyprus">Cyprus</option>
                </select>
              </div>

              {/* City */}
              <div>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                >
                  <option value="" disabled>
                    Select City
                  </option>

                  <option value="lahore">Lahore</option>
                  <option value="karachi">Karachi</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Counselling Mode */}
              <div>
                <select
                  name="counsellingMode"
                  value={formData.counsellingMode}
                  onChange={handleChange}
                  required
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                >
                  <option value="" disabled>
                    Preferred Counselling Mode
                  </option>

                  <option value="online">Online</option>
                  <option value="office">In-Office</option>
                </select>
              </div>

              {/* Study Level */}
              <div>
                <select
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleChange}
                  required
                  className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                >
                  <option value="" disabled>
                    Preferred Study Level
                  </option>

                  <option value="undergraduate">
                    Undergraduate
                  </option>

                  <option value="postgraduate">
                    Postgraduate
                  </option>

                  <option value="doctorate">
                    Doctorate
                  </option>
                </select>
              </div>

              {/* Question */}
              <div className="sm:col-span-2">
                <textarea
                  name="question"
                  rows={4}
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Ask Your Question"
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-[#1a233d] outline-none transition-all placeholder:text-slate-400 focus:border-[#0b5cff] focus:bg-white focus:ring-4 focus:ring-[#0b5cff]/10"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 sm:col-span-2">

                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#0b5cff]"
                />

                <label
                  htmlFor="agreeTerms"
                  className="cursor-pointer text-xs leading-5 text-slate-500"
                >
                  By selecting this, you agree to D.Education Zone's{" "}
                  <a
                    href="/privacy-policy"
                    className="font-semibold text-[#0b5cff] underline underline-offset-2 hover:text-[#1a233d]"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="/terms-and-conditions"
                    className="font-semibold text-[#0b5cff] underline underline-offset-2 hover:text-[#1a233d]"
                  >
                    Terms & Conditions
                  </a>
                  . You agree to be contacted by phone, email or
                  messages.
                </label>

              </div>

              {/* Submit */}
              <div className="pt-2 sm:col-span-2">

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0b5cff] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0b5cff]/20 transition-all duration-300 hover:bg-[#1a233d] hover:shadow-xl active:scale-[0.98] sm:w-auto"
                >
                  <span>Submit Request</span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
