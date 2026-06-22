"use client";
import React, { useState, useRef, useMemo } from 'react';
import Link from "next/link";
import Image from "next/image";
import { localities } from "@/data/localities";
import { projects } from "@/data/projects";
import { properties } from "@/data/properties";
import { getAgentByUserId } from "@/data/agents";

const getIconColorClass = (color: string) => {
  switch (color) {
    case "yellow": return "bg-yellow-500";
    case "blue": return "bg-blue-500";
    case "pink": return "bg-pink-500";
    case "green": return "bg-green-500";
    case "purple": return "bg-purple-500";
    case "orange": return "bg-orange-500";
    default: return "bg-gray-500";
  }
};

const getTagBgClass = (color: string) => {
  switch (color) {
    case "green": return "bg-green-50 text-green-700";
    case "blue": return "bg-blue-50 text-blue-700";
    case "pink": return "bg-pink-50 text-pink-700";
    case "purple": return "bg-purple-50 text-purple-700";
    case "orange": return "bg-orange-50 text-orange-700";
    default: return "bg-gray-50 text-gray-700";
  }
};

export const PopularLocalities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate actual property count per locality
  const localityStats = useMemo(() => {
    return localities.map(locality => {
      const matchingProjects = projects.filter(project => 
        project.locality.toLowerCase() === locality.name.toLowerCase()
      );
      const matchingPaidProperties = properties.filter(property => 
        property.locality.toLowerCase() === locality.name.toLowerCase() &&
        getAgentByUserId(property.user_id)?.plan_type === "Paid"
      );
      return {
        ...locality,
        totalCount: matchingProjects.length + matchingPaidProperties.length
      };
    });
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280; // card width + gap
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.max(0, currentIndex - 1));
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(Math.min(localities.length - 1, currentIndex + 1));
      }
    }
  };

  return (
    <section className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mt-16 mx-auto px-4 md:mt-20">
      <div className="bg-white shadow-lg box-border caret-transparent outline-[3px] border border-gray-100 p-8 rounded-2xl border-solid">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-3">
              <svg className="w-4 h-4 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-700 font-semibold text-sm">Explore Jaipur</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Explore Popular <span className="text-green-700">Jaipur Localities</span>
            </h2>
            <p className="text-gray-600">
              Discover premium plots in Jaipur's most prestigious locations.
            </p>
          </div>
          <Link href="/" className="mt-4 md:mt-0 inline-flex items-center gap-2 border border-green-700 text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
            View all localities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 p-3 rounded-full shadow-lg hover:bg-gray-50"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {localityStats.map((locality, index) => (
              <Link
                key={locality.slug}
                href={`/localities/${locality.slug}`}
                className="min-w-[260px] relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44">
                  <Image
                    src={locality.imageUrl || "/assets/hero-dpm-royal-enclave.png"}
                    alt={locality.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-8 h-8 ${getIconColorClass(locality.iconColor || 'yellow')} rounded-lg flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{locality.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{locality.totalCount} Properties</span>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTagBgClass(locality.tagColor || 'green')}`}>
                      {locality.tag}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {localityStats.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === Math.min(currentIndex, localityStats.length - 1) ? 'bg-green-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
