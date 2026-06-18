import { LocalityItem } from "@/sections/PopularLocalities/components/LocalityItem";

export const PopularLocalities = () => {
  return (
    <section className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mt-16 mx-auto px-4 md:mt-20">
      <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(249,250,251))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent outline-[3px] border border-gray-200 p-8 rounded-md border-solid">
        <h2 className="relative text-gray-800 text-lg font-extrabold items-center box-border caret-transparent gap-x-1 flex flex-wrap leading-[24.75px] outline-[3px] gap-y-1 mb-2 font-poppins md:text-2xl md:gap-x-2 md:leading-8 md:gap-y-2">
          Explore Plots in Popular
          <span className="text-yellow-500 text-lg box-border caret-transparent block leading-[24.75px] min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
            JaipurLocalities
          </span>
        </h2>
        <p className="text-gray-600 text-sm box-border caret-transparent leading-5 max-w-4xl outline-[3px] mb-6 md:text-base md:leading-6">
          Discover premium plots inJaipur&#39;s most prestigious locations.
        </p>
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-none outline-[3px] gap-y-4 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-28.svg"
            iconVariant="text-yellow-500"
            localityName="Vaishali Nagar"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-29.svg"
            iconVariant="text-blue-500"
            localityName="Malviya Nagar"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-30.svg"
            iconVariant="text-green-500"
            localityName="Mansarovar"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-31.svg"
            iconVariant="text-purple-500"
            localityName="Jagatpura"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-32.svg"
            iconVariant="text-red-500"
            localityName="C-Scheme"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-33.svg"
            iconVariant="text-pink-500"
            localityName="Tonk Road"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-34.svg"
            iconVariant="text-indigo-500"
            localityName="Ajmer Road"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-35.svg"
            iconVariant="text-orange-500"
            localityName="Bapu Nagar"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-36.svg"
            iconVariant="text-teal-500"
            localityName="Diggi Road"
          />
          <LocalityItem
            iconSrc="https://c.animaapp.com/mqj9un6oir889A/assets/icon-37.svg"
            iconVariant="text-cyan-500"
            localityName="Sirsi Road"
          />
        </div>
      </div>
    </section>
  );
};
