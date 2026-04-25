import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, translations } from '../translations';
import { useTheme } from '../ThemeContext';
import logoForDarkTheme from '../../imports/logo_dark2.png';
import logoForLightTheme from '../../imports/logo_light.png';

interface NavbarProps {
  onDemoClick: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export function Navbar({ onDemoClick, language, setLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.technology, href: '#technology' },
    { label: t.solutions, href: '#solutions' },
    { label: t.applications, href: '#applications' },
    { label: t.whyUs, href: '#advantages' },
    { label: t.contact, href: '#contact' }
  ];

  const languages: Language[] = ['EN', 'UA'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--dark-space)]/90 backdrop-blur-xl border-b border-[var(--laser-blue)]/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src={theme === 'light' ? logoForLightTheme : logoForDarkTheme}
              alt="COMMON LASER TECHNOLOGIES"
              className="h-[62px] md:h-[74px] lg:h-[88px] w-auto transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--laser-blue)] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_var(--laser-blue)]"></span>
              </a>
            ))}
          </div>

          {/* Language & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-[var(--deep-space)] rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md text-sm transition-all duration-200 ${
                    language === lang
                      ? 'bg-[var(--laser-blue)] text-white'
                      : 'text-[var(--neutral-gray)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 bg-[var(--deep-space)] rounded-lg text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={onDemoClick}
              className="px-6 py-2.5 bg-[var(--laser-blue)] text-white rounded-lg hover:bg-[var(--laser-green)] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] hover:scale-105"
            >
              {t.requestDemo}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[var(--foreground)] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--deep-space)]/95 backdrop-blur-xl border-t border-[var(--laser-blue)]/20"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center gap-2">
                <div className="flex items-center space-x-2 bg-[var(--dark-space)] rounded-lg p-1 flex-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`px-3 py-1 rounded-md text-sm transition-all duration-200 flex-1 ${
                        language === lang
                          ? 'bg-[var(--laser-blue)] text-white'
                          : 'text-[var(--neutral-gray)] hover:text-[var(--foreground)]'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-2.5 bg-[var(--dark-space)] rounded-lg text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-all duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>

              <button
                onClick={() => {
                  onDemoClick();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-2.5 bg-[var(--laser-blue)] text-white rounded-lg hover:bg-[var(--laser-green)] transition-all duration-300"
              >
                {t.requestDemo}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}