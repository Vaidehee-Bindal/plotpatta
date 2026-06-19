"use client";

import {
  Menu,
  X,
  Home,
  LayoutDashboard,
  Bookmark,
  Phone,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRightToLine } from "lucide-react";

type MobileNavActionsProps = {
  isOverlay: boolean;
};

export const MobileNavActions = ({ isOverlay }: MobileNavActionsProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-6 w-6" />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-6 w-6" />,
    },
    {
      label: "Shortlisted Properties",
      href: "/shortlisted",
      icon: <Bookmark className="h-6 w-6" />,
    },
    {
      label: "Contact Us",
      href: "/contact-us",
      icon: <Phone className="h-6 w-6" />,
    },
    {
      label: "Careers",
      href: "/careers",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      label: "Blogs",
      href: "/blogs",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ];

  return (
    <div className="relative items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:hidden md:min-h-0 md:min-w-0">
      <Link
  href="/login"
  className="flex items-center gap-1.5 rounded-xl bg-[#204f4b] px-2.5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#183d3a]"
>
  <ArrowRightToLine className="h-3.5 w-3.5" />
  Login
</Link>

      <button
        type="button"
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        className={`caret-transparent block text-center p-0 h-10 w-10 rounded-lg border transition-colors duration-300 ${
          isOverlay
            ? "border-amber-400 bg-amber-400"
            : "border-slate-300 bg-white"
        }`}
      >
        <Menu className="mx-auto h-4 w-4 text-slate-900" />
      </button>

      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 desktop:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed right-0 top-0 z-50 h-full w-96 max-w-[100vw] bg-white shadow-2xl desktop:hidden flex flex-col">
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
                <span className="text-lg font-semibold text-gray-700">
                  Welcome, Guest
                </span>

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
                {navItems.map(({ label, href, icon }) => {
                  const isActive = pathname === href;

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
      )}
    </div>
  );
};