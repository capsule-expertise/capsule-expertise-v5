import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * EquipeSection V5 — 2 profils V1 complets avec photo + citation + bios longues
 * + compétences. Suivi des 3 témoignages V1.
 */
export function EquipeSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const E = SITE.equipe;
  const T = SITE.temoignages;

  return (
    <section
      id="cabinet"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '140px' }}
    >
      <div className="ce-container">
        {/* Head */}
        <div className="mb-14 max-w-[720px]">
          <div className="ce-label ce-label--violet mb-6">{E.eyebrow}</div>
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
            {E.title} <em>{E.titleEm}</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="text-[17px] leading-[1.65] text-[rgba(45,27,78,0.72)] max-w-[62ch]"
          >
            {E.intro}
          </motion.p>
        </div>

        {/* Profils alternés */}
        <div className="flex flex-col gap-10 mb-20">
          {E.membres.map((m, idx) => {
            const photoLeft = idx % 2 === 0;
            return (
              <motion.article
                key={`${m.prenom}-${m.nom}`}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3 + idx * 0.15, ease: EASE }}
                className="grid bg-[#ffffff] rounded-[var(--radius-lg)] overflow-hidden border border-[rgba(45,27,78,0.1)]"
                style={{
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  boxShadow: '0 2px 24px rgba(26,20,16,0.04)',
                }}
              >
                {photoLeft && <PhotoBlock src={m.photo} alt={`${m.prenom} ${m.nom} — ${m.role}`} badge={m.badge} />}

                <div
                  className={cn(
                    'p-8 md:p-12 flex flex-col gap-6 justify-center',
                    !photoLeft && 'order-1 md:order-none',
                  )}
                >
                  {/* Identité */}
                  <div>
                    <h3
                      className="text-[var(--color-ce-violet)]"
                      style={{
                        fontSize: 'clamp(28px, 3vw, 40px)',
                        fontWeight: 500,
                        lineHeight: 1.1,
                        letterSpacing: '-0.025em',
                      }}
                    >
                      {m.prenom} <em>{m.nom}</em>
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="text-[13px] font-medium tracking-[0.14em] uppercase text-[var(--color-ce-terra)]">
                        {m.role}
                      </span>
                      {m.oec && (
                        <span className="inline-flex items-center gap-1.5 text-[12px] text-[var(--color-ce-terra)] bg-[rgba(217,90,46,0.08)] border border-[rgba(217,90,46,0.2)] rounded-[4px] px-2 py-1">
                          {m.oec.replace('XXXXXX', '')}
                          <span className="ce-todo">XXXXXX</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Citation */}
                  <p
                    className="font-serif italic text-[var(--color-ce-violet)] border-l-2 border-[var(--color-ce-terra)] pl-4"
                    style={{
                      fontSize: '21px',
                      lineHeight: 1.45,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    « {m.citation} »
                  </p>

                  {/* Bio (3 paragraphes) */}
                  <div className="flex flex-col gap-3">
                    {m.bio.map((para, i) => (
                      <p
                        key={i}
                        className="text-[16px] leading-[1.7] text-[rgba(45,27,78,0.78)]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Compétences */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {m.competences.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center text-[13px] text-[rgba(45,27,78,0.78)] bg-[rgba(45,27,78,0.04)] border border-[rgba(45,27,78,0.1)] rounded-[4px] px-3 py-1"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {!photoLeft && <PhotoBlock src={m.photo} alt={`${m.prenom} ${m.nom} — ${m.role}`} badge={m.badge} />}
              </motion.article>
            );
          })}
        </div>

        {/* Témoignages */}
        <div>
          <div className="mb-10">
            <div className="ce-label ce-label--violet mb-4">{T.eyebrow}</div>
            <h3
              className="tracking-display text-[var(--color-ce-violet)]"
              style={{
                fontSize: 'clamp(28px, 4vw, 56px)',
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: '-0.03em',
              }}
            >
              {T.title} <em>{T.titleEm}</em> {T.titleEnd}
            </h3>
          </div>

          <div
            className="grid gap-5"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {T.items.map((t, i) => (
              <motion.div
                key={t.citation.slice(0, 24)}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: 0.6 + i * 0.1, ease: EASE }}
                className="flex flex-col gap-5 p-8 bg-[#ffffff] border border-[rgba(45,27,78,0.1)] rounded-[var(--radius-md)]"
              >
                <div
                  className="font-serif italic text-[var(--color-ce-terra)] leading-[0.7] opacity-40"
                  style={{ fontSize: '56px', fontWeight: 400 }}
                  aria-hidden
                >
                  “
                </div>
                <p className="text-[16px] leading-[1.7] italic text-[rgba(45,27,78,0.88)] flex-1">
                  {t.citation}
                </p>
                <div className="border-t border-[rgba(45,27,78,0.1)] pt-4 flex flex-col gap-1">
                  <div className="text-[15px] font-medium text-[var(--color-ce-violet)]">
                    {t.prenom} — {t.fonction}
                  </div>
                  <span className="inline-flex self-start text-[12px] text-[var(--color-ce-terra)] bg-[rgba(217,90,46,0.08)] border border-[rgba(217,90,46,0.2)] rounded-[4px] px-2 py-1 mt-1">
                    {t.secteur}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-6 text-[13px] italic text-[rgba(45,27,78,0.5)]">
            {T.anonymisation}
          </p>
        </div>
      </div>
    </section>
  );
}

function PhotoBlock({ src, alt, badge }: { src: string; alt: string; badge: string }) {
  return (
    <div
      className="relative overflow-hidden bg-[var(--color-ce-violet-deep)]"
      style={{ minHeight: '480px' }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center top' }}
      />
      <div
        className="absolute top-4 right-4 px-2.5 py-1 text-[11px] font-medium rounded-[4px]"
        style={{ background: 'var(--color-ce-terra)', color: 'var(--color-ce-cream)' }}
      >
        {badge}
      </div>
    </div>
  );
}
