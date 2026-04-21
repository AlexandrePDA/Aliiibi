import ScrollReveal from "./ScrollReveal";
import { CONCEPT } from "@/lib/content";

export default function Concept() {
  return (
    <section
      id="concept"
      className="px-5 py-20 sm:py-28"
      aria-labelledby="concept-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-14">
          <h2
            className="text-3xl sm:text-4xl font-black leading-tight max-w-2xl mx-auto text-white"
          >
            Un{" "}
            <span style={{ color: "#9D9FE5" }}>blind-test musical</span>
            {" "}où chaque morceau est une preuve. Et chaque joueur, un suspect.
          </h2>
        </ScrollReveal>

        {/* Three pillars */}
        <ScrollReveal stagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CONCEPT.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,.03)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <span className="text-4xl" aria-hidden="true">{pillar.icon}</span>
              <h3 className="text-base font-black text-white tracking-wide">
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#C4C4C9" }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
