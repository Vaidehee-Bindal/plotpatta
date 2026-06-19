import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/shared/JsonLd";
import { agents, getAgentBySlug } from "@/data/agents";
import { agentJsonLd } from "@/lib/jsonLd";
import { createMetadata } from "@/lib/seo";

type AgentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: AgentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return createMetadata({
      title: "Agent Not Found",
      description: "This PlotPatta agent could not be found.",
      path: `/agents/${slug}`,
    });
  }

  return createMetadata({
    title: `${agent.name} | Plot Agent in ${agent.city}`,
    description: `${agent.name} from ${agent.company} specializes in ${agent.specialization} across ${agent.localities.join(", ")}.`,
    path: `/agents/${agent.slug}`,
    image: agent.image.src,
  });
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  return (
    <article className="bg-white px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <JsonLd data={agentJsonLd(agent)} />
      <div className="mx-auto grid max-w-5xl gap-8 rounded-lg border border-slate-200 bg-slate-50 p-6 md:grid-cols-[220px_1fr] md:p-8">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
          <Image
            src={agent.image.src}
            alt={agent.image.alt}
            fill
            priority
            sizes="220px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Verified Plot Agent
          </p>
          <h1 className="mt-3 font-poppins text-4xl font-semibold text-slate-950">
            {agent.name}
          </h1>
          <p className="mt-2 text-lg text-slate-600">{agent.company}</p>
          <p className="mt-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            RERA: {agent.reraId}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm text-slate-500">Plots For Sale</dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-950">{agent.plotsForSale}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Specialization</dt>
              <dd className="mt-1 font-semibold text-slate-950">{agent.specialization}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Experience</dt>
              <dd className="mt-1 font-semibold text-slate-950">{agent.yearsActiveLabel}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-slate-950">Operates In</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {agent.localities.map((locality) => (
                <li key={locality} className="rounded-full bg-white px-4 py-2 text-sm text-slate-700">
                  {locality}, {agent.city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
