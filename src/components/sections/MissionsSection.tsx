import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

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

        {/* Grid mini-cards : 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {O.missions.map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + (i % 4) * 0.05 + Math.floor(i / 4) * 0.08,
                ease: EASE,
              }}
              className="group relative flex items-center gap-3 px-5 py-5 rounded-[var(--radius-md)] bg-[#ffffff] border border-[rgba(20,37,58,0.08)] transition-all duration-300 ease-out hover:border-[rgba(212,182,107,0.5)] hover:shadow-[0_8px_24px_-12px_rgba(20,37,58,0.15)]"
            >
              {/* Petit accent ocre — barre fine à gauche */}
              <span
                aria-hidden
                className="w-[3px] h-[18px] bg-[var(--color-ce-terra-deep)] flex-shrink-0 transition-all duration-300 group-hover:h-[24px]"
              />
              <span className="text-[14px] leading-[1.4] text-[var(--color-ce-violet)] font-medium">
                {m}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
