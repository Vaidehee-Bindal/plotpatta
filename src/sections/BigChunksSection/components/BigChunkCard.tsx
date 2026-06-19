import { Image } from "@/components/ui/OptimizedImage";

export type BigChunkCardProps = {
  imageUrl: string;
  price: string;
  location: string;
  plotArea: string;
  area: string;
  agentInitial: string;
  agentName: string;
};

export const BigChunkCard = (props: BigChunkCardProps) => {
  return (
    <div
      role="group"
      className="box-border caret-transparent basis-[85%] shrink-0 min-h-[auto] outline-[3px] px-2 md:basis-[33.6%]"
    >
      <div className="relative text-slate-950 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col h-auto outline-[3px] border border-gray-200 overflow-hidden mb-6 rounded-md border-solid md:h-[420px]">
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="relative box-border caret-transparent outline-[3px] w-full overflow-hidden rounded-t-md">
            <div className="box-border caret-transparent flex h-[150px] outline-[3px] w-full md:h-[200px]">
              <Image
                src={props.imageUrl}
                alt="Residential plot / land for sale"
                className="box-border caret-transparent h-full max-w-full min-h-[auto] min-w-[auto] object-cover outline-[3px] w-full"
              />
            </div>
          </div>
          <div className="absolute text-red-800 text-xs font-semibold items-center bg-red-100 box-border caret-transparent gap-x-2 flex leading-4 outline-[3px] gap-y-2 ml-2 px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr left-2 top-2">
            <Image
              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-42.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
            />
            BIG CHUNK
          </div>
          <div className="absolute box-border caret-transparent gap-x-1 flex outline-[3px] gap-y-1 z-10 right-2 top-2 md:gap-x-2 md:gap-y-2">
            <button className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:h-8 md:w-8">
              <Image
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-43.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] text-nowrap w-4"
              />
            </button>
            <button className="text-sm font-medium items-center bg-white caret-transparent flex h-7 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center text-nowrap w-7 border border-slate-200 p-0 rounded-md md:h-8 md:w-8">
              <Image
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-13.svg"
                alt="Icon"
                className="box-border caret-transparent h-3 outline-[3px] text-nowrap w-3"
              />
            </button>
          </div>
        </div>
        <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full pt-3 pb-4 px-4">
          <div className="box-border caret-transparent hidden flex-col min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
            <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] flex flex-col justify-normal outline-[3px] gap-y-1 w-full md:items-center md:gap-x-3 md:flex-row md:justify-between">
              <h3 className="text-base font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-0 min-w-0 outline-[3px] text-ellipsis text-nowrap overflow-hidden font-poppins md:text-lg md:tracking-[-0.45px] md:leading-7 md:min-h-[auto] md:min-w-[auto] md:text-wrap">
                Residential Plot
              </h3>
              <p className="text-green-700 text-base font-semibold box-border caret-transparent leading-6 min-h-0 min-w-0 outline-[3px] mb-0.5 md:text-xl md:leading-7 md:min-h-[auto] md:min-w-[auto]">
                {props.price}
              </p>
            </div>
            <p className="text-gray-600 text-xs box-border caret-transparent leading-4 outline-[3px] text-ellipsis text-nowrap overflow-hidden md:text-sm md:leading-5 md:text-wrap">
              {props.location}
            </p>
          </div>
          <div className="box-border caret-transparent block flex-col min-h-[auto] min-w-[auto] outline-[3px] md:hidden md:min-h-0 md:min-w-0">
            <div className="box-border caret-transparent flex flex-col justify-between outline-[3px] w-full mb-1">
              <h3 className="text-base font-semibold box-border caret-transparent tracking-[-0.4px] leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden mb-1 font-poppins md:text-xl md:tracking-[-0.5px] md:leading-7 md:min-h-0 md:min-w-0 md:text-wrap">
                Residential Plot in Jaipur
              </h3>
              <p className="text-gray-600 text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] text-ellipsis text-nowrap overflow-hidden mb-1 md:text-sm md:leading-5 md:min-h-0 md:min-w-0 md:text-wrap">
                {props.location}
              </p>
              <p className="text-green-700 text-base font-semibold box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] md:text-xl md:leading-7 md:min-h-0 md:min-w-0">
                {props.price}
              </p>
              <div className="text-gray-700 text-xs items-center bg-gray-100 box-border caret-transparent gap-x-4 flex justify-between leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 my-2 px-6 py-1.5 rounded-lg md:text-sm md:hidden md:leading-5 md:min-h-0 md:min-w-0">
                <div className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-14.svg"
                    alt="Icon"
                    className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                  />
                  <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                    <p className="text-black text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                      Plot Area
                    </p>
                    <p className="text-xs box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                      {props.plotArea}
                    </p>
                  </div>
                </div>
                <div className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-44.svg"
                    alt="Icon"
                    className="text-gray-500 text-xs box-border caret-transparent h-3.5 leading-4 outline-[3px] w-3.5 md:text-sm md:leading-5"
                  />
                  <div className="text-xs box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] outline-[3px] md:text-sm md:leading-5 md:min-h-0 md:min-w-0">
                    <p className="text-black text-xs font-medium box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                      Facing
                    </p>
                    <p className="text-xs box-border caret-transparent leading-4 outline-[3px] md:text-sm md:leading-5">
                      N/A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full">
            <div className="text-xs bg-gray-100 box-border caret-transparent hidden leading-4 outline-[3px] scroll-smooth w-full overflow-auto p-3 rounded-md md:text-sm md:flex md:leading-5">
              <div className="text-xs items-center box-border caret-transparent gap-x-6 flex leading-4 min-h-0 min-w-max outline-[3px] gap-y-6 md:text-sm md:leading-5 md:min-h-[auto]">
                <div className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 md:text-sm md:leading-5 md:min-h-[auto] md:min-w-[auto]">
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-45.svg"
                    alt="Icon"
                    className="text-gray-500 text-xs box-border caret-transparent h-4 leading-4 outline-[3px] w-4 md:text-sm md:leading-5"
                  />
                  <div className="text-xs box-border caret-transparent leading-[15px] min-h-0 min-w-0 outline-[3px] md:text-sm md:leading-[17.5px] md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-black text-xs font-semibold box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      Area
                    </p>
                    <p className="text-xs box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      {props.area}
                    </p>
                  </div>
                </div>
                <div className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:text-sm md:leading-5 md:min-h-[auto] md:min-w-[auto]">
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-46.svg"
                    alt="Icon"
                    className="text-gray-500 text-xs box-border caret-transparent h-4 leading-4 outline-[3px] w-4 md:text-sm md:leading-5"
                  />
                  <div className="text-xs box-border caret-transparent leading-[15px] min-h-0 min-w-0 outline-[3px] md:text-sm md:leading-[17.5px] md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-black text-xs font-semibold box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      Transaction
                    </p>
                    <p className="text-xs box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      Sale
                    </p>
                  </div>
                </div>
                <div className="text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 min-h-0 min-w-0 outline-[3px] gap-y-2 border-gray-300 pl-4 border-l border-solid md:text-sm md:leading-5 md:min-h-[auto] md:min-w-[auto]">
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-47.svg"
                    alt="Icon"
                    className="text-gray-500 text-xs box-border caret-transparent h-4 leading-4 outline-[3px] w-4 md:text-sm md:leading-5"
                  />
                  <div className="text-xs box-border caret-transparent leading-[15px] min-h-0 min-w-0 outline-[3px] md:text-sm md:leading-[17.5px] md:min-h-[auto] md:min-w-[auto]">
                    <p className="text-black text-xs font-semibold box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      Ownership
                    </p>
                    <p className="text-xs box-border caret-transparent leading-[15px] outline-[3px] md:text-sm md:leading-[17.5px]">
                      Freehold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-between min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 w-full border-gray-200 mt-1 pt-3 border-t border-solid">
            <div className="items-center box-border caret-transparent gap-x-3 flex basis-[0%] grow min-h-[auto] outline-[3px] gap-y-3">
              <div className="text-black text-xs items-center bg-blue-300 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] uppercase w-8 rounded-full">
                {props.agentInitial}
              </div>
              <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] outline-[3px] text-left">
                <p className="text-black text-[15px] font-semibold box-border caret-transparent leading-[18.75px] outline-[3px] text-ellipsis text-nowrap overflow-hidden">
                  {props.agentName}
                </p>
                <p className="text-gray-600 text-sm box-border caret-transparent leading-5 outline-[3px] text-ellipsis text-nowrap overflow-hidden mt-1">
                  Agent
                </p>
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px]">
              <button
                type="button"
                className="text-white font-medium items-center bg-slate-900 bg-[linear-gradient(to_right,rgb(99,102,241),rgb(6,182,212))] caret-transparent gap-x-4 flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-4 text-center text-nowrap w-full px-6 py-2 rounded-bl rounded-br rounded-tl rounded-tr"
              >
                <span className="text-sm box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-nowrap md:hidden md:min-h-0 md:min-w-0">
                  Contact
                </span>
                <div className="items-center box-border caret-transparent gap-x-2 hidden min-h-0 min-w-0 outline-[3px] gap-y-2 text-nowrap md:flex md:min-h-[auto] md:min-w-[auto]">
                  <Image
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
  );
};
