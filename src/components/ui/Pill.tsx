import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface PillProps {
  children: ReactNode;
  tone?: 'terra' | 'violet' | 'cream' | 'outline';
  className?: string;
}

const toneClasses: Record<NonNullable<PillProps['tone']>, string> = {
  terra:
    'text-[var(--color-ce-terra)] bg-[rgba(165,65,32,0.07)] border border-[rgba(165,65,32,0.18)]',
  violet:
    'text-[var(--color-ce-violet)] bg-[rgba(45,27,78,0.05)] border border-[rgba(45,27,78,0.14)]',
  cream:
    'text-[var(--color-ce-cream)] bg-[rgba(250,248,242,0.08)] border border-[rgba(250,248,242,0.18)]',
  outline:
    'text-[var(--color-ce-ink-soft)] bg-transparent border border-[var(--color-ce-rule-strong)]',
};

export function Pill({ children, tone = 'outline', className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-micro text-[0.7rem] font-medium tracking-[0.06em] px-2.5 py-1 rounded-[var(--radius-xs)]',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
