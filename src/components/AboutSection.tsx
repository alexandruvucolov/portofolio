import { site, timeline } from "@/data/site";
import { Apple, ArrowUpRight, Github, MapPin, PlayStore } from "./Icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="About"
                title="From CNC machine tools to production mobile software."
                description="I started in manufacturing engineering, where precision is not optional. That discipline carried into software: measure twice, ship once, and make the release process boring."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-6 space-y-4 text-[0.92rem] leading-relaxed text-ink-300">
                <p>
                  Today I run <span className="font-medium text-white">{site.company.name}</span>,
                  an engineering company with {site.company.years} years in CNC machining and a
                  partnership with ZCC-CT cutting tools — and I build the apps that sit alongside
                  it. The Lumi product family (games, utilities and AI tools) is designed, coded and
                  published end to end in-house.
                </p>
                <p>
                  I work in React Native with the modern Expo toolchain, type everything in
                  TypeScript, and keep releases flowing through automated EAS builds and GitHub
                  Actions. When a feature needs something native — camera pipelines, Skia rendering,
                  WebRTC — I write the bridge instead of dropping the feature.
                </p>
                <p>
                  Every app in the portfolio is available on the public stores, which means it also
                  survived review: privacy policies, data-safety forms, account deletion, billing
                  compliance and the rest of the unglamorous work that makes a product real.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <ol className="mt-8 space-y-4 border-l border-white/10 pl-5">
                {timeline.map((entry) => (
                  <li key={entry.period} className="relative">
                    <span className="absolute top-1.5 -left-[1.42rem] h-2 w-2 rounded-full bg-gradient-to-br from-violet-glow to-cyan-glow ring-4 ring-ink-950" />
                    <p className="font-mono text-[0.68rem] tracking-wide text-cyan-glow/80 uppercase">
                      {entry.period}
                    </p>
                    <p className="mt-0.5 text-[0.95rem] font-semibold text-white">{entry.title}</p>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-400">{entry.body}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
}


function AboutCard() {
  const channels = [
    {
      href: site.links.playDeveloper,
      icon: PlayStore,
      title: "Google Play",
      subtitle: "Atech Engineering Solutions",
    },
    {
      href: site.links.appStoreDeveloper,
      icon: Apple,
      title: "App Store",
      subtitle: "Alexandru Vucolov",
    },
    {
      href: site.links.github,
      icon: Github,
      title: "GitHub",
      subtitle: "alexandruvucolov",
    },
  ];

  return (
    <Reveal delay={100}>
      <div className="glass rounded-3xl p-5 sm:p-6 lg:sticky lg:top-24">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-glow via-indigo-500 to-cyan-glow font-display text-sm font-semibold text-white">
            {site.initials}
          </span>
          <div>
            <p className="text-[1rem] font-semibold text-white">{site.name}</p>
            <p className="text-[0.78rem] text-ink-400">{site.role}</p>
          </div>
        </div>

        <dl className="mt-5 space-y-3 text-[0.82rem]">
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
            <div>
              <dt className="text-ink-400">Based in</dt>
              <dd className="text-ink-100">
                {site.location} · {site.timezone}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
            <div>
              <dt className="text-ink-400">Company</dt>
              <dd className="text-ink-100">{site.company.name}</dd>
              <dd className="text-[0.75rem] text-ink-400">{site.company.partner}</dd>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
            <div>
              <dt className="text-ink-400">Focus</dt>
              <dd className="text-ink-100">React Native · Expo · Next.js · AI &amp; payments</dd>
            </div>
          </div>
        </dl>

        <div className="divider-line my-5" />

        <p className="text-[0.68rem] tracking-[0.14em] text-ink-400 uppercase">Find the apps</p>
        <div className="mt-2.5 flex flex-col gap-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 transition hover:border-white/25 hover:bg-white/[0.07]"
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2.5 text-[0.85rem] font-medium text-white">
                    <Icon className="h-4 w-4 shrink-0" />
                    {channel.title}
                  </span>
                  <span className="mt-0.5 block truncate pl-[1.65rem] text-[0.72rem] text-ink-400">
                    {channel.subtitle}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition group-hover:text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
