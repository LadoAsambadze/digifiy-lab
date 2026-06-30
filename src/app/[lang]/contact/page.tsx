"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/shared/PageHero";
import { useT } from "@/components/i18n/I18nProvider";

type Field = "name" | "email" | "subject" | "message";

export default function ContactPage() {
  const t = useT();
  const p = t.contact.page;
  const f = t.contact.form;

  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function update(field: Field, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const next: Partial<Record<Field, string>> = {};
    (["name", "email", "subject", "message"] as Field[]).forEach((field) => {
      if (!values[field].trim()) next[field] = f.required;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = f.invalidEmail;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // Simulated submission — wire to a real endpoint when available.
    setTimeout(() => {
      setStatus("sent");
      setValues({ name: "", email: "", subject: "", message: "" });
    }, 900);
  }

  const info = [
    { icon: Mail, label: p.email, value: "hello@digifylab.com", dir: "ltr" as const },
    { icon: Phone, label: p.phone, value: "+995 555 123 456", dir: "ltr" as const },
    { icon: MapPin, label: p.location, value: p.locationValue },
    { icon: Clock, label: p.hoursTitle, value: p.hours },
  ];

  const inputBase =
    "bg-[#f8fafc] border-border focus:border-primary h-11 rounded-lg w-full";

  return (
    <main className="min-h-screen pt-20 pb-20 bg-white">
      <PageHero badge={p.badge} title={p.title} highlight={p.titleHighlight} subtitle={p.subtitle} />

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <h2 className="text-2xl font-black text-foreground">{p.infoTitle}</h2>
            <div className="space-y-3">
              {info.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-[#f8fafc]">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{c.label}</p>
                      <p className="text-sm font-semibold text-foreground" dir={c.dir}>{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-white shadow-sm">
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="text-lg font-bold text-foreground mb-2">{f.success}</p>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-full"
                    onClick={() => setStatus("idle")}
                  >
                    {f.submit}
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">
                        {f.name} <span className="text-primary">*</span>
                      </label>
                      <Input
                        value={values.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder={f.namePlaceholder}
                        className={inputBase}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-foreground">
                        {f.email} <span className="text-primary">*</span>
                      </label>
                      <Input
                        type="email"
                        value={values.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder={f.emailPlaceholder}
                        className={inputBase}
                        dir="ltr"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      {f.subject} <span className="text-primary">*</span>
                    </label>
                    <Input
                      value={values.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      placeholder={f.subjectPlaceholder}
                      className={inputBase}
                      aria-invalid={!!errors.subject}
                    />
                    {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-foreground">
                      {f.message} <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      value={values.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={f.messagePlaceholder}
                      rows={5}
                      className="bg-[#f8fafc] border-border focus:border-primary rounded-lg resize-none w-full"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="w-full bg-primary hover:bg-amber-600 text-[#1f1300] rounded-xl h-12 shadow-brand hover:shadow-primary/40 transition-all duration-300 gap-2 font-bold disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    {status === "sending" ? f.sending : f.submit}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
