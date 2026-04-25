import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Zap, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Language, translations } from '../translations';

interface Product {
  name: string;
  category: string;
  power: string;
  range: string;
  targets: string;
  description: string;
  gradient: string;
}

interface SolutionsSectionProps {
  language: Language;
}

export function SolutionsSection({ language }: SolutionsSectionProps) {
  const { ref, isInView } = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = translations[language].solutions;

  const products: Product[] = [
    {
      name: t.jammer.name,
      category: t.jammer.category,
      power: t.jammer.power,
      range: t.jammer.range,
      targets: t.jammer.targets,
      description: t.jammer.description,
      gradient: 'from-[var(--laser-green)] to-[var(--laser-blue)]'
    },
    {
      name: t.dazzler.name,
      category: t.dazzler.category,
      power: t.dazzler.power,
      range: t.dazzler.range,
      targets: t.dazzler.targets,
      description: t.dazzler.description,
      gradient: 'from-[var(--laser-blue)] to-[var(--laser-green)]'
    },
    {
      name: t.antyspy.name,
      category: t.antyspy.category,
      power: t.antyspy.power,
      range: t.antyspy.range,
      targets: t.antyspy.targets,
      description: t.antyspy.description,
      gradient: 'from-[var(--alert-red)] to-[var(--laser-blue)]'
    }
  ];

  return (
    <section id="solutions" ref={ref} className="py-24 lg:py-32 bg-[var(--dark-space)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--laser-blue) 1px, transparent 0)`,
        backgroundSize: '50px 50px',
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

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className={`relative bg-[var(--deep-space)] border rounded-2xl p-8 h-full transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-[var(--laser-blue)] shadow-[0_0_40px_rgba(0,212,255,0.3)] -translate-y-2' 
                  : 'border-[var(--laser-blue)]/30'
              }`}>
                {/* Glow effect */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="productGlow"
                    className={`absolute -inset-0.5 bg-gradient-to-br ${product.gradient} opacity-20 rounded-2xl blur-xl -z-10`}
                  />
                )}

                {/* Category badge */}
                <div className="inline-block px-3 py-1 bg-[var(--laser-blue)]/10 border border-[var(--laser-blue)]/30 rounded-full text-xs text-[var(--laser-blue)] mb-6">
                  {product.category}
                </div>

                {/* Product name */}
                <h3 className="text-2xl text-[var(--foreground)] mb-4 tracking-tight">{product.name}</h3>

                {/* Description */}
                <p className="text-[var(--neutral-gray)] mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="space-y-4 mb-8">
                  <div className="mb-6">
                    <h4 className="text-sm text-[var(--neutral-gray)] mb-2">{t.specs.power}</h4>
                    <p className="text-2xl text-[var(--foreground)]">{product.power}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm text-[var(--neutral-gray)] mb-2">{t.specs.range}</h4>
                    <p className="text-2xl text-[var(--foreground)]">{product.range}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--neutral-gray)] mb-2">{t.specs.targets}</h4>
                    <p className="text-lg text-[var(--foreground)]">{product.targets}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-[var(--laser-blue)] group-hover:text-[var(--laser-green)] transition-colors">
                  <span>{t.learnMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Power indicator */}
                <div className="absolute top-8 right-8">
                  <motion.div
                    animate={hoveredIndex === index ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: hoveredIndex === index ? Infinity : 0,
                    }}
                  >
                    <Zap className="w-6 h-6 text-[var(--laser-blue)]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--neutral-gray)] mb-6">
            {t.customConfig}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[var(--laser-blue)] text-[var(--dark-space)] rounded-lg hover:bg-[var(--laser-green)] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.6)] hover:scale-105"
          >
            {t.contactUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
}