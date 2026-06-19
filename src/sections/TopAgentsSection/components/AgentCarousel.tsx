"use client";

import { ChevronLeft, ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { useState } from "react";
import { Image } from "@/components/ui/OptimizedImage";

// Agent data
const agents = [
  {
    name: "Sandeep kumar",
    company: "Shree jee Ananta Group",
    rera: "RAJ/A/2026/20159",
    workingSince: "2024",
    plotsForSale: "8",
    sqYdSold: "5K+",
    specialization: "Plots & Land Investments",
    operatesIn: "Ajmer road +2 more, Jaipur",
    image: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_IMG-20260519-WA0030_-_Devendra_Tanwar_xcj4y7_im73ay.webp",
    verifiedBadge: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_IMG-20260519-WA0039_-_Devendra_Tanwar_gvmhj6_s8h868.webp",
    builderLogo: "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
  },
  {
    name: "Gajendra Bagda",
    company: "Garvit Properties",
    rera: "RAJ/A/2023/7266",
    workingSince: "2020",
    plotsForSale: "22",
    sqYdSold: "15K+",
    specialization: "Plots & Land Investments",
    operatesIn: "Ajmer Road +2 more, Jaipur",
    image: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_20260414_143518_-_Devendra_Tanwar_ygdt74_fhvt3p.webp",
    verifiedBadge: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_Screenshot_20260414_144415_Chrome_-_Devendra_Tanwar_qhbvkw_xx2n3q.webp",
    builderLogo: "https://c.animaapp.com/mqj9un6oir889A/assets/download_2520_285_29_hgdbck.webp",
  },
  {
    name: "Vinod Banshiwal",
    company: "Rise Ventures",
    rera: "RAJ/A/2024/2574",
    workingSince: "2021",
    plotsForSale: "17",
    sqYdSold: "16K+",
    specialization: "Plots & Land Investments",
    operatesIn: "Jagatpura +3 more, Jaipur",
    image: "https://c.animaapp.com/mqj9un6oir889A/assets/IMG-20260430-WA0017_-_Devendra_Tanwar_bzpsfz.jpg",
    verifiedBadge: "https://c.animaapp.com/mqj9un6oir889A/assets/IMG-20260430-WA0016_-_Devendra_Tanwar_rkxrzs.jpg",
    builderLogo: "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
  },
  {
    name: "Ganesh Saini",
    company: "Vardan Empire",
    rera: "RAJ/A/2020/1602",
    workingSince: "2018",
    plotsForSale: "9",
    sqYdSold: "9K+",
    specialization: "Plots & Land Investments",
    operatesIn: "Mahindra Sez +2 more, Jaipur",
    image: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_compressed_IMG-20260416-WA0001_-_Devendra_Tanwar_1_fjlm5w_zyswis.webp",
    verifiedBadge: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_compressed_IMG-20260416-WA0001_-_Devendra_Tanwar_1_fjlm5w_zyswis-1.webp",
    builderLogo: "https://c.animaapp.com/mqj9un6oir889A/assets/download_2520_285_29_hgdbck.webp",
  },
];

const AgentCard = ({ agent }: { agent: typeof agents[0] }) => {
  return (
    <article className="group w-full shrink-0 overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:w-[calc(50%-8px)]">
      <div className="flex flex-col md:flex-row">
        {/* Left section - Image & contact */}
        <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-emerald-200 p-6 md:w-[320px]">
          <div className="flex flex-col items-center rounded-2xl bg-white/85 p-4 backdrop-blur-md shadow-lg">
            <Image
              src={agent.image}
              alt={agent.name}
              width={128}
              height={128}
              className="h-28 w-28 rounded-2xl border-4 border-green-700 object-cover shadow-md"
            />
            <Image
              src={agent.verifiedBadge}
              alt="Verified"
              width={56}
              height={56}
              className="mt-3 h-12 w-12 object-contain"
            />
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-green-800 to-green-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:from-green-700 hover:to-green-500">
              Contact Agent
            </button>
          </div>
        </div>

        {/* Right section - Details */}
        <div className="flex flex-1 flex-col justify-between p-5 md:p-7">
          <div className="space-y-2">
            <h3 className="font-poppins text-2xl font-bold leading-tight text-gray-900">
              {agent.name}
            </h3>
            <p className="text-base text-gray-600">{agent.company}</p>
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              <CheckCircle2 className="h-3.5 w-3.5 fill-green-700 text-green-700" />
              <span>RERA: {agent.rera}</span>
            </div>
            <p className="text-sm font-bold text-gray-500">
              Working since: {agent.workingSince}
            </p>
          </div>

          {/* Stats grid */}
          <div className="mt-5 grid grid-cols-2 gap-4 border-b border-gray-200 pb-5">
            <div>
              <p className="font-poppins text-2xl font-bold text-green-700">
                {agent.plotsForSale}
              </p>
              <p className="text-sm text-gray-500">Plots For Sale</p>
            </div>
            <div>
              <p className="font-poppins text-2xl font-bold text-green-700">
                {agent.sqYdSold}
              </p>
              <p className="text-sm text-gray-500">Sq. Yd. Sold</p>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Specialization
              </p>
              <p className="text-sm text-gray-600">{agent.specialization}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Operates in
              </p>
              <p className="text-sm text-gray-600">{agent.operatesIn}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const AgentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(agents.length / itemsPerSlide);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === totalSlides - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="relative w-full">
      {/* Navigation arrows */}
      <div className="absolute right-0 -top-16 z-10 flex gap-3 md:right-8">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={totalSlides <= 1}
          aria-label="Previous agent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          disabled={totalSlides <= 1}
          aria-label="Next agent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * itemsPerSlide;
            const slideAgents = agents.slice(startIndex, startIndex + itemsPerSlide);

            return (
              <div
                key={slideIndex}
                className="flex w-full shrink-0 gap-4"
              >
                {slideAgents.map((agent) => (
                  <AgentCard key={agent.name} agent={agent} />
                ))}
                {/* If only one agent in last slide, show empty space */}
                {slideAgents.length === 1 && (
                  <div className="hidden md:block md:w-[calc(50%-8px)]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
