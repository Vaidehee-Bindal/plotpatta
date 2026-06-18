export const DesktopHero = () => {
  return (
    <div className="relative box-border caret-transparent hidden h-[300px] max-h-[560px] min-h-60 outline-[3px] w-full mb-0 md:block md:h-[480px] md:mb-44">
      <img
        src="/assets/hero-dpm-royal-enclave.png"
        alt="DPM Royal Enclave banner"
        className="absolute box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full inset-0"
      />
      <img
        src="/assets/hero-shree-govind.png"
        alt=""
        aria-hidden="true"
        className="hidden"
      />
      <button className="absolute text-white text-lg items-center backdrop-blur-md bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_4px_20px_0px] caret-transparent flex h-10 justify-center leading-7 opacity-0 outline-[3px] text-center transform-none w-10 z-20 border p-0 rounded-full border-white/20 left-4 top-2/4 md:opacity-100 md:translate-y-[-50.0%] md:left-6">
        ‹
      </button>
      <button className="absolute text-white text-lg items-center backdrop-blur-md bg-black/50 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.12)_0px_4px_20px_0px] caret-transparent flex h-10 justify-center leading-7 opacity-0 outline-[3px] text-center transform-none w-10 z-20 border p-0 rounded-full border-white/20 right-4 top-2/4 md:opacity-100 md:translate-y-[-50.0%] md:right-6">
        ›
      </button>
      <div className="absolute box-border caret-transparent hidden justify-center outline-[3px] z-20 w-full left-0 -bottom-24 md:flex">
        <div className="items-center box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] w-[88%] md:min-h-[auto] md:min-w-[auto]">
          <div className="bg-yellow-300 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent max-w-[1064px] min-h-0 min-w-0 outline-[3px] w-full p-5 rounded-xl md:min-h-[auto] md:min-w-[auto] md:p-6">
            <div className="items-end box-border caret-transparent gap-x-4 flex flex-col outline-[3px] gap-y-4 md:flex-row">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-1 md:min-h-[auto] md:min-w-[auto]">
                  City
                </label>
                <button
                  type="button"
                  role="combobox"
                  className="text-sm items-center bg-white caret-transparent flex h-12 justify-between leading-5 min-h-0 min-w-0 outline-[3px] text-center w-full border border-slate-200 px-3 py-2 rounded-xl md:min-h-[auto] md:min-w-[auto]"
                >
                  <span className="box-border caret-transparent flow-root min-h-0 min-w-0 outline-[3px] pointer-events-none overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                    Jaipur
                  </span>
                  <img
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-8.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-4 opacity-50 outline-[3px] w-4"
                  />
                </button>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-1 md:min-h-[auto] md:min-w-[auto]">
                  Property Type
                </label>
                <button
                  type="button"
                  role="combobox"
                  className="text-sm items-center bg-white caret-transparent flex h-12 justify-between leading-5 min-h-0 min-w-0 outline-[3px] text-center w-full border border-slate-200 px-3 py-2 rounded-xl md:min-h-[auto] md:min-w-[auto]"
                >
                  <span className="box-border caret-transparent flow-root min-h-0 min-w-0 outline-[3px] pointer-events-none overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                    Residential
                  </span>
                  <img
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-8.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-4 opacity-50 outline-[3px] w-4"
                  />
                </button>
              </div>
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow-[2] min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                <label className="text-gray-700 text-sm font-medium box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] mb-1 md:min-h-[auto] md:min-w-[auto]">
                  Search
                </label>
                <div className="relative box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                  <input
                    placeholder="Search projects or localities..."
                    role="combobox"
                    type="text"
                    value=""
                    className="text-sm box-border caret-transparent h-12 leading-5 outline-transparent outline-offset-2 outline outline-2 w-full border border-gray-300 px-4 py-0 rounded-xl border-solid"
                  />
                </div>
              </div>
              <button className="text-white text-sm font-medium items-center bg-teal-900 caret-transparent flex h-12 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap px-6 py-2 rounded-xl md:min-h-[auto] md:min-w-[auto]">
                <img
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-9.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 outline-[3px] text-nowrap w-3.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
