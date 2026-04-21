import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  centered?: boolean;
  tone?: 'terra' | 'cream';
  className?: string;
}

export function Eyebrow({ children, centered = false, tone = 'terra', className }: EyebrowProps) {
  return (
    <div
      className={cn(
        'ce-pillar-label',
        centered && 'ce-pillar-label--center',
        tone === 'cream' && 'text-[var(--color-ce-cream)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
