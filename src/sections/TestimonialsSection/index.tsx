import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsSection = () => {
  return (
    <section className="bg-[linear-gradient(rgb(249,250,251),rgb(255,255,255))] box-border caret-transparent outline-[3px] mt-10 mb-14 pt-6 pb-10 px-2 rounded-2xl">
      <div className="box-border caret-transparent max-w-none outline-[3px] plotpatta-wide mx-auto px-3">
        <div className="box-border caret-transparent outline-[3px] px-2">
          <h2 className="text-gray-900 text-xl font-extrabold box-border caret-transparent inline-block leading-7 outline-[3px] font-poppins md:text-2xl md:leading-8">
            Trusted by Buyers, Brokers &amp; Builders
            <span className="text-xl bg-indigo-600 box-border caret-transparent block h-1 leading-7 outline-[3px] w-12 mt-2 rounded-full md:text-2xl md:leading-8"></span>
          </h2>
          <p className="text-gray-600 box-border caret-transparent leading-[26px] max-w-md outline-[3px] mt-3">
            Real experiences from people using PlotPatta in
            <span className="text-gray-800 font-semibold box-border caret-transparent outline-[3px]">
              Jaipur
            </span>
            .
          </p>
        </div>
        <div className="box-border caret-transparent gap-x-7 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-7 mt-10 px-2 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <TestimonialCard
            accentClassName="bg-blue-500"
            initials="RS"
            name="Rahul Sharma"
            location="Jaipur"
            role="Buyer"
            roleClassName="text-blue-600 bg-blue-50 border-blue-200"
            rating="5"
            ratingText="(5.0 rating)"
            testimonial="Found a perfect residential plot in Jagatpura. Smooth experience and verified listings."
            verificationText="Verified User"
          />
          <TestimonialCard
            accentClassName="bg-green-500"
            initials="SM"
            name="Suresh Meena"
            location="Jaipur"
            role="Broker"
            roleClassName="text-green-600 bg-green-50 border border-green-200"
            rating="5"
            ratingText="(5.0 rating)"
            testimonial="PlotPatta helped me connect with serious buyers quickly. Very useful platform."
            verificationText="Verified User"
          />
          <TestimonialCard
            accentClassName="bg-orange-500"
            initials="VA"
            name="Vikas Agarwal"
            location="Jaipur"
            role="Builder"
            roleClassName="text-orange-600 bg-orange-50 border border-orange-200"
            rating="4"
            ratingText="(4.0 rating)"
            testimonial="PlotPatta helped us list our project and connect with genuine buyers in Jaipur. The inquiries were high-quality and the process was smooth and transparent."
            verificationText="Verified User"
          />
        </div>
      </div>
    </section>
  );
};
