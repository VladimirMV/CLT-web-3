import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Gauge, Ruler, Cpu, Link, Leaf } from 'lucide-react';
import { Language, translations } from '../translations';

interface AdvantagesSectionProps {
  language: Language;
}

export function AdvantagesSection({ language }: AdvantagesSectionProps) {
  const { ref, isInView } = useInView();
  const t = translations[language].advantages;

  const advantages = [
    {
      icon: Target,
      title: t.items.precision.title,
      description: t.items.precision.description,
      color: 'laser-blue'
    },
    {
      icon: Gauge,
      title: t.items.speed.title,
      description: t.items.speed.description,
      color: 'laser-green'
    },
    {
      icon: Ruler,
      title: t.items.range.title,
      description: t.items.range.description,
      color: 'laser-blue'
    },
    {
      icon: Cpu,
      title: t.items.autonomous.title,
      description: t.items.autonomous.description,
      color: 'laser-green'
    },
    {
      icon: Link,
      title: t.items.integration.title,
      description: t.items.integration.description,
      color: 'laser-blue'
    },
    {
      icon: Leaf,
      title: t.items.eco.title,
      description: t.items.eco.description,
      color: 'laser-green'
    }
  ];

  return (
    <section id="advantages" ref={ref} className="py-24 lg:py-32 bg-[var(--dark-space)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--laser-green)]/10 rounded-full blur-3xl"></div>

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

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[var(--deep-space)] border border-[var(--laser-blue)]/30 rounded-xl p-6 h-full hover:border-[var(--laser-blue)] hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-[var(--${advantage.color})]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--${advantage.color})]/20 transition-colors`}>
                  <advantage.icon className={`w-6 h-6 text-[var(--${advantage.color})]`} />
                </div>
                <h3 className="text-xl text-[var(--foreground)] mb-2">{advantage.title}</h3>
                <p className="text-[var(--neutral-gray)] text-sm">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--neutral-gray)] mb-6">
            {t.techSpecs}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--laser-blue)] text-[var(--dark-space)] rounded-lg hover:bg-[var(--laser-green)] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            {t.downloadBrochure}
          </a>
        </motion.div>
      </div>
    </section>
  );
}