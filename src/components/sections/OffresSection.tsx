import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * OffresSection V8 — refonte premium parcours Dirigeant.
 *
 * Architecture :
 * - Section intro (eyebrow "Nos offres" + H2 "Un accompagnement adapté..." +
 *   supporting text). Editorial rhythm, large spacing.
 * - 3 cards side-by-side (desktop) : Essentiel / Pilotage (highlighted) /
 *   Direction. Center card subtly mise en avant : slightly larger, brighter
 *   bg, gold accent bar en haut, badge "Le plus choisi".
 * - Hover effects subtle (lift 2px), soft shadows.
 * - Generous padding, lots of negative space, NOT SaaS pricing tables.
 *
 * Mobile : 1 colonne, ordre Essentiel → Pilotage (highlighted) → Direction.
 */
export function OffresSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const O = SITE.offresTPE;

  return (
    <section
      id="dirigeant"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '120px 96px' }}
    >
      <div className="ce-container">
        {/* Section intro — editorial rhythm, large spacing */}
        <div className="max-w-[820px] mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="ce-label ce-label--on-light mb-7"
          >
            {O.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="tracking-display text-[var(--color-ce-violet)] mb-7 max-w-[20ch]"
            style={{
              fontSize: 'clamp(30px, 4.4vw, 56px)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.025em',
            }}
          >
            {O.title} <em>{O.titleEm}</em>
            {O.titleEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-[18px] leading-[1.6] text-[rgba(20,37,58,0.72)] max-w-[68ch]"
          >
            {O.intro}
          </motion.p>
        </div>

        {/* 3 cards premium alignées (items-stretch). Variations internes :
            paddings, gaps, marqueurs de bullets et footer treatments
            différents pour casser le 'composant répété' sans casser l'alignement. */}
        <div className="grid gap-6 md:gap-7 md:grid-cols-3 items-stretch">
          {O.packs.map((p, i) => {
            // Variations subtiles par card (Sprint B — composition)
            const isFirst = i === 0;
            const isLast = i === O.packs.length - 1;

            // Padding variable : Card 1 plus condensé, Card 2 highlighted généreux, Card 3 intermédiaire
            const padding = p.highlighted
              ? 'p-9 md:p-12'
              : isFirst
                ? 'p-8 md:p-10'
                : 'p-9 md:p-11';

            // Gap interne : Card 1 et 3 plus resserrés (gap-6), Card 2 aéré (gap-7)
            const gap = p.highlighted ? 'gap-7' : 'gap-6';

            // Bullets gap : Card 2 plus aérée
            const bulletsGap = p.highlighted ? 'gap-3' : 'gap-2.5';

            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.85,
                  delay: 0.3 + i * 0.12,
                  ease: EASE,
                }}
                className={cn(
                  'group relative flex flex-col rounded-[var(--radius-xl)] overflow-hidden',
                  'transition-transform duration-300 ease-out hover:-translate-y-1',
                  p.highlighted
                    ? 'bg-[#ffffff] md:scale-[1.025] md:-my-2'
                    : 'bg-[rgba(255,255,255,0.65)]',
                )}
                style={{
                  boxShadow: p.highlighted
                    ? '0 30px 60px -28px rgba(20, 37, 58, 0.18), 0 0 0 1px rgba(212, 182, 107, 0.4)'
                    : '0 16px 40px -28px rgba(20, 37, 58, 0.12), 0 0 0 1px rgba(20, 37, 58, 0.08)',
                }}
              >
                {/* Subtle gold accent bar on top of highlighted card */}
                {p.highlighted && (
                  <div
                    aria-hidden
                    className="absolute top-0 inset-x-0 h-[3px]"
                    style={{ background: 'var(--color-ce-terra)' }}
                  />
                )}

                <div className={cn('flex flex-col flex-1', gap, padding)}>
                  {/* Badge "Le plus choisi" sur card highlighted */}
                  {p.highlighted && p.badge && (
                    <div className="inline-flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--color-ce-terra-deep)]">
                      <span
                        aria-hidden
                        className="w-[6px] h-[6px] rounded-full bg-[var(--color-ce-terra)]"
                      />
                      {p.badge}
                    </div>
                  )}

                  {/* Pack label */}
                  <div>
                    <h3
                      className="tracking-display text-[var(--color-ce-violet)] mb-3"
                      style={{
                        fontSize: p.highlighted
                          ? 'clamp(24px, 2.4vw, 30px)'
                          : 'clamp(22px, 2.2vw, 28px)',
                        lineHeight: 1.15,
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {p.label}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-[rgba(20,37,58,0.72)]">
                      {p.intro}
                    </p>
                  </div>

                  {/* Separator subtil */}
                  <div className="h-px bg-[rgba(20,37,58,0.08)]" />

                  {/* Bullets — marqueur différent par card pour identité visuelle :
                      - Card 1 (Essentiel) : barre courte horizontale (sobre, pragmatique)
                      - Card 2 (Pilotage)  : point rond ocre (premium, marqué)
                      - Card 3 (Direction) : chevron > (orienté action / progression) */}
                  <ul className={cn('flex flex-col flex-1', bulletsGap)}>
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="relative pl-5 text-[15px] leading-[1.55] text-[rgba(20,37,58,0.85)]"
                      >
                        {p.highlighted ? (
                          // Card 2 : point rond ocre
                          <span
                            aria-hidden
                            className="absolute left-0 top-[8px] w-[7px] h-[7px] rounded-full bg-[var(--color-ce-terra)]"
                          />
                        ) : isLast ? (
                          // Card 3 : chevron orienté action
                          <span
                            aria-hidden
                            className="absolute left-0 top-[1px] text-[13px] font-medium leading-[1.55] text-[var(--color-ce-terra-deep)]"
                          >
                            ›
                          </span>
                        ) : (
                          // Card 1 : barre fine horizontale (existant)
                          <span
                            aria-hidden
                            className="absolute left-0 top-[11px] w-[8px] h-[1.5px] bg-[var(--color-ce-terra-deep)]"
                          />
                        )}
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Footer text — treatment varié :
                      - Card 1 (Essentiel) : pas de border-top, juste texte italique
                      - Card 2 (Pilotage) : border-top fine (déjà)
                      - Card 3 (Direction) : border-top + tiny accent ocre '—' en début */}
                  <p
                    className={cn(
                      'text-[13px] italic leading-[1.55] text-[rgba(20,37,58,0.55)]',
                      isFirst ? 'pt-1' : 'pt-3 border-t border-[rgba(20,37,58,0.08)]',
                    )}
                  >
                    {isLast && (
                      <span
                        aria-hidden
                        className="inline-block mr-2 text-[var(--color-ce-terra-deep)] not-italic"
                      >
                        —
                      </span>
                    )}
                    {p.footer}
                  </p>

                  {/* CTA */}
                  <Link
                    to={p.cta.href}
                    className={cn(
                      'ce-btn self-start',
                      p.highlighted ? 'ce-btn--terra' : 'ce-btn--ghost-light',
                    )}
                  >
                    {p.cta.label}
                    <ArrowRight size={14} strokeWidth={1.75} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
