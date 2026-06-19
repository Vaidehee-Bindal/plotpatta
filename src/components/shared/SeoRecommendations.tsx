export const SeoRecommendations = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-poppins text-3xl font-semibold text-slate-950">
          SEO Notes For Jaipur Plot Buyers
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Create dedicated locality pages for Ajmer Road, Tonk Road, Jagatpura, Mahapura, Sirsi Road, and Diggi Road.",
            "Add FAQ schema to pages answering JDA approval, registry, patta, road width, and possession questions.",
            "Keep project names, locality names, JDA/RERA identifiers, price, and plot size visible in SSR HTML.",
            "Use internal links from locality pages to projects, agents, and nearby plot categories.",
          ].map((item) => (
            <p
              key={item}
              className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
