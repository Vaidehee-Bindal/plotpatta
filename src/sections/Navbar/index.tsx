"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { MobileNavActions } from "@/sections/Navbar/components/MobileNavActions";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isOverlay = isHome && !isScrolled;

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav
      className={`fixed box-border caret-transparent outline-[3px] w-full z-50 left-0 top-0 transition-all duration-300 ${
        isOverlay
          ? "border-b border-white/0 bg-transparent"
          : "border-b border-slate-200/80 bg-white/95 shadow-[0_4px_18px_rgba(15,23,42,0.08)] backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between h-16 max-w-screen-2xl mx-auto px-4 md:px-10 py-2">
        <NavbarLogo isOverlay={isOverlay} />
        <MobileNavActions isOverlay={isOverlay} />
        <DesktopNav isOverlay={isOverlay} />
      </div>
    </nav>
  );
};
