import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

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
 * QuestionsSection V5 — 4 Q&R V1 en grille 2×2 (réintroduit sur reco audit).
 * Copy verbatim V1. Ajoute FAQPage JSON-LD pour rich snippets Google.
 */
export function QuestionsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const Q = SITE.questions;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Q.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.reponse },
    })),
  };

  return (
    <section
      id="questions"
      ref={ref}
      className="bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)]"
      style={{ paddingBlock: '140px 120px' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="ce-container">
        {/* Head */}
        <div className="ce-section-head mb-[72px]">
          <div>
            <div className="ce-label ce-label--cream mb-6">{Q.eyebrow}</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: EASE }}
              className="tracking-display text-[var(--color-ce-cream)] max-w-[18ch]"
              style={{
                fontSize: 'clamp(40px, 6.4vw, 94px)',
                lineHeight: 0.94,
                fontWeight: 500,
              }}
            >
              {Q.title} <em>{Q.titleEm}</em> {Q.titleEnd}
            </motion.h2>
          </div>
        </div>

        {/* Grid 2×2 */}
        <div
          className="grid gap-5 mb-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          {Q.items.map((q, i) => (
            <motion.div
              key={q.question}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: i * 0.1, ease: EASE }}
              className="relative flex flex-col gap-4 p-8 md:p-10 bg-[var(--color-ce-violet-deep)] border border-[rgba(242,237,225,0.08)] rounded-[var(--radius-md)]"
            >
              {/* Ghost number */}
              <div
                className="font-serif italic text-[rgba(217,90,46,0.28)] leading-none"
                style={{ fontSize: '48px', fontWeight: 400 }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Question */}
              <h3
                className="text-[var(--color-ce-cream)]"
                style={{
                  fontSize: '19px',
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: '-0.015em',
                }}
              >
                {q.question}
              </h3>

              {/* Divider */}
              <div className="w-6 h-px bg-[var(--color-ce-terra)]" aria-hidden />

              {/* Answer */}
              <p className="text-[16px] leading-[1.65] italic text-[rgba(242,237,225,0.78)]">
                {q.reponse}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.5, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-6"
        >
          <p className="text-[17px] text-[rgba(242,237,225,0.75)] max-w-[60ch] leading-[1.55]">
            {Q.closing}
          </p>
          <a
            href={Q.cta.href}
            onClick={smoothScroll(Q.cta.href)}
            className="ce-btn ce-btn--terra"
          >
            {Q.cta.label}
            <ArrowRight size={14} strokeWidth={1.75} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
