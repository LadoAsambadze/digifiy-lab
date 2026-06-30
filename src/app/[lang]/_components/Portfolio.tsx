"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight, ChevronLeft, ChevronRight, MousePointer2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectVisual } from "@/components/ui/project-visual";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT, useI18n } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

/* ── 3D Portfolio carousel ── */
const carouselMeta = [
  { tags: ["Next.js", "Stripe"], color: "from-blue-500 to-violet-600" },
  { tags: ["React", "Recharts"], color: "from-violet-500 to-pink-600" },
  { tags: ["Figma", "GSAP"], color: "from-orange-500 to-rose-600" },
  { tags: ["React Native", "Firebase"], color: "from-emerald-500 to-teal-700" },
  { tags: ["Next.js", "Sanity"], color: "from-slate-500 to-gray-700" },
  { tags: ["Mapbox", "Prisma"], color: "from-cyan-500 to-blue-700" },
];

function Carousel3D() {
  const t = useT();
  const { dir } = useI18n();
  const projects = t.portfolio.items;
  const [active, setActive] = useState(0);
  const total = projects.length;
  const dragStart = useRef(0);
  const sign = dir === "rtl" ? -1 : 1;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  function getStyle(i: number) {
    let off = (((i - active) % total) + total) % total;
    if (off > total / 2) off -= total;
    const abs = Math.abs(off);
    const o = off * sign;
    if (abs > 2) return { x: o > 0 ? 900 : -900, scale: 0.5, opacity: 0, rotateY: 0, zIndex: 0 };
    if (abs === 2) return { x: o * 330, scale: 0.7, opacity: 0.35, rotateY: o * -20, zIndex: 1 };
    if (abs === 1) return { x: o * 360, scale: 0.84, opacity: 0.7, rotateY: o * -14, zIndex: 5 };
    return { x: 0, scale: 1, opacity: 1, rotateY: 0, zIndex: 10 };
  }

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden"
        style={{ perspective: "1400px", height: "420px" }}
        onMouseDown={(e) => (dragStart.current = e.clientX)}
        onMouseUp={(e) => {
          const delta = (e.clientX - dragStart.current) * sign;
          if (delta < -50) next();
          else if (delta > 50) prev();
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {projects.map((p, i) => {
            const s = getStyle(i);
            return (
              <motion.div
                key={p.title}
                animate={s}
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
                className="absolute w-[300px] sm:w-[340px] cursor-pointer select-none"
                style={{ zIndex: s.zIndex as number }}
                onClick={() => s.zIndex !== 10 && setActive(i)}
              >
                <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="h-48 relative overflow-hidden">
                    <ProjectVisual gradient={carouselMeta[i].color} category={p.category} />
                    <div className="absolute top-3 start-3 z-10">
                      <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-semibold border border-white/25">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-foreground mb-1.5">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex gap-1.5" dir="ltr">
                      {carouselMeta[i].tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-4">
        <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-border bg-white hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-colors duration-200">
          <ChevronLeft className="w-4 h-4 text-foreground rtl:rotate-180" />
        </button>
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-border bg-white hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center transition-colors duration-200">
          <ChevronRight className="w-4 h-4 text-foreground rtl:rotate-180" />
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1.5">
        <MousePointer2 className="w-3 h-3" /> {t.home.portfolio.dragHint}
      </p>
    </div>
  );
}

export default function Portfolio() {
  const t = useT();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.portfolio.title} <span className="gradient-text">{t.home.portfolio.titleHighlight}</span>
          </motion.h2>
          <motion.div variants={fadeUp}>
            <LocaleLink href="/portfolio">
              <Button variant="outline" className="rounded-full px-6 border-border hover:border-primary/40 hover:bg-primary/5 gap-2 font-semibold text-foreground">
                {t.common.viewAll} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Button>
            </LocaleLink>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Carousel3D />
        </motion.div>
      </div>
    </section>
  );
}
