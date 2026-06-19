import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingPage } from "@/marketing/MarketingPage";
import {
  marketingPageContent,
  type MarketingPageId,
} from "@/marketing/marketingPageData";
import { createMetadata } from "@/lib/seo";

const marketingPages = Object.keys(marketingPageContent) as MarketingPageId[];

type MarketingRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

const isMarketingPage = (slug: string): slug is MarketingPageId => {
  return marketingPages.includes(slug as MarketingPageId);
};

export function generateStaticParams() {
  return marketingPages.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: MarketingRouteProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isMarketingPage(slug)) {
    return {};
  }

  const content = marketingPageContent[slug];

  return createMetadata({
    title: content.title,
    description: content.description,
    path: `/${slug}`,
  });
}

export default async function MarketingRoute({ params }: MarketingRouteProps) {
  const { slug } = await params;

  if (!isMarketingPage(slug)) {
    notFound();
  }

  return <MarketingPage page={slug} />;
}
