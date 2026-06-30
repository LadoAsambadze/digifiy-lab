"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/ui/project-visual";
import PageHero from "@/components/shared/PageHero";
import CtaCard from "@/components/shared/CtaCard";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

const projectMeta = [
  { color: "from-blue-500 to-violet-600", tags: ["Next.js", "Stripe", "PostgreSQL"] },
  { color: "from-violet-500 to-indigo-700", tags: ["React", "Tailwind", "Recharts"] },
  { color: "from-orange-500 to-rose-600", tags: ["Figma", "Next.js", "GSAP"] },
  { color: "from-emerald-500 to-green-700", tags: ["React Native", "Expo", "Firebase"] },
  { color: "from-slate-500 to-gray-700", tags: ["Next.js", "Sanity", "Tailwind"] },
  { color: "from-cyan-500 to-teal-700", tags: ["Next.js", "Mapbox", "Prisma"] },
];

export default function PortfolioPage() {
  const t = useT();
  const p = t.portfolio.page;
  const categories = t.portfolio.categories; // index 0 = "All"
  const [active, setActive] = useState(0);

  const items = t.portfolio.items.map((item, i) => ({ ...item, ...projectMeta[i] }));
  const filtered = active === 0 ? items : items.filter((it) => it.category === categories[active]);

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle}>
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-primary text-[#1f1300] shadow-brand"
                  : "bg-white text-muted-foreground ring-1 ring-border hover:text-foreground hover:ring-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            key={active}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white ring-1 ring-border shadow-soft transition-all duration-300 hover:shadow-card hover:ring-primary/20"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <ProjectVisual gradient={item.color} category={item.category} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4" /> {t.common.viewWork}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <Badge className="mb-2 border-0 bg-primary/8 text-xs text-amber-700">{item.category}</Badge>
                  <h3 className="mb-1 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5" dir="ltr">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <CtaCard
          title={p.ctaTitle}
          subtitle={p.ctaSubtitle}
          primary={{ label: t.common.startProject, href: "/contact" }}
        />
      </section>
    </main>
  );
}
