"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronDown } from "lucide-react";
import { locales, localeMeta } from "@/i18n/config";
import { useLocale } from "./I18nProvider";
import { cn } from "@/lib/utils";

function persistLocale(locale: string) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

export default function LanguageSwitcher() {
  const current = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(locale: string) {
    if (locale === current) return setOpen(false);
    // Replace the leading locale segment of the current path.
    const segments = pathname.split("/");
    segments[1] = locale;
    const next = segments.join("/") || `/${locale}`;
    persistLocale(locale);
    setOpen(false);
    router.push(next);
    router.refresh();
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-8 items-center gap-1 rounded-full bg-white px-2 ring-1 ring-border transition-colors duration-200 hover:bg-primary/5 hover:ring-primary/40"
      >
        <span className="text-base leading-none">{localeMeta[current].flag}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute end-0 z-50 mt-2 w-40 origin-top overflow-hidden rounded-xl border border-border bg-white p-1 shadow-float"
        >
          {locales.map((locale) => {
            const meta = localeMeta[locale];
            const active = locale === current;
            return (
              <button
                key={locale}
                role="option"
                aria-selected={active}
                onClick={() => switchTo(locale)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm transition-colors duration-150",
                  active
                    ? "bg-primary/10 font-semibold text-amber-700"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <span className="text-base leading-none">{meta.flag}</span>
                <span className="flex-1 text-start">{meta.native}</span>
                {active && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
