import Image from "next/image";
import Link from "next/link";


const event = {
  title: "Study in Denmark Information Session",
  image: "/images/events/denmark-event.webp",
  date: "August 15, 2026",
  time: "02:00 PM - 05:00 PM",
  location: "Times Consultant Lahore Office",

  description:
    "Join our Study in Denmark Information Session and get complete guidance about Danish universities, admission requirements, scholarships, visa process, and student life.",


  points: [
    "Meet experienced study abroad consultants",
    "Learn about Danish universities and programs",
    "Get guidance about visa requirements",
    "Understand scholarship opportunities",
    "Ask questions directly from experts",
  ],

};


export default function EventDetailPage() {


  return (

    <section className="bg-[#fafafa] py-16">


      <div className="max-w-6xl mx-auto px-6">



        {/* Event Image */}

        <div className="relative h-[450px] rounded-3xl overflow-hidden">

          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />

        </div>




        {/* Content */}

        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 mt-10">


          <h1 className="text-3xl md:text-5xl font-bold text-[#45246d]">
            {event.title}
          </h1>



          <div className="flex flex-wrap gap-6 mt-6 text-gray-600">

            <p>
              📅 {event.date}
            </p>


            <p>
              ⏰ {event.time}
            </p>


            <p>
              📍 {event.location}
            </p>

          </div>




          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            {event.description}
          </p>




          {/* What You Will Learn */}

          <div className="mt-10">


            <h2 className="text-3xl font-bold text-[#45246d] mb-6">
              What You Will Get
            </h2>



            <ul className="space-y-4">

              {event.points.map((item,index)=>(

                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >

                  <span className="text-orange-500 text-xl">
                    ✓
                  </span>

                  {item}

                </li>

              ))}


            </ul>


          </div>




          {/* Registration CTA */}

          <div className="mt-12 bg-[#45246d] rounded-2xl p-8 text-white">


            <h2 className="text-3xl font-bold">
              Register For This Event
            </h2>


            <p className="mt-3 text-gray-200">
              Reserve your seat and get expert guidance for your study abroad
              journey.
            </p>



            <Link href="/contact">

              <button
                className="mt-6 bg-[#F8A51B] hover:bg-orange-500
                px-8 py-3 rounded-full font-semibold transition"
              >
                Register Now
              </button>

            </Link>


          </div>



        </div>


      </div>


    </section>

  );

}