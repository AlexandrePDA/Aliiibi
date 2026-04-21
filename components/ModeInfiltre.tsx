import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { MODE_INFILTRE } from "@/lib/content";

export default function ModeInfiltre() {
  return (
    <section
      id="mode-infiltre"
      className="px-5 py-20 sm:py-28"
      aria-labelledby="infiltre-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          {/* Outer wrapper carries the running border — must NOT have overflow-hidden */}
          <div className="card-glow-border rounded-3xl">
          {/* Inner card clips decorative blobs */}
          <div
            className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,226,112,.05) 0%, rgba(28,28,30,1) 60%)",
              border: "1px solid rgba(255,226,112,.15)",
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

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              {/* Left column — all content */}
              <div className="flex-1 min-w-0">
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

                {/* Note block */}
                <div
                  className="flex gap-3 p-4 rounded-2xl mb-6"
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

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <p className="text-3xl font-black" style={{ color: "#FFE270" }}>
                    {MODE_INFILTRE.price}
                  </p>
                  <p className="text-sm" style={{ color: "#C4C4C9" }}>
                    {MODE_INFILTRE.priceNote}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-2.5 mb-8" role="list">
                  {MODE_INFILTRE.features.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "#C4C4C9" }}
                    >
                      <span
                        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base"
                        style={{ background: "rgba(255,226,112,.1)" }}
                        aria-hidden="true"
                      >
                        {f.icon}
                      </span>
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>

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

              {/* Right column — floating mockup */}
              <div className="hidden sm:flex shrink-0 items-center justify-center lg:w-64">
                <div
                  className="role-float relative"
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

                    {/* Screen — role.png shifted up to hide status bar */}
                    <div
                      className="absolute inset-0 overflow-hidden rounded-[38px]"
                    >
                      <Image
                        src="/role.png"
                        alt="Écran rôle secret dans le mode Infiltré"
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "center 70%",
                        }}
                        sizes="220px"
                      />
                    </div>
                  </div>

                  {/* Reflection glow */}
                  <div
                    className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 rounded-full blur-2xl"
                    style={{
                      width: 140,
                      height: 30,
                      background: "rgba(255,226,112,.2)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>{/* /card-glow-border */}
        </ScrollReveal>
      </div>
    </section>
  );
}
