export const site = {
  name: "Alexandru Vucolov",
  initials: "AV",
  role: "Mobile & Full-Stack Engineer",
  url: "https://alexandruvucolov.github.io/portofolio",
  repo: "https://github.com/alexandruvucolov/portofolio",
  shortBio:
    "I design, build and ship mobile products end-to-end — from the first wireframe to the store release.",
  intro:
    "Independent app developer and founder of Atech Engineering Solutions. I build production React Native / Expo and Next.js products: games, AI apps, marketplaces and business tools — eleven of them live on Google Play and the App Store.",
  location: "Iași, Romania",
  timezone: "EET (UTC+2)",
  email: "sales@atech-tools.com",
  phone: "+40 729 689 610",
  phoneHref: "tel:+40729689610",
  mailto:
    "mailto:sales@atech-tools.com?subject=Project%20inquiry%20from%20your%20portfolio&body=Hi%20Alexandru%2C%0A%0AI%27d%20like%20to%20talk%20about%20",
  company: {
    name: "Atech Engineering Solutions SRL",
    tagline: "15+ years of CNC machining & engineering, now building software.",
    address: "Tomești, Iași County, Romania",
    years: "15+",
    partner: "Official ZCC-CT cutting-tools partner",
    website: "https://alexandruvucolov.github.io/atech-website/",
  },
  links: {
    github: "https://github.com/alexandruvucolov",
    playDeveloper:
      "https://play.google.com/store/search?q=Atech%20Engineering%20Solutions&c=apps&hl=en",
    appStoreDeveloper: "https://apps.apple.com/us/developer/alexandru-vucolov/id1836241780",
  },
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: "11", label: "Apps live in stores" },
  { value: "13", label: "Store listings shipped" },
  { value: "29", label: "Repositories built" },
  { value: "15+", label: "Years of engineering roots" },
] as const;


export const highlights = [
  {
    title: "End-to-end ownership",
    body: "Product thinking, UI/UX, native modules, billing, analytics and release management — handled by one accountable engineer.",
    icon: "compass",
  },
  {
    title: "Production-grade React Native",
    body: "Expo SDK 54, React Native 0.81+ and the New Architecture. Typed, documented and shipped through automated EAS pipelines.",
    icon: "cpu",
  },
  {
    title: "Monetisation built in",
    body: "AdMob, RevenueCat subscriptions, Stripe payouts and escrow flows — wired, compliance-checked and instrumented.",
    icon: "chart",
  },
  {
    title: "Store compliance, done right",
    body: "Every release ships with privacy policies, data-safety declarations, account-deletion flows and GDPR/CCPA controls.",
    icon: "shield",
  },
] as const;

export const services = [
  {
    title: "Mobile product engineering",
    body: "Cross-platform iOS & Android apps with React Native and Expo, including native modules where the platform demands it.",
    points: ["Expo / EAS build pipelines", "New Architecture & Reanimated", "Offline-first data sync"],
  },
  {
    title: "AI product integration",
    body: "LLM chat, multimodal prompts and on-device media handling, wrapped in interfaces that feel instant.",
    points: ["Streaming chat UX", "Vision & image pipelines", "Usage-based billing"],
  },
  {
    title: "Marketplaces & payments",
    body: "Two-sided marketplaces with maps, escrow, wallets and payouts — designed to be auditable from day one.",
    points: ["Stripe & RevenueCat", "Escrow + wallet ledgers", "Trust & verification flows"],
  },
  {
    title: "Web & platform work",
    body: "Next.js marketing sites, dashboards and internal tools that share the same design system as the apps.",
    points: ["Next.js App Router", "Design systems", "SEO & performance"],
  },
] as const;


export const techGroups = [
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "TypeScript",
      "Reanimated 4",
      "VisionCamera",
      "React Native Skia",
      "Native bridges",
    ],
  },
  {
    title: "Web",
    items: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "REST & Webhooks"],
  },
  {
    title: "Backend & data",
    items: ["Firebase", "Supabase", "PostgreSQL", "Stripe", "RevenueCat", "WebRTC", "Cloud Functions"],
  },
  {
    title: "Platform & tooling",
    items: [
      "EAS Build & Submit",
      "GitHub Actions",
      "AdMob",
      "Mapbox",
      "Figma",
      "App Store Connect",
      "Play Console",
    ],
  },
] as const;

export const timeline = [
  {
    period: "2023 — now",
    title: "Independent app studio",
    body: "Designing and shipping a portfolio of consumer and business apps under the Lumi brand and Atech Engineering Solutions.",
  },
  {
    period: "2019 — 2023",
    title: "Full-stack & mobile engineering",
    body: "Built commerce platforms, payment integrations and internal tooling, then moved the same rigour into mobile.",
  },
  {
    period: "2010 — 2019",
    title: "Engineering & CNC manufacturing",
    body: "Atech Engineering Solutions: CNC machining, cutting-tool technology and technical training for industrial clients.",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discovery",
    body: "Scope, target platforms, monetisation model and the constraints that actually matter.",
  },
  {
    step: "02",
    title: "Design",
    body: "Flows, wireframes and a reusable design system — validated on a real device early.",
  },
  {
    step: "03",
    title: "Build",
    body: "Typed architecture, native integrations, automated builds and weekly testable drops.",
  },
  {
    step: "04",
    title: "Release & grow",
    body: "Store submission, compliance paperwork, analytics and iteration from real user data.",
  },
] as const;

export type HighlightIcon = (typeof highlights)[number]["icon"];
