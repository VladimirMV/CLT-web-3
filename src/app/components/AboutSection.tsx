import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Building2, Award, Users } from 'lucide-react';
import { Language, translations } from '../translations';

interface AboutSectionProps {
  language: Language;
}

export function AboutSection({ language }: AboutSectionProps) {
  const { ref, isInView } = useInView();
  const t = translations[language].about;

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[var(--dark-space)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--laser-blue)]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block">
              <span className="text-[var(--laser-blue)] text-sm tracking-[0.2em] uppercase">
                {t.badge}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[var(--foreground)]">
              {t.title}
            </h2>

            <div className="space-y-4 text-lg text-[var(--neutral-gray)] leading-relaxed">
              <p>
                {t.description}
              </p>
              <p className="font-semibold text-[var(--laser-blue)]">
                {t.mission}
              </p>
              <p>
                {t.missionText}
              </p>
            </div>

            {/* Company facts */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <Building2 className="w-8 h-8 text-[var(--laser-blue)] mx-auto mb-3" />
                <div className="text-2xl text-[var(--foreground)] mb-1">2026</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.projects}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <Award className="w-8 h-8 text-[var(--laser-green)] mx-auto mb-3" />
                <div className="text-2xl text-[var(--foreground)] mb-1">{t.stats.countriesValue}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.countries}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <Users className="w-8 h-8 text-[var(--laser-blue)] mx-auto mb-3" />
                <div className="text-2xl text-[var(--foreground)] mb-1">{t.stats.systemsValue}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.systems}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--deep-space)] to-[var(--dark-space)] border border-[var(--laser-blue)]/30">
              {/* Tech grid pattern */}
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `linear-gradient(var(--laser-blue) 1px, transparent 1px), linear-gradient(90deg, var(--laser-blue) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}></div>

              {/* Glowing center */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[var(--laser-blue)]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  boxShadow: '0 0 150px var(--laser-blue)',
                  filter: 'blur(60px)',
                }}
              />

              {/* Hexagonal patterns */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                {[...Array(6)].map((_, i) => (
                  <motion.polygon
                    key={i}
                    points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                    fill="none"
                    stroke="var(--laser-blue)"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { 
                      opacity: [0.3, 0.6, 0.3],
                      scale: 1
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    style={{
                      transform: `translate(${(i % 3) * 150 + 100}px, ${Math.floor(i / 3) * 150 + 100}px)`,
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}