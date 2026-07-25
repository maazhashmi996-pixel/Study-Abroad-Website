"use client";

import Image from "next/image";
import Link from "next/link";


const offices = [
  {
    id: 1,
    city: "Lahore Office",
    address: "Main Boulevard Gulberg, Lahore, Pakistan",
    phone: "+92 345 2066100",
    image: "/images/offices/lahore.webp",
  },

  {
    id: 2,
    city: "Islamabad Office",
    address: "Blue Area, Islamabad, Pakistan",
    phone: "+92 345 2066101",
    image: "/images/offices/islamabad.webp",
  },

  {
    id: 3,
    city: "Karachi Office",
    address: "Shahrah-e-Faisal, Karachi, Pakistan",
    phone: "+92 345 2066102",
    image: "/images/offices/karachi.webp",
  },

];



export default function OfficesPage() {


  return (

    <section className="bg-[#fafafa] py-16">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-14">


          <p className="text-orange-500 font-semibold mb-3">
            Our Locations
          </p>


          <h1 className="text-3xl md:text-5xl font-bold text-[#45246d]">
            Visit Our Offices
          </h1>


          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Connect with our expert counselors at our offices and get
            personalized guidance for your study abroad journey.
          </p>


        </div>




        {/* Office Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {offices.map((office)=>(


            <div
              key={office.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden
              hover:-translate-y-2 transition duration-300"
            >



              {/* Image */}

              <div className="relative h-60">

                <Image
                  src={office.image}
                  alt={office.city}
                  fill
                  className="object-cover"
                />

              </div>





              {/* Content */}

              <div className="p-6">


                <h2 className="text-2xl font-bold text-[#45246d]">
                  {office.city}
                </h2>


                <p className="mt-4 text-gray-600">
                  📍 {office.address}
                </p>


                <p className="mt-3 text-gray-600">
                  ☎ {office.phone}
                </p>




                <Link href="/contact">

                  <button
                    className="mt-6 bg-[#F8A51B] hover:bg-orange-500
                    text-white px-7 py-3 rounded-full font-semibold"
                  >
                    Contact Office
                  </button>

                </Link>


              </div>



            </div>


          ))}


        </div>


      </div>


    </section>

  );

}