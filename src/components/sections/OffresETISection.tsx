import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;


/**
 * OffresETISection V5 — 5 missions finance V1 + intro Ranto ex-DAF LBO.
 * Fond violet deep, grille 3 cols avec bordures fines.
 * Copy verbatim V1.
 */
export function OffresETISection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const E = SITE.offresETI;

  return (
    <section
      id="finance"
      ref={ref}
      className="bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)] relative overflow-hidden"
      style={{ paddingBlock: '140px 120px' }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(242,237,225,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(242,237,225,0.8) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="ce-container relative z-10">
        {/* Head */}
        <div className="mb-14 max-w-[720px]">
          <div className="ce-label ce-label--cream mb-6">{E.eyebrow}</div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE }}
            className="tracking-display text-[var(--color-ce-cream)] max-w-[14ch] mb-6"
            style={{
              fontSize: 'clamp(40px, 6.4vw, 94px)',
              lineHeight: 0.94,
              fontWeight: 500,
            }}
          >
            {E.title} <em>{E.titleEm}</em> {E.titleEnd}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="text-[18px] leading-[1.6] text-[rgba(242,237,225,0.72)] italic max-w-[62ch]"
          >
            {E.intro}
          </motion.p>
        </div>

        {/* Missions grid */}
        <div
          className="grid gap-px bg-[rgba(242,237,225,0.08)] rounded-[var(--radius-md)] overflow-hidden border border-[rgba(242,237,225,0.08)] mb-10"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {E.missions.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + (i % 3) * 0.08, ease: EASE }}
              className="p-9 bg-[rgba(242,237,225,0.02)] flex flex-col gap-3"
            >
              <div
                className="text-[var(--color-ce-terra)]"
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                }}
                aria-hidden
              >
                N° {m.num}
              </div>
              <h3
                className="text-[var(--color-ce-cream)]"
                style={{
                  fontSize: '20px',
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                }}
              >
                {m.title}
              </h3>
              <div className="w-6 h-px bg-[var(--color-ce-terra)]" aria-hidden />
              <p className="text-[15px] leading-[1.65] text-[rgba(242,237,225,0.7)] flex-1">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.6, ease: EASE }}
          className="flex justify-end"
        >
          <Link to={`${E.cta.href}?from=daf`} className="ce-btn ce-btn--terra ce-btn--lg">
            {E.cta.label}
            <ArrowRight size={15} strokeWidth={1.75} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
