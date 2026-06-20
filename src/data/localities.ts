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
  {
    slug: "malviya-nagar",
    name: "Malviya Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Malviya Nagar is a well-developed residential area in Jaipur with excellent social infrastructure.",
    averagePriceLabel: "Rs. 60,000 - Rs. 1,00,000 per sq. yd.",
    projectCount: 8,
    nearbyHighlights: ["Shopping Malls", "Schools", "Hospitals", "Parks"],
  },
  {
    slug: "c-scheme",
    name: "C-Scheme",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "C-Scheme is a premium commercial and residential locality in central Jaipur.",
    averagePriceLabel: "Rs. 1,20,000 - Rs. 2,00,000 per sq. yd.",
    projectCount: 5,
    nearbyHighlights: ["Shopping Malls", "Restaurants", "Hospitals", "Offices"],
  },
  {
    slug: "bapu-nagar",
    name: "Bapu Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Bapu Nagar is a well-established residential area in Jaipur with good connectivity.",
    averagePriceLabel: "Rs. 50,000 - Rs. 85,000 per sq. yd.",
    projectCount: 11,
    nearbyHighlights: ["Schools", "Hospitals", "Markets", "Parks"],
  },
  {
    slug: "diggi-road",
    name: "Diggi Road",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Diggi Road is a growing residential and commercial area in Jaipur with good access to the city.",
    averagePriceLabel: "Rs. 35,000 - Rs. 60,000 per sq. yd.",
    projectCount: 14,
    nearbyHighlights: ["Schools", "Hospitals", "Markets", "Highway"],
  },
  {
    slug: "sirsi-road",
    name: "Sirsi Road",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Sirsi Road is an emerging residential corridor in Jaipur with increasing real estate demand.",
    averagePriceLabel: "Rs. 30,000 - Rs. 55,000 per sq. yd.",
    projectCount: 16,
    nearbyHighlights: ["Schools", "Hospitals", "Markets", "Ring Road"],
  },
];

export const getLocalityBySlug = (slug: string) =>
  localities.find((locality) => locality.slug === slug);
