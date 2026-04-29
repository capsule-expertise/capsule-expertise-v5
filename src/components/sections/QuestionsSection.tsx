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
      className="bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)]"
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
            <div className="ce-label ce-label--on-light mb-6">{Q.eyebrow}</div>
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
              className="relative flex flex-col gap-4 p-8 md:p-10 bg-[#ffffff] border border-[rgba(20, 37, 58,0.1)] rounded-[var(--radius-md)]"
            >
              {/* N° label — mono discret (style documents cabinet, pas hero SaaS) */}
              <div
                className="text-[var(--color-ce-terra-deep)]"
                style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                }}
                aria-hidden
              >
                N° {String(i + 1).padStart(2, '0')}
              </div>

              {/* Question */}
              <h3
                className="text-[var(--color-ce-violet)]"
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
              <div className="w-6 h-px bg-[var(--color-ce-terra-deep)]" aria-hidden />

              {/* Answer */}
              <p className="text-[16px] leading-[1.65] italic text-[rgba(20, 37, 58,0.78)]">
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
          <p className="text-[17px] text-[rgba(20, 37, 58,0.75)] max-w-[60ch] leading-[1.55]">
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
