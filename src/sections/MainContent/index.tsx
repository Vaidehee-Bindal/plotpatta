import { Hero } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SellerHotDeals } from "@/sections/SellerHotDeals";
import { TopAgentsSection } from "@/sections/TopAgentsSection";
import { UpcomingProjects } from "@/sections/UpcomingProjects";
import { PopularLocalities } from "@/sections/PopularLocalities";
import { TopAgentsBestProjects } from "@/sections/TopAgentsBestProjects";
import { PreferredAgentsSection } from "@/sections/PreferredAgentsSection";
import { ExplorePlotsSection } from "@/sections/ExplorePlotsSection";
import { BigChunksSection } from "@/sections/BigChunksSection";
import { BigPlotsCta } from "@/sections/BigPlotsCta";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FaqSection } from "@/sections/FaqSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px]">
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
          {
            imageUrl:
              "https://res.cloudinary.com/dz6qkksvj/image/fetch/f_auto,q_auto,w_1400/https%3A%2F%2Fapi.plotpatta.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fplot-images%2Fplot-1780892919012-52334-1000774831.webp",
            imageAlt: "Navsaar Velly",
            badgeText: "FEATURED",
            title: "Navsaar Velly",
            location: "Chaksu,Jaipur",
            price: "Price On Request",
            desktopPrice: "Price On Request",
            averagePrice: "Rate: On Request",
            sizeStartsAt: "N/A",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "Highfly Group",
            builderType: "Builder",
            builderLogoUrl: "",
            builderLogoAlt: "Highfly Group",
            builderInitial: "H",
          },
          {
            imageUrl:
              "https://res.cloudinary.com/dz6qkksvj/image/fetch/f_auto,q_auto,w_1400/https%3A%2F%2Fapi.plotpatta.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fplot-images%2Fplot-1765011900300-2645-IMG-20251205-WA0043%20-%20Devendra%20Tanwar.webp",
            imageAlt: "Bank Officer Colony ",
            badgeText: "FEATURED",
            title: "Bank Officer Colony ",
            location: "Tonk Road,Jaipur",
            price: "₹ 47.95 Lac onwards",
            desktopPrice: "₹ 47.95 Lac onwards",
            averagePrice: "Avg. Price ₹ 5,328/sq.ft.",
            sizeStartsAt: "100",
            roadWidth: "40 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "Aadharshila Group",
            builderType: "Builder",
            builderLogoUrl: "",
            builderLogoAlt: "Aadharshila Group",
            builderInitial: "A",
          },
          {
            imageUrl:
              "https://res.cloudinary.com/dz6qkksvj/image/fetch/f_auto,q_auto,w_1400/https%3A%2F%2Fapi.plotpatta.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fplot-images%2Fplot-1764075525427-93087-IMG-20250623-WA0030%20-%20Devendra%20Tanwar%20(1)%20-%20Copy.webp",
            imageAlt: "DefineD world City phase 2",
            badgeText: "FEATURED",
            title: "DefineD world City phase 2",
            location: "Ajmer Road,Jaipur",
            price: "₹ 55.00 Lac onwards",
            desktopPrice: "₹ 55.00 Lac onwards",
            averagePrice: "Avg. Price ₹ 6,111/sq.ft.",
            sizeStartsAt: "100",
            roadWidth: "30,40 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "JDB Group",
            builderType: "Builder",
            builderLogoUrl: "",
            builderLogoAlt: "JDB Group",
            builderInitial: "J",
          },
          {
            imageUrl:
              "https://res.cloudinary.com/dz6qkksvj/image/fetch/f_auto,q_auto,w_1400/https%3A%2F%2Fapi.plotpatta.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fplot-images%2Fplot-1764909977281-60723-IMG-20251202-WA0085%20-%20Devendra%20Tanwar.webp",
            imageAlt: "Yaduraj Samsara",
            badgeText: "FEATURED",
            title: "Yaduraj Samsara",
            location: "Ajmer Road,Jaipur",
            price: "₹ 40.00 Lac onwards",
            desktopPrice: "₹ 40.00 Lac onwards",
            averagePrice: "Avg. Price ₹ 4,444/sq.ft.",
            sizeStartsAt: "100",
            roadWidth: "30,60 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "Yuduraj Realty",
            builderType: "Builder",
            builderLogoUrl: "",
            builderLogoAlt: "Yuduraj Realty",
            builderInitial: "Y",
          },
          {
            imageUrl:
              "https://res.cloudinary.com/dz6qkksvj/image/fetch/f_auto,q_auto,w_1400/https%3A%2F%2Fapi.plotpatta.com%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fplot-images%2Fplot-1771565309205-45755-1000261911.webp",
            imageAlt: "Shourya Nagar",
            badgeText: "FEATURED",
            title: "Shourya Nagar",
            location: "Ajmer Road,Jaipur",
            price: "₹ 9.95 Lac onwards",
            desktopPrice: "₹ 9.95 Lac onwards",
            averagePrice: "Avg. Price ₹ 1,106/sq.ft.",
            sizeStartsAt: "100",
            roadWidth: "40,60 ft.",
            approvedBy: "JDA",
            amenities: [],
            nearby: [],
            builderName: "Mansukh Group",
            builderType: "Builder",
            builderLogoUrl: "",
            builderLogoAlt: "Mansukh Group",
            builderInitial: "M",
          },
        ]}
      />
      <SellerHotDeals />
      <TopAgentsSection />
      <UpcomingProjects />
      <PopularLocalities />
      <TopAgentsBestProjects />
      <PreferredAgentsSection />
      <ExplorePlotsSection />
      <BigChunksSection />
      <BigPlotsCta />
      <TestimonialsSection />
      <FaqSection />
      <WhyChooseSection />
    </div>
  );
};
