import { navigation, site } from "@/data/site";
import { apps } from "@/data/apps";
import { ArrowUpRight, Github } from "./Icons";
import { AppGlyph } from "./AppGlyph";

export function Footer() {
  const year = new Date().getFullYear();
  const featured = apps.filter((app) => app.status === "live" && app.links.play).slice(0, 4);

  return (
    <footer className="relative border-t border-white/10 bg-ink-950/60">
      <div className="shell py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-glow via-indigo-500 to-cyan-glow text-[0.78rem] font-semibold text-white">
                {site.initials}
              </span>
              <span className="text-[0.95rem] font-semibold text-white">{site.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-[0.85rem] leading-relaxed text-ink-400">
              {site.shortBio} Building for iOS and Android from {site.location}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.74rem] text-ink-200 transition hover:border-white/25 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={site.links.playDeveloper}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.74rem] text-ink-200 transition hover:border-white/25 hover:text-white"
              >
                Google Play
              </a>
              <a
                href={site.links.appStoreDeveloper}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.74rem] text-ink-200 transition hover:border-white/25 hover:text-white"
              >
                App Store
              </a>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer sections">
            <p className="text-[0.68rem] tracking-[0.16em] text-ink-400 uppercase">Sections</p>
            <ul className="mt-3 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.85rem] text-ink-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[0.68rem] tracking-[0.16em] text-ink-400 uppercase">Live apps</p>
            <ul className="mt-3 grid gap-2">
              {featured.map((app) => (
                <li key={app.slug}>
                  <a
                    href={app.links.play}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-2.5 rounded-xl px-1 py-1 transition hover:bg-white/[0.04]"
                  >
                    <AppGlyph glyph={app.glyph} accent={app.accent} size={26} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[0.82rem] text-ink-200 transition group-hover:text-white">
                        {app.name}
                      </span>
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-400 transition group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-line my-8" />

        <div className="flex flex-col items-start justify-between gap-3 text-[0.74rem] text-ink-400 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name} · {site.company.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <a href="#top" className="inline-flex items-center gap-1 transition hover:text-white">
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 rotate-[-45deg]" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
