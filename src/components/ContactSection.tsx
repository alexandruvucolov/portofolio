"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { ArrowUpRight, Check, Github, Mail, Phone } from "./Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = site.mailto;
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-gradient-to-b from-white/[0.07] to-white/[0.015] p-6 sm:p-10">
          <div
            className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.75), rgba(34,211,238,0.15) 55%, transparent 72%)",
            }}
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="pill border-emerald-400/25 bg-emerald-400/10 text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open for new projects
              </span>

              <h2 className="mt-5 text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-[2.9rem]">
                Have an app in mind?
                <br />
                <span className="text-gradient">Let&apos;s make it real.</span>
              </h2>

              <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink-300">
                Tell me what you want to build, which platforms you need, and whether the goal is a
                store launch, an internal tool or an MVP to test the market. You&apos;ll get a clear
                scope, timeline and price — usually within two working days.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={site.mailto}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-white/90"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : null}
                  {copied ? "Copied" : "Copy email"}
                </button>
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ink-200 transition hover:border-white/30 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>

            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}


function ContactDetails() {
  return (
    <div className="lg:col-span-5">
      <div className="space-y-2.5">
        <a
          href={`mailto:${site.email}`}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/50 p-3.5 transition hover:border-white/25"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-cyan-glow">
            <Mail className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.68rem] tracking-[0.12em] text-ink-400 uppercase">
              Email
            </span>
            <span className="block truncate text-[0.88rem] font-medium text-white">
              {site.email}
            </span>
          </span>
          <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-400 transition group-hover:text-white" />
        </a>

        <a
          href={site.phoneHref}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/50 p-3.5 transition hover:border-white/25"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-emerald-400">
            <Phone className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.68rem] tracking-[0.12em] text-ink-400 uppercase">
              Phone
            </span>
            <span className="block text-[0.88rem] font-medium text-white">{site.phone}</span>
          </span>
          <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-ink-400 transition group-hover:text-white" />
        </a>

        <div className="rounded-2xl border border-white/10 bg-ink-950/50 p-3.5">
          <span className="block text-[0.68rem] tracking-[0.12em] text-ink-400 uppercase">
            Studio
          </span>
          <span className="mt-1 block text-[0.88rem] font-medium text-white">
            {site.company.name}
          </span>
          <span className="mt-0.5 block text-[0.76rem] text-ink-400">{site.company.address}</span>
          <span className="mt-2 block text-[0.72rem] text-ink-400">
            Typical reply time: under 48 hours
          </span>
        </div>
      </div>
    </div>
  );
}
