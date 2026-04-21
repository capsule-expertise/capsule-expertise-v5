import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

/**
 * Niveau 1 — Kinetic rotating keyword.
 * École Koto Studio / Linear ("Built for engineers / PMs / designers").
 * Usage : UN SEUL endroit sur le site (le H1 Hero). Signature unique.
 *
 * Calcule la largeur du mot le plus long au mount pour éviter le jump de layout.
 * Respecte prefers-reduced-motion (affiche le premier mot en statique).
 */
interface KineticKeywordProps {
  words: string[];
  intervalMs?: number;
  className?: string;
  italic?: boolean;
}

export function KineticKeyword({
  words,
  intervalMs = 2600,
  className,
  italic = true,
}: KineticKeywordProps) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [minWidth, setMinWidth] = useState<number | null>(null);

  // Measure the widest word to lock container width
  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const children = Array.from(measureRef.current.children) as HTMLElement[];
    const widest = Math.max(...children.map((c) => c.getBoundingClientRect().width));
    setMinWidth(widest);
  }, [words]);

  useEffect(() => {
    if (reduced || words.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [reduced, intervalMs, words.length]);

  const currentWord = words[index] ?? words[0];

  return (
    <>
      {/* Measurer: invisible, absolute, pour calculer la largeur max */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          position: 'absolute',
          visibility: 'hidden',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontStyle: italic ? 'italic' : 'normal',
          fontFamily: 'var(--font-display)',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          letterSpacing: 'inherit',
        }}
      >
        {words.map((w) => (
          <span key={w} style={{ display: 'inline-block', paddingInline: '2px' }}>
            {w}
          </span>
        ))}
      </span>

      {/* Visible rotating container */}
      <span
        className={cn('inline-block relative align-baseline', className)}
        style={{
          minWidth: minWidth ? `${minWidth}px` : undefined,
          overflow: 'hidden',
          verticalAlign: 'baseline',
          fontFamily: 'var(--font-display)',
          fontStyle: italic ? 'italic' : 'normal',
          color: 'var(--color-ce-terra)',
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentWord}
            initial={reduced ? false : { y: '45%', opacity: 0, filter: 'blur(2px)' }}
            animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            exit={reduced ? { opacity: 0 } : { y: '-45%', opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: reduced ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-block' }}
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
