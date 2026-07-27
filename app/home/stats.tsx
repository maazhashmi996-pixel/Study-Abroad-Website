"use client";

import {
  FaCertificate,
  FaUserGraduate,
  FaUniversity,
  FaGlobe
} from "react-icons/fa";


export default function Stats() {


  const stats = [
    {
      id:1,
      icon:<FaCertificate />,
      number:"65+",
      title:"Years Of Experience",
      description:"Helping students achieve their dreams"
    },

    {
      id:2,
      icon:<FaUserGraduate />,
      number:"100,000+",
      title:"Students Assisted",
      description:"Students successfully guided worldwide"
    },

    {
      id:3,
      icon:<FaUniversity />,
      number:"500+",
      title:"Partner Universities",
      description:"Global universities and institutions"
    },

    {
      id:4,
      icon:<FaGlobe />,
      number:"25+",
      title:"Study Destinations",
      description:"Countries available for students"
    }
  ];


  return (

    <section className="
    py-16
    bg-[#43246f]
    ">


      <div className="
      container 
      mx-auto 
      px-6
      ">


        <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        ">


          {
            stats.map((item)=>(

              <div
              key={item.id}
              className="
              text-center
              text-white
              "
              >


                {/* Icon */}

                <div className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-white
                text-[#43246f]
                flex
                items-center
                justify-center
                text-3xl
                mb-5
                ">

                  {item.icon}

                </div>



                {/* Number */}

                <h2 className="
                text-4xl
                font-bold
                mb-2
                ">
                  {item.number}
                </h2>



                {/* Title */}

                <h3 className="
                text-xl
                font-semibold
                mb-2
                ">
                  {item.title}
                </h3>



                {/* Description */}

                <p className="
                text-sm
                text-gray-200
                ">
                  {item.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );
}