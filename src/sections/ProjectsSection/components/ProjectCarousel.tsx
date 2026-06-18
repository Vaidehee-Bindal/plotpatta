export type ProjectCarouselProps = {
  variant: string;
  projects: {
    imageUrl: string;
    imageAlt: string;
    badgeText: string;
    title: string;
    location: string;
    price: string;
    desktopPrice: string;
    averagePrice: string;
    sizeStartsAt: string;
    roadWidth: string;
    approvedBy: string;
    amenities: string[];
    nearby: string[];
    builderName: string;
    builderType: string;
    builderLogoUrl: string;
    builderLogoAlt: string;
    builderInitial: string;
  }[];
};

export const ProjectCarousel = (props: ProjectCarouselProps) => {
  const isFeatured = props.variant === "featured";

  return isFeatured ? (
    <div className="relative box-border caret-transparent outline-[3px] w-full items-center flex justify-center min-h-[400px] md:min-h-[500px]">
      <div
        role="region"
        className="box-border caret-transparent outline-[3px] relative min-h-[auto] min-w-[auto] w-full"
      >
        <div className="box-border caret-transparent outline-[3px] overflow-hidden">
          <div className="box-border caret-transparent outline-[3px] flex w-full -ml-1">
            {props.projects.map((project) => (
              <div
                role="group"
                className="box-border caret-transparent basis-[85%] shrink-0 min-h-[auto] outline-[3px] pb-2 px-2 md:basis-6/12"
                key={project.title}
              >
                <div className="text-slate-950 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col outline-[3px] w-full border border-gray-200 overflow-hidden rounded-lg border-solid">
                  <div className="relative box-border caret-transparent h-[150px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:h-[250px]">
                    <div className="relative box-border caret-transparent h-[150px] outline-[3px] w-full overflow-hidden md:h-[250px]">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="aspect-[auto_600_/_400] box-border caret-transparent blur-0 h-full max-w-full object-cover outline-[3px] w-full"
                      />
                      <div className="absolute box-border caret-transparent outline-[3px] inset-0"></div>
                      <div className="absolute text-green-800 text-xs font-semibold items-center bg-red-100 box-border caret-transparent gap-x-2 flex leading-4 outline-[3px] gap-y-2 z-30 ml-2 px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr left-2 top-2">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-11.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
                        />
                        {project.badgeText}
                      </div>
                      <div className="absolute box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 z-30 right-2 top-2 md:gap-x-2 md:gap-y-2">
                        <button className="text-sm font-medium items-center backdrop-blur-md bg-white/90 caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:h-8 md:w-8">
                          <img
                            src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-12.svg"
                            alt="Icon"
                            className="box-border caret-transparent h-3.5 outline-[3px] text-nowrap w-3.5"
                          />
                        </button>
                        <button className="text-sm font-medium items-center backdrop-blur-md bg-white/90 caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:h-8 md:w-8">
                          <img
                            src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-13.svg"
                            alt="Icon"
                            className="box-border caret-transparent h-3 outline-[3px] text-nowrap w-3"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[linear-gradient(90deg,rgb(226,200,115)_-40.09%,rgb(255,251,242))] box-border caret-transparent flex basis-[0%] flex-col grow justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full pt-3 pb-4 px-4 md:pt-4">
                    <div className="box-border caret-transparent hidden flex-col min-h-0 min-w-0 outline-[3px] w-full mb-2 md:block md:min-h-[auto] md:min-w-[auto]">
                      <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex flex-col justify-normal outline-[3px] gap-y-2 w-full md:items-start md:flex-row md:justify-between">
                        <div className="box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <h3 className="text-base font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 outline-[3px] text-ellipsis text-nowrap overflow-hidden font-poppins md:text-xl md:tracking-[-0.5px] md:leading-7 md:text-wrap">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-xs box-border caret-transparent leading-4 outline-[3px] mb-0.5 md:text-sm md:leading-5">
                            {project.location}
                          </p>
                        </div>
                        <div className="items-start box-border caret-transparent flex flex-col min-h-0 min-w-0 outline-[3px] md:items-end md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-yellow-800 text-base font-semibold box-border caret-transparent leading-6 min-h-0 min-w-0 outline-[3px] mb-1 md:text-xl md:leading-7 md:min-h-[auto] md:min-w-[auto]">
                            {project.price}
                          </p>
                        </div>
                      </div>
                    </div>
                     <div className="box-border caret-transparent block flex-col min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
                      <div className="box-border caret-transparent flex flex-col justify-between outline-[3px] w-full">
                        <h3 className="text-base font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden mb-1 font-poppins md:text-lg md:tracking-[-0.45px] md:leading-7 md:min-h-0 md:min-w-0 md:text-wrap">
                          {project.title}
                        </h3>
                        <div className="absolute box-border caret-transparent gap-x-1 hidden outline-[3px] gap-y-1 z-10 right-4 top-2 md:gap-x-2 md:flex md:gap-y-2">
                          <button
                            type="button"
                            aria-label="Save this job"
                            className="text-sm font-medium items-center bg-white caret-transparent inline-flex h-7 justify-center leading-5 outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:flex md:h-10 md:w-10"
                          >
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-12.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3.5 outline-[3px] text-nowrap w-3.5"
                            />
                          </button>
                          <button
                            type="button"
                            aria-label="Copy link to this job"
                            className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:h-10 md:w-10"
                          >
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-13.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3 outline-[3px] text-nowrap w-3"
                            />
                          </button>
                        </div>
                        <p className="text-gray-600 text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden mb-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0 md:text-wrap"></p>
                        <p className="text-green-700 text-base font-semibold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] mb-1 md:text-xl md:leading-7 md:min-h-0 md:min-w-0">
                          {project.desktopPrice}
                        </p>
                        <p className="text-gray-500 text-[10px] italic box-border caret-transparent hidden leading-[15px] outline-[3px] mb-3 md:text-xs md:block md:leading-4">
                          {project.averagePrice}
                        </p>
                        <div className="text-gray-700 text-xs items-start backdrop-blur-sm bg-white/60 box-border caret-transparent gap-x-10 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-10 border mt-2 p-2 rounded-lg border-solid md:text-sm md:hidden md:leading-5 md:min-h-0 md:min-w-0">
                          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-14.svg"
                              alt="Icon"
                              className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                            />
                            <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                              <p className="text-black text-xs font-semibold box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                Size starts at
                              </p>
                              <p className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 outline-[3px] gap-y-2 md:text-sm md:leading-5">
                                {project.sizeStartsAt}
                                <select className="appearance-none text-indigo-600 text-sm font-medium bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 pl-1 pr-4 md:min-h-0 md:min-w-0">
                                  <option
                                    value="sqft"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.ft
                                  </option>
                                  <option
                                    value="sqyd"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.yd
                                  </option>
                                  <option
                                    value="sqm"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.m
                                  </option>
                                </select>
                                <span className="text-indigo-600 text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -ml-4 md:min-h-0 md:min-w-0">
                                  ▼
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-15.svg"
                              alt="Icon"
                              className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                            />
                            <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                              <p className="text-black text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                Road width
                              </p>
                              <p className="text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                {project.roadWidth}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm backdrop-blur-sm bg-white/80 box-border caret-transparent gap-x-4 hidden justify-between leading-5 min-h-0 min-w-0 outline-[3px] gap-y-4 w-full border mt-2 px-6 py-3 rounded-lg border-solid md:flex md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-16.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-black font-semibold box-border caret-transparent outline-[3px]">
                            Size starts at
                          </p>
                          <p className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
                            {project.sizeStartsAt}
                            <select className="appearance-none text-indigo-600 font-medium bg-transparent caret-transparent block min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 pl-1 pr-4 md:min-h-[auto] md:min-w-[auto]">
                              <option
                                value="sqft"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.ft
                              </option>
                              <option
                                value="sqyd"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.yd
                              </option>
                              <option
                                value="sqm"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.m
                              </option>
                            </select>
                            <span className="text-indigo-600 text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] pointer-events-none -ml-4 md:min-h-[auto] md:min-w-[auto]">
                              ▼
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-17.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-black font-semibold box-border caret-transparent outline-[3px]">
                            Road Width
                          </p>
                          <p className="box-border caret-transparent outline-[3px]">
                            {project.roadWidth}
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-18.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-black font-semibold box-border caret-transparent outline-[3px]">
                            Approved by
                          </p>
                          <p className="box-border caret-transparent outline-[3px]">
                            {project.approvedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 w-full mt-4 pt-4 border-t border-solid">
                      <div className="items-center box-border caret-transparent gap-x-3 flex basis-[0%] grow min-h-[auto] outline-[3px] gap-y-3">
                        {project.builderLogoUrl ? (
                          <div className="relative bg-black box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] p-[1.5px] rounded-full">
                            <img
                              src={project.builderLogoUrl}
                              alt={project.builderLogoAlt}
                              className="aspect-[auto_36_/_36] bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent h-9 max-w-full object-contain outline-[3px] w-9 p-1 rounded-full"
                            />
                          </div>
                        ) : (
                          <div className="text-white text-sm font-semibold items-center bg-black shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex shrink-0 h-9 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] uppercase w-9 rounded-full">
                            {project.builderInitial}
                          </div>
                        )}
                        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] outline-[3px] text-left">
                          <p className="text-gray-900 text-[15px] font-semibold box-border caret-transparent leading-[18.75px] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            {project.builderName}
                          </p>
                          <p className="text-gray-500 text-xs font-medium box-border caret-transparent tracking-[0.3px] leading-4 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-1">
                            {project.builderType}
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                        <button
                          type="button"
                          className="text-white font-medium items-center bg-slate-900 bg-[linear-gradient(to_right,rgb(99,102,241),rgb(6,182,212))] caret-transparent gap-x-4 flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-center text-nowrap w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr"
                        >
                          <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:hidden md:min-h-0 md:min-w-0">
                            Contact
                          </span>
                          <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap md:flex md:min-h-[auto] md:min-w-[auto]">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-21.svg"
                              alt="Icon"
                              className="text-lg box-border caret-transparent shrink-0 h-[18px] leading-7 outline-[3px] text-nowrap w-[18px]"
                            />
                            <span className="box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] text-nowrap md:block md:min-h-[auto] md:min-w-[auto]">
                              Contact
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute box-border caret-transparent gap-x-2 hidden outline-[3px] gap-y-2 z-10 right-16 -top-14 md:flex">
            <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-50 outline-[3px] pointer-events-none text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -left-12 top-2/4 md:translate-y-[-50.0%]">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-22.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
              />
            </button>
            <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 outline-[3px] text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -right-12 top-2/4 md:translate-y-[-50.0%]">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-23.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      role="region"
      className="relative box-border caret-transparent outline-[3px] w-full"
    >
      <div className="box-border caret-transparent outline-[3px] overflow-hidden">
        <div className="box-border caret-transparent outline-[3px] flex -ml-2">
          {props.projects.map((project) => (
            <div
              role="group"
              className="box-border caret-transparent basis-[92%] shrink-0 min-h-[auto] outline-[3px] pl-2 md:basis-full"
              key={project.title}
            >
              <div className="box-border caret-transparent outline-[3px]">
                <div className="relative text-slate-950 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col max-h-full min-h-0 outline-[3px] w-full border border-gray-200 overflow-hidden mb-6 rounded-lg border-solid md:flex-row md:max-h-[400px] md:min-h-[400px]">
                  <div className="relative aspect-video box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full overflow-hidden md:w-6/12">
                    <div className="relative box-border caret-transparent h-full outline-[3px] w-full overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        className="aspect-video box-border caret-transparent blur-0 h-full max-w-full object-cover outline-[3px] w-full"
                      />
                      <div className="absolute box-border caret-transparent outline-[3px] inset-0"></div>
                    </div>
                    <div className="absolute text-green-800 text-xs font-semibold items-center bg-red-100 box-border caret-transparent gap-x-2 flex leading-4 outline-[3px] gap-y-2 ml-2 px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr left-2 top-2">
                      <img
                        src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-11.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
                      />
                      {project.badgeText}
                    </div>
                    <div className="absolute box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 z-10 right-2 top-2 md:hidden">
                      <button className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-yellow-400 p-1 rounded-md md:inline-flex md:min-h-0 md:min-w-0">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-12.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-3.5 outline-[3px] text-nowrap w-3.5"
                        />
                      </button>
                      <button className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-yellow-400 p-1 rounded-md md:min-h-0 md:min-w-0">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-13.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-3 outline-[3px] text-nowrap w-3"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative bg-[linear-gradient(to_left_bottom,rgb(167,243,208),rgb(255,255,255),rgb(209,250,229))] box-border caret-transparent flex basis-[0%] flex-col grow justify-start min-h-[auto] min-w-[auto] outline-[3px] pt-3 pb-4 px-4 md:pt-4">
                    <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px]">
                      <div className="box-border caret-transparent flex flex-col justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full">
                        <h3 className="text-base font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden font-poppins md:text-xl md:tracking-[-0.5px] md:leading-7 md:text-wrap">
                          {project.title}
                        </h3>
                        <div className="absolute box-border caret-transparent gap-x-1 hidden outline-[3px] gap-y-1 z-10 right-4 top-2 md:gap-x-2 md:flex md:gap-y-2">
                          <button
                            type="button"
                            aria-label="Save this job"
                            className="text-sm font-medium items-center bg-white caret-transparent inline-flex h-7 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap w-7 border border-yellow-400 p-0 rounded-md md:flex md:h-10 md:min-h-[auto] md:min-w-[auto] md:w-10"
                          >
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-12.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3.5 outline-[3px] text-nowrap w-3.5"
                            />
                          </button>
                          <button
                            type="button"
                            aria-label="Copy link to this job"
                            className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 min-h-0 min-w-0 outline-[3px] text-center text-nowrap w-7 border border-yellow-400 p-0 rounded-md md:h-10 md:min-h-[auto] md:min-w-[auto] md:w-10"
                          >
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-13.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-3 outline-[3px] text-nowrap w-3"
                            />
                          </button>
                        </div>
                        <p className="text-gray-600 text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] mb-0.5 md:text-sm md:leading-5">
                          {project.location}
                        </p>
                        <p className="text-green-700 text-base font-semibold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] mb-1 md:text-xl md:leading-7">
                          {project.price}
                        </p>
                        <p className="text-gray-500 text-[10px] italic box-border caret-transparent hidden leading-[15px] min-h-0 min-w-0 outline-[3px] mb-3 md:text-xs md:block md:leading-4 md:min-h-[auto] md:min-w-[auto]">
                          {project.averagePrice}
                        </p>
                        <div className="text-gray-700 text-xs items-start bg-gray-100 box-border caret-transparent gap-x-10 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-10 border border-yellow-400 mt-2 px-3 py-2 rounded-lg border-solid md:text-sm md:hidden md:leading-5 md:min-h-0 md:min-w-0">
                          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-14.svg"
                              alt="Icon"
                              className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                            />
                            <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                              <p className="text-gray-900 text-xs font-semibold box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                Size starts at
                              </p>
                              <p className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 outline-[3px] gap-y-2 md:text-sm md:leading-5">
                                {project.sizeStartsAt}
                                <select className="appearance-none text-indigo-600 text-sm font-medium bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-transparent outline-offset-2 outline outline-2 pl-1 pr-4 md:min-h-0 md:min-w-0">
                                  <option
                                    value="sqft"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.ft
                                  </option>
                                  <option
                                    value="sqyd"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.yd
                                  </option>
                                  <option
                                    value="sqm"
                                    className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                                  >
                                    sq.m
                                  </option>
                                </select>
                                <span className="text-indigo-600 text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] pointer-events-none -ml-4 md:min-h-0 md:min-w-0">
                                  ▼
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="text-xs items-center box-border caret-transparent gap-x-1 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-15.svg"
                              alt="Icon"
                              className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                            />
                            <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                              <p className="text-gray-900 text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                Road width
                              </p>
                              <p className="text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                                {project.roadWidth}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm backdrop-blur-sm bg-white/70 box-border caret-transparent gap-x-4 hidden justify-between leading-5 min-h-0 min-w-0 outline-[3px] gap-y-4 w-full border border-yellow-400 mt-2 px-6 py-3 rounded-lg border-solid md:flex md:min-h-[auto] md:min-w-[auto]">
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-16.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-gray-900 font-semibold box-border caret-transparent outline-[3px]">
                            Size starts at
                          </p>
                          <p className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2">
                            {project.sizeStartsAt}
                            <select className="appearance-none text-indigo-600 font-medium bg-transparent caret-transparent block min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 pl-1 pr-4 md:min-h-[auto] md:min-w-[auto]">
                              <option
                                value="sqft"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.ft
                              </option>
                              <option
                                value="sqyd"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.yd
                              </option>
                              <option
                                value="sqm"
                                className="font-normal items-center box-border caret-transparent gap-x-[7px] min-h-6 min-w-6 outline-[3px] gap-y-[7px]"
                              >
                                sq.m
                              </option>
                            </select>
                            <span className="text-indigo-600 text-xs box-border caret-transparent block leading-4 min-h-0 min-w-0 outline-[3px] pointer-events-none -ml-4 md:min-h-[auto] md:min-w-[auto]">
                              ▼
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-17.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-gray-900 font-semibold box-border caret-transparent outline-[3px]">
                            Road Width
                          </p>
                          <p className="text-gray-800 box-border caret-transparent outline-[3px]">
                            {project.roadWidth}
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:min-h-[auto] md:min-w-[auto]">
                        <img
                          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-18.svg"
                          alt="Icon"
                          className="text-gray-500 box-border caret-transparent h-[18px] outline-[3px] w-[18px]"
                        />
                        <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                          <p className="text-gray-900 font-semibold box-border caret-transparent outline-[3px]">
                            Approved by
                          </p>
                          <p className="text-gray-700 box-border caret-transparent outline-[3px]">
                            {project.approvedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm box-border caret-transparent hidden leading-5 min-h-0 min-w-0 outline-[3px] mt-1 md:block md:min-h-[auto] md:min-w-[auto]">
                      <div className="box-border caret-transparent outline-[3px] mt-6">
                        <div className="box-border caret-transparent outline-[3px]">
                          <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 mb-4">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-19.svg"
                              alt="Icon"
                              className="text-green-500 box-border caret-transparent h-4 outline-[3px] w-4"
                            />
                            <span className="text-gray-900 font-semibold box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                              Amenities:
                            </span>
                            <div className="box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap overflow-auto md:min-h-[auto] md:min-w-[auto]">
                              {project.amenities.map((amenity) => (
                                <span
                                  className="text-gray-900 text-[13px] bg-green-100 box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-nowrap border border-yellow-400 px-3 py-1 rounded-md border-solid md:min-h-[auto] md:min-w-[auto]"
                                  key={amenity}
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="box-border caret-transparent outline-[3px] mt-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 mb-2">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-20.svg"
                              alt="Icon"
                              className="text-blue-500 box-border caret-transparent h-4 outline-[3px] w-4"
                            />
                            <span className="text-gray-900 font-semibold box-border caret-transparent block min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto]">
                              Nearby:
                            </span>
                            <div className="box-border caret-transparent gap-x-2 flex min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap overflow-auto md:min-h-[auto] md:min-w-[auto]">
                              {project.nearby.map((nearbyItem) => (
                                <span
                                  className="text-gray-900 text-[13px] bg-blue-100 box-border caret-transparent block min-h-0 min-w-0 outline-[3px] text-nowrap px-3 py-1 rounded-md md:min-h-[auto] md:min-w-[auto]"
                                  key={nearbyItem}
                                >
                                  {nearbyItem}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-3 flex flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 w-full border-gray-200 mt-4 pt-4 border-t border-solid">
                      <div className="items-center box-border caret-transparent gap-x-3 flex basis-[0%] grow min-h-[auto] outline-[3px] gap-y-3">
                        <div className="relative bg-[linear-gradient(to_right_bottom,rgba(250,204,21,0.7),rgba(251,146,60,0.6))] box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] p-px rounded-full">
                          <img
                            src={project.builderLogoUrl}
                            alt={project.builderLogoAlt}
                            className="aspect-[auto_36_/_36] bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent h-9 max-w-full object-contain outline-[3px] w-9 p-1 rounded-full"
                          />
                        </div>
                        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] outline-[3px] text-left">
                          <p className="text-gray-900 text-[15px] font-semibold box-border caret-transparent leading-[18.75px] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                            {project.builderName}
                          </p>
                          <p className="text-gray-500 text-xs font-medium box-border caret-transparent tracking-[0.3px] leading-4 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-1">
                            {project.builderType}
                          </p>
                        </div>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-2 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2">
                        <button
                          type="button"
                          className="text-white font-medium items-center bg-slate-900 bg-[linear-gradient(to_right,rgb(99,102,241),rgb(6,182,212))] caret-transparent gap-x-4 flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-center text-nowrap w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr"
                        >
                          <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:hidden md:min-h-0 md:min-w-0">
                            Contact
                          </span>
                          <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap md:flex md:min-h-[auto] md:min-w-[auto]">
                            <img
                              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-21.svg"
                              alt="Icon"
                              className="text-lg box-border caret-transparent shrink-0 h-[18px] leading-7 outline-[3px] text-nowrap w-[18px]"
                            />
                            <span className="box-border caret-transparent inline min-h-0 min-w-0 outline-[3px] text-nowrap md:block md:min-h-[auto] md:min-w-[auto]">
                              Contact
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute box-border caret-transparent gap-x-2 hidden outline-[3px] gap-y-2 z-10 right-16 -top-14 md:flex">
            <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 opacity-50 outline-[3px] pointer-events-none text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -left-12 top-2/4 md:translate-y-[-50.0%]">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-22.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
              />
            </button>
            <button className="absolute text-sm font-medium items-center bg-gray-200 caret-transparent flex h-8 justify-center leading-5 outline-[3px] text-center text-nowrap transform-none w-8 border border-slate-200 p-2 rounded-full -right-12 top-2/4 md:translate-y-[-50.0%]">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-23.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

