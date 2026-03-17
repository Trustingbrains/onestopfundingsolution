import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BuilderFunding from '../components/BuilderFunding';
import PartnersSection from '../components/PartnersSection';
import Advantages from '../components/Advantages';
import Process from '../components/Process';
import FAQ from '../components/FAQ';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <BuilderFunding />
      <PartnersSection />
      <Advantages />
      <Process />
      <FAQ />
    </main>
  );
}
