"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, Users,
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
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-8">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.why.title} <span className="gradient-text">{t.home.why.titleHighlight}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {t.why.items.map((w, i) => {
            const Icon = whyMeta[i].icon;
            return (
              <motion.div
                key={w.stat + i}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-white p-5 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${whyMeta[i].bg}`}>
                  <Icon className={`h-5 w-5 ${whyMeta[i].color}`} />
                </div>
                <p className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">{w.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

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
