export const NewsletterSignup = () => {
  return (
    <div className="box-border caret-transparent basis-auto grow-0 max-w-xl min-h-[auto] min-w-[auto] outline-[3px] md:basis-[0%] md:grow">
      <h2 className="text-green-700 text-2xl font-semibold box-border caret-transparent leading-[30px] outline-[3px] mb-3 font-poppins md:text-3xl md:leading-9">
        Stay Updated with PlotPatta
      </h2>
      <p className="text-neutral-600 text-sm box-border caret-transparent leading-5 outline-[3px] mb-5 md:text-base md:leading-6">
        Subscribe for updates on top plots, hot deals, and trusted sellers near
        you.
      </p>
      <form className="box-border caret-transparent outline-[3px]">
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-4 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
            <label className="text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-1">
              Name*
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              value=""
              className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
            <label className="text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-1">
              Email*
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value=""
              className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
            <label className="text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-1">
              Contact Number*
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your mobile number"
              value=""
              className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
            />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
            <label className="text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-1">
              Plot Interest*
            </label>
            <select
              name="interest"
              className="text-sm caret-transparent block leading-[normal] min-h-[auto] min-w-[auto] outline-[3px] border-gray-300 px-4 py-2 rounded-bl rounded-br rounded-tl rounded-tr"
            >
              <option
                value=""
                className="items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
              >
                Select Interest
              </option>
              <option
                value="Residential Plot"
                className="items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
              >
                Residential Plot
              </option>
              <option
                value="Commercial Plot"
                className="items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
              >
                Commercial Plot
              </option>
              <option
                value="Farm Land"
                className="items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
              >
                Farm Land
              </option>
              <option
                value="Investment Plot"
                className="items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
              >
                Investment Plot
              </option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="text-white text-sm bg-transparent bg-[linear-gradient(to_right,rgb(21,128,61),rgb(16,185,129))] caret-transparent tracking-[0.7px] leading-5 outline-[3px] text-center uppercase w-full mt-4 px-6 py-3 rounded-bl rounded-br rounded-tl rounded-tr md:w-auto"
        >
          Subscribe
        </button>
      </form>
      <p className="text-neutral-600 text-sm box-border caret-transparent leading-5 outline-[3px] mt-4">
        We respect your privacy and will only use your email to send relevant
        plot updates and offers.
      </p>
    </div>
  );
};
