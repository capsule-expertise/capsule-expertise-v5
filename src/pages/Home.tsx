import { useEffect } from 'react';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FactsSection } from '@/components/sections/FactsSection';
import { AiguillageSection } from '@/components/sections/AiguillageSection';
import { OffresSection } from '@/components/sections/OffresSection';
import { QuestionsSection } from '@/components/sections/QuestionsSection';
import { OffresETISection } from '@/components/sections/OffresETISection';
import { EquipeSection } from '@/components/sections/EquipeSection';
import { CaseSection } from '@/components/sections/CaseSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function Home() {
  useEffect(() => {
    document.title =
      'Capsule Expertise — Cabinet d’expertise comptable — Bry-sur-Marne, Île-de-France';
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-ce-violet)]">
      <Nav />
      <main>
        {/* 1. Hero — H1 géant V1 + pulse + reassurance card + dual CTA */}
        <HeroSection />

        {/* 2. Facts — 4 chiffres jeune cabinet */}
        <FactsSection />

        {/* 3. Aiguillage — 2 parcours V1 teasers (reco audit : visible direct) */}
        <AiguillageSection />

        {/* 4. Offres TPE/PME — détail V1 (bloc 01 + 02 + interventions) */}
        <OffresSection />

        {/* 5. Questions — 4 Q&R V1 + FAQPage JSON-LD */}
        <QuestionsSection />

        {/* 6. Offres ETI — 5 missions V1 + intro Ranto ex-DAF LBO */}
        <OffresETISection />

        {/* 8. Équipe — 2 profils V1 complets + 3 témoignages V1 */}
        <EquipeSection />

        {/* 9. Case — exemple factice (agence conseil B2B) TODO visible */}
        <CaseSection />

        {/* 10. CTA final géant "Tenir les comptes. Tenir le cap." */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
