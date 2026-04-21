// ============================================================
// lib/content.ts — All landing page content centralized
// Source: BlindLoup Swift project (AppColors, AppConstants,
//         HowToPlayView, HowToPlayRolesView, PlayerRoundCard,
//         HomeView, PremiumPaywallView, GameModeCard)
// ============================================================

export const HERO = {
  appName: "Aliiibi",
  taglineWords: [
    "Le",
    "jeu",
    "qui",
    "détruit",
    "des",
    "amitiés.",
    "Mais",
    "en",
    "rythme.",
  ],
  taglineAccentWord: "détruit", // index 3 in Swift, bold+accent color
  ctaLabel: "Télécharger sur l'App Store",
  ctaUrl: "https://apps.apple.com", // ⚠️ remplacer par l'URL réelle après publication
};

export const CONCEPT = {
  heading: "Le concept",
  pitch:
    "Un blind-test musical où chaque morceau est une preuve. Et chaque joueur, un suspect.",
  pillars: [
    {
      icon: "🎵",
      title: "Blind-test",
      text: "Chaque joueur choisit ses musiques en secret. La playlist démarre.",
    },
    {
      icon: "🕵️",
      title: "Enquête",
      text: "Écoute. Analyse. Accuse. Qui se cache derrière chaque morceau ?",
    },
    {
      icon: "🃏",
      title: "Bluff",
      text: "Personne ne te grille → tu marques des points. Simple. Cruel. Parfait.",
    },
  ],
};

// Source: HowToPlayView.swift — slides content
export const HOW_TO_PLAY = {
  heading: "Comment jouer",
  steps: [
    {
      num: "01",
      emoji: "🤫",
      title: "Choisir en secret",
      text: "Chaque joueur sélectionne ses musiques. Personne ne voit.",
    },
    {
      num: "02",
      emoji: "🎧",
      title: "La playlist démarre",
      text: "Les morceaux défilent. L'ambiance monte. Les regards se croisent.",
    },
    {
      num: "03",
      emoji: "🔍",
      title: "Écoute. Analyse. Accuse.",
      text: "À chaque morceau, vote pour le joueur que tu suspectes. Ou ment.",
    },
    {
      num: "04",
      emoji: "🎭",
      title: "Les masques tombent",
      text: "Révélation. Scores. Titres.\nSans oublier, des bonus de fin pour les meilleurs enquêteurs… et les bluffeurs imperturbables.",
    },
  ],
};

// Source: PlayerRoundCard.swift — RoundTitle enum (emoji, label, color, sarcasm)
export const TITLES = {
  heading: "Les titres",
  subtitle:
    "À chaque révélation, tu hérites d'un titre. Certains font rêver.\nCertains font honte. Tous sont mérités.",
  cards: [
    {
      emoji: "☠️",
      title: "HONTE SUPRÊME",
      color: "#E86060",
      points: "−10 pts",
      sarcasm:
        "Tu pensais être imprévisible. Tu avais l'originalité d'un générique de supermarché. Chaque suspect du groupe t'a désigné sans hésiter. C'est beau, dans le genre catastrophique.",
    },
    {
      emoji: "✨",
      title: "L'INSAISISSABLE",
      color: "#9D9FE5",
      points: "+20 pts",
      sarcasm:
        "Aucune trace. Aucun indice. Aucune pitié. Tu as semé tout le monde et tu le sais très bien.",
    },
    {
      emoji: "🕯️",
      title: "LE FIN LIMIER",
      color: "#FF9500",
      points: "+30 pts",
      sarcasm:
        "Là où tout le monde a raté, il a trouvé. Seul contre tous. C'est ça, le vrai flair.",
    },
    {
      emoji: "👂",
      title: "L'OREILLE ABSOLUE",
      color: "#9D9FE5",
      points: "+10 pts",
      sarcasm:
        "Pendant que les autres hésitaient, lui écoutait vraiment. Ça change tout.",
    },
  ],
};

// Source: HowToPlayRolesView.swift (slide index 3) + PremiumPaywallView.swift
export const MODE_INFILTRE = {
  badge: "ALIIIBI+",
  emoji: "🕵️",
  heading: "Mode Infiltré",
  tagline: "Le mode Enquête change tout.",
  body: "Ajoutez une couche de stratégie et de trahison avec des rôles secrets attribués en début de partie.",
  note: "Certains sont là pour bluffer. D'autres pour piéger. D'autres encore… pour souffrir.",
  features: [
    { icon: "👥", text: "Jusqu'à 8 joueurs (vs 4 en gratuit)" },
    { icon: "🎵", text: "Jusqu'à 6 morceaux par joueur" },
    { icon: "🎭", text: "Mode Infiltré avec rôles secrets" },
    { icon: "📋", text: "Historique des parties" },
    { icon: "👑", text: "Soutenir le développement" },
  ],
  price: "4,99€",
  priceNote: "Achat unique · À vie",
  cta: "Télécharger gratuitement",
  ctaUrl: "https://apps.apple.com", // ⚠️ remplacer par l'URL réelle après publication
};

export const FOOTER = {
  signature: "Fait avec suspicion. © ALIIIBI",
  links: [
    { label: "Politique de confidentialité", href: "/privacy" },
    //{ label: "Support", href: "mailto:support@aliiibi.app" },
  ],
  appStoreUrl: "https://apps.apple.com", // ⚠️ remplacer par l'URL réelle après publication
};
