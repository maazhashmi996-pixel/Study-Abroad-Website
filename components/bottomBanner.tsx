"use client";
import React, { useState } from "react";

export default function BottomBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  // Step 1: Initial Preview Card | Step 2: Full Form
  const [chatStep, setChatStep] = useState(1);

  // Toggle widget state reset
  const handleToggleChat = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
      setChatStep(1); // Close karne par step 1 par reset kar dein
    } else {
      setIsChatOpen(true);
    }
  };

  return (
    <>
      {/* 1. Chat Modal Popup (Right Side Widget) */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[300px] sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden font-sans transition-all">
          
          {/* STEP 1: Initial Preview Card (Let's talk) */}
          {chatStep === 1 && (
            <div className="p-5 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Let's talk</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Your trusted partner for study abroad dreams
                </p>
              </div>

              {/* Bottom Card Inside Preview */}
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    We are away at the moment
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    We will be back online tomorrow
                  </p>
                </div>

                <button
                  onClick={() => setChatStep(2)}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 transition"
                >
                  Start Conversation <span className="text-sm">→</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-gray-400 pt-2">
                ⚡ Powered by OmniChat
              </p>
            </div>
          )}

          {/* STEP 2: Full Details Form */}
          {chatStep === 2 && (
            <div>
              {/* Header with Back & Close */}
              <div className="bg-white p-4 border-b flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    Times Consultant
                  </h3>
                  <p className="text-xs text-gray-500">
                    We will be back online tomorrow
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setChatStep(1)}
                    className="text-xs text-gray-400 hover:text-gray-600 font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleToggleChat}
                    className="text-gray-400 hover:text-gray-600 text-sm font-bold ml-1"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Form Body */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message Sent!");
                  handleToggleChat();
                }}
                className="p-4 space-y-3 bg-slate-50/50"
              >
                <p className="text-xs text-gray-600">
                  Please share your details to make this conversation more fruitful
                </p>

                {/* Email Id */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">
                    Phone number
                  </label>
                  <div className="flex border border-gray-300 rounded-md overflow-hidden bg-white">
                    <span className="px-2.5 py-2 bg-gray-100 text-xs border-r text-gray-600">
                      🌐
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-600 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Please enter your message"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 bg-white resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs py-2.5 rounded-md transition shadow-sm"
                >
                  Start Conversation
                </button>

                <p className="text-[10px] text-center text-gray-400 pt-1">
                  ⚡ Powered by OmniChat
                </p>
              </form>
            </div>
          )}
        </div>
      )}

      {/* 2. WhatsApp Floating Icon (Left Bottom) */}
      <div className="fixed bottom-16 left-4 z-50">
        <a
          href="https://wa.me/923452066100"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
        >
          💬
        </a>
      </div>

      {/* 3. Floating Action Toggle Button (Right Bottom) */}
      <div className="fixed bottom-16 right-4 z-50">
        <button
          onClick={handleToggleChat}
          className={`p-3 rounded-full shadow-lg flex items-center justify-center transition text-white ${
            isChatOpen
              ? "bg-red-600 hover:bg-red-700 w-11 h-11"
              : "bg-red-600 hover:bg-red-700 px-4 py-2 space-x-2"
          }`}
        >
          {isChatOpen ? (
            <span className="text-base font-bold">✕</span>
          ) : (
            <>
              <span>💬</span>
              <span className="text-sm font-semibold">Chat with us</span>
            </>
          )}
        </button>
      </div>

      {/* 4. Cookie Banner (Bottom Bar) */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-3 px-6 flex flex-col md:flex-row justify-between items-center z-40 text-sm gap-2">
          <p className="text-xs sm:text-sm">
            We use cookies to improve your experience and track campaign performance.{" "}
            <a href="#" className="underline text-blue-400">
              Learn more
            </a>
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => setIsVisible(false)}
              className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-4 py-1 rounded transition text-xs"
            >
              Decline
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="border border-gray-400 bg-green-900 text-gray-300 hover:text-white hover:border-white px-4 py-1 rounded transition text-xs"
            >
              Accept All
            </button>
          </div>
        </div>
      )}
    </>
  );
}