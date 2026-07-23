"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";


export default function HeroSlider() {


  const images = [
    {
      id: 1,
      image: "/images/award1.webp",
    },
    {
      id: 2,
      image: "/images/award2.webp",
    },
    {
      id: 3,
      image: "/images/award3.webp",
    },
    {
      id: 4,
      image: "/images/award4.webp",
    },
  ];


  return (

    <section className="w-full h-screen">


      <Swiper

        modules={[Autoplay, EffectFade]}

        effect="fade"

        slidesPerView={1}

        loop={true}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        className="w-full h-full"

      >


        {
          images.map((item)=>(


            <SwiperSlide key={item.id}>


              <div className="relative w-full h-screen">


                {/* Background Image */}

                <Image

                  src={item.image}

                  alt="Study Abroad"

                  fill

                  priority

                  className="object-cover"

                />


                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/50"></div>



                {/* Hero Content */}

                <div className="absolute inset-0 flex items-center px-10 md:px-20">


                  <div className="max-w-3xl text-white">


                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">

                      Your Dream To Study Abroad

                      <span className="text-yellow-400">
                        {" "}Starts Here
                      </span>

                    </h1>


                    <p className="mt-5 text-lg text-gray-200">

                      Get expert guidance for selecting universities,
                      applications, scholarships and visa assistance.

                    </p>



                    <div className="mt-8 flex gap-5">


                      <button
                        className="
                        bg-yellow-500
                        px-7
                        py-3
                        rounded-full
                        font-semibold
                        hover:bg-yellow-600
                        transition
                        duration-300
                        "
                      >

                        Explore Destinations

                      </button>



                      <button
                        className="
                        border
                        border-white
                        px-7
                        py-3
                        rounded-full
                        font-semibold
                        hover:bg-white
                        hover:text-purple-900
                        transition
                        duration-300
                        "
                      >

                        Free Consultation

                      </button>


                    </div>


                  </div>


                </div>


              </div>


            </SwiperSlide>


          ))
        }


      </Swiper>


    </section>

  );
}