import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { marketingPageContent, type MarketingPageId } from "@/marketing/marketingPageData";

type MarketingPageProps = {
  page: MarketingPageId;
};

const aboutStats = [
  {
    title: "Customer First",
    description: "Helping buyers find the right plot with trust and transparency",
  },
  {
    title: "Focused",
    description: "Dedicated only to plots and land",
  },
  {
    title: "Transparent",
    description: "Verified, legal, and title-clear plots",
  },
  {
    title: "Wide Range of Plots",
    description: "Find residential, commercial, and industrial plots in one place",
  },
];

const problemCards = [
  "Scattered & inconsistent listings",
  "Lack of pricing & ownership transparency",
  "Difficulty verifying authenticity",
  "Over dependence on brokers",
  "Limited hyperlocal data",
  "Slow & confusing buying experience",
];

const buyerItems = [
  "Comprehensive plot listings",
  "Advanced filters",
  "Detailed listing pages",
  "Direct seller access",
  "Hyperlocal search",
];

const sellerItems = [
  "Easy listing creation",
  "Reach serious buyers",
  "Manage listings",
  "Verified buyer trust",
  "Grow visibility",
];

const founderItems = [
  "18+ Years Industry Experience",
  "MBA Graduate From Mumbai",
  "Worked Across Major Indian Markets",
  "Focused On Transparency & Trust",
];

const AboutUsPage = () => {
  return (
    <div className="animate-page-in">
      <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,_#f9fcf8_0%,_#f3fff0_36%,_#fff7d8_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-[radial-gradient(circle_at_top_left,_rgba(22,163,74,0.14),_transparent_46%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.18),_transparent_40%)]" />

        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start xl:gap-14">
          <div className="pt-4 lg:pt-10">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-[0.02em] text-emerald-700 shadow-sm">
              India’s Trusted Platform For Plot Discovery
            </span>
            <h1 className="mt-8 max-w-3xl font-poppins text-5xl font-semibold leading-[0.96] tracking-tight text-slate-950 sm:text-6xl lg:text-[78px]">
              <span className="block">About</span>
              <span className="block text-emerald-700">PlotPatta.com</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-slate-600 sm:text-lg lg:pr-8">
              PlotPatta.com is a dedicated online platform built exclusively for plot listings, plot discovery, and direct buyer-seller connections across India.
            </p>
          </div>

          <div className="rounded-[34px] border border-emerald-100 bg-white/92 p-5 shadow-[0_26px_70px_-34px_rgba(15,23,42,0.24)] backdrop-blur-sm sm:p-6 lg:mt-2 lg:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutStats.map((item) => (
                <article
                  key={item.title}
                  className="min-h-[128px] rounded-[22px] border border-slate-100 bg-white px-5 py-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.22)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <h2 className="text-[31px] font-semibold leading-[1.05] tracking-tight text-emerald-700 lg:text-[30px]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600 lg:text-[15px]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Who We Are</div>
            <h2 className="mt-4 max-w-xl font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Built Specifically For India’s Plot & Land Market
            </h2>
          </div>
          <div className="grid gap-8 text-[17px] leading-8 text-slate-600 md:grid-cols-2 lg:pt-2">
            <p>
              PlotPatta.com is not a generic property portal. We are specialists in plots — designed from the ground up to solve the unique challenges buyers and sellers face in India’s rapidly evolving real estate market.
            </p>
            <p>
              Founded by a seasoned real estate professional with nearly two decades of industry experience, PlotPatta.com was built with one clear conviction: finding the right plot should be simple, transparent, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">The Problem We Solve</div>
          <h2 className="mx-auto mt-4 max-w-4xl font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            India’s Plot Market Is Still Deeply Unorganized
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Buying or selling plot often involves scattered listings, lack of transparency, limited verification, and dependence on intermediaries.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {problemCards.map((item, index) => (
              <article key={item} className="flex items-center gap-4 rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-left shadow-[0_18px_36px_-28px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-amber-100 text-xl font-semibold text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[17px] font-semibold leading-7 text-slate-900">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px] text-center">
          <h2 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">Built For Buyers & Sellers</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">Everything you need to discover, list, and manage plots across India.</p>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-[0_22px_50px_-36px_rgba(15,23,42,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-semibold text-slate-950 shadow-sm">B</div>
              <div className="mt-4">
                <h3 className="text-3xl font-semibold text-slate-950">For Buyers</h3>
                <p className="mt-1 text-slate-500">Discover verified plots faster</p>
              </div>
              <div className="mt-8 space-y-4">
                {buyerItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-amber-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-[0_22px_50px_-36px_rgba(15,23,42,0.35)]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-lg font-semibold text-slate-950 shadow-sm">S</div>
              <div className="mt-4">
                <h3 className="text-3xl font-semibold text-slate-950">For Sellers</h3>
                <p className="mt-1 text-slate-500">Reach serious buyers across India</p>
              </div>
              <div className="mt-8 space-y-4">
                {sellerItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-slate-700">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-amber-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-white/10 p-7 text-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.8)] backdrop-blur-sm">
            <div className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">Our Mission</div>
            <h3 className="mt-6 max-w-xl font-poppins text-3xl font-semibold leading-tight text-white sm:text-4xl">Making Plot Buying Transparent & Hassle Free</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/90">
              Our mission is to create an easy and transparent platform for every middle-class plot buyer while making the selling process smooth and accessible for sellers.
            </p>
          </article>

          <article className="rounded-[28px] bg-amber-400 p-7 text-slate-950 shadow-[0_30px_70px_-45px_rgba(250,204,21,0.85)]">
            <div className="inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-slate-950">Our Vision</div>
            <h3 className="mt-6 max-w-xl font-poppins text-3xl font-semibold leading-tight sm:text-4xl">Building India’s Most Trusted Plot Platform</h3>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-900/85">
              To become India’s most trusted and comprehensive platform for plot and plot transactions — making organized, transparent, and accessible real estate a reality for every Indian.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-2xl pt-4">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-600">Meet The Founder</div>
            <h2 className="mt-4 font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">Anil Dadhich</h2>
            <div className="mt-2 text-xl font-medium text-amber-700">Founder & CEO, PlotPatta.com</div>
            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              With over 18 years of hands-on experience in India’s real estate industry across Mumbai, Kolkata, NCR, and Jaipur, Anil Dadhich built PlotPatta.com to bring transparency, structure, and trust into India’s plot buying & selling ecosystem.
            </p>
            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              His vision was never to build just another property portal — but a platform that genuinely solves the challenges faced by buyers and sellers in the plot market.
            </p>
          </div>

          <div className="rounded-[32px] border border-amber-100 bg-amber-50/70 p-5 shadow-[0_28px_70px_-44px_rgba(15,23,42,0.35)] sm:p-6">
            <div className="space-y-4">
              {founderItems.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-[20px] border border-white/70 bg-white px-5 py-4 shadow-[0_18px_32px_-26px_rgba(15,23,42,0.3)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                    <BadgeCheck className="h-5 w-5" />
                  </div>
                  <span className="text-[17px] font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-400 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
          <h2 className="font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
            Let’s Build A Better Real Estate Future Together
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-900/80">
            Whether you are looking for your dream plot, ready to list your Plot, or want to partner with us — we would love to hear from you.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-8 py-4 text-base font-semibold text-white shadow-[0_16px_32px_-18px_rgba(15,23,42,0.9)] transition-transform duration-300 hover:-translate-y-0.5">
              Browse Plots
            </Link>
            <Link href="/contact-us" className="inline-flex items-center justify-center rounded-2xl border border-slate-900 px-8 py-4 text-base font-semibold text-slate-950 transition-colors duration-300 hover:bg-slate-950 hover:text-white">
              List Your Plot For Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export const MarketingPage = ({ page }: MarketingPageProps) => {
  if (page === "aboutus") {
    return <AboutUsPage />;
  }

  const content = marketingPageContent[page];

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(20,83,45,0.25),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(250,204,21,0.24),_transparent_34%),linear-gradient(180deg,_#f8fbf7_0%,_#eef6f0_54%,_#f8faf8_100%)]" />
      <div className="pointer-events-none absolute left-0 top-16 -z-10 h-44 w-44 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 animate-page-in">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              {content.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="max-w-3xl font-poppins text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                {content.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={content.primaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-950 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,118,110,0.75)] transition-transform duration-300 hover:-translate-y-0.5">
                {content.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={content.secondaryCta.href} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-colors duration-300 hover:border-emerald-300 hover:bg-emerald-50">
                {content.secondaryCta.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 rounded-[28px] border border-white/70 bg-white/85 p-4 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.55)] backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {content.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl font-semibold text-emerald-900">{metric.value}</div>
                <div className="mt-1 text-sm text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <article key={highlight.title} className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">{highlight.eyebrow}</div>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{highlight.description}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-[32px] border border-teal-900/10 bg-teal-950 px-6 py-7 text-white shadow-[0_28px_70px_-36px_rgba(15,23,42,0.7)]">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              <BadgeCheck className="h-4 w-4" />
              {content.sideHeading}
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-teal-50/90">
              {content.sideItems.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/6 px-4 py-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-3xl bg-white/10 p-4 text-sm leading-6 text-teal-50/90">
              <div className="text-base font-semibold text-white">{content.footerHeading}</div>
              <p className="mt-2">{content.footerText}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
