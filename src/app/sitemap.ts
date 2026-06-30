import type { MetadataRoute } from "next";
import { locales, defaultLocale, localeMeta } from "@/i18n/config";

const SITE_URL = "https://digifylab.com";
const paths = ["", "/about", "/services", "/portfolio", "/why-website", "/news", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "/news" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales
              .map((l) => [localeMeta[l].code, `${SITE_URL}/${l}${path}`])
              .concat([["x-default", `${SITE_URL}/${defaultLocale}${path}`]])
          ),
        },
      });
    }
  }

  return entries;
}
