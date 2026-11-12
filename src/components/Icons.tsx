import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Github(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.94.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function PlayStore(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M3.6 2.3a1.3 1.3 0 0 0-.4.95v17.5c0 .38.15.72.4.95l9.02-9.2L3.6 2.3Zm10.2 10.4 2.6 2.65-9.9 5.4 7.3-8.05Zm3.85-3.93-9.9-5.4 7.3 8.06 2.6-2.66Zm1.32.72-2.7 2.75 2.7 2.76 2.9-1.58c.9-.49.9-1.86 0-2.35l-2.9-1.58Z" />
    </svg>
  );
}

export function Apple(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.36 12.63c.02 2.44 2.14 3.25 2.17 3.27-.02.06-.34 1.17-1.13 2.32-.68.99-1.39 1.97-2.5 1.99-1.1.02-1.45-.65-2.7-.65s-1.65.63-2.69.67c-1.08.04-1.9-1.06-2.59-2.04-1.4-2.03-2.47-5.73-1.03-8.24.72-1.25 2-2.04 3.39-2.06 1.06-.02 2.06.71 2.7.71.65 0 1.86-.88 3.13-.75.53.02 2.03.21 2.99 1.6-.08.05-1.78 1.04-1.74 3.18ZM14.3 4.9c.58-.7.97-1.68.86-2.66-.86.04-1.9.58-2.5 1.28-.54.62-1 1.62-.87 2.57.96.08 1.93-.49 2.51-1.19Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.8 6.7 7.1 5.3c.7.5 1.6.5 2.3 0l7.1-5.3" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h3l1.6 4-2 1.4a12 12 0 0 0 5 5l1.4-2L18 13v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </svg>
  );
}

export function Compass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-1.6 4.4-4.4 1.6 1.6-4.4 4.4-1.6Z" />
    </svg>
  );
}

export function Cpu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.2" />
      <rect x="9.8" y="9.8" width="4.4" height="4.4" rx="1" />
      <path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" />
    </svg>
  );
}

export function Chart(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 19 6v5.6c0 4.2-2.9 7.6-7 9.2-4.1-1.6-7-5-7-9.2V6l7-2.8Z" />
      <path d="m9 12.2 2.2 2.2L15.4 10" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 15.5l.7 2.2 2.2.7-2.2.7-.7 2.2-.7-2.2-2.2-.7 2.2-.7.7-2.2Z" />
    </svg>
  );
}

export const highlightIcons = {
  compass: Compass,
  cpu: Cpu,
  chart: Chart,
  shield: Shield,
  sparkle: Sparkle,
} as const;
