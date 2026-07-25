"use client";

import Link from "next/link";

export default function ContactBlog() {

  return (

    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">


        <div
          className="bg-[#45246d] rounded-3xl p-8 md:p-12 
          flex flex-col md:flex-row items-center justify-between gap-8"
        >


          {/* Text */}

          <div className="text-white max-w-2xl">

            <p className="text-orange-400 font-semibold mb-3">
              Need Expert Guidance?
            </p>


            <h2 className="text-3xl md:text-5xl font-bold leading-tight">

              Start Your Study Abroad Journey Today

            </h2>


            <p className="mt-5 text-gray-200 text-lg leading-relaxed">

              Our experienced consultants help students with university
              selection, admission process, visa guidance, and accommodation
              support.

            </p>


          </div>




          {/* Button */}

          <div>

            <Link href="/contact">

              <button
                className="bg-[#F8A51B] hover:bg-orange-500 
                text-white px-10 py-4 rounded-full 
                font-semibold transition duration-300 whitespace-nowrap"
              >

                Get Free Consultation

              </button>

            </Link>


          </div>



        </div>


      </div>


    </section>

  );

}