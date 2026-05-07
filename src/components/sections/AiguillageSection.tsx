import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * AiguillageSection V9 — refocus dirigeants TPE/PME (card large) + DAF en
 * petite card secondaire à côté.
 *
 * Layout asymétrique 65/35 sur desktop pour clarifier la hiérarchie business :
 * - Card primaire (gauche, 65%) : dirigeants TPE/PME, full content
 *   (label, title, tagline, 4 bullets, CTA primary purple)
 * - Card secondaire (droite, 35%) : DAF/ETI, condensée (label, title, tagline
 *   court, CTA ghost)
 *
 * Sur mobile (<md) : passe en 1 colonne, dirigeants en haut (full content),
 * DAF en bas (toujours plus petit/condensé).
 */
export function AiguillageSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const A = SITE.aiguillage;
  const primary = A.parcours[0]; // dirigeants TPE/PME
  const secondary = A.parcours[1]; // DAF / ETI

  return (
    <section
      id="parcours"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '120px 100px' }}
    >
      <div className="ce-container">
        {/* Head */}
        <div className="ce-section-head ce-section-head--light mb-12">
          <div>
            <div className="ce-label ce-label--on-light mb-6">{A.eyebrow}</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: EASE }}
              className="tracking-display text-[var(--color-ce-violet)] max-w-[18ch]"
              style={{
                fontSize: 'clamp(40px, 6.4vw, 94px)',
                lineHeight: 0.94,
                fontWeight: 500,
              }}
            >
              {A.title} <em>{A.titleEm}</em>
              {A.titleEnd}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-7 text-[rgba(20,37,58,0.78)] max-w-[58ch]"
              style={{ fontSize: '18px', lineHeight: 1.55 }}
            >
              {A.intro}
            </motion.p>
          </div>
        </div>

        {/* Grid asymétrique 65/35 desktop, 1 col mobile */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-[1.85fr_1fr]">
          {/* Card primaire dirigeants TPE/PME */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="flex flex-col gap-5 p-9 md:p-12 rounded-[var(--radius-xl)] relative overflow-hidden bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)]"
            style={{ boxShadow: '0 30px 60px -30px rgba(5, 14, 26, 0.3)' }}
          >
            {/* Label + Title */}
            <div>
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase mb-3 text-[var(--color-ce-terra-soft)]">
                {primary.label}
              </div>
              <h3
                className="tracking-display"
                style={{
                  fontSize: 'clamp(26px, 3.2vw, 40px)',
                  lineHeight: 1.05,
                  fontWeight: 500,
                  color: 'inherit',
                  letterSpacing: '-0.025em',
                }}
              >
                {primary.title}
                <br />
                <em>{primary.titleEm}</em>
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-[16px] leading-[1.55] max-w-[48ch] text-[rgba(242,237,225,0.78)]">
              {primary.tagline}
            </p>

            {/* Separator */}
            <div className="h-px bg-[rgba(242,237,225,0.14)]" />

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5 flex-1">
              {primary.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-6 text-[15px] leading-[1.55] text-[rgba(242,237,225,0.92)]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[11px] w-[10px] h-[2px] bg-[var(--color-ce-terra)]"
                  />
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA primary */}
            <Link to={primary.cta.href} className="ce-btn ce-btn--terra self-start mt-2">
              {primary.cta.label}
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </motion.article>

          {/* Card secondaire DAF / ETI — condensée, sobre */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="flex flex-col gap-4 p-8 md:p-9 rounded-[var(--radius-xl)] relative overflow-hidden bg-[#ffffff] text-[var(--color-ce-violet)] border border-[rgba(20,37,58,0.1)]"
          >
            {/* Label + Title */}
            <div>
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase mb-3 text-[var(--color-ce-terra-deep)]">
                {secondary.label}
              </div>
              <h3
                className="tracking-display"
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  lineHeight: 1.1,
                  fontWeight: 500,
                  color: 'inherit',
                  letterSpacing: '-0.02em',
                }}
              >
                {secondary.title}
                <br />
                <em>{secondary.titleEm}</em>
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-[14px] leading-[1.55] text-[rgba(20,37,58,0.7)] flex-1">
              {secondary.tagline}
            </p>

            {/* CTA secondaire (ghost light) */}
            <Link
              to={secondary.cta.href}
              className="inline-flex items-center gap-1.5 text-[14px] text-[var(--color-ce-violet)] hover:text-[var(--color-ce-terra-deep)] transition-colors font-medium self-start mt-1"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'rgba(124, 108, 255, 0.4)',
                textDecorationThickness: '1px',
              }}
            >
              {secondary.cta.label}
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
