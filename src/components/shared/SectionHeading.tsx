"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { stagger, fadeUp } from "@/lib/animations";

/* ── Centered section header: badge + title with gradient highlight. ── */
export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
}: {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-12 text-center"
    >
      {badge && (
        <motion.div variants={fadeUp}>
          <Badge className="mb-4 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-amber-700">
            {badge}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
      >
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
