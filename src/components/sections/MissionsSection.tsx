import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * MissionsSection V2 — refonte éditoriale layout 3 colonnes thématiques.
 *
 * Au lieu d'un mur de mini-cards uniformes (effet 'UI generated'), les 10
 * missions sont regroupées en 3 thématiques (Pilotage & analyse / Croissance
 * & financement / Structuration) présentées comme des chapitres de magazine :
 * eyebrow numéroté + titre catégorie + liste éditoriale des missions.
 *
 * Pas de boxes, pas de cards, pas de tags. Typographie-driven, vertical
 * separators subtils entre colonnes, hover discret sur chaque ligne.
 *
 * Mobile : passe en colonne unique, séparateurs horizontaux entre groupes.
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

        {/* 3 colonnes thématiques séparées par des lignes verticales fines.
            Pas de boxes/cards. Layout magazine-style, typographie-driven.
            Sur tablet (<1024px) : single column avec séparateurs horizontaux. */}
        <div className="grid gap-10 lg:gap-0 lg:grid-cols-3">
          {O.missionsGroups.map((group, gi) => (
            <motion.div
              key={group.index}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.85,
                delay: 0.3 + gi * 0.12,
                ease: EASE,
              }}
              className={`relative ${
                // Séparateurs verticaux entre colonnes (desktop lg+) — pas avant la 1ère
                gi > 0
                  ? 'lg:pl-10 lg:border-l lg:border-[rgba(20,37,58,0.12)]'
                  : 'lg:pr-10'
              } ${gi > 0 && gi < 2 ? 'lg:pr-10' : ''}`}
            >
              {/* Eyebrow numéroté + catégorie */}
              <div className="mb-7">
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="text-[var(--color-ce-terra-deep)] font-medium tracking-[0.05em]"
                    style={{
                      fontFamily:
                        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      fontSize: '13px',
                    }}
                    aria-hidden
                  >
                    {group.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-[rgba(20,37,58,0.18)]"
                  />
                </div>
                <h3
                  className="tracking-display text-[var(--color-ce-violet)]"
                  style={{
                    fontSize: 'clamp(20px, 1.8vw, 24px)',
                    lineHeight: 1.2,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Liste éditoriale — pas de bullets, juste typographie + hover */}
              <ul className="flex flex-col">
                {group.items.map((item, ii) => (
                  <li
                    key={item}
                    className={`group/item flex items-start gap-4 py-3.5 cursor-default transition-colors duration-200 hover:text-[var(--color-ce-terra-deep)] ${
                      ii < group.items.length - 1
                        ? 'border-b border-[rgba(20,37,58,0.08)]'
                        : ''
                    }`}
                  >
                    <span className="text-[15px] leading-[1.5] text-[var(--color-ce-violet)] group-hover/item:text-[var(--color-ce-terra-deep)] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
