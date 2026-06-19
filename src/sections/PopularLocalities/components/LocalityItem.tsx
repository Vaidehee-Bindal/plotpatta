import { Image } from "@/components/ui/OptimizedImage";
import Link from "next/link";

export type LocalityItemProps = {
  iconSrc: string;
  iconVariant: string;
  localityName: string;
};

export const LocalityItem = (props: LocalityItemProps) => {
  const href = `/localities/${props.localityName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <Link
      href={href}
      className="group items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] border border-gray-300 p-3 rounded-lg border-solid transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50 hover:shadow-[0_10px_24px_-18px_rgba(37,99,235,0.65)]"
    >
      <Image
        src={props.iconSrc}
        alt="Icon"
        className={`box-border caret-transparent h-6 outline-[3px] w-6 transition-transform duration-300 group-hover:scale-110 ${props.iconVariant}`}
      />
      <span className="text-gray-700 font-semibold box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] ml-2">
        {props.localityName}
      </span>
    </Link>
  );
};
