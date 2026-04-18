"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { TITLES } from "@/lib/content";

// Mirrors PlayerRoundCard.swift styling:
// - bg: appNavy (#1C1C1E)
// - border: title.color.opacity(0.25)
// - title: font-black + kerning 1.5 + titleColor
// - sarcasm: footnote italic + appGreyLight
// Expandable on click — same UX as the native card.

function TitleCard({
  card,
}: {
  card: (typeof TITLES.cards)[number];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      className={`title-card text-left w-full rounded-2xl p-5 transition-all duration-200 ${
        expanded ? "expanded" : ""
      }`}
      style={{
        background: "#1C1C1E",
        border: `1px solid ${card.color}40`, // opacity 25%
        boxShadow: expanded
          ? `0 0 24px ${card.color}22`
          : "none",
        cursor: "pointer",
      }}
      onClick={() => setExpanded((v) => !v)}
      aria-expanded={expanded}
      aria-label={`${card.title} — ${card.points}. Appuyer pour lire le texte sarcastique.`}
    >
      {/* Line 1: emoji + title */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl leading-none" aria-hidden="true">
          {card.emoji}
        </span>
        <span
          className="text-sm font-black tracking-widest uppercase"
          style={{ color: card.color, letterSpacing: "0.12em" }}
        >
          {card.title}
        </span>
      </div>

      {/* Points pill */}
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-block text-xs font-black px-2.5 py-1 rounded-full"
          style={{
            background: `${card.color}18`,
            color: card.color,
            border: `1px solid ${card.color}30`,
          }}
        >
          {card.points}
        </span>
        <span className="text-xs" style={{ color: "#8E8E93" }}>
          {expanded ? "▲" : "▼"}
        </span>
      </div>

      {/* Divider */}
      {expanded && (
        <hr
          className="my-3"
          style={{ borderColor: `${card.color}30`, borderTopWidth: 1 }}
        />
      )}

      {/* Sarcasm text — shown when expanded */}
      <div className="sarcasm-text">
        <p
          className="text-xs italic leading-relaxed"
          style={{ color: "#C4C4C9" }}
        >
          {card.sarcasm}
        </p>
      </div>
    </button>
  );
}

export default function Titles() {
  return (
    <section
      id="titres"
      className="px-5 py-20 sm:py-28"
      aria-labelledby="titles-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-14">
          <p
            className="text-xs font-black tracking-widest uppercase mb-4"
            style={{ color: "#9D9FE5" }}
          >
            Système de titres
          </p>
          <h2
            id="titles-heading"
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            {TITLES.heading}
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "#8E8E93" }}
          >
            {TITLES.subtitle}
          </p>
        </ScrollReveal>

        {/* 2×2 grid — 1 col mobile, 2 col desktop */}
        <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TITLES.cards.map((card) => (
            <TitleCard key={card.title} card={card} />
          ))}
        </ScrollReveal>

        {/* Hint */}
        <ScrollReveal>
          <p
            className="text-center text-xs mt-6 italic"
            style={{ color: "#8E8E93" }}
          >
            Touche une carte pour lire le texte que tu mérites.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
