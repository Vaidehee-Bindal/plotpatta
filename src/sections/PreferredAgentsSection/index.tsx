import { PreferredAgentCard } from "@/sections/PreferredAgentsSection/components/PreferredAgentCard";
import { Image } from "@/components/ui/OptimizedImage";

export const PreferredAgentsSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] mt-10 mb-14 px-2 md:mt-20">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="box-border caret-transparent outline-[3px] px-2">
          <h2 className="text-gray-900 text-xl font-extrabold box-border caret-transparent inline-block leading-7 outline-[3px] font-poppins md:text-2xl md:leading-8">
            Plotpatta Preferred Agents
            <span className="text-xl bg-gray-800 box-border caret-transparent block h-1 leading-7 outline-[3px] w-12 mt-1 rounded-full md:text-2xl md:leading-8"></span>
          </h2>
          <p className="text-gray-600 text-sm box-border caret-transparent leading-5 max-w-md outline-[3px] mt-2">
            Explore top property deals with trusted agents in Jaipur.
          </p>
        </div>
        <div className="relative box-border caret-transparent outline-[3px] mt-6">
          <div
            role="region"
            className="relative box-border caret-transparent outline-[3px] w-full"
          >
            <div className="box-border caret-transparent outline-[3px] overflow-hidden">
              <div className="box-border caret-transparent flex outline-[3px] -ml-1">
                <PreferredAgentCard
                  initial="P"
                  agentName="Priyam Dahlan"
                  location="Jaipur, Rajasthan"
                  agencyName="Divine Group"
                  operatingSince="2021"
                  buyersServed="400+"
                  buttonText="Contact Agent"
                />
                <PreferredAgentCard
                  initial="R"
                  agentName="Ramavtar Sharma"
                  location="Jaipur, Rajasthan"
                  agencyName="Aashirwad Homes"
                  operatingSince="2015"
                  buyersServed="400+"
                  buttonText="Contact Agent"
                />
                <PreferredAgentCard
                  initial="A"
                  agentName="Abhishek"
                  location="Jaipur, Rajasthan"
                  agencyName="Khedapati Realty"
                  operatingSince="2020"
                  buyersServed="200+"
                  buttonText="Contact Agent"
                />
              </div>
            </div>
            <div className="absolute box-border caret-transparent gap-x-2 hidden outline-[3px] gap-y-2 z-10 right-16 -top-14 md:flex">
              <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-50 outline-[3px] pointer-events-none text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -left-12 top-2/4 md:translate-y-[-50.0%]">
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
                />
              </button>
              <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-100 outline-[3px] pointer-events-auto text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -right-12 top-2/4 md:opacity-50 md:pointer-events-none md:translate-y-[-50.0%]">
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-23.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] pointer-events-auto text-nowrap w-4 md:pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
