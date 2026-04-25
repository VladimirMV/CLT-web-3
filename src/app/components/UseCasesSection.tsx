import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Shield, Building, Plane, Users } from 'lucide-react';
import { Language, translations } from '../translations';

interface UseCase {
  title: string;
  description: string;
  features: string[];
  icon: any;
}

interface UseCasesSectionProps {
  language: Language;
}

export function UseCasesSection({ language }: UseCasesSectionProps) {
  const { ref, isInView } = useInView();
  const t = translations[language].useCases;

  const useCases: UseCase[] = [
    {
      title: t.scenarios.military.title,
      description: t.scenarios.military.description,
      features: t.scenarios.military.features,
      icon: Shield
    },
    {
      title: t.scenarios.infrastructure.title,
      description: t.scenarios.infrastructure.description,
      features: t.scenarios.infrastructure.features,
      icon: Building
    },
    {
      title: t.scenarios.airports.title,
      description: t.scenarios.airports.description,
      features: t.scenarios.airports.features,
      icon: Plane
    },
    {
      title: t.scenarios.events.title,
      description: t.scenarios.events.description,
      features: t.scenarios.events.features,
      icon: Users
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(var(--laser-blue) 1px, transparent 1px), linear-gradient(90deg, var(--laser-blue) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
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

        {/* Use cases grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-[var(--dark-space)] border border-[var(--laser-blue)]/30 rounded-2xl overflow-hidden hover:border-[var(--laser-blue)] hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] transition-all duration-500">
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-[var(--deep-space)] to-[var(--dark-space)] overflow-hidden">
                  {/* Simulated image with grid and laser effect */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle, var(--laser-blue) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}></div>
                  
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-1 h-full bg-gradient-to-b from-[var(--laser-blue)] to-transparent"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      x: [0, 50, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    style={{
                      boxShadow: '0 0 20px var(--laser-blue)',
                      filter: 'blur(2px)',
                    }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--laser-blue)]/20 backdrop-blur-sm border border-[var(--laser-blue)]/50 rounded-full text-xs text-[var(--laser-blue)]">
                    Use Case #{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl text-[var(--foreground)] mb-4">{useCase.title}</h3>
                  <p className="text-[var(--neutral-gray)] mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-4">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--laser-blue)] mt-2"></div>
                        <div>
                          <div className="text-sm text-[var(--neutral-gray)] mb-1">Feature:</div>
                          <div className="text-[var(--foreground)]">{feature}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-[var(--dark-space)] border border-[var(--laser-blue)]/20 rounded-xl p-6 text-center">
            <div className="text-3xl text-[var(--laser-blue)] mb-2">{t.stats.facilitiesValue}</div>
            <div className="text-sm text-[var(--neutral-gray)]">{t.stats.facilities}</div>
          </div>
          <div className="bg-[var(--dark-space)] border border-[var(--laser-green)]/20 rounded-xl p-6 text-center">
            <div className="text-3xl text-[var(--laser-green)] mb-2">{t.stats.interceptedValue}</div>
            <div className="text-sm text-[var(--neutral-gray)]">{t.stats.intercepted}</div>
          </div>
          <div className="bg-[var(--dark-space)] border border-[var(--laser-blue)]/20 rounded-xl p-6 text-center">
            <div className="text-3xl text-[var(--foreground)] mb-2">{t.stats.countriesValue}</div>
            <div className="text-sm text-[var(--neutral-gray)]">{t.stats.countries}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}