"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import LocaleLink from "@/components/i18n/LocaleLink";
import Logo from "@/components/shared/Logo";
import { useT } from "@/components/i18n/I18nProvider";

export default function Footer() {
  const t = useT();

  const companyLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.services, href: "/services" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.news, href: "/news" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0f0f14] text-white">
      {/* Gradient hairline + warm glow */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -top-40 start-1/4 h-[360px] w-[520px] rounded-full bg-primary/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <LocaleLink href="/" className="mb-4 flex items-center">
              <Logo dark />
            </LocaleLink>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:hello@digifylab.com" className="flex items-center gap-2.5 text-white/50 transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> hello@digifylab.com
              </a>
              <a href="tel:+995555123456" dir="ltr" className="flex items-center gap-2.5 text-white/50 transition-colors hover:text-primary rtl:flex-row-reverse rtl:justify-end">
                <Phone className="h-4 w-4 text-primary" /> +995 555 123 456
              </a>
              <span className="flex items-center gap-2.5 text-white/50">
                <MapPin className="h-4 w-4 text-primary" /> {t.contact.page.locationValue}
              </span>
            </div>
          </div>

          {/* Company links */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <LocaleLink href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/40">
              {t.footer.servicesTitle}
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <LocaleLink href="/services" className="text-sm text-white/50 transition-colors hover:text-white">
                    {label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} Digify Lab · {t.footer.rights}</p>
          <LocaleLink href="/contact" className="font-medium text-primary transition-colors hover:text-amber-400">
            {t.footer.ctaLink} →
          </LocaleLink>
        </div>
      </div>
    </footer>
  );
}
