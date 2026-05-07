import { motion, type Variants } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const EASE = [0.16, 1, 0.3, 1] as const;

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  titleEm?: string;
  description?: string;
}

/**
 * En-tête réutilisable pour les pages secondaires (Dirigeants, DAF, Cabinet,
 * Contact). Cohérent visuellement avec le HeroSection (bleu nuit, trait ocre,
 * H1 ocre sur la titleEm, animations fadeUp), mais plus compact (paddingTop
 * 64px, max H1 80px).
 */
export function PageHeader({ eyebrow, title, titleEm, description }: PageHeaderProps) {
  const reduced = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 22 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.8, delay, ease: EASE },
    }),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--color-ce-violet)',
        paddingTop: '64px',
        paddingBottom: '88px',
      }}
    >
      {/* Trait ocre vertical à gauche — accent éditorial */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          left: 0,
          top: 0,
          width: '2px',
          height: '50%',
          background: 'var(--color-ce-terra)',
          zIndex: 0,
        }}
      />

      <div className="ce-container relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.05}
          variants={fadeUp}
          className="ce-label mt-2 mb-6"
          style={{ color: 'var(--color-ce-terra)' }}
        >
          {eyebrow}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
          className="tracking-display text-[var(--color-ce-cream)] max-w-[20ch]"
          style={{
            fontSize: 'clamp(36px, 5.5vw, 80px)',
            lineHeight: 1.0,
            // fontWeight retiré : CSS base (h1 = 800) s'applique
            letterSpacing: '-0.04em',
          }}
        >
          {title}
          {titleEm && (
            <>
              {' '}
              <span style={{ color: 'var(--color-ce-terra)' }}>{titleEm}</span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="text-[var(--color-ce-cream)] mt-7 max-w-[68ch]"
            style={{
              fontSize: 'clamp(16px, 1.4vw, 19px)',
              fontWeight: 400,
              opacity: 0.78,
              lineHeight: 1.55,
            }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
