import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SITE } from '@/content/site';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * ContactSection V4 — bloc CTA géant final, fond violet-ink profond,
 * H2 clamp(64,9vw,148) lignes "Trente minutes / suffisent à commencer."
 * Aura radial terra à droite. CTA double : prendre RDV + téléphoner.
 *
 * Pas de formulaire dans V4 (le modèle mix n'en a pas) — on envoie sur mailto / tel.
 * Si tu veux le formulaire V3 (Formspree + RGPD), dis-le, je branche.
 */
export function ContactSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const C = SITE.cta;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden text-[var(--color-ce-cream)]"
      style={{
        background: 'var(--color-ce-violet-ink)',
        paddingBlock: '160px 140px',
      }}
    >
      {/* Aura radial terra */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: '-200px',
          top: '30%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,90,46,0.28) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      <div className="ce-container relative" style={{ zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="tracking-display text-[var(--color-ce-cream)] max-w-[14ch] mb-10"
          style={{
            fontSize: 'clamp(48px, 9vw, 148px)',
            lineHeight: 0.92,
            fontWeight: 500,
            letterSpacing: '-0.045em',
          }}
        >
          {C.titleLine1}
          <br />
          <em>{C.titleLine2Em}</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE }}
          className="text-[rgba(242,237,225,0.78)] max-w-[60ch] mb-12"
          style={{ fontSize: '22px', lineHeight: 1.45 }}
        >
          {C.deck.split(C.deckEm).map((chunk, i, arr) => (
            <span key={i}>
              {chunk}
              {i < arr.length - 1 && (
                <em className="font-serif italic text-[var(--color-ce-terra-soft)]">{C.deckEm}</em>
              )}
            </span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.28, ease: EASE }}
          className="flex gap-3.5 items-center flex-wrap"
        >
          <a href={C.ctaPrimary.href} className="ce-btn ce-btn--terra ce-btn--lg">
            {C.ctaPrimary.label} <span className="ce-btn-arrow">↗</span>
          </a>
          <a
            href={C.ctaSecondary.href}
            className="ce-btn ce-btn--ghost ce-btn--lg inline-flex items-center gap-2"
          >
            <Mail size={16} strokeWidth={1.5} />
            {C.ctaSecondary.label} · {C.ctaSecondary.email}
          </a>
        </motion.div>

        {/* Subtle OEC reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-[rgba(242,237,225,0.12)] flex flex-wrap items-center gap-6 text-[13px] text-[rgba(242,237,225,0.5)]"
        >
          <span>
            {SITE.brand.full} · Inscrit à l’Ordre des experts-comptables d’Île-de-France ·{' '}
            <span className="ce-todo">N° {SITE.legal.oecNumber}</span>
          </span>
          <a href={`mailto:${SITE.legal.email}`} className="hover:text-[var(--color-ce-cream)] transition-colors">
            {SITE.legal.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
