'use client';

import React from 'react';

interface QuickApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Quick({ isOpen, onClose }: QuickApplyModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm transition-opacity">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white p-6 md:p-8 shadow-2xl border-t-8 border-blue-600">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 font-bold text-red-800 hover:bg-slate-200 transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-red-500">
            Educational Counselor
          </h2>
          <p className="text-lg font-semibold text-blue-600 flex items-center gap-2 mt-1">
            🏢 D. Education Zone
          </p>
          <span className="inline-block mt-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            📅 Posted 8 months ago
          </span>
        </div>

        {/* Job Details Content */}
        <div className="space-y-6 text-slate-800 text-sm md:text-base border-t border-slate-200 pt-4">
          <section>
            <h3 className="text-lg font-bold text-red-800 border-b-2 border-blue-600 pb-1 mb-2">
              About the Job
            </h3>
            <p className="leading-relaxed text-slate-700">
              Are you someone who loves talking to people? Are you an extraordinary professional looking to change your line of work? Do you have natural charisma and want to use that to help students achieve their study abroad goals? If you answered yes to these questions, this job might be the perfect fit for you!
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-red-800 border-b-2 border-blue-600 pb-1 mb-2">
              Company Description
            </h3>
            <p className="leading-relaxed text-slate-700">
              Established as a premier educational advisory, <strong>D. Education Zone</strong> provides top-tier consultation for higher studies abroad. We represent leading international universities and operate with deep industry expertise, providing end-to-end guidance to empower students in making informed academic decisions.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-red-800 border-b-2 border-blue-600 pb-1 mb-2">
              Role Description
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
              <li>Guide students in selecting academic paths and overseas study destinations.</li>
              <li>Communicate empathetically and efficiently to address student and parent queries.</li>
              <li>Participate in educational seminars, public speaking events, and counseling workshops.</li>
              <li>Engage in professional development programs to advance as a certified counselor.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-red-800 border-b-2 border-blue-600 pb-1 mb-2">
              Requirements
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-700">
              <li>Graduation or relevant professional qualification.</li>
              <li>Strong interpersonal and communication skills.</li>
              <li>Basic digital literacy (MS Office, Web portals).</li>
              <li>Freshers are welcome and encouraged to apply.</li>
            </ul>
          </section>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="mt-8 border-t-2 border-dashed border-slate-300 pt-6 space-y-4">
          <h3 className="text-xl font-bold text-red-800 mb-4">Apply For This Job</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Name <span className="text-red-800">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
                Email <span className="text-red-800">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Phone <span className="text-red-800">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="0300 1234567"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Cover Letter <span className="text-red-800">*</span>
            </label>
            <textarea
              rows={3}
              required
              placeholder="Briefly describe why you are a good fit..."
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase mb-1">
              Attach Resume <span className="text-red-800">*</span>
            </label>
            <input
              type="file"
              required
              className="w-full text-sm text-slate-500 file:mr-4 file:rounded-md file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-slate-800 hover:file:bg-slate-200 cursor-pointer"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-300 transition"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition shadow-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}