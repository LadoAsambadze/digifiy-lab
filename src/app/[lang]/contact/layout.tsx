import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, defaultLocale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(isLocale(lang) ? lang : defaultLocale);
  const title = dict.nav.contact;
  const description = dict.contact.page.subtitle;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
