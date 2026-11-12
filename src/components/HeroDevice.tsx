import { AppGlyph } from "./AppGlyph";
import { MapPin, Sparkle } from "./Icons";

const pins = [
  { top: "22%", left: "24%", accent: ["#10b981", "#38bdf8"] as [string, string], label: "Errand" },
  { top: "46%", left: "68%", accent: ["#8b5cf6", "#22d3ee"] as [string, string], label: "Delivery" },
  { top: "63%", left: "34%", accent: ["#fb923c", "#f43f5e"] as [string, string], label: "Handyman" },
];

export function HeroDevice() {
  return (
    <div className="relative mx-auto w-full max-w-[23rem]">
      <div
        className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 40%, rgba(139,92,246,0.42) 0%, rgba(34,211,238,0.18) 45%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative animate-float rounded-[2.75rem] border border-white/15 bg-gradient-to-b from-white/12 to-white/[0.03] p-2.5 shadow-[0_40px_120px_-40px_rgba(0,0,0,1)]">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#070910]">
          <div className="flex items-center justify-between px-5 pt-3 text-[0.62rem] font-medium text-ink-400">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
              <span className="h-1 w-3 rounded-sm bg-white/50" />
            </span>
          </div>

          <div className="flex items-center justify-between px-5 pt-4">
            <div>
              <p className="text-[0.6rem] tracking-[0.18em] text-ink-400 uppercase">Nearby</p>
              <p className="font-display text-[1.05rem] font-semibold text-white">
                Tasks around you
              </p>
            </div>
            <AppGlyph glyph="map" accent={["#10b981", "#38bdf8"]} size={34} />
          </div>

          <div className="relative mt-4 h-56 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(160deg, #0b1220 0%, #0d1526 45%, #0a1018 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 300 220"
              fill="none"
              aria-hidden
            >
              <path
                d="M-10 150 C60 120 90 170 150 140 C210 110 250 150 310 118"
                stroke="rgba(56,189,248,0.45)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              <path
                d="M40 -10 C60 60 30 90 70 150 C95 190 60 210 40 230"
                stroke="rgba(168,85,247,0.35)"
                strokeWidth="2"
              />
            </svg>

            {pins.map((pin) => (
              <div
                key={pin.label}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ top: pin.top, left: pin.left }}
              >
                <span
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/40 shadow-lg"
                  style={{
                    background: `linear-gradient(145deg, ${pin.accent[0]}, ${pin.accent[1]})`,
                  }}
                >
                  <MapPin className="h-4 w-4 text-white" />
                </span>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[0.55rem] font-medium text-white/80 backdrop-blur">
                  {pin.label}
                </span>
              </div>
            ))}

            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-ink-950/85 p-3 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <AppGlyph glyph="document" accent={["#fb923c", "#f43f5e"]} size={30} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[0.74rem] font-semibold text-white">
                    Pick up a parcel nearby
                  </p>
                  <p className="text-[0.62rem] text-ink-400">1.2 km · PIN verified · escrow</p>
                </div>
                <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[0.6rem] font-bold text-emerald-950">
                  €8
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-6 py-3">
            {[0, 1, 2, 3].map((index) => (
              <span
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -left-4 hidden animate-float items-center gap-2 rounded-2xl border border-white/12 bg-ink-900/90 px-3 py-2 text-[0.7rem] font-medium text-white shadow-xl backdrop-blur sm:flex">
        <AppGlyph glyph="blocks" accent={["#8b5cf6", "#22d3ee"]} size={24} />
        Lumi Blocks
      </div>

      <div
        className="absolute top-1/3 -right-4 hidden animate-float items-center gap-2 rounded-2xl border border-white/12 bg-ink-900/90 px-3 py-2 text-[0.7rem] font-medium text-white shadow-xl backdrop-blur sm:flex"
        style={{ animationDelay: "-3s" }}
      >
        <AppGlyph glyph="sparkles" accent={["#e879f9", "#8b5cf6"]} size={24} />
        Lumi AI
      </div>

      <div
        className="absolute -bottom-5 left-2 hidden animate-float items-center gap-2 rounded-2xl border border-white/12 bg-ink-900/90 px-3 py-2 text-[0.7rem] font-medium text-white shadow-xl backdrop-blur sm:flex"
        style={{ animationDelay: "-6s" }}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-400/15">
          <Sparkle className="h-3.5 w-3.5 text-emerald-400" />
        </span>
        11 apps shipped
      </div>
    </div>
  );
}
