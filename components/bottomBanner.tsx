// components/BottomBanner.jsx
"use client";
import React, { useState } from "react";

export default function BottomBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Icon (Left Bottom) */}
      <div className="fixed bottom-16 left-4 z-50">
        <a 
          href="https://wa.me/923452066100" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
        >
          💬 {/* Aap yahan koi WhatsApp Icon SVG lagayein */}
        </a>
      </div>

      {/* Chat With Us Button (Right Bottom) */}
      <div className="fixed bottom-16 right-4 z-50">
        <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 hover:bg-red-700 transition">
          <span>💬</span>
          <span className="text-sm font-semibold">Chat with us</span>
        </button>
      </div>

      {/* Cookie Banner (Full Width Bottom Bar) */}
      <div className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-3 px-6 flex flex-col md:flex-row justify-between items-center z-40 text-sm gap-2">
        <p>
          We use cookies to improve your experience and track campaign performance.{" "}
          <a href="#" className="underline text-blue-400">Learn more</a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="border border-gray-400 text-gray-300 hover:text-white hover:border-white px-4 py-1 rounded transition text-xs"
        >
          Decline
        </button>
      </div>
    </>
  );
}