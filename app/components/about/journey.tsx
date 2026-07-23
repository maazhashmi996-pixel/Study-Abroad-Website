import { FaCheckCircle } from "react-icons/fa";


export default function Journey() {


  const journey = [
    {
      id:1,
      year:"1999",
      title:"Foundation",
      description:
      "Times Consultant started its journey with the aim of helping students achieve international education opportunities."
    },

    {
      id:2,
      year:"2010",
      title:"Global Expansion",
      description:
      "Expanded partnerships with international universities and increased study abroad services."
    },

    {
      id:3,
      year:"2020",
      title:"Digital Growth",
      description:
      "Introduced modern counseling solutions and improved online student support."
    },

    {
      id:4,
      year:"Present",
      title:"Global Education Partner",
      description:
      "Continuing to guide thousands of students towards successful careers worldwide."
    }
  ];


  return (

    <section className="py-16 bg-white">


      <div className="container mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">


          <h2 className="
          text-4xl
          font-bold
          text-[#43246f]
          ">
            Our Journey
          </h2>


          <p className="text-gray-600 mt-3">
            A story of dedication, growth and success
          </p>


        </div>



        {/* Timeline */}

        <div className="
        max-w-4xl
        mx-auto
        relative
        ">


          {/* Line */}

          <div className="
          absolute
          left-5
          top-0
          h-full
          w-1
          bg-[#43246f]
          md:left-1/2
          ">
          </div>



          {
            journey.map((item,index)=>(


              <div
              key={item.id}
              className={`
              relative
              mb-10
              flex
              items-center
              ${
                index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
              }
              `}
              >


                {/* Icon */}

                <div className="
                absolute
                left-0
                md:left-1/2
                transform
                -translate-x-1/2
                w-10
                h-10
                rounded-full
                bg-[#43246f]
                text-white
                flex
                items-center
                justify-center
                ">

                  <FaCheckCircle />

                </div>



                {/* Content */}

                <div className="
                ml-14
                md:ml-0
                md:w-1/2
                p-6
                bg-gray-50
                rounded-xl
                shadow-md
                ">


                  <h3 className="
                  text-[#43246f]
                  font-bold
                  text-2xl
                  ">
                    {item.year}
                  </h3>


                  <h4 className="
                  text-xl
                  font-semibold
                  mt-2
                  ">
                    {item.title}
                  </h4>


                  <p className="
                  text-gray-600
                  mt-3
                  leading-6
                  ">
                    {item.description}
                  </p>


                </div>


              </div>


            ))
          }



        </div>


      </div>


    </section>

  );
}