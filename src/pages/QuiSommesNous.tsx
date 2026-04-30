import { useEffect } from 'react';
import { PageHeader } from '@/components/sections/PageHeader';
import { FactsSection } from '@/components/sections/FactsSection';
import { EquipeSection } from '@/components/sections/EquipeSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

/**
 * Page Qui sommes-nous (anciennement "Le cabinet").
 * Accessible via /qui-sommes-nous.
 */
export function QuiSommesNous() {
  useEffect(() => {
    document.title = 'Qui sommes-nous — Capsule Expertise';
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Le cabinet"
        title="Qui"
        titleEm="sommes-nous"
        description="Capsule est un cabinet d'expertise comptable indépendant fondé par Ranto Rajaonarivo et Jérôme Phou. Bry-sur-Marne, Île-de-France — Membre de l'Ordre des Experts-Comptables de Paris."
      />
      <FactsSection />
      <EquipeSection />
      <ContactCTA />
    </>
  );
}
