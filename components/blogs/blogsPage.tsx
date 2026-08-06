"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  image: string;
  tags: string[];
  link?: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "How to Apply for Austria Study Visa in 2026 from Pakistan",
    image: "/images/blog/austria-visa.webp",
    tags: ["Austria", "Visa", "Europe"],
    link: "/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    image: "/images/blog/neatherlands.webp", // Fixed typo
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/neatherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/china",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    image: "/images/blog/china.webp",
    tags: ["Europe", "Scholarships"],
    link: "/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    image: "/images/blog/turkey.webp",
    tags: ["Australia", "Visa"],
    link: "/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    image: "/images/blog/10-Tips.png",
    tags: ["United Kingdom", "Visa"],
    link: "/ukingdom",
  },
  {
    id: 8,
    title: "Understanding Denmark Higher Education Requirements",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    image: "/images/blog/Exchange-programs.png",
    tags: ["United States", "Scholarships"],
    link: "/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide", // Updated duplicate title
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/sweden",
  },

  {
    id: 11,
    title: "France University Admission & Scholarship Guide", // Updated duplicate title
    image: "/images/blog/france-study.webp",
    tags: ["france", "Scholarships"],
    link: "/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide", // Updated duplicate title
    image: "/images/blog/Ireland-study.png",
    tags: ["ireland", "Scholarships"],
    link: "/ireland",
  },
  {
    id: 13,
    title: "malysia University Admission & Scholarship Guide", // Updated duplicate title
    image: "/images/blog/maly.webp",
    tags: ["malysia", "Scholarships"],
    link: "/malysia",
  },
    {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide", // Updated duplicate title
    image: "/images/blog/south-korea.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/south",
  },
];

const tagsList = [
  "Australia",
  "Denmark",
  "Europe",
  "China",
  "Ireland",
  "New Zealand",
  "Italy",
  "Pakistan",
  "UK",
  "USA",
];

export default function BlogsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleTagChange = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    if (searchQuery) setSearchQuery("");
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some(
          (tag) =>
            blog.tags.includes(tag) ||
            blog.title.toLowerCase().includes(tag.toLowerCase())
        );

      const matchesSearch = blog.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTags, searchQuery]);

  return (
    <section className="bg-[#fafafa] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12 text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold text-[#45246d] mb-8 sm:mb-12 leading-tight">
          Study Abroad Blogs - Guidance, Tips & More
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1">
            {filteredBlogs.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 sm:p-12 text-center shadow-sm border border-gray-100">
                <p className="text-base sm:text-lg text-gray-500 font-medium">
                  No blogs found matching your selected criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-[#45246d] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#341b53] transition"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => {
                  const blogPath = blog.link || `/blog/${blog.id}`;

                  return (
                    <div
                      key={blog.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden hover:-translate-y-1.5 duration-300 flex flex-col justify-between border border-gray-100"
                    >
                      <div>
                        <Link href={blogPath} className="block relative h-48 w-full bg-gray-100">
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </Link>

                        <div className="p-5">
                          <Link href={blogPath}>
                            <h2 className="text-sm sm:text-base font-semibold text-[#2d2d2d] hover:text-[#45246d] transition leading-snug line-clamp-3">
                              {blog.title}
                            </h2>
                          </Link>
                        </div>
                      </div>

                      {/* Read More Link Styled as Button */}
                      <div className="p-5 pt-0">
                        <Link
                          href={blogPath}
                          className="inline-block w-full text-center bg-[#F8A51B] hover:bg-orange-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#45246d] mb-3 sm:mb-4">
                Search Here
              </h2>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search..."
                className="w-full border border-gray-200 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm outline-none focus:border-[#45246d] transition"
              />
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#45246d]">
                  Popular Tags
                </h2>
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-orange-500 hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-3">
                {tagsList.map((tag) => {
                  const isChecked = selectedTags.includes(tag);
                  return (
                    <label
                      key={tag}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 cursor-pointer hover:text-[#45246d] transition select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleTagChange(tag)}
                        className="h-4 w-4 rounded accent-[#45246d] cursor-pointer"
                      />
                      <span className={isChecked ? "font-bold text-[#45246d]" : ""}>
                        {tag}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}