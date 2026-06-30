import type { Locale } from "../config";
import en from "./en";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => Promise.resolve(en),
  ka: () => import("./ka").then((m) => m.default),
  ru: () => import("./ru").then((m) => m.default),
  ja: () => import("./ja").then((m) => m.default),
  ar: () => import("./ar").then((m) => m.default),
  tr: () => import("./tr").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
