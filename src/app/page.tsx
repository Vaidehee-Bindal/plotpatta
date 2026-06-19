import type { Metadata } from "next";
import { MainContent } from "@/sections/MainContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Verified Plots and Land in Jaipur",
  description:
    "Explore Jaipur's top plot projects, hot deals, trusted agents, preferred localities, and verified land opportunities on PlotPatta.",
  path: "/",
});

export default function HomePage() {
  return <MainContent />;
}
