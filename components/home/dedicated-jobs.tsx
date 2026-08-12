'use client';

import React from 'react';
import Link from 'next/link';



export default function DedicatedJob() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 md:p-12 flex flex-col items-center">
      
      {/* Navigation */}
      <div className="w-full max-w-5xl mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-slate-800 font-bold bg-white border border-slate-200 px-4 py-2 rounded-lg shadow hover:bg-slate-50 transition"
        >
          ← Back to All Jobs
        </Link>
      </div>

      {/* Main Full Page Container */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-2xl p-6 md:p-10 border-t-8 border-red-500">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-500">
            Educational Counselor
          </h1>
          <p className="text-lg font-bold text-blue-600 mt-2">
            🏢 D. Education Zone
          </p>
          <p className="text-xs text-slate-500 mt-2">📅 Posted 8 months ago</p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-slate-800">
          <section>
            <h2 className="text-xl font-bold text-red-500 border-b-2 border-blue-600 pb-1 mb-2">
              About the Job
            </h2>
            <p className="leading-relaxed text-slate-700">
              Are you someone who loves talking to people? Are you an extraordinary professional looking to change your line of work? Do you have natural charisma and want to use that to help people make good decisions in their lives?
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-500 border-b-2 border-blue-600 pb-1 mb-2">
              Company Description
            </h2>
            <p className="leading-relaxed text-slate-700">
              D. Education Zone is a premier education consultation organization dedicated to overseas education guidance. We partner with leading international institutions worldwide to empower students with reliable advice and seamless admission processes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-500 border-b-2 border-blue-600 pb-1 mb-2">
              Role Description
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Advise students on selecting suitable academic pathways.</li>
              <li>Provide comprehensive guidance regarding visa procedures and requirements.</li>
              <li>Maintain strong interpersonal connections with candidates and parents.</li>
              <li>Participate in public educational seminars and outreach programs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-500 border-b-2 border-blue-600 pb-1 mb-2">
              Benefits
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Market competitive salary packages.</li>
              <li>Performance-based bonuses and quarterly incentives.</li>
              <li>On-job training and personal growth opportunities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-500 border-b-2 border-blue-600 pb-1 mb-2">
              Requirements
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Bachelor's degree or higher.</li>
              <li>Exceptional communication and organization skills.</li>
              <li>Freshers are highly encouraged to apply.</li>
            </ul>
          </section>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="mt-10 border-t-2 border-slate-200 pt-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-red-500 mb-6">
            Apply For This Job
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full rounded-md border border-slate-300 p-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full rounded-md border border-slate-300 p-2.5 text-sm focus:border-blue-600 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="w-full rounded-md border border-slate-300 p-2.5 text-sm focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              required
              className="w-full rounded-md border border-slate-300 p-2.5 text-sm focus:border-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Attach Resume <span className="text-red-500">*</span>
            </label>
            <input type="file" required className="w-full text-sm text-slate-500" />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-red-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}