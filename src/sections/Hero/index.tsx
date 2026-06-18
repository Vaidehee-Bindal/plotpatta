import { DesktopHero } from "@/sections/Hero/components/DesktopHero";
import { MobileHero } from "@/sections/Hero/components/MobileHero";

export const Hero = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <DesktopHero />
      <MobileHero />
    </div>
  );
};
