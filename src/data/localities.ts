import type { Locality } from "@/types";

export const localities: Locality[] = [
  {
    slug: "ajmer-road",
    name: "Ajmer Road",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Ajmer Road is one of Jaipur's high-demand plotted investment corridors with strong highway access, builder activity, and residential growth.",
    averagePriceLabel: "Rs. 45,000 - Rs. 75,000 per sq. yd.",
    projectCount: 18,
    nearbyHighlights: ["Mahindra SEZ", "Ring Road", "Schools", "Hospitals"],
  },
  {
    slug: "tonk-road",
    name: "Tonk Road",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Tonk Road offers strong connectivity to central Jaipur, the airport belt, and emerging plotted developments.",
    averagePriceLabel: "Rs. 55,000 - Rs. 90,000 per sq. yd.",
    projectCount: 12,
    nearbyHighlights: ["Airport", "Sitapura", "Markets", "Highway"],
  },
];

export const getLocalityBySlug = (slug: string) =>
  localities.find((locality) => locality.slug === slug);
