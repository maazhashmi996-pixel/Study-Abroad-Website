"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);

  return (
    <header className="z-50 bg-white py-4 shadow-sm sticky top-0 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 1. Logo */}
        <div className="relative z-10 flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={70}
              priority
              className="w-auto h-auto"
            />
          </Link>
        </div>

        {/* 2. Desktop Navigation */}
        <nav className="hidden lg:block relative z-50 bg-[#43246f] rounded-full px-8 xl:px-12 py-3">
          <ul className="flex items-center gap-4 xl:gap-6 text-white text-xs whitespace-nowrap">
            <li>
              <Link href="/OurHome" className="hover:text-yellow-400">
                Home
              </Link>
            </li>

            <li>
              <Link href="/AboutUs" className="hover:text-yellow-400">
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400">
                <Link href="/Service">Services</Link>
                <IoIosArrowDown />
              </button>

              <div className="absolute left-0 top-full mt-3 w-60 rounded-md bg-[#43246f] shadow-2xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible overflow-hidden">
                <Link
                  href="/Accommdation"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Accommodation
                </Link>
                <Link
                  href="/studyAbroad"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Study Abroad
                </Link>
                <Link
                  href="/language"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Languages
                </Link>
              </div>
            </li>

            <li>
              <Link href="/Blog" className="hover:text-yellow-400">
                Blogs
              </Link>
            </li>

            <li>
              <Link href="/Event" className="hover:text-yellow-400">
                Events
              </Link>
            </li>

            <li>
              <Link href="/Office" className="hover:text-yellow-400">
                Our Offices
              </Link>
            </li>

            <li>
              <Link href="/studyDest" className="hover:text-yellow-400">
                Study Destinations
              </Link>
            </li>

            {/* Study Abroad Steps Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-yellow-400">
                <Link href="/step">Study Abroad Steps</Link>
                <IoIosArrowDown />
              </button>

              <div className="absolute left-0 top-full mt-3 w-64 rounded-md bg-[#43246f] shadow-2xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible overflow-hidden">
                <Link
                  href="/start"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Start Your Program
                </Link>
                <Link
                  href="/select"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Select Your Program
                </Link>
                <Link
                  href="/"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Apply For Visa
                </Link>
                <Link
                  href="/condition"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Fulfill Conditions
                </Link>
                <Link
                  href="/receive"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Receive Offer Letter
                </Link>
                <Link
                  href="/submit"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Submit Application
                </Link>
                <Link
                  href="/tution"
                  className="block px-5 py-3 hover:bg-yellow-500 hover:text-black"
                >
                  Pay Tuition Deposit
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* 3. Right Side (Desktop Call & Button) */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          <div className="flex items-center gap-2 text-sm xl:text-base font-semibold">
            <FaPhoneAlt className="text-orange-500" />
            +92 345 2066 100
          </div>

          <button className="rounded-full bg-[#43246f] px-4 py-2.5 text-xs text-white hover:bg-[#5b378f] transition whitespace-nowrap">
            Get Free Consultation
          </button>
        </div>

        {/* 4. Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-[#43246f] focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#43246f] text-white mt-4 rounded-2xl p-6 transition-all">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="/OurHome" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/AboutUs" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>

            {/* Accordion 1: Services */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full"
              >
                <span>Services</span>
                <IoIosArrowDown
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-xs text-gray-200">
                  <Link href="/Accommdation" onClick={() => setIsOpen(false)}>
                    Accommodation
                  </Link>
                  <Link href="/studyAbroad" onClick={() => setIsOpen(false)}>
                    Study Abroad
                  </Link>
                  <Link href="/language" onClick={() => setIsOpen(false)}>
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
              <Link href="/Office" onClick={() => setIsOpen(false)}>
                Our Offices
              </Link>
            </li>
            <li>
              <Link href="/studyDest" onClick={() => setIsOpen(false)}>
                Study Destinations
              </Link>
            </li>

            {/* Accordion 2: Steps */}
            <li>
              <button
                onClick={() => setStepsOpen(!stepsOpen)}
                className="flex items-center justify-between w-full"
              >
                <span>Study Abroad Steps</span>
                <IoIosArrowDown
                  className={`transition-transform ${stepsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {stepsOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 text-xs text-gray-200">
                  <Link href="/start" onClick={() => setIsOpen(false)}>
                    Start Your Program
                  </Link>
                  <Link href="/select" onClick={() => setIsOpen(false)}>
                    Select Your Program
                  </Link>
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Apply For Visa
                  </Link>
                  <Link href="/condition" onClick={() => setIsOpen(false)}>
                    Fulfill Conditions
                  </Link>
                  <Link href="/receive" onClick={() => setIsOpen(false)}>
                    Receive Offer Letter
                  </Link>
                  <Link href="/submit" onClick={() => setIsOpen(false)}>
                    Submit Application
                  </Link>
                  <Link href="/tution" onClick={() => setIsOpen(false)}>
                    Pay Tuition Deposit
                  </Link>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile Bottom Contact Section */}
          <div className="mt-6 pt-6 border-t border-purple-400/30 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-orange-400" />
              +92 345 2066 100
            </div>
            <button className="w-full rounded-full bg-orange-500 py-3 text-xs font-semibold text-white hover:bg-orange-600 transition">
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
