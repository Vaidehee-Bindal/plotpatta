import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { getLocalityBySlug, localities } from "@/data/localities";
import { projects } from "@/data/projects";
import { localityJsonLd } from "@/lib/jsonLd";
import { createMetadata } from "@/lib/seo";

type LocalityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return localities.map((locality) => ({ slug: locality.slug }));
}

export async function generateMetadata({
  params,
}: LocalityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locality = getLocalityBySlug(slug);

  if (!locality) {
    return createMetadata({
      title: "Locality Not Found",
      description: "This PlotPatta locality could not be found.",
      path: `/localities/${slug}`,
    });
  }

  return createMetadata({
    title: `Plots in ${locality.name}, ${locality.city}`,
    description: locality.description,
    path: `/localities/${locality.slug}`,
  });
}

export default async function LocalityPage({ params }: LocalityPageProps) {
  const { slug } = await params;
  const locality = getLocalityBySlug(slug);

  if (!locality) {
    notFound();
  }

  const matchingProjects = projects.filter(
    (project) => project.locality.toLowerCase() === locality.name.toLowerCase(),
  );

  return (
    <article className="bg-white px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <JsonLd data={localityJsonLd(locality)} />
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Jaipur Locality Guide
        </p>
        <h1 className="mt-4 font-poppins text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
          Plots in {locality.name}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {locality.description}
        </p>
        <dl className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt className="text-sm text-slate-500">Average Price</dt>
            <dd className="mt-2 font-semibold text-slate-950">{locality.averagePriceLabel}</dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt className="text-sm text-slate-500">Active Projects</dt>
            <dd className="mt-2 font-semibold text-slate-950">{locality.projectCount}+</dd>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <dt className="text-sm text-slate-500">City</dt>
            <dd className="mt-2 font-semibold text-slate-950">{locality.city}</dd>
          </div>
        </dl>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-slate-950">Nearby Highlights</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {locality.nearbyHighlights.map((highlight) => (
              <li key={highlight} className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-800">
                {highlight}
              </li>
            ))}
          </ul>
        </section>
        {matchingProjects.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-950">Projects in {locality.name}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {matchingProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="rounded-lg border border-slate-200 p-5 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <h3 className="font-semibold text-slate-950">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.priceLabel}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </article>
  );
}
