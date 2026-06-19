"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BigChunkCard } from "@/sections/BigChunksSection/components/BigChunkCard";
import { Image } from "@/components/ui/OptimizedImage";

export const BigChunksSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const chunks = [
    {
      imageUrl:
        "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1779086939614-67025-d98bbb62-23ff-410d-96de-c55f31735ad3-1_all_172321.webp",
      price: "₹ 6.88 Cr",
      location: "In ajmer road , jaipur",
      plotArea: "117000 sq.ft",
      area: "117000 sqft",
      agentInitial: "A",
      agentName: "Ankit Sharma",
    },
    {
      imageUrl:
        "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1767593935434-43203-1000536051.webp",
      price: "₹ 25.00 Cr",
      location: "In diggi road, jaipur",
      plotArea: "5000 sq.ft",
      area: "5000 sqft",
      agentInitial: "L",
      agentName: "Lalit Kumar",
    },
  ];

  const goToPrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? chunks.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === chunks.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="box-border caret-transparent outline-[3px] mt-6 mb-10 mx-auto pt-6">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] px-2">
          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-2">
            <h2 className="relative text-green-700 text-xl font-extrabold items-center box-border caret-transparent gap-x-2 flex leading-7 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 mb-2 font-poppins md:text-2xl md:leading-8">
              Big Chunks

              <Image
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-41.svg"
                alt="Icon"
                className="text-xl box-border caret-transparent h-7 leading-7 outline-[3px] w-7 md:text-2xl md:leading-8"
              />

              <span className="absolute text-xl bg-green-700 box-border caret-transparent block h-1 leading-7 outline-[3px] w-12 rounded-full left-0 -bottom-3 md:text-2xl md:leading-8"></span>
            </h2>

            <p className="text-gray-700 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-3 mb-5 md:text-base md:leading-6 md:mb-0">
              Big chunks of property now available in Jaipur!
            </p>
          </div>
        </div>

        <div className="relative items-center box-border caret-transparent flex justify-center min-h-[380px] outline-[3px] w-full mt-3 md:min-h-[480px] md:mt-1">
          <div
            role="region"
            className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"
          >
            {/* Arrows */}
            <div className="absolute right-0 -top-16 z-10 flex gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous chunk"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next chunk"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:bg-gray-50 hover:text-gray-900"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className="w-full shrink-0 flex justify-center"
                  >
                    <div className="w-full">
                      <BigChunkCard {...chunk} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};