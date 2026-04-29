import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

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
 * OffresSection V5 — détail complet V1 : bloc 01 Comptabilité, bloc 02 Pilotage,
 * + bloc 03 interventions ponctuelles. Copy verbatim V1.
 * Pas de prix affichés (audit + demande client).
 */
export function OffresSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const O = SITE.offresTPE;

  return (
    <section
      id="dirigeant"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '140px 120px' }}
    >
      <div className="ce-container">
        {/* Head */}
        <div className="mb-14 max-w-[720px]">
          <div className="ce-label ce-label--on-light mb-6">{O.eyebrow}</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE }}
            className="tracking-display text-[var(--color-ce-violet)] mb-5 max-w-[18ch]"
            style={{
              fontSize: 'clamp(40px, 6.4vw, 94px)',
              lineHeight: 0.94,
              fontWeight: 500,
            }}
          >
            {O.title} <em>{O.titleEm}</em> {O.titleEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="text-[17px] leading-[1.65] text-[rgba(20, 37, 58,0.72)] max-w-[62ch]"
          >
            {O.intro}
          </motion.p>
        </div>

        {/* 2 blocs niveaux */}
        <div
          className="grid gap-5 mb-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}
        >
          {O.blocs.map((b, i) => (
            <motion.article
              key={b.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.3 + i * 0.12, ease: EASE }}
              className="flex flex-col gap-5 p-10 bg-[#ffffff] border border-[rgba(20, 37, 58,0.1)] rounded-[var(--radius-lg)]"
            >
              {/* N° label — mono discret */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="text-[var(--color-ce-terra-deep)]"
                  style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.14em',
                  }}
                  aria-hidden
                >
                  N° {b.num}
                </div>
              </div>
              <h3
                className="text-[var(--color-ce-violet)]"
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {b.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-[var(--color-ce-terra-deep)]" aria-hidden />

              {/* Description */}
              <p className="text-[16px] leading-[1.65] text-[rgba(20, 37, 58,0.75)]">
                {b.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5 mt-2">
                {b.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="relative pl-6 text-[16px] leading-[1.55] text-[rgba(20, 37, 58,0.88)]"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[12px] w-[10px] h-[2px] bg-[var(--color-ce-terra-deep)]"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Bloc 03 — Interventions ponctuelles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.55, ease: EASE }}
          className="p-10 bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)] rounded-[var(--radius-lg)] mb-10"
        >
          <div className="ce-label ce-label--cream mb-3">
            {O.interventions.eyebrow}
          </div>
          <h3
            className="text-[var(--color-ce-cream)] mb-3"
            style={{
              fontSize: '26px',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {O.interventions.title} <em>{O.interventions.titleEm}</em>
          </h3>
          <p className="text-[16px] leading-[1.65] text-[rgba(242,237,225,0.72)] mb-7 max-w-[62ch]">
            {O.interventions.intro}
          </p>
          <div
            className="grid gap-x-10 gap-y-2"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
          >
            <ul className="flex flex-col gap-2.5">
              {O.interventions.bullets.slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="relative pl-6 text-[16px] leading-[1.55] text-[rgba(242,237,225,0.88)]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[12px] w-[10px] h-[2px] bg-[var(--color-ce-terra-deep)]"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2.5">
              {O.interventions.bullets.slice(3).map((b) => (
                <li
                  key={b}
                  className="relative pl-6 text-[16px] leading-[1.55] text-[rgba(242,237,225,0.88)]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[12px] w-[10px] h-[2px] bg-[var(--color-ce-terra-deep)]"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[14px] italic text-[rgba(242,237,225,0.55)] leading-[1.6] border-t border-[rgba(242,237,225,0.12)] pt-5 mt-7">
            {O.interventions.footer}
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.7, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-6"
        >
          <p className="text-[15px] italic text-[rgba(20, 37, 58,0.65)] max-w-[62ch]">
            {O.ctaAside}
          </p>
          <a
            href={O.cta.href}
            onClick={smoothScroll(O.cta.href)}
            className="ce-btn ce-btn--terra ce-btn--lg"
          >
            {O.cta.label}
            <ArrowRight size={15} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
