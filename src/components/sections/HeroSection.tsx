import { motion, type Variants } from 'framer-motion';
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
 * HeroSection V5 — présentation modèle + copy V1.
 *
 * - H1 V1 "Comprendre ses chiffres. *Décider plus vite.*" en taille géante modèle
 * - Eyebrow avec géo (reco audit)
 * - Deck V1 reformulé
 * - Bullets V1 (3 engagements)
 * - CTA dual V1 (TPE prioritaire / DAF secondaire en texte-link)
 * - Reassurance card 48h (pas de prix, audit-compliant)
 * - Pulse live status
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
        paddingTop: '88px',
        paddingBottom: '120px',
      }}
    >
      {/* Ornement radial terra droite */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: '-300px',
          top: '20%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,90,46,0.18) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />
      {/* Ornement radial violet gauche */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: '-100px',
          bottom: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(58,37,102,0.6) 0%, transparent 65%)',
          zIndex: 0,
        }}
      />

      <div className="ce-container relative z-10">
        {/* Pulse status tag */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center gap-3 mb-10 py-2 pl-3 pr-4 border border-[rgba(242,237,225,0.12)] rounded-full"
          style={{ background: 'rgba(242,237,225,0.06)' }}
        >
          <div className="ce-pulse" />
          <span className="text-[13px] text-[rgba(242,237,225,0.78)]">{H.pulse}</span>
        </motion.div>

        {/* Eyebrow avec géo (reco audit) */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={fadeUp}
          className="ce-label ce-label--cream mb-6"
        >
          {H.eyebrow}
        </motion.div>

        {/* Hero grid : H1 + reassurance card */}
        <div
          className="grid gap-10 md:gap-20 items-end"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) auto' }}
        >
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.12}
            variants={fadeUp}
            className="tracking-display text-[var(--color-ce-cream)] max-w-[14ch]"
            style={{
              fontSize: 'clamp(52px, 10.5vw, 168px)',
              lineHeight: 0.92,
              fontWeight: 500,
              letterSpacing: '-0.042em',
            }}
          >
            {H.titleLine1}
            <br />
            {H.titleLine2}
            <br />
            <em>{H.titleLineEm}</em>
          </motion.h1>

          {/* Photo duo associés — portrait fondu dans le fond violet */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.95, delay: 0.2, ease: EASE }}
            className="hidden md:block relative pointer-events-none"
            style={{
              width: 'clamp(340px, 30vw, 500px)',
              aspectRatio: '3 / 4',
              WebkitMaskImage:
                'radial-gradient(ellipse 60% 70% at 50% 45%, #000 35%, rgba(0,0,0,0.5) 65%, transparent 90%)',
              maskImage:
                'radial-gradient(ellipse 60% 70% at 50% 45%, #000 35%, rgba(0,0,0,0.5) 65%, transparent 90%)',
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
          initial="hidden"
          animate="visible"
          custom={0.18}
          variants={fadeUp}
          className="md:hidden mt-8 relative pointer-events-none"
          style={{
            aspectRatio: '4 / 3',
            WebkitMaskImage:
              'radial-gradient(ellipse 65% 70% at 50% 45%, #000 35%, rgba(0,0,0,0.5) 65%, transparent 92%)',
            maskImage:
              'radial-gradient(ellipse 65% 70% at 50% 45%, #000 35%, rgba(0,0,0,0.5) 65%, transparent 92%)',
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

        {/* Deck + bullets + dual CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.32}
          variants={fadeUp}
          className="mt-14 pt-10 border-t border-[rgba(242,237,225,0.12)] grid gap-10 md:gap-16 items-start"
          style={{ gridTemplateColumns: 'minmax(0, 1.1fr) auto' }}
        >
          <div>
            <p
              className="text-[rgba(242,237,225,0.82)] max-w-[60ch] mb-7"
              style={{ fontSize: '21px', lineHeight: 1.5 }}
            >
              {H.deck.split(H.deckEm).map((chunk, i, arr) => (
                <span key={i}>
                  {chunk}
                  {i < arr.length - 1 && (
                    <em
                      className="font-serif italic text-[var(--color-ce-terra-soft)]"
                      style={{ fontSize: '1.05em' }}
                    >
                      {H.deckEm}
                    </em>
                  )}
                </span>
              ))}
            </p>
            <ul className="flex flex-col gap-2.5">
              {H.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-[16px] leading-[1.55] text-[var(--color-ce-cream)]"
                >
                  <span
                    aria-hidden
                    className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--color-ce-terra)] mt-[0.55em] shrink-0"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 items-start">
            {/* Reassurance 48h compacte (déplacée depuis la grille supérieure) */}
            <div
              className="hidden md:flex flex-col gap-2 px-6 py-5 min-w-[260px] bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)] rounded-[var(--radius-lg)]"
              style={{ boxShadow: '0 20px 40px -25px rgba(11,6,24,0.45)' }}
            >
              <div className="ce-label ce-label--violet">{H.reassurance.label}</div>
              <div className="flex items-baseline gap-2.5">
                <div
                  style={{
                    fontSize: '52px',
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {H.reassurance.num}
                  <em
                    className="font-serif italic text-[var(--color-ce-terra)]"
                    style={{ fontWeight: 400 }}
                  >
                    {H.reassurance.unit}
                  </em>
                </div>
                <div className="text-[12px] text-[rgba(45,27,78,0.6)] leading-[1.3] whitespace-pre-line">
                  {H.reassurance.unitLine}
                </div>
              </div>
              <div className="text-[12px] text-[rgba(45,27,78,0.72)] pt-2.5 border-t border-[rgba(45,27,78,0.1)] leading-[1.5] whitespace-pre-line">
                {H.reassurance.footer}
              </div>
            </div>

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
              className="inline-flex items-center gap-1.5 text-[14px] text-[rgba(242,237,225,0.72)] hover:text-[var(--color-ce-terra)] transition-colors"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'rgba(217, 90, 46, 0.45)',
                textDecorationThickness: '1px',
              }}
            >
              {H.ctaSecondary.label}
            </a>
            <p className="text-[12px] text-[rgba(242,237,225,0.5)] mt-1">
              Parler de votre situation — sans engagement
            </p>
          </div>
        </motion.div>

        {/* Reassurance card mobile */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
          className="md:hidden flex flex-col gap-3 px-7 py-6 mt-10 bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)] rounded-[var(--radius-lg)]"
        >
          <div className="ce-label ce-label--violet">{H.reassurance.label}</div>
          <div className="flex items-baseline gap-2.5">
            <div
              style={{ fontSize: '60px', lineHeight: 1, fontWeight: 500, letterSpacing: '-0.04em' }}
            >
              {H.reassurance.num}
              <em className="font-serif italic text-[var(--color-ce-terra)]" style={{ fontWeight: 400 }}>
                {H.reassurance.unit}
              </em>
            </div>
            <div className="text-[13px] text-[rgba(45,27,78,0.6)] whitespace-pre-line">
              {H.reassurance.unitLine}
            </div>
          </div>
          <div className="text-[14px] text-[rgba(45,27,78,0.72)] pt-3 border-t border-[rgba(45,27,78,0.1)] whitespace-pre-line">
            {H.reassurance.footer}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
