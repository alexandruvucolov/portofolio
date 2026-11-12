"use client";

import { useMemo, useState } from "react";
import { appFilters, apps, type Category } from "@/data/apps";
import { AppCard } from "./AppCard";
import { AppGlyph } from "./AppGlyph";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const collageIcons = [
  { glyph: "blocks" as const, accent: ["#8b5cf6", "#22d3ee"] as [string, string] },
  { glyph: "sparkles" as const, accent: ["#e879f9", "#8b5cf6"] as [string, string] },
  { glyph: "map" as const, accent: ["#10b981", "#38bdf8"] as [string, string] },
  { glyph: "camera" as const, accent: ["#fb923c", "#f43f5e"] as [string, string] },
];

export function WorkSection() {
  const [filter, setFilter] = useState<"all" | Category>("all");

  const liveApps = useMemo(() => apps.filter((app) => app.status === "live"), []);
  const inDevelopment = useMemo(() => apps.filter((app) => app.status === "in-development"), []);

  const filtered = useMemo(
    () => (filter === "all" ? liveApps : liveApps.filter((app) => app.category === filter)),
    [filter, liveApps],
  );

  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Nine live apps across Google Play and the App Store."
              description="Consumer games, AI assistants, utilities and a two-sided marketplace — all designed, engineered and published by me. Every listing below links straight to the store."
            />
            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex -space-x-2">
                {collageIcons.map((icon) => (
                  <AppGlyph
                    key={icon.glyph}
                    glyph={icon.glyph}
                    accent={icon.accent}
                    size={30}
                    className="ring-2 ring-ink-950"
                  />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-[0.8rem] font-semibold text-white">11 store listings</p>
                <p className="text-[0.68rem] text-ink-400">Android &amp; iOS</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="no-scrollbar mask-fade-x mt-9 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible sm:[mask-image:none]"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {appFilters.map((item) => {
              const isActive = filter === item.id;
              const count =
                item.id === "all"
                  ? liveApps.length
                  : liveApps.filter((app) => app.category === item.id).length;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-[0.8rem] font-medium transition ${
                    isActive
                      ? "border-white/25 bg-white text-ink-950"
                      : "border-white/10 bg-white/[0.03] text-ink-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[0.62rem] font-semibold ${
                      isActive ? "bg-ink-950/10 text-ink-950" : "bg-white/10 text-ink-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {filtered.map((app, index) => (
            <Reveal key={app.slug} delay={Math.min(index * 60, 240)} className="h-full">
              <AppCard app={app} index={index} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-ink-400">
            Nothing in this category yet — check back soon.
          </p>
        ) : null}

        <Reveal delay={120}>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[0.68rem] tracking-[0.16em] text-ink-400 uppercase">
                  In the lab
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">Currently in development</h3>
              </div>
              <span className="chip">Prototype builds</span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {inDevelopment.map((app) => (
                <div
                  key={app.slug}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-ink-950/40 p-4"
                >
                  <AppGlyph glyph={app.glyph} accent={app.accent} size={40} />
                  <div className="min-w-0">
                    <p className="text-[0.9rem] font-semibold text-white">{app.name}</p>
                    <p className="mt-0.5 text-[0.78rem] leading-relaxed text-ink-400">
                      {app.tagline}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {app.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="chip text-[0.62rem]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
