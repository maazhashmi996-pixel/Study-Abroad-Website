"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="relative z-50 bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative z-10">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={70}
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-50 bg-[#43246f] rounded-full px-20 py-3">
          <ul className="flex items-center gap-5 text-white text-xs">
            <li>
              <Link href="/home">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1">
                Services
                <IoIosArrowDown />
              </button>

              <div className="absolute left-0 top-full mt-3 w-60 rounded-md bg-[#43246f] shadow-2xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/services/accommodation"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Accommodation
                </Link>

                <Link
                  href="/services/study-abroad"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Study Abroad
                </Link>

                <Link
                  href="/services/languages"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Languages
                </Link>
              </div>
            </li>

            <li>
              <Link href="/blogs">Blogs</Link>
            </li>

            <li>
              <Link href="/events">Events</Link>
            </li>

            <li>
              <Link href="/offices">Our Offices</Link>
            </li>

            <li>
              <Link href="/study-destinations/denmark">Study Destinations</Link>
            </li>

            {/* Study Abroad Steps Dropdown */}

            <li className="relative group">
              <button className="flex items-center gap-1">
                Study Abroad Steps
                <IoIosArrowDown />
              </button>

              <div className="absolute left-0 top-full mt-3 w-64 rounded-md bg-[#43246f] shadow-2xl z-[9999] opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible">
                <Link
                  href="/study-abroad/select-program"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Select Your Program
                </Link>

                <Link
                  href="/study-abroad/apply-visa"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Apply For Visa
                </Link>

                <Link
                  href="/study-abroad/start-program"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Start Your Program
                </Link>

                <Link
                  href="/study-abroad/fulfill-conditions"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Fulfill Conditions
                </Link>

                <Link
                  href="/study-abroad/offer-letter"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Receive Offer Letter
                </Link>

                <Link
                  href="/study-abroad/submit-application"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Submit Application
                </Link>

                <Link
                  href="/study-abroad/tuition-deposit"
                  className="block px-5 py-3 hover:bg-yellow-500"
                >
                  Pay Tuition Deposit
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-lg">
            <FaPhoneAlt className="text-orange-500" />
            +92 345 2066 100
          </div>

          <button className="rounded-full bg-[#43246f] px-5 py-3 text-xs text-white hover:bg-[#5b378f] transition">
            Get Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
