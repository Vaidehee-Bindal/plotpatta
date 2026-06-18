export type LocalityItemProps = {
  iconSrc: string;
  iconVariant: string;
  localityName: string;
};

export const LocalityItem = (props: LocalityItemProps) => {
  return (
    <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 p-3 rounded-lg border-solid">
      <img
        src={props.iconSrc}
        alt="Icon"
        className={`box-border caret-transparent h-6 outline-[3px] w-6 ${props.iconVariant}`}
      />
      <span className="text-gray-700 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] ml-2">
        {props.localityName}
      </span>
    </div>
  );
};
