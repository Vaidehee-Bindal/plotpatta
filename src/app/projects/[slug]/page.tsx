import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { getProjectBySlug, projects } from "@/data/projects";
import { projectJsonLd } from "@/lib/jsonLd";
import { createMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Project Not Found",
      description: "This PlotPatta project could not be found.",
      path: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: `${project.name} ${project.locality}, ${project.city} | ${project.priceLabel}`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.image.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <JsonLd data={projectJsonLd(project)} />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:pt-2">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            {project.approvedBy} Approved Plot
          </p>
          <h1 className="mt-4 font-poppins text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            {project.locality}, {project.city}
          </p>
          <p className="mt-6 text-3xl font-semibold text-emerald-800">
            {project.priceLabel}
          </p>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {project.description}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Plot Size", project.areaLabel],
              ["Road Width", project.roadWidth],
              ["Builder", project.builder.name],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-slate-950">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-950">Amenities</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.amenities.map((amenity) => (
                <li key={amenity} className="rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-800">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
