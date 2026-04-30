import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SITE } from '@/content/site';
import { cn } from '@/lib/cn';

/**
 * Nav V6 — multi-page (React Router).
 * - Liens utilisent <NavLink> avec underline ocre quand actif
 * - CTA "Contact" en bouton terra
 * - Drawer mobile reste sur le même mécanisme
 */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Ferme le drawer mobile à chaque changement de route.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Block scroll quand le drawer est ouvert.
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
        style={{ background: 'rgba(20, 37, 58,0.92)' }}
      >
        <div className="ce-container">
          <nav className="grid grid-cols-[1fr_auto_1fr] items-center py-[18px] gap-3">
            {/* Left — Brand → Home */}
            <Link to="/" className="ce-brand justify-self-start">
              <div className="ce-brand-mark text-[var(--color-ce-cream)]" />
              <span className="ce-brand-name text-[var(--color-ce-cream)]">
                {SITE.brand.name}
                <em>{SITE.brand.suffix}</em>
              </span>
            </Link>

            {/* Center — Links (desktop) */}
            <ul className="hidden lg:flex gap-8 justify-self-center">
              {SITE.nav.links.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.href}
                    className={({ isActive }) =>
                      cn(
                        'text-[15px] py-2 relative transition-colors',
                        isActive
                          ? 'text-[var(--color-ce-cream)]'
                          : 'text-[rgba(242,237,225,0.72)] hover:text-[var(--color-ce-cream)]',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        {isActive && (
                          <span
                            aria-hidden
                            className="absolute left-0 right-0 -bottom-[2px] h-[2px]"
                            style={{ background: 'var(--color-ce-terra)' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right — Phone + CTA */}
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
              <Link to={SITE.nav.cta.href} className="ce-btn ce-btn--terra ce-btn--sm">
                {SITE.nav.cta.label}
              </Link>
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
            <NavLink
              key={l.label}
              to={l.href}
              className={({ isActive }) =>
                cn(
                  'font-sans text-[clamp(2rem,6vw,3rem)] font-medium tracking-[-0.035em] transition-colors',
                  isActive
                    ? 'text-[var(--color-ce-terra)]'
                    : 'hover:text-[var(--color-ce-terra)]',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to={SITE.nav.cta.href}
            className="ce-btn ce-btn--terra ce-btn--lg mt-4"
          >
            {SITE.nav.cta.label}
          </Link>
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
