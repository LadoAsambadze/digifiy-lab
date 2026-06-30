/* ─────────────────────────────────────────────────────────
   ProjectVisual — polished abstract UI mockup used inside
   portfolio cards and the home carousel. Renders a glassy
   browser / phone / brand composition over a gradient so
   cards look like real product shots instead of placeholders.
───────────────────────────────────────────────────────── */

type Props = {
  /** Tailwind gradient classes, e.g. "from-blue-500 to-violet-600" */
  gradient: string;
  /** Project category — picks which mockup to render */
  category: string;
  className?: string;
};

function BrowserMock() {
  return (
    <div className="w-[88%] rounded-xl bg-white/95 shadow-2xl shadow-black/20 overflow-hidden ring-1 ring-white/40">
      {/* chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border-b border-slate-100">
        <span className="w-2 h-2 rounded-full bg-red-300" />
        <span className="w-2 h-2 rounded-full bg-amber-300" />
        <span className="w-2 h-2 rounded-full bg-emerald-300" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-slate-100" />
      </div>
      {/* content */}
      <div className="p-3">
        <div className="grid grid-cols-3 gap-1.5 mb-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md bg-slate-100 px-2 py-1.5">
              <div className="h-1 w-5 rounded-full bg-slate-200 mb-1" />
              <div className="h-2 w-7 rounded-full bg-slate-300" />
            </div>
          ))}
        </div>
        {/* mini chart */}
        <div className="rounded-md bg-slate-50 p-2">
          <svg viewBox="0 0 120 32" className="w-full h-8" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pv-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,26 L20,22 L40,24 L60,14 L80,16 L100,7 L120,4" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0,26 L20,22 L40,24 L60,14 L80,16 L100,7 L120,4 L120,32 L0,32 Z" fill="url(#pv-area)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className="h-[86%] aspect-[9/19] rounded-[1.4rem] bg-white/95 shadow-2xl shadow-black/25 ring-1 ring-white/40 p-2.5 flex flex-col gap-2">
      <div className="mx-auto h-1.5 w-10 rounded-full bg-slate-200" />
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
        <div className="flex-1">
          <div className="h-1.5 w-12 rounded-full bg-slate-200 mb-1" />
          <div className="h-1 w-8 rounded-full bg-slate-100" />
        </div>
      </div>
      <div className="rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 h-12" />
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-md bg-slate-100 h-6" />
        ))}
      </div>
    </div>
  );
}

function BrandMock() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl bg-white/95 shadow-2xl shadow-black/20 ring-1 ring-white/40 flex items-center justify-center">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 rotate-12" />
      </div>
      <div className="flex gap-1.5">
        {["bg-blue-300", "bg-violet-300", "bg-pink-300", "bg-white/80"].map((c, i) => (
          <span key={i} className={`w-5 h-5 rounded-full ${c} ring-1 ring-white/40`} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-1.5 w-20 rounded-full bg-white/60" />
        <div className="h-1.5 w-12 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

export function ProjectVisual({ gradient, category, className = "" }: Props) {
  const isMobile = /mobile/i.test(category);
  const isBrand = /brand/i.test(category);

  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} overflow-hidden ${className}`}>
      {/* dot texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* glow accents */}
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-black/10 blur-3xl pointer-events-none" />

      {/* mockup */}
      <div className="absolute inset-0 flex items-center justify-center p-5">
        {isMobile ? <PhoneMock /> : isBrand ? <BrandMock /> : <BrowserMock />}
      </div>
    </div>
  );
}
