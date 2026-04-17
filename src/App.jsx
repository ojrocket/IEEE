import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Intro from './pages/Intro';
import AboutLayout from './pages/about/AboutLayout';
import AboutIndex from './pages/about/AboutIndex';
import Governance from './pages/about/Governance';
import Leadership from './pages/about/Leadership';

import ExecutiveBoard from './pages/ExecutiveBoard';
import Chapters from './pages/Chapters';
import Achievements from './pages/Achievements';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

// New pages from iee-changes-main
import Blog from './pages/Blog';
import Hackathon from './pages/Hackathon';
import TechFest from './pages/TechFest';
import Workshop from './pages/Workshop';
import Gallery from './pages/Gallery';
import Explore from './pages/Explore';
import Events from './pages/Events';
import AISociety from './pages/societies/AISociety';
import ComputerSociety from './pages/societies/ComputerSociety';
import PowerEnergy from './pages/societies/PowerEnergy';
import RoboticsSociety from './pages/societies/RoboticsSociety';

import ScrollToTop from './components/ScrollToTop';

// Sponsors page
import Sponsors from './external/sponsors/Sponsors';

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Preloader />
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Home — scale transition */}
              <Route path="/" element={<PageTransition variant="scale"><Home /></PageTransition>} />
              <Route path="/intro" element={<PageTransition variant="fade"><Intro /></PageTransition>} />
              
              {/* About — slide from right */}
              <Route path="/about" element={<PageTransition variant="slideRight"><AboutLayout /></PageTransition>}>
                <Route index element={<AboutIndex />} />
                <Route path="governance" element={<Governance />} />
                <Route path="leadership" element={<Leadership />} />
              </Route>

              {/* Board — blur transition */}
              <Route path="/executive-board" element={<PageTransition variant="blur"><ExecutiveBoard /></PageTransition>} />
              
              {/* Chapters — vertical rise */}
              <Route path="/chapters" element={<PageTransition variant="rise"><Chapters /></PageTransition>} />
              
              {/* Achievements — clip reveal */}
              <Route path="/achievements" element={<PageTransition variant="reveal"><Achievements /></PageTransition>} />
              
              {/* Join — fade */}
              <Route path="/join" element={<PageTransition variant="fade"><Join /></PageTransition>} />
              
              {/* New pages from iee-changes-main */}
              <Route path="/events" element={<PageTransition variant="slideRight"><Events /></PageTransition>} />
              <Route path="/blog" element={<PageTransition variant="slideRight"><Blog /></PageTransition>} />
              <Route path="/hackathon" element={<PageTransition variant="scale"><Hackathon /></PageTransition>} />
              <Route path="/techfest" element={<PageTransition variant="rise"><TechFest /></PageTransition>} />
              <Route path="/workshop" element={<PageTransition variant="blur"><Workshop /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition variant="reveal"><Gallery /></PageTransition>} />
              <Route path="/explore" element={<PageTransition variant="fade"><Explore /></PageTransition>} />
              
                            <Route path="/societies/ai" element={<PageTransition variant="slideRight"><AISociety /></PageTransition>} />
              <Route path="/societies/computer" element={<PageTransition variant="slideRight"><ComputerSociety /></PageTransition>} />
              <Route path="/societies/power" element={<PageTransition variant="slideRight"><PowerEnergy /></PageTransition>} />
              <Route path="/societies/robotics" element={<PageTransition variant="slideRight"><RoboticsSociety /></PageTransition>} />
              
              {/* Sponsors page */}
              <Route path="/sponsors" element={<PageTransition variant="fade"><Sponsors /></PageTransition>} />
              
              <Route path="*" element={<PageTransition variant="fade"><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
