import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { getDictionary } from "@/i18n/dictionaries";
import {
  locales,
  defaultLocale,
  isLocale,
  getDirection,
  localeMeta,
  type Locale,
} from "@/i18n/config";
import { SITE_URL, siteTitles, siteDescriptions } from "@/i18n/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : defaultLocale;

  const languages = Object.fromEntries(
    locales.map((l) => [localeMeta[l].code, `${SITE_URL}/${l}`])
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: siteTitles[locale], template: `%s · Digify Lab` },
    description: siteDescriptions[locale],
    keywords: [
      "digital agency",
      "web design",
      "web development",
      "AI chatbots",
      "business automation",
      "branding",
      "SEO",
      "Tbilisi",
      "Georgia",
    ],
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: { ...languages, "x-default": `${SITE_URL}/${defaultLocale}` },
    },
    openGraph: {
      type: "website",
      siteName: "Digify Lab",
      title: siteTitles[locale],
      description: siteDescriptions[locale],
      url: `${SITE_URL}/${locale}`,
      locale,
    },
    twitter: { card: "summary_large_image", title: siteTitles[locale], description: siteDescriptions[locale] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const dir = getDirection(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider locale={lang} dict={dict}>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
