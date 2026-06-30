"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Handshake, Eye, Users, Award, Coffee, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageHero from "@/components/shared/PageHero";
import CtaCard from "@/components/shared/CtaCard";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

const valueMeta = [
  { icon: Sparkles, color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Zap, color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Handshake, color: "text-pink-600", bg: "bg-pink-50" },
  { icon: Eye, color: "text-emerald-600", bg: "bg-emerald-50" },
];

const statMeta = [
  { icon: Users, value: "30+", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Award, value: "50+", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: Coffee, value: "3+", color: "text-pink-600", bg: "bg-pink-50" },
  { icon: Heart, value: "100%", color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function AboutPage() {
  const t = useT();
  const p = t.about.page;
  const statLabels = [
    t.home.stats.clients,
    t.home.stats.projects,
    t.home.stats.years,
    t.home.stats.satisfaction,
  ];

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle} />

      {/* Story + stats */}
      <section className="bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4 rounded-full border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-amber-700">
              {p.storyTitle}
            </Badge>
            <p className="text-lg leading-relaxed text-foreground/80">{p.story}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {statMeta.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col gap-3 rounded-2xl bg-white p-6 ring-1 ring-border shadow-soft transition-shadow duration-300 hover:shadow-card">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.bg}`}>
                    <Icon className={`h-5 w-5 ${s.color}`} />
                  </div>
                  <div>
                    <p className="text-3xl font-black gradient-text">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{statLabels[i]}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-black tracking-tight text-foreground sm:text-4xl"
          >
            {p.valuesTitle}
          </motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.map((v, i) => {
              const Icon = valueMeta[i].icon;
              return (
                <motion.div key={v.title} variants={fadeUp} className="rounded-2xl bg-white p-6 ring-1 ring-border shadow-soft transition-all duration-300 hover:shadow-card hover:ring-primary/30">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${valueMeta[i].bg}`}>
                    <Icon className={`h-5 w-5 ${valueMeta[i].color}`} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <CtaCard
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          primary={{ label: t.nav.cta, href: "/contact" }}
          secondary={{ label: t.common.viewWork, href: "/portfolio" }}
        />
      </section>
    </main>
  );
}
