import Link from "next/link";
import { Image } from "@/components/ui/OptimizedImage";

type NavbarLogoProps = {
  isOverlay: boolean;
};

export const NavbarLogo = ({ isOverlay }: NavbarLogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center shrink-0"
    >
      <Image
        src="/assets/plotpatta-logo@2x.png"
        alt="PlotPatta Logo"
        width={320}
        height={96}
        sizes="(max-width: 1024px) 140px, 200px"
        priority={isOverlay}
        className="
          object-contain
          drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]
          transition-all duration-300
          w-[165px]
          h-auto
          md:w-[170px]
          lg:w-[220px]
        "
      />
    </Link>
  );
};