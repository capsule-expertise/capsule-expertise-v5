import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Niveau 2 — Italique serif sans couleur.
 * École Bredin Prat / Mercury / Circle Strategy.
 * Usage : H2 de sections, mots-clés non accentués.
 * Le contraste typographique roman vs italique suffit — pas de couleur accent.
 */
interface SerifItalicProps {
  children: ReactNode;
  className?: string;
}

export function SerifItalic({ children, className }: SerifItalicProps) {
  return (
    <em
      className={cn(
        'font-display italic font-normal text-inherit not-italic:not-applied',
        className,
      )}
      style={{
        fontStyle: 'italic',
        fontFamily: 'var(--font-display)',
        color: 'inherit',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </em>
  );
}
