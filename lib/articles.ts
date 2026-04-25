// ============================================================
// lib/articles.ts — All blog article content
// GEO-optimized: answers first, chiffres, Aliiibi vocabulary,
// internal + external backlinks, FAQ at the end of each article.
// Source for titles/colors/emojis: PlayerRoundCard.swift, HowToPlayRolesView.swift
// ============================================================

export type InlineContent =
  | string
  | { text: string; href: string; external?: boolean };

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "p-rich"; segments: InlineContent[] }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
      type: "cards";
      items: Array<{
        emoji: string;
        title: string;
        color: string;
        points?: string;
        text: string;
      }>;
    };

export interface Faq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  date: string;
  readTime: string;
  tag: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  blocks: Block[];
  faq: Faq[];
  related: string[];
}

const articles: Article[] = [
  // ── PAGE PILIER ──────────────────────────────────────────
  {
    slug: "blind-test-gouts-incompatibles",
    date: "2025-04-01",
    readTime: "5 min",
    tag: "Guide",
    title:
      "Comment jouer à un blind test quand tout le monde a des goûts musicaux incompatibles",
    metaTitle:
      "Blind test avec des goûts musicaux différents : la solution | ALIIIBI",
    metaDescription:
      "Le blind test classique favorise toujours le mélomane. Aliiibi inverse la logique : vos goûts musicaux deviennent une faiblesse que les autres vont exploiter. Guide complet.",
    keywords: [
      "blind test entre amis",
      "jeu ambiance soirée",
      "jeu musical entre amis",
      "blind test iOS",
      "jeu de bluff musical",
      "party game iPhone",
      "jeu sans Spotify",
      "jeu de soirée musique",
    ],
    intro:
      "Le problème des blind tests classiques ? C'est toujours le même mélomane qui gagne. Aliiibi inverse la logique : vos goûts musicaux ne sont plus un avantage, ils sont une faiblesse que les autres vont exploiter. En 90 secondes de setup, sans TV ni préparation, avec des goûts totalement différents, tout le monde joue à armes égales.",
    blocks: [
      {
        type: "h2",
        text: "Le problème des blind tests traditionnels",
      },
      {
        type: "p",
        text: "Dans un blind test classique, les règles avantagent systématiquement celui qui écoute le plus de musique. Il reconnaît les artistes, les albums, les années. Les autres s'ennuient ou devinent au hasard. Au bout de deux manches, tout le monde sait qui va gagner.",
      },
      {
        type: "p",
        text: "C'est encore pire quand les goûts divergent. Si vous êtes entre fans de rap, de metal, de variété française et d'électro, n'importe quel quiz musical va créer deux catégories : ceux qui connaissent, et ceux qui attendent que ça finisse.",
      },
      {
        type: "h2",
        text: "Ce que font les autres solutions",
      },
      {
        type: "p-rich",
        segments: [
          "Le blind test maison demande 2h de préparation à quelqu'un qui ne joue pas vraiment : il est le DJ, l'arbitre et le bouc émissaire si les questions sont trop dures. ",
          {
            text: "Jackbox Party Pack",
            href: "https://www.jackboxgames.com/",
            external: true,
          },
          " propose des jeux amusants mais demande une TV et une console. Notre ",
          {
            text: "comparatif complet des options de jeu musical",
            href: "/blog/comparatif-blind-test-jackbox-aliiibi",
          },
          " détaille les vraies contraintes de chaque solution. Les playlists Spotify partagées ? C'est bien pendant dix minutes.",
        ],
      },
      {
        type: "h2",
        text: "Ce que fait Aliiibi différemment",
      },
      {
        type: "p",
        text: "Aliiibi résout exactement ce problème. Chaque joueur choisit lui-même ses musiques : 4 titres en version gratuite, jusqu'à 6 avec Aliiibi+. Personne ne voit les choix des autres. Une playlist commune démarre, et là, le jeu change radicalement.",
      },
      {
        type: "p",
        text: "L'objectif n'est plus de reconnaître les titres. C'est de deviner qui les a mis. Ce qui signifie que la connaissance musicale compte moins que la connaissance psychologique des autres joueurs. Celui qui écoute du baroque peut très bien démasquer le fan de hip-hop, car il le connaît depuis 20 ans et sait qu'il met toujours du Drake quand il veut faire le mystérieux.",
      },
      {
        type: "p",
        text: "Résultat : les goûts très marqués deviennent des handicaps que les bons bluffeurs vont exploiter. Paradoxalement, avoir des goûts imprévisibles ou honteux est un avantage stratégique majeur dans Aliiibi.",
      },
      {
        type: "h2",
        text: "En pratique : lancer une partie",
      },
      {
        type: "ul",
        items: [
          "Un seul iPhone suffit, sans TV ni application par joueur",
          "Chaque joueur prend le téléphone à son tour pour sélectionner ses musiques depuis Apple Music (30 à 60 secondes par joueur)",
          "La playlist commune démarre automatiquement",
          "À chaque révélation, des titres sont attribués : L'Insaisissable, La Honte Suprême, Le Fin Limier...",
          "Version gratuite : jusqu'à 4 joueurs, 4 morceaux chacun. Aliiibi+ : 8 joueurs, 6 morceaux, Mode Infiltré",
        ],
      },
      {
        type: "p-rich",
        segments: [
          "L'app utilise ",
          {
            text: "Apple Music",
            href: "https://www.apple.com/fr/apple-music/",
            external: true,
          },
          " pour la diffusion, un abonnement actif est nécessaire sur l'iPhone utilisé. Une partie réunit typiquement 3 à 8 joueurs et dure de 20 à 45 minutes. Pour tirer le meilleur d'Aliiibi, il est utile de connaître les ",
          {
            text: "7 types de joueurs qui émergent à chaque partie",
            href: "/blog/7-types-de-joueurs-blind-test",
          },
          ", chacun ayant ses tells et ses angles morts.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il Apple Music pour jouer à Aliiibi ?",
        a: "Oui, Aliiibi utilise Apple MusicKit pour la diffusion musicale. Chaque joueur doit avoir accès à Apple Music sur l'iPhone utilisé pendant la partie.",
      },
      {
        q: "Peut-on jouer à Aliiibi sans être musicien ou mélomane ?",
        a: "Absolument, c'est même un avantage stratégique. Des goûts musicaux imprévisibles sont plus difficiles à deviner pour les autres joueurs. La connaissance musicale n'est pas requise, la connaissance psychologique de vos amis l'est.",
      },
      {
        q: "Combien de joueurs minimum pour jouer à Aliiibi ?",
        a: "3 joueurs suffisent pour une partie intéressante. L'idéal se situe entre 4 et 6 joueurs. Aliiibi+ permet d'aller jusqu'à 8 joueurs sur un seul iPhone.",
      },
      {
        q: "L'app Aliiibi fonctionne-t-elle sans connexion internet ?",
        a: "Oui, une fois téléchargée, Aliiibi fonctionne hors ligne. La connexion internet est uniquement nécessaire lors du téléchargement initial et pour accéder à Apple Music.",
      },
      {
        q: "Aliiibi est-il gratuit ?",
        a: "Oui, la version de base est gratuite sur l'App Store. Elle supporte jusqu'à 4 joueurs avec 4 morceaux chacun. Aliiibi+ est un achat unique à 4,99 € qui débloque jusqu'à 8 joueurs, 6 morceaux par joueur et le Mode Infiltré.",
      },
    ],
    related: [
      "comparatif-blind-test-jackbox-aliiibi",
      "7-types-de-joueurs-blind-test",
      "glossaire-aliiibi",
    ],
  },

  // ── LES 7 TYPES DE JOUEURS ────────────────────────────────
  {
    slug: "7-types-de-joueurs-blind-test",
    date: "2025-04-08",
    readTime: "4 min",
    tag: "Stratégie",
    title:
      "Les 7 types de joueurs dans un blind test (et comment les démasquer)",
    metaTitle:
      "Les 7 types de joueurs au blind test Aliiibi : guide stratégie",
    metaDescription:
      "Dans Aliiibi, il n'y a que 7 profils de joueurs. Si vous savez lesquels se trouvent autour de la table, vous avez déjà gagné. Guide des archétypes et stratégies pour les démasquer.",
    keywords: [
      "types de joueurs jeu de société",
      "stratégie blind test",
      "jeu de soirée stratégie",
      "comment gagner blind test",
      "jeu bluff amis",
      "psychologie jeu de soirée",
      "Aliiibi stratégie",
    ],
    intro:
      "Dans Aliiibi, tout le monde croit avoir une stratégie. En réalité, il n'y a que 7 profils de joueurs. Si vous savez lesquels se trouvent autour de la table avant même que la playlist démarre, vous avez déjà une longueur d'avance.",
    blocks: [
      {
        type: "h2",
        text: "Pourquoi les profils de joueurs comptent",
      },
      {
        type: "p",
        text: "Aliiibi est autant un jeu d'analyse comportementale qu'un blind test musical. Écouter les morceaux, c'est secondaire. Observer les réactions des autres joueurs pendant que la playlist tourne : sourires imperceptibles, regards fuyants, soudaine passivité. C'est là que se gagne la partie.",
      },
      {
        type: "p-rich",
        segments: [
          "Ces 7 archétypes correspondent directement aux titres que l'app attribue en fin de manche : Honte Suprême, Insaisissable, Fin Limier, Oreille Absolue. Leur ",
          {
            text: "définition complète et leurs points respectifs",
            href: "/blog/glossaire-aliiibi",
          },
          " sont détaillés dans le glossaire Aliiibi. Les reconnaître en temps réel, avant la révélation, c'est l'avantage des meilleurs joueurs.",
        ],
      },
      {
        type: "h2",
        text: "Les 7 archétypes",
      },
      {
        type: "ul",
        items: [
          "L'Oreille Absolue (+10 pts) : il reconnaît tout, l'artiste, l'album, l'année, parfois le producteur. Il gagne tous les blind tests classiques. Dans Aliiibi, il perd souvent parce qu'il se concentre sur la musique plutôt que sur les autres joueurs. Comment le démasquer : il sourit légèrement quand il reconnaît un titre, même les siens.",
          "Le Fin Limier (+30 pts) : il chasse les indices comportementaux, pas les titres. Il repère le micro-sourire d'un joueur quand son morceau passe, la légère tension des épaules, le regard trop neutre. Quand il parle, c'est précis. Comment le contrer : adoptez une expression fixe dès le début de la partie.",
          "L'Insaisissable (+20 pts) : la terreur silencieuse. Il met des musiques sans pattern identifiable, n'exprime rien, accuse de façon apparemment aléatoire. Personne ne le grille. Il gagne tranquillement pendant que les autres se déchirent. Comment le démasquer : tracer ses votes sur plusieurs manches révèle une logique cachée.",
          "La Honte Suprême (−10 pts) : soit il a voulu être subtil et tout le monde l'a vu venir, soit il a mis une chanson honteuse exprès pour brouiller les pistes et ça n'a pas fonctionné. Dans les deux cas, la punition est publique. Stratégie : accepter ce titre volontairement une fois peut déstabiliser les autres.",
          "Le Sniper (Mode Infiltré) : cible un seul joueur dès le premier titre. Vote systématiquement contre lui, quelle que soit la logique. Stratégie agressive qui peut faire gagner ou créer une coalition contre le Sniper. Le reconnaître : ses votes ne suivent pas la musique, ils suivent une personne.",
          "Le Complice (Mode Infiltré) : s'allie discrètement avec un autre joueur. Ils se couvrent mutuellement, votent rarement l'un contre l'autre. Très difficile à détecter dans les parties à 6-8 joueurs. Le démasquer : chercher deux joueurs dont les patterns de vote sont inversement corrélés.",
          "L'Innocent : n'a aucune stratégie. Met les musiques qu'il aime vraiment. Vote selon son instinct. Gagne parfois, car son imprévisibilité totale le protège mieux que n'importe quelle tactique consciente. C'est le joueur le plus dangereux à long terme.",
        ],
      },
      {
        type: "h2",
        text: "Comment utiliser ces archétypes en jeu",
      },
      {
        type: "p",
        text: "Identifier rapidement le profil de chaque joueur autour de la table, dès les deux premiers titres, vous donne un avantage structurel. L'Oreille Absolue va se concentrer sur la musique : profitez-en pour l'observer discrètement. Le Sniper va trop voter contre une même personne : retournez le groupe contre lui.",
      },
      {
        type: "p-rich",
        segments: [
          "Dans le ",
          {
            text: "Mode Infiltré",
            href: "/blog/mode-infiltre-explique",
          },
          " (disponible avec Aliiibi+), ces profils correspondent à des rôles assignés en début de partie. Le jeu de bluff devient alors un méta-jeu : vous devez deviner non seulement qui a mis ce titre, mais aussi si ce joueur joue le rôle qu'il prétend jouer. Pour les ",
          {
            text: "techniques concrètes de bluff",
            href: "/blog/comment-bluffer-au-blind-test",
          },
          ", notre guide dédié détaille les 5 méthodes les plus efficaces.",
        ],
      },
    ],
    faq: [
      {
        q: "C'est quoi le titre Fin Limier dans Aliiibi ?",
        a: "Le Fin Limier est attribué au joueur qui a deviné seul un titre que tous les autres ont raté. Il rapporte +30 points, le score le plus élevé par action car il récompense une lucidité exceptionnelle contre l'opinion du groupe.",
      },
      {
        q: "Comment devient-on L'Insaisissable dans Aliiibi ?",
        a: "En mettant des musiques sans pattern identifiable et en maintenant une expression neutre tout au long de la partie, quelle que soit la chanson qui passe, y compris les vôtres. L'Insaisissable rapporte +20 points.",
      },
      {
        q: "Les rôles changent-ils à chaque partie dans le Mode Infiltré ?",
        a: "Oui, les rôles sont réattribués aléatoirement à chaque nouvelle partie. Personne ne garde le même rôle deux parties de suite.",
      },
      {
        q: "Peut-on faire alliance avec un autre joueur dans Aliiibi ?",
        a: "C'est une stratégie informelle possible dans toutes les versions. Le Mode Infiltré (Aliiibi+) formalise ces alliances avec des rôles dédiés comme Le Complice, avec des objectifs et des points associés.",
      },
    ],
    related: [
      "comment-bluffer-au-blind-test",
      "mode-infiltre-explique",
      "glossaire-aliiibi",
    ],
  },

  // ── COMPARATIF ───────────────────────────────────────────
  {
    slug: "comparatif-blind-test-jackbox-aliiibi",
    date: "2025-04-15",
    readTime: "5 min",
    tag: "Comparatif",
    title:
      "Blind test maison vs Jackbox vs Aliiibi : lequel choisir pour votre soirée ?",
    metaTitle:
      "Blind test maison vs Jackbox vs Aliiibi : comparatif honnête 2025",
    metaDescription:
      "Comparatif complet des 3 options de jeu musical en soirée : blind test maison, Jackbox Party Pack et Aliiibi. Prix, setup, nombre de joueurs, verdict par profil.",
    keywords: [
      "meilleure app jeu musical soirée iOS 2025",
      "alternative Jackbox party game musique",
      "jeu blind test smartphone gratuit",
      "jeu musical iPhone gratuit",
      "comparatif jeux musicaux soirée",
      "blind test application",
      "jeu soirée amis iPhone",
    ],
    intro:
      "Vous avez une soirée dans deux heures et vous voulez un jeu musical. Voici la comparaison honnête des trois options, avec leurs vrais défauts, pas leurs arguments marketing.",
    blocks: [
      {
        type: "h2",
        text: "Le blind test maison : le classique du sacrifice",
      },
      {
        type: "p",
        text: "Celui qui organise le blind test maison ne joue pas vraiment. Il prépare la playlist pendant 2h, gère la technique, met la musique en pause au bon moment, comptabilise les points. Il est à la fois le DJ, l'arbitre et le bouc émissaire si les questions sont trop faciles ou trop dures.",
      },
      {
        type: "ul",
        items: [
          "Avantage : entièrement personnalisable, peut intégrer des références internes au groupe",
          "Avantage : gratuit, fonctionne sur n'importe quelle enceinte",
          "Inconvénient : 2h de préparation minimum, quelqu'un se sacrifie",
          "Inconvénient : fonctionne mal avec des goûts musicaux hétérogènes",
          "Inconvénient : le scoring est souvent approximatif et contesté",
        ],
      },
      {
        type: "h2",
        text: "Jackbox Party Pack : quand il faut une TV",
      },
      {
        type: "p-rich",
        segments: [
          {
            text: "Jackbox Games",
            href: "https://www.jackboxgames.com/",
            external: true,
          },
          " est excellent mais demande une configuration spécifique : une TV ou un vidéoprojecteur, une console, un PC ou une Apple TV avec Jackbox installé, et chaque joueur utilise son smartphone comme télécommande via un navigateur. En appartement avec 6 personnes, c'est faisable. En extérieur ou en voyage, c'est compliqué.",
        ],
      },
      {
        type: "p",
        text: "Les jeux purement musicaux de Jackbox sont rares. Le seul vraiment dédié est Hit Parade, disponible uniquement dans certains packs à 25-30 €. Les autres titres de la suite intègrent de la musique de façon incidente, pas centrale.",
      },
      {
        type: "h2",
        text: "Aliiibi : le tiers inattendu",
      },
      {
        type: "p-rich",
        segments: [
          "Aliiibi démarre en 90 secondes. Un seul iPhone suffit, sans TV ni configuration réseau. Chaque joueur prend l'iPhone à tour de rôle pour sélectionner ses musiques depuis ",
          {
            text: "Apple Music",
            href: "https://www.apple.com/fr/apple-music/",
            external: true,
          },
          ", puis le téléphone est posé sur la table. L'option idéale si vous avez ",
          {
            text: "des goûts musicaux très différents autour de la table",
            href: "/blog/blind-test-gouts-incompatibles",
          },
          " : le jeu est conçu exactement pour ça.",
        ],
      },
      {
        type: "p",
        text: "La différence fondamentale : dans Aliiibi, vous n'écoutez pas des musiques que quelqu'un d'autre a préparées. Vous avez vous-même choisi certains titres, et les autres tentent de vous démasquer. L'implication émotionnelle est totalement différente : chaque révélation touche directement un joueur autour de la table.",
      },
      {
        type: "h2",
        text: "Tableau comparatif",
      },
      {
        type: "table",
        headers: ["Critère", "Blind test maison", "Jackbox", "Aliiibi"],
        rows: [
          ["Prix", "Gratuit", "25-30 € / pack", "Gratuit (Aliiibi+ : 4,99 €)"],
          ["Setup", "~2h de préparation", "TV + console requis", "90 secondes"],
          ["Joueurs", "Illimité", "2-8 selon le jeu", "4 gratuit / 8 avec Aliiibi+"],
          ["Équipement", "Enceinte + ordi", "TV + console + smartphones", "1 seul iPhone"],
          ["Fonctionne hors ligne", "Oui", "Non", "Oui"],
          ["iOS uniquement", "Non", "Non", "Oui"],
          ["Implication des joueurs", "Passive", "Moyenne", "Totale"],
        ],
      },
      {
        type: "h2",
        text: "Verdict par profil de soirée",
      },
      {
        type: "ul",
        items: [
          "Soirée à la maison avec TV et console : Jackbox si vous avez le matériel et le budget",
          "Soirée en extérieur, en voyage ou sans TV : Aliiibi (un seul iPhone, hors ligne)",
          "Soirée avec des goûts musicaux très différents : Aliiibi (chacun choisit ses propres titres)",
          "Apéro improvisé : Aliiibi (90 secondes de setup, pas de préparation)",
          "Soirée avec des références très spécifiques au groupe : Blind test maison",
          "Budget serré : Aliiibi gratuit ou blind test maison",
        ],
      },
      {
        type: "p-rich",
        segments: [
          "Pour les parties à 5 joueurs et plus, le ",
          {
            text: "Mode Infiltré d'Aliiibi+",
            href: "/blog/mode-infiltre-explique",
          },
          " ajoute une dimension stratégique absente des deux autres options : des rôles secrets qui transforment chaque révélation en moment de trahison potentielle.",
        ],
      },
    ],
    faq: [
      {
        q: "Aliiibi fonctionne-t-il sur Android ?",
        a: "Non, Aliiibi est disponible uniquement sur iPhone (iOS 17+). Un seul iPhone est nécessaire pour toute la table, les autres joueurs n'ont pas besoin d'installer l'app.",
      },
      {
        q: "Faut-il Spotify pour jouer à Aliiibi ?",
        a: "Non, Aliiibi utilise Apple Music, pas Spotify. Chaque joueur doit avoir accès à Apple Music sur l'iPhone utilisé pour sélectionner ses morceaux.",
      },
      {
        q: "Jackbox peut-il fonctionner sans TV ?",
        a: "Techniquement possible via le partage d'écran d'un ordinateur portable, mais peu pratique pour une soirée détendue. Jackbox est conçu pour une TV partagée.",
      },
      {
        q: "Quel jeu musical pour une soirée à 8 joueurs ?",
        a: "Aliiibi+ permet jusqu'à 8 joueurs sur un seul iPhone. C'est l'option la plus simple pour les grandes tablées sans nécessiter de matériel supplémentaire.",
      },
      {
        q: "Le blind test maison est-il vraiment gratuit ?",
        a: "Oui en termes d'argent, mais il faut compter 1 à 2h de préparation pour l'organisateur, qui ne jouera pas vraiment pendant la soirée.",
      },
    ],
    related: [
      "blind-test-gouts-incompatibles",
      "mode-infiltre-explique",
      "7-types-de-joueurs-blind-test",
    ],
  },

  // ── GLOSSAIRE ─────────────────────────────────────────────
  {
    slug: "glossaire-aliiibi",
    date: "2025-04-20",
    readTime: "5 min",
    tag: "Référence",
    title: "Glossaire Aliiibi : toutes les mécaniques du jeu expliquées",
    metaTitle: "Glossaire Aliiibi : mécaniques, titres et rôles expliqués",
    metaDescription:
      "Honte Suprême, Fin Limier, Mode Infiltré, Sniper, Complice... Le glossaire officiel de toutes les mécaniques d'Aliiibi. La référence pour comprendre et maîtriser le jeu.",
    keywords: [
      "Honte Suprême Aliiibi",
      "Mode Infiltré Aliiibi",
      "Fin Limier Aliiibi",
      "L'Insaisissable Aliiibi",
      "règles Aliiibi",
      "mécaniques Aliiibi",
      "glossaire jeu Aliiibi",
      "rôles Aliiibi",
    ],
    intro:
      "Honte Suprême, Fin Limier, Mode Infiltré... Aliiibi a son propre vocabulaire. Ce glossaire est la référence officielle de toutes les mécaniques du jeu, des titres attribués en fin de manche aux rôles secrets du Mode Infiltré.",
    blocks: [
      {
        type: "h2",
        text: "Titres attribués en fin de manche",
      },
      {
        type: "p",
        text: "À chaque révélation, l'app attribue automatiquement un titre au joueur concerné, selon sa performance sur ce morceau. Ces titres cumulent des points tout au long de la partie.",
      },
      {
        type: "cards",
        items: [
          {
            emoji: "☠️",
            title: "HONTE SUPRÊME",
            color: "#E86060",
            points: "−10 pts",
            text: "Tu pensais être imprévisible. Tu avais l'originalité d'un générique de supermarché. Chaque suspect du groupe t'a désigné sans hésiter. C'est beau, dans le genre catastrophique.",
          },
          {
            emoji: "✨",
            title: "L'INSAISISSABLE",
            color: "#9D9FE5",
            points: "+20 pts",
            text: "Aucune trace. Aucun indice. Aucune pitié. Tu as semé tout le monde et tu le sais très bien.",
          },
          {
            emoji: "🕯️",
            title: "LE FIN LIMIER",
            color: "#FF9500",
            points: "+30 pts",
            text: "Là où tout le monde a raté, il a trouvé. Seul contre tous. C'est ça, le vrai flair.",
          },
          {
            emoji: "👂",
            title: "L'OREILLE ABSOLUE",
            color: "#9D9FE5",
            points: "+10 pts",
            text: "Pendant que les autres hésitaient, lui écoutait vraiment. Ça change tout.",
          },
        ],
      },
      {
        type: "h2",
        text: "Titres de fin de partie",
      },
      {
        type: "p",
        text: "En fin de partie, des bonus récompensent les performances sur l'ensemble des manches, pas seulement sur un titre isolé. L'app distingue les meilleurs enquêteurs (ceux qui ont le plus souvent voté dans la bonne direction) et les bluffeurs imperturbables (ceux dont aucun titre ou presque n'a été identifié sur toute la partie).",
      },
      {
        type: "p",
        text: "Ces bonus de fin sont rares et difficiles à atteindre. Ils récompensent une régularité ou une discrétion maintenue sur toute la durée du jeu, ce qui est bien plus difficile que de réussir un seul coup éclat.",
      },
      {
        type: "h2",
        text: "Rôles du Mode Infiltré",
      },
      {
        type: "p-rich",
        segments: [
          "Le ",
          {
            text: "Mode Infiltré",
            href: "/blog/mode-infiltre-explique",
          },
          " est disponible avec Aliiibi+, l'extension à 4,99 € (achat unique). Il attribue un rôle secret à chaque joueur en début de partie, transformant le blind test en jeu de trahison. La mécanique s'inspire du ",
          {
            text: "Loup-Garou de Thiercelieux",
            href: "https://fr.wikipedia.org/wiki/Loup-Garou_de_Thiercelieux",
            external: true,
          },
          " appliquée à la musique. Certains joueurs sont là pour bluffer. D'autres pour piéger. D'autres encore pour souffrir.",
        ],
      },
      {
        type: "cards",
        items: [
          {
            emoji: "🕵️",
            title: "L'INFILTRÉ",
            color: "#A89EFF",
            text: "Joue normalement en apparence mais poursuit un objectif secret différent des autres joueurs. Son identité de rôle ne doit jamais être devinée.",
          },
          {
            emoji: "🎯",
            title: "LE SNIPER",
            color: "#FF9CC0",
            text: "Reçoit au début de la partie un joueur cible désigné. Doit voter contre cette cible le plus souvent possible. Des points bonus si la cible est effectivement démasquée.",
          },
          {
            emoji: "🤝",
            title: "LE COMPLICE",
            color: "#72DDD4",
            text: "Est secrètement allié avec un autre joueur désigné. Ils doivent se couvrir mutuellement sans que leur alliance soit découverte par le reste du groupe.",
          },
        ],
      },
      {
        type: "h2",
        text: "Mécaniques de base",
      },
      {
        type: "ul",
        items: [
          "Sélection secrète : phase d'ouverture de chaque partie où chaque joueur choisit ses titres à tour de rôle sur l'iPhone. Les autres joueurs ne voient pas les choix. C'est là que tout se joue stratégiquement.",
          "Révélation : moment à la fin de la lecture de chaque morceau où l'app révèle quel joueur avait mis ce titre. Déclenche l'attribution des titres et des points.",
          "Manche : un cycle complet comprenant la sélection secrète, l'écoute de tous les titres, les révélations et l'attribution des titres et points. Une partie peut contenir plusieurs manches.",
          "Aliiibi+ : extension premium d'Aliiibi. Achat unique à 4,99 €. Débloque jusqu'à 8 joueurs (vs 4 en gratuit), jusqu'à 6 morceaux par joueur (vs 4), le Mode Infiltré avec rôles secrets, et l'historique des parties.",
        ],
      },
      {
        type: "p-rich",
        segments: [
          "La diffusion musicale repose sur ",
          {
            text: "Apple MusicKit",
            href: "https://developer.apple.com/musickit/",
            external: true,
          },
          ", le framework Apple qui permet à des applications tierces d'accéder à la bibliothèque Apple Music de l'utilisateur. Pour comprendre comment chacun de ces titres se comporte en jeu réel, consultez notre guide des ",
          {
            text: "7 types de joueurs au blind test",
            href: "/blog/7-types-de-joueurs-blind-test",
          },
          ".",
        ],
      },
    ],
    faq: [
      {
        q: "C'est quoi la Honte Suprême dans Aliiibi ?",
        a: "La Honte Suprême est attribuée au joueur qui s'est fait démasquer par tous les autres joueurs sur un titre. Elle coûte 10 points. C'est la sanction la plus visible du jeu, et la plus difficile à vivre en société.",
      },
      {
        q: "C'est quoi le Mode Infiltré ?",
        a: "Le Mode Infiltré est une extension de gameplay disponible avec Aliiibi+ (4,99 €, achat unique). Il attribue des rôles secrets à chaque joueur en début de partie, transformant le blind test en jeu de rôle et de trahison, comparable au Loup-Garou mais avec de la musique.",
      },
      {
        q: "Pourquoi le Fin Limier rapporte-t-il plus que l'Oreille Absolue ?",
        a: "Parce qu'il récompense une lucidité exceptionnelle : avoir voté correctement seul contre l'opinion de tout le groupe. C'est un exploit de jugement, pas de régularité. Le Fin Limier vaut +30 pts, l'Oreille Absolue +10 pts.",
      },
      {
        q: "Peut-on jouer au Mode Infiltré gratuitement ?",
        a: "Non, le Mode Infiltré est exclusif à Aliiibi+, l'extension à 4,99 € (achat unique, pas d'abonnement).",
      },
      {
        q: "C'est quoi le rôle du Sniper dans le Mode Infiltré ?",
        a: "Le Sniper reçoit une cible désignée au début de la partie. Il doit voter contre cette cible le plus souvent possible. Des points bonus lui sont attribués si sa cible est effectivement démasquée.",
      },
    ],
    related: [
      "mode-infiltre-explique",
      "7-types-de-joueurs-blind-test",
      "comment-bluffer-au-blind-test",
    ],
  },

  // ── PRÉSENTATION ─────────────────────────────────────────
  {
    slug: "quest-ce-qualiiibi",
    date: "2025-04-01",
    readTime: "3 min",
    tag: "Présentation",
    title: "Aliiibi, c'est quoi exactement ?",
    metaTitle:
      "C'est quoi Aliiibi ? Le blind test musical qui détruit des amitiés",
    metaDescription:
      "Aliiibi est un jeu de soirée blind-test musical multijoueur sur iPhone. Chaque joueur choisit ses musiques en secret. Les autres doivent le démasquer. Présentation complète.",
    keywords: [
      "aliiibi application",
      "aliiibi jeu",
      "blind test musical iPhone",
      "jeu soirée iOS gratuit",
      "jeu entre amis iPhone",
      "blind test multijoueur",
    ],
    intro:
      "Aliiibi est un jeu de soirée blind-test musical multijoueur sur iPhone. Chaque joueur choisit ses musiques en secret. Une playlist commune démarre et les autres joueurs doivent deviner qui a mis chaque morceau. Bluffez, accusez, survivez.",
    blocks: [
      {
        type: "h2",
        text: "Le principe en 30 secondes",
      },
      {
        type: "p-rich",
        segments: [
          "Chaque joueur sélectionne en secret ses propres musiques depuis ",
          {
            text: "Apple Music",
            href: "https://www.apple.com/fr/apple-music/",
            external: true,
          },
          " : 4 titres en version gratuite, jusqu'à 6 avec Aliiibi+. Personne ne voit les choix des autres. Puis une playlist commune démarre, dans un ordre aléatoire.",
        ],
      },
      {
        type: "p",
        text: "À chaque morceau qui passe, les joueurs doivent deviner qui l'a mis. Ils votent, argumentent, accusent. Mais ils peuvent aussi bluffer et orienter les soupçons vers quelqu'un d'autre. La tension monte. Les goûts musicaux trahissent. Les personnalités se révèlent.",
      },
      {
        type: "h2",
        text: "La révélation et les titres",
      },
      {
        type: "p-rich",
        segments: [
          "En fin de manche, les masques tombent. L'app révèle qui avait mis chaque titre. Les scores s'affichent. Des titres sont attribués automatiquement : ",
          {
            text: "L'Insaisissable, La Honte Suprême, Le Fin Limier, L'Oreille Absolue",
            href: "/blog/glossaire-aliiibi",
          },
          ", chacun avec ses points et sa définition. Des bonus de fin de partie récompensent les meilleurs bluffeurs et enquêteurs.",
        ],
      },
      {
        type: "h2",
        text: "Ce qu'il faut pour jouer",
      },
      {
        type: "ul",
        items: [
          "Un seul iPhone (iOS 17+), pas d'application par joueur",
          "Apple Music : pour la sélection et la diffusion des morceaux",
          "3 à 8 joueurs autour de la table",
          "20 à 45 minutes selon le nombre de participants",
        ],
      },
      {
        type: "h2",
        text: "Gratuit ou Aliiibi+ ?",
      },
      {
        type: "p-rich",
        segments: [
          "La version gratuite supporte jusqu'à 4 joueurs avec 4 morceaux chacun. Aliiibi+ est un achat unique à 4,99 € qui monte à 8 joueurs, 6 morceaux par joueur, débloque le ",
          {
            text: "Mode Infiltré avec des rôles secrets",
            href: "/blog/mode-infiltre-explique",
          },
          " et donne accès à l'historique des parties.",
        ],
      },
    ],
    faq: [
      {
        q: "Aliiibi est-il disponible sur Android ?",
        a: "Non, Aliiibi est disponible uniquement sur iPhone (iOS 17+). Un seul iPhone suffit pour toute la table.",
      },
      {
        q: "Aliiibi est-il gratuit ?",
        a: "Oui, la version de base est gratuite. Aliiibi+ (4,99 €, achat unique) débloque des fonctionnalités supplémentaires : jusqu'à 8 joueurs, Mode Infiltré, historique des parties.",
      },
      {
        q: "Faut-il Apple Music pour jouer ?",
        a: "Oui, Aliiibi utilise Apple MusicKit. Chaque joueur doit avoir accès à Apple Music sur l'iPhone utilisé.",
      },
      {
        q: "Combien de temps dure une partie ?",
        a: "De 20 à 45 minutes selon le nombre de joueurs et le nombre de morceaux par joueur.",
      },
    ],
    related: [
      "blind-test-gouts-incompatibles",
      "glossaire-aliiibi",
      "mode-infiltre-explique",
    ],
  },

  // ── BLUFF ─────────────────────────────────────────────────
  {
    slug: "comment-bluffer-au-blind-test",
    date: "2025-04-10",
    readTime: "4 min",
    tag: "Stratégie",
    title: "Comment bien bluffer au blind test Aliiibi",
    metaTitle:
      "Bluffer au blind test Aliiibi : 5 techniques pour rester insaisissable",
    metaDescription:
      "Être discret ne suffit pas. Voici les vraies techniques pour bluffer efficacement dans Aliiibi : sélection, accusations, langage corporel et couverture.",
    keywords: [
      "bluffer blind test",
      "stratégie Aliiibi",
      "comment gagner Aliiibi",
      "jeu de bluff musical",
      "tactique blind test",
      "L'Insaisissable Aliiibi",
    ],
    intro:
      "Bluffer dans Aliiibi, c'est un art. Le but n'est pas simplement de mettre des musiques inattendues. C'est de construire une identité musicale fausse convaincante, et de la maintenir pendant toute la partie sous la pression des regards.",
    blocks: [
      {
        type: "h2",
        text: "Technique 1 : mixer les genres stratégiquement",
      },
      {
        type: "p",
        text: "Si vous êtes connu pour le rap, glissez un titre de variété française. Mais pas trop différent non plus, sinon c'est suspect. Un choix trop inattendu attire plus l'attention qu'il ne la détourne. L'objectif est de semer le doute, pas de vous rendre méconnaissable.",
      },
      {
        type: "h2",
        text: "Technique 2 : observer avant d'accuser",
      },
      {
        type: "p-rich",
        segments: [
          "Pendant que les morceaux passent, regardez qui sourit imperceptiblement, qui grimace, qui se raidit légèrement. Ces informations valent autant que votre propre stratégie. Les meilleurs joueurs d'Aliiibi consacrent 70% de leur attention aux autres joueurs, 30% à la musique. Notre guide des ",
          {
            text: "7 types de joueurs au blind test",
            href: "/blog/7-types-de-joueurs-blind-test",
          },
          " détaille les tells spécifiques de chaque profil.",
        ],
      },
      {
        type: "h2",
        text: "Technique 3 : accuser les innocents avec conviction",
      },
      {
        type: "p",
        text: "Quand vient votre tour de voter, désignez quelqu'un d'autre avec assurance. Une accusation hésitante attire l'attention sur vous. Une accusation confiante et légèrement fondée, du genre 'c'est typiquement le genre de truc que Marc écouterait', détourne les soupçons et crée de la confusion.",
      },
      {
        type: "h2",
        text: "Technique 4 : préparer une couverture cohérente",
      },
      {
        type: "p",
        text: "Avant la partie, décidez d'un style musical factice cohérent. Mettez 2 à 3 titres de ce style pour crédibiliser votre bluff. Le premier morceau installe une piste. Le deuxième confirme la piste. Le troisième peut être totalement différent : les autres ont déjà construit une image fausse de vous.",
      },
      {
        type: "h2",
        text: "Technique 5 : le silence stratégique",
      },
      {
        type: "p-rich",
        segments: [
          "Ne défendez pas chaque morceau. Les joueurs qui argumentent trop souvent sur 'c'est vraiment pas moi ça' finissent toujours par se griller. Rester calme et observer est parfois la meilleure position. Le titre ",
          {
            text: "L'Insaisissable (+20 pts)",
            href: "/blog/glossaire-aliiibi",
          },
          " récompense ceux que personne ne démasque, pas ceux qui ont le plus parlé. Pour comprendre les mécanismes psychologiques derrière le bluff musical, notre article sur la ",
          {
            text: "psychologie du bluff dans Aliiibi",
            href: "/blog/psychologie-bluff-musical",
          },
          " va plus loin.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le meilleur type de musique pour bluffer dans Aliiibi ?",
        a: "Des titres ni trop connus ni trop obscurs, dans un genre légèrement différent de vos goûts habituels, mais pas totalement incohérent. Un choix trop imprévisible attire l'attention autant qu'un choix trop prévisible.",
      },
      {
        q: "C'est quoi le titre L'Insaisissable dans Aliiibi ?",
        a: "L'Insaisissable est attribué au joueur dont aucun titre n'a été correctement identifié pendant une manche. Il rapporte +20 points et récompense le bluff parfait.",
      },
      {
        q: "Vaut-il mieux bluffer ou jouer honnêtement à Aliiibi ?",
        a: "Cela dépend des autres joueurs. Si votre groupe est observateur, miser sur le bluff est nécessaire. Si votre groupe vote au hasard, jouer régulièrement (L'Oreille Absolue) peut être plus rentable.",
      },
      {
        q: "Comment éviter de se trahir quand son propre morceau passe ?",
        a: "Maintenir une expression neutre constante dès le début de la partie, y compris pour les morceaux des autres. Si vous restez impassible tout le temps, votre impassibilité ne révèle rien quand vient votre tour.",
      },
    ],
    related: [
      "7-types-de-joueurs-blind-test",
      "psychologie-bluff-musical",
      "glossaire-aliiibi",
    ],
  },

  // ── MODE INFILTRÉ ─────────────────────────────────────────
  {
    slug: "mode-infiltre-explique",
    date: "2025-04-20",
    readTime: "5 min",
    tag: "Mode Infiltré",
    title: "Le Mode Infiltré d'Aliiibi : rôles secrets et stratégies",
    metaTitle: "Mode Infiltré Aliiibi : rôles secrets, règles et stratégies",
    metaDescription:
      "Le Mode Infiltré transforme Aliiibi en Loup-Garou musical. Disponible avec Aliiibi+, il attribue des rôles secrets à chaque joueur. Guide complet des rôles et stratégies.",
    keywords: [
      "Mode Infiltré Aliiibi",
      "jeu loup-garou musical",
      "jeu rôles secrets soirée",
      "Aliiibi plus",
      "jeu stratégie soirée",
      "jeu ambiance bluff",
      "loup-garou iOS",
    ],
    intro:
      "Le Mode Infiltré est le mode premium d'Aliiibi, disponible avec Aliiibi+ (4,99 € achat unique). Il attribue des rôles secrets à chaque joueur en début de partie, transformant le blind test en jeu de rôle et de trahison : un Loup-Garou musical, pour ceux qui connaissent la référence.",
    blocks: [
      {
        type: "h2",
        text: "Comment fonctionne le Mode Infiltré",
      },
      {
        type: "p-rich",
        segments: [
          "Au début de la partie, chaque joueur reçoit un rôle secret sur l'iPhone, discrètement, à l'abri des regards. Le principe s'inspire directement des jeux à rôles cachés comme le ",
          {
            text: "Loup-Garou de Thiercelieux",
            href: "https://fr.wikipedia.org/wiki/Loup-Garou_de_Thiercelieux",
            external: true,
          },
          ", mais transposé dans un contexte de blind test musical. Ces rôles modifient les objectifs de chacun pendant toute la partie.",
        ],
      },
      {
        type: "p",
        text: "Vous ne savez pas seulement ce que vos amis ont mis. Vous ne savez pas non plus quels sont leurs vrais objectifs. Un joueur qui vous accuse avec conviction pourrait très bien remplir une mission secrète. Quelqu'un de particulièrement discret pourrait être un Infiltré.",
      },
      {
        type: "h2",
        text: "Les rôles disponibles",
      },
      {
        type: "ul",
        items: [
          "L'Infiltré : joue normalement en apparence mais avec un objectif secret. Son identité ne doit jamais être devinée.",
          "Le Sniper : reçoit une cible désignée. Doit voter systématiquement contre elle. Des points bonus si la cible est effectivement démasquée.",
          "Le Complice : est secrètement allié avec un autre joueur. Ils doivent se couvrir mutuellement sans que leur alliance soit découverte.",
        ],
      },
      {
        type: "p-rich",
        segments: [
          "La ",
          {
            text: "description complète de chaque rôle et ses points associés",
            href: "/blog/glossaire-aliiibi",
          },
          " est disponible dans le glossaire Aliiibi.",
        ],
      },
      {
        type: "h2",
        text: "Stratégies pour chaque rôle",
      },
      {
        type: "p-rich",
        segments: [
          "Si votre rôle est de passer inaperçu : choisissez des musiques neutres que plusieurs personnes du groupe pourraient avoir mises. Évitez vos titres signature. Les ",
          {
            text: "techniques de bluff avancées",
            href: "/blog/comment-bluffer-au-blind-test",
          },
          " s'appliquent directement ici, notamment la couverture cohérente et le silence stratégique.",
        ],
      },
      {
        type: "p",
        text: "Si votre rôle est Le Sniper : ne votez pas systématiquement contre votre cible dès le premier titre, c'est trop visible. Commencez par accuser deux autres joueurs, puis recentrez sur votre cible à partir du troisième morceau.",
      },
      {
        type: "p",
        text: "Si votre rôle est Le Complice : évitez tout signe de connivence avec votre allié. Ne vous regardez pas, ne vous défendez pas trop mutuellement. Le Complice efficace traite son allié comme un suspect ordinaire, jusqu'à la révélation.",
      },
      {
        type: "h2",
        text: "Pourquoi le Mode Infiltré change tout",
      },
      {
        type: "p-rich",
        segments: [
          "Dans le blind test standard, le méta-jeu est relativement linéaire : deviner qui a mis quoi. Dans le Mode Infiltré, il y a un deuxième niveau : deviner non seulement les auteurs des titres, mais aussi les objectifs cachés de chaque joueur. Connaître les ",
          {
            text: "7 types de joueurs qui existent dans Aliiibi",
            href: "/blog/7-types-de-joueurs-blind-test",
          },
          " vous aide à identifier rapidement les rôles probables dès les premiers morceaux. Une partie à 8 joueurs avec Mode Infiltré peut facilement durer 45 minutes à 1h, avec une intensité croissante à chaque révélation.",
        ],
      },
    ],
    faq: [
      {
        q: "Le Mode Infiltré ressemble-t-il au Loup-Garou ?",
        a: "Oui, c'est délibéré. Le Mode Infiltré emprunte la mécanique des rôles secrets et de la tromperie du Loup-Garou, mais la transpose dans un contexte de blind test musical. L'identification des coupables se fait via la musique plutôt que via un vote à l'aveugle.",
      },
      {
        q: "Combien de joueurs minimum pour le Mode Infiltré ?",
        a: "Le Mode Infiltré est idéal à partir de 5-6 joueurs. En dessous, les rôles sont moins efficaces car les alliances et les trahisons sont plus facilement détectables dans un petit groupe.",
      },
      {
        q: "Les rôles sont-ils les mêmes à chaque partie ?",
        a: "Non, les rôles sont réattribués aléatoirement à chaque nouvelle partie. Personne ne garde le même rôle deux parties de suite.",
      },
      {
        q: "Aliiibi+ est-il un abonnement ?",
        a: "Non, Aliiibi+ est un achat unique à 4,99 €. Pas d'abonnement mensuel, pas de renouvellement. Vous débloquez les fonctionnalités à vie.",
      },
      {
        q: "Peut-on combiner le Mode Infiltré avec des goûts musicaux très différents ?",
        a: "Oui, c'est même recommandé. La diversité des goûts musicaux autour de la table rend l'identification des rôles encore plus difficile, car les patterns de sélection deviennent plus complexes à analyser.",
      },
    ],
    related: [
      "glossaire-aliiibi",
      "comment-bluffer-au-blind-test",
      "7-types-de-joueurs-blind-test",
    ],
  },

  // ── PSYCHOLOGIE DU BLUFF ──────────────────────────────────
  {
    slug: "psychologie-bluff-musical",
    date: "2025-04-25",
    readTime: "4 min",
    tag: "Culture",
    title:
      "La psychologie du bluff musical : pourquoi on met des chansons honteuses exprès",
    metaTitle:
      "Psychologie du bluff musical : pourquoi on met des chansons honteuses exprès",
    metaDescription:
      "Pourquoi mettre volontairement un titre embarrassant est une stratégie de haut niveau. La psychologie du bluff musical dans Aliiibi et ce que vos playlists révèlent de vous.",
    keywords: [
      "psychologie goût musical",
      "chansons honteuses",
      "bluff musical psychologie",
      "identité musicale",
      "jeu de bluff soirée",
      "Honte Suprême stratégie",
      "playlist soirée",
    ],
    intro:
      "Mettre volontairement une chanson honteuse dans Aliiibi, c'est une stratégie de haut niveau, pas un aveu de mauvais goût. La psychologie sociale appelle ça l'auto-dérision contrôlée. Dans le jeu, on appelle ça viser la Honte Suprême exprès, et ça marche.",
    blocks: [
      {
        type: "h2",
        text: "Ce que vos playlists révèlent sur vous",
      },
      {
        type: "p-rich",
        segments: [
          "Les recherches en ",
          {
            text: "psychologie de la musique",
            href: "https://fr.wikipedia.org/wiki/Psychologie_de_la_musique",
            external: true,
          },
          " montrent que les préférences musicales sont liées à des traits de personnalité relativement stables. Les fans de musique complexe (jazz, classique, métal progressif) scorent plus haut sur l'ouverture à l'expérience. Les fans de musique énergique et rythmique (pop, electro) tendent vers l'extraversion. Vos amis proches ont une intuition de tout ça, même sans l'avoir formalisé.",
        ],
      },
      {
        type: "p",
        text: "C'est pourquoi Aliiibi fonctionne mieux avec des gens qui se connaissent bien. La partie révèle non pas vos goûts musicaux objectifs, mais l'image que les autres ont de votre personnalité musicale. Ces deux choses sont rarement identiques.",
      },
      {
        type: "h2",
        text: "La stratégie de la Honte Suprême",
      },
      {
        type: "p-rich",
        segments: [
          "Dans Aliiibi, la ",
          {
            text: "Honte Suprême (−10 pts)",
            href: "/blog/glossaire-aliiibi",
          },
          " est attribuée au joueur que tout le groupe a deviné. C'est la punition la plus visible. Logiquement, personne ne veut l'avoir.",
        ],
      },
      {
        type: "p",
        text: "Sauf que non. Les joueurs avancés utilisent la Honte Suprême volontairement. En exposant délibérément une chanson embarrassante sur un titre, quelque chose que tout le groupe va immédiatement associer à leur profil, ils créent un écran de fumée pour leurs autres titres. Le groupe, satisfait d'avoir trouvé un coupable évident, baisse sa garde sur les manches suivantes.",
      },
      {
        type: "p",
        text: "C'est ce que la psychologie sociale appelle la vulnérabilité stratégique : exposer une faiblesse choisie pour augmenter sa crédibilité sur les points qui comptent vraiment. Dans Aliiibi, ça se traduit par : perdre 10 points intentionnellement pour mieux protéger les 20 ou 30 points des manches suivantes.",
      },
      {
        type: "h2",
        text: "Pourquoi le goût musical honteux est un atout",
      },
      {
        type: "p",
        text: "Les chansons dites honteuses, variété ringarde, pop commerciale assumée, tubes d'été, sont statistiquement plus difficiles à attribuer précisément. Tout le monde connaît ces chansons. Tout le monde les a écoutées à un moment. Et personne ne veut admettre les avoir mises.",
      },
      {
        type: "p",
        text: "Résultat : quand un titre de variété française passe dans une partie d'Aliiibi, les joueurs hésitent à accuser quelqu'un, car ça signifie implicitement 'je pense que tu aimes ça'. Cette hésitation sociale protège le vrai auteur mieux que n'importe quelle stratégie musicale sophistiquée.",
      },
      {
        type: "h2",
        text: "L'identité musicale vs la musique réelle",
      },
      {
        type: "p-rich",
        segments: [
          "Aliiibi met en évidence une distinction que la plupart des gens n'ont jamais conscientisée : votre goût musical réel (ce que vous écoutez seul, dans les écouteurs) est très différent de votre identité musicale (l'image que vous projetez). Le jeu exploite l'écart entre les deux. Pour transformer cette connaissance en victoires concrètes, notre guide sur ",
          {
            text: "comment bluffer efficacement au blind test",
            href: "/blog/comment-bluffer-au-blind-test",
          },
          " détaille 5 techniques directement actionnables. Et si vous voulez identifier les profils des autres joueurs avant même qu'ils ouvrent la bouche, le guide des ",
          {
            text: "7 types de joueurs au blind test",
            href: "/blog/7-types-de-joueurs-blind-test",
          },
          " est le bon point de départ.",
        ],
      },
    ],
    faq: [
      {
        q: "Pourquoi est-ce qu'on hésite à accuser quelqu'un pour une chanson honteuse ?",
        a: "Parce qu'accuser quelqu'un d'avoir mis une chanson embarrassante comporte un risque social : si vous vous trompez, vous venez d'insulter son goût musical devant tout le groupe. Cette hésitation protège les auteurs de chansons honteuses, c'est l'ironie centrale d'Aliiibi.",
      },
      {
        q: "La psychologie de votre personnalité musicale influe-t-elle vraiment sur Aliiibi ?",
        a: "Oui, c'est même la mécanique centrale du jeu. Les amis proches ont une intuition des goûts musicaux les uns des autres. Aliiibi exploite cette connaissance interpersonnelle. Jouer avec des inconnus est moins intéressant qu'avec des amis de longue date.",
      },
      {
        q: "C'est quoi la stratégie de la Honte Suprême volontaire ?",
        a: "Exposer délibérément un titre facilement identifiable (et perdre 10 pts) pour créer un écran de fumée sur ses autres titres. Le groupe, satisfait d'avoir trouvé, baisse sa garde. C'est une vulnérabilité choisie pour protéger l'essentiel.",
      },
      {
        q: "Aliiibi révèle-t-il vraiment la personnalité des joueurs ?",
        a: "Il révèle surtout l'image que les autres joueurs ont de votre personnalité musicale, ce qui est différent de votre goût réel. L'écart entre les deux est souvent la révélation la plus intéressante d'une partie.",
      },
    ],
    related: [
      "comment-bluffer-au-blind-test",
      "glossaire-aliiibi",
      "7-types-de-joueurs-blind-test",
    ],
  },
];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
