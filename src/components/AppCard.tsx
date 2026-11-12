import type { AppEntry } from "@/data/apps";
import { categoryLabels } from "@/data/apps";
import { AppGlyph } from "./AppGlyph";
import { Apple, ArrowUpRight, Check, PlayStore } from "./Icons";
import { StoreLinks } from "./StoreButton";

function PlatformBadge({ platform }: { platform: "android" | "ios" }) {
  const isAndroid = platform === "android";
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.65rem] font-medium text-ink-200"
      title={isAndroid ? "Google Play" : "App Store"}
    >
      {isAndroid ? <PlayStore className="h-3 w-3" /> : <Apple className="h-3 w-3" />}
      {isAndroid ? "Android" : "iOS"}
    </span>
  );
}

export function AppCard({ app, index = 0 }: { app: AppEntry; index?: number }) {
  const visibleTech = app.tech.slice(0, 4);
  const extraTech = app.tech.length - visibleTech.length;

  return (
    <article
      className="card-glow glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-5 sm:p-6"
      aria-labelledby={`app-${app.slug}`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-20 h-52 w-52 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
        style={{ background: `radial-gradient(circle, ${app.accent[0]}, transparent 70%)` }}
        aria-hidden
      />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <AppGlyph glyph={app.glyph} accent={app.accent} size={52} />
          <div className="min-w-0">
            <h3 id={`app-${app.slug}`} className="truncate text-[1.05rem] font-semibold text-white">
              {app.name}
            </h3>
            <p className="mt-0.5 text-[0.72rem] tracking-[0.08em] text-ink-400 uppercase">
              {categoryLabels[app.category]}
            </p>
          </div>
        </div>

        {app.status === "live" ? (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide text-emerald-300 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        ) : (
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide text-amber-300 uppercase">
            In dev
          </span>
        )}
      </div>

      <p className="mt-4 text-[0.95rem] leading-snug font-medium text-ink-100">{app.tagline}</p>
      <p className="mt-2 line-clamp-3 text-[0.85rem] leading-relaxed text-ink-400">
        {app.description}
      </p>

      {app.highlights.length ? (
        <ul className="mt-4 space-y-1.5">
          {app.highlights.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2 text-[0.8rem] text-ink-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {visibleTech.map((tech) => (
          <span key={tech} className="chip text-[0.66rem]">
            {tech}
          </span>
        ))}
        {extraTech > 0 ? <span className="chip text-[0.66rem]">+{extraTech}</span> : null}
      </div>

      <div className="mt-auto pt-5">
        <div className="divider-line mb-4 opacity-60" />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {app.platforms.map((platform) => (
              <PlatformBadge key={platform} platform={platform} />
            ))}
          </div>
          {app.status === "live" ? (
            <StoreLinks play={app.links.play} appStore={app.links.appStore} />
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[0.7rem] text-ink-400">
              Pre-release
              <ArrowUpRight className="h-3 w-3" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
