export const UpcomingProjects = () => {
  return (
    <div className="box-border caret-transparent max-w-none min-h-64 outline-[3px] plotpatta-wide mt-4 mb-14 mx-auto px-4">
      <div className="box-border caret-transparent outline-[3px] w-full mx-auto">
        <div className="items-center box-border caret-transparent flex justify-between outline-[3px] mb-4 md:mb-5">
          <div className="items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full mb-2">
            <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
              <h2 className="text-gray-900 text-xl font-extrabold box-border caret-transparent leading-7 outline-[3px] pb-1 font-poppins md:text-2xl md:leading-8">
                New Upcoming Projects
              </h2>
              <span className="absolute bg-gray-800 box-border caret-transparent block h-1 outline-[3px] w-12 rounded-full left-0 bottom-0"></span>
            </div>
            <p className="text-gray-600 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-3">
              Visit these projects and get early bird benefits
            </p>
          </div>
        </div>
        <div className="bg-teal-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent outline-[3px] border-yellow-500 overflow-hidden rounded-xl border-2 border-solid">
          <div className="relative box-border caret-transparent outline-[3px] overflow-hidden">
            <img
              src="https://c.animaapp.com/mqj9un6oir889A/assets/Black_and_White_Simple_Coming_Soon_Video_qa7zxp_1_mosud0.webp"
              alt="Aerial view of a residential plot layout with numbered plots and surrounding greenery"
              className="aspect-[auto_1920_/_1080] box-border caret-transparent h-[220px] max-w-full object-contain outline-[3px] w-full md:h-[512px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
