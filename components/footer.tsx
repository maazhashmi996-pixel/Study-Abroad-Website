import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
//   const [user,setUser] =useState({
//     email:""

//   })
// async function changeHandler(e) {
//   const {name,value }=e.target;
//   setUser((prev)=>({...prev,[name]:value}))
// }
//  function submitHandler(e) {
//   try(
//   e.preventDefault()
// const response = await axios.post("",data)
// )
//  }

  return (
    <footer className="bg-[#43246f] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-b border-purple-400/30 pb-10">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col gap-4">
            <div className="relative w-48 sm:w-60 h-auto">
              <Image 
                src="/logos/logo2.png" 
                alt="D.Education Zone Logo" 
                width={240} 
                height={120} 
                className="w-auto h-auto"
              />
            </div>
            <h1 className="text-sm leading-relaxed text-gray-200">
              <span className="font-semibold text-white">D.Education Zone</span> – Pakistan’s #1 Study Abroad Consultant, Trusted Since 2004. Official Rep of 3000+ Global Universities.
            </h1>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl text-yellow-500">Services</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/study-abroad" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Study Abroad</span>
                </Link>
              </li>
              <li>
                <Link href="/Accommodation" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Accommodations</span>
                </Link>
              </li>
              <li>
                <Link href="/languages" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Languages</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl text-yellow-500">Useful Links</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/study-Destination" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Study Destination</span>
                </Link>
              </li>
              <li>
                <Link href="/About" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Blogs</span>
                </Link>
              </li>
              <li>
                <Link href="/Event" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link href="/study-abroad-steps" className="flex items-center gap-2 hover:text-yellow-400 transition">
                  <FaArrowRight className="text-yellow-500 text-xs shrink-0" />
                  <span>Student Guide</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl text-yellow-500">Subscribe Our Newsletter</h2>
            
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-500 text-xs shrink-0" />
                <a href="tel:+92345678987" className="hover:underline">+92 345 678987</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-500 text-xs shrink-0" />
                <a href="mailto:study@timeconsultant.com" className="hover:underline break-all">study@timeconsultant.com</a>
              </li>
            </ul>

            {/* Form Input Container */}
            <form onSubmit={(e) => e.preventDefault()} className="mt-2">
              <div className="relative flex items-center bg-white rounded-full p-1 shadow-md">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full pl-4 pr-24 py-2 text-xs text-gray-800 rounded-full focus:outline-none"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-xs transition font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Section: AQF & Logos */}
        <div className="flex flex-col gap-6 text-xs text-gray-300">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Agent Quality Framework (AQF) Compliance
            </h2>
            <p className="leading-relaxed text-gray-300">
              Studying is committed to upholding the highest standards in international student recruitment. We adhere to the principles of the Agent Quality Framework (AQF), ensuring ethical practices, transparency, and professionalism in all our services. Our agents are trained and certified to provide accurate and reliable guidance to students.
            </p>
          </div>

          {/* Partner & Certification Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center pt-4">
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/f.png" alt="AQF Logo 1" width={120} height={60} className="h-12 object-contain" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/l.png" alt="AQF Logo 2" width={120} height={60} className="h-12 object-contain" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/m.png" alt="AQF Logo 3" width={120} height={60} className="h-12 object-contain" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/v.png" alt="AQF Logo 4" width={120} height={60} className="h-12 object-contain" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/award.png" alt="Award Logo" width={120} height={60} className="h-12 object-contain" />
            </div>
            <div className="bg-white/10 p-2 rounded-lg w-full flex justify-center">
              <Image src="/logos/Worlds-No1-Partner.png" alt="World's No 1 Partner Logo" width={120} height={60} className="h-12 object-contain" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}