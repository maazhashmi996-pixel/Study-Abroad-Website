import { FaBullseye, FaEye } from "react-icons/fa";


export default function MissionVision() {

  const data = [
    {
      id:1,
      icon:<FaBullseye />,
      title:"Our Mission",
      description:
      "Our mission is to empower students with the right guidance, resources, and opportunities to achieve their international education goals."
    },

    {
      id:2,
      icon:<FaEye />,
      title:"Our Vision",
      description:
      "Our vision is to become a globally trusted education consultancy by connecting students with world-class universities."
    }
  ];


  return (

    <section className="
    py-16
    bg-gray-50
    ">


      <div className="
      container
      mx-auto
      px-6
      ">


        {/* Heading */}

        <div className="
        text-center
        mb-12
        ">

          <h2 className="
          text-4xl
          font-bold
          text-[#43246f]
          ">
            Our Mission & Vision
          </h2>


          <p className="
          text-gray-600
          mt-3
          ">
            Guiding students towards a successful future
          </p>

        </div>



        {/* Cards */}

        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        max-w-5xl
        mx-auto
        ">


          {
            data.map((item)=>(


              <div
              key={item.id}
              className="
              bg-white
              p-8
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition
              duration-300
              text-center
              "
              >


                {/* Icon */}

                <div className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-[#43246f]
                text-white
                flex
                items-center
                justify-center
                text-4xl
                mb-6
                ">

                  {item.icon}

                </div>



                <h3 className="
                text-2xl
                font-semibold
                text-gray-800
                mb-4
                ">
                  {item.title}
                </h3>



                <p className="
                text-gray-600
                leading-7
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