"use client";

import React, { useState } from "react";

export default function EnglishPrepTest() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const handleOptionChange = (questionId: string, value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        
        {/* Header Section */}
        <header className="bg-slate-900 text-white px-6 py-5 border-b-4 border-blue-600 flex justify-between items-center">
          <div className="text-xl font-bold tracking-wide">
            D. <span className="text-blue-500">Education Zone</span>
          </div>
          <div className="bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full shadow-sm">
            Time Remaining: 14:59
          </div>
        </header>

        {/* Test Content Container */}
        <div className="p-6 sm:p-10">
          
          {/* Section Header */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Module 1: Vocabulary & Comprehension
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              English Language Proficiency Test
            </h2>
          </div>

          {/* Passage / Instructions Block */}
          <div className="bg-slate-50 border-l-4 border-slate-600 p-4 rounded-r-lg mb-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900">Instructions:</strong> Read the questions carefully and select the correct option that completes the sentence or identifies the closest meaning.
            </p>
          </div>

          {/* Question 1 */}
          <div className="border-b border-slate-200 pb-6 mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              1. Despite the team&apos;s initial hesitation, the project was completed <span className="underline decoration-blue-600 decoration-2">_______</span> schedule.
            </h3>
            <div className="space-y-3">
              {[
                { id: "q1-a", val: "A", label: "A) ahead of" },
                { id: "q1-b", val: "B", label: "B) under" },
                { id: "q1-c", val: "C", label: "C) over" },
                { id: "q1-d", val: "D", label: "D) forward" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                    selectedAnswers["q1"] === opt.val
                      ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                      : "border-slate-200 hover:border-blue-500 hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <input
                    type="radio"
                    name="q1"
                    value={opt.val}
                    checked={selectedAnswers["q1"] === opt.val}
                    onChange={() => handleOptionChange("q1", opt.val)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
                  />
                  <span className="ml-3 text-sm sm:text-base">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="border-b border-slate-200 pb-6 mb-8">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              2. Select the synonym for the word <strong className="text-blue-600">PRAGMATIC</strong>:
            </h3>
            <div className="space-y-3">
              {[
                { id: "q2-a", val: "A", label: "A) Idealistic" },
                { id: "q2-b", val: "B", label: "B) Practical" },
                { id: "q2-c", val: "C", label: "C) Theoretical" },
                { id: "q2-d", val: "D", label: "D) Unrealistic" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex items-center px-4 py-3 border rounded-lg cursor-pointer transition-all ${
                    selectedAnswers["q2"] === opt.val
                      ? "border-blue-600 bg-blue-50/50 text-blue-900 font-medium"
                      : "border-slate-200 hover:border-blue-500 hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <input
                    type="radio"
                    name="q2"
                    value={opt.val}
                    checked={selectedAnswers["q2"] === opt.val}
                    onChange={() => handleOptionChange("q2", opt.val)}
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 accent-blue-600"
                  />
                  <span className="ml-3 text-sm sm:text-base">{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
            <button
              type="button"
              className="text-red-600 hover:text-red-700 text-sm font-semibold transition-colors flex items-center gap-1.5"
            >
              🚩 Flag question for review
            </button>
            <button
              type="button"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Practice Test
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}