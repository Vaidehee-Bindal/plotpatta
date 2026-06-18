export type SectionHeaderProps = {
  containerClassName: string;
  title: string;
  titleClassName: string;
  underlineClassName: string;
  description: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between outline-[3px] mb-4 px-2">
      <div
        className={`items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] w-full ${props.containerClassName}`}
      >
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
          <h2
            className={`text-gray-900 text-xl font-extrabold box-border caret-transparent leading-7 outline-[3px] font-poppins md:text-2xl md:leading-8 ${props.titleClassName}`}
          >
            {props.title}
          </h2>
          <span
            className={`absolute bg-gray-800 box-border caret-transparent block h-1 outline-[3px] w-12 rounded-full left-0 -bottom-1 ${props.underlineClassName}`}
          ></span>
        </div>
        <p className="text-gray-600 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-3 md:text-base md:leading-6">
          {props.description}
        </p>
      </div>
    </div>
  );
};
