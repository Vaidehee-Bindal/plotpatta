import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "agent-1",
    user_id: "user-1",
    plan_type: "Paid",
    slug: "himanshu-banshiwal",
    name: "Himanshu Banshiwal",
    company: "Karam Bhumi Developers & Builders",
    reraId: "RAJ/A/2025/297",
    city: "Jaipur",
    localities: ["Jagatpura", "Vaishali Nagar", "Mansarovar", "Diggi Road", "Tonk Road", "Ajmer Road"],
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
    id: "agent-2",
    user_id: "user-2",
    plan_type: "Paid",
    slug: "gajendra-bagda",
    name: "Gajendra Bagda",
    company: "Garvit Properties",
    reraId: "RAJ/A/2023/7266",
    city: "Jaipur",
    localities: ["Ajmer Road", "Mahapura", "Sirsi Road", "Jagatpura"],
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
  {
    id: "agent-3",
    user_id: "user-3",
    plan_type: "Unpaid",
    slug: "rajesh-sharma",
    name: "Rajesh Sharma",
    company: "Sharma Properties",
    reraId: "RAJ/A/2024/1234",
    city: "Jaipur",
    localities: ["Vaishali Nagar"],
    specialization: "Plots & Land Investments",
    plotsForSale: 5,
    yearsActiveLabel: "Working since 2023",
    image: {
      src: "https://c.animaapp.com/mqj9un6oir889A/assets/compressed_WhatsApp_Image_2026-04-13_at_10.10.55_AM_fcquj6_osaujv.webp",
      alt: "Rajesh Sharma PlotPatta agent",
      width: 512,
      height: 512,
    },
  },
];

export const getAgentBySlug = (slug: string) =>
  agents.find((agent) => agent.slug === slug);

export const getAgentByUserId = (userId: string) =>
  agents.find((agent) => agent.user_id === userId);
