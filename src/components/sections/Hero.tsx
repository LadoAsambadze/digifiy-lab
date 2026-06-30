"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/i18n/LocaleLink";
import DashboardMockup from "@/components/sections/DashboardMockup";
import LightRays from "@/components/sections/LightRays";
import { useT } from "@/components/i18n/I18nProvider";

/* ── Word-by-word headline reveal with gradient highlight.
     Splits on the highlight phrase first so it works in every
     language, including Japanese (no spaces). Original whitespace
     is preserved exactly. ── */
function WordReveal({ text, highlight }: { text: string; highlight?: string }) {
  const segments =
    highlight && text.includes(highlight)
      ? [
          { txt: text.split(highlight)[0], hl: false },
          { txt: highlight, hl: true },
          { txt: text.split(highlight).slice(1).join(highlight), hl: false },
        ]
      : [{ txt: text, hl: false }];

  let wordIndex = 0;
  return (
    <>
      {segments.map((seg, si) =>
        seg.txt.split(/(\s+)/).map((token, ti) => {
          if (!token) return null;
          if (/^\s+$/.test(token)) return <span key={`s${si}-${ti}`}>{token}</span>;
          const idx = wordIndex++;
          return (
            <motion.span
              key={`w${si}-${ti}`}
              className="inline-block"
              initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.05 + idx * 0.05,
                duration: 0.55,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <span className={seg.hl ? "gradient-text" : undefined}>{token}</span>
            </motion.span>
          );
        })
      )}
    </>
  );
}

export default function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  // Pause the continuous background animations once the hero scrolls away,
  // so the rest of the page scrolls without burning frames on off-screen work.
  const inView = useInView(ref, { amount: 0 });

  return (
    <section
      ref={ref}
      className={`relative flex min-h-svh flex-col overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:h-svh lg:max-h-svh lg:min-h-[660px] lg:pt-20 lg:pb-0${inView ? "" : " hero-idle"}`}
    >
      {/* ── Stripe-style diagonal light beam across the full hero ── */}
      <LightRays />

      {/* Soft warm wash so the headline side continues the gradient
         instead of being a flat white block (kept faint for text contrast). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 inset-s-0 w-[62%] bg-[radial-gradient(75%_65%_at_18%_38%,rgba(245,158,11,0.13),rgba(251,113,133,0.05)_46%,transparent_72%)]"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <div className="flex flex-1 flex-col text-center lg:block lg:text-left">
            {/* Headline + subtitle — vertically centered on mobile, top-aligned on desktop */}
            <div className="my-auto lg:my-0">
              {/* Headline */}
              <h1 className="text-[clamp(2.1rem,4.2vw,3.3rem)] font-black leading-[1.06] tracking-tight text-foreground">
                <WordReveal text={t.home.heroLine} highlight={t.home.heroHighlight} />
              </h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
                className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-500 lg:mx-0"
              >
                {t.home.heroSubtitle}
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55 }}
              className="mt-8 flex flex-col items-stretch gap-4 lg:items-start"
            >
              <LocaleLink href="/services">
                <button className="btn-shine group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#f7a92b] px-8 text-base font-bold text-white shadow-brand transition-all duration-200 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:w-96">
                  {t.common.chooseService}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                </button>
              </LocaleLink>
              <LocaleLink href="/portfolio">
                <button className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-foreground ring-1 ring-border shadow-soft transition-all duration-200 hover:bg-primary/5 hover:ring-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:w-96">
                  {t.common.viewWork}
                </button>
              </LocaleLink>
            </motion.div>
          </div>

          {/* Right column — dashboard mockup over the aurora (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
