/**
 * Capsule Expertise V5 — contenu centralisé.
 *
 * MIX :
 *  - Présentation (DA) du modèle 03-landing-mix.html → typo Instrument Sans/Serif,
 *    tailles géantes, pulse dot, reassurance card, facts stripe, method i·ii·iii,
 *    case sidebar, CTA final XXL, wordmark "Capsule.".
 *  - Copy (fond) de la V1 originale → taglines, sous-titres, bullets, questions FAQ,
 *    offres dirigeants détaillées, 5 missions ETI, bios équipe, 3 témoignages.
 *  - Audit appliqué → CTA explicites, offres visibles au scroll, géo en hero,
 *    tailles typo remontées, hiérarchie TPE prioritaire, mentions légales complètes.
 *
 * Règle déontologie OEC : aucune comparaison, transparence, pas de démarchage.
 * Tarifs NON affichés (choix client : « on ne vient pas chez nous pour le prix »).
 *
 * TODO visibles en dev via `.ce-todo`. À masquer en prod via <body data-prod="true">.
 */

export const SITE = {
  brand: {
    name: 'Capsule',
    suffix: '.',
    full: 'Capsule Expertise',
    tagline: "Cabinet d'expertise comptable",
    baseline: 'Comprendre ses chiffres. Décider plus vite.',
    baselineAlt: 'Tenir les comptes. Tenir le cap.',
    location: 'Bry-sur-Marne, Île-de-France',
  },

  legal: {
    oecNumber: 'XXXXXX',
    siret: '939 664 595 00039',
    siren: '939 664 595',
    rcs: 'Créteil B 939 664 595',
    tva: 'FR XX 939 664 595',
    phone: '01 XX XX XX XX',
    phoneHref: 'tel:+331XXXXXXXX',
    email: 'contact@capsule-expertise.fr',
    address: {
      street: '60 avenue du Général Leclerc',
      postalCode: '94360',
      city: 'Bry-sur-Marne',
      region: 'Île-de-France',
      country: 'FR',
    },
  },

  nav: {
    links: [
      { label: 'Dirigeants', href: '/dirigeants' },
      { label: 'DAF · ETI', href: '/direction-financiere' },
      { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
    ],
    cta: { label: 'Contact', href: '/contact' },
  },

  // ─── HERO — V5 itération 5 : copy court, photo immersive, choix renvoyé en aiguillage ───
  hero: {
    titleLine1: 'Maîtrisez vos chiffres,',
    titleLine2: 'Décidez plus vite.',
    subtitleBrand: 'Capsule — Copilote des dirigeants & DAF',
    oecBadge: "Membre de l'Ordre des Experts-Comptables de Paris",
    heroPhoto: {
      src: '/Ranto%20Jeromev3.png',
      alt: 'Ranto Rajaonarivo et Jérôme Phou, associés fondateurs de Capsule Expertise',
      caption: 'Ranto & Jérôme — vos interlocuteurs',
    },
  },

  // ─── FACTS — adapté profil jeune cabinet ───
  facts: [
    { num: '2', label: 'Experts-comptables\nassociés du cabinet' },
    { num: '20', em: '+', label: 'Dirigeants\naccompagnés' },
    { num: '48', em: 'h', label: 'Délai de réponse\nengagé par écrit' },
    { num: '100', em: '%', label: 'Missions traitées\nen interne' },
  ],

  // ─── AIGUILLAGE — 2 parcours V1 teasers (réintroduit en V5 sur reco audit) ───
  aiguillage: {
    eyebrow: 'Deux situations, deux approches',
    title: 'À qui s’adresse',
    titleEm: 'Capsule',
    titleEnd: '?',
    parcours: [
      {
        id: 'dirigeant',
        label: 'Pour les TPE/PME',
        title: 'Je dirige une TPE/PME',
        titleEm: 'ou j’exerce en libéral',
        tagline:
          "Vous disposez de vos chiffres et souhaitez les utiliser pour piloter votre activité.",
        bullets: [
          'Arbitrer votre rémunération',
          'Suivre votre trésorerie',
          'Décider d’un recrutement',
          'Comprendre la performance de votre entreprise',
        ],
        cta: { label: 'Voir le parcours dirigeant', href: '/dirigeants' },
        priority: true,
      },
      {
        id: 'finance',
        label: 'Pour les ETI / Groupes',
        title: 'Je pilote la finance',
        titleEm: "d’une ETI ou d’un groupe",
        tagline: 'Renfort opérationnel dans la fonction finance.',
        bullets: [
          'Reporting groupe pour le CODIR',
          'Structuration du service finance',
          'Amélioration des délais de clôture',
          'Management de transition',
        ],
        cta: { label: 'Voir le parcours DAF', href: '/direction-financiere' },
        priority: false,
      },
    ],
  },

  // ─── OFFRES TPE/PME — refonte premium 3 packs + 10 missions complémentaires ───
  offresTPE: {
    eyebrow: 'Nos offres',
    title: 'Un accompagnement adapté à',
    titleEm: 'votre façon de piloter',
    titleEnd: '.',
    intro:
      "De la gestion quotidienne au pilotage financier plus structuré, nous adaptons notre niveau d'accompagnement à vos enjeux.",
    packs: [
      {
        id: 'essentiel',
        label: 'Capsule Essentiel',
        intro: 'Le nécessaire pour gérer votre entreprise sereinement.',
        bullets: [
          'Comptabilité, fiscalité, social & juridique',
          'Dépôt des pièces simplifié',
          'Un interlocuteur réactif',
          'Des échéances maîtrisées',
          'Une gestion claire et fluide',
        ],
        footer:
          "Pour les dirigeants qui souhaitent déléguer efficacement leur gestion quotidienne.",
        cta: { label: "Découvrir l'offre", href: '/contact?from=dirigeant&pack=essentiel' },
        highlighted: false,
      },
      {
        id: 'pilotage',
        label: 'Capsule Pilotage',
        intro: 'Pour suivre votre activité avec des chiffres utiles.',
        bullets: [
          'Reporting régulier',
          'Suivi de trésorerie',
          'Analyse de rentabilité',
          "Situations comptables dans l'année",
          'Rendez-vous de suivi',
        ],
        footer:
          'Pour les dirigeants qui souhaitent gagner en visibilité et mieux piloter leur activité.',
        cta: { label: "Découvrir l'offre", href: '/contact?from=dirigeant&pack=pilotage' },
        highlighted: true,
        badge: 'Le plus choisi',
      },
      {
        id: 'direction',
        label: 'Capsule Direction',
        intro:
          'Un accompagnement financier plus structuré pour accompagner vos décisions.',
        bullets: [
          'Prévisionnels de trésorerie',
          'Échanges réguliers avec votre expert-comptable',
          'Accompagnement financement & banque',
          'Aide aux recrutements et investissements',
          'Suivi financier plus approfondi',
        ],
        footer:
          "Pour les entreprises en croissance ayant besoin d'un accompagnement plus stratégique.",
        cta: { label: "Découvrir l'offre", href: '/contact?from=dirigeant&pack=direction' },
        highlighted: false,
      },
    ],
    missionsHeading: {
      eyebrow: 'Missions ponctuelles',
      title: 'Des missions complémentaires selon',
      titleEm: 'vos enjeux',
      titleEnd: '.',
      supporting:
        "Certains besoins nécessitent un accompagnement spécifique ou ponctuel.",
    },
    missions: [
      'Arbitrage rémunération dirigeant',
      'Prévisionnel de trésorerie',
      'Business plan & prévisionnels',
      'Accompagnement bancaire & financement',
      'Création de société & structuration',
      'Tableaux de bord sur mesure',
      'Analyse de rentabilité',
      'DAF externalisé',
      'Optimisation des outils de gestion',
      'Structuration holding',
    ],
  },

  // ─── QUESTIONS FAQ — 4 Q&R V1 (réintroduit en V5 pour SEO FAQPage) ───
  questions: {
    eyebrow: 'Questions fréquentes de nos clients dirigeants',
    title: 'Les décisions que vous',
    titleEm: 'prenez seul,',
    titleEnd: 'aujourd’hui',
    items: [
      {
        question: 'Puis-je me verser plus de rémunération cette année ?',
        reponse:
          "Dividendes, salaire, arbitrage fiscal — ce n’est pas une question simple, et elle mérite une réponse chiffrée, pas une réponse de principe.",
      },
      {
        question:
          'Pourquoi ma trésorerie baisse alors que mon activité progresse ?',
        reponse:
          "C’est souvent le signe d’une croissance mal financée ou d’un décalage encaissements / décaissements. Ce n’est pas forcément alarmant — mais ça doit être compris.",
      },
      {
        question: 'Est-ce que je peux recruter cette année ?',
        reponse:
          "Une embauche engage sur 18 à 24 mois. Avant de décider, il faut une projection de trésorerie et une vision claire des marges.",
      },
      {
        question: 'Mon activité est-elle réellement rentable ?',
        reponse:
          "Un chiffre d’affaires en hausse ne signifie pas une rentabilité en hausse. Certaines activités consomment plus qu’elles ne rapportent — sans que le dirigeant le voie clairement.",
      },
    ],
    closing:
      "Si vous vous posez l’une de ces questions, c’est probablement le bon moment pour en parler.",
    cta: { label: 'En parler avec un expert — 30 min', href: '/contact' },
  },

  // ─── OFFRES ETI — 5 missions V1 + intro Ranto ex-DAF ───
  offresETI: {
    eyebrow: 'Missions finance — ETI / Groupes',
    title: 'Quand la finance',
    titleEm: 'doit monter',
    titleEnd: 'en puissance',
    intro:
      "Ranto Rajaonarivo a passé trois ans comme directeur financier d’un groupe en hypercroissance avant de créer Capsule Expertise. Une expérience opérationnelle directe, sur des sujets concrets.",
    missions: [
      {
        num: '01',
        title: 'Organisation comptable multisite',
        description:
          "Harmonisation des pratiques entre entités, création d’un référentiel commun, réduction des délais de remontée d’information. Adapté aux structures qui ont grandi vite et dont la comptabilité n’a pas suivi.",
      },
      {
        num: '02',
        title: 'Reporting groupe',
        description:
          "Conception ou refonte d’un reporting mensuel lisible par le CODIR et les actionnaires. Indicateurs clés, présentation sobre, délai court. L’essentiel, sans superflu.",
      },
      {
        num: '03',
        title: 'Fast close',
        description:
          "Réduction des délais de clôture par identification des points de friction : saisies tardives, validations bloquantes, interfaces entre outils. Résultats mesurables sur 2 à 3 cycles.",
      },
      {
        num: '04',
        title: 'Structuration du service finance',
        description:
          "Clarification des rôles, formalisation des procédures, choix et paramétrage des outils. Un accompagnement opérationnel pour structurer la fonction finance.",
      },
      {
        num: '05',
        title: 'Management de transition',
        description:
          "Départ d’un directeur comptable, remplacement temporaire, renfort sur une période critique. Disponibilité rapide, sans période d’adaptation.",
      },
    ],
    cta: { label: 'Discuter de votre projet', href: '/contact' },
  },

  // ─── MÉTHODE — 3 étapes V1 "approche" en format modèle i · ii · iii ───
  method: {
    eyebrow: 'La méthode',
    title: 'Trois temps,',
    titleEm: 'un calendrier',
    titleEnd: '.',
    steps: [
      {
        index: 'i',
        title: 'Un cadrage clair',
        titleEm: 'dès le départ',
        description:
          "Un premier échange pour comprendre votre situation, vos questions et vos priorités. Sans engagement — vous repartez avec une note de cadrage écrite, même si la collaboration ne se fait pas.",
        duration: '10 jours',
      },
      {
        index: 'ii',
        title: 'Des points réguliers',
        titleEm: 'sur vos chiffres',
        description:
          "Mensuel ou trimestriel — on regarde ensemble, on anticipe les décisions. Lettre de mission signée à deux, révisable à tout moment, sans pénalité.",
        duration: '3 semaines',
      },
      {
        index: 'iii',
        title: 'Une réactivité',
        titleEm: 'engagée',
        description:
          "Toute question reçoit une réponse sous 48 h ouvrées. Un binôme fixe, joignable directement, qui connaît votre dossier. Revue annuelle pour ajuster.",
        duration: 'Engagement écrit',
      },
    ],
  },

  // ─── ÉQUIPE — 2 profils V1 complets ───
  equipe: {
    eyebrow: 'Le cabinet',
    title: 'Deux parcours,',
    titleEm: 'un même engagement.',
    intro:
      "Chez Capsule, vous échangez directement avec les personnes qui suivent votre dossier.",
    membres: [
      {
        prenom: 'Ranto',
        nom: 'Rajaonarivo',
        role: 'Expert-comptable · Associé fondateur',
        badge: 'Associé',
        oec: 'Inscrit à l’Ordre — N° XXXXXX',
        photo: '/placeholder-ranto.svg',
        citation:
          "Comprendre ses chiffres, c’est reprendre la main sur ses décisions.",
        bio: [
          "Ranto accompagne depuis plusieurs années des dirigeants de TPE et PME sur la compréhension de leurs comptes et les décisions financières liées à leur activité.",
          "Après un début de carrière en cabinet d’expertise comptable, il a ensuite travaillé au sein de directions financières de groupes en forte croissance, notamment dans des environnements multisites et sous LBO.",
          "Chez Capsule, il accompagne les dirigeants dans la lecture de leurs chiffres et les choix financiers qui structurent leur entreprise.",
        ],
        competences: [
          'Expertise comptable',
          'Direction financière',
          'Reporting',
          'Transformation finance',
        ],
      },
      {
        prenom: 'Jérôme',
        nom: 'Phou',
        role: 'Directeur de mission · Associé',
        badge: 'Associé',
        oec: null,
        photo: '/placeholder-jerome.svg',
        citation:
          "La rigueur comptable, c’est ce qui rend la stratégie possible.",
        bio: [
          "Jérôme a commencé sa carrière en cabinet d’expertise comptable où il a accompagné de nombreux dirigeants dans la gestion et l’organisation de leur comptabilité.",
          "Il intervient aujourd’hui sur des missions de production comptable, d’organisation des procédures et de reporting financier. Il a également mené plusieurs missions de conseil et de management de transition auprès d’équipes financières d’ETI et de grands groupes.",
          "Chez Capsule, il supervise les dossiers clients et assure le suivi opérationnel des missions.",
        ],
        competences: [
          'Expertise comptable',
          'Management de transition',
          'Supervision comptable',
          'Organisation financière',
        ],
      },
    ],
  },

  // ─── TÉMOIGNAGES — 3 V1 (reformulés pour retirer comparaisons) ───
  temoignages: {
    eyebrow: 'Retours clients',
    title: 'Ce que disent',
    titleEm: 'les dirigeants',
    titleEnd: 'accompagnés',
    items: [
      {
        citation:
          "On avait les chiffres, mais on ne savait pas quoi en faire. Depuis qu’on travaille avec Capsule, on a un tableau de bord qu’on regarde vraiment — et on prend des décisions dessus.",
        prenom: 'Thomas L.',
        fonction: 'Gérant',
        secteur: 'Commerce de gros — 12 salariés',
      },
      {
        citation:
          "Travailler avec un interlocuteur qui a lui-même dirigé un service finance change la nature du dialogue : je peux parler en DAF, il répond en DAF. On gagne du temps à chaque échange.",
        prenom: 'Nathalie R.',
        fonction: 'DAF',
        secteur: 'ETI industrielle — 3 sites',
      },
      {
        citation:
          "En libéral, je ne peux pas gérer la comptabilité et la stratégie en même temps. Capsule a structuré ma rémunération et mes charges — j’y vois beaucoup plus clair.",
        prenom: 'Marc D.',
        fonction: 'Médecin spécialiste',
        secteur: 'Profession libérale',
      },
    ],
    anonymisation: 'Témoignages anonymisés à la demande des clients.',
  },

  // ─── CASE — factice (agence conseil B2B) avec TODO visibles en dev ───
  case: {
    eyebrow: 'Exemple de dossier',
    title: 'Un client,',
    titleEm: 'un chiffre,',
    titleEnd: 'un délai.',
    meta: {
      tag: 'Conseil & services',
      rows: [
        { k: 'Activité', v: 'Agence conseil B2B' },
        { k: 'Effectif', v: '7 salariés' },
        { k: 'CA', v: '850 k€' },
        { k: 'Mission', v: 'Accompagnement + TB' },
        { k: 'Depuis', v: '2024' },
      ],
      isPlaceholder: true,
    },
    quote:
      "J’avais le chiffre d’affaires, mais pas la marge. Le tableau de bord mensuel m’a permis de repricer trois prestations et d’arrêter un service déficitaire sans hésiter.",
    quoteEm: ['marge', 'trois prestations'],
    author: {
      initials: 'SC',
      name: 'S. C.',
      role: 'Gérante · accompagnée depuis 2024',
      isPlaceholder: true,
    },
    results: [
      { num: '+6', em: 'pt', label: 'Marge brute\nsur 6 mois' },
      { num: '3', em: '', label: 'Prestations\nrepositionnées' },
      { num: '0', em: '', label: 'Mission déficitaire\nconservée' },
    ],
  },

  // ─── CTA FINAL — "Tenir les comptes. Tenir le cap." (V1, H2 géant modèle) ───
  cta: {
    eyebrow: 'Passez à l’étape suivante',
    titleLine1: 'Tenir les comptes.',
    titleLine2Em: 'Tenir le cap.',
    deck:
      "Un premier échange de 30 minutes pour comprendre votre situation et vos priorités. Confidentiel, sans engagement. Vous repartez avec une note de cadrage écrite sur vos douze derniers mois — même si nous ne travaillons pas ensemble ensuite.",
    deckEm: 'sans engagement',
    ctaPrimary: {
      label: 'Prendre rendez-vous',
      href: 'mailto:contact@capsule-expertise.fr',
    },
    ctaSecondary: {
      label: 'ou écrire',
      email: 'contact@capsule-expertise.fr',
      href: 'mailto:contact@capsule-expertise.fr',
    },
  },

  footer: {
    desc:
      "Comprendre ses chiffres. Décider plus vite. — un cabinet d’expertise comptable indépendant, à Bry-sur-Marne, inscrit à l’Ordre des experts-comptables d’Île-de-France.",
    descEm: 'indépendant',
    cols: [
      {
        title: 'Cabinet',
        links: [
          { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Missions',
        links: [
          { label: 'Dirigeants TPE/PME', href: '/dirigeants' },
          { label: 'DAF · ETI', href: '/direction-financiere' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'contact@capsule-expertise.fr', href: 'mailto:contact@capsule-expertise.fr' },
          { label: '60 av. du Général Leclerc · 94360 Bry-sur-Marne', href: '#' },
          { label: 'Nous écrire →', href: '/contact' },
        ],
      },
    ],
    legal: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Confidentialité', href: '/confidentialite' },
    ],
  },
} as const;
