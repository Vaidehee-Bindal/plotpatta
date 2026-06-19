"use client";

import { ArrowRightToLine, Edit, Menu, X, Home, LayoutDashboard, Bookmark, Phone, Briefcase, BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DesktopNavProps = {
  isOverlay: boolean;
};

export const DesktopNav = ({ isOverlay }: DesktopNavProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClass = isOverlay ? "text-white" : "text-slate-900";
  const underlineClass = "bg-amber-400";
  const addPropertyClass = isOverlay
    ? "bg-amber-400 border-amber-400 shadow-[0_16px_30px_-18px_rgba(0,0,0,0.7)]"
    : "bg-yellow-300 border-yellow-300";
  const menuClass = isOverlay
    ? "bg-amber-400 border-amber-400"
    : "bg-yellow-300 border-yellow-300";

  const navLinkClass = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname === href;

    return `group relative ${isActive && !isOverlay ? "text-emerald-700" : linkClass} text-sm font-bold box-border caret-transparent inline tracking-[0.01em] leading-[21px] min-h-0 min-w-0 outline-[3px] text-nowrap px-1 py-2 transition-colors duration-300 md:text-[15px] md:block md:leading-[22px] md:min-h-[auto] md:min-w-[auto]`;
  };

  return (
    <div className="hidden md:flex items-center justify-end gap-x-4 xl:gap-x-6">
      <div className="hidden md:flex items-center gap-x-5 xl:gap-x-8">
        <Link href="/" className={navLinkClass("/")}>
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[15px] md:leading-[22px]">
            Home
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-full scale-x-0 rounded-full left-0 bottom-1 transition-transform duration-300 group-hover:scale-x-100 md:text-[15px] md:leading-[22px]`}></span>
        </Link>
        <Link href="/aboutus" className={navLinkClass("/aboutus")}>
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[15px] md:leading-[22px]">
            About Us
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-full scale-x-0 rounded-full left-0 bottom-1 transition-transform duration-300 group-hover:scale-x-100 md:text-[15px] md:leading-[22px]`}></span>
        </Link>
        <Link href="/services" className={navLinkClass("/services")}>
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[15px] md:leading-[22px]">
            Services
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-full scale-x-0 rounded-full left-0 bottom-1 transition-transform duration-300 group-hover:scale-x-100 md:text-[15px] md:leading-[22px]`}></span>
        </Link>
        <Link href="/packages" className={navLinkClass("/packages")}>
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[15px] md:leading-[22px]">
            Packages
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-full scale-x-0 rounded-full left-0 bottom-1 transition-transform duration-300 group-hover:scale-x-100 md:text-[15px] md:leading-[22px]`}></span>
        </Link>
      </div>
      <Link
        href="/plans"
        className={`items-center ${addPropertyClass} box-border caret-transparent gap-x-2 hidden leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap px-4 py-3 lg:px-6 rounded-xl border border-solid transition-all duration-300 hover:-translate-y-0.5 md:text-base md:flex md:leading-5 md:min-h-[auto] md:min-w-[auto]`}
      >
        <Edit className="h-4 w-4 text-slate-900" />
        <span className="text-xs box-border caret-transparent hidden font-semibold leading-4 min-h-0 min-w-0 outline-[3px] text-nowrap text-slate-900 md:text-sm md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
          Add a Property
        </span>
      </Link>
      <Link
        href="/contact-us"
        className="relative text-slate-900 text-xs font-bold items-center bg-yellow-300 shadow-[0_14px_24px_-14px_rgba(250,204,21,0.75)] caret-transparent gap-x-2 flex justify-center leading-4 outline-[3px] gap-y-2 text-center text-nowrap border border-yellow-300 overflow-hidden px-4 py-3 lg:px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 md:text-base md:leading-5"
      >
        <span className="relative text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap z-10 md:text-sm md:leading-5 md:min-h-[auto] md:min-w-[auto]">
          <ArrowRightToLine className="h-4 w-4" />
          <span className="text-xs box-border caret-transparent hidden leading-4 min-h-0 min-w-0 outline-[3px] text-nowrap md:text-sm md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
            Sign In
          </span>
        </span>
      </Link>
      <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className={`text-slate-900 text-sm font-medium items-center ${menuClass} caret-transparent inline-flex shrink-0 h-11 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap w-11 border p-0 rounded-xl transition-all duration-300 hover:-translate-y-0.5 md:flex md:min-h-[auto] md:min-w-[auto]`}
        >
          <Menu className="h-4 w-4" />
        </button>
        {isMenuOpen ? (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Sidebar */}
            <div className="fixed right-0 top-0 z-50 h-full w-96 max-w-[100vw] bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="text-xl font-extrabold text-gray-900 bg-amber-400 px-3 py-1.5 rounded">
                  PLOTPATTA.COM
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col p-8 gap-8">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-700">Welcome, Guest</span>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700"
                  >
                    Sign In
                  </Link>
                </div>
                <div className="border-t border-gray-200" />
                <nav className="flex flex-col gap-2">
                  {[
                    ["Home", "/", <Home className="h-6 w-6" />],
                    ["Dashboard", "/dashboard", <LayoutDashboard className="h-6 w-6" />],
                    ["Shortlisted Properties", "/shortlisted", <Bookmark className="h-6 w-6" />],
                    ["Contact Us", "/contact-us", <Phone className="h-6 w-6" />],
                    ["Careers", "/careers", <Briefcase className="h-6 w-6" />],
                    ["Blogs", "/blogs", <BookOpen className="h-6 w-6" />],
                  ].map(([label, href, icon]) => {
                    const isActive = pathname === href || (href === "/" && pathname === "/");
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-4 p-3 text-lg transition-colors font-semibold rounded-lg ${
                          isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {icon}
                        {label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
