"use client";

import { CheckCircle2, ChevronLeft, ChevronRight, Heart, Link2, Phone, Share2, Ruler, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Image } from "@/components/ui/OptimizedImage";


export type ProjectCarouselProps = {
  variant: string;
  projects: {
    imageUrl: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    location: string;
    price: string;
    desktopPrice: string;
    averagePrice: string;
    sizeStartsAt: string;
    roadWidth: string;
    approvedBy: string;
    amenities: string[];
    nearby: string[];
    builderName: string;
    builderType: string;
    builderLogoUrl: string;
    builderLogoAlt: string;
    builderInitial: string;
  }[];
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const ProjectCarousel = ({ variant, projects }: ProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [savedProjects, setSavedProjects] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);
  const isFeatured = variant === "featured";

const itemsPerSlide = isFeatured
  ? (isMobile ? 1 : 2)
  : 1;

const totalSlides = isFeatured
  ? Math.max(1, projects.length - itemsPerSlide + 1)
  : Math.ceil(projects.length / itemsPerSlide);

  if (!projects.length) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? totalSlides - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === totalSlides - 1 ? 0 : current + 1));
  };

  const toggleSaved = (title: string) => {
    setSavedProjects((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  const shareProject = async (projectTitle: string) => {
    const url = `${window.location.origin}/projects/${slugify(projectTitle)}`;

    if (navigator.share) {
      await navigator.share({ title: projectTitle, url });
      return;
    }

    await navigator.clipboard?.writeText(url);
    window.alert("Project link copied");
  };

  // Render single project card for default variant
  const renderDefaultCard = (project: any) => {
    const isSaved = savedProjects.includes(project.title);
    return (
      <article
        key={project.title}
        className="group grid w-full shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_1fr]"
      >
        <div className="relative min-h-[260px] overflow-hidden bg-slate-100 md:min-h-[410px]">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute left-5 top-4 flex items-center gap-2 rounded-md bg-rose-50 px-4 py-2 text-sm font-bold text-emerald-800">
            <CheckCircle2 className="h-4 w-4 fill-emerald-700 text-emerald-700" />
            {project.badgeText}
          </div>
        </div>

        <div className="relative flex flex-col justify-between bg-emerald-50 p-5 md:p-6">
          <div className="absolute right-5 top-4 flex gap-3">
            <button
              type="button"
              onClick={() => toggleSaved(project.title)}
              aria-label={isSaved ? "Remove saved project" : "Save project"}
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-400 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50"
            >
              <Heart className={`h-5 w-5 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
            </button>
            <button
              type="button"
              onClick={() => shareProject(project.title)}
              aria-label="Share project"
              className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber-400 bg-white text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50"
            >
              <Link2 className="h-5 w-5" />
            </button>
          </div>

          <div className="pr-28">
            <h3 className="font-poppins text-2xl font-bold leading-tight text-slate-950">
              {project.title}
            </h3>
            <p className="mt-2 text-base text-slate-600">{project.location}</p>
            <p className="mt-3 text-2xl font-bold text-emerald-700">
              {project.price}
            </p>
            <p className="mt-2 text-sm italic text-slate-500">{project.averagePrice}</p>
          </div>

          <div className="mt-6 grid gap-3 rounded-lg border border-amber-400 bg-white/80 p-4 md:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-950">Size starts at</p>
              <p className="mt-1 text-slate-700">{project.sizeStartsAt} sq. yd</p>
            </div>
            <div className="md:border-l md:border-slate-300 md:pl-6">
              <p className="font-semibold text-slate-950">Road Width</p>
              <p className="mt-1 text-slate-700">{project.roadWidth}</p>
            </div>
            <div className="md:border-l md:border-slate-300 md:pl-6">
              <p className="font-semibold text-slate-950">Approved by</p>
              <p className="mt-1 text-slate-700">{project.approvedBy}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-100 pt-5">
            <div className="flex items-center gap-3">
              {project.builderLogoUrl ? (
                <Image
                  src={project.builderLogoUrl}
                  alt={project.builderLogoAlt}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full bg-white object-contain p-1"
                />
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                  {project.builderInitial}
                </span>
              )}
              <div>
                <p className="font-semibold text-slate-950">{project.builderName}</p>
                <p className="text-sm text-slate-500">{project.builderType}</p>
              </div>
            </div>
            <a
              href="tel:+918829901400"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </article>
    );
  };

  // Render featured project card (compact, two per slide)
  const renderFeaturedCard = (project: any) => {
    const isSaved = savedProjects.includes(project.title);
    return (
      <article
        key={project.title}
        className="group shrink-0 w-full md:w-[calc(50%-8px)] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden bg-gray-100 sm:h-56">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          
          {/* Badge */}
          <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-white/95 px-3 py-1 text-xs font-bold text-green-700 backdrop-blur-sm">
            <CheckCircle2 className="h-3 w-3 fill-green-700" />
            {project.badgeText}
          </div>

          {/* Actions */}
          <div className="absolute right-3 top-3 flex gap-2">
            <button
              type="button"
              onClick={() => toggleSaved(project.title)}
              aria-label={isSaved ? "Remove saved project" : "Save project"}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-rose-500"
            >
              <Heart className={`h-4 w-4 ${isSaved ? "fill-rose-500 text-rose-500" : ""}`} />
            </button>
            <button
              type="button"
              onClick={() => shareProject(project.title)}
              aria-label="Share project"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white/95 text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col bg-amber-50/80 p-4">
          {/* Title, Location, Price */}
          <div className="flex justify-between gap-2">
            <div>
              <h3 className="font-poppins text-lg font-bold text-gray-900 line-clamp-1">
                {project.title}
              </h3>
              <p className="mt-1 text-xs text-gray-600 line-clamp-1">{project.location}</p>
            </div>
            <p className="text-right font-poppins text-lg font-bold text-yellow-700 whitespace-nowrap">
              {project.price.replace("Rs. ", "₹ ")}
            </p>
          </div>

          {/* Details Grid */}
          <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-gray-300 bg-white p-3">
            <div className="flex flex-col items-start gap-1 border-r border-gray-200 pr-2">
              <div className="flex items-center gap-1 text-gray-700">
                <Ruler className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Size starts at</span>
              </div>
              <span className="text-sm text-gray-900">{project.sizeStartsAt} sqyd</span>
            </div>
            <div className="flex flex-col items-start gap-1 border-r border-gray-200 px-2">
              <div className="flex items-center gap-1 text-gray-700">
                <Building2 className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Road Width</span>
              </div>
              <span className="text-sm text-gray-900">{project.roadWidth}</span>
            </div>
            <div className="flex flex-col items-start gap-1 pl-2">
              <div className="flex items-center gap-1 text-gray-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Approved by</span>
              </div>
              <span className="text-sm text-gray-900">{project.approvedBy}</span>
            </div>
          </div>

          {/* Builder & Contact */}
          <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
            <div className="flex items-center gap-2">
              {project.builderLogoUrl ? (
                <Image
                  src={project.builderLogoUrl}
                  alt={project.builderLogoAlt}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full bg-white object-contain p-0.5"
                />
              ) : (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                  {project.builderInitial}
                </span>
              )}
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-900">{project.builderName}</p>
                <p className="text-xs text-gray-500">{project.builderType}</p>
              </div>
            </div>
            <a
              href="tel:+918829901400"
              className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:from-indigo-600 hover:to-cyan-500"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact
            </a>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="relative box-border w-full outline-[3px]">
      {/* Navigation Arrows */}
      <div className="absolute right-0 -top-14 z-10 flex gap-3 md:right-8">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={totalSlides <= 1}
          aria-label="Previous project"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          disabled={totalSlides <= 1}
          aria-label="Next project"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className={`flex gap-4 transition-transform ${isFeatured ? 'duration-1000' : 'duration-700'} ease-out`}
          style={{ 
            transform: isFeatured
  ? `translateX(-${activeIndex * (isMobile ? 100 : 50)}%)`
  : `translateX(-${activeIndex * 100}%)`
          }}
        >
          {isFeatured ? (
            // Render all projects for featured carousel (sliding one at a time)
            projects.map(renderFeaturedCard)
          ) : (
            // Original default carousel behavior
            Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const startIndex = slideIndex * itemsPerSlide;
              const slideProjects = projects.slice(startIndex, startIndex + itemsPerSlide);

              return (
                <div
                  key={slideIndex}
                  className="flex w-full shrink-0 gap-4"
                >
                  {slideProjects.map(renderDefaultCard)}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
