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
        background: 'var(--color-ce-violet)',
        paddingTop: '32px',
        paddingBottom: '96px',
        minHeight: '600px',
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

      {/* Photo full-bleed à droite — immersive, sort du container */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.2, delay: 0.1, ease: EASE }}
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 right-0 pointer-events-none"
        style={{
          width: 'clamp(420px, 42vw, 720px)',
          zIndex: 1,
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '30% 30%' }}
        />
        {/* Gradient fade left edge — fond violet → photo */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '40%',
            background:
              'linear-gradient(to right, var(--color-ce-violet) 0%, rgba(20, 37, 58, 0.6) 50%, transparent 100%)',
          }}
        />
        {/* Gradient fade bottom edge — fond violet remontant */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '30%',
            background:
              'linear-gradient(to top, var(--color-ce-violet) 0%, transparent 100%)',
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
              fontWeight: 500,
              letterSpacing: '-0.03em',
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

      {/* Photo mobile (visible <md uniquement) — carte arrondie classique */}
      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduced ? 0 : 0.7, delay: 0.3, ease: EASE }}
        className="md:hidden mx-6 mt-2 mb-2 relative overflow-hidden rounded-[var(--radius-lg)]"
        style={{
          aspectRatio: '4 / 3',
          background: 'var(--color-ce-violet-deep)',
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
      </motion.div>
    </section>
  );
}
