import AppStoreBadge from "./AppStoreBadge";
import ScrollReveal from "./ScrollReveal";
import { MODE_INFILTRE } from "@/lib/content";

// Source: HowToPlayRolesView.swift slide 4 (body + note) + PremiumPaywallView.swift

export default function ModeInfiltre() {
  return (
    <section
      id="mode-infiltre"
      className="px-5 py-20 sm:py-28"
      aria-labelledby="infiltre-heading"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          {/* Section card with gold accent border */}
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,226,112,.05) 0%, rgba(28,28,30,1) 60%)",
              border: "1px solid rgba(255,226,112,.2)",
              boxShadow: "0 0 60px rgba(255,226,112,.06)",
            }}
          >
            {/* Radial glow decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[-60px] right-[-60px] rounded-full blur-3xl"
              style={{
                width: 240,
                height: 240,
                background: "rgba(255,226,112,.07)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              {/* Left column — content */}
              <div className="flex-1">
                {/* Badge premium */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl">{MODE_INFILTRE.emoji}</span>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,226,112,.18)",
                      color: "#FFE270",
                      border: "1px solid rgba(255,226,112,.5)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    👑 {MODE_INFILTRE.badge}
                  </span>
                </div>

                <h2
                  id="infiltre-heading"
                  className="text-3xl sm:text-4xl font-black text-white mb-3"
                >
                  {MODE_INFILTRE.heading}
                </h2>

                <p
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#FFE270" }}
                >
                  {MODE_INFILTRE.tagline}
                </p>

                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: "#C4C4C9" }}
                >
                  {MODE_INFILTRE.body}
                </p>

                {/* Highlighted note (mirrors the note block in the SwiftUI slide) */}
                <div
                  className="flex gap-3 p-4 rounded-2xl mb-8"
                  style={{
                    background: "rgba(255,226,112,.06)",
                    border: "1px solid rgba(255,226,112,.15)",
                  }}
                >
                  <span className="text-xl shrink-0 mt-0.5">🕵️</span>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#C4C4C9", whiteSpace: "pre-line" }}
                  >
                    {MODE_INFILTRE.note}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={MODE_INFILTRE.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center font-bold px-8 py-4 rounded-2xl transition-all hover:opacity-80 focus-visible:opacity-80"
                  style={{
                    color: "#111111",
                    background: "#FFE270",
                    fontSize: 15,
                  }}
                  aria-label="Télécharger gratuitement ALIIIBI sur l'App Store"
                >
                  {MODE_INFILTRE.cta}
                </a>
              </div>

              {/* Right column — features + price */}
              <div className="w-full lg:w-72 shrink-0">
                {/* Price card */}
                <div
                  className="rounded-2xl p-5 mb-6 text-center"
                  style={{
                    background: "rgba(255,226,112,.07)",
                    border: "1px solid rgba(255,226,112,.18)",
                  }}
                >
                  <p
                    className="text-4xl font-black mb-1"
                    style={{ color: "#FFE270" }}
                  >
                    {MODE_INFILTRE.price}
                  </p>
                  <p className="text-sm" style={{ color: "#C4C4C9" }}>
                    {MODE_INFILTRE.priceNote}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-3" role="list">
                  {MODE_INFILTRE.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#C4C4C9" }}
                    >
                      <span
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base"
                        style={{
                          background: "rgba(255,226,112,.1)",
                        }}
                        aria-hidden="true"
                      >
                        {f.icon}
                      </span>
                      <span className="leading-relaxed pt-0.5">{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
