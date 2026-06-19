export type MarketingPageId =
  | "aboutus"
  | "services"
  | "packages"
  | "contact-us"
  | "faq"
  | "careers"
  | "plans"
  | "post-hotdeal"
  | "post-bigchunk-property";

export type MarketingPageContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  metrics: {
    value: string;
    label: string;
  }[];
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
  }[];
  sideHeading: string;
  sideItems: string[];
  footerHeading: string;
  footerText: string;
};

export const marketingPageContent: Record<MarketingPageId, MarketingPageContent> = {
  aboutus: {
    eyebrow: "About PlotPatta",
    title: "Built for buyers, brokers, and builders who want plots to feel organized.",
    description:
      "PlotPatta turns a fragmented plot market into a clearer, verified, and easier-to-navigate experience across Jaipur and beyond.",
    primaryCta: { label: "Explore Projects", href: "/" },
    secondaryCta: { label: "Talk to the Team", href: "/contact-us" },
    metrics: [
      { value: "100%", label: "plot-first focus" },
      { value: "24/7", label: "lead capture funnel" },
      { value: "Verified", label: "listing mindset" },
    ],
    highlights: [
      {
        eyebrow: "Focus",
        title: "Dedicated exclusively to plots",
        description:
          "The homepage and every support page stay centered on plot discovery, project visibility, and serious inquiry generation.",
      },
      {
        eyebrow: "Meaning",
        title: "Plot + Patta is the trust signal",
        description:
          "The brand language should feel legal, local, and reliable, not generic real-estate marketplace copy.",
      },
      {
        eyebrow: "Outcome",
        title: "Cleaner discovery paths",
        description:
          "Route pages, section jumps, and CTAs are all designed to reduce friction on mobile while still feeling premium on desktop.",
      },
    ],
    sideHeading: "What this page should communicate",
    sideItems: [
      "Verified listings and strong trust cues",
      "A premium but approachable Jaipur-first identity",
      "Simple paths to contact, post, and explore",
    ],
    footerHeading: "Why it matters",
    footerText:
      "The live site relies on visual hierarchy and clear action paths. This page keeps that tone while making the route structure explicit.",
  },
  services: {
    eyebrow: "Services",
    title: "Everything needed to buy, sell, and promote land parcels in one place.",
    description:
      "The service pages should quickly explain buyer discovery, seller visibility, builder campaigns, and broker lead flow.",
    primaryCta: { label: "View Packages", href: "/packages" },
    secondaryCta: { label: "Contact Sales", href: "/contact-us" },
    metrics: [
      { value: "Buy", label: "verified projects" },
      { value: "Sell", label: "hot deal leads" },
      { value: "Scale", label: "broker visibility" },
    ],
    highlights: [
      {
        eyebrow: "Buyers",
        title: "Discovery that feels curated",
        description:
          "Search by locality, price, and use case without making the interface feel overloaded on smaller screens.",
      },
      {
        eyebrow: "Sellers",
        title: "More visibility for strong inventory",
        description:
          "Hot deals and featured placements should feel like a clear upgrade path rather than a hidden upsell.",
      },
      {
        eyebrow: "Partners",
        title: "Builders and brokers get dedicated entry points",
        description:
          "The route system should make it obvious where each audience should go next.",
      },
    ],
    sideHeading: "Service layers",
    sideItems: [
      "Buyer discovery and shortlist journeys",
      "Seller and builder promotion flows",
      "Broker contact and lead capture paths",
    ],
    footerHeading: "Responsive by default",
    footerText:
      "Mobile layouts should stack into clear, touch-friendly cards with no loss of visual structure.",
  },
  packages: {
    eyebrow: "Packages",
    title: "Clear listing tiers that explain value before the user has to ask.",
    description:
      "Pricing pages should feel direct and easy to compare, with a strong visual hierarchy that survives small screens.",
    primaryCta: { label: "Post a Hot Deal", href: "/post-hotdeal" },
    secondaryCta: { label: "Post a Big Chunk", href: "/post-bigchunk-property" },
    metrics: [
      { value: "3", label: "core tiers" },
      { value: "Boost", label: "priority listings" },
      { value: "Fast", label: "inquiry response" },
    ],
    highlights: [
      {
        eyebrow: "Starter",
        title: "Simple visibility for regular listings",
        description:
          "Baseline placement should be easy to understand and not visually cluttered.",
      },
      {
        eyebrow: "Featured",
        title: "Premium placements with stronger reach",
        description:
          "Use stronger emphasis, larger cards, and a denser lead path to echo the live site’s high-intent sections.",
      },
      {
        eyebrow: "Enterprise",
        title: "Custom promotion for builders and inventory owners",
        description:
          "Bigger projects need clearer contact paths and larger content blocks for trust.",
      },
    ],
    sideHeading: "How users should read this page",
    sideItems: [
      "Compare tiers in seconds",
      "See how visibility changes",
      "Jump straight to the right posting form",
    ],
    footerHeading: "Pricing should feel actionable",
    footerText:
      "Every tier needs a direct follow-up CTA so the page drives a decision, not just an impression.",
  },
  "contact-us": {
    eyebrow: "Contact",
    title: "Give visitors a fast way to reach the right team.",
    description:
      "Contact pages should surface phone, WhatsApp, and lead forms with strong mobile spacing and readable contrast.",
    primaryCta: { label: "Call Now", href: "tel:+918829901400" },
    secondaryCta: { label: "Open WhatsApp", href: "https://wa.me/918829901400" },
    metrics: [
      { value: "Fast", label: "support response" },
      { value: "Direct", label: "contact routing" },
      { value: "Helpful", label: "follow-up flow" },
    ],
    highlights: [
      {
        eyebrow: "Phone",
        title: "Immediate voice support",
        description:
          "Add one tap access on mobile and keep the CTA fixed and obvious.",
      },
      {
        eyebrow: "WhatsApp",
        title: "Low-friction inquiry handoff",
        description:
          "The live site uses WhatsApp heavily, so that path should stay prominent.",
      },
      {
        eyebrow: "Form",
        title: "Short, high-intent lead capture",
        description:
          "Forms should stay compact and feel trustworthy rather than long and generic.",
      },
    ],
    sideHeading: "Preferred contact paths",
    sideItems: [
      "Phone when urgency matters",
      "WhatsApp for quick plot questions",
      "Forms for structured lead capture",
    ],
    footerHeading: "Support should be obvious",
    footerText:
      "The page should answer the user's next step immediately instead of forcing more scrolling.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "The most common buying and selling questions, answered clearly.",
    description:
      "FAQ pages should be easy to scan on mobile, with enough spacing for touch interactions and reading comfort.",
    primaryCta: { label: "Ask a Question", href: "/contact-us" },
    secondaryCta: { label: "Explore Projects", href: "/" },
    metrics: [
      { value: "Quick", label: "answers" },
      { value: "Clear", label: "buying guidance" },
      { value: "Trusted", label: "process cues" },
    ],
    highlights: [
      {
        eyebrow: "Verification",
        title: "Listings should explain their trust signals",
        description:
          "Users want to know how projects are validated and what they should confirm themselves.",
      },
      {
        eyebrow: "Selling",
        title: "Explain how posting and promotion works",
        description:
          "Make it obvious how a seller goes from listing to visibility.",
      },
      {
        eyebrow: "Buying",
        title: "Reduce the fear of the unknown",
        description:
          "Clear steps and visible contact options make the product feel safer.",
      },
    ],
    sideHeading: "What visitors should learn",
    sideItems: [
      "How to search and shortlist plots",
      "How verification works in practice",
      "How to contact a seller or agent",
    ],
    footerHeading: "FAQ should feel calm",
    footerText:
      "A clean accordion or card stack is more useful than dense paragraph blocks.",
  },
  careers: {
    eyebrow: "Careers",
    title: "A product team shaping a real estate marketplace with real utility.",
    description:
      "Careers pages should make the team look active, credible, and easy to join with a clear next action.",
    primaryCta: { label: "View Open Roles", href: "/contact-us" },
    secondaryCta: { label: "Meet the Brand", href: "/aboutus" },
    metrics: [
      { value: "Growth", label: "mindset" },
      { value: "Local", label: "market expertise" },
      { value: "Lean", label: "execution" },
    ],
    highlights: [
      {
        eyebrow: "Product",
        title: "Help shape a category-specific marketplace",
        description:
          "The product is narrow by design, which makes the work more focused and measurable.",
      },
      {
        eyebrow: "Operations",
        title: "Work with real inquiries, not vanity metrics",
        description:
          "The layout should communicate speed, trust, and high-intent demand.",
      },
      {
        eyebrow: "Culture",
        title: "Small team, direct impact",
        description:
          "Keep the page human, structured, and practical so candidates can understand the role quickly.",
      },
    ],
    sideHeading: "A strong careers page should show",
    sideItems: [
      "What the team is building",
      "Where the market opportunity is",
      "How to get in touch quickly",
    ],
    footerHeading: "Hiring should feel approachable",
    footerText:
      "If the route exists, it should feel like a real destination rather than a dead end.",
  },
  plans: {
    eyebrow: "Plans",
    title: "Listing plans that are easy to compare and easy to act on.",
    description:
      "The plans route should map clearly to the add-property flow and the high-visibility lead products.",
    primaryCta: { label: "Start Posting", href: "/post-hotdeal" },
    secondaryCta: { label: "Browse Packages", href: "/packages" },
    metrics: [
      { value: "Plan", label: "based posting" },
      { value: "Boost", label: "priority reach" },
      { value: "Simple", label: "decision path" },
    ],
    highlights: [
      {
        eyebrow: "Visibility",
        title: "Pick the level of reach you need",
        description:
          "Different listing types should visually signal different levels of exposure.",
      },
      {
        eyebrow: "Audience",
        title: "Match plans to real seller intent",
        description:
          "A casual seller and a builder should not see the same framing.",
      },
      {
        eyebrow: "Conversion",
        title: "Drive users straight to the right form",
        description:
          "A good plan page should reduce clicks instead of creating more choices.",
      },
    ],
    sideHeading: "The page should answer",
    sideItems: [
      "What am I paying for?",
      "What visibility do I get?",
      "Where do I post next?",
    ],
    footerHeading: "Plans need a strong CTA",
    footerText:
      "The path from plan to posting should stay short and obvious.",
  },
  "post-hotdeal": {
    eyebrow: "Post Hot Deal",
    title: "Boost the listings that need faster buyer attention.",
    description:
      "Hot deal pages should feel urgent, concise, and easy to submit on mobile without friction.",
    primaryCta: { label: "Submit a Hot Deal", href: "/contact-us" },
    secondaryCta: { label: "See Packages", href: "/packages" },
    metrics: [
      { value: "Boosted", label: "lead visibility" },
      { value: "Short", label: "submission path" },
      { value: "Urgent", label: "buyer attention" },
    ],
    highlights: [
      {
        eyebrow: "Speed",
        title: "Fastest path to more visibility",
        description:
          "The copy should match the urgency of the product without sounding pushy.",
      },
      {
        eyebrow: "Form",
        title: "Fewer fields, stronger intent",
        description: "Keep the form cards compact and responsive.",
      },
      {
        eyebrow: "Audience",
        title: "Designed for serious inventory owners",
        description:
          "The page should make it clear why a listing qualifies as a hot deal.",
      },
    ],
    sideHeading: "Hot deal checklist",
    sideItems: ["Strong project photos", "Clear pricing and location", "Direct contact routing"],
    footerHeading: "High-intent route",
    footerText:
      "This page should feel like the shortest path from inventory to inquiry.",
  },
  "post-bigchunk-property": {
    eyebrow: "Post Big Chunk",
    title: "Promote large plot inventory for builders, developers, and investors.",
    description:
      "Big chunk pages should feel more premium and substantial, with extra breathing room and stronger lead framing.",
    primaryCta: { label: "List a Big Chunk", href: "/contact-us" },
    secondaryCta: { label: "Talk to Sales", href: "/contact-us" },
    metrics: [
      { value: "Large", label: "inventory focus" },
      { value: "Premium", label: "presentation" },
      { value: "Direct", label: "buyer reach" },
    ],
    highlights: [
      {
        eyebrow: "Scale",
        title: "Built for 5,000+ sq.ft parcels",
        description:
          "The page should visually support bigger land offerings instead of feeling like a standard listing form.",
      },
      {
        eyebrow: "Clarity",
        title: "Explain the size advantage upfront",
        description:
          "Builders and serious buyers need fast understanding of the parcel profile.",
      },
      {
        eyebrow: "Lead flow",
        title: "Keep the contact path direct",
        description:
          "Large inventory pages benefit from immediate inquiry capture and strong trust details.",
      },
    ],
    sideHeading: "Who this page is for",
    sideItems: [
      "Builders looking for development-ready land",
      "Investors needing larger parcel opportunities",
      "Owners wanting more qualified lead flow",
    ],
    footerHeading: "Premium inventory needs premium structure",
    footerText:
      "This route should feel spacious, confident, and focused on big-ticket decisions.",
  },
};
