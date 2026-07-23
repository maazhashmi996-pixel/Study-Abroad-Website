import Image from "next/image";


export default function Introduction() {

  return (

    <section className="py-16 bg-white">

      <div className="container mx-auto px-6">

        <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-2 
        gap-10 
        items-center
        ">


          {/* Image */}

          <div className="relative">

            <Image
              src="/images/about/about-introduction.jpg"
              alt="About Times Consultant"
              width={600}
              height={450}
              className="
              rounded-2xl
              object-cover
              shadow-lg
              "
            />

          </div>



          {/* Content */}

          <div>


            <h2 className="
            text-4xl
            font-bold
            text-[#43246f]
            mb-5
            ">
              About Times Consultant
            </h2>


            <p className="
            text-gray-600
            leading-7
            mb-5
            ">
              Times Consultant is a leading study abroad consultancy
              helping students achieve their international education goals.
              We provide professional guidance for university admission,
              scholarships, and visa processing.
            </p>


            <p className="
            text-gray-600
            leading-7
            mb-6
            ">
              With experienced counselors and global university partnerships,
              we support students at every step of their journey — from
              selecting the right program to successfully starting their
              studies abroad.
            </p>



            {/* Points */}

            <div className="space-y-3">


              <div className="flex gap-3 items-center">

                <span className="
                w-3
                h-3
                rounded-full
                bg-[#43246f]
                "></span>

                <p className="text-gray-700">
                  Expert educational counselors
                </p>

              </div>



              <div className="flex gap-3 items-center">

                <span className="
                w-3
                h-3
                rounded-full
                bg-[#43246f]
                "></span>

                <p className="text-gray-700">
                  Trusted university partnerships
                </p>

              </div>



              <div className="flex gap-3 items-center">

                <span className="
                w-3
                h-3
                rounded-full
                bg-[#43246f]
                "></span>

                <p className="text-gray-700">
                  Complete admission and visa support
                </p>

              </div>


            </div>


          </div>


        </div>


      </div>


    </section>

  );
}