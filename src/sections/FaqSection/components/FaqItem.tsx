"use client";

import { useState } from "react";

export type FaqItemProps = {
  question: string;
  answer: string;
  rootClassName: string;
};

export const FaqItem = (props: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-gray-50 box-border caret-transparent outline-[3px] border border-gray-200 rounded-xl border-solid transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-md ${props.rootClassName}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="items-center bg-transparent caret-transparent flex justify-between outline-[3px] text-left w-full p-5"
      >
        <span className="text-gray-900 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px]">
          {props.question}
        </span>
        <span className="text-indigo-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] text-2xl font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`box-border caret-transparent outline-[3px] overflow-hidden px-5 transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm box-border caret-transparent leading-[22.75px] outline-[3px]">
          {props.answer}
        </p>
      </div>
    </div>
  );
};
