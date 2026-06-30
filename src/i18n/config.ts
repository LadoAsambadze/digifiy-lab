// ── i18n configuration ───────────────────────────────────────────────
// Supported locales, their display metadata, and direction.

export const locales = ["en", "ka", "ru", "ja", "ar", "tr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Locales that render right-to-left.
export const rtlLocales: Locale[] = ["ar"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export interface LocaleMeta {
  /** BCP-47 code used in <html lang> and hreflang. */
  code: string;
  /** Endonym — language name in its own language. */
  native: string;
  /** Short English label. */
  english: string;
  /** Emoji flag for the switcher. */
  flag: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { code: "en", native: "English", english: "English", flag: "🇬🇧" },
  ka: { code: "ka", native: "ქართული", english: "Georgian", flag: "🇬🇪" },
  ru: { code: "ru", native: "Русский", english: "Russian", flag: "🇷🇺" },
  ja: { code: "ja", native: "日本語", english: "Japanese", flag: "🇯🇵" },
  ar: { code: "ar", native: "العربية", english: "Arabic", flag: "🇸🇦" },
  tr: { code: "tr", native: "Türkçe", english: "Turkish", flag: "🇹🇷" },
};
