"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { getDirection } from "@/i18n/config";

interface I18nValue {
  locale: Locale;
  dict: Dictionary;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, dict, dir: getDirection(locale) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider");
  return ctx;
}

/** Shorthand for the dictionary. */
export function useT(): Dictionary {
  return useI18n().dict;
}

/** Current active locale. */
export function useLocale(): Locale {
  return useI18n().locale;
}
