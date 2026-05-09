import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * MissionsSection — missions complémentaires ponctuelles (parcours dirigeant).
 *
 * Affiche les 10 missions de SITE.offresTPE.missions sous forme de mini-cards
 * sobres en grid responsive. Style premium / éditorial : pas de SaaS pricing,
 * juste des chips/tags élégants avec respiration.
 *
 * Section feel "secondaire / modulaire" — l'essentiel reste la grille des
 * 3 packs au-dessus. Ici on liste les missions ponctuelles activables.
 */
export function MissionsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const O = SITE.offresTPE;
  const M = O.missionsHeading;

  return (
    <section
      ref={ref}
      className="bg-[var(--color-ce-cream-warm)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '96px 100px' }}
    >
      <div className="ce-container">
        {/* Header */}
        <div className="max-w-[820px] mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="ce-label ce-label--on-light mb-6"
          >
            {M.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="tracking-display text-[var(--color-ce-violet)] mb-6 max-w-[24ch]"
            style={{
              fontSize: 'clamp(26px, 3.5vw, 46px)',
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: '-0.025em',
            }}
          >
            {M.title} <em>{M.titleEm}</em>
            {M.titleEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="text-[17px] leading-[1.6] text-[rgba(20,37,58,0.7)] max-w-[60ch]"
          >
            {M.supporting}
          </motion.p>
        </div>

        {/* Grid magazine — 4 cols sur lg, mais 2 missions phares prennent 2 cols
            (index 0 "Arbitrage rémunération dirigeant" + index 7 "DAF externalisé").
            Total 12 col-units sur 4 cols = 3 rangs propres asymétriques.
            Sur tablet/mobile : grid normale (3 cols / 2 cols, pas de span).
            Casse l'effet "mur de boutons" au profit d'un layout magazine. */}
        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {O.missions.map((m, i) => {
            const isFeatured = i === 0 || i === 7;
            return (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + (i % 4) * 0.05 + Math.floor(i / 4) * 0.08,
                  ease: EASE,
                }}
                className={cn(
                  'group relative flex items-center gap-3 rounded-[var(--radius-md)] bg-[#ffffff] border border-[rgba(20,37,58,0.08)] transition-all duration-300 ease-out hover:border-[rgba(212,182,107,0.5)] hover:shadow-[0_8px_24px_-12px_rgba(20,37,58,0.15)]',
                  // Variations de padding : missions featured plus généreuses
                  isFeatured ? 'px-7 py-6' : 'px-5 py-5',
                  // Col-span uniquement sur lg : missions featured = 2 cols
                  isFeatured ? 'lg:col-span-2' : '',
                )}
              >
                {/* Petit accent ocre — barre fine à gauche, plus haute si featured */}
                <span
                  aria-hidden
                  className={cn(
                    'bg-[var(--color-ce-terra-deep)] flex-shrink-0 transition-all duration-300',
                    isFeatured
                      ? 'w-[3px] h-[22px] group-hover:h-[28px]'
                      : 'w-[3px] h-[18px] group-hover:h-[24px]',
                  )}
                />
                <span
                  className={cn(
                    'leading-[1.4] text-[var(--color-ce-violet)] font-medium',
                    isFeatured ? 'text-[16px]' : 'text-[14px]',
                  )}
                >
                  {m}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
