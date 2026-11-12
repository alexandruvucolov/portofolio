import { site, stats } from "@/data/site";
import { ArrowDown, ArrowUpRight, Check, Github, MapPin, Sparkle } from "./Icons";
import { HeroDevice } from "./HeroDevice";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="pill border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </span>
              <span className="pill text-ink-300">
                <MapPin className="h-3.5 w-3.5" />
                {site.location}
              </span>
            </div>

            <h1 className="mt-7 text-[2.55rem] leading-[1.04] font-semibold tracking-tight sm:text-6xl lg:text-[3.7rem]">
              <span className="text-gradient">Mobile products</span> built end to end, shipped to
              the stores.
            </h1>

            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-300 sm:text-lg">
              I&apos;m <span className="font-medium text-white">{site.name}</span> — a mobile and
              full-stack engineer. I take apps from the first sketch to a live listing on Google
              Play and the App Store: design, code, payments, compliance and release.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-white/90"
              >
                Explore the work
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-medium text-ink-300 transition hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.82rem] text-ink-400">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                11 apps live on Google Play &amp; the App Store
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkle className="h-4 w-4 text-cyan-glow" />
                React Native · Expo · Next.js
              </span>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-950/90 px-4 py-4">
                  <dt className="text-[0.68rem] leading-tight tracking-[0.1em] text-ink-400 uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <HeroDevice />
          </div>
        </div>
      </div>
    </section>
  );
}
