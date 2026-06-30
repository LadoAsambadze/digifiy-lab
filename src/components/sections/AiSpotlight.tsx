"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LocaleLink from "@/components/i18n/LocaleLink";
import { useT } from "@/components/i18n/I18nProvider";
import { stagger, fadeUp } from "@/lib/animations";

const pointIcons = [Bot, Workflow, BarChart3];

/* Chat messages animate in sequence when the section scrolls into view. */
function ChatBubble({
  text,
  fromUser,
  delay,
}: {
  text: string;
  fromUser?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={fromUser ? "flex justify-end" : "flex justify-start"}
    >
      <div
        className={
          fromUser
            ? "max-w-[80%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm font-medium text-[#1f1300]"
            : "max-w-[80%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-2.5 text-sm text-white/90 ring-1 ring-white/10"
        }
      >
        {text}
      </div>
    </motion.div>
  );
}

export default function AiSpotlight() {
  const t = useT();
  const ai = t.home.ai;

  return (
    <section className="relative overflow-hidden bg-[#0f0f14] py-20 sm:py-24">
      {/* Warm glow + grain to match the hero's aurora language */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-orb-1 absolute -top-32 start-[10%] h-[420px] w-[420px] rounded-full bg-primary/15 blur-[110px]" />
        <div className="animate-orb-2 absolute -bottom-40 end-[5%] h-[460px] w-[460px] rounded-full bg-rose-500/10 blur-[120px]" />
        <div className="grain absolute inset-0 opacity-25 mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left — copy + points */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-5 rounded-full border-primary/30 bg-primary/15 px-4 py-1.5 text-sm text-primary">
                <Sparkles className="me-1.5 h-3.5 w-3.5" />
                {ai.badge}
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-black tracking-tight text-white sm:text-4xl"
            >
              {ai.title} <span className="gradient-text">{ai.titleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-lg text-lg leading-relaxed text-white/55">
              {ai.subtitle}
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-9 space-y-5">
              {ai.points.map((p, i) => {
                const Icon = pointIcons[i];
                return (
                  <li key={p.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/25">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-white/50">{p.desc}</p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-10">
              <LocaleLink href="/contact">
                <button className="btn-shine group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-[#1f1300] shadow-brand transition-all duration-200 hover:bg-amber-400">
                  {t.common.getStarted}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                </button>
              </LocaleLink>
            </motion.div>
          </motion.div>

          {/* Right — AI chat mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 shadow-float backdrop-blur-xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/30">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="absolute -bottom-0.5 -end-0.5 h-3 w-3 rounded-full border-2 border-[#0f0f14] bg-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{ai.chat.assistant}</p>
                  <p className="text-[11px] text-emerald-400">{ai.chat.online}</p>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 px-5 py-6">
                <ChatBubble text={ai.chat.m1} fromUser delay={0.2} />
                <ChatBubble text={ai.chat.m2} delay={0.7} />
                <ChatBubble text={ai.chat.m3} fromUser delay={1.2} />
                <ChatBubble text={ai.chat.m4} delay={1.7} />

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.3 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 ring-1 ring-white/10">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-white/50"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
