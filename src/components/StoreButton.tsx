import { Apple, PlayStore } from "./Icons";

export function StoreButton({
  platform,
  href,
  compact = false,
}: {
  platform: "play" | "appStore";
  href: string;
  compact?: boolean;
}) {
  const isPlay = platform === "play";
  const label = isPlay ? "Google Play" : "App Store";
  const eyebrow = isPlay ? "Get it on" : "Download on the";

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${eyebrow} ${label}`}
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[0.72rem] font-medium text-ink-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
      >
        {isPlay ? <PlayStore className="h-3.5 w-3.5" /> : <Apple className="h-3.5 w-3.5" />}
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-2.5 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
    >
      {isPlay ? (
        <PlayStore className="h-6 w-6 text-white/90" />
      ) : (
        <Apple className="h-6 w-6 text-white/90" />
      )}
      <span className="flex flex-col leading-tight">
        <span className="text-[0.6rem] tracking-[0.14em] text-ink-400 uppercase">{eyebrow}</span>
        <span className="text-sm font-semibold text-white">{label}</span>
      </span>
    </a>
  );
}

export function StoreLinks({
  play,
  appStore,
}: {
  play?: string;
  appStore?: string;
}) {
  if (!play && !appStore) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {play ? <StoreButton platform="play" href={play} compact /> : null}
      {appStore ? <StoreButton platform="appStore" href={appStore} compact /> : null}
    </div>
  );
}
