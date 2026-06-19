import { Image } from "@/components/ui/OptimizedImage";

export const SellerHotDeals = () => {
  return (
    <section className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mt-8 mb-24 mx-auto px-4 md:mt-24">
      <div className="bg-[linear-gradient(to_right,rgb(185,28,28),rgb(239,68,68),rgb(239,68,68))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent outline-[3px] overflow-hidden rounded-xl">
        <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-8 p-8 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:p-12">
          <div className="text-white box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
            <div className="text-orange-200 font-semibold items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 mb-3">
              <Image
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-24.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 outline-[3px] w-4"
              />
              <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
                Hot Deals for Sellers
              </span>
            </div>
            <h1 className="text-3xl font-bold box-border caret-transparent leading-[37.5px] outline-[3px] font-poppins md:text-4xl md:leading-10">
              Sell Faster with{" "}
              <span className="text-yellow-300 text-3xl box-border caret-transparent leading-[37.5px] outline-[3px] md:text-4xl md:leading-10">
                Hot Deals
              </span>
            </h1>
            <p className="text-red-100 box-border caret-transparent max-w-xl outline-[3px] mt-4">
              Feature your property as a Hot Deal to get higher visibility,
              faster enquiries, and serious buyers at the right price.
            </p>
            <div className="box-border caret-transparent gap-x-4 flex flex-wrap outline-[3px] gap-y-4 mt-6">
              <a
                href="/post-hotdeal"
                className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
              >
                <button className="text-red-700 font-semibold bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] caret-transparent outline-[3px] text-center px-6 py-3 rounded-xl">
                  Post Hot Deal
                </button>
              </a>
              <a
                href="https://wa.me/918829901400"
                className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]"
              >
                <button
                  type="button"
                  className="font-semibold items-center bg-transparent caret-transparent gap-x-2 flex outline-[3px] gap-y-2 text-center border px-6 py-3 rounded-xl border-white/30"
                >
                  <Image
                    src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-25.svg"
                    alt="Icon"
                    className="text-green-400 text-lg box-border caret-transparent h-[18px] leading-7 outline-[3px] w-[18px]"
                  />
                  Post via WhatsApp
                </button>
              </a>
            </div>
          </div>
          <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] outline-[3px] md:justify-end">
            <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-[260px] p-4 rounded-2xl">
              <div className="items-center bg-[linear-gradient(to_right_bottom,rgb(254,226,226),rgb(255,237,213))] box-border caret-transparent flex h-44 justify-center outline-[3px] rounded-xl">
                <Image
                  src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-26.svg"
                  alt="Icon"
                  className="text-red-500 text-5xl box-border caret-transparent h-12 leading-[48px] outline-[3px] w-12"
                />
              </div>
              <p className="text-gray-800 font-semibold box-border caret-transparent outline-[3px] text-center mt-3">
                Hot Deal Listing
              </p>
              <p className="text-gray-500 text-sm box-border caret-transparent leading-5 outline-[3px] text-center">
                Boosted for faster selling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
