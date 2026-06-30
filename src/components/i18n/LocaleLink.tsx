"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { useLocale } from "./I18nProvider";
import type { Locale } from "@/i18n/config";

/** Prefix an app-internal href with the active locale segment. */
export function localized(href: string, locale: Locale): string {
  if (!href.startsWith("/")) return href; // external / anchor / mailto / tel
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

type LocaleLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Drop-in replacement for next/link that respects the current locale. */
const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  function LocaleLink({ href, ...props }, ref) {
    const locale = useLocale();
    return <Link ref={ref} href={localized(href, locale)} {...props} />;
  }
);

export default LocaleLink;
