'use client';

import React, { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('signup'); // 'signup' or 'login'
  const [authMethod, setAuthMethod] = useState('email'); // 'email' or 'phone'

  const openSignUp = () => {
    setModalMode('signup');
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setModalMode('login');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
    

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <span className="inline-block bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          🚀 Smarter Learning for Everyone
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          Master Any Subject with <br />
          <span className="text-slate-600">Interactive Study Tools</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Access thousands of interactive flashcards, practice quizzes, and collaborative study groups all in one organized space.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex items-center bg-white border border-slate-300 rounded-xl shadow-lg p-2 mb-12">
          <input
            type="text"
            placeholder="Search subjects, flashcards, or topics..."
            className="w-full px-4 py-2 text-slate-700 focus:outline-none"
          />
          <button className="bg-slate-600 hover:bg-slate-700 text-slate-900 font-medium px-6 py-2.5 rounded-lg transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Everything You Need to Ace Your Exams</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              🎴
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Flashcards</h3>
            <p className="text-slate-600 leading-relaxed">
              Utilize spaced repetition to memorize definitions, concepts, and formulas effortlessly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              📝
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Practice Quizzes</h3>
            <p className="text-slate-600 leading-relaxed">
              Test your knowledge with instant feedback, explanations, and custom difficulty settings.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              👥
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Study Groups</h3>
            <p className="text-slate-600 leading-relaxed">
              Connect with classmates, share notes, and solve complex problems together in real-time.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-600 text-white my-16 max-w-6xl mx-auto rounded-3xl p-12 text-center shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to boost your grades?</h2>
        <p className="text-slate-100 max-w-lg mx-auto mb-8">
          Join thousands of students who study smarter, not harder. Free forever for individuals.
        </p>
        <button 
          onClick={openSignUp}
          className="bg-white text-slate-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition-colors shadow-md"
        >
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} StudySpace. All rights reserved.</p>
      </footer>

      {/* Auth Modal (Sign Up / Log In) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {modalMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {modalMode === 'signup' 
                  ? 'Start learning smarter today for free' 
                  : 'Log in to access your study materials'}
              </p>
            </div>

            {/* Email / Phone Method Tabs */}
            <div className="flex border-b border-slate-200 mb-6">
              <button
                onClick={() => setAuthMethod('email')}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors border-b-2 ${
                  authMethod === 'email'
                    ? 'border-slate-600 text-slate-600'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Email Address
              </button>
              <button
                onClick={() => setAuthMethod('phone')}
                className={`flex-1 pb-3 text-sm font-semibold transition-colors border-b-2 ${
                  authMethod === 'phone'
                    ? 'border-slate-600 text-slate-600'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                Phone Number
              </button>
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Full Name field only shown during Sign Up */}
              {modalMode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    required
                  />
                </div>
              )}

              {/* Email or Phone Input Field */}
              {authMethod === 'email' ? (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@university.edu"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                    required
                  />
                </div>
              )}

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
                  required
                />
              </div>

              {/* Extras for Log In view */}
              {modalMode === 'login' && (
                <div className="flex justify-between items-center text-xs">
                  <label className="flex items-center text-slate-600 cursor-pointer">
                    <input type="checkbox" className="mr-2 rounded border-slate-300 text-slate-600 focus:ring-slate-600" />
                    Remember me
                  </label>
                  <a href="#" className="text-slate-600 hover:underline">Forgot password?</a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
              >
                {modalMode === 'signup' ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* Toggle Link Between Sign Up and Log In */}
            <p className="text-center text-xs text-slate-500 mt-6">
              {modalMode === 'signup' ? (
                <>
                  Already have an account?{' '}
                  <button 
                    onClick={() => setModalMode('login')}
                    className="text-slate-600 font-semibold hover:underline bg-transparent border-0 cursor-pointer p-0"
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setModalMode('signup')}
                    className="text-slate-600 font-semibold hover:underline bg-transparent border-0 cursor-pointer p-0"
                  >
                    Sign up free
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}