import { motion } from 'framer-motion';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * MethodSection V4 — 3 étapes numérotées en chiffres romains (i · ii · iii)
 * sur fond crème, avec sticky left title + steps alternés violet/cream-warm.
 */
export function MethodSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const M = SITE.method;

  return (
    <section
      id="methode"
      ref={ref}
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
      style={{ paddingBlock: '140px' }}
    >
      <div className="ce-container">
        <div
          className="grid gap-12 md:gap-20"
          style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)' }}
        >
          {/* Sticky left */}
          <div className="md:sticky md:top-32 self-start">
            <div className="ce-label ce-label--violet mb-6">{M.eyebrow}</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: EASE }}
              className="tracking-display text-[var(--color-ce-violet)] max-w-[16ch]"
              style={{
                fontSize: 'clamp(40px, 5.6vw, 82px)',
                lineHeight: 0.94,
                fontWeight: 500,
                marginTop: '24px',
              }}
            >
              {M.title}
              <br />
              <em>{M.titleEm}</em>
              {M.titleEnd}
            </motion.h2>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-4">
            {M.steps.map((step, i) => (
              <motion.div
                key={step.index}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.85, delay: i * 0.12, ease: EASE }}
                className="grid items-start gap-9 p-10 md:p-12 rounded-[var(--radius-lg)]"
                style={{
                  gridTemplateColumns: 'auto minmax(0, 1fr) auto',
                  background: i % 2 === 0 ? 'var(--color-ce-violet)' : 'var(--color-ce-cream-warm)',
                  color: i % 2 === 0 ? 'var(--color-ce-cream)' : 'var(--color-ce-violet)',
                }}
              >
                {/* Index cercle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-serif italic"
                  style={{
                    background: i % 2 === 0 ? 'var(--color-ce-terra)' : 'var(--color-ce-violet)',
                    color: 'var(--color-ce-cream)',
                    fontSize: '22px',
                    fontWeight: 400,
                  }}
                >
                  {step.index}
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="mb-2.5"
                    style={{
                      fontSize: 'clamp(24px, 2.6vw, 32px)',
                      lineHeight: 1.1,
                      fontWeight: 500,
                      letterSpacing: '-0.025em',
                      color: 'inherit',
                    }}
                  >
                    {step.title}
                    <em style={{ color: 'var(--color-ce-terra)' }}> {step.titleEm}</em>
                  </h3>
                  <p
                    className="text-[17px] leading-[1.55] max-w-[54ch]"
                    style={{ opacity: 0.8, color: 'inherit' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Duration pill */}
                <div
                  className="whitespace-nowrap text-[13px] font-medium px-3.5 py-2 rounded-[var(--radius-xs)]"
                  style={{
                    background: i % 2 === 0 ? 'rgba(242,237,225,0.12)' : 'rgba(20, 37, 58,0.08)',
                    color: i % 2 === 0 ? 'rgba(242,237,225,0.92)' : 'var(--color-ce-violet)',
                  }}
                >
                  {step.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
