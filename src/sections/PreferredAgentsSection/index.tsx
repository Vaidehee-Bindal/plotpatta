"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PreferredAgentCard } from "@/sections/PreferredAgentsSection/components/PreferredAgentCard";

export const PreferredAgentsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const agents = [
    {
      initial: "P",
      agentName: "Priyam Dahlan",
      location: "Jaipur, Rajasthan",
      agencyName: "Divine Group",
      operatingSince: "2021",
      buyersServed: "400+",
      buttonText: "Contact Agent",
    },
    {
      initial: "R",
      agentName: "Ramavtar Sharma",
      location: "Jaipur, Rajasthan",
      agencyName: "Aashirwad Homes",
      operatingSince: "2015",
      buyersServed: "400+",
      buttonText: "Contact Agent",
    },
    {
      initial: "A",
      agentName: "Abhishek",
      location: "Jaipur, Rajasthan",
      agencyName: "Khedapati Realty",
      operatingSince: "2020",
      buyersServed: "200+",
      buttonText: "Contact Agent",
    },

    // Future 4th card example
    // {
    //   initial: "S",
    //   agentName: "Suresh Sharma",
    //   location: "Jaipur, Rajasthan",
    //   agencyName: "Property Hub",
    //   operatingSince: "2018",
    //   buyersServed: "500+",
    //   buttonText: "Contact Agent",
    // },
  ];

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(4); // Desktop
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet
      } else {
        setCardsPerView(1); // Mobile
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () =>
      window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, agents.length - cardsPerView);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? maxIndex : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  return (
    <section className="mt-10 mb-14 px-2 md:mt-20">
      <div className="plotpatta-wide mx-auto px-3">
        <div className="relative px-2 pr-24 md:pr-0">
          <h2 className="text-gray-900 text-xl font-extrabold leading-7 font-poppins md:text-2xl md:leading-8 break-words max-w-[220px] md:max-w-none">
            Plotpatta Preferred Agents
            <span className="block h-1 w-12 mt-1 rounded-full bg-gray-800"></span>
          </h2>

          <p className="text-gray-600 text-sm leading-5 max-w-md mt-2">
            Explore top property deals with trusted agents in Jaipur.
          </p>

          <div className="absolute right-0 top-0 flex gap-2 md:gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous agent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next agent"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${
                activeIndex * (100 / cardsPerView)
              }%)`,
            }}
          >
            {agents.map((agent, index) => (
              <div
                key={index}
                className="
                  shrink-0
                  w-full
                  md:w-1/2
                  lg:w-1/4
                "
              >
                <PreferredAgentCard {...agent} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};