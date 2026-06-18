export const WhyChooseSection = () => {
  return (
    <section className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-4 py-12">
      <div className="items-center box-border caret-transparent gap-x-14 flex flex-col outline-[3px] gap-y-14 md:flex-row">
        <div className="box-border caret-transparent h-[300px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:h-[500px] md:w-6/12">
          <img
            src="https://c.animaapp.com/mqj9un6oir889A/assets/pexels-anastasia-shuraeva-5495063_sze96g_1_lt7yas.webp"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Plots and real estate aerial view"
            className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full rounded-lg"
          />
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full md:w-6/12">
          <h2 className="text-gray-800 text-xl font-extrabold box-border caret-transparent leading-7 outline-[3px] mb-6 font-poppins md:text-3xl md:leading-9">
            Why Choose{" "}
            <span className="text-yellow-500 text-xl box-border caret-transparent leading-7 outline-[3px] md:text-3xl md:leading-9">
              PlotPatta.com
            </span>
            ?
          </h2>
          <div className="box-border caret-transparent outline-[3px]">
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent outline-[3px] border border-gray-200 p-5 rounded-lg border-solid">
              <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent leading-7 outline-[3px] mb-2 font-poppins">
                Unique Focus
              </h3>
              <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] outline-[3px] md:text-base md:leading-6">
                India’s first and only platform dedicated exclusively to plots,
                solving one of the most unorganized segments in real estate.
              </p>
            </div>
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent outline-[3px] border border-gray-200 mt-6 p-5 rounded-lg border-solid">
              <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent leading-7 outline-[3px] mb-2 font-poppins">
                Brand Meaning
              </h3>
              <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] outline-[3px] md:text-base md:leading-6">
                Plot = universal search for land. Patta = government-recognized
                ownership document. Together, they stand for authentic, legal,
                and trusted deals.
              </p>
            </div>
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent outline-[3px] border border-gray-200 mt-6 p-5 rounded-lg border-solid">
              <h3 className="text-gray-900 text-lg font-semibold box-border caret-transparent leading-7 outline-[3px] mb-2 font-poppins">
                Problem-Solving
              </h3>
              <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] outline-[3px] md:text-base md:leading-6">
                A single platform where builders, brokers, and customers connect
                directly to ensure genuine buyers, genuine sellers, and
                transparent transactions at fair market value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
