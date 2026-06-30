"use client";

import { motion } from "framer-motion";
import {
  Users, BarChart3, Clock, Trophy, Zap, ArrowRight,
  ShieldCheck, Clock3, Search, Target,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CtaCard from "@/components/shared/CtaCard";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

const statMeta = [
  { icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: BarChart3, color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Trophy, color: "text-orange-600", bg: "bg-orange-50" },
  { icon: Zap, color: "text-pink-600", bg: "bg-pink-50" },
];

const reasonMeta = [ShieldCheck, Clock3, Search, Target];

export default function WhyWebsitePage() {
  const t = useT();
  const p = t.why.page;

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle}>
        <LocaleLink href="/contact">
          <button className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 font-bold text-[#1f1300] shadow-brand transition-all duration-200 hover:bg-amber-400">
            {t.common.getStarted}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
          </button>
        </LocaleLink>
      </PageHero>

      {/* Stats */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.items.map((s, i) => {
              const Icon = statMeta[i].icon;
              return (
                <motion.div key={s.stat + i} variants={fadeUp} className="rounded-2xl bg-white p-6 ring-1 ring-border shadow-soft transition-shadow duration-300 hover:shadow-card">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${statMeta[i].bg}`}>
                    <Icon className={`h-5 w-5 ${statMeta[i].color}`} />
                  </div>
                  <p className="mb-2 text-4xl font-black gradient-text">{s.stat}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            {p.reasonsTitle}
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {p.reasons.map((r, i) => {
              const Icon = reasonMeta[i];
              return (
                <motion.div key={r.title} variants={fadeUp} className="flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-border shadow-soft transition-all duration-300 hover:shadow-card hover:ring-primary/20">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-bold text-foreground">{r.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <CtaCard
          dark
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          primary={{ label: t.common.startProject, href: "/contact" }}
          secondary={{ label: t.common.seeOurWork, href: "/portfolio" }}
        />
      </section>
    </main>
  );
}
