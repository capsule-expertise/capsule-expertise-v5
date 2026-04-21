import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'cream' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type Props = ButtonProps | LinkProps;

const base =
  'inline-flex items-center justify-center gap-2 font-micro font-medium tracking-[0.03em] rounded-[var(--radius-xs)] transition-all duration-200 will-change-transform';

const sizeClasses: Record<Size, string> = {
  sm: 'text-[0.78rem] px-4 py-2.5',
  md: 'text-[0.85rem] px-6 py-3.5',
  lg: 'text-[0.9rem] px-7 py-4',
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)] hover:bg-[var(--color-ce-violet-deep)] hover:-translate-y-[1px] shadow-[0_2px_0_rgba(26,20,16,0.08)] hover:shadow-[0_6px_16px_rgba(45,27,78,0.18)]',
  secondary:
    'bg-[var(--color-ce-terra)] text-[var(--color-ce-cream)] hover:bg-[#8f3618] hover:-translate-y-[1px] shadow-[0_2px_0_rgba(26,20,16,0.08)]',
  ghost:
    'bg-transparent text-[var(--color-ce-violet)] border border-[var(--color-ce-violet)]/30 hover:border-[var(--color-ce-violet)] hover:bg-[var(--color-ce-violet)] hover:text-[var(--color-ce-cream)]',
  cream:
    'bg-[var(--color-ce-cream)] text-[var(--color-ce-violet)] hover:bg-white hover:-translate-y-[1px]',
  link:
    'bg-transparent text-[var(--color-ce-violet)] hover:text-[var(--color-ce-terra)] p-0 underline underline-offset-[6px] decoration-[var(--color-ce-terra)] decoration-[1.5px]',
};

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(
    base,
    variant !== 'link' && sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _as; void _v; void _s; void _c; void _ch;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  void _as; void _v; void _s; void _c; void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
