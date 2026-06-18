type DesktopNavProps = {
  isScrolled: boolean;
};

export const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  const linkClass = isScrolled ? "text-gray-900" : "text-white";
  const underlineClass = isScrolled ? "bg-gray-900" : "bg-white";
  const addPropertyClass = isScrolled
    ? "bg-white border-gray-950"
    : "bg-yellow-400 border-yellow-400";
  const menuClass = isScrolled
    ? "bg-white border-gray-950"
    : "bg-yellow-400 border-yellow-400";

  return (
    <div className="items-center box-border caret-transparent gap-x-2 hidden justify-end min-h-0 outline-[3px] gap-y-2 md:gap-x-6 md:flex md:min-h-[auto] md:gap-y-5">
      <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap overflow-hidden md:gap-x-8 md:flex md:min-h-[auto] md:min-w-[auto] md:gap-y-5">
        <a
          href="/"
          className={`relative ${linkClass} text-sm font-bold box-border caret-transparent inline tracking-[0.2px] leading-[21px] min-h-0 min-w-0 outline-[3px] text-nowrap p-1 transition-colors duration-300 md:text-[17px] md:block md:leading-[22.5px] md:min-h-[auto] md:min-w-[auto]`}
        >
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[17px] md:leading-[22.5px]">
            Home
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-0 rounded-full left-2/4 bottom-0 transition-colors duration-300 md:text-[17px] md:leading-[22.5px]`}></span>
        </a>
        <a
          href="/aboutus"
          className={`relative ${linkClass} text-sm font-bold box-border caret-transparent inline tracking-[0.2px] leading-[21px] min-h-0 min-w-0 outline-[3px] text-nowrap p-1 transition-colors duration-300 md:text-[17px] md:block md:leading-[22.5px] md:min-h-[auto] md:min-w-[auto]`}
        >
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[17px] md:leading-[22.5px]">
            About Us
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-0 rounded-full left-2/4 bottom-0 transition-colors duration-300 md:text-[17px] md:leading-[22.5px]`}></span>
        </a>
        <a
          href="/services"
          className={`relative ${linkClass} text-sm font-bold box-border caret-transparent inline tracking-[0.2px] leading-[21px] min-h-0 min-w-0 outline-[3px] text-nowrap p-1 transition-colors duration-300 md:text-[17px] md:block md:leading-[22.5px] md:min-h-[auto] md:min-w-[auto]`}
        >
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[17px] md:leading-[22.5px]">
            Services
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-0 rounded-full left-2/4 bottom-0 transition-colors duration-300 md:text-[17px] md:leading-[22.5px]`}></span>
        </a>
        <a
          href="/packages"
          className={`relative ${linkClass} text-sm font-bold box-border caret-transparent inline tracking-[0.2px] leading-[21px] min-h-0 min-w-0 outline-[3px] text-nowrap p-1 transition-colors duration-300 md:text-[17px] md:block md:leading-[22.5px] md:min-h-[auto] md:min-w-[auto]`}
        >
          <span className="relative text-sm box-border caret-transparent leading-[21px] outline-[3px] text-nowrap z-10 md:text-[17px] md:leading-[22.5px]">
            Packages
          </span>
          <span className={`absolute text-sm ${underlineClass} box-border caret-transparent block h-0.5 leading-[21px] outline-[3px] text-nowrap w-0 rounded-full left-2/4 bottom-0 transition-colors duration-300 md:text-[17px] md:leading-[22.5px]`}></span>
        </a>
      </div>
      <a
        href="/plans"
        className={`text-gray-900 text-xs font-semibold items-center ${addPropertyClass} box-border caret-transparent gap-x-2 hidden leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap px-5 py-2.5 rounded-xl border-2 border-solid transition-colors duration-300 md:text-base md:flex md:leading-5 md:min-h-[auto] md:min-w-[auto]`}
      >
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-5.svg"
          alt="Icon"
          className="text-xs box-border caret-transparent h-4 leading-4 outline-[3px] text-nowrap w-4 md:text-sm md:leading-5"
        />
        <span className="text-xs box-border caret-transparent hidden leading-4 min-h-0 min-w-0 outline-[3px] text-nowrap md:text-sm md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
          Add a Property
        </span>
      </a>
      <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
        <button className="relative text-gray-900 text-xs font-bold items-center bg-yellow-400 shadow-[rgba(234,179,8,0.2)_0px_10px_15px_-3px,rgba(234,179,8,0.2)_0px_4px_6px_-4px] caret-transparent gap-x-2 flex justify-center leading-4 outline-[3px] gap-y-2 text-center text-nowrap border-yellow-400 overflow-hidden px-5 py-2.5 rounded-xl border-2 md:text-base md:leading-5">
          <span className="absolute text-xs bg-white/20 box-border caret-transparent block blur-md leading-4 outline-[3px] text-nowrap transform-none w-10 -left-10 inset-y-0 md:text-sm md:leading-5 md:rotate-[12.000012571476546deg]"></span>
          <span className="relative text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap z-10 md:text-sm md:leading-5 md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-6.svg"
              alt="Icon"
              className="text-xs box-border caret-transparent h-4 leading-4 outline-[3px] text-nowrap w-4 md:text-sm md:leading-5"
            />
            <span className="text-xs box-border caret-transparent hidden leading-4 min-h-0 min-w-0 outline-[3px] text-nowrap md:text-sm md:block md:leading-5 md:min-h-[auto] md:min-w-[auto]">
              Sign In
            </span>
          </span>
        </button>
      </div>
      <button
        type="button"
        className={`text-gray-900 text-sm font-medium items-center ${menuClass} caret-transparent inline-flex shrink-0 h-11 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap w-11 border p-0 rounded-xl transition-colors duration-300 md:flex md:min-h-[auto] md:min-w-[auto]`}
      >
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-7.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
        />
      </button>
    </div>
  );
};
