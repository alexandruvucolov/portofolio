import { techGroups } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const marqueeItems = [
  "React Native",
  "Expo SDK 54",
  "TypeScript",
  "Next.js",
  "Reanimated 4",
  "Firebase",
  "Supabase",
  "Stripe",
  "RevenueCat",
  "Mapbox",
  "VisionCamera",
  "Skia",
  "AdMob",
  "GitHub Actions",
];

export function StackSection() {
  return (
    <section id="stack" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="A stack chosen for shipping, not for fashion."
            description="Every tool below is in production on a live app — from the rendering layer to the billing and release pipelines."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {techGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className="h-full">
              <div className="glass h-full rounded-3xl p-5">
                <div className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: ["#8b5cf6", "#22d3ee", "#34d399", "#fbbf24"][index],
                    }}
                  />
                  <h3 className="text-[0.72rem] font-semibold tracking-[0.14em] text-ink-300 uppercase">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[0.74rem] text-ink-200 transition hover:border-white/25 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mask-fade-x relative mt-12 overflow-hidden border-y border-white/10 bg-white/[0.02] py-4">
        <div className="flex w-max animate-marquee items-center gap-8 pr-8">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-3 text-[0.8rem] font-medium tracking-wide text-ink-400"
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-glow/60" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
