"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Users,
  BarChart3, Clock, Trophy, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

const whyMeta = [
  { icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: BarChart3, color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Trophy, color: "text-orange-600", bg: "bg-orange-50" },
  { icon: Zap, color: "text-pink-600", bg: "bg-pink-50" },
];

export default function WhyWebsite() {
  const t = useT();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-10">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.why.title} <span className="gradient-text">{t.home.why.titleHighlight}</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridAutoRows: "180px" }}>
          {(() => {
            const w = t.why.items[0];
            const Icon = whyMeta[0].icon;
            return (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 row-span-2 p-8 rounded-3xl border border-border bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 end-0 w-48 h-48 bg-orange-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none rtl:-translate-x-1/3" />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${whyMeta[0].bg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-5 h-5 ${whyMeta[0].color}`} />
                  </div>
                  <p className="text-6xl sm:text-7xl font-black gradient-text leading-none mb-4">{w.stat}</p>
                  <p className="text-lg font-semibold text-foreground max-w-xs leading-snug">{w.text}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6">
                  {[t.home.why.labels.credibility, t.home.why.labels.visibility, t.home.why.labels.sales].map((label) => (
                    <div key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })()}

          {t.why.items.slice(1).map((w, idx) => {
            const Icon = whyMeta[idx + 1].icon;
            return (
              <motion.div key={w.stat + idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }} className="p-6 rounded-3xl border border-border bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between">
                <div className={`w-9 h-9 rounded-xl ${whyMeta[idx + 1].bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${whyMeta[idx + 1].color}`} />
                </div>
                <div>
                  <p className="text-3xl font-black gradient-text leading-none mb-1">{w.stat}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{w.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-8">
          <LocaleLink href="/why-website">
            <Button variant="outline" className="rounded-full px-6 border-border hover:border-primary/40 hover:bg-primary/5 gap-2 font-semibold text-foreground">
              {t.common.readFullCase} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          </LocaleLink>
        </motion.div>
      </div>
    </section>
  );
}
