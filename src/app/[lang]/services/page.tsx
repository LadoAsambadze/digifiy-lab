"use client";

import { motion } from "framer-motion";
import {
  Code2, Bot, Workflow, Palette, TrendingUp, Smartphone,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import CtaCard from "@/components/shared/CtaCard";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

const meta = [
  { icon: Code2, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Bot, color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Workflow, color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Palette, color: "text-pink-600", bg: "bg-pink-50" },
  { icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Smartphone, color: "text-orange-600", bg: "bg-orange-50" },
];

export default function ServicesPage() {
  const t = useT();
  const p = t.services.page;

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <PageHero
        badge={p.badge}
        title={p.title}
        highlight={p.titleHighlight}
        subtitle={p.subtitle}
      />

      {/* Services grid */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {t.services.items.map((s, i) => {
              const Icon = meta[i].icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl bg-white p-7 ring-1 ring-border shadow-soft transition-shadow duration-300 hover:shadow-card"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${meta[i].bg}`}>
                    <Icon className={`h-5 w-5 ${meta[i].color}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-black text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge={t.home.process.badge}
            title={`${t.home.process.title} ${t.home.process.titleHighlight}`.trim()}
            highlight={t.home.process.titleEnd || undefined}
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.process.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-border shadow-soft transition-shadow duration-300 hover:shadow-card"
              >
                <span className="absolute top-4 end-4 text-5xl font-black text-foreground/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-sm font-black text-amber-700">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-1.5 text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-16 sm:px-6 lg:px-8">
        <CtaCard
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          primary={{ label: t.common.startProject, href: "/contact" }}
          secondary={{ label: t.common.viewWork, href: "/portfolio" }}
        />
      </section>
    </main>
  );
}
