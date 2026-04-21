import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'cream' | 'white' | 'violet' | 'ink';

interface SectionShellProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
  narrow?: boolean;
  as?: 'section' | 'div' | 'article';
  bordered?: boolean;
  children: ReactNode;
}

const toneClasses: Record<Tone, string> = {
  cream: 'bg-[var(--color-ce-cream)] text-[var(--color-ce-ink)]',
  white: 'bg-[#ffffff] text-[var(--color-ce-ink)]',
  violet: 'bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)]',
  ink: 'bg-[var(--color-ce-ink)] text-[var(--color-ce-cream)]',
};

export const SectionShell = forwardRef<HTMLElement, SectionShellProps>(function SectionShell(
  { tone = 'cream', narrow = false, as = 'section', bordered = false, className, children, ...rest },
  ref,
) {
  const Tag = as;
  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn(
        'relative w-full',
        toneClasses[tone],
        bordered && 'border-t border-[var(--color-ce-rule)]',
        className,
      )}
      style={{
        paddingBlock: 'var(--spacing-section-y)',
      }}
      {...rest}
    >
      <div className={cn(narrow ? 'ce-container-narrow' : 'ce-container', 'relative z-10')}>
        {children}
      </div>
    </Tag>
  );
});
