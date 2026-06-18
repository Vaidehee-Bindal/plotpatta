import { PlotCategoryCard } from "@/sections/ExplorePlotsSection/components/PlotCategoryCard";

export const ExplorePlotsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] my-10 p-2 rounded-2xl md:mt-12">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="box-border caret-transparent outline-[3px] px-2">
          <h2 className="text-gray-900 text-xl font-extrabold box-border caret-transparent inline-block tracking-[-0.5px] leading-7 outline-[3px] font-poppins md:text-2xl md:tracking-[-0.6px] md:leading-8">
            Explore Plots in Jaipur
            <span className="text-xl bg-black box-border caret-transparent block h-1 tracking-[-0.5px] leading-7 outline-[3px] w-12 mt-1 rounded-full md:text-2xl md:tracking-[-0.6px] md:leading-8"></span>
          </h2>
          <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] max-w-md outline-[3px] mt-2">
            Discover premium residential, commercial, and industrial plots in
            <span className="text-gray-800 font-medium box-border caret-transparent outline-[3px]">
              Jaipur
            </span>
            with verified listings and high growth potential.
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-6 mt-8 px-2 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <PlotCategoryCard
            imageUrl="https://c.animaapp.com/mqj9un6oir889A/assets/resid_1_s6bmki.webp"
            imageAlt="Residential Plots in Jaipur"
            badgeText="Best for Living"
            iconUrl="https://c.animaapp.com/mqj9un6oir889A/assets/icon-38.svg"
            title="Residential Plots in Jaipur"
            description="Buy residential plots in Jaipur to build your dream home in prime and fast-growing locations with high appreciation potential."
            buttonText="Explore Now →"
          />
          <PlotCategoryCard
            imageUrl="https://c.animaapp.com/mqj9un6oir889A/assets/commercial_1_1_1_1_cw36ea.webp"
            imageAlt="Commercial Plots in Jaipur"
            badgeText="High ROI"
            iconUrl="https://c.animaapp.com/mqj9un6oir889A/assets/icon-39.svg"
            title="Commercial Plots in Jaipur"
            description="Explore commercial plots in Jaipur ideal for shops, offices, and high-return investment opportunities."
            buttonText="Explore Now →"
          />
          <PlotCategoryCard
            imageUrl="https://c.animaapp.com/mqj9un6oir889A/assets/industrial_1_1_1_iv2pvq.webp"
            imageAlt="Industrial Plots in Jaipur"
            badgeText="Business Growth"
            iconUrl="https://c.animaapp.com/mqj9un6oir889A/assets/icon-40.svg"
            title="Industrial Plots in Jaipur"
            description="Invest in industrial plots near Jaipur for warehouses, factories, and scalable business expansion."
            buttonText="Explore Now →"
          />
        </div>
      </div>
    </section>
  );
};
