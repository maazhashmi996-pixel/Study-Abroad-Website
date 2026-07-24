"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-white py-4 shadow-sm max-h-max">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="logo" width={100} height={70} />
        </div>

        {/* Navigation */}
        <nav className="bg-[#43246f] rounded-full px-20 py-3">
          <ul className="flex items-center gap-2 text-white text-xs ">
            <li>
              <Link href="/home">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-2">
                Services
                <IoIosArrowDown />
              </button>

              {/* Dropdown */}
              <div className="absolute top-10 left-0 w-60 bg-[#43246f] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-400 transition-colors duration-500"
                >
                  Select Your Program
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Accomodations
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Study Abroad
                </Link>

                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  {" "}
                  Languges
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

            <li className="relative group">
              <button className="flex items-center gap-1">
                Study Abroad Steps
                <IoIosArrowDown />
              </button>
              <div className="absolute top-10 left-0 w-60 bg-[#43246f] text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Select Your Program
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Apply For Visa
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Start Your Program
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Fulfill Conditions
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  {" "}
                  Receive Offer Letter
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
                >
                  Submit Application
                </Link>
                <Link
                  href="#"
                  className="block px-5 py-3 hover:bg-yellow-500 transition-colors duration-500"
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

          <button className="bg-[#43246f] text-xs text-white rounded-full px-4 py-3 hover:bg-[#5b378f] duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
