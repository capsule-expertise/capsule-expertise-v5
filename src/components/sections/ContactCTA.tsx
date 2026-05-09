import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const EASE = [0.16, 1, 0.3, 1] as const;

interface ContactCTAProps {
  /** Pré-remplit le champ "type de besoin" du formulaire de contact. */
  from?: 'dirigeant' | 'daf';
  title?: string;
  titleEm?: string;
  description?: string;
}

/**
 * Bloc CTA réutilisable en bas des pages parcours / cabinet.
 * Bg bleu nuit foncé pour bookend visuel. Lien vers /contact avec query string
 * "from" pour pré-remplir le formulaire.
 */
export function ContactCTA({
  from,
  title = 'Discutons de votre',
  titleEm = 'situation',
  description = 'Premier échange de 30 minutes, confidentiel, sans engagement. Note de cadrage écrite sous 10 jours.',
}: ContactCTAProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const to = from ? `/contact?from=${from}` : '/contact';

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-ce-violet-deep)',
        paddingBlock: '96px',
      }}
    >
      <div className="ce-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
          className="max-w-[760px]"
        >
          <h2
            className="tracking-display text-[var(--color-ce-cream)] mb-6"
            style={{
              fontSize: 'clamp(32px, 4.4vw, 56px)',
              lineHeight: 1.0,
              fontWeight: 500,
              letterSpacing: '-0.03em',
            }}
          >
            {title} <span style={{ color: 'var(--color-ce-terra)' }}>{titleEm}</span>
          </h2>
          <p
            className="text-[rgba(242,237,225,0.75)] mb-10"
            style={{ fontSize: '18px', lineHeight: 1.55, maxWidth: '60ch' }}
          >
            {description}
          </p>
          <Link to={to} className="ce-btn ce-btn--terra ce-btn--lg">
            Prendre rendez-vous
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
