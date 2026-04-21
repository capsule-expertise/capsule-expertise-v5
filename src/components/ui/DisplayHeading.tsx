import { type ReactNode, type ElementType, type HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface DisplayHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  tone?: 'ink' | 'violet' | 'cream';
  maxWidth?: string;
}

const sizeClasses: Record<NonNullable<DisplayHeadingProps['size']>, string> = {
  xl: 'text-[clamp(2.75rem,6vw,5rem)] leading-[1.02]',
  lg: 'text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08]',
  md: 'text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.12]',
  sm: 'text-[clamp(1.35rem,2.5vw,1.9rem)] leading-[1.2]',
};

const toneClasses: Record<NonNullable<DisplayHeadingProps['tone']>, string> = {
  ink: 'text-[var(--color-ce-ink)]',
  violet: 'text-[var(--color-ce-violet)]',
  cream: 'text-[var(--color-ce-cream)]',
};

export function DisplayHeading({
  as = 'h2',
  size = 'md',
  tone = 'violet',
  className,
  style,
  maxWidth,
  children,
  ...rest
}: DisplayHeadingProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cn(
        'font-display font-normal tracking-display text-balance',
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
      style={{ maxWidth, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
