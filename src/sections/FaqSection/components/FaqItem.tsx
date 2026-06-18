export type FaqItemProps = {
  question: string;
  answer: string;
  rootClassName: string;
};

export const FaqItem = (props: FaqItemProps) => {
  return (
    <div
      className={`bg-gray-50 box-border caret-transparent outline-[3px] border border-gray-200 rounded-xl border-solid ${props.rootClassName}`}
    >
      <button className="items-center bg-transparent caret-transparent flex justify-between outline-[3px] text-left w-full p-5">
        <span className="text-gray-900 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          {props.question}
        </span>
        <span className="text-indigo-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          <img
            src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-52.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 outline-[3px] w-4"
          />
        </span>
      </button>
      <div className="box-border caret-transparent max-h-0 outline-[3px] overflow-hidden px-5">
        <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] outline-[3px]">
          {props.answer}
        </p>
      </div>
    </div>
  );
};
