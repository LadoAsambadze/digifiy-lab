import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Digify Lab — Digital Agency";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Brand-neutral (English) so one design renders for every locale —
// the OG renderer can't shape Arabic/Georgian glyphs with bundled fonts.
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0f0f14",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Warm aurora glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.55) 0%, rgba(244,63,94,0.25) 45%, rgba(15,15,20,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(15,15,20,0) 65%)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #facc15 0%, #f59e0b 55%, #fb923c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 48 48">
              <path
                d="M15 13.5 V34.5 M15 13.5 H20 A10.5 10.5 0 0 1 20 34.5 H15"
                stroke="#1f1300"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <rect x="34" y="31" width="7" height="4" rx="2" fill="#1f1300" />
            </svg>
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            <span style={{ color: "#f59e0b" }}>Digify</span>
            <span style={{ color: "#ffffff", marginLeft: 12 }}>Lab</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Websites, AI chatbots & business automation
          </div>
          <div style={{ fontSize: 30, color: "#f59e0b", fontWeight: 600 }}>
            Digital agency · Tbilisi, Georgia
          </div>
        </div>

        {/* Footer strip */}
        <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.45)" }}>
          digifylab.com
        </div>
      </div>
    ),
    size
  );
}
