import type { Agent, Locality, Project } from "@/types";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  telephone: siteConfig.phone,
  areaServed: {
    "@type": "City",
    name: "Jaipur",
  },
};

export const projectJsonLd = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: project.name,
  description: project.description,
  image: absoluteUrl(project.image.src),
  url: absoluteUrl(`/projects/${project.slug}`),
  brand: {
    "@type": "Organization",
    name: project.builder.name,
  },
  category: "Residential Plot",
  areaServed: {
    "@type": "City",
    name: project.city,
  },
  offers: {
    "@type": "Offer",
    price: project.priceMin,
    priceCurrency: project.currency,
    availability: "https://schema.org/InStock",
    url: absoluteUrl(`/projects/${project.slug}`),
  },
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Approved by",
      value: project.approvedBy,
    },
    {
      "@type": "PropertyValue",
      name: "Road width",
      value: project.roadWidth,
    },
    {
      "@type": "PropertyValue",
      name: "Plot size",
      value: project.areaLabel,
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: project.address,
    addressLocality: project.city,
    addressRegion: project.state,
    addressCountry: "IN",
  },
});

export const localityJsonLd = (locality: Locality) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  name: `${locality.name}, ${locality.city}`,
  description: locality.description,
  url: absoluteUrl(`/localities/${locality.slug}`),
  address: {
    "@type": "PostalAddress",
    addressLocality: locality.city,
    addressRegion: locality.state,
    addressCountry: "IN",
  },
});

export const agentJsonLd = (agent: Agent) => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: agent.name,
  url: absoluteUrl(`/agents/${agent.slug}`),
  image: absoluteUrl(agent.image.src),
  identifier: agent.reraId,
  worksFor: {
    "@type": "Organization",
    name: agent.company,
  },
  areaServed: agent.localities.map((locality) => ({
    "@type": "Place",
    name: `${locality}, ${agent.city}`,
  })),
});
