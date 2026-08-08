"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-8xl mx-auto h-20 flex items-center px-4 sm:px-6 justify-between">
        {/* 1. Logo */}
        <div className="relative z-10 flex-shrink-0">
          <Link href="/">
            <Image
              src="/logos/logo2.jpeg"
              alt="Education Zone Logo"
              width={125}
              height={125}
              className="object-contain"
            />
          </Link>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-slate-100/80 border border-slate-200/60 rounded-full px-6 py-2.5">
          <ul className="flex items-center gap-5 text-xs font-semibold text-slate-700 px-4">
            <li>
              <Link
                href="/Home"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/Home" ? "text-[#0b5cff]" : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/About" ? "text-[#0b5cff]" : ""
                }`}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 transition-colors duration-200 hover:text-[#0b5cff]"
              >
                <span>Services</span>
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-48 rounded-xl bg-white border border-slate-100 shadow-xl z-[9999] p-3 flex flex-col gap-2 text-xs font-medium text-slate-700">
                  <Link
                    href="/Accommodation"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                  >
                    Accommodation
                  </Link>
                  <Link
                    href="/study-abroad"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                  >
                    Study Abroad
                  </Link>
                  <Link
                    href="/languages"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-1.5 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                  >
                    Languages
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/Blog"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/Blog" ? "text-[#0b5cff]" : ""
                }`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/Event"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/Event" ? "text-[#0b5cff]" : ""
                }`}
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/our-offices"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/our-offices" ? "text-[#0b5cff]" : ""
                }`}
              >
                Our Offices
              </Link>
            </li>

            <li>
              <Link
                href="/study-Destination"
                className={`transition-colors duration-200 hover:text-[#0b5cff] ${
                  pathname === "/study-Destination" ? "text-[#0b5cff]" : ""
                }`}
              >
                Study Destination
              </Link>
            </li>

            {/* Study Abroad Steps Dropdown */}
            <li className="relative group">
              <Link
                href="/study-abroad-steps"
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  pathname === "/study-abroad-steps"
                    ? "text-[#0b5cff]"
                    : "hover:text-[#0b5cff]"
                }`}
              >
                <span>Study Abroad Steps</span>
                <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 top-full mt-3 w-60 rounded-xl bg-white border border-slate-100 shadow-xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible overflow-hidden p-2 text-xs font-medium text-slate-700">
                <Link
                  href="/start-your-program"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Start Your Program
                </Link>
                <Link
                  href="/select-your-program"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Select Your Program
                </Link>
                <Link
                  href="/receive-offer-letter"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Receive Offer Letter
                </Link>
                <Link
                  href="/apply-for-visa"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Apply For Visa
                </Link>
                <Link
                  href="/fulfill-conditions"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Fulfill Conditions
                </Link>
                <Link
                  href="/submit-application"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Submit Application
                </Link>
                <Link
                  href="/pay-tution-deposit"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Pay Tuition Deposit
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* 3. Right Side (Call & Consultation Button) */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
            <FaPhoneAlt className="text-[#0b5cff]" />
            <span>+92 345 2066 100</span>
          </div>

          <div>
            <Link
              href="/free-consultation"
              className="inline-block rounded-full bg-[#1a233d] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#0b5cff] transition-colors whitespace-nowrap shadow-sm"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* 4. Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-slate-800 focus:outline-none p-2"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-6 py-5 transition-all">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <li>
              <Link href="/Home" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            {/* Accordion 1: Services */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-1"
              >
                <span>Services</span>
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="pl-4 my-1 flex flex-col gap-2 text-xs text-slate-600 border-l-2 border-slate-200">
                  <Link href="/Accommodation" onClick={() => setIsOpen(false)}>
                    Accommodation
                  </Link>
                  <Link href="/study-abroad" onClick={() => setIsOpen(false)}>
                    Study Abroad
                  </Link>
                  <Link href="/languages" onClick={() => setIsOpen(false)}>
                    Languages
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/Blog" onClick={() => setIsOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/Event" onClick={() => setIsOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/our-offices" onClick={() => setIsOpen(false)}>
                Our Offices
              </Link>
            </li>
            <li>
              <Link href="/study-Destination" onClick={() => setIsOpen(false)}>
                Study Destination
              </Link>
            </li>

            {/* Accordion 2: Steps */}
            <li>
              <div
                onClick={() => setStepsOpen(!stepsOpen)}
                className="flex items-center justify-between w-full py-1 cursor-pointer"
              >
                <Link
                  href="/study-abroad-steps"
                  onClick={() => setIsOpen(false)}
                >
                  Study Abroad Steps
                </Link>
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    stepsOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {stepsOpen && (
                <div className="pl-4 my-1 flex flex-col gap-2 text-xs text-slate-600 border-l-2 border-slate-200">
                  <Link
                    href="/start-your-program"
                    onClick={() => setIsOpen(false)}
                  >
                    Start Your Program
                  </Link>
                  <Link
                    href="/select-your-program"
                    onClick={() => setIsOpen(false)}
                  >
                    Select Your Program
                  </Link>
                  <Link href="/apply-for-visa" onClick={() => setIsOpen(false)}>
                    Apply For Visa
                  </Link>
                  <Link
                    href="/fulfill-conditions"
                    onClick={() => setIsOpen(false)}
                  >
                    Fulfill Conditions
                  </Link>
                  <Link
                    href="/receive-offer-letter"
                    onClick={() => setIsOpen(false)}
                  >
                    Receive Offer Letter
                  </Link>
                  <Link
                    href="/submit-application"
                    onClick={() => setIsOpen(false)}
                  >
                    Submit Application
                  </Link>
                  <Link
                    href="/pay-tution-deposit"
                    onClick={() => setIsOpen(false)}
                  >
                    Pay Tuition Deposit
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Bottom Contact Section */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <FaPhoneAlt className="text-[#0b5cff]" />
              +92 345 2066 100
            </div>
            <div>
              <Link
                href="/free-consultation"
                onClick={() => setIsOpen(false)}
                className="inline-block rounded-full bg-[#1a233d] text-white px-4 py-2.5 text-xs font-semibold transition whitespace-nowrap text-center w-full"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
