"use client";

import Image from "next/image";
import Link from "next/link";


const events = [
  {
    id: 1,
    title: "Study in Denmark Information Session",
    date: "August 15, 2026",
    location: "Lahore Office",
    image: "/images/events/denmark-event.webp",
    slug: "study-in-denmark-session",
  },

  {
    id: 2,
    title: "Study Abroad Education Expo 2026",
    date: "September 10, 2026",
    location: "Karachi",
    image: "/images/events/education-expo.webp",
    slug: "education-expo-2026",
  },

  {
    id: 3,
    title: "Free Visa Consultation Event",
    date: "October 05, 2026",
    location: "Islamabad",
    image: "/images/events/visa-event.webp",
    slug: "free-visa-consultation",
  },


  {
    id: 4,
    title: "Meet University Representatives",
    date: "November 20, 2026",
    location: "Lahore",
    image: "/images/events/university-event.webp",
    slug: "university-representatives",
  },

];


export default function EventsPage() {


  return (

    <section className="bg-[#fafafa] py-16">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold mb-3">
            Upcoming Events
          </p>


          <h1 className="text-3xl md:text-5xl font-bold text-[#45246d]">
            Join Our Study Abroad Events
          </h1>


          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            Attend our educational events, university sessions, and visa
            seminars to get expert guidance for your international studies.
          </p>

        </div>




        {/* Events Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {events.map((event)=>(


            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md
              hover:-translate-y-2 transition duration-300"
            >


              {/* Image */}

              <div className="relative h-60 w-full">

                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />

              </div>




              {/* Content */}

              <div className="p-6">


                <h2 className="text-xl font-bold text-gray-800">
                  {event.title}
                </h2>



                <div className="mt-4 space-y-2 text-gray-600">

                  <p>
                    📅 {event.date}
                  </p>


                  <p>
                    📍 {event.location}
                  </p>

                </div>




                <Link
                  href={`/events/${event.slug}`}
                >

                  <button
                    className="mt-6 bg-[#F8A51B] hover:bg-orange-500
                    text-white px-7 py-3 rounded-full font-semibold"
                  >
                    View Details →
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