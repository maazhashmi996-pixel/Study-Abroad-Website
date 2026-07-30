"use client";

import React, { useState, useEffect, useMemo } from "react";

function Popular() {
  const [uniSlideIndex, setUniSlideIndex] = useState(0);
  const [isUniPaused, setIsUniPaused] = useState(false);

  // Group arrays inside a memoized structure to keep the code DRY
  const rowsData = useMemo(() => [
    [
      { text: "Harvard University" },
      { text: "University of Oxford" },
      { text: "Stanford University" },
      { text: "MIT" },
      { text: "University of Cambridge" },
      { text: "Caltech" },
      { text: "ETH Zurich" },
      { text: "UCL" },
      { text: "Imperial College" },
    ],
    [
      { text: "University of Toronto" },
      { text: "NUS Singapore" },
      { text: "Princeton University" },
      { text: "Yale University" },
      { text: "Columbia University" },
      { text: "University of Tokyo" },
      { text: "EPFL" },
      { text: "University of Melbourne" },
      { text: "McGill University" },
    ],
    [
      { text: "Peking University" },
      { text: "Tsinghua University" },
      { text: "University of Sydney" },
      { text: "LMU Munich" },
      { text: "King's College London" },
      { text: "NYU" },
      { text: "Monash University" },
      { text: "University of Amsterdam" },
      { text: "KAIST" },
    ],
  ], []);

  // Auto-slide effect (cycles every 3 seconds)
  useEffect(() => {
    if (isUniPaused) return;

    const interval = setInterval(() => {
      setUniSlideIndex((prev) => (prev + 1) % rowsData[0].length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isUniPaused, rowsData]);

  // Helper function to return 7 items in a wrapping loop
  const getVisibleLogos = (logosArray) => {
    const itemsToShow = 7;
    const visibleLogos = [];
    const total = logosArray.length;

    for (let i = 0; i < Math.min(itemsToShow, total); i++) {
      visibleLogos.push(logosArray[(uniSlideIndex + i) % total]);
    }

    return visibleLogos;
  };

  const handlePrev = (length) => {
    setUniSlideIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleNext = (length) => {
    setUniSlideIndex((prev) => (prev + 1) % length);
  };

  return (
    <section className="bg-[#f7a600] py-14 px-6 lg:px-16 border-t border-[#3b2768]/10 text-[#3b2768]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#3b2768]">
            Popular And Partner Universities
          </h2>
          <p className="text-[#3b2768] font-semibold text-lg">
            Universities And Institutions We Serve
          </p>
        </div>

        {/* Carousel Grid */}
        <div
          className="space-y-6 pt-4"
          onMouseEnter={() => setIsUniPaused(true)}
          onMouseLeave={() => setIsUniPaused(false)}
        >
          {rowsData.map((rowLogos, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex items-center space-x-3">
              
              {/* Prev Button */}
              <button
                onClick={() => handlePrev(rowLogos.length)}
                aria-label={`Previous universities row ${rowIndex + 1}`}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❮
              </button>

              {/* Logo Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 flex-1 items-center">
                {getVisibleLogos(rowLogos).map((logo, idx) => (
                  <div
                    key={`r${rowIndex}-${logo.text}-${idx}`}
                    className="bg-white/10 hover:bg-white/30 p-3 rounded-xl flex items-center justify-center min-h-[60px] text-center font-extrabold text-xs text-[#3b2768] shadow-sm transition-all border border-[#3b2768]/10 cursor-pointer"
                  >
                    {logo.text}
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handleNext(rowLogos.length)}
                aria-label={`Next universities row ${rowIndex + 1}`}
                className="text-[#3b2768] hover:text-black font-black text-2xl px-2 transition-transform active:scale-90"
              >
                ❯
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Popular;