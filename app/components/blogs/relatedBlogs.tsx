"use client";

import Image from "next/image";
import Link from "next/link";


const relatedBlogs = [
  {
    id: 1,
    title: "How to Apply for Hungary Study Visa in 2026 from Pakistan",
    image: "/images/blog/china.webp",
  },

  {
    id: 2,
    title: "How to Apply for Netherlands Study Visa in 2026",
    image: "/images/blog/neatherlands.webp",
  },

  {
    id: 3,
    title: "Top Scholarships to Study in Europe",
    image: "/images/blog/turkey.webp",
  },

];


export default function RelatedBlogs() {


  return (

    <section className="py-16 bg-[#fafafa]">


      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-orange-500 font-semibold mb-3">
            More Articles
          </p>


          <h2 className="text-3xl md:text-5xl font-bold text-[#45246d]">
            Related Blogs
          </h2>

        </div>




        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">


          {relatedBlogs.map((blog)=>(

            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden
              hover:-translate-y-2 transition duration-300"
            >


              {/* Image */}

              <div className="relative h-56 w-full">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

              </div>




              {/* Content */}

              <div className="p-6">


                <h3 className="text-xl font-bold text-gray-800 leading-snug">
                  {blog.title}
                </h3>



                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-block mt-5 text-orange-500 font-semibold hover:text-[#45246d]"
                >

                  Read More →

                </Link>


              </div>



            </div>


          ))}


        </div>


      </div>


    </section>

  );

}