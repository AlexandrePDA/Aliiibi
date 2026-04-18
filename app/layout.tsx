import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aliiibi.app"), // ⚠️ remplacer si le domaine change
  title: "ALIIIBI — Le blind-test qui trahit tout le monde",
  description:
    "Un jeu de soirée où tes goûts musicaux te condamnent. Devine qui a mis quoi — avant qu'on te grille.",
  keywords: [
    "blind test",
    "jeu de soirée",
    "musique",
    "iOS",
    "iPhone",
    "jeu musical",
    "aliiibi",
  ],
  authors: [{ name: "ALIIIBI" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aliiibi.app",
    siteName: "ALIIIBI",
    title: "ALIIIBI — Le blind-test qui trahit tout le monde",
    description:
      "Un jeu de soirée où tes goûts musicaux te condamnent. Devine qui a mis quoi — avant qu'on te grille.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ALIIIBI — Le blind-test musical",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALIIIBI — Le blind-test qui trahit tout le monde",
    description:
      "Un jeu de soirée où tes goûts musicaux te condamnent. Devine qui a mis quoi — avant qu'on te grille.",
    images: ["/og-image.png"],
  },
  appleWebApp: {
    title: "ALIIIBI",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
