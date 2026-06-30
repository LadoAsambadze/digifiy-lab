"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT } from "@/components/i18n/I18nProvider";

export default function Cta() {
  const t = useT();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl overflow-hidden bg-[#0f0f14] p-10 sm:p-16 text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/25 rounded-full blur-[100px] pointer-events-none animate-orb-1" />
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[200px] h-[200px] bg-violet-600/20 rounded-full blur-[60px] pointer-events-none animate-orb-2" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-white">
              {t.home.cta.title} <span className="gradient-text">{t.home.cta.titleHighlight}</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">{t.home.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <LocaleLink href="/contact">
                <Button size="lg" className="bg-primary hover:bg-amber-600 text-[#1f1300] rounded-full px-10 h-13 shadow-brand transition-all duration-300 gap-2 text-base font-black group w-full sm:w-auto">
                  {t.common.startYourProject}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
                </Button>
              </LocaleLink>
              <LocaleLink href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-13 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 gap-2 font-semibold w-full sm:w-auto">
                  {t.common.seeOurWork}
                </Button>
              </LocaleLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
