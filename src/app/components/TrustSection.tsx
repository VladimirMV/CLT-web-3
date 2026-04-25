import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface TrustSectionProps {
  language: Language;
}

export function TrustSection({ language }: TrustSectionProps) {
  const { ref, isInView } = useInView();
  const t = translations[language].trust;

  const certificates = [
    { icon: Award, title: t.certificates.iso, description: t.certificates.isoDesc },
    { icon: Shield, title: t.certificates.nato, description: t.certificates.natoDesc },
    { icon: CheckCircle, title: t.certificates.ce, description: t.certificates.ceDesc },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--dark-space)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--laser-blue)]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--laser-blue)] text-sm tracking-[0.2em] uppercase mb-4 block">
            {t.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl text-[var(--foreground)] mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-[var(--neutral-gray)] max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-xl p-8 text-center hover:border-[var(--laser-blue)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--laser-blue)]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--laser-blue)]/20 transition-colors">
                <cert.icon className="w-8 h-8 text-[var(--laser-blue)]" />
              </div>
              <h3 className="text-xl text-[var(--foreground)] mb-2">{cert.title}</h3>
              <p className="text-[var(--neutral-gray)] text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-2xl p-12 overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--laser-blue)]/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="absolute top-8 left-8 text-6xl text-[var(--laser-blue)]/20">"</div>
            
            <p className="text-2xl text-[var(--foreground)]/90 leading-relaxed mb-8 relative z-10 italic">
              {t.testimonial}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--laser-blue)] to-[var(--laser-green)]"></div>
              <div>
                <div className="text-[var(--foreground)]">{t.testimonialAuthor}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.testimonialRole}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl text-[var(--foreground)] mb-8">{t.partners}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-16 bg-[var(--neutral-gray)]/10 rounded-lg flex items-center justify-center">
                <div className="text-[var(--neutral-gray)] text-sm">Partner {i}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}