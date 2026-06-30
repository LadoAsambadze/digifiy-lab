import type { Locale } from "./config";

export const SITE_URL = "https://digifylab.com";
export const SITE_NAME = "Digify Lab";

export const siteTitles: Record<Locale, string> = {
  en: "Digify Lab — Digital Agency in Tbilisi",
  ka: "Digify Lab — ციფრული სააგენტო თბილისში",
  ru: "Digify Lab — Цифровое агентство в Тбилиси",
  ja: "Digify Lab — トビリシのデジタルエージェンシー",
  ar: "Digify Lab — وكالة رقمية في تبليسي",
  tr: "Digify Lab — Tiflis'te Dijital Ajans",
};

export const siteDescriptions: Record<Locale, string> = {
  en: "Digital agency for websites, web apps, AI chatbots, and business automation — built to grow ambitious businesses.",
  ka: "ციფრული სააგენტო — ვებსაიტები, ვებაპლიკაციები, AI ჩატბოტები და ბიზნესის ავტომატიზაცია ამბიციური ბიზნესისთვის.",
  ru: "Цифровое агентство: сайты, веб-приложения, ИИ-чат-боты и автоматизация бизнеса для амбициозных компаний.",
  ja: "ウェブサイト、ウェブアプリ、AIチャットボット、業務自動化のデジタルエージェンシー。",
  ar: "وكالة رقمية: مواقع وتطبيقات وروبوتات دردشة ذكية وأتمتة أعمال لنمو الشركات الطموحة.",
  tr: "Web siteleri, uygulamalar, yapay zeka sohbet botları ve iş otomasyonu için dijital ajans.",
};

/** Short tagline shown on the generated OpenGraph image. */
export const ogTaglines: Record<Locale, string> = {
  en: "Websites · AI · Automation",
  ka: "ვებსაიტები · AI · ავტომატიზაცია",
  ru: "Сайты · ИИ · Автоматизация",
  ja: "ウェブ · AI · 自動化",
  ar: "مواقع · ذكاء اصطناعي · أتمتة",
  tr: "Web · Yapay Zeka · Otomasyon",
};
