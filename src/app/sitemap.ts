import type { MetadataRoute } from "next";
import { agents } from "@/data/agents";
import { localities } from "@/data/localities";
import { marketingPageContent } from "@/data/marketing";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    ...Object.keys(marketingPageContent),
    ...projects.map((project) => `projects/${project.slug}`),
    ...localities.map((locality) => `localities/${locality.slug}`),
    ...agents.map((agent) => `agents/${agent.slug}`),
  ];

  return staticRoutes.map((route) => ({
    url: absoluteUrl(`/${route}`),
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.startsWith("projects") ? 0.9 : 0.7,
  }));
}
