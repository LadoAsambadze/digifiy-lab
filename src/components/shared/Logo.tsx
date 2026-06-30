import { cn } from "@/lib/utils";

/* ── Digify Lab logo mark: "D_" — a geometric D monogram with a
     terminal-cursor underscore (blinks via .logo-cursor) on the
     gold-gradient tile crossed by the brand's light beam. ── */
export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient id="dl-gold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#facc15" />
          <stop offset="0.55" stopColor="#f59e0b" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
        <clipPath id="dl-clip">
          <rect x="1" y="1" width="46" height="46" rx="13" />
        </clipPath>
      </defs>

      {/* Tile */}
      <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#dl-gold)" />

      {/* Diagonal light-beam streaks (echo of the hero rays) */}
      <g clipPath="url(#dl-clip)">
        <path d="M28 -6 L40 -6 L12 54 L0 54 Z" fill="#ffffff" opacity="0.16" />
        <path d="M44 -6 L50 -6 L22 54 L16 54 Z" fill="#ffffff" opacity="0.1" />
      </g>

      {/* "D" monogram */}
      <path
        d="M15 13.5 V34.5 M15 13.5 H20 A10.5 10.5 0 0 1 20 34.5 H15"
        stroke="#1f1300"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Terminal cursor underscore */}
      <rect className="logo-cursor" x="34" y="31" width="7" height="4" rx="2" fill="#1f1300" />
    </svg>
  );
}

/* ── Full logo: mark + wordmark. `dark` for dark backgrounds. ── */
export default function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="glow inline-flex rounded-[11px] transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
        <LogoMark size={32} />
      </span>
      <span className="text-lg font-bold tracking-tight">
        <span className="gradient-text">Digify</span>
        <span className={dark ? "text-white/80" : "text-foreground/80"}> Lab</span>
      </span>
    </span>
  );
}
