import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Home } from '@/pages/Home';
import { Dirigeants } from '@/pages/Dirigeants';
import { DirectionFinanciere } from '@/pages/DirectionFinanciere';
import { QuiSommesNous } from '@/pages/QuiSommesNous';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--color-ce-violet)] flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dirigeants" element={<Dirigeants />} />
            <Route path="/direction-financiere" element={<DirectionFinanciere />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
