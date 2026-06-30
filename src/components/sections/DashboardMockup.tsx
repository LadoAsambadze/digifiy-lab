"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ── 3-D tilting browser/dashboard mockup with floating result cards.
     Numbers/labels are intentionally English product-mock content. ── */

// Acquisition channels — mirrors the agency's SEO / advertising / marketing services.
const trafficSources = [
  { label: "Organic Search", pct: 62, bar: "bg-emerald-500", dot: "bg-emerald-500" },
  { label: "Paid Ads", pct: 24, bar: "bg-blue-500", dot: "bg-blue-500" },
  { label: "Social", pct: 14, bar: "bg-violet-500", dot: "bg-violet-500" },
];

// Smooth revenue trend, shared by the stroke and the area fill.
const chartLine =
  "M0,55 L23,50 L46,42 L70,44 L93,35 L116,28 L140,30 L163,20 L186,18 L210,12 L233,8 L256,6 L280,4";

export default function DashboardMockup() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-200, 200], [6, -6]), { stiffness: 200, damping: 30 });
  const rotY = useSpring(useTransform(mx, [-200, 200], [-6, 6]), { stiffness: 200, damping: 30 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      style={{ perspective: "1200px" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      dir="ltr"
    >
      {/* Floats use pure-CSS keyframes (compositor thread) instead of JS
         animation loops, so they stay smooth and pause when off-screen. */}
      <div className="animate-float-med absolute -top-5 -left-6 z-20 bg-white rounded-2xl border border-border shadow-card px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
          <ArrowUpRight className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">New lead!</p>
          <p className="text-[10px] text-muted-foreground">From Google Search</p>
        </div>
      </div>

      <div className="animate-float-slow absolute -bottom-4 -right-6 z-20 bg-white rounded-2xl border border-border shadow-card px-4 py-3">
        <p className="text-[10px] text-muted-foreground mb-0.5">Monthly Revenue</p>
        <p className="text-sm font-black text-foreground">
          $24,800 <span className="text-emerald-500 text-xs">↑ 32%</span>
        </p>
      </div>

      <div className="animate-float-fast absolute top-1/3 -right-10 z-20 bg-primary rounded-2xl shadow-lg shadow-primary/30 px-3 py-2 flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {["bg-yellow-300", "bg-pink-300", "bg-blue-300"].map((c, i) => (
            <div key={i} className={`w-5 h-5 rounded-full ${c} border border-white`} />
          ))}
        </div>
        <p className="text-[10px] text-[#1f1300] font-bold">30+ Clients</p>
      </div>

      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="bg-white rounded-2xl border border-border shadow-float overflow-hidden"
      >
        <div className="bg-[#f8fafc] border-b border-border px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-muted-foreground border border-border flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            yourwebsite.com
          </div>
          {/* Real-time pulse — reads as a live product, not a static image. */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold text-muted-foreground">Live</span>
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Visitors", value: "4,821", change: "+18%" },
              { label: "Revenue", value: "$12.4k", change: "+24%" },
              { label: "Leads", value: "143", change: "+41%" },
            ].map((s) => (
              <div key={s.label} className="bg-[#f8fafc] rounded-xl p-3">
                <p className="text-[10px] text-muted-foreground mb-1">{s.label}</p>
                <p className="text-sm font-black text-foreground">{s.value}</p>
                <p className="text-[10px] text-emerald-500 font-semibold">{s.change}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#f8fafc] rounded-xl p-3 mb-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold text-foreground">Revenue Growth</p>
              <span className="text-[10px] text-amber-700 font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                This month
              </span>
            </div>
            <svg viewBox="0 0 280 64" className="w-full h-14" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fades in just behind the drawing line. */}
              <motion.path
                d={`${chartLine} L280,64 L0,64 Z`}
                fill="url(#cg)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              />
              {/* Line draws itself in on load. */}
              <motion.path
                d={chartLine}
                fill="none"
                stroke="#ea580c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Traffic sources — ties the mock to SEO / advertising / marketing work. */}
          <div className="bg-[#f8fafc] rounded-xl p-3">
            <p className="text-xs font-bold text-foreground mb-3">Traffic Sources</p>
            <div className="space-y-2.5">
              {trafficSources.map((s, i) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${s.dot} shrink-0`} />
                  <span className="text-[10px] text-muted-foreground w-24 shrink-0">{s.label}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-border/60 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${s.bar}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 0.9, delay: 1.2 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-foreground w-8 text-right shrink-0">
                    {s.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
