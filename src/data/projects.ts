import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "dpm-royal-enclave",
    name: "DPM Royal Enclave",
    description:
      "JDA-approved plotted development on Tonk Road, Jaipur with gated security, park, power backup, and strong connectivity.",
    locality: "Tonk Road",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Tonk Road, Jaipur, Rajasthan",
    priceLabel: "Rs. 45.47 Lac onwards",
    priceMin: 4547000,
    currency: "INR",
    areaLabel: "70 sq. yd. onwards",
    areaSqYd: 70,
    roadWidth: "40 ft.",
    approvedBy: "JDA",
    amenities: ["Gym", "Park", "Power Backup", "Gated Security", "Waste Management"],
    nearby: ["Market", "Temple", "Highway"],
    image: {
      src: "https://c.animaapp.com/mqj9un6oir889A/assets/plot-1779342823024-7559-WhatsApp_Image_2026-05-19_at_7.56.37_PM.webp",
      alt: "DPM Royal Enclave plotted development in Jaipur",
      width: 1200,
      height: 800,
    },
    builder: {
      name: "Khandelwal Infraheights PVT. LTD.",
      type: "Builder",
      logo: "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
    },
  },
  {
    slug: "shree-govind",
    name: "Shree Govind Residency",
    description:
      "Verified residential plots in Mahapura, Jaipur with JDA approval, clubhouse, sports area, park, parking, and CCTV surveillance.",
    locality: "Mahapura",
    city: "Jaipur",
    state: "Rajasthan",
    address: "Mahapura, Jaipur, Rajasthan",
    priceLabel: "Rs. 29.21 Lac onwards",
    priceMin: 2921000,
    currency: "INR",
    areaLabel: "65 sq. yd. onwards",
    areaSqYd: 65,
    roadWidth: "40 ft.",
    approvedBy: "JDA",
    amenities: ["Sports Area", "Park", "Clubhouse", "Parking", "CCTV Surveillance"],
    nearby: ["School", "Hospital", "Bank/ATM"],
    image: {
      src: "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-06-01_at_5.26.32_PM.webp",
      alt: "Shree Govind Residency plots in Mahapura Jaipur",
      width: 1200,
      height: 800,
    },
    builder: {
      name: "Khandelwal Infraheights PVT. LTD.",
      type: "Builder",
      logo: "https://c.animaapp.com/mqj9un6oir889A/assets/WhatsApp_Image_2026-05-21_at_3.22.01_PM_i3ano9_1_1_hnkdke.webp",
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
