"use client";

import { useCallback, useEffect, useState } from "react";
import { navigation, site } from "@/data/site";
import { ArrowUpRight, Close, Github, Menu } from "./Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = navigation.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <a href="#top" className="group flex items-center gap-3" onClick={close}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-glow via-indigo-500 to-cyan-glow text-[0.78rem] font-semibold tracking-tight text-white shadow-[0_10px_24px_-12px_rgba(139,92,246,0.9)]">
            {site.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[0.92rem] font-semibold text-white">{site.name}</span>
            <span className="text-[0.66rem] tracking-[0.16em] text-ink-400 uppercase">
              App developer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-ink-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ink-300 transition hover:border-white/25 hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-white/90"
          >
            Let&apos;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`origin-top border-t border-white/10 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 ${
            open ? "max-h-[28rem] opacity-100" : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-[0.95rem] text-ink-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4 text-ink-400" />
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <a
                href="#contact"
                onClick={close}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink-950"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/12 text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
