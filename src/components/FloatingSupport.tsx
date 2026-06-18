export const FloatingSupport = () => {
  return (
    <div className="fixed items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 z-50 left-5 bottom-5">
      <button className="text-gray-600 items-center bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] caret-transparent flex h-8 justify-center min-h-[auto] min-w-[auto] outline-[3px] text-center w-8 p-0 rounded-full">
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
        />
      </button>
      <a
        href="https://wa.me/918829901400?text=Hi%2C%20I%E2%80%99m%20interested%20in%20PlotPatta.%20I%E2%80%99d%20like%20to%20buy%20a%20plot%20or%20list%20my%20property.%20Please%20guide%20me."
        className="relative text-white items-center backdrop-blur-md bg-green-500 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 px-4 py-3 rounded-full"
      >
        <span className="absolute bg-green-800 box-border caret-transparent block opacity-20 outline-[3px] rounded-full inset-0"></span>
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-2.svg"
          alt="Icon"
          className="relative box-border caret-transparent h-[22px] outline-[3px] w-[22px] z-10"
        />
        <div className="relative box-border caret-transparent hidden flex-col leading-5 min-h-0 min-w-0 outline-[3px] z-10 md:flex md:min-h-[auto] md:min-w-[auto]">
          <span className="text-sm font-semibold box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
            WhatsApp Us
          </span>
          <span className="text-[11px] box-border caret-transparent inline leading-[13.75px] min-h-0 min-w-0 opacity-90 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
            Quick Support
          </span>
        </div>
      </a>
    </div>
  );
};
