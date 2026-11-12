import type { GlyphName } from "@/data/apps";

const glyphPaths: Record<GlyphName, React.ReactNode> = {
  blocks: (
    <>
      <rect x="4" y="13.5" width="6" height="6" rx="1.6" />
      <rect x="14" y="13.5" width="6" height="6" rx="1.6" />
      <rect x="9" y="4.5" width="6" height="6" rx="1.6" />
      <rect x="14" y="4.5" width="6" height="6" rx="1.6" opacity="0.55" />
    </>
  ),
  snake: (
    <path
      d="M5 16.5h6.2a3 3 0 0 0 0-6H9a2.6 2.6 0 0 1 0-5.2h9.4"
      strokeWidth="2.6"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
    />
  ),
  qr: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.6" />
      <rect x="14" y="4" width="6" height="6" rx="1.6" />
      <rect x="4" y="14" width="6" height="6" rx="1.6" />
      <rect x="14.5" y="14.5" width="2.2" height="2.2" rx="0.7" />
      <rect x="18" y="17.5" width="2" height="2" rx="0.7" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.5h7.2L19 9.3V20a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M13 3.7V9h5.2" />
      <path d="M8.5 13.5h7M8.5 17h4.5" strokeWidth="1.4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.8 13.9 9l5 1.9-5 1.9L12 18l-1.9-5.2-5-1.9 5-1.9L12 3.8Z" />
      <path d="M18.4 15.6l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8.8-2.1Z" opacity="0.7" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 8.8A2.3 2.3 0 0 1 5.8 6.5h1.6l1.2-2h6.8l1.2 2h1.6a2.3 2.3 0 0 1 2.3 2.3v8.4a2.3 2.3 0 0 1-2.3 2.3H5.8a2.3 2.3 0 0 1-2.3-2.3V8.8Z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  twins: (
    <>
      <circle cx="8.8" cy="10" r="3.4" />
      <circle cx="15.6" cy="13.6" r="3.4" opacity="0.6" />
      <path d="M3.6 19.4c.6-2.6 2.7-4.2 5.2-4.2s4.6 1.6 5.2 4.2" opacity="0.55" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.4-5.6 6.4-10.5a6.4 6.4 0 1 0-12.8 0C5.6 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </>
  ),
  tool: (
    <>
      <path d="M14.6 3.6a5 5 0 0 0-4.9 8.2l-5 5a2 2 0 0 0 2.8 2.8l5-5a5 5 0 0 0 6.3-6.6l-2.8 2.8-2.2-.6-.6-2.2 2.4-2.8a5 5 0 0 0-1-.6Z" />
    </>
  ),
  runner: (
    <>
      <circle cx="15.2" cy="5.4" r="2.1" />
      <path d="M13.4 9.2 9.6 11l-1 3.2M13.4 9.2l2.6 2.6 2.4.4M12.6 12.8l1.8 3-2.6 4.2M12.6 12.8 8 15.4l-1.6 3.6" />
    </>
  ),
  cubes: (
    <>
      <path d="m12 3.2 7.4 4.2v9.2L12 20.8 4.6 16.6V7.4L12 3.2Z" />
      <path d="m4.8 7.5 7.2 4.1 7.2-4.1M12 11.6v9" strokeWidth="1.3" opacity="0.6" />
    </>
  ),
};

export function AppGlyph({
  glyph,
  accent,
  size = 56,
  className = "",
}: {
  glyph: GlyphName;
  accent: [string, string];
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[28%] shadow-[0_14px_34px_-16px_rgba(0,0,0,0.95)] ring-1 ring-white/15 ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(145deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
      }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 0%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 55%)",
        }}
      />
      <svg
        viewBox="0 0 24 24"
        width={size * 0.56}
        height={size * 0.56}
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        className="relative text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
        style={{ fillOpacity: 0.22 }}
      >
        {glyphPaths[glyph]}
      </svg>
      <span className="sr-only">{glyph}</span>
    </span>
  );
}
