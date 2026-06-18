import { BigChunkCard } from "@/sections/BigChunksSection/components/BigChunkCard";

export const BigChunksSection = () => {
  return (
    <div className="box-border caret-transparent outline-[3px] mt-6 mb-10 mx-auto pt-6">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] px-2">
          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-2">
            <h2 className="relative text-green-700 text-xl font-extrabold items-center box-border caret-transparent gap-x-2 flex leading-7 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 mb-2 font-poppins md:text-2xl md:leading-8">
              Big Chunks
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-41.svg"
                alt="Icon"
                className="text-xl box-border caret-transparent h-7 leading-7 outline-[3px] w-7 md:text-2xl md:leading-8"
              />
              <span className="absolute text-xl bg-green-700 box-border caret-transparent block h-1 leading-7 outline-[3px] w-12 rounded-full left-0 -bottom-3 md:text-2xl md:leading-8"></span>
            </h2>
            <p className="text-gray-700 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-3 mb-5 md:text-base md:leading-6 md:mb-0">
              Big chunks of property now available in Jaipur!
            </p>
          </div>
        </div>
        <div className="relative items-center box-border caret-transparent flex justify-center min-h-[380px] outline-[3px] w-full mt-3 md:min-h-[480px] md:mt-1">
          <div
            role="region"
            className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full"
          >
            <div className="box-border caret-transparent outline-[3px] overflow-hidden">
              <div className="box-border caret-transparent flex outline-[3px] w-full -ml-1">
                <BigChunkCard
                  imageUrl="https://c.animaapp.com/mqj9un6oir889A/assets/plot-1779086939614-67025-d98bbb62-23ff-410d-96de-c55f31735ad3-1_all_172321.webp"
                  price="₹ 6.88 Cr"
                  location="In ajmer road , jaipur"
                  plotArea="117000 sq.ft"
                  area="117000 sqft"
                  agentInitial="A"
                  agentName="Ankit Sharma"
                />
                <BigChunkCard
                  imageUrl="https://c.animaapp.com/mqj9un6oir889A/assets/plot-1767593935434-43203-1000536051.webp"
                  price="₹ 25.00 Cr"
                  location="In diggi road, jaipur"
                  plotArea="5000 sq.ft"
                  area="5000 sqft"
                  agentInitial="L"
                  agentName="Lalit  Kumar"
                />
              </div>
            </div>
            <div className="absolute box-border caret-transparent gap-x-2 hidden outline-[3px] gap-y-2 z-10 right-16 -top-14 md:flex">
              <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-50 outline-[3px] pointer-events-none text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -left-12 top-2/4 md:translate-y-[-50.0%]">
                <img
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-22.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
                />
              </button>
              <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-100 outline-[3px] pointer-events-auto text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -right-12 top-2/4 md:opacity-50 md:pointer-events-none md:translate-y-[-50.0%]">
                <img
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-23.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] pointer-events-auto text-nowrap w-4 md:pointer-events-none"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
