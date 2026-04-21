import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BulletProps {
  children: ReactNode;
  tone?: 'default' | 'cream';
  className?: string;
}

export function Bullet({ children, tone = 'default', className }: BulletProps) {
  return (
    <li
      className={cn(
        'flex items-start gap-3 font-body text-[0.95rem] leading-[1.6]',
        tone === 'cream' ? 'text-[rgba(250,248,242,0.78)]' : 'text-[var(--color-ce-ink-soft)]',
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block w-[5px] h-[5px] rounded-full bg-[var(--color-ce-terra)] mt-[0.65em] shrink-0"
      />
      <span className="flex-1">{children}</span>
    </li>
  );
}
