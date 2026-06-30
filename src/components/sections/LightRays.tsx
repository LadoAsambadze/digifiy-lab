/* ── Stripe-style diagonal beam: layered ribbon gradients in the
     brand's warm palette. Pure CSS transforms — cheap to animate. ── */

const rays = [
  { left: "4%", width: 170, from: "#fde68a", to: "#f59e0b", opacity: 0.95, duration: 17, delay: 0 },
  { left: "18%", width: 95, from: "#fb7185", to: "#f43f5e", opacity: 0.65, duration: 13, delay: -4 },
  { left: "28%", width: 210, from: "#fbbf24", to: "#fb923c", opacity: 0.9, duration: 19, delay: -8 },
  { left: "46%", width: 110, from: "#bae6fd", to: "#c4b5fd", opacity: 0.4, duration: 15, delay: -2 },
  { left: "56%", width: 190, from: "#fcd34d", to: "#f59e0b", opacity: 0.95, duration: 16, delay: -6 },
  { left: "73%", width: 130, from: "#fda4af", to: "#fb7185", opacity: 0.6, duration: 14, delay: -10 },
  { left: "86%", width: 170, from: "#fde68a", to: "#fbbf24", opacity: 0.85, duration: 18, delay: -3 },
];

export default function LightRays() {
  return (
    <div
      aria-hidden
      className="rays-veil pointer-events-none absolute inset-y-0 end-0 w-[78%] opacity-80 overflow-hidden sm:w-[80%] sm:opacity-100 lg:w-[72%]"
    >
      <div className="rays">
        {rays.map((r, i) => (
          <span
            key={i}
            className="ray"
            style={{
              left: r.left,
              "--ray-w": `${r.width}px`,
              width: "var(--ray-w)",
              opacity: r.opacity,
              background: `linear-gradient(to bottom, transparent 2%, ${r.from} 32%, ${r.to} 66%, transparent 98%)`,
              animationDuration: `${r.duration}s`,
              animationDelay: `${r.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      {/* Grain kills banding; bottom melt blends into the page */}
      <div className="grain absolute inset-0 opacity-30 mix-blend-soft-light" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}
