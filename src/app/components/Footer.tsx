import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Language, translations } from '../translations';
import { useTheme } from '../ThemeContext';
import logoForDarkTheme from '../../imports/logo_dark2.png';
import logoForLightTheme from '../../imports/logo_light.png';

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const t = translations[language].footer;

  return (
    <footer className="bg-[var(--dark-space)] border-t border-[var(--laser-blue)]/20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--laser-blue)]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src={theme === 'light' ? logoForLightTheme : logoForDarkTheme}
                alt="COMMON LASER TECHNOLOGIES"
                className="h-[88px] md:h-[100px] w-auto"
              />
            </div>
            <p className="text-[var(--neutral-gray)] text-sm mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[var(--foreground)] mb-4">{t.products}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  LASER DAZZLER
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  LASER JAMMER
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  LASER ANTYSPY
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--foreground)] mb-4">{t.company}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  {t.companyLinks.about}
                </a>
              </li>
              <li>
                <a href="#technology" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  {t.companyLinks.technology}
                </a>
              </li>
              <li>
                <a href="#trust" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  {t.companyLinks.certificates}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[var(--foreground)] mb-4">{t.support}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  {t.supportLinks.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors text-sm">
                  {t.supportLinks.documentation}
                </a>
              </li>
            </ul>
            
            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-[var(--neutral-gray)] text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@common-laser.com" className="hover:text-[var(--laser-blue)] transition-colors">
                  info@common-laser.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-[var(--neutral-gray)] text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>46 St Leonards Rd., Northampton, NN4 8DP, United Kingdom</span>
              </div>
              <div className="text-[var(--neutral-gray)] text-sm ml-6">
                Reg. № 17121372
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--laser-blue)]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--neutral-gray)] text-sm">
            © {currentYear} COMMON LASER TECHNOLOGIES LIMITED. {t.rights}.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-[var(--neutral-gray)] hover:text-[var(--laser-blue)] transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}