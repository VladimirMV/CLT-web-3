import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechnologySection } from './components/TechnologySection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProtectionCapabilitiesSection } from './components/ProtectionCapabilitiesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { UseCasesSection } from './components/UseCasesSection';
import { TrustSection } from './components/TrustSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Language } from './translations';

function App() {
  const [language, setLanguage] = useState<Language>('EN');

  const handleDemoClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <PageLoader />
      </AnimatePresence>
      
      <div className="min-h-screen bg-[var(--dark-space)] overflow-x-hidden">
        <Navbar onDemoClick={handleDemoClick} language={language} setLanguage={setLanguage} />
        <HeroSection language={language} />
        <AboutSection language={language} />
        <TechnologySection language={language} />
        <SolutionsSection language={language} />
        <ProtectionCapabilitiesSection language={language} />
        <AdvantagesSection language={language} />
        <UseCasesSection language={language} />
        <TrustSection language={language} />
        <ContactSection language={language} />
        <Footer language={language} />
      </div>
    </>
  );
}

export default App;