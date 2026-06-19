export type PreferredAgentCardProps = {
  initial: string;
  agentName: string;
  location: string;
  agencyName: string;
  operatingSince: string;
  buyersServed: string;
  buttonText: string;
};

export const PreferredAgentCard = (props: PreferredAgentCardProps) => {
  return (
    <div
      role="group"
      className="box-border caret-transparent basis-[90%] shrink-0 min-h-[auto] outline-[3px] px-2 md:basis-3/12"
    >
      <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent shrink-0 outline-[3px] border border-gray-200 overflow-hidden rounded-md border-solid transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400">
        <div className="items-center bg-[linear-gradient(to_right,rgb(59,130,246),rgb(37,99,235))] box-border caret-transparent flex justify-between outline-[3px] px-4 py-3">
          <div className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3">
            <div className="text-blue-600 font-bold items-center bg-white box-border caret-transparent flex h-10 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-10 rounded-full border-2 border-solid border-white md:h-12 md:w-12">
              {props.initial}
            </div>
            <div className="box-border caret-transparent min-h-[auto] outline-[3px]">
              <h4 className="text-white text-sm font-bold box-border caret-transparent leading-5 max-w-40 outline-[3px] text-ellipsis text-nowrap overflow-hidden font-poppins md:text-base md:leading-6">
                {props.agentName}
              </h4>
              <p className="text-white/90 text-xs box-border caret-transparent leading-4 max-w-40 outline-[3px] text-ellipsis text-nowrap overflow-hidden md:text-sm md:leading-5">
                {props.location}
              </p>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent outline-[3px] border-gray-200 px-4 py-3 border-b border-solid">
          <h5 className="text-gray-900 font-semibold box-border caret-transparent outline-[3px] text-ellipsis text-nowrap overflow-hidden font-poppins">
            {props.agencyName}
          </h5>
          <p className="text-gray-900 text-sm box-border caret-transparent leading-5 outline-[3px]">
            Operating Since: {props.operatingSince}
          </p>
          <p className="text-gray-900 text-sm box-border caret-transparent leading-5 outline-[3px]">
            Buyers Served: {props.buyersServed}
          </p>
        </div>
        <div className="box-border caret-transparent outline-[3px] px-4 py-3">
          <button className="text-white text-sm font-semibold bg-blue-600 caret-transparent leading-5 outline-[3px] text-center w-full px-0 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
