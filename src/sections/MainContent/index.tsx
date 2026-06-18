import { Hero } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SellerHotDeals } from "@/sections/SellerHotDeals";
import { TopAgentsSection } from "@/sections/TopAgentsSection";
import { UpcomingProjects } from "@/sections/UpcomingProjects";
import { PopularLocalities } from "@/sections/PopularLocalities";
import { PreferredAgentsSection } from "@/sections/PreferredAgentsSection";
import { ExplorePlotsSection } from "@/sections/ExplorePlotsSection";
import { BigChunksSection } from "@/sections/BigChunksSection";
import { BigPlotsCta } from "@/sections/BigPlotsCta";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FaqSection } from "@/sections/FaqSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";

export const MainContent = () => {
  return (
    <main className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]">
      <Hero />
      <ProjectsSection
        rootElement="section"
        className="relative box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto pt-0 px-3 md:pt-10"
        headerContainerClassName=""
        title="City's Top Projects"
        titleClassName="pb-2"
        underlineClassName=""
        description="Discover exclusive projects in Jaipur"
        carouselVariant="default"
        projects={[
          {
            imageUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1779342823024-7559-WhatsApp_Image_2026-05-19_at_7.56.37_PM.webp",
            imageAlt: "DPM Royal Enclave",
            badgeText: "CITY'S TOP",
            title: "DPM Royal Enclave",
            location: "Tonk Road,Jaipur",
            price: "₹ 45.47 Lac onwards",
            desktopPrice: "₹ 45.47 Lac onwards",
            averagePrice: "Avg. Price ₹ 64,953/sq.yd.",
            sizeStartsAt: "70",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [
              "Gym",
              "Park",
              "Power Backup",
              "Gated Security",
              "Waste Management",
            ],
            nearby: ["Market", "Temple", "Highway"],
            builderName: "Khandelwal Infraheights PVT. LTD.",
            builderType: "Builder",
            builderLogoUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
            builderLogoAlt: "Khandelwal Infraheights PVT. LTD.",
            builderInitial: "K",
          },
          {
            imageUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1765449417176-14983-Untitled-design-42_-_Devendra_Tanwar.webp",
            imageAlt: "Palmera Garden",
            badgeText: "CITY'S TOP",
            title: "Palmera Garden",
            location: "Ajmer Road,Jaipur",
            price: "₹ 70.00 Lac onwards",
            desktopPrice: "₹ 70.00 Lac onwards",
            averagePrice: "Avg. Price ₹ 70,002/sq.yd.",
            sizeStartsAt: "100",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [
              "Gym",
              "Swimming Pool",
              "Sports Area",
              "Park",
              "Clubhouse",
            ],
            nearby: ["School", "College/University", "Hospital"],
            builderName: "R Tech Group",
            builderType: "Builder",
            builderLogoUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/download_2520_285_29_hgdbck.webp",
            builderLogoAlt: "R Tech Group",
            builderInitial: "R",
          },
          {
            imageUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-06-01_at_5.26.32_PM.webp",
            imageAlt: "Shree Govind Residency",
            badgeText: "CITY'S TOP",
            title: "Shree Govind Residency",
            location: "Mahapura,Jaipur",
            price: "₹ 29.21 Lac onwards",
            desktopPrice: "₹ 29.21 Lac onwards",
            averagePrice: "Avg. Price ₹ 44,937/sq.yd.",
            sizeStartsAt: "65",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [
              "Sports Area",
              "Park",
              "Clubhouse",
              "Parking",
              "CCTV Surveillance",
            ],
            nearby: ["School", "Hospital", "Bank/ATM"],
            builderName: "Khandelwal Infraheights PVT. LTD.",
            builderType: "Builder",
            builderLogoUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
            builderLogoAlt: "Khandelwal Infraheights PVT. LTD.",
            builderInitial: "K",
          },
          {
            imageUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1765266812713-50588-Screenshot_20251208_182216_Chrome_-_Devendra_Tanwar.webp",
            imageAlt: "Manglam Anand Bagh",
            badgeText: "CITY'S TOP",
            title: "Manglam Anand Bagh",
            location: "Mansarovar Extension,Jaipur",
            price: "₹ 47.00 Lac onwards",
            desktopPrice: "₹ 47.00 Lac onwards",
            averagePrice: "Avg. Price ₹ 46,998/sq.yd.",
            sizeStartsAt: "100",
            roadWidth: "60 ft.",
            approvedBy: "JDA",
            amenities: [
              "Gym",
              "Swimming Pool",
              "Sports Area",
              "Park",
              "Clubhouse",
            ],
            nearby: ["School", "Hospital", "Bank/ATM"],
            builderName: "Manglam Group",
            builderType: "Builder",
            builderLogoUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/INVEST-IN-FINEST-1-2048x924_igpbnk.webp",
            builderLogoAlt: "Manglam Group",
            builderInitial: "M",
          },
        ]}
      />
      <ProjectsSection
        rootElement="div"
        className="relative bg-gray-50 box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mt-8 mx-auto px-3 md:mt-12"
        headerContainerClassName="mb-2"
        title="Featured Projects"
        titleClassName="pb-1"
        underlineClassName="mt-2"
        description="Must-see projects in Jaipur"
        carouselVariant="featured"
        projects={[
          {
            imageUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1778044872670-12546-IMG-20260424-WA0003_-_Devendra_Tanwar.webp",
            imageAlt: "Sankalp Enclave ",
            badgeText: "FEATURED",
            title: "Sankalp Enclave ",
            location: "Gandhi Path,Jaipur",
            price: "₹ 60.63 Lac onwards",
            desktopPrice: "₹ 60.63 Lac onwards",
            averagePrice: "Avg. Price ₹ 7,656/sq.ft.",
            sizeStartsAt: "88",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "Jaipur Acer Group",
            builderType: "Builder",
            builderLogoUrl:
              "https://c.animaapp.com/mqj9un6oir889A/assets/Jaipur-Acres-Final-Logo_1_eisedw.webp",
            builderLogoAlt: "Jaipur Acer Group",
            builderInitial: "J",
          },
        ]}
      />
      <SellerHotDeals />
      <TopAgentsSection />
      <UpcomingProjects />
      <PopularLocalities />
      <PreferredAgentsSection />
      <ExplorePlotsSection />
      <BigChunksSection />
      <BigPlotsCta />
      <TestimonialsSection />
      <FaqSection />
      <WhyChooseSection />
    </main>
  );
};
