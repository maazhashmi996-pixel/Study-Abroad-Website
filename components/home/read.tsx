'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import QuickApplyModal from "@/components/home/quick"
import DedicatedJobs from "@/components/home/dedicated-jobs"

export default function ReadPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobs, setIsJobs] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-12 flex flex-col items-center">
      
      {/* Navbar Header */}
      <div className="w-full max-w-4xl mb-8 flex justify-between items-center bg-slate-900 text-white p-4 rounded-xl shadow-lg border-b-4 border-red-800">
        <h1 className="text-xl md:text-2xl font-black tracking-wide text-white">
          D. EDUCATION ZONE
        </h1>
        <span className="text-xs md:text-sm font-medium bg-red-500 text-white px-3 py-1 rounded-md">
          Careers Portal
        </span>
      </div>

      {/* Main Job Card */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-8 border-red-600">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-red-500">
              Educational Counselor
            </h2>
            <p className="text-blue-600 font-semibold mt-1 flex items-center gap-1">
              🏢 D. Education Zone
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick Apply Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-500 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition"
            >
              Quick Apply
            </button>

            {/* Apply Now Button */}
            <Link
            href="/dedicated-jobs"
              className="bg-blue-600 hover:bg-red-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition inline-block text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="my-4 text-slate-500 font-medium text-sm flex items-center gap-2">
          📅 Posted 8 months ago
        </div>

        <p className="text-slate-700 text-base leading-relaxed">
          <strong className="text-red-500">About the job:</strong> Are you someone who loves talking to people? Are you an extraordinary professional who’s looking to change your line of work? Do you have a natural charisma and want to use that to help students achieve their goals...
        </p>
      </div>

      {/* Quick Apply Modal */}
      <QuickApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
     
    </main>
  );
}