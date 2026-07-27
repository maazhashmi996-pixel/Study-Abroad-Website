"use client";

import Image from "next/image";
import { FaBuilding, FaMapMarkerAlt, FaBed } from "react-icons/fa";

export default function UniversityAccommodation() {

  const features = [
    {
      icon: <FaBuilding />,
      title: "Campus Living",
      text: "Stay close to your university with convenient and comfortable campus accommodation options.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Locations",
      text: "We help students find accommodation in safe areas near universities and essential facilities.",
    },
    {
      icon: <FaBed />,
      title: "Comfortable Facilities",
      text: "Access well-equipped rooms with essential facilities for a better student experience.",
    },
  ];


  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 md:px-16">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-orange-500 font-semibold mb-3">
            University Housing Support
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Secure Your University Accommodation
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            We assist students in finding suitable university accommodation
            that provides comfort, safety, and easy access to campus.
          </p>

        </div>



        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          {/* Image */}
          <div className="relative h-112.5 rounded-2xl overflow-hidden">

            <Image
              src="/images/university-accommodation.webp"
              alt="University Accommodation"
              fill
              className="object-cover"
            />

          </div>



          {/* Cards */}
          <div className="space-y-6">

            {features.map((item, index) => (

              <div
                key={index}
                className="flex gap-5 bg-white p-6 rounded-xl shadow-md
                hover:shadow-lg transition duration-300"
              >

                <div
                  className="w-14 h-14 flex items-center justify-center
                  rounded-full bg-orange-100 text-orange-500 text-2xl shrink-0"
                >
                  {item.icon}
                </div>


                <div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                </div>


              </div>

            ))}


          </div>


        </div>


      </div>

    </section>
  );
}