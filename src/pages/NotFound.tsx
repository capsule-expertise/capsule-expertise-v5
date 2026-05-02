import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/sections/PageHeader';

/**
 * Page 404 fallback. Accessible via toute URL non matchée par les routes.
 */
export function NotFound() {
  useEffect(() => {
    document.title = 'Page introuvable — Capsule Expertise';
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Erreur 404"
        title="Page"
        titleEm="introuvable"
        description="La page que vous cherchez n'existe pas ou a été déplacée."
      />
      <section
        className="bg-[var(--color-ce-violet-deep)] text-[var(--color-ce-cream)]"
        style={{ paddingBlock: '40px 120px' }}
      >
        <div className="ce-container">
          <Link to="/" className="ce-btn ce-btn--terra ce-btn--lg">
            Retour à l'accueil
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </>
  );
}
