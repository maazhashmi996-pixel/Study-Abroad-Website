"use client";

import {
  FaHome,
  FaUniversity,
  FaUserShield,
} from "react-icons/fa";

export default function ServicesOffer() {

  const services = [
    {
      id: 1,
      icon: <FaHome />,
      title: "Student Accommodation",
      description:
        "We help students find comfortable and affordable accommodation options including private rooms, shared apartments, and student residences near their universities.",
    },

    {
      id: 2,
      icon: <FaUniversity />,
      title: "University Accommodation",
      description:
        "Get assistance in applying for university housing and secure a convenient place to stay close to your campus.",
    },

    {
      id: 3,
      icon: <FaUserShield />,
      title: "Customized Accommodation Services",
      description:
        "Our experts provide personalized accommodation solutions based on your budget, location preference, and lifestyle requirements.",
    },
  ];


  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-orange-500 font-semibold mb-3">
            Our Accommodation Support
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Accommodation Services We Offer
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            We make your transition abroad easier by helping you find
            safe and suitable accommodation according to your needs.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-md 
              hover:shadow-xl transition duration-300"
            >

              <div
                className="w-16 h-16 flex items-center justify-center
                rounded-full bg-orange-100 text-orange-500 text-3xl mb-6"
              >
                {service.icon}
              </div>


              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>


              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}