import { Image } from "@/components/ui/OptimizedImage";

export type PlotCategoryCardProps = {
  imageUrl: string;
  imageAlt: string;
  badgeText: string;
  iconUrl: string;
  title: string;
  description: string;
  buttonText: string;
};

export const PlotCategoryCard = (props: PlotCategoryCardProps) => {
  return (
    <div className="group relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-gray-200 overflow-hidden rounded-2xl border-solid transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:border-indigo-500">
      <div className="relative box-border caret-transparent h-56 outline-[3px] overflow-hidden">
        <Image
          src={props.imageUrl}
          alt={props.imageAlt}
          className="aspect-[auto_640_/_480] box-border caret-transparent h-full max-w-full object-cover outline-[3px] w-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.2),rgba(0,0,0,0))] box-border caret-transparent outline-[3px] inset-0"></div>
        <span className="absolute text-xs font-medium backdrop-blur bg-white/90 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent block leading-4 outline-[3px] px-3 py-1 rounded-full left-3 top-3">
          {props.badgeText}
        </span>
        <div className="absolute text-white text-sm bg-black/40 box-border caret-transparent leading-5 outline-[3px] p-2 rounded-full right-3 top-3">
          <Image
            src={props.iconUrl}
            alt="Icon"
            className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
          />
        </div>
        <h3 className="absolute text-white text-lg font-semibold box-border caret-transparent leading-[22.5px] outline-[3px] left-4 bottom-3 font-poppins">
          {props.title}
        </h3>
      </div>
      <div className="box-border caret-transparent flex flex-col justify-between min-h-[150px] outline-[3px] p-5">
        <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] min-h-[auto] min-w-[auto] outline-[3px]">
          {props.description}
        </p>
        <button className="text-white text-sm font-semibold bg-indigo-600 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] text-center w-fit mt-4 px-4 py-2 rounded-lg">
          {props.buttonText}
        </button>
      </div>
      <div className="absolute box-border caret-transparent outline-[3px] pointer-events-none rounded-2xl border-2 border-solid border-transparent inset-0"></div>
    </div>
  );
};
