"use client";

import { useEffect, useState } from "react";
import AppStoreBadge from "./AppStoreBadge";
import { HERO } from "@/lib/content";

// Mirrors NeonTitleView from HomeView.swift — same color cycle
const NEON_COLORS = [
  "#9D9FE5", // appAccent — pervenche
  "#7BC47B", // scoreBonus — vert sauge
  "#FF9CC0", // player-4 — rose poudré
  "#72DDD4", // player-3 — menthe
  "#A89EFF", // player-5 — lavande
  "#FFAB76", // player-0 — saumon
];

// ── iPhone mockup — simulates RevealView screen
function IPhoneMockup() {
  return (
    <div
      className="iphone-float relative mx-auto"
      style={{ width: 220, height: 440 }}
      aria-hidden="true"
    >
      {/* Phone shell */}
      <div
        className="relative w-full h-full rounded-[40px] overflow-hidden"
        style={{
          background: "#0A0A0A",
          border: "2px solid #2C2C2E",
          boxShadow:
            "0 40px 80px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04), inset 0 0 0 2px rgba(255,255,255,.03)",
        }}
      >
        {/* Dynamic Island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full"
          style={{ width: 72, height: 22, background: "#000" }}
        />

        {/* Screen content — RevealView simulée */}
        <div className="flex flex-col items-center justify-center h-full gap-3 px-5 pt-10">
          {/* Album art placeholder */}
          <div
            className="rounded-2xl flex items-center justify-center text-3xl"
            style={{
              width: 90,
              height: 90,
              background: "#1C1C1E",
              border: "1px solid #2C2C2E",
            }}
          >
            🎵
          </div>

          {/* "Ce morceau appartenait à" */}
          <p
            className="text-xs font-medium text-center"
            style={{ color: "#8E8E93" }}
          >
            Ce morceau appartenait à
          </p>

          {/* Player name — color player-4 (rose) */}
          <p
            className="text-2xl font-black text-center leading-none"
            style={{ color: "#FF9CC0" }}
          >
            Dina
          </p>

          {/* Title badge — L'INSAISISSABLE */}
          <div
            className="badge-pulse flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{
              background: "rgba(157,159,229,.12)",
              border: "1px solid rgba(157,159,229,.4)",
            }}
          >
            <span className="text-xs">✨</span>
            <span
              className="text-xs font-black tracking-wider"
              style={{ color: "#9D9FE5" }}
            >
              L'INSAISISSABLE
            </span>
          </div>

          {/* Delta */}
          <p className="text-sm font-black" style={{ color: "#34C759" }}>
            +20 pts ↑
          </p>

          {/* CTA button skeleton */}
          <div
            className="w-full rounded-2xl py-3 mt-2 text-center"
            style={{
              background: "#9D9FE5",
              fontSize: 11,
              fontWeight: 700,
              color: "#111",
            }}
          >
            Manche suivante
          </div>
        </div>
      </div>

      {/* Reflection glow */}
      <div
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
        style={{
          width: 140,
          height: 30,
          background: "rgba(157,159,229,.2)",
        }}
      />
    </div>
  );
}

// ── Tagline animated word by word (mirrors TaglineView.swift)
function AnimatedTagline() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setVisibleCount(i);
        if (i >= HERO.taglineWords.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <p className="flex flex-wrap justify-center gap-x-1.5 gap-y-0 text-base sm:text-lg font-semibold">
      {HERO.taglineWords.map((word, i) => (
        <span
          key={i}
          className="tagline-word"
          style={{
            color: word === "détruit" ? "#9D9FE5" : "#C4C4C9",
            animationDelay: `${i * 0.1 + 0.3}s`,
            animationFillMode: "forwards",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

// ── Hero section
export default function Hero() {
  return (
    <header
      className="grain-overlay relative flex flex-col items-center justify-center gap-10 overflow-hidden px-5 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:flex-row lg:gap-20 lg:px-16 lg:pt-32"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(157,159,229,.12) 0%, transparent 70%)",
      }}
    >
      {/* Background radial blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 400,
            height: 400,
            top: "-10%",
            left: "10%",
            background: "rgba(157,159,229,.06)",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300,
            height: 300,
            bottom: "10%",
            right: "5%",
            background: "rgba(255,156,192,.05)",
          }}
        />
      </div>

      {/* Text block */}
      <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl gap-6">
        {/* App name */}
        <h1 className="neon-title text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white select-none">
          {HERO.appName}
        </h1>

        {/* Tagline */}
        <AnimatedTagline />

        {/* CTA */}
        <div className="mt-2">
          <AppStoreBadge href={HERO.ctaUrl} width={160} />
          <p className="mt-3 text-xs" style={{ color: "#8E8E93" }}>
            Gratuit · iPhone · iOS 17+
          </p>
        </div>
      </div>

      {/* iPhone mockup */}
      <div className="relative z-10 hidden sm:block lg:shrink-0">
        <IPhoneMockup />
      </div>
    </header>
  );
}
