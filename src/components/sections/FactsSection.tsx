import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * FactsSection V4 — stripe 4 chiffres sur fond crème.
 * Placeholders marqués TODO (à remplacer par les vrais chiffres cabinet).
 */
export function FactsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '56px' }}
    >
      <div className="ce-container">
        <div
          className="grid gap-6 md:gap-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {SITE.facts.map((f, i) => {
            return (
              <motion.div
                key={f.num + f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                className="flex flex-col gap-1.5"
              >
                <div
                  className="text-[var(--color-ce-violet)]"
                  style={{
                    fontSize: 'clamp(40px, 5vw, 52px)',
                    lineHeight: 1,
                    fontWeight: 500,
                    letterSpacing: '-0.035em',
                  }}
                >
                  {f.num}
                  {'em' in f && f.em && (
                    <em className="font-serif italic text-[var(--color-ce-terra)]" style={{ fontWeight: 400 }}>
                      {f.em}
                    </em>
                  )}
                </div>
                <div className="text-[14px] text-[rgba(20, 37, 58,0.65)] leading-[1.4] whitespace-pre-line">
                  {f.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
