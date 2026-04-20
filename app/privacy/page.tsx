import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — ALIIIBI",
  description:
    "Politique de confidentialité de l'application ALIIIBI. Vos données restent sur votre appareil.",
};

const sections = [
  {
    num: "1",
    title: "Données collectées",
    content:
      "Aliiibi ne collecte aucune donnée personnelle identifiable. Aucune donnée de jeu n'est transmise à des tiers.",
  },
  {
    num: "2",
    title: "Stockage local",
    content:
      "Les données de partie (scores, historique, préférences) sont stockées uniquement sur votre appareil. Elles ne sont jamais envoyées sur un serveur externe.",
  },
  {
    num: "3",
    title: "Musique",
    content: (
      <>
        L&apos;application utilise Apple MusicKit pour la diffusion musicale.
        L&apos;utilisation de MusicKit est soumise aux conditions d&apos;Apple,
        disponibles sur{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-white"
          style={{ color: "#9d9fe5" }}
        >
          apple.com/legal/internet-services/itunes
        </a>
        .
      </>
    ),
  },
  {
    num: "4",
    title: "Achats intégrés",
    content:
      "Les achats in-app (MODE INFILTRÉ) sont gérés par Apple via StoreKit. Nous ne recevons ni ne stockons vos informations de paiement.",
  },
  {
    num: "5",
    title: "Analytics",
    content:
      "Aucun outil d'analytics tiers n'est intégré à l'application. Aliiibi peut apparaître dans Apple App Analytics (App Store Connect), un service first-party d'Apple qui fournit des données agrégées et anonymisées. Apple en est le seul data controller ; aucune donnée individuelle ne nous est transmise.",
  },
  {
    num: "6",
    title: "Droits RGPD",
    content:
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits d'accès, de rectification, de suppression et de limitation de traitement de vos données. Pour toute demande, contactez-nous à l'adresse indiquée ci-dessous.",
  },
  {
    num: "7",
    title: "Mises à jour de cette politique",
    content:
      "Cette politique peut évoluer. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.",
  },
  {
    num: "8",
    title: "Contact",
    content: (
      <>
        Pour toute question relative à cette politique :{" "}
        <a
          href="mailto:dev.dakaprod@gmail.com?subject=Aliiibi%20-%20contact"
          className="underline underline-offset-2 transition-colors hover:text-white"
          style={{ color: "#9d9fe5" }}
        >
          dev.dakaprod@gmail.com
        </a>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <main className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white mb-12"
          style={{ color: "#8e8e93" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Retour
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#9d9fe5" }}>
            ALIIIBI
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-sm" style={{ color: "#8e8e93" }}>
            Dernière mise à jour : 20 avril 2026
          </p>
        </header>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.num}>
              <h2 className="text-base font-semibold mb-2 flex items-baseline gap-3">
                <span
                  className="text-xs font-mono tabular-nums"
                  style={{ color: "#9d9fe5" }}
                >
                  {section.num}.
                </span>
                {section.title}
              </h2>
              <p className="text-sm leading-relaxed text-justify" style={{ color: "#c4c4c9" }}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="mt-16"
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.06), transparent)",
          }}
        />
      </main>

      <Footer />
    </>
  );
}
