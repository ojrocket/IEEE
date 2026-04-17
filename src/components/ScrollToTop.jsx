import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis handles the scroll usually, but window.scrollTo forces it globally
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
