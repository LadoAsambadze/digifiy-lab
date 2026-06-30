"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

/* ── Testimonial card ── */
const testimonialMeta = [
  { init: "I", color: "bg-blue-500" },
  { init: "N", color: "bg-violet-500" },
  { init: "G", color: "bg-emerald-500" },
  { init: "A", color: "bg-pink-500" },
  { init: "D", color: "bg-orange-500" },
  { init: "T", color: "bg-cyan-500" },
];

function TestimonialCard({
  t,
  meta,
}: {
  t: { name: string; role: string; quote: string };
  meta: { init: string; color: string };
}) {
  return (
    <div className="w-72 shrink-0 bg-white rounded-2xl border border-border p-5 shadow-sm mx-3">
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-foreground/80 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-full ${meta.color} flex items-center justify-center text-white text-xs font-black shrink-0`}>
          {meta.init}
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">{t.name}</p>
          <p className="text-[10px] text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useT();
  const tm = t.testimonials;
  const row1 = [...tm, ...tm];
  const row2 = [...tm].reverse().concat([...tm].reverse());

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.testimonials.title} <span className="gradient-text">{t.home.testimonials.titleHighlight}</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="pause-on-hover overflow-hidden mb-4" dir="ltr">
        <div className="flex animate-marquee">
          {row1.map((item, i) => (
            <TestimonialCard key={i} t={item} meta={testimonialMeta[i % tm.length]} />
          ))}
        </div>
      </div>
      <div className="pause-on-hover overflow-hidden" dir="ltr">
        <div className="flex animate-marquee-rev">
          {row2.map((item, i) => (
            <TestimonialCard key={i} t={item} meta={testimonialMeta[tm.length - 1 - (i % tm.length)]} />
          ))}
        </div>
      </div>
    </section>
  );
}
