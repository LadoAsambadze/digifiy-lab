"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

/* ── Standard subpage header: dotted grid, warm glow, badge, title. ── */
export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  children,
}: {
  badge: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="grid-bg relative overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[380px] w-[620px] max-w-full -translate-x-1/2 rounded-full bg-orange-100/60 blur-[100px]"
      />
      <div className="relative mx-auto max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Badge className="mb-4 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-amber-700">
            {badge}
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-3xl font-black tracking-tight text-foreground sm:text-5xl"
        >
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-7"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
