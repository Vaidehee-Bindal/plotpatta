import type { Locality } from "@/types";

export const localities: Locality[] = [
  {
    slug: "vaishali-nagar",
    name: "Vaishali Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Vaishali Nagar is a premium residential locality in Jaipur known for its well-planned infrastructure.",
    averagePriceLabel: "Rs. 70,000 - Rs. 1,10,000 per sq. yd.",
    projectCount: 32,
    nearbyHighlights: ["Shopping Malls", "Schools", "Hospitals", "Parks"],
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
    tag: "Prime Locality",
    tagColor: "green",
    iconColor: "yellow"
  },
  {
    slug: "malviya-nagar",
    name: "Malviya Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Malviya Nagar is a well-developed residential area in Jaipur with excellent social infrastructure.",
    averagePriceLabel: "Rs. 60,000 - Rs. 1,00,000 per sq. yd.",
    projectCount: 28,
    nearbyHighlights: ["Shopping Malls", "Schools", "Hospitals", "Parks"],
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    tag: "High Demand",
    tagColor: "blue",
    iconColor: "blue"
  },
  {
    slug: "tonk-road",
    name: "Tonk Road",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Tonk Road offers strong connectivity to central Jaipur, the airport belt, and emerging plotted developments.",
    averagePriceLabel: "Rs. 55,000 - Rs. 90,000 per sq. yd.",
    projectCount: 24,
    nearbyHighlights: ["Airport", "Sitapura", "Markets", "Highway"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
    tag: "Most Popular",
    tagColor: "pink",
    iconColor: "pink"
  },
  {
    slug: "mansarovar",
    name: "Mansarovar",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Mansarovar is one of the largest residential areas in Jaipur with great amenities and connectivity.",
    averagePriceLabel: "Rs. 40,000 - Rs. 70,000 per sq. yd.",
    projectCount: 26,
    nearbyHighlights: ["Metro Station", "Schools", "Hospitals", "Markets"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop",
    tag: "Well Connected",
    tagColor: "green",
    iconColor: "green"
  },
  {
    slug: "jagatpura",
    name: "Jagatpura",
    city: "Jaipur",
    state: "Rajasthan",
    description:
      "Jagatpura is a fast-growing residential area in Jaipur with excellent connectivity and upcoming infrastructure.",
    averagePriceLabel: "Rs. 35,000 - Rs. 60,000 per sq. yd.",
    projectCount: 22,
    nearbyHighlights: ["Schools", "Hospitals", "Markets", "Ring Road"],
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    tag: "Rapidly Growing",
    tagColor: "purple",
    iconColor: "purple"
  },
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
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    tag: "Great Investment",
    tagColor: "orange",
    iconColor: "orange"
  }
];

export const getLocalityBySlug = (slug: string) =>
  localities.find((locality) => locality.slug === slug);
