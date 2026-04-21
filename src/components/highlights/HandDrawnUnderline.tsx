import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

/**
 * Niveau 3 — Underline SVG Bézier terracotta animé stroke-dashoffset.
 * École Shine / Arc / Every.to.
 * Usage : CTAs, mots-clés isolés dans paragraphes, 2-4 occurrences max sur tout le site.
 * Respecte prefers-reduced-motion (l'anim est supprimée, le trait reste statique complet).
 */
interface HandDrawnUnderlineProps {
  children: ReactNode;
  thickness?: number;
  color?: string;
  offset?: string;
  className?: string;
  variant?: 'wave' | 'straight' | 'dip';
}

const PATHS: Record<NonNullable<HandDrawnUnderlineProps['variant']>, string> = {
  wave: 'M3 7 C 40 2, 90 9, 140 4 S 240 6, 297 5',
  straight: 'M3 6 Q 150 4, 297 6',
  dip: 'M3 4 C 60 3, 120 10, 180 6 S 260 2, 297 5',
};

export function HandDrawnUnderline({
  children,
  thickness = 1.75,
  color,
  offset = '-0.1em',
  className,
  variant = 'wave',
}: HandDrawnUnderlineProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });

  return (
    <span
      ref={ref}
      className={cn('ce-hdu', inView && 'is-visible', className)}
    >
      {children}
      <svg
        aria-hidden
        className="absolute left-0 w-full pointer-events-none"
        style={{ bottom: offset, height: '0.45em' }}
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
      >
        <path
          d={PATHS[variant]}
          className="ce-hdu-path"
          stroke={color ?? 'var(--color-ce-terra)'}
          strokeWidth={thickness}
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
