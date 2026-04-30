import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll automatiquement en haut de la page à chaque changement de route.
 * Empêche le bug "j'arrive sur la nouvelle page mais je suis au milieu" hérité
 * du scroll position de la page précédente.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
