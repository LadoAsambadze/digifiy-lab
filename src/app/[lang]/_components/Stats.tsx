"use client";

import { motion, animate, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

/* ── Animated counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => ctrl.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const statMeta = [
  { key: "projects", target: 50, suffix: "+" },
  { key: "clients", target: 30, suffix: "+" },
  { key: "years", target: 3, suffix: "+" },
  { key: "satisfaction", target: 100, suffix: "%" },
] as const;

export default function Stats() {
  const t = useT();

  return (
    <section className="py-14 border-y border-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statMeta.map((s) => (
            <motion.div key={s.key} variants={fadeUp} className="text-center">
              <p className="text-4xl font-black gradient-text">
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-1 font-medium">{t.home.stats[s.key]}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
