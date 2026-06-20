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
  {
    slug: "jagatpura",
    name: "Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Jagatpura is a fast-growing residential area in Jaipur with excellent connectivity and upcoming infrastructure.",
    averagePriceLabel: "Rs. 35,000 - Rs. 60,000 per sq. yd.",
    projectCount: 15,
    nearbyHighlights: ["Schools", "Hospitals", "Markets", "Ring Road"],
  },
  {
    slug: "vaishali-nagar",
    name: "Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Vaishali Nagar is a premium residential locality in Jaipur known for its well-planned infrastructure.",
    averagePriceLabel: "Rs. 70,000 - Rs. 1,10,000 per sq. yd.",
    projectCount: 10,
    nearbyHighlights: ["Shopping Malls", "Schools", "Hospitals", "Parks"],
  },
  {
    slug: "mansarovar",
    name: "Mansarovar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Mansarovar is one of the largest residential areas in Jaipur with great amenities and connectivity.",
    averagePriceLabel: "Rs. 40,000 - Rs. 70,000 per sq. yd.",
    projectCount: 22,
    nearbyHighlights: ["Metro Station", "Schools", "Hospitals", "Markets"],
  },
];

export const getLocalityBySlug = (slug: string) =>
  localities.find((locality) => locality.slug === slug);
