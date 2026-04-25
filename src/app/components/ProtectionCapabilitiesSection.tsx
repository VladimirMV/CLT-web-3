import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Radio, Eye, Building, Shield } from 'lucide-react';
import { useState } from 'react';
import { Language, translations } from '../translations';

interface Threat {
  icon: any;
  name: string;
  description: string;
}

interface ProtectionTarget {
  icon: any;
  name: string;
}

interface ProtectionCapabilitiesSectionProps {
  language: Language;
}

export function ProtectionCapabilitiesSection({ language }: ProtectionCapabilitiesSectionProps) {
  const { ref, isInView } = useInView();
  const [hoveredThreat, setHoveredThreat] = useState<number | null>(null);
  const t = translations[language].protection;

  const threats: Threat[] = [
    { icon: Radio, name: t.threats.fpv.name, description: t.threats.fpv.description },
    { icon: Eye, name: t.threats.recon.name, description: t.threats.recon.description },
  ];

  const targets: ProtectionTarget[] = [
    { icon: Building, name: t.targets.infrastructure },
    { icon: Shield, name: t.targets.military },
    { icon: Radio, name: t.targets.airfields },
  ];

  return (
    <section id="applications" ref={ref} className="py-24 lg:py-32 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--alert-red)]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Threats */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl text-[var(--foreground)] mb-8"
            >
              {t.threatsTitle}
            </motion.h3>

            <div className="space-y-4">
              {threats.map((threat, index) => (
                <motion.div
                  key={threat.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredThreat(index)}
                  onMouseLeave={() => setHoveredThreat(null)}
                  className="relative group"
                >
                  <div className={`bg-[var(--dark-space)] border rounded-xl p-6 transition-all duration-300 ${
                    hoveredThreat === index
                      ? 'border-[var(--alert-red)] shadow-[0_0_30px_rgba(255,46,0,0.3)]'
                      : 'border-[var(--alert-red)]/30'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredThreat === index
                          ? 'bg-[var(--alert-red)]/30'
                          : 'bg-[var(--alert-red)]/10'
                      }`}>
                        <threat.icon className="w-6 h-6 text-[var(--alert-red)]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl text-[var(--foreground)] mb-2">{threat.name}</h4>
                        <p className="text-[var(--neutral-gray)] text-sm">{threat.description}</p>
                      </div>

                      {/* Laser beam on hover */}
                      {hoveredThreat === index && (
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--laser-blue)] to-[var(--laser-blue)]"
                          style={{
                            boxShadow: '0 0 10px var(--laser-blue)',
                          }}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Protection targets */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl text-[var(--foreground)] mb-8"
            >
              {t.targetsTitle}
            </motion.h3>

            <div className="space-y-4">
              {targets.map((target, index) => (
                <motion.div
                  key={target.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-[var(--dark-space)] border border-[var(--laser-green)]/30 rounded-xl p-6 hover:border-[var(--laser-green)] hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--laser-green)]/10 flex items-center justify-center group-hover:bg-[var(--laser-green)]/20 transition-all duration-300">
                      <target.icon className="w-6 h-6 text-[var(--laser-green)]" />
                    </div>
                    <h4 className="text-xl text-[var(--foreground)]">{target.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 gap-6"
            >
              <div className="bg-[var(--dark-space)]/50 border border-[var(--laser-blue)]/20 rounded-xl p-6 text-center">
                <div className="text-3xl text-[var(--laser-blue)] mb-2">{t.stats.coverage}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.coverageLabel}</div>
              </div>
              <div className="bg-[var(--dark-space)]/50 border border-[var(--laser-green)]/20 rounded-xl p-6 text-center">
                <div className="text-3xl text-[var(--laser-green)] mb-2">{t.stats.uptime}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.uptimeLabel}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Visual demonstration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 relative h-64 bg-[var(--dark-space)] border border-[var(--laser-blue)]/30 rounded-2xl overflow-hidden"
        >
          {/* Radar effect */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="radarGradient">
                <stop offset="0%" stopColor="var(--laser-blue)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--laser-blue)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <motion.circle
              cx="50%"
              cy="50%"
              r={0}
              fill="url(#radarGradient)"
              animate={{
                r: [0, 400],
                opacity: [1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          </svg>

          {/* Center point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-4 h-4 rounded-full bg-[var(--laser-green)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                boxShadow: '0 0 30px var(--laser-green)',
              }}
            />
          </div>

          {/* Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(var(--laser-blue) 1px, transparent 1px), linear-gradient(90deg, var(--laser-blue) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}></div>
        </motion.div>
      </div>
    </section>
  );
}