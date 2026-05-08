import { useEffect } from 'react';
import { PageHeader } from '@/components/sections/PageHeader';
import { OffresSection } from '@/components/sections/OffresSection';
import { MissionsSection } from '@/components/sections/MissionsSection';
import { QuestionsSection } from '@/components/sections/QuestionsSection';
import { CaseSection } from '@/components/sections/CaseSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

/**
 * Page parcours dirigeant TPE/PME.
 * Accessible via /dirigeants (clic sur "Dirigeants" dans la nav, ou bouton
 * "Je suis dirigeant" depuis la card de l'AiguillageSection).
 */
export function Dirigeants() {
  useEffect(() => {
    document.title =
      'Pour les dirigeants TPE/PME — Capsule Expertise';
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Parcours dirigeant"
        title="Pour les dirigeants"
        titleEm="TPE / PME"
        description="Vous disposez de vos chiffres et souhaitez les utiliser pour piloter votre activité. Capsule structure votre information financière pour décider plus vite — rémunération, trésorerie, recrutement, performance."
      />
      <OffresSection />
      <MissionsSection />
      <QuestionsSection />
      <CaseSection />
      <ContactCTA from="dirigeant" />
    </>
  );
}
