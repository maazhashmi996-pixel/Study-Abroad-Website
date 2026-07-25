"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Apply for Austria Study Visa in 2026 from Pakistan",
    image: "/images/blog/austria-visa.webp",
  },
  {
    id: 2,
    title: "How to Apply for Hungary Study Visa in 2026 from Pakistan",
    image: "/images/blog/MBA.png",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    image: "/images/blog/neatherlands.webp",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    image: "/images/blog/canada.webp",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in Europe",
    image: "/images/blog/china.webp",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/turkey.webp",
  },
  {
    id: 7,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/10-Tips.png",
  },
  {
    id: 8,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/bunking-myths.png",
  },
  {
    id: 9,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/Exchange-programs.png",
  },
  {
    id: 10,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/Ireland.webp",
  },
  {
    id: 11,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/pakistan.webp",
  },
  {
    id: 12,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/turkey.webp",
  },
  {
    id: 13,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/france.webp",
  },
  {
    id: 14,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/UK.png",
  },
  {
    id: 15,
    title: "Student Visa Interview Tips for Beginners",
    image: "/images/blog/austria-visa.webp",
  },
];

const tags = [
  "Australia",
  "Denmark",
  "Europe",
  "Hungary",
  "Netherlands",
  "United Kingdom",
  "United States",
  "Visa",
  "Scholarships",
];

export default function BlogsPage() {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <h1 className="text-center text-3xl md:text-5xl font-bold text-[#45246d] mb-14">
          Study Abroad Blogs - Guidance, Tips & More
        </h1>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Left Side */}

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogs.map((blog) => (

                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 duration-300"
                >

                  <div className="relative h-56 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">

                    <h2 className="text-2xl font-semibold text-[#2d2d2d] leading-snug min-h-[120px]">
                      {blog.title}
                    </h2>

                    <Link href="#">
                      <button className="mt-6 bg-[#F8A51B] hover:bg-orange-500 text-white px-8 py-3 rounded-full font-medium transition">
                        Read More →
                      </button>
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Sidebar */}

          <div className="space-y-8">

            {/* Search */}

            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-3xl font-bold text-[#45246d] mb-6">
                Search Here
              </h2>

              <input
                type="text"
                placeholder="Type to start searching..."
                className="w-full border rounded-full px-6 py-4 outline-none focus:border-[#45246d]"
              />

            </div>

            {/* Tags */}

            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-3xl font-bold text-[#45246d] mb-6">
                Popular Tags
              </h2>

              <div className="space-y-4">

                {tags.map((tag) => (

                  <label
                    key={tag}
                    className="flex items-center gap-3 text-gray-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#45246d]"
                    />
                    {tag}
                  </label>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Pagination */}

        <div className="flex justify-center items-center gap-3 mt-16">

          <button className="w-10 h-10 rounded-full border hover:bg-[#45246d] hover:text-white">
            1
          </button>

          <button className="w-10 h-10 rounded-full border hover:bg-[#45246d] hover:text-white">
            2
          </button>

          <button className="w-10 h-10 rounded-full border hover:bg-[#45246d] hover:text-white">
            3
          </button>

          <button className="w-10 h-10 rounded-full border hover:bg-[#45246d] hover:text-white">
            4
          </button>

        </div>

      </div>
    </section>
  );
}