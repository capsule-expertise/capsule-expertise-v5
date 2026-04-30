import { useEffect } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AiguillageSection } from '@/components/sections/AiguillageSection';

/**
 * Home V6 — page d'accueil multi-page.
 *
 * Composition très resserrée : Hero (Maîtrisez vos chiffres) +
 * AiguillageSection (les 2 cartes qui aiguillent vers /dirigeants ou
 * /direction-financiere). Plus de scroll infini, le reste du contenu est
 * réparti sur les pages dédiées.
 */
export function Home() {
  useEffect(() => {
    document.title =
      "Capsule Expertise — Cabinet d'expertise comptable — Bry-sur-Marne, Île-de-France";
  }, []);

  return (
    <>
      <HeroSection />
      <AiguillageSection />
    </>
  );
}
