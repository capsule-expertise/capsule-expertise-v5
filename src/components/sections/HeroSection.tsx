import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HeroSection V8 — test layout split biais.
 *
 * Layout :
 * - Côté gauche (texte) : OEC logo B&W (haut-gauche) + eyebrow géo + H1
 *   (ligne 2 italique gold) + subtitle + CTA primary gold
 * - Côté droite (photo) : photo en diagonale via clip-path, fondu mask-image
 *   sur le bord gauche (transition douce vers navy bg)
 *
 * Sur mobile : photo en background avec dark overlay (fallback), texte par-dessus.
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
      {/* Photo desktop — biais clip-path + fondu mask-image gauche.
          Container élargi à 68vw (plus de photo à gauche) + clip-path 8%
          (biais moins agressif). objectPosition '50% 22%' garde 2 fondateurs. */}
      <motion.div
        initial={{ opacity: 0, x: reduced ? 0 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduced ? 0 : 1.2, delay: 0.1, ease: EASE }}
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: 'clamp(620px, 68vw, 1300px)',
          zIndex: 1,
          // Clip-path biais doux (8% — photo s'étend plus à gauche)
          clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
          WebkitClipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 22%' }}
        />
        {/* Fondu mask sur bord gauche pour transition douce vers navy bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, var(--color-ce-violet) 0%, rgba(14,26,46,0.7) 12%, rgba(14,26,46,0.2) 25%, transparent 40%)',
          }}
        />
        {/* Overlay navy léger global pour harmoniser couleurs */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14, 26, 46, 0.18)' }}
        />
      </motion.div>

      {/* Photo mobile (<md) — plein écran. Photo dominante, gradient sur la
          moitié inférieure pour faire lire le texte qui est centré-bas. */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <img
          src={H.heroPhoto.src}
          alt=""
          loading="eager"
          className="block w-full h-full object-cover object-[72%_22%]"
          style={{ minWidth: '100%', minHeight: '100%' }}
        />
        {/* Léger overlay global pour cohérence couleur */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14, 26, 46, 0.22)' }}
        />
        {/* Gradient navy bas→haut, couvre 70% bas pour lecture texte centré */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(14,26,46,0.94) 0%, rgba(14,26,46,0.78) 30%, rgba(14,26,46,0.4) 55%, rgba(14,26,46,0.08) 80%, transparent 100%)',
          }}
        />
      </div>

      {/* Container text — sur mobile : items-center mais texte décalé vers bas
          via padding pour rester visible avec photo dominante en haut.
          Sur desktop : items-center (texte verticalement centré, photo biais). */}
      <div
        className="ce-container relative z-10 flex items-center"
        style={{ minHeight: 'calc(100svh - var(--spacing-nav-h))' }}
      >
        <div className="max-w-[560px] md:max-w-[600px] pt-32 pb-8 md:py-12">
          {/* Eyebrow — texte simple sans pastille (pas de .ce-label) */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mb-5 text-[12px] font-medium tracking-[0.18em] uppercase"
            style={{ color: 'rgba(242, 237, 225, 0.6)' }}
          >
            {H.eyebrow}
          </motion.div>

          {/* H1 — ligne 1 ivoire, ligne 2 italique gold (Fraunces) */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="tracking-display text-[var(--color-ce-cream)] max-w-[22ch]"
            style={{
              fontSize: 'clamp(32px, 4.8vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            {H.titleLine1}
            <br />
            <span
              className="font-serif italic"
              style={{
                color: 'var(--color-ce-terra)',
                fontWeight: 400,
                letterSpacing: '-0.015em',
              }}
            >
              {H.titleLine2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="text-[var(--color-ce-cream)] mt-7 max-w-[44ch]"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              opacity: 0.85,
              lineHeight: 1.5,
            }}
          >
            {H.subtitleBrand}
          </motion.p>

          {/* CTA primary gold (filled champagne, dark text) */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={fadeUp}
            className="mt-9"
          >
            <Link
              to={H.ctaPrimary.href}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-[var(--radius-sm)] font-medium text-[15px] tracking-[-0.005em] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: 'var(--color-ce-terra)',
                color: 'var(--color-ce-violet)',
                boxShadow: '0 8px 24px -10px rgba(212, 182, 107, 0.5)',
              }}
            >
              {H.ctaPrimary.label}
              <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
