import { apps } from "@/data/apps";
import { site } from "@/data/site";

const liveApps = apps.filter((app) => app.status === "live");

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Iași",
    addressRegion: "Iași County",
    addressCountry: "RO",
  },
  worksFor: {
    "@type": "Organization",
    name: site.company.name,
    url: site.company.website,
  },
  sameAs: [site.links.github, site.links.appStoreDeveloper],
  knowsAbout: [
    "React Native",
    "Expo",
    "TypeScript",
    "Next.js",
    "Mobile app development",
    "AI product integration",
    "Payment integration",
  ],
};

export const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} — published apps`,
  itemListElement: liveApps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      applicationCategory: "MobileApplication",
      operatingSystem:
        app.platforms.includes("ios") && app.platforms.includes("android")
          ? "Android, iOS"
          : app.platforms.includes("ios")
            ? "iOS"
            : "Android",
      description: app.tagline,
      url: app.links.play ?? app.links.appStore,
      author: {
        "@type": "Person",
        name: site.name,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  })),
};
