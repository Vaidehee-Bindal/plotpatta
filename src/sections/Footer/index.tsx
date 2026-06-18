import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border-gray-200 px-6 py-12 border-t border-solid md:px-16">
      <div className="[align-items:normal] box-border caret-transparent gap-x-12 flex flex-col justify-normal outline-[3px] gap-y-12 md:items-start md:flex-row md:justify-between">
        <NewsletterSignup />
        <FooterLinks />
      </div>
      <hr className="box-border caret-transparent h-0 outline-[3px] border-gray-300 my-6 border-b-0 border-x-0 border-solid" />
      <FooterBottom />
    </footer>
  );
};
