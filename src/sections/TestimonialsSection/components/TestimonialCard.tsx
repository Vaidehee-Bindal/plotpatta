export type TestimonialCardProps = {
  accentClassName: string;
  initials: string;
  name: string;
  location: string;
  role: string;
  roleClassName: string;
  rating: string;
  ratingText: string;
  testimonial: string;
  verificationText: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  const starIcons = Array.from(
    { length: Number(props.rating) },
    (_, index) => index,
  );

  return (
    <div className="relative bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border border-gray-200 overflow-hidden p-6 rounded-2xl border-solid">
      <div
        className={`absolute box-border caret-transparent h-1 outline-[3px] w-full left-0 top-0 ${props.accentClassName}`}
      ></div>
      <div className="items-center box-border caret-transparent gap-x-4 flex outline-[3px] gap-y-4">
        <div className="text-gray-700 font-semibold items-center bg-gray-100 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex h-14 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-14 border border-gray-300 rounded-full border-solid">
          {props.initials}
        </div>
        <div className="box-border caret-transparent basis-[0%] grow min-h-[auto] min-w-[auto] outline-[3px]">
          <h3 className="text-gray-900 font-semibold box-border caret-transparent outline-[3px] font-poppins">
            {props.name}
          </h3>
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-wrap outline-[3px] gap-y-2 mt-1">
            <p className="text-gray-500 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
              {props.location}
            </p>
            <span
              className={`text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] border px-2 py-1 rounded-full border-solid ${props.roleClassName}`}
            >
              {props.role}
            </span>
          </div>
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-2 flex outline-[3px] gap-y-2 mt-4">
        <div className="text-yellow-400 box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-1">
          {starIcons.map((starIcon) => (
            <img
              key={starIcon}
              src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-51.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 outline-[3px] w-4"
            />
          ))}
        </div>
        <span className="text-gray-500 text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px]">
          {props.ratingText}
        </span>
      </div>
      <div className="relative box-border caret-transparent outline-[3px] mt-5">
        <span className="absolute text-gray-200 text-4xl box-border caret-transparent block leading-10 outline-[3px] left-0 -top-4">
          “
        </span>
        <p className="text-gray-600 box-border caret-transparent leading-[26px] outline-[3px] pl-5">
          {props.testimonial}
        </p>
      </div>
      <div className="box-border caret-transparent outline-[3px] mt-6">
        <span className="text-green-700 text-xs bg-green-100 box-border caret-transparent leading-4 outline-[3px] px-3 py-1 rounded-full">
          {props.verificationText}
        </span>
      </div>
    </div>
  );
};
