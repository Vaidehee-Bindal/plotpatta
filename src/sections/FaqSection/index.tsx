import { FaqItem } from "@/sections/FaqSection/components/FaqItem";

export const FaqSection = () => {
  return (
    <section className="box-border caret-transparent outline-[3px] mt-6 mb-14 px-2 rounded-2xl">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="box-border caret-transparent outline-[3px] text-left px-2">
          <h2 className="text-gray-900 text-xl font-extrabold box-border caret-transparent inline-block leading-7 outline-[3px] font-poppins md:text-2xl md:leading-8">
            Frequently Asked Questions
            <span className="text-xl bg-black box-border caret-transparent block h-1 leading-7 outline-[3px] w-12 mt-2 rounded-full md:text-2xl md:leading-8"></span>
          </h2>
          <p className="text-gray-600 box-border caret-transparent max-w-lg outline-[3px] mt-3">
            Everything you need to know about buying, selling, and investing in
            plots on PlotPatta.
          </p>
        </div>
        <div className="box-border caret-transparent outline-[3px] mt-10 px-2">
          <FaqItem
            question="How can I find plots in my city on PlotPatta?"
            answer="You can easily explore residential, commercial, and industrial plots by selecting your city like Jaipur, Kota, or Ajmer. Use filters to refine by location, budget, and type."
            rootClassName=""
          />
          <FaqItem
            question="Are the plots listed on PlotPatta verified?"
            answer="Yes, we ensure that listings go through a verification process. However, we still recommend users verify documents and legal status before finalizing any purchase."
            rootClassName="mt-4"
          />
          <FaqItem
            question="Can brokers and builders list properties on PlotPatta?"
            answer="Absolutely. Brokers and builders can register on PlotPatta and list their properties to connect with genuine buyers and investors."
            rootClassName="mt-4"
          />
          <FaqItem
            question="Is PlotPatta free for buyers?"
            answer="Yes, buyers can explore listings and view details for free. Additional premium features may be introduced in future phases."
            rootClassName="mt-4"
          />
          <FaqItem
            question="How do I contact the seller or agent?"
            answer="Each listing includes contact details of the broker, builder, or owner. You can directly call or send an enquiry through the platform."
            rootClassName="mt-4"
          />
          <FaqItem
            question="Why should I invest in plots instead of flats?"
            answer="Plots generally offer better long-term appreciation, flexibility in construction, and lower maintenance costs compared to flats."
            rootClassName="mt-4"
          />
        </div>
      </div>
    </section>
  );
};
