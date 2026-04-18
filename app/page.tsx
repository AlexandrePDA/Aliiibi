import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import HowToPlay from "@/components/HowToPlay";
import Titles from "@/components/Titles";
import ModeInfiltre from "@/components/ModeInfiltre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO ---------------------------------------------------- */}
        <Hero />

        {/* Thin separator */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.06), transparent)",
          }}
        />

        {/* CONCEPT -------------------------------------------------- */}
        <Concept />

        {/* Separator */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.06), transparent)",
          }}
        />

        {/* COMMENT JOUER -------------------------------------------- */}
        <HowToPlay />

        {/* Separator */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.06), transparent)",
          }}
        />

        {/* LES TITRES ----------------------------------------------- */}
        <Titles />

        {/* Separator */}
        <div
          aria-hidden="true"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.06), transparent)",
          }}
        />

        {/* MODE INFILTRÉ -------------------------------------------- */}
        <ModeInfiltre />
      </main>

      {/* FOOTER ------------------------------------------------------ */}
      <Footer />
    </>
  );
}
