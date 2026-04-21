# Capsule Expertise — Site vitrine V4 (Mix)

Site vitrine annexe du cabinet Capsule Expertise. **V4 = mix** de :

- la **DA du modèle `03-landing-mix.html`** (typographie Instrument Sans/Serif, tailles géantes `clamp(56px, 11vw, 176px)`, price card, pulse live, facts stripe, method steps romains, case study sidebar, CTA final XXL)
- la **stack technique V3** (Vite 7 + React 19 + TS strict + Tailwind 4 + Framer Motion 12)
- la **rigueur déontologique V3** (aucune formulation comparative envers les confrères — voir section dédiée)
- le **ton commercial** du modèle mix (transparence des honoraires, pulse status, call-to-action directs)

Coexiste avec V1, V3 et les autres dossiers — les trois sites peuvent tourner côte à côte pour comparaison.

## Ce qui est nouveau en V4 vs V3

- **Typographie** : Playfair Display + DM Sans + Inter Tight → **Instrument Sans + Instrument Serif** (2 polices seulement, plus contemporaines)
- **Échelle typo** : H1 `clamp(56px, 11vw, 176px)` line-height 0.9 letter-spacing -0.045em (V3 était clamp(2.5rem, 5.5vw, 4.25rem))
- **Palette** : crème V3 `#FAF8F2` → V4 `#F2EDE1` (plus chaud) · terra V3 `#A54120` → V4 `#D95A2E` (plus vif, meilleur contraste sur violet)
- **Fond de base** : V3 crème clair + violet accent → V4 **violet plein** base + crème îlots (inverse, plus éditorial)
- **Structure sections** (V4 reprend celle du modèle mix) :
  1. Hero géant (H1 + price card + pulse dot)
  2. Facts stripe (4 chiffres, fond crème)
  3. Offres (2 cards : Dirigeants cream + DAF·ETI violet-deep, **avec prix**)
  4. Method (3 steps romains `i · ii · iii`, sticky left title)
  5. Équipe (cards violet-deep, photos 4/5, badge terra)
  6. Case study (sidebar sticky meta + citation XXL + résultats chiffrés)
  7. CTA final XXL (fond violet-ink, aura radial terra, H2 `clamp(64px, 9vw, 148px)`)
- **Price card** en hero + **prix affichés** dans les offres (obligation de transparence des honoraires, art. 156 Code de déontologie OEC)
- Le **formulaire de contact V3 avec Formspree + RGPD** n'est pas dans V4 (remplacé par CTA direct `mailto:` + `tel:`). Si tu veux le réactiver : dis-moi, c'est 50 lignes à importer depuis V3.
- Sections V3 supprimées : `AiguillageSection`, `QuestionsSection`, `RessourcesSection`, `OffresETISection` (fusionné dans `OffresSection`)

## Stack (identique V3)

- Vite 7 + React 19 + TypeScript 5.9 strict
- Tailwind CSS 4 (plugin Vite, `@theme` tokens)
- Framer Motion 12 (staggered reveals, scroll-triggered)
- Lucide React (icônes)

## Déontologie OEC — copy retouché (vs modèle mix)

Les formulations du modèle `03-landing-mix.html` qui enfreignent la déonto ont été reformulées :

| Modèle mix (à éviter) | V4 (retenu) |
|---|---|
| « Diagnostic gratuit » | « Premier échange — 30 min » / « Note de cadrage » |
| « Un interlocuteur, pas un standard » | « Un binôme fixe, joignable directement » |
| « Un cabinet nouvelle génération » | « Cabinet d'expertise comptable indépendant » |
| « 6 collaborateurs, pas de sous-traitance » | « 6 collaborateurs, missions traitées en interne » |

## Développement local

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm typecheck
pnpm build
pnpm preview
```

## Déploiement

Instructions GitHub + Vercel identiques à V3 :

```bash
# GitHub
cd capsule-expertise-v4
git init
git add .
git commit -m "init: Capsule Expertise V4 — Mix (typo Instrument + commercial premium)"
gh repo create capsule-expertise-v4 --public --source=. --push

# Vercel
npx vercel           # preview
npx vercel --prod    # production
```

## Checklist avant go-live (⚠️)

TODO visibles en dev (class `.ce-todo`, verts sur dashed). À vider dans `src/content/site.ts` :

- [ ] **Tarif forfait dirigeant** (`hero.priceCard.num` + `offres.cards[0].price.num`) — actuellement `250€`, à confirmer ou ajuster
- [ ] **N° d'inscription OEC** (`legal.oecNumber`)
- [ ] **SIRET, RCS, TVA** (`legal.siret/rcs/tva`)
- [ ] **Téléphone** (`legal.phone` + `legal.phoneHref`)
- [ ] **Adresse postale** (`legal.address.street`)
- [ ] **LinkedIn** entreprise et individuel (`legal.linkedIn` + `equipe.membres[].linkedIn`)
- [ ] **Troisième membre d'équipe** (`equipe.membres[2]`) — si équipe à 2, retirer cette carte ou la compléter
- [ ] **Chiffres facts** (`facts[].num`) — `6 collaborateurs`, `120 dossiers actifs` à confirmer
- [ ] **Étude de cas** (`case.*`) — contenu placeholder, à remplacer par un dossier réel anonymisé
- [ ] **Shooting photo** — `/public/placeholder-*.svg` à remplacer
- [ ] Pages légales `/mentions-legales`, `/confidentialite`, `/cgv` à créer
- [ ] Pour masquer les TODO verts en prod : ajouter `data-prod="true"` sur `<body>` dans `index.html`
- [ ] Si besoin : réactiver le formulaire V3 (Formspree + RGPD) à la place du `mailto:` direct

## Comparaison rapide V3 ↔ V4

|  | V3 — Conseil institutionnel moderne | V4 — Mix éditorial commercial |
|---|---|---|
| Typo display | Playfair Display (variable) | Instrument Sans 500 + Instrument Serif italic |
| Taille H1 max | 68px | **176px** |
| Fond base | Crème `#FAF8F2` | **Violet `#2D1B4E`** |
| Terracotta | `#A54120` (prestige) | `#D95A2E` (vif) |
| Structure | 7 sections : Aiguillage + Questions + Offres TPE + ETI + Équipe + Ressources + Contact | 7 sections : Hero + Facts + Offres + Method + Équipe + Case + CTA |
| Prix affichés | Non | **Oui** (art. 156 déonto) |
| Pulse live status | Non | **Oui** |
| Case study | Non | **Oui** |
| Formulaire contact | Oui (Formspree + RGPD) | Non (CTA mailto direct) |

## Structure

```
capsule-expertise-v4/
├── index.html                    # SEO + Instrument Sans/Serif + JSON-LD
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                 # Tokens V4 (palette + Instrument + radius)
│   ├── content/site.ts           # ⭐ Tout le copy centralisé
│   ├── hooks/ (useInView, useReducedMotion)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx           # Sticky violet, wordmark Capsule.
│   │   │   └── Footer.tsx        # 4 cols + mentions légales complètes
│   │   └── sections/
│   │       ├── HeroSection.tsx   # ⭐ H1 176px + price card + pulse
│   │       ├── FactsSection.tsx  # Stripe crème 4 chiffres
│   │       ├── OffresSection.tsx # 2 cards + prix (Dirigeants + DAF·ETI)
│   │       ├── MethodSection.tsx # 3 steps i · ii · iii, sticky left
│   │       ├── EquipeSection.tsx # Team cards violet-deep avec badge
│   │       ├── CaseSection.tsx   # Sidebar meta sticky + quote XXL + résultats
│   │       └── ContactSection.tsx # CTA final géant + aura radial
│   └── pages/Home.tsx
└── vercel.json
```

## Licence

Code propriétaire — Capsule Expertise.
