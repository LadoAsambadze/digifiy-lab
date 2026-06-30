"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/shared/Logo";
import LocaleLink, { localized } from "@/components/i18n/LocaleLink";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import { useT, useLocale } from "@/components/i18n/I18nProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useT();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/why-website", label: t.nav.why },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname === localized(href, locale);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Full-width bar; content stays aligned to the page container inside. */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "border-b border-white/10 backdrop-blur-xl transition-all duration-300",
          scrolled ? "bg-[#16202e]/95 shadow-float" : "bg-[#16202e]/95 shadow-soft"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <LocaleLink href="/" className="group flex shrink-0 items-center">
          <Logo dark />
        </LocaleLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <LocaleLink
              key={link.href}
              href={link.href}
              className={cn(
                "relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                isActive(link.href)
                  ? "text-primary"
                  : "text-white/60 hover:text-white"
              )}
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-primary/15"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </LocaleLink>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <LocaleLink href="/contact">
            <button className="btn-shine group inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-bold text-[#1f1300] shadow-brand transition-all duration-200 hover:bg-amber-400">
              {t.nav.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
            </button>
          </LocaleLink>
        </div>

        {/* Mobile cluster */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-white p-0">
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <LocaleLink
                    href="/"
                    className="flex items-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Logo />
                  </LocaleLink>
                  <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="flex flex-1 flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <LocaleLink
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                          isActive(link.href)
                            ? "bg-primary/10 text-amber-700"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {link.label}
                      </LocaleLink>
                    </motion.div>
                  ))}
                </nav>
                <LocaleLink href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="mt-4 w-full rounded-full bg-primary font-bold text-[#1f1300] hover:bg-amber-400">
                    {t.nav.cta}
                  </Button>
                </LocaleLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </motion.nav>
    </header>
  );
}
