import { Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";

export const TopAgentsBestProjects = () => {
  const localitiesList = [
    { name: "Jagatpura", iconSrc: "https://c.animaapp.com/mqj9un6oir889A/assets/icon-31.svg", iconVariant: "text-purple-500" },
    { name: "Vaishali Nagar", iconSrc: "https://c.animaapp.com/mqj9un6oir889A/assets/icon-28.svg", iconVariant: "text-yellow-500" },
    { name: "Mansarovar", iconSrc: "https://c.animaapp.com/mqj9un6oir889A/assets/icon-30.svg", iconVariant: "text-green-500" },
    { name: "Ajmer Road", iconSrc: "https://c.animaapp.com/mqj9un6oir889A/assets/icon-34.svg", iconVariant: "text-indigo-500" },
  ];

  return (
    <section className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mt-16 mx-auto px-4 md:mt-20">
      <div className="bg-[linear-gradient(to_right,rgb(255,255,255),rgb(249,250,251))] shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent outline-[3px] border border-gray-200 p-8 rounded-md border-solid">
        <h2 className="relative text-gray-800 text-lg font-extrabold items-center box-border caret-transparent gap-x-1 flex flex-wrap leading-[24.75px] outline-[3px] gap-y-1 mb-2 font-poppins md:text-2xl md:gap-x-2 md:leading-8 md:gap-y-2">
          Top Agents Best Projects in
          <span className="text-yellow-500 text-lg box-border caret-transparent block leading-[24.75px] min-h-[auto] min-w-[auto] outline-[3px] md:text-2xl md:leading-8">
            Jaipur
          </span>
        </h2>
        <p className="text-gray-600 text-sm box-border caret-transparent leading-5 max-w-4xl outline-[3px] mb-6 md:text-base md:leading-6">
          Explore premium properties listed by paid agents in Jaipur's top localities.
        </p>
        <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-none outline-[3px] gap-y-4 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
          {localitiesList.map((locality) => {
            const href = `/localities/${locality.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`;

            return (
              <Link
                key={locality.name}
                href={href}
                className="group items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 p-3 rounded-lg border-solid transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-[0_10px_24px_-18px_rgba(37,99,235,0.65)]"
              >
                <Image
                  src={locality.iconSrc}
                  alt="Icon"
                  className={`box-border caret-transparent h-6 outline-[3px] w-6 transition-transform duration-300 group-hover:scale-110 ${locality.iconVariant}`}
                />
                <span className="text-gray-700 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] ml-2">
                  {locality.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
