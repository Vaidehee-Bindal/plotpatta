"use client";

import { ArrowRightToLine, Menu, Edit, X, Home, LayoutDashboard, Bookmark, Phone, Briefcase, BookOpen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MobileNavActionsProps = {
  isOverlay: boolean;
};

export const MobileNavActions = ({ isOverlay }: MobileNavActionsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:hidden md:min-h-0 md:min-w-0">
      <Link href="/plans" className="text-xs items-center caret-transparent gap-x-2 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center px-3 py-2 rounded-xl border border-amber-400 bg-amber-400 font-semibold text-slate-950 shadow-[0_14px_24px_-16px_rgba(15,23,42,0.75)] transition-all duration-300 hover:-translate-y-0.5 md:min-h-0 md:min-w-0">
        <Edit className="h-3.5 w-3.5 text-slate-900" />
        Add Property
      </Link>
      <button
        type="button"
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        className={`text-2xl caret-transparent block leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center p-0 h-11 w-11 rounded-xl border transition-colors duration-300 md:inline-block md:min-h-0 md:min-w-0 ${
          isOverlay
            ? "border-amber-400 bg-amber-400"
            : "border-slate-300 bg-white"
        }`}
      >
        <Menu className="mx-auto h-5 w-5 text-slate-900" />
      </button>
      {isMenuOpen ? (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed right-0 top-0 z-50 h-full w-96 max-w-[100vw] bg-white shadow-2xl md:hidden flex flex-col">
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
  );
};
