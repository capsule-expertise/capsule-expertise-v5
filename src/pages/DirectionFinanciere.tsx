import { useEffect } from 'react';
import { PageHeader } from '@/components/sections/PageHeader';
import { OffresETISection } from '@/components/sections/OffresETISection';
import { CaseSection } from '@/components/sections/CaseSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

/**
 * Page parcours direction financière (DAF / RAF / contrôle de gestion).
 * Accessible via /direction-financiere (clic sur "DAF · ETI" dans la nav,
 * ou bouton "Je suis DAF" depuis la card de l'AiguillageSection).
 */
export function DirectionFinanciere() {
  useEffect(() => {
    document.title =
      "Pour les directions financières d'ETI — Capsule Expertise";
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Parcours direction financière"
        title="Pour les"
        titleEm="DAF / ETI"
        description="Renfort opérationnel pour votre fonction finance. Capsule intervient sur reporting groupe, structuration du service, amélioration des délais de clôture et management de transition."
      />
      <OffresETISection />
      <CaseSection />
      <ContactCTA from="daf" />
    </>
  );
}
