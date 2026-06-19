import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    slug: "himanshu-banshiwal",
    name: "Himanshu Banshiwal",
    company: "Karam Bhumi Developers & Builders",
    reraId: "RAJ/A/2025/297",
    city: "Jaipur",
    localities: ["Diggi Road", "Tonk Road", "Ajmer Road"],
    specialization: "Plots & Land Investments",
    plotsForSale: 7,
    yearsActiveLabel: "Working since 2022",
    image: {
      src: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_WhatsApp_Image_2026-04-13_at_10.10.55_AM_fcquj6_osaujv.webp",
      alt: "Himanshu Banshiwal PlotPatta agent",
      width: 512,
      height: 512,
    },
  },
  {
    slug: "gajendra-bagda",
    name: "Gajendra Bagda",
    company: "Garvit Properties",
    reraId: "RAJ/A/2023/7266",
    city: "Jaipur",
    localities: ["Ajmer Road", "Mahapura", "Sirsi Road"],
    specialization: "Plots & Land Investments",
    plotsForSale: 22,
    yearsActiveLabel: "Working since 2020",
    image: {
      src: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_20260414_143518_-_Devendra_Tanwar_ygdt74_fhvt3p.webp",
      alt: "Gajendra Bagda PlotPatta agent",
      width: 512,
      height: 512,
    },
  },
];

export const getAgentBySlug = (slug: string) =>
  agents.find((agent) => agent.slug === slug);
