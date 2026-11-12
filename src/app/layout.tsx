import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const description =
  "Alexandru Vucolov — mobile and full-stack engineer, founder of Atech Engineering Solutions. Nine apps live on Google Play and the App Store, built with React Native, Expo and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "Alexandru Vucolov",
    "React Native developer",
    "Expo developer",
    "Next.js developer",
    "mobile app developer Romania",
    "Atech Engineering Solutions",
    "Lumi apps",
    "SwiftMap",
    "app portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#05060b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="grain relative min-h-dvh antialiased">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
          <div
            className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 animate-drift rounded-full opacity-60 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.34) 0%, rgba(139,92,246,0) 70%)",
            }}
          />
          <div
            className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] animate-drift rounded-full opacity-50 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.24) 0%, rgba(34,211,238,0) 70%)",
              animationDelay: "-8s",
            }}
          />
          <div
            className="absolute bottom-0 right-0 h-[32rem] w-[32rem] animate-drift rounded-full opacity-40 blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(52,211,153,0.2) 0%, rgba(52,211,153,0) 70%)",
              animationDelay: "-16s",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 80%)",
            }}
          />
        </div>

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
