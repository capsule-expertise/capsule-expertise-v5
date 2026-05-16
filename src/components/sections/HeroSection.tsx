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
      {/* Photo desktop — biais clip-path + fondu mask-image gauche */}
      <motion.div
        initial={{ opacity: 0, x: reduced ? 0 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: reduced ? 0 : 1.2, delay: 0.1, ease: EASE }}
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: 'clamp(500px, 55vw, 1000px)',
          zIndex: 1,
          // Clip-path en biais : bord gauche diagonal de haut-droit vers bas-gauche
          clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
          WebkitClipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)',
        }}
      >
        <img
          src={H.heroPhoto.src}
          alt={H.heroPhoto.alt}
          loading="eager"
          className="w-full h-full object-cover"
          style={{ objectPosition: '35% 20%' }}
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

      {/* Photo mobile (<md) — fallback : background plein écran + overlay foncé */}
      <div
        aria-hidden
        className="md:hidden absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src={H.heroPhoto.src}
          alt=""
          loading="eager"
          className="w-full h-full object-cover object-[50%_22%]"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(14, 26, 46, 0.78)' }}
        />
      </div>

      {/* Container text par-dessus, à gauche */}
      <div
        className="ce-container relative z-10 flex items-center"
        style={{ minHeight: 'calc(100svh - var(--spacing-nav-h))' }}
      >
        <div className="max-w-[560px] md:max-w-[600px] py-16 md:py-24">
          {/* OEC logo (B&W via filter grayscale) — top-left */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="mb-7 flex items-center gap-3"
          >
            <img
              src="/oec-logo.svg"
              alt="Membre de l'Ordre des Experts-Comptables"
              width={120}
              height={36}
              style={{
                height: '28px',
                width: 'auto',
                filter: 'grayscale(1) brightness(1.8) opacity(0.85)',
              }}
            />
            <span
              aria-hidden
              className="text-[11px] font-medium tracking-[0.16em] uppercase text-[rgba(242,237,225,0.55)]"
            >
              · Paris IDF
            </span>
          </motion.div>

          {/* Eyebrow géo */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="ce-label ce-label--cream mb-5"
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
