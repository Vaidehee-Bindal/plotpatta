import { Image } from "@/components/ui/OptimizedImage";

export const MobileHero = () => {
  return (
    <div className="relative box-border caret-transparent block h-[250px] outline-[3px] w-full bg-center mb-64 md:hidden md:h-[420px] md:mb-28">
      <div className="bg-[linear-gradient(to_right_bottom,rgb(187,247,208),rgb(220,252,231),rgb(255,255,255))] box-border caret-transparent outline-[3px] text-center w-full border-emerald-200 pt-24 pb-8 px-6 border-b border-solid md:px-20">
        <div className="box-border caret-transparent max-w-screen-md outline-[3px] mx-auto pt-4">
          <p className="text-emerald-700 text-sm font-semibold box-border caret-transparent tracking-[0.35px] leading-5 outline-[3px] uppercase mb-2">
            🏡 One platform. Every plot solution
          </p>
          <h1 className="text-gray-900 text-3xl font-extrabold box-border caret-transparent leading-[37.5px] outline-[3px] font-poppins md:text-5xl md:leading-[48px]">
            Buy, Sell &amp; Discover Plots
          </h1>
          <p className="text-gray-600 text-base box-border caret-transparent leading-6 outline-[3px] mt-4 md:text-lg md:leading-7">
            Explore verified listings, pre-launch deals, top city projects, and
            more — all in one place.
          </p>
        </div>
        <div className="box-border caret-transparent block outline-[3px] mt-6 md:hidden">
          <div className="bg-yellow-300 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent max-w-screen-lg outline-[3px] w-full p-5 rounded-2xl md:p-6">
            <div className="box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
              <button
                type="button"
                role="combobox"
                className="text-sm items-center bg-white caret-transparent flex h-11 justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full border border-slate-200 px-3 py-2 rounded-xl md:min-h-0 md:min-w-0"
              >
                <span className="box-border caret-transparent flow-root min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none overflow-hidden md:min-h-0 md:min-w-0">
                  Jaipur
                </span>
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-8.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 opacity-50 outline-[3px] w-4"
                />
              </button>
              <button
                type="button"
                role="combobox"
                className="text-sm items-center bg-white caret-transparent flex h-11 justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-full border border-slate-200 px-3 py-2 rounded-xl md:min-h-0 md:min-w-0"
              >
                <span className="box-border caret-transparent flow-root min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none overflow-hidden md:min-h-0 md:min-w-0">
                  Residential
                </span>
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-8.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 opacity-50 outline-[3px] w-4"
                />
              </button>
              <button className="text-white items-center bg-teal-900 caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] px-4 py-0 rounded-xl md:min-h-0 md:min-w-0">
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-10.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-4 outline-[3px] w-4"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
