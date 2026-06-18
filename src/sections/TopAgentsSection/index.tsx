import { AgentCarousel } from "@/sections/TopAgentsSection/components/AgentCarousel";

export const TopAgentsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] mt-10 mb-8 px-2 md:mt-16">
      <div className="relative box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-2">
        <div className="box-border caret-transparent outline-[3px] mb-6">
          <h2 className="text-gray-900 text-lg font-extrabold box-border caret-transparent leading-7 outline-[3px] font-poppins md:text-2xl md:leading-8">
            Plotpatta Top Agents
          </h2>
          <span className="bg-gray-800 box-border caret-transparent block h-1 outline-[3px] w-12 mt-1 rounded-full"></span>
          <p className="text-gray-600 text-sm box-border caret-transparent leading-5 outline-[3px] mt-2 md:text-base md:leading-6">
            Trusted agents in Jaipur
          </p>
        </div>
        <AgentCarousel />
      </div>
    </section>
  );
};
