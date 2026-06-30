"use client";

import { motion } from "framer-motion";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

export default function Process() {
  const t = useT();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-10">
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            {t.home.process.title} <span className="gradient-text">{t.home.process.titleHighlight}</span> {t.home.process.titleEnd}
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {t.process.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} className="relative p-7 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary text-[#1f1300] font-black flex items-center justify-center text-sm mb-5 shadow-brand">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-black text-base mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
