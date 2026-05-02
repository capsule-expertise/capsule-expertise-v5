import { motion, type Variants } from 'framer-motion';
import { SITE } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HeroSection V5 — itération 5.
 *
 * - H1 2 lignes "Maîtrisez vos chiffres, / Décidez plus vite." (ligne 2 ocre)
 * - Subtitle 1 ligne (brand statement)
 * - Badge OEC
 * - Photo full-bleed à droite (immersive, sort du container, jusqu'au bord viewport)
 * - Pas de CTAs (le choix de parcours se fait dans AiguillageSection juste après)
 * - Animations framer-motion fadeUp restaurées sur le texte
 * - Trait ocre vertical 2px à gauche comme accent éditorial
 */
export function HeroSection() {
  const reduced = useReducedMotion();
  const H = SITE.hero;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.8, delay, ease: EASE },
    }),
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        // Gradient linéaire navy → navy profond pour profondeur stable.
        // Top légèrement plus clair, bas plus dense — ancrage visuel "cabinet
        // sérieux nuit calme" sans le côté SaaS du radial glow.
        background:
          'linear-gradient(180deg, var(--color-ce-violet-rich) 0%, var(--color-ce-violet) 50%, var(--color-ce-violet-deep) 100%)',
        paddingTop: '32px',
        paddingBottom: '96px',
        // Plein viewport sous la nav — pas de bande de la section suivante
        // (Aiguillage cream) visible avant scroll.
        minHeight: 'calc(100svh - var(--spacing-nav-h))',
      }}
    >
      {/* Accent éditorial — trait ocre vertical à gauche */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: 0,
          top: 0,
          width: '2px',
          height: '50%',
          background: 'var(--color-ce-terra)',
          zIndex: 0,
        }}
      />

      {/* Photo full-bleed à droite — 3 effets cumulatifs pour fondre dans le navy */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.2, delay: 0.1, ease: EASE }}
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: 'clamp(420px, 42vw, 720px)',
          zIndex: 1,
          // (a) Mask gradient — fond progressif vers la gauche dans le navy.
          // Plus de photo visible (65% opaque vs 60% avant) + courbe en S
          // (3 stops dont 0.5 à 90%) pour une transition plus douce.
          WebkitMaskImage:
            'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)',
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '30% 62%' }}
        />
        {/* (b) Overlay color-blend navy multiply 0.15 — uniformise les températures */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: '#0A1F3A',
            mixBlendMode: 'multiply',
            opacity: 0.15,
          }}
        />
        {/* (c) Vignette navy périphérique — referme les bords contre le fond */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 200px 80px rgba(10, 31, 58, 0.6)',
          }}
        />
      </motion.div>

      <div className="ce-container relative z-10">
        <div className="max-w-[640px] md:max-w-[720px] py-12 md:py-20">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="tracking-display text-[var(--color-ce-cream)] max-w-[28ch]"
            style={{
              fontSize: 'clamp(36px, 6.5vw, 88px)',
              lineHeight: 1.0,
              // fontWeight retiré : laisse le CSS de base (h1 = 800) s'appliquer
              letterSpacing: '-0.04em',
            }}
          >
            {H.titleLine1}
            <br />
            <span style={{ color: 'var(--color-ce-terra)' }}>{H.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
            className="text-[var(--color-ce-cream)] mt-7 max-w-[60ch]"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              fontWeight: 500,
              opacity: 0.92,
              letterSpacing: '0.005em',
              lineHeight: 1.4,
            }}
          >
            {H.subtitleBrand}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="ce-label mt-8"
            style={{ color: 'var(--color-ce-terra)' }}
          >
            {H.oecBadge}
          </motion.div>
        </div>
      </div>

      {/* Photo mobile (<md) — background plein écran de la section + overlay navy 0.85
          pour que le texte (H1 + subtitle + badge) reste lisible par-dessus. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src={H.heroPhoto.src}
          alt=""
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 62%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10, 31, 58, 0.85)' }}
        />
      </div>
    </section>
  );
}
