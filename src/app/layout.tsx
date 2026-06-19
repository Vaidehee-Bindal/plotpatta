import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { FloatingSupport } from "@/components/FloatingSupport";
import { PageShell } from "@/components/layout/PageShell";
import { JsonLd } from "@/components/shared/JsonLd";
import { siteConfig } from "@/data/site";
import { organizationJsonLd } from "@/lib/jsonLd";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "plots in Jaipur",
    "JDA approved plots",
    "Jaipur real estate",
    "land for sale in Jaipur",
    "residential plots Jaipur",
    "PlotPatta",
  ],
  authors: [{ name: "PlotPatta" }],
  creator: "PlotPatta",
  publisher: "PlotPatta",
  title: {
    default: "PlotPatta | Verified Plots and Land in Jaipur",
    template: "%s | PlotPatta",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "PlotPatta | Verified Plots and Land",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Verified plots in Jaipur on PlotPatta",
      },
    ],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlotPatta | Verified Plots and Land in Jaipur",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="text-black text-base not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-dm_sans">
          <div className="box-border caret-transparent outline-[3px]">
            <div className="fixed box-border caret-transparent outline-[3px] pointer-events-none z-[9999] inset-4" />
            <JsonLd data={organizationJsonLd} />
            <FloatingSupport />
            <PageShell>{children}</PageShell>
          </div>
          <div className="box-border caret-transparent outline-[3px]" />
        </div>
      </body>
    </html>
  );
}
