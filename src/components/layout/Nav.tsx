import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/content/site';
import { cn } from '@/lib/cn';

function smoothScroll(href: string) {
  return (e: React.MouseEvent) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };
}

/**
 * Nav V4 — grille sticky violet avec blur, wordmark Capsule. central,
 * liens + téléphone + CTA terra à droite.
 */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <div
        className="sticky top-0 z-50 backdrop-blur-xl border-b border-[rgba(242,237,225,0.08)]"
        style={{ background: 'rgba(45,27,78,0.92)' }}
      >
        <div className="ce-container">
          <nav className="grid grid-cols-[1fr_auto_1fr] items-center py-[18px] gap-3">
            {/* Left — Brand */}
            <a
              href="#hero"
              onClick={smoothScroll('#hero')}
              className="ce-brand justify-self-start"
            >
              <div className="ce-brand-mark text-[var(--color-ce-cream)]" />
              <span className="ce-brand-name text-[var(--color-ce-cream)]">
                {SITE.brand.name}
                <em>{SITE.brand.suffix}</em>
              </span>
            </a>

            {/* Center — Links (desktop) */}
            <ul className="hidden lg:flex gap-8 justify-self-center">
              {SITE.nav.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={smoothScroll(l.href)}
                    className="text-[15px] text-[rgba(242,237,225,0.72)] hover:text-[var(--color-ce-cream)] transition-colors py-2 relative"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right — Phone (optionnel, si renseigné) + CTA */}
            <div className="hidden lg:flex gap-4 items-center justify-self-end">
              {!SITE.legal.phone.includes('XX') ? (
                <a
                  href={SITE.legal.phoneHref}
                  className="text-[15px] text-[rgba(242,237,225,0.65)] hover:text-[var(--color-ce-terra)] transition-colors"
                >
                  {SITE.legal.phone}
                </a>
              ) : (
                <span className="ce-todo">tél. à ajouter</span>
              )}
              <a
                href={SITE.nav.cta.href}
                onClick={smoothScroll(SITE.nav.cta.href)}
                className="ce-btn ce-btn--terra ce-btn--sm"
              >
                {SITE.nav.cta.label}
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="lg:hidden justify-self-end p-2 text-[var(--color-ce-cream)]"
            >
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)] transition-opacity duration-500 lg:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        style={{ paddingTop: 'var(--spacing-nav-h)' }}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full flex flex-col items-center justify-center gap-6 px-6">
          {SITE.nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => {
                smoothScroll(l.href)(e);
                setMobileOpen(false);
              }}
              className="font-sans text-[clamp(2rem,6vw,3rem)] font-medium tracking-[-0.035em] hover:text-[var(--color-ce-terra)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SITE.nav.cta.href}
            onClick={(e) => {
              smoothScroll(SITE.nav.cta.href)(e);
              setMobileOpen(false);
            }}
            className="ce-btn ce-btn--terra ce-btn--lg mt-4"
          >
            {SITE.nav.cta.label}
          </a>
          {!SITE.legal.phone.includes('XX') && (
            <a
              href={SITE.legal.phoneHref}
              className="mt-4 text-[rgba(242,237,225,0.65)] hover:text-[var(--color-ce-terra)]"
            >
              {SITE.legal.phone}
            </a>
          )}
        </div>
      </div>
    </>
  );
}
