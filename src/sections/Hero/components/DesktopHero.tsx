"use client";

import { Check, ChevronDown, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Image } from "@/components/ui/OptimizedImage";

const cityOptions = ["Kota", "Jaipur", "Jodhpur", "Ajmer", "Udaipur"];
const propertyTypeOptions = ["Residential", "Commercial", "Industrial"];

const heroSlides = [
  {
    id: 1,
    image: "/assets/hero-dpm-royal-enclave.png",
    alt: "DPM Royal Enclave banner"
  },
  {
    id: 2,
    image: "/assets/hero-shree-govind.png",
    alt: "Shree Govind Residency banner"
  }
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const DesktopHero = () => {
  const router = useRouter();
  const [city, setCity] = useState("Jaipur");
  const [propertyType, setPropertyType] = useState("Residential");
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState<"city" | "property" | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    const query = search.trim();

    if (query) {
      router.push(`/localities/${slugify(query)}`);
      return;
    }

    router.push(`/localities/${slugify(city)}`);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative box-border caret-transparent hidden h-[300px] max-h-[560px] min-h-60 outline-[3px] w-full mb-20 md:mx-auto md:block md:h-[420px] md:max-w-screen-2xl md:mb-24 overflow-visible">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <Image
              src={slide.image}
              alt={slide.alt}
              width={8000}
              height={907}
              sizes="100vw"
              quality={100}
              unoptimized
              priority
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevSlide}
        className="absolute text-white text-lg items-center backdrop-blur-md bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_4px_20px_0px] caret-transparent flex h-12 w-12 justify-center leading-7 outline-[3px] text-center transform-none z-20 border p-0 rounded-full border-white/20 left-6 top-1/2 md:opacity-100 hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute text-white text-lg items-center backdrop-blur-md bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_4px_20px_0px] caret-transparent flex h-12 w-12 justify-center leading-7 outline-[3px] text-center transform-none z-20 border p-0 rounded-full border-white/20 right-6 top-1/2 md:opacity-100 hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      {/* Dark Green Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-emerald-800"></div>
      <div className="absolute box-border caret-transparent flex justify-center outline-[3px] z-50 w-full left-0 bottom-[-60px] md:flex">
        <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-[90%] md:min-h-[auto] md:min-w-[auto]">
          <div className="bg-yellow-300 shadow-2xl box-border caret-transparent max-w-3xl min-h-0 min-w-0 outline-[3px] w-full p-3 rounded-xl md:min-h-[auto] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent gap-x-6 flex flex-col outline-[3px] gap-y-6 md:flex-row">
              {/* City Selector */}
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-semibold box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-3 md:min-h-[auto] md:min-w-[auto]">
                  City
                </label>
                <div className="relative">
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={openMenu === "city"}
                    onClick={() => setOpenMenu(openMenu === "city" ? null : "city")}
                    className="text-sm items-center bg-white caret-transparent flex h-12 justify-between leading-5 min-h-0 min-w-0 outline-[3px] text-left w-full border border-gray-200 px-4 py-2 rounded-xl transition-all duration-300 hover:border-yellow-400 hover:shadow-md md:min-h-[auto] md:min-w-[auto]"
                  >
                    <span className="font-semibold text-gray-900">
                      {city}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${openMenu === "city" ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === "city" ? (
                    <div className="absolute z-50 mt-2 w-full rounded-2xl bg-white p-2 text-left shadow-2xl ring-1 ring-gray-200">
                      {cityOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setCity(option);
                            setOpenMenu(null);
                          }}
                          className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-base transition-colors ${city === option ? "bg-yellow-50 text-yellow-800" : "text-gray-900 hover:bg-gray-50"}`}
                        >
                          <Check className={`h-5 w-5 ${city === option ? "opacity-100" : "opacity-0"}`} />
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Property Type Selector */}
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-semibold box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-3 md:min-h-[auto] md:min-w-[auto]">
                  Property Type
                </label>
                <div className="relative">
                  <button
                    type="button"
                    role="combobox"
                    aria-expanded={openMenu === "property"}
                    onClick={() => setOpenMenu(openMenu === "property" ? null : "property")}
                    className="text-sm items-center bg-white caret-transparent flex h-12 justify-between leading-5 min-h-0 min-w-0 outline-[3px] text-left w-full border border-gray-200 px-4 py-2 rounded-xl transition-all duration-300 hover:border-yellow-400 hover:shadow-md md:min-h-[auto] md:min-w-[auto]"
                  >
                    <span className="font-semibold text-gray-900">
                      {propertyType}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${openMenu === "property" ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === "property" ? (
                    <div className="absolute z-50 mt-2 w-full rounded-2xl bg-white p-2 text-left shadow-2xl ring-1 ring-gray-200">
                      {propertyTypeOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setPropertyType(option);
                            setOpenMenu(null);
                          }}
                          className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-base transition-colors ${propertyType === option ? "bg-yellow-50 text-yellow-800" : "text-gray-900 hover:bg-gray-50"}`}
                        >
                          <Check className={`h-5 w-5 ${propertyType === option ? "opacity-100" : "opacity-0"}`} />
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Search Input */}
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow-[2] min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-semibold box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-3 md:min-h-[auto] md:min-w-[auto]">
                  Search
                </label>
                <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  <input
                    placeholder="Search projects or localities..."
                    role="combobox"
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    className="text-sm bg-white box-border h-12 leading-5 outline-transparent outline-offset-2 outline outline-2 w-full border border-gray-300 px-4 py-2 rounded-xl border-solid transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/15"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button
                type="button"
                onClick={handleSearch}
                className="text-white text-sm font-medium items-center bg-teal-800 caret-transparent flex h-12 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap px-4 py-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-900 hover:shadow-lg md:min-h-[auto] md:min-w-[auto]"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
