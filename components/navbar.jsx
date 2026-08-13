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

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setStepsOpen(false);
  };

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
                href="/"
                className={`transition-colors duration-200 ${
                  isActive("/Home")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className={`transition-colors duration-200 ${
                  isActive("/About")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <div className="flex items-center gap-1">
                <Link
                  href="/services"
                  className={`transition-colors duration-200 ${
                    isActive("/services")
                      ? "text-[#0b5cff]"
                      : "text-slate-700 hover:text-[#0b5cff]"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="p-1 text-slate-600 hover:text-[#2563EB] transition-colors"
                  aria-label="Toggle Services dropdown"
                >
                  <IoIosArrowDown
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-52 rounded-xl bg-white border border-slate-200 shadow-xl  p-2 flex flex-col gap-1 text-xs font-medium text-slate-700  opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible overflow-hidden">
                  <Link
                    href="/services/Accommodation"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#2563EB] transition-colors"
                  >
                    Accommodation
                  </Link>

                  <Link
                    href="/services/study-abroad"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#2563EB] transition-colors"
                  >
                    Study Abroad
                  </Link>

                  <Link
                    href="/services/languages"
                    onClick={() => setServicesOpen(false)}
                    className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#2563EB] transition-colors"
                  >
                    Languages
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link
                href="/Blog"
                className={`transition-colors duration-200 ${
                  isActive("/Blog")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/Event"
                className={`transition-colors duration-200 ${
                  isActive("/Event")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/our-offices"
                className={`transition-colors duration-200 ${
                  isActive("/our-offices")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                Our Offices
              </Link>
            </li>
            <li>
              <Link
                href="/study-Destination"
                className={`transition-colors duration-200 ${
                  isActive("/study-Destination")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
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
                  isActive("/study-abroad-steps")
                    ? "text-[#0b5cff]"
                    : "text-slate-700 hover:text-[#0b5cff]"
                }`}
              >
                <span>Study Abroad Steps</span>
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    stepsOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div className="absolute left-0 top-full mt-3 w-60 rounded-xl bg-white border border-slate-100 shadow-xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible overflow-hidden p-2 text-xs font-medium text-slate-700">
                <Link
                  href="/study-abroad-steps/start-your-program"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Start Your Program
                </Link>
                <Link
                  href="/study-abroad-steps/select-your-program"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Select Your Program
                </Link>
                <Link
                  href="/study-abroad-steps/receive-offer-letter"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Receive Offer Letter
                </Link>
                <Link
                  href="/study-abroad-steps/apply-for-visa"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Apply For Visa
                </Link>
                <Link
                  href="/study-abroad-steps/fulfill-conditions"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Fulfill Conditions
                </Link>
                <Link
                  href="/study-abroad-steps/submit-application"
                  className="block px-3 py-2 rounded-lg hover:bg-slate-50 hover:text-[#0b5cff] transition-colors"
                >
                  Submit Application
                </Link>
                <Link
                  href="/study-abroad-steps/pay-tution-deposit"
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
              href="/Home/free-consultation"
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
              <Link href="/" onClick={closeAllMenus}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" onClick={closeAllMenus}>
                About
              </Link>
            </li>

            {/* Mobile Services Accordion */}
            <li className="relative">
              <div className="flex items-center justify-between py-1">
                <Link href="/services" onClick={closeAllMenus}>
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="p-1 text-slate-600"
                >
                  <IoIosArrowDown
                    className={`transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {servicesOpen && (
                <div className="pl-4 my-1 flex flex-col gap-2 text-xs text-slate-600 border-l-2 border-slate-200">
                  <Link href="/services/Accommodation" onClick={closeAllMenus}>
                    Accommodation
                  </Link>
                  <Link href="/services/study-abroad" onClick={closeAllMenus}>
                    Study Abroad
                  </Link>
                  <Link href="/services/languages" onClick={closeAllMenus}>
                    Languages
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/Blog" onClick={closeAllMenus}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/Event" onClick={closeAllMenus}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/our-offices" onClick={closeAllMenus}>
                Our Offices
              </Link>
            </li>
            <li>
              <Link href="/study-Destination" onClick={closeAllMenus}>
                Study Destination
              </Link>
            </li>

            {/* Mobile Steps Accordion */}
            <li>
              <div
                onClick={() => setStepsOpen(!stepsOpen)}
                className="flex items-center justify-between w-full py-1 cursor-pointer"
              >
                <Link href="/study-abroad-steps" onClick={closeAllMenus}>
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
                    href="/study-abroad-steps/start-your-program"
                    onClick={closeAllMenus}
                  >
                    Start Your Program
                  </Link>
                  <Link
                    href="/study-abroad-steps/select-your-program"
                    onClick={closeAllMenus}
                  >
                    Select Your Program
                  </Link>
                  <Link
                    href="/study-abroad-steps/apply-for-visa"
                    onClick={closeAllMenus}
                  >
                    Apply For Visa
                  </Link>
                  <Link
                    href="/study-abroad-steps/fulfill-conditions"
                    onClick={closeAllMenus}
                  >
                    Fulfill Conditions
                  </Link>
                  <Link
                    href="/study-abroad-steps/receive-offer-letter"
                    onClick={closeAllMenus}
                  >
                    Receive Offer Letter
                  </Link>
                  <Link
                    href="/study-abroad-steps/submit-application"
                    onClick={closeAllMenus}
                  >
                    Submit Application
                  </Link>
                  <Link
                    href="/study-abroad-steps/pay-tution-deposit"
                    onClick={closeAllMenus}
                  >
                    Pay Tuition Deposit
                  </Link>
                </div>
              )}
            </li>
          </ul>

          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <a
                href="tel:+923452066100"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-[#0b5cff] transition-colors"
              >
                <FaPhoneAlt className="text-[#0b5cff]" />
                <span>+92 345 2066 100</span>
              </a>
            </div>
            <div>
              <Link
                href="/Home/free-consultation"
                onClick={closeAllMenus}
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
