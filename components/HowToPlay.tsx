import ScrollReveal from "./ScrollReveal";
import { HOW_TO_PLAY } from "@/lib/content";

// Source: HowToPlayView.swift slides — onboarding content
export default function HowToPlay() {
  return (
    <section
      id="comment-jouer"
      className="px-5 py-20 sm:py-28"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(157,159,229,.05) 0%, transparent 70%)",
      }}
      aria-labelledby="howtoplay-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <ScrollReveal className="text-center mb-14">
          <p
            className="text-xs font-black tracking-widest uppercase mb-4"
            style={{ color: "#9D9FE5" }}
          >
            Mode d&apos;emploi
          </p>
          <h2
            id="howtoplay-heading"
            className="text-3xl sm:text-4xl font-black text-white"
          >
            {HOW_TO_PLAY.heading}
          </h2>
        </ScrollReveal>

        {/* Steps — stepper layout */}
        <div className="flex flex-col gap-0">
          {HOW_TO_PLAY.steps.map((step, i) => {
            const isLast = i === HOW_TO_PLAY.steps.length - 1;
            return (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="flex gap-5 sm:gap-8">
                  {/* Step number + connector */}
                  <div className="flex flex-col items-center shrink-0" style={{ width: 48 }}>
                    {/* Number circle */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full font-black text-sm shrink-0"
                      style={{
                        background: "rgba(157,159,229,.12)",
                        border: "1px solid rgba(157,159,229,.3)",
                        color: "#9D9FE5",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {step.num}
                    </div>
                    {/* Vertical connector */}
                    {!isLast && (
                      <div
                        className="flex-1 w-px mt-2 mb-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(157,159,229,.25), rgba(157,159,229,.05))",
                          minHeight: 32,
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-2 pb-10 ${isLast ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-3 mt-2.5">
                      <span className="text-2xl" aria-hidden="true">{step.emoji}</span>
                      <h3 className="text-lg font-black text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ color: "#C4C4C9" }}
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
