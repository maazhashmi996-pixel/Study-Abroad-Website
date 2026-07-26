"use client";

import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function OfficeSearch() {
  return (
    <section className="bg-white py-10 shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-5">

          <div className="flex items-center border rounded-lg px-4">
            <FaMapMarkerAlt className="text-[#d4af37]" />

            <input
              type="text"
              placeholder="Search by City"
              className="w-full p-4 outline-none"
            />
          </div>

          <select className="border rounded-lg p-4 outline-none">
            <option>All Countries</option>
            <option>Pakistan</option>
            <option>UAE</option>
            <option>United Kingdom</option>
          </select>

          <button className="bg-[#d4af37] text-white rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#b8922d] transition">
            <FaSearch />
            Search Office
          </button>

        </div>

      </div>
    </section>
  );
}