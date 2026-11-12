export type Platform = "android" | "ios";

export type Category =
  | "games"
  | "productivity"
  | "ai"
  | "utilities"
  | "business"
  | "marketplace"
  | "media";

export type GlyphName =
  | "blocks"
  | "snake"
  | "qr"
  | "document"
  | "sparkles"
  | "camera"
  | "twins"
  | "map"
  | "tool"
  | "runner"
  | "cubes";

export interface AppEntry {
  slug: string;
  name: string;
  storeTitle?: string;
  tagline: string;
  description: string;
  category: Category;
  platforms: Platform[];
  status: "live" | "in-development";
  links: {
    play?: string;
    appStore?: string;
    github?: string;
  };
  bundleIds: string[];
  tech: string[];
  highlights: string[];
  accent: [string, string];
  glyph: GlyphName;
  featured?: boolean;
}

export const categoryLabels: Record<Category, string> = {
  games: "Games",
  productivity: "Productivity",
  ai: "AI",
  utilities: "Utilities",
  business: "Business",
  marketplace: "Marketplace",
  media: "Photo & Video",
};

const PLAY = "https://play.google.com/store/apps/details?id=";
const APP_STORE = "https://apps.apple.com/us/app/";

export const apps: AppEntry[] = [
  {
    slug: "swiftmap",
    name: "SwiftMap",
    storeTitle: "SwiftMap: Local Tasks",
    tagline: "A hyper-local task marketplace with escrow payments.",
    description:
      "Neighbours post a task with a bounty, helpers within three kilometres see it on a live map, and the job only closes when both sides verify a four-digit PIN and QR code at the location. Wallets, escrow, payouts and ratings are handled in-app.",
    category: "marketplace",
    platforms: ["android", "ios"],
    status: "live",
    links: {
      play: `${PLAY}com.alexandruvucolov.SwiftMap`,
      appStore: `${APP_STORE}swiftmap/id6798333864`,
    },
    bundleIds: ["com.alexandruvucolov.SwiftMap"],
    tech: [
      "React Native",
      "Expo Router",
      "Mapbox",
      "Supabase",
      "Stripe",
      "Push notifications",
      "Apple & Google sign-in",
    ],
    highlights: [
      "Live 3 km task radius on a Mapbox surface",
      "PIN + QR code handshake before payout",
      "Wallet, escrow holds and bank cash-out",
      "Verified helper ratings",
    ],
    accent: ["#10b981", "#38bdf8"],
    glyph: "map",
    featured: true,
  },
  {
    slug: "lumi-ai",
    name: "Lumi AI",
    tagline: "A multimodal AI assistant with subscription billing.",
    description:
      "A conversational AI client with streaming responses, image input and markdown-rich answers. Authentication, chat persistence and paywall management are wired through Firebase and RevenueCat so the product can scale without a backend rewrite.",
    category: "ai",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.anonymous.lumiai` },
    bundleIds: ["com.anonymous.lumiai"],
    tech: ["React Native", "Expo", "Firebase Auth", "RevenueCat", "gifted-chat", "Markdown renderer"],
    highlights: [
      "Streaming chat with markdown answers",
      "Image prompts via the media library",
      "Subscription paywall + entitlement checks",
      "Apple and Google sign-in",
    ],
    accent: ["#e879f9", "#8b5cf6"],
    glyph: "sparkles",
    featured: true,
  },
  {
    slug: "lumi-blocks",
    name: "Lumi Blocks",
    tagline: "A neon falling-block puzzle game, built from scratch.",
    description:
      "Seven tetrominoes, a classic 10×20 board, smooth rotation, progressive difficulty and a local top-ten leaderboard. The neon visual system is paired with a looping soundtrack, optional haptics and an ad lifecycle that pauses audio cleanly around every interstitial.",
    category: "games",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.lumiblocks.app` },
    bundleIds: ["com.lumiblocks.app"],
    tech: ["React Native", "Expo SDK 54", "TypeScript", "Reanimated", "expo-audio", "AdMob"],
    highlights: [
      "Custom gravity, rotation and line-clear engine",
      "Levels every 10 lines with score multipliers",
      "Music, SFX and haptics toggled independently",
      "Adaptive banner + interstitial ad hooks",
    ],
    accent: ["#8b5cf6", "#22d3ee"],
    glyph: "blocks",
    featured: true,
  },
  {
    slug: "promptcam",
    name: "PromptCam",
    storeTitle: "PromptCam — Teleprompter",
    tagline: "Teleprompter and 4K recorder in a single camera app.",
    description:
      "Write or paste a script, set the scroll speed and record straight from the app with 4K capture, orientation control and media-library export. Built on VisionCamera v5 with Reanimated-driven scrolling for frame-accurate prompting.",
    category: "media",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.alexandruvucolov.PromptCam` },
    bundleIds: ["com.alexandruvucolov.PromptCam"],
    tech: ["Expo Router", "VisionCamera v5", "Reanimated 4", "expo-audio", "Media library", "AdMob"],
    highlights: [
      "Real-time scrolling teleprompter overlay",
      "4K capture with mirror and orientation controls",
      "Script drafts saved locally",
      "Direct save and share to the media library",
    ],
    accent: ["#fb923c", "#f43f5e"],
    glyph: "camera",
    featured: true,
  },
  {
    slug: "pocket-twin",
    name: "Pocket Twin",
    storeTitle: "Pocket Twin – AI Avatar Chat",
    tagline: "Conversational AI avatars with real-time media.",
    description:
      "A chat product where users talk to AI personas that respond with generated voice and video. WebRTC handles the real-time media path, Firebase stores identity and history, and RevenueCat gates premium interactions.",
    category: "ai",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.pockettwin.app` },
    bundleIds: ["com.pockettwin.app"],
    tech: ["React Native", "WebRTC", "Firebase", "RevenueCat", "expo-video", "Secure Store"],
    highlights: [
      "AI personas with voice and video replies",
      "Real-time WebRTC media sessions",
      "Private media handling on-device",
      "Credit-based premium access",
    ],
    accent: ["#2dd4bf", "#3b82f6"],
    glyph: "twins",
  },
  {
    slug: "lumi-pdf",
    name: "Lumi PDF Creator",
    tagline: "Turn photos into polished, shareable PDFs on-device.",
    description:
      "Select images, reorder, crop and compress them, then export a clean multi-page PDF without anything leaving the phone. No account, no cloud upload — a privacy-first document tool with optional headers, footers and page numbering.",
    category: "productivity",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.alexandruvucolov.lumipdfcreator` },
    bundleIds: ["com.alexandruvucolov.lumipdfcreator"],
    tech: ["React Native", "expo-print", "expo-image-manipulator", "File system", "expo-sharing"],
    highlights: [
      "Fully offline image-to-PDF pipeline",
      "Crop, rotate, reorder and compress pages",
      "Headers, footers and page numbering",
      "Share or save straight to the device",
    ],
    accent: ["#fb7185", "#fbbf24"],
    glyph: "document",
  },
  {
    slug: "lumi-qr",
    name: "Lumi QR Scanner",
    tagline: "Scan, create and share QR codes — offline first.",
    description:
      "Fast camera recognition with optional clipboard copy, haptic confirmation and a searchable history of everything scanned or generated. Custom codes are produced entirely on-device, so the app works with no connection at all.",
    category: "utilities",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.lumi.qrscanner` },
    bundleIds: ["com.lumi.qrscanner"],
    tech: ["Expo", "expo-camera", "react-native-qrcode-svg", "AsyncStorage", "Haptics", "AdMob"],
    highlights: [
      "Millisecond recognition with torch support",
      "Offline QR generation and image export",
      "Scan history with search and bulk clear",
      "Automatic light and dark appearance",
    ],
    accent: ["#38bdf8", "#6366f1"],
    glyph: "qr",
  },

  {
    slug: "lumi-snack",
    name: "Lumi Snack",
    tagline: "A neon arcade snake with modern controls.",
    description:
      "The classic snake loop rebuilt with a neon grid, tuned input handling and a scoring curve that rewards risk. AdMob monetisation and local high scores keep the loop tight on small screens.",
    category: "games",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.lumisnack.app` },
    bundleIds: ["com.lumisnack.app"],
    tech: ["React Native", "Expo", "TypeScript", "Reanimated", "AdMob"],
    highlights: [
      "Neon arcade art direction",
      "Gesture and swipe input tuned for one hand",
      "Persistent local high scores",
      "Free to play, ad supported",
    ],
    accent: ["#34d399", "#a3e635"],
    glyph: "snake",
  },
  {
    slug: "atech-tools",
    name: "Atech Tools",
    storeTitle: "Atech Engineering Solutions",
    tagline: "Engineering expertise and a CNC tool catalogue in your pocket.",
    description:
      "The mobile arm of Atech Engineering Solutions: service showcase, consultation requests and a browsable cutting-tool catalogue for machinists. Ships on both stores with the same design language and content pipeline.",
    category: "business",
    platforms: ["android", "ios"],
    status: "live",
    links: {
      play: `${PLAY}com.atechtools.catalog`,
      appStore: `${APP_STORE}atech-engineering-solutions/id6751657940`,
    },
    bundleIds: ["com.atechtools.catalog", "com.atech.atechengineeringsolutions"],
    tech: ["React Native", "Expo", "TypeScript", "Content pipeline", "Push notifications"],
    highlights: [
      "CNC services and consultation requests",
      "Structured cutting-tool catalogue",
      "FAQ and quick-action home screen",
      "Released on Google Play and the App Store",
    ],
    accent: ["#94a3b8", "#f59e0b"],
    glyph: "tool",
  },
  {
    slug: "warzone-runner",
    name: "Warzone Runner",
    storeTitle: "WarzoneRunner: Military",
    tagline: "A military-themed runner rendered on a Skia canvas.",
    description:
      "A side-scrolling military runner built on React Native Skia with a custom game loop: parallax warzones, gesture-driven controls and a scoring curve tuned for short, repeatable sessions. Published on Google Play.",
    category: "games",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.AtechEngineeringSolutions.WarzoneRunner` },
    bundleIds: ["com.AtechEngineeringSolutions.WarzoneRunner", "com.lumi.warzonerunner"],
    tech: ["React Native Skia", "react-native-game-engine", "Reanimated", "expo-av"],
    highlights: [
      "GPU-accelerated Skia rendering",
      "Custom 60 fps game loop",
      "Parallax world layers",
    ],
    accent: ["#ef4444", "#fb923c"],
    glyph: "runner",
  },
  {
    slug: "block-rumble",
    name: "Block Rumble",
    storeTitle: "Block Rumble!",
    tagline: "A physics-driven block battle built in Unity.",
    description:
      "A fast arcade battle where physics decides the outcome. Built in Unity with the Google Mobile Ads stack wired in for the free-to-play loop, and published on Google Play.",
    category: "games",
    platforms: ["android"],
    status: "live",
    links: { play: `${PLAY}com.atechengineeringsolutions.blockrumble` },
    bundleIds: ["com.atechengineeringsolutions.blockrumble"],
    tech: ["Unity", "C#", "Google Mobile Ads"],
    highlights: [
      "Physics-based combat loop",
      "Ad-supported free-to-play release",
      "Unity mobile build pipeline",
    ],
    accent: ["#6366f1", "#22d3ee"],
    glyph: "cubes",
  },
];

export const liveApps = apps.filter((app) => app.status === "live");

export const appFilters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "games", label: "Games" },
  { id: "ai", label: "AI" },
  { id: "productivity", label: "Productivity" },
  { id: "utilities", label: "Utilities" },
  { id: "marketplace", label: "Marketplace" },
  { id: "media", label: "Photo & Video" },
  { id: "business", label: "Business" },
];
