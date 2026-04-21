import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * CaseSection V4 — étude de cas éditoriale : sidebar meta sticky à gauche,
 * citation géante + avatar + résultats chiffrés à droite.
 *
 * Données marquées placeholder avec TODO visibles en dev.
 * Copie conforme déonto : aucune comparaison, valeur chiffrée factuelle du dossier.
 */
export function CaseSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const C = SITE.case;

  // Build quote with em highlights
  const renderQuote = () => {
    let parts: React.ReactNode[] = [C.quote];
    C.quoteEm.forEach((phrase) => {
      const next: React.ReactNode[] = [];
      parts.forEach((p) => {
        if (typeof p === 'string' && p.includes(phrase)) {
          const split = p.split(phrase);
          split.forEach((chunk, idx) => {
            next.push(chunk);
            if (idx < split.length - 1) {
              next.push(
                <em key={`${phrase}-${idx}`} className="font-serif italic text-[var(--color-ce-terra)]" style={{ fontWeight: 400 }}>
                  {phrase}
                </em>,
              );
            }
          });
        } else {
          next.push(p);
        }
      });
      parts = next;
    });
    return parts;
  };

  return (
    <section
      id="case"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '140px' }}
    >
      <div className="ce-container">
        {/* Head */}
        <div className="ce-section-head ce-section-head--light">
          <div>
            <div className="ce-label ce-label--violet mb-6">{C.eyebrow}</div>
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
              {C.title} <em>{C.titleEm}</em>
              <br />
              {C.titleEnd}
            </motion.h2>
          </div>
          <a href="#contact" className="ce-section-head-link self-end">
            En discuter →
          </a>
        </div>

        {/* Layout : sidebar meta + body */}
        <div
          className="grid gap-14 md:gap-20 items-start"
          style={{ gridTemplateColumns: 'minmax(260px, 1fr) minmax(0, 1.5fr)' }}
        >
          {/* Meta sidebar sticky */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="md:sticky md:top-12 flex flex-col gap-5 p-8 rounded-[var(--radius-lg)] bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)]"
          >
            <span
              className="inline-flex self-start px-3 py-1.5 text-[12px] font-medium tracking-[0.02em] rounded-[4px]"
              style={{ background: 'var(--color-ce-terra)', color: 'var(--color-ce-cream)' }}
            >
              {C.meta.tag}
            </span>
            {C.meta.rows.map((r, idx) => (
              <div
                key={r.k}
                className="flex justify-between items-baseline py-3.5 text-[14px]"
                style={{
                  borderBottom:
                    idx < C.meta.rows.length - 1 ? '1px solid rgba(242,237,225,0.1)' : 'none',
                }}
              >
                <span className="text-[rgba(242,237,225,0.55)]">{r.k}</span>
                <span className="text-[15px] font-medium text-[var(--color-ce-cream)]">{r.v}</span>
              </div>
            ))}
            {C.meta.isPlaceholder && (
              <span className="ce-todo self-start mt-2">TODO : dossier réel</span>
            )}
          </motion.aside>

          {/* Body */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.18, ease: EASE }}
            >
              <span
                className="font-serif italic text-[var(--color-ce-terra)] block mb-5"
                style={{ fontSize: '100px', lineHeight: 0.6, fontWeight: 400 }}
                aria-hidden
              >
                “
              </span>
              <p
                className="tracking-display text-[var(--color-ce-violet)]"
                style={{
                  fontSize: 'clamp(28px, 4.8vw, 66px)',
                  lineHeight: 1.1,
                  fontWeight: 500,
                }}
              >
                {renderQuote()}
              </p>
            </motion.div>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.35, ease: EASE }}
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-serif italic text-[var(--color-ce-cream)]"
                style={{
                  background: 'linear-gradient(135deg, var(--color-ce-terra), var(--color-ce-violet))',
                  fontSize: '22px',
                  fontWeight: 400,
                }}
              >
                {C.author.initials}
              </div>
              <div>
                <div className="text-[18px] font-medium text-[var(--color-ce-violet)]">
                  {C.author.name}
                  {C.author.isPlaceholder && <span className="ce-todo ml-2">témoignage à confirmer</span>}
                </div>
                <div className="text-[13px] text-[rgba(45,27,78,0.6)] mt-0.5">{C.author.role}</div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.45, ease: EASE }}
              className="mt-14 pt-10 border-t border-[rgba(45,27,78,0.12)] grid gap-8"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
            >
              {C.results.map((r) => (
                <div key={r.label}>
                  <div
                    className="text-[var(--color-ce-terra)]"
                    style={{
                      fontSize: 'clamp(44px, 4.2vw, 56px)',
                      lineHeight: 1,
                      fontWeight: 500,
                      letterSpacing: '-0.035em',
                    }}
                  >
                    {r.num}
                    {r.em && (
                      <em className="font-serif italic" style={{ fontWeight: 400 }}>
                        {r.em}
                      </em>
                    )}
                  </div>
                  <div className="text-[14px] text-[rgba(45,27,78,0.6)] mt-1.5 leading-[1.4] whitespace-pre-line">
                    {r.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
