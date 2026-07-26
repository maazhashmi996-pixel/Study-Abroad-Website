"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";


const officeData = {

  lahore: {
    name: "Lahore Office",
    image: "/images/offices/lahore.webp",
    address: "Main Boulevard Gulberg, Lahore, Pakistan",
    phone: "+92 345 2066100",
    timing: "Monday - Saturday | 10:00 AM - 06:00 PM",
    description:
      "Visit our Lahore office and get expert guidance regarding university admissions, study destinations, visa applications, and accommodation support.",
  },


  islamabad: {
    name: "Islamabad Office",
    image: "/images/offices/islamabad.webp",
    address: "Blue Area, Islamabad, Pakistan",
    phone: "+92 345 2066101",
    timing: "Monday - Saturday | 10:00 AM - 06:00 PM",
    description:
      "Our Islamabad counselors provide complete assistance for students planning their education abroad.",
  },


  karachi: {
    name: "Karachi Office",
    image: "/images/offices/karachi.webp",
    address: "Shahrah-e-Faisal, Karachi, Pakistan",
    phone: "+92 345 2066102",
    timing: "Monday - Saturday | 10:00 AM - 06:00 PM",
    description:
      "Meet our Karachi team for personalized counseling and study abroad solutions.",
  },

};



export default function OfficeDetailPage({
  params,
}: {
  params: { city: string };
}) {


  const office =
    officeData[params.city as keyof typeof officeData];



  if (!office) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Office Not Found
        </h1>
      </div>
    );
  }
 return (

    <section className="bg-[#fafafa] py-16">
<div className="max-w-6xl mx-auto px-6">
{/* Image */}
<div className="relative h-[450px] rounded-3xl overflow-hidden">

          <Image
            src={office.image}
            alt={office.name}
            fill
            className="object-cover"
          />
</div>
        {/* Content */}

        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 mt-10">
 <h1 className="text-4xl md:text-5xl font-bold text-[#45246d]">
            {office.name}
          </h1>
 <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            {office.description}
          </p>




          {/* Details */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">


            <div className="bg-gray-50 rounded-xl p-6">

              <FaMapMarkerAlt className="text-orange-500 text-2xl mb-3"/>

              <h3 className="font-bold">
                Address
              </h3>

              <p className="text-gray-600 mt-2">
                {office.address}
              </p>

            </div>



            <div className="bg-gray-50 rounded-xl p-6">

              <FaPhoneAlt className="text-orange-500 text-2xl mb-3"/>

              <h3 className="font-bold">
                Phone
              </h3>

              <p className="text-gray-600 mt-2">
                {office.phone}
              </p>

            </div>




            <div className="bg-gray-50 rounded-xl p-6">

              <FaClock className="text-orange-500 text-2xl mb-3"/>

              <h3 className="font-bold">
                Working Hours
              </h3>

              <p className="text-gray-600 mt-2">
                {office.timing}
              </p>

            </div>


          </div>




          {/* Map */}

          <div className="mt-10">

            <iframe
              className="w-full h-[350px] rounded-2xl"
              src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            />

          </div>




          {/* CTA */}

          <div className="mt-10 text-center">

            <Link href="/contact">

              <button
                className="bg-[#45246d] hover:bg-[#5b378f]
                text-white px-10 py-4 rounded-full font-semibold"
              >
                Book Free Consultation
              </button>

            </Link>

          </div>


        </div>


      </div>


    </section>

  );

}