"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

/* ── 3-D tilt card ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 400, damping: 28 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 400, damping: 28 });
  const scale = useSpring(1, { stiffness: 400, damping: 28 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
    scale.set(1.03);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
    scale.set(1);
  }

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY, scale }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Transparent 3-D images (Microsoft Fluent Emoji, MIT-licensed) served via CDN.
const EMOJI_CDN = "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets";
const serviceMeta = [
  { img: "Laptop/3D/laptop_3d.png", glow: "bg-blue-200" },
  { img: "Robot/3D/robot_3d.png", glow: "bg-violet-200" },
  { img: "Gear/3D/gear_3d.png", glow: "bg-amber-200" },
  { img: "Artist palette/3D/artist_palette_3d.png", glow: "bg-pink-200" },
  { img: "Chart increasing/3D/chart_increasing_3d.png", glow: "bg-emerald-200" },
  { img: "Mobile phone/3D/mobile_phone_3d.png", glow: "bg-orange-200" },
];

export default function Services() {
  const t = useT();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="flex flex-col items-center text-center mb-10">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.services.title} <span className="gradient-text">{t.home.services.titleHighlight}</span>
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const m = serviceMeta[i];
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <TiltCard className="group h-full overflow-hidden rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
                  {/* Floating 3-D image (transparent PNG) over a soft colored halo */}
                  <div className="relative flex h-44 items-center justify-center">
                    <div className={`absolute h-32 w-32 rounded-full ${m.glow} opacity-60 blur-2xl`} />
                    <div className="absolute bottom-7 h-3 w-24 rounded-[50%] bg-black/10 blur-md" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI(`${EMOJI_CDN}/${m.img}`)}
                      alt={s.title}
                      width={112}
                      height={112}
                      loading="lazy"
                      className="relative h-28 w-28 object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Label */}
                  <div className="px-5 pb-6 text-center">
                    <h3 className="font-black text-lg text-foreground">{s.title}</h3>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-10">
          <LocaleLink href="/services">
            <Button variant="outline" className="rounded-full px-6 border-border hover:border-primary/40 hover:bg-primary/5 gap-2 font-semibold text-foreground">
              {t.common.exploreServices} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
