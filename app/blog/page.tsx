import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Conseils, stratégies et jeux de soirée | ALIIIBI",
  description:
    "Conseils pour bluffer au blind-test, stratégies du Mode Infiltré, idées de jeux de soirée musicaux. Tout ce qu'il faut savoir pour maîtriser Aliiibi.",
  alternates: {
    canonical: "https://aliiibi.app/blog",
  },
};

const articles = [
  {
    slug: "quest-ce-qualiiibi",
    date: "2025-04-01",
    readTime: "3 min",
    tag: "Présentation",
    title: "Aliiibi, c'est quoi exactement ?",
    intro:
      "Un blind-test musical où chaque morceau est une preuve. Et chaque joueur, un suspect.",
    body: `Aliiibi est un jeu de soirée pour iPhone qui réinvente le blind-test musical. Le principe est simple : chaque joueur sélectionne en secret ses propres musiques depuis Apple Music. Personne ne voit les choix des autres. Puis une playlist commune démarre, et là, tout change.

À chaque morceau qui passe, les joueurs doivent deviner : qui a mis ça ? Ils votent, argumentent, accusent. Mais ils peuvent aussi bluffer et orienter les soupçons vers quelqu'un d'autre. La tension monte au fil des morceaux. Les goûts musicaux trahissent. Les personnalités se révèlent.

En fin de manche, les masques tombent. La révélation : qui avait mis chaque titre ? Les scores s'affichent. Des titres sont attribués — L'Insaisissable si personne ne t'a démasqué, La Honte Suprême si tout le monde t'a vu venir. Et des bonus récompensent les meilleurs bluffeurs et les meilleurs enquêteurs.

Aliiibi fonctionne sur un seul iPhone partagé entre tous les joueurs. Pas besoin d'une application par personne. La version gratuite supporte jusqu'à 4 joueurs avec 4 morceaux chacun. Aliiibi+ (4,99 € achat unique) monte à 8 joueurs, 6 morceaux par joueur, et débloque le Mode Infiltré.`,
  },
  {
    slug: "comment-bluffer-au-blind-test",
    date: "2025-04-10",
    readTime: "4 min",
    tag: "Stratégie",
    title: "Comment bien bluffer au blind-test Aliiibi",
    intro:
      "Être discret ne suffit pas. Voici les vraies techniques pour rester insaisissable.",
    body: `Bluffer dans Aliiibi, c'est un art. Le but n'est pas simplement de mettre des musiques inattendues — c'est de construire une identité musicale fausse convaincante. Voici ce qui fonctionne vraiment.

**Mixer les genres stratégiquement.** Si vous êtes connu pour le rap, glissez un titre de variété française. Mais pas trop différent non plus, sinon c'est suspect. L'objectif est de semer le doute, pas de vous rendre méconnaissable.

**Observer les réactions.** Pendant que les morceaux passent, regardez qui sourit, qui grimace, qui se trahit. Ces informations valent autant que votre propre stratégie.

**Accuser les innocents avec conviction.** Quand vient votre tour de voter, désignez quelqu'un d'autre avec assurance. Une accusation hésitante attire l'attention sur vous. Une accusation confiante détourne les soupçons.

**Préparer une couverture.** Avant la partie, décidez d'un style musical "factice" cohérent. Mettez 2-3 titres de ce style pour crédibiliser votre bluff. Le troisième morceau est le plus dangereux — les autres commencent à identifier des patterns.

**Le silence est une stratégie.** Ne défendez pas chaque morceau. Les joueurs qui argumentent trop souvent sur "c'est pas moi ça" finissent par se griller. Rester calme et observer, c'est parfois la meilleure position.

Le titre L'Insaisissable (+20 pts) récompense ceux que personne ne grille. Mais rappelez-vous : Le Fin Limier (+30 pts) récompense celui qui a trouvé seul. Dans Aliiibi, même la défaite des autres peut être une victoire pour quelqu'un.`,
  },
  {
    slug: "mode-infiltre-explique",
    date: "2025-04-20",
    readTime: "5 min",
    tag: "Mode Infiltré",
    title: "Le Mode Infiltré d'Aliiibi : rôles secrets et stratégies",
    intro:
      "Disponible avec Aliiibi+, le Mode Infiltré transforme complètement la dynamique du jeu.",
    body: `Le Mode Infiltré est le mode premium d'Aliiibi, disponible avec l'abonnement Aliiibi+ (4,99 € achat unique). Il ajoute une couche de complexité stratégique que le blind-test classique n'a pas : les rôles secrets.

**Comment ça fonctionne ?**

Au début de la partie, chaque joueur reçoit un rôle secret sur son iPhone. Ces rôles changent les objectifs de chacun pendant la partie. Certains joueurs sont là pour passer inaperçus, d'autres pour démasquer, d'autres encore pour créer de la confusion parmi les joueurs.

**La dynamique de groupe change tout.**

Dans le Mode Infiltré, vous ne savez pas seulement ce que vos amis ont mis — vous ne savez pas non plus quels sont leurs vrais objectifs. Un joueur qui semble vous accuser innocemment pourrait très bien remplir une mission secrète. Quelqu'un de particulièrement discret pourrait être un Infiltré.

**Stratégies pour chaque rôle.**

Si votre rôle est de rester discret : choisissez des musiques neutres que plusieurs personnes du groupe pourraient avoir mises. Évitez vos titres signature. Et surtout, ne participez pas trop activement aux accusations — ça attire l'attention.

Si votre rôle est de démasquer : concentrez-vous sur un joueur cible. Mémorisez ses réactions à chaque morceau. Les microréactions sont souvent plus révélatrices que les mots.

**Jusqu'à 8 joueurs.**

Le Mode Infiltré est conçu pour les grandes tablées. Aliiibi+ permet de jouer jusqu'à 8 joueurs, ce qui rend les dynamiques de groupe bien plus complexes et les parties bien plus longues. À 8 joueurs avec 6 morceaux chacun, une partie peut facilement durer 45 minutes à 1 heure.

Si vous cherchez un jeu de soirée qui combine musique, psychologie et bluff, le Mode Infiltré d'Aliiibi est fait pour vous.`,
  },
];

export default function Blog() {
  return (
    <>
      <main className="min-h-screen px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <header className="mb-16">
            <Link
              href="/"
              className="text-sm transition-colors hover:text-white mb-8 inline-block"
              style={{ color: "#8E8E93" }}
            >
              ← Retour
            </Link>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ color: "#9D9FE5" }}
            >
              Blog
            </h1>
            <p className="text-base sm:text-lg" style={{ color: "#C4C4C9" }}>
              Stratégies, conseils et tout ce qu&apos;il faut savoir pour
              maîtriser Aliiibi.
            </p>
          </header>

          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <article
                key={article.slug}
                style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
                className="pt-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded"
                    style={{
                      background: "rgba(157,159,229,.12)",
                      color: "#9D9FE5",
                    }}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs" style={{ color: "#8E8E93" }}>
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}{" "}
                    · {article.readTime} de lecture
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {article.title}
                </h2>

                <p
                  className="text-base font-medium mb-6 italic"
                  style={{ color: "#9D9FE5" }}
                >
                  {article.intro}
                </p>

                <div
                  className="text-sm sm:text-base leading-relaxed space-y-4"
                  style={{ color: "#C4C4C9" }}
                >
                  {article.body.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.includes(".**")) {
                      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                      return (
                        <p key={i}>
                          {parts.map((part, j) =>
                            part.startsWith("**") && part.endsWith("**") ? (
                              <strong key={j} className="text-white font-bold">
                                {part.slice(2, -2)}
                              </strong>
                            ) : (
                              part
                            )
                          )}
                        </p>
                      );
                    }
                    return <p key={i}>{paragraph}</p>;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
