import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist. Browse the portfolio instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-[0.75rem] tracking-[0.2em] text-cyan-glow uppercase">
        404 · not found
      </p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page shipped elsewhere.</h1>
      <p className="mt-4 max-w-md text-[0.95rem] text-ink-300">
        The link you followed doesn&apos;t exist. Head back to the portfolio to browse the live apps
        and get in touch.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-white/90"
      >
        Back to portfolio
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
