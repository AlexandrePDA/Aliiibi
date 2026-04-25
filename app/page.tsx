import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import HowToPlay from "@/components/HowToPlay";
import Titles from "@/components/Titles";
import ModeInfiltre from "@/components/ModeInfiltre";
import Footer from "@/components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "C'est quoi Aliiibi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aliiibi est un jeu de soirée blind-test musical multijoueur sur iPhone. Chaque joueur choisit ses musiques en secret. Une playlist commune démarre et les autres joueurs doivent deviner qui a mis chaque morceau. Bluffez, accusez, survivez.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de joueurs faut-il pour jouer à Aliiibi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La version gratuite d'Aliiibi supporte jusqu'à 4 joueurs. Avec Aliiibi+ (achat unique à 4,99 €), vous pouvez jouer jusqu'à 8 joueurs sur un seul iPhone.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il Apple Music pour jouer à Aliiibi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Aliiibi utilise Apple MusicKit pour la diffusion musicale. Chaque joueur doit avoir accès à Apple Music sur son iPhone pour sélectionner et écouter les morceaux pendant la partie.",
      },
    },
    {
      "@type": "Question",
      name: "Aliiibi est-il gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, Aliiibi est gratuit à télécharger sur l'App Store. La version gratuite permet de jouer jusqu'à 4 joueurs avec 4 morceaux par joueur. Aliiibi+ est un achat unique à 4,99 € qui débloque jusqu'à 8 joueurs, 6 morceaux par joueur, le Mode Infiltré et l'historique des parties.",
      },
    },
    {
      "@type": "Question",
      name: "Qu'est-ce que le Mode Infiltré dans Aliiibi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le Mode Infiltré est un mode de jeu premium disponible avec Aliiibi+. Des rôles secrets sont attribués en début de partie : certains joueurs sont là pour bluffer, d'autres pour piéger, d'autres encore pour démasquer. Ce mode ajoute une couche de stratégie et de trahison au blind-test classique.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment jouer à Aliiibi — Blind-test musical multijoueur",
  description:
    "Aliiibi est un jeu de soirée blind-test musical sur iPhone. Voici comment se déroule une partie.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choisir en secret",
      text: "Chaque joueur sélectionne ses musiques sur son iPhone sans que les autres ne voient. La sélection reste secrète jusqu'à la révélation.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "La playlist démarre",
      text: "Les morceaux défilent dans un ordre aléatoire. L'ambiance monte. Les regards se croisent. Impossible de savoir qui a mis quoi.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Écouter, analyser et accuser",
      text: "À chaque morceau, chaque joueur vote pour celui qu'il suspecte d'avoir mis ce titre. Il peut aussi bluffer et orienter les soupçons vers un autre joueur.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Les masques tombent",
      text: "Après chaque morceau, la révélation : qui avait mis ce titre ? Les scores s'affichent, les titres sont attribués (L'Insaisissable, La Honte Suprême, Le Fin Limier…) et les bonus de fin récompensent les meilleurs bluffeurs et enquêteurs.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, "\\u003c"),
        }}
      />
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
