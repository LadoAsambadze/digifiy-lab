"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/i18n/LocaleLink";
import { cn } from "@/lib/utils";

interface CtaAction {
  label: string;
  href: string;
}

/* ── Reusable end-of-page call-to-action card (light or dark). ── */
export default function CtaCard({
  title,
  subtitle,
  primary,
  secondary,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-10 text-center sm:p-12",
        dark
          ? "bg-[#0f0f14]"
          : "bg-white ring-1 ring-border shadow-card"
      )}
    >
      {dark && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[260px] w-[440px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
          />
          <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-25 mix-blend-soft-light" />
        </>
      )}

      <div className="relative">
        <h2
          className={cn(
            "text-2xl font-black tracking-tight sm:text-3xl",
            dark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={cn("mx-auto mt-3 max-w-md text-sm sm:text-base", dark ? "text-white/50" : "text-muted-foreground")}>
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LocaleLink href={primary.href}>
            <button className="btn-shine group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-bold text-[#1f1300] shadow-brand transition-all duration-200 hover:bg-amber-400 sm:w-auto">
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
            </button>
          </LocaleLink>
          {secondary && (
            <LocaleLink href={secondary.href}>
              <button
                className={cn(
                  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 font-semibold transition-all duration-200 sm:w-auto",
                  dark
                    ? "text-white ring-1 ring-white/20 hover:bg-white/10 hover:ring-white/40"
                    : "text-foreground ring-1 ring-border shadow-soft hover:bg-primary/5 hover:ring-primary/50"
                )}
              >
                {secondary.label}
              </button>
            </LocaleLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}
