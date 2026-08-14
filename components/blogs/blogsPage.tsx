"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

const openWhatsApp = (
  phoneNumber: string = "923452066100",
  message: string = "Hello! I need some information regarding study abroad."
) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

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
    link: "/Blog/austria",
  },
  {
    id: 2,
    title: "How to Apply for Europe Study Visa in 2026 from Pakistan",
    image: "/images/blog/MBA.png",
    tags: ["Hungary", "Visa", "Europe"],
    link: "/Blog/europe",
  },
  {
    id: 3,
    title: "How to Apply for Netherlands Study Visa in 2026 from Pakistan",
    image: "/images/blog/neatherlands.webp",
    tags: ["Netherlands", "Visa", "Europe"],
    link: "/Blog/neatherland",
  },
  {
    id: 4,
    title: "Study in Canada Guide for International Students",
    image: "/images/blog/canada.webp",
    tags: ["Canada", "Scholarships"],
    link: "/Blog/canada",
  },
  {
    id: 5,
    title: "Top Scholarships to Study in China",
    image: "/images/blog/china.webp",
    tags: ["China", "Scholarships"],
    link: "/Blog/china",
  },
  {
    id: 6,
    title: "Student Visa Interview Tips for Beginners in Turkey",
    image: "/images/blog/turkey.webp",
    tags: ["Turkey", "Visa"],
    link: "/Blog/turkey",
  },
  {
    id: 7,
    title: "Study Opportunities in United Kingdom for 2026",
    image: "/images/blog/10-Tips.png",
    tags: ["UK", "Visa"],
    link: "/Blog/united-kingdom",
  },
  {
    id: 8,
    title: "Debunking Myths Higher Education Requirements",
    image: "/images/blog/bunking-myths.png",
    tags: ["Denmark", "Europe"],
    link: "/Blog/bunking-myths",
  },
  {
    id: 9,
    title: "United States University Admission Checklist",
    image: "/images/blog/Exchange-programs.png",
    tags: ["USA", "Scholarships"],
    link: "/Blog/usuni",
  },
  {
    id: 10,
    title: "Sweden University Admission & Scholarship Guide",
    image: "/images/blog/sweden.webp",
    tags: ["Sweden", "Scholarships"],
    link: "/Blog/sweden",
  },
  {
    id: 11,
    title: "France University Admission & Scholarship Guide",
    image: "/images/blog/france-study.webp",
    tags: ["France", "Scholarships"],
    link: "/Blog/france",
  },
  {
    id: 12,
    title: "Ireland University Admission & Scholarship Guide",
    image: "/images/blog/Ireland-study.png",
    tags: ["Ireland", "Scholarships"],
    link: "/Blog/ireland",
  },
  {
    id: 13,
    title: "Malaysia University Admission & Scholarship Guide",
    image: "/images/blog/maly.webp",
    tags: ["Malaysia", "Scholarships"],
    link: "/Blog/malaysia",
  },
  {
    id: 14,
    title: "South Korea University Admission & Scholarship Guide",
    image: "/images/blog/south-korea.webp",
    tags: ["South Korea", "Scholarships"],
    link: "/Blog/south-korea",
  },
];

const tagsList = [
  "Austria", "Canada", "China", "Denmark", "Europe", "France", 
  "Ireland", "Malaysia", "Netherlands", "South Korea", "Sweden", 
  "Turkey", "UK", "USA",
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
    setSearchQuery("");
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesTag =
        selectedTags.length === 0 ||
        selectedTags.some((selectedTag) =>
          blog.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()) ||
          blog.title.toLowerCase().includes(selectedTag.toLowerCase())
        );
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTags, searchQuery]);

  return (
    <section className="bg-white py-8 sm:py-16 px-4 sm:px-12 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl sm:text-6xl font-black text-black mb-4 uppercase tracking-tighter">
          Study Abroad <span className="text-[#0b5cff]">Blogs</span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
          The ultimate guidance for Pakistani students seeking international education in 2026.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* BLOG GRID AREA */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {filteredBlogs.length === 0 ? (
              <div className="bg-gray-50 rounded-3xl p-16 text-center border-2 border-dashed border-gray-200">
                <p className="text-xl text-gray-400 font-bold mb-6">NO RESULTS FOUND</p>
                <button
                  onClick={clearFilters}
                  className="bg-[#ef4444] text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform"
                >
                  RESET SEARCH
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => {
                  const blogPath = blog.link || `/blog/${blog.id}`;
                  return (
                    <div
                      key={blog.id}
                      className="group bg-white rounded-none border-b-8 border-[#0b5cff] hover:border-[#ef4444] transition-all duration-300 flex flex-col h-full"
                    >
                      <Link href={blogPath} className="block relative h-56 w-full overflow-hidden bg-black">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                        />
                      </Link>

                      <div className="p-6 flex-grow">
                        <Link href={blogPath}>
                          <h2 className="text-lg font-black text-black group-hover:text-[#0b5cff] leading-tight transition-colors">
                            {blog.title}
                          </h2>
                        </Link>
                      </div>

                      <div className="p-6 pt-0">
                        <Link
                          href={blogPath}
                          className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#ef4444] hover:text-[#0b5cff] transition-colors"
                        >
                          Read Guide <span>&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* SIDEBAR AREA */}
          <div className="space-y-10 order-1 lg:order-2">
            
            {/* SEARCH */}
            <div className="bg-black text-white p-8 rounded-none">
              <h2 className="text-xl font-black mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#ef4444]"></span> SEARCH
              </h2>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Keywords..."
                  className="w-full bg-white text-black px-5 py-4 font-bold outline-none border-4 border-transparent focus:border-[#0b5cff] transition-all"
                />
              </div>
            </div>

            {/* TAGS */}
            <div className="bg-[#0b5cff] text-white p-8 rounded-none shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-black uppercase">Destinations</h2>
                {selectedTags.length > 0 && (
                  <button onClick={clearFilters} className="text-[10px] font-black underline">CLEAR</button>
                )}
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                {tagsList.map((tag) => {
                  const isChecked = selectedTags.includes(tag);
                  return (
                    <label
                      key={tag}
                      className={`flex items-center gap-4 cursor-pointer p-3 transition-all ${
                        isChecked ? "bg-white text-[#0b5cff] font-black" : "hover:bg-white/10 text-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleTagChange(tag)}
                        className="hidden"
                      />
                      <span className="text-xs uppercase tracking-wider">{tag}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* CALL TO ACTION (FIXED WHATSAPP HANDLER) */}
            <div className="border-4 border-[#ef4444] p-8 text-center">
              <p className="text-black font-black text-xl mb-4 leading-none">READY TO START YOUR JOURNEY?</p>
              <button
                onClick={() =>
                  openWhatsApp(
                    "923452066100",
                    "Hi Education Zone, I am interested in Study Abroad options for 2026. Please guide me."
                  )
                }
                className="block w-full bg-[#0b5cff] text-white py-4 font-black uppercase hover:bg-black transition-colors"
              >
                Consult Experts
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}