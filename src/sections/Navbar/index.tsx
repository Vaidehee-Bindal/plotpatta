import { useEffect, useState } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { MobileNavActions } from "@/sections/Navbar/components/MobileNavActions";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 24);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  return (
    <nav
      className={`fixed box-border caret-transparent outline-[3px] w-full z-50 left-0 top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_2px_10px_rgba(15,23,42,0.12)]"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="items-center box-border caret-transparent flex justify-between max-w-[1840px] min-h-[76px] outline-[3px] mx-auto px-4 py-2 md:px-8">
        <NavbarLogo />
        <MobileNavActions isScrolled={isScrolled} />
        <DesktopNav isScrolled={isScrolled} />
      </div>
    </nav>
  );
};
