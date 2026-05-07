import { motion, type Variants } from 'framer-motion';
import { SITE } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HeroSection V7 — photo plein écran + dark overlay (style hashtagfinance).
 *
 * Refonte de la hiérarchie visuelle :
 * - Photo prend toute la section en background (au lieu d'un container à droite
 *   avec mask gradient artificiel)
 * - Dark overlay navy semi-transparent (~55%) globalement par-dessus la photo
 * - Subtle gradient additionnel à gauche pour aider la lecture du texte sans
 *   créer de "rideau" artificiel
 * - H1 réduit (-18%), line-height 1.15, padding-y augmenté → respiration et luxe
 * - Plus de trait ocre vertical (devient redondant avec photo dominante)
 *
 * Hiérarchie visuelle restaurée :
 *   1. Photo (dominante par sa surface)
 *   2. H1 (présence forte mais respirante)
 *   3. Subtitle + badge OEC (accent secondaires)
 *   4. Nav (chrome fonctionnel)
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
        minHeight: 'calc(100svh - var(--spacing-nav-h))',
      }}
    >
      {/* Photo en container droite (~60vw) — pas plein écran pour éviter le
          sur-zoom d'object-cover. Le 40vw gauche reste navy avec le texte. */}
      <motion.div
        initial={{ opacity: 0, scale: reduced ? 1 : 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduced ? 0 : 1.4, delay: 0, ease: EASE }}
        aria-hidden
        className="absolute top-0 bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: 'clamp(500px, 62vw, 1100px)',
          zIndex: 0,
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '55% 35%' }}
        />
        {/* Dark overlay navy léger — harmonise avec navy bg sans assombrir la photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14, 26, 46, 0.35)' }}
        />
        {/* Fade gauche : la photo se fond doucement dans le navy bg du hero */}
        <div
          className="absolute inset-y-0 left-0 pointer-events-none"
          style={{
            width: '45%',
            background:
              'linear-gradient(to right, var(--color-ce-violet) 0%, rgba(14,26,46,0.6) 35%, rgba(14,26,46,0.2) 70%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Container text par-dessus, H1 + subtitle + badge OEC */}
      <div className="ce-container relative z-10 flex items-center" style={{ minHeight: 'calc(100svh - var(--spacing-nav-h))' }}>
        <div className="max-w-[640px] md:max-w-[720px] py-20 md:py-28">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="tracking-display text-[var(--color-ce-cream)] max-w-[26ch]"
            style={{
              fontSize: 'clamp(30px, 5.3vw, 72px)',
              lineHeight: 1.15,
              letterSpacing: '-0.035em',
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
            className="text-[var(--color-ce-cream)] mt-8 max-w-[60ch]"
            style={{
              fontSize: 'clamp(16px, 1.3vw, 18px)',
              fontWeight: 500,
              opacity: 0.92,
              letterSpacing: '0.005em',
              lineHeight: 1.5,
            }}
          >
            {H.subtitleBrand}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="ce-label mt-10"
            style={{ color: 'var(--color-ce-terra)' }}
          >
            {H.oecBadge}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
