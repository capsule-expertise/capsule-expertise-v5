import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

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
 * AiguillageSection V5 — 2 parcours V1 teasers en cards modèle.
 * Hiérarchie 70/30 : parcours TPE priorité (fond violet-deep contraste fort),
 * parcours ETI secondaire (fond crème sobre).
 * Copy verbatim V1.
 */
export function AiguillageSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const A = SITE.aiguillage;

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
              Capsule s'adapte à deux profils. Identifiez le vôtre ci-dessous
              pour découvrir comment nous travaillons concrètement avec vous.
            </motion.p>
          </div>
        </div>

        {/* Cards 70/30 */}
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {A.parcours.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.12, ease: EASE }}
              className={cn(
                'flex flex-col gap-6 p-10 md:p-12 rounded-[var(--radius-xl)] relative overflow-hidden',
                p.priority
                  ? 'bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)]'
                  : 'bg-[#ffffff] text-[var(--color-ce-violet)] border border-[rgba(20, 37, 58,0.1)]',
              )}
              style={
                p.priority
                  ? { boxShadow: '0 30px 60px -30px rgba(5, 14, 26,0.3)' }
                  : undefined
              }
            >
              {/* Label + Title */}
              <div>
                <div
                  className={cn(
                    'text-[11px] font-medium tracking-[0.18em] uppercase mb-4',
                    p.priority ? 'text-[var(--color-ce-terra-soft)]' : 'text-[var(--color-ce-terra-deep)]',
                  )}
                >
                  {p.label}
                </div>
                <h3
                  className="tracking-display"
                  style={{
                    fontSize: 'clamp(28px, 3.4vw, 42px)',
                    lineHeight: 1.02,
                    fontWeight: 500,
                    color: 'inherit',
                    letterSpacing: '-0.025em',
                  }}
                >
                  {p.title}
                  <br />
                  <em>{p.titleEm}</em>
                </h3>
              </div>

              {/* Tagline */}
              <p
                className={cn(
                  'text-[16px] leading-[1.6] max-w-[44ch]',
                  p.priority ? 'text-[rgba(242,237,225,0.72)]' : 'text-[rgba(20, 37, 58,0.72)]',
                )}
              >
                {p.tagline}
              </p>

              {/* Separator */}
              <div
                className={cn(
                  'h-px',
                  p.priority ? 'bg-[rgba(242,237,225,0.14)]' : 'bg-[rgba(20, 37, 58,0.1)]',
                )}
              />

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className={cn(
                      'relative pl-6 text-[16px] leading-[1.55]',
                      p.priority ? 'text-[rgba(242,237,225,0.88)]' : 'text-[rgba(20, 37, 58,0.88)]',
                    )}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[12px] w-[10px] h-[2px] bg-[var(--color-ce-terra-deep)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={p.cta.href}
                onClick={smoothScroll(p.cta.href)}
                className={cn(
                  'ce-btn self-start',
                  p.priority ? 'ce-btn--terra' : 'ce-btn--ghost-light',
                )}
              >
                {p.cta.label}
                <ArrowRight size={14} strokeWidth={1.75} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
