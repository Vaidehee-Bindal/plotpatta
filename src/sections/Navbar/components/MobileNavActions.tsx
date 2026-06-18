type MobileNavActionsProps = {
  isScrolled: boolean;
};

export const MobileNavActions = ({ isScrolled }: MobileNavActionsProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:hidden md:min-h-0 md:min-w-0">
      <button className={`text-xs items-center caret-transparent gap-x-2 flex leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center px-3 py-2 rounded-md transition-colors duration-300 md:min-h-0 md:min-w-0 ${isScrolled ? "text-white bg-teal-900" : "text-gray-900 bg-yellow-400"}`}>
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-3.5 outline-[3px] w-3.5"
        />
        Login
      </button>
      <button
        type="button"
        className="text-2xl bg-transparent caret-transparent block leading-8 min-h-[auto] min-w-[auto] outline-[3px] text-center ml-3 p-0 md:inline-block md:min-h-0 md:min-w-0"
      >
        <img
          src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 outline-[3px] w-6"
        />
      </button>
    </div>
  );
};
