"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/ui/project-visual";
import PageHero from "@/components/shared/PageHero";
import CtaCard from "@/components/shared/CtaCard";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

type ProjectMeta = { color: string; tags: string[]; image?: string; link?: string };

const projectMeta: ProjectMeta[] = [
  { color: "from-amber-600 to-rose-800", tags: ["Next.js", "Framer Motion", "Bookings"], image: "/portfolio/chateau-iveri.jpg", link: "https://www.chateauiveri.ge/en" },
  { color: "from-blue-600 to-slate-800", tags: ["Web Design", "Real Estate", "Multilingual"], image: "/portfolio/sbuilding.jpg", link: "https://sbuilding.ge/en" },
  { color: "from-slate-600 to-zinc-800", tags: ["Web Design", "Real Estate", "Investment"], image: "/portfolio/aisigroup.jpg", link: "https://aisigroup.ge/en" },
  { color: "from-emerald-600 to-teal-800", tags: ["Web Design", "Tourism", "Booking"], image: "/portfolio/daudtravel.jpg", link: "https://daudtravel.com/en" },
  { color: "from-sky-600 to-blue-800", tags: ["Web Design", "Real Estate", "Property Listings"], image: "/portfolio/unitedcompany.jpg", link: "https://unitedcompany.ge/?lang=en" },
  { color: "from-green-600 to-emerald-800", tags: ["Web App", "Matching", "Booking"], image: "/portfolio/roommate.jpg", link: "https://roommate.ge/en" },
  { color: "from-indigo-600 to-blue-900", tags: ["Web Design", "Consulting", "Multilingual"], image: "/portfolio/prestigeaudit.jpg", link: "https://prestigeaudit.ge/" },
  { color: "from-cyan-600 to-slate-800", tags: ["Web Design", "Certification", "Booking"], image: "/portfolio/gbvaluation.jpg", link: "https://www.gbvaluation.ge/en" },
  { color: "from-red-600 to-blue-900", tags: ["Web Design", "Healthcare", "Booking"], image: "/portfolio/geocaregroup.jpg", link: "https://geocaregroupllc.com/" },
];

export default function PortfolioPage() {
  const t = useT();
  const p = t.portfolio.page;

  const items = t.portfolio.items.map((item, i) => ({ ...item, ...projectMeta[i] }));

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle} />

      {/* Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {items.map((item) => {
              const Card = item.link ? motion.a : motion.div;
              const linkProps = item.link
                ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
              <Card
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-white ring-1 ring-border shadow-soft transition-all duration-300 hover:shadow-card hover:ring-primary/20"
                {...linkProps}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <ProjectVisual gradient={item.color} category={item.category} image={item.image} />
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
              </Card>
              );
            })}
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
