"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function StudentAccommodation() {

  const points = [
    "Affordable accommodation options for international students",
    "Private rooms and shared apartments near universities",
    "Guidance throughout the accommodation booking process",
    "Safe and comfortable living environment",
  ];


  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          {/* Image */}
          <div className="relative h-112.5 rounded-2xl overflow-hidden">

            <Image
              src="/images/student-accommodation.webp"
              alt="Student Accommodation"
              fill
              className="object-cover"
            />

          </div>



          {/* Content */}
          <div>

            <p className="text-orange-500 font-semibold mb-3">
              Student Living Solutions
            </p>


            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Ideal 
              <span className="text-orange-500"> Student Accommodation</span>
            </h2>


            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Moving to a new country can be challenging. Our accommodation
              support helps students find reliable housing options that match
              their budget, location preferences, and university requirements.
            </p>



            {/* Points */}
            <div className="mt-8 space-y-4">

              {points.map((point, index) => (

                <div 
                  key={index}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle 
                    className="text-orange-500 text-xl mt-1"
                  />

                  <p className="text-gray-700">
                    {point}
                  </p>

                </div>

              ))}

            </div>



            <button
              className="mt-8 bg-orange-500 hover:bg-orange-600
              text-white px-8 py-3 rounded-md font-semibold
              transition duration-300"
            >
              Explore Accommodation Options
            </button>


          </div>


        </div>

      </div>

    </section>
  );
}