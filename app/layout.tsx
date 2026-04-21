import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://aliiibi.app";
const APP_NAME = "ALIIIBI";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ALIIIBI — Blind-test musical multijoueur | Jeu de soirée iOS",
    template: "%s | ALIIIBI",
  },
  description:
    "ALIIIBI est un blind-test musical multijoueur pour iPhone : chaque joueur choisit ses musiques en secret, les autres doivent deviner qui a mis quoi. Bluffez, accusez, survivez. Gratuit, jusqu'à 8 joueurs, iOS 17+.",

  keywords: [
    "blind test musical",
    "jeu de soirée",
    "jeu musical multijoueur",
    "blind test iPhone",
    "jeu iOS gratuit",
    "jeu de soirée musique",
    "deviner la musique",
    "jeu entre amis",
    "aliiibi",
    "blind test app",
    "jeu de bluff musical",
    "party game musique",
  ],

  authors: [{ name: APP_NAME, url: SITE_URL }],
  creator: APP_NAME,
  publisher: APP_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: APP_NAME,
    title: "ALIIIBI — Blind-test musical multijoueur | Jeu de soirée iOS",
    description:
      "Chaque joueur choisit ses musiques en secret. La playlist démarre. Les masques tombent. Blind-test musical multijoueur gratuit sur iPhone.",
    images: [
      {
        url: "/favicon.png",
        width: 1024,
        height: 1024,
        alt: "ALIIIBI — Logo de l'application blind-test musical",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "ALIIIBI — Blind-test musical multijoueur",
    description:
      "Chaque joueur choisit ses musiques en secret. La playlist démarre. Les masques tombent. Gratuit sur iPhone.",
    images: ["/favicon.png"],
  },

  appleWebApp: {
    title: APP_NAME,
    statusBarStyle: "black-translucent",
  },

  category: "game",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

// JSON-LD: MobileApplication schema (SEO + GEO — lisible par moteurs IA)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: APP_NAME,
  url: SITE_URL,
  description:
    "ALIIIBI est un jeu de soirée blind-test musical multijoueur pour iPhone. Chaque joueur sélectionne ses musiques en secret. Pendant la partie, les autres joueurs écoutent et tentent de deviner qui a mis chaque morceau. Bluffez, accusez, survivez.",
  operatingSystem: "iOS 17+",
  applicationCategory: "GameApplication",
  applicationSubCategory: "Party Game",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Blind-test musical multijoueur",
    "Jusqu'à 8 joueurs",
    "Rôles secrets — Mode Infiltré",
    "Titres et scores par manche",
    "Fonctionne sans connexion internet",
  ],
  inLanguage: "fr",
  author: {
    "@type": "Organization",
    name: APP_NAME,
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "DownloadAction",
    target: "https://apps.apple.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
