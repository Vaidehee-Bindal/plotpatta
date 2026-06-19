import Link from "next/link";
import { Image } from "@/components/ui/OptimizedImage";

type NavbarLogoProps = {
  isOverlay: boolean;
};

export const NavbarLogo = ({ isOverlay }: NavbarLogoProps) => {
  return (
    <Link href="/" className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
      <Image
        src="/assets/plotpatta-logo@2x.png"
        alt="PlotPatta Logo"
        width={320}
        height={96}
        sizes="200px"
        priority={isOverlay}
        className="aspect-[auto_160_/_48] box-border caret-transparent h-14 w-[186px] max-w-full min-h-[auto] min-w-[auto] object-contain outline-[3px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-300 md:h-16 md:w-[213px] lg:h-18 lg:w-[240px]"
      />
    </Link>
  );
};
