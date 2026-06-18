import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="text-sm box-border caret-transparent gap-x-12 flex flex-wrap justify-between leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-12 md:text-base md:leading-6">
      <FooterColumn
        title="Company"
        links={[
          { href: "/aboutus", label: "About Us" },
          { href: "/careers", label: "Careers" },
          { href: "/services", label: "Services" },
        ]}
      />
      <FooterColumn
        title="Support"
        links={[
          { href: "/contact-us", label: "Contact Us" },
          { href: "/faq", label: "FAQs" },
        ]}
      />
      <FooterColumn
        title="Partner With Us"
        links={[
          { href: "/contact-us", label: "Broker" },
          { href: "/contact-us", label: "Builder" },
          { href: "/contact-us", label: "Investor" },
          { href: "/contact-us", label: "Banks" },
        ]}
      />
      <FooterColumn
        title="Explore"
        links={[
          { href: "/", label: "City's Top Project" },
          { href: "/", label: "Hot Deals" },
          { href: "/", label: "Pre-Launch Projects" },
        ]}
      />
      <div className="text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-6 md:text-base md:hidden md:leading-6 md:min-h-0 md:min-w-0">
        <div className="text-sm box-border caret-transparent gap-x-4 flex leading-5 outline-[3px] gap-y-4 md:text-base md:leading-6">
          <a
            href="https://www.instagram.com/plotpatta/?utm_source=ig_web_button_share_sheet"
            aria-label="Instagram"
            className="text-sm items-center bg-teal-800 box-border caret-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-10 p-2 rounded-full md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="text-white text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-53.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[18px] leading-5 outline-[3px] w-[18px] md:text-base md:leading-6"
              />
            </span>
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/profile.php?id=61575751906222"
            aria-label="Facebook"
            className="text-sm items-center bg-teal-800 box-border caret-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-10 p-2 rounded-full md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="text-white text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-54.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[18px] leading-5 outline-[3px] w-[18px] md:text-base md:leading-6"
              />
            </span>
          </a>
          <a
            href="https://www.youtube.com/@PlotPatta"
            aria-label="YouTube"
            className="text-sm items-center bg-teal-800 box-border caret-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-10 p-2 rounded-full md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="text-white text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-55.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[18px] leading-5 outline-[3px] w-[18px] md:text-base md:leading-6"
              />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/plotpatta/"
            aria-label="LinkedIn"
            className="text-sm items-center bg-teal-800 box-border caret-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-10 p-2 rounded-full md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="text-white text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-56.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[18px] leading-5 outline-[3px] w-[18px] md:text-base md:leading-6"
              />
            </span>
          </a>
          <a
            href="https://x.com/Plotpattaindia"
            aria-label="Twitter"
            className="text-sm items-center bg-teal-800 box-border caret-transparent flex h-10 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] w-10 p-2 rounded-full md:text-base md:leading-6 md:min-h-0 md:min-w-0"
          >
            <span className="text-white text-sm box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] md:text-base md:leading-6 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mqj9un6oir889A/assets/icon-57.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-[18px] leading-5 outline-[3px] w-[18px] md:text-base md:leading-6"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
