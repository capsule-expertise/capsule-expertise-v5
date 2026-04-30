import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

function smoothScroll(href: string) {
  return (e: React.MouseEvent) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };
}

/**
 * HeroSection V5 — itération 4.
 *
 * - H1 2 lignes "Comprendre vos chiffres, / décider plus vite." (ligne 2 ocre)
 * - Subtitle 2 lignes : brand + services
 * - Badge OEC discret
 * - Photo duo en carte arrondie (sans fondu)
 * - Pas de carte 48h, pas de bullets, pas de blobs radial gradient
 * - Pas d'animations sur le texte (seul la photo a un reveal subtle)
 * - Accent éditorial : trait ocre vertical 2px à gauche
 */
export function HeroSection() {
  const reduced = useReducedMotion();
  const H = SITE.hero;

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-ce-violet)',
        paddingTop: '32px',
        paddingBottom: '96px',
      }}
    >
      {/* Accent éditorial — trait ocre vertical à gauche (au lieu des blobs Vercel) */}
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

      <div className="ce-container relative z-10">
        {/* Hero grid : texte / photo */}
        <div
          className="grid gap-10 md:gap-20 items-start"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) auto' }}
        >
          <div>
            <h1
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
            </h1>

            {/* Subtitle 2 lignes — brand + services */}
            <p
              className="text-[var(--color-ce-cream)] mt-6 max-w-[60ch]"
              style={{
                fontSize: 'clamp(16px, 1.4vw, 19px)',
                fontWeight: 500,
                opacity: 0.92,
                letterSpacing: '0.005em',
                lineHeight: 1.4,
              }}
            >
              {H.subtitleBrand}
            </p>
            <p
              className="text-[var(--color-ce-cream)] mt-1.5 max-w-[60ch]"
              style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                fontWeight: 400,
                opacity: 0.65,
                letterSpacing: '0.005em',
                lineHeight: 1.5,
              }}
            >
              {H.subtitleServices}
            </p>

            {/* Badge OEC */}
            <div className="ce-label ce-label--cream mt-8" style={{ color: 'var(--color-ce-terra)' }}>
              {H.oecBadge}
            </div>
          </div>

          {/* Photo duo associés — carte arrondie + ombre, sans fondu */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.7, delay: 0.1, ease: EASE }}
            className="hidden md:block relative overflow-hidden rounded-[var(--radius-lg)]"
            style={{
              width: 'clamp(320px, 28vw, 460px)',
              aspectRatio: '3 / 4',
              boxShadow: '0 30px 60px -30px rgba(5, 14, 26, 0.55)',
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
        </div>

        {/* Photo duo mobile (visible <md uniquement) */}
        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: 0.15, ease: EASE }}
          className="md:hidden mt-10 relative overflow-hidden rounded-[var(--radius-lg)]"
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

        {/* CTAs — séparé par border-top */}
        <div
          className="mt-14 pt-10 border-t border-[rgba(242,237,225,0.12)] flex flex-wrap items-center gap-6"
        >
          <a
            href={H.ctaPrimary.href}
            onClick={smoothScroll(H.ctaPrimary.href)}
            className="ce-btn ce-btn--terra ce-btn--lg"
          >
            {H.ctaPrimary.label}
            <ArrowRight size={16} strokeWidth={1.75} />
          </a>
          <a
            href={H.ctaSecondary.href}
            onClick={smoothScroll(H.ctaSecondary.href)}
            className="inline-flex items-center gap-1.5 text-[15px] text-[rgba(242,237,225,0.72)] hover:text-[var(--color-ce-terra)] transition-colors"
            style={{
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              textDecorationColor: 'rgba(201, 162, 39, 0.45)',
              textDecorationThickness: '1px',
            }}
          >
            {H.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
