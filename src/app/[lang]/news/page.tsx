"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/ui/project-visual";
import PageHero from "@/components/shared/PageHero";
import { useT } from "@/components/i18n/I18nProvider";
import { fadeUp, stagger } from "@/lib/animations";

const postMeta = [
  "from-blue-500 to-violet-600",
  "from-emerald-500 to-teal-700",
  "from-orange-500 to-rose-600",
  "from-pink-500 to-fuchsia-700",
  "from-cyan-500 to-blue-700",
  "from-violet-500 to-indigo-700",
];

export default function NewsPage() {
  const t = useT();
  const p = t.news.page;
  const posts = t.news.posts;
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen pt-20 pb-20 bg-white">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle} />

      {/* Featured */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-border bg-white hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-64 lg:h-auto min-h-[260px]">
              <ProjectVisual gradient={postMeta[0]} category={featured.category} />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/8 text-amber-700 border-0">{featured.category}</Badge>
                <span className="text-xs text-muted-foreground">{featured.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {p.readMore} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> {featured.read} {p.minRead}
                </span>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {rest.map((post, i) => (
              <motion.article
                key={post.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl overflow-hidden border border-border bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/8 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <ProjectVisual gradient={postMeta[(i + 1) % postMeta.length]} category={post.category} />
                  <div className="absolute top-3 start-3 z-10">
                    <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full font-semibold border border-white/25">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs text-muted-foreground mb-2">{post.date}</span>
                  <h3 className="font-black text-base text-foreground mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      {p.readMore} <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {post.read} {p.minRead}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
