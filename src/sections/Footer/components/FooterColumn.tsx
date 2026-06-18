export type FooterColumnProps = {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6">
      <h3 className="text-green-700 text-sm font-bold box-border caret-transparent tracking-[1.4px] leading-5 outline-[3px] uppercase mb-3 font-poppins">
        {props.title}
      </h3>
      <ul className="text-sm box-border caret-transparent leading-5 list-none outline-[3px] pl-0 md:text-base md:leading-6">
        {props.links.map((link, index) => (
          <li
            key={`${link.href}-${link.label}`}
            className={
              index === 0
                ? "text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-6"
                : "text-sm box-border caret-transparent leading-5 outline-[3px] mt-1 md:text-base md:leading-6"
            }
          >
            <a
              href={link.href}
              className="text-sm box-border caret-transparent leading-5 outline-[3px] md:text-base md:leading-6"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
