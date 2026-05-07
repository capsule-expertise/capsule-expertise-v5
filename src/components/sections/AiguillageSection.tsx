import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * AiguillageSection V8 — refocus audience dirigeants TPE/PME.
 *
 * Une seule card primaire mise en avant (dirigeants TPE/PME, libéraux,
 * indépendants) — la cible business prioritaire. L'option DAF/ETI passe en
 * lien texte discret sous la card, comme un footnote, pour ne pas concurrencer
 * visuellement le parcours principal.
 *
 * La page /direction-financiere reste accessible via la nav top (DAF · ETI)
 * — on ne cache rien, on hiérarchise.
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
      style={{ paddingBlock: '140px 80px' }}
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

        {/* Card primaire dirigeants TPE/PME — pleine largeur (max-w 900) */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex flex-col gap-6 p-10 md:p-14 rounded-[var(--radius-xl)] relative overflow-hidden bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)] max-w-[900px]"
          style={{ boxShadow: '0 30px 60px -30px rgba(5, 14, 26, 0.3)' }}
        >
          {/* Label + Title */}
          <div>
            <div className="text-[11px] font-medium tracking-[0.18em] uppercase mb-4 text-[var(--color-ce-terra-soft)]">
              {primary.label}
            </div>
            <h3
              className="tracking-display"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: 1.02,
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
          <p className="text-[17px] leading-[1.6] max-w-[52ch] text-[rgba(242,237,225,0.78)]">
            {primary.tagline}
          </p>

          {/* Separator */}
          <div className="h-px bg-[rgba(242,237,225,0.14)]" />

          {/* Bullets */}
          <ul className="flex flex-col gap-3 flex-1">
            {primary.bullets.map((b) => (
              <li
                key={b}
                className="relative pl-6 text-[16px] leading-[1.55] text-[rgba(242,237,225,0.92)]"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[12px] w-[10px] h-[2px] bg-[var(--color-ce-terra)]"
                />
                {b}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to={primary.cta.href} className="ce-btn ce-btn--terra ce-btn--lg self-start mt-2">
            {primary.cta.label}
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </motion.article>

        {/* Lien secondaire DAF/ETI — footnote discret, sous séparateur fin */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-16 max-w-[900px]"
        >
          <div className="h-px bg-[rgba(20,37,58,0.12)] mb-6" />
          <p className="text-[15px] text-[rgba(20,37,58,0.65)] leading-[1.6]">
            Vous pilotez la finance d'une ETI ou d'un groupe ?{' '}
            <Link
              to={secondary.cta.href}
              className="inline-flex items-center gap-1.5 text-[var(--color-ce-violet)] hover:text-[var(--color-ce-terra-deep)] transition-colors font-medium"
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                textDecorationColor: 'rgba(124, 108, 255, 0.4)',
                textDecorationThickness: '1px',
              }}
            >
              Voir le parcours direction financière
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
