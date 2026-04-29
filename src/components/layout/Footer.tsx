import { SITE } from '@/content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-ce-violet)] text-[var(--color-ce-cream)] border-t border-[rgba(242,237,225,0.1)]"
      style={{ paddingBlock: '80px 36px' }}
    >
      <div className="ce-container">
        {/* Top grid */}
        <div
          className="grid gap-12 pb-14 border-b border-[rgba(242,237,225,0.1)]"
          style={{ gridTemplateColumns: 'minmax(0, 2fr) repeat(3, minmax(0, 1fr))' }}
        >
          {/* Identity + desc */}
          <div>
            <a href="#hero" className="ce-brand mb-6 inline-flex text-[var(--color-ce-cream)]">
              <div className="ce-brand-mark" />
              <span className="ce-brand-name text-[32px]">
                {SITE.brand.name}
                <em>{SITE.brand.suffix}</em>
              </span>
            </a>
            <p className="text-[16px] text-[rgba(242,237,225,0.65)] leading-[1.55] max-w-[44ch]">
              {SITE.footer.desc.split(SITE.footer.descEm).map((chunk, i, arr) => (
                <span key={i}>
                  {chunk}
                  {i < arr.length - 1 && <em className="font-serif italic text-[var(--color-ce-terra-soft)]">{SITE.footer.descEm}</em>}
                </span>
              ))}
            </p>
          </div>

          {/* Columns */}
          {SITE.footer.cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-medium text-[rgba(242,237,225,0.5)] mb-5 tracking-[0.02em]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => {
                  const hasTodo = 'isPlaceholder' in l && (l as { isPlaceholder?: boolean }).isPlaceholder;
                  return (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[15px] text-[var(--color-ce-cream)] hover:text-[var(--color-ce-terra)] transition-colors"
                      >
                        {l.label}
                        {hasTodo ? <span className="ce-todo ml-2">TODO</span> : null}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Affiliation OEC */}
        <div className="py-7 border-b border-[rgba(242,237,225,0.1)] flex items-center gap-5">
          <img
            src="/oec-logo.png"
            alt="Ordre des Experts-Comptables — Conseil national"
            width={150}
            height={45}
            style={{
              height: '36px',
              width: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.75,
            }}
          />
          <span className="text-[13px] text-[rgba(242,237,225,0.6)]">
            Membre de l'Ordre des Experts-Comptables
          </span>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[13px] text-[rgba(242,237,225,0.45)]">
          <div>
            © {year} {SITE.brand.full} · OEC Île-de-France ·{' '}
            <span className="ce-todo">N° OEC {SITE.legal.oecNumber}</span> ·{' '}
            <span className="ce-todo">SIRET {SITE.legal.siret}</span>
          </div>
          <ul className="flex items-center gap-5">
            {SITE.footer.legal.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover:text-[var(--color-ce-cream)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
