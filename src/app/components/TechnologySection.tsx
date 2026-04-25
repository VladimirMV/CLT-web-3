import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Zap, Target, Shield, Crosshair } from 'lucide-react';
import { Language, translations } from '../translations';

interface TechnologySectionProps {
  language: Language;
}

export function TechnologySection({ language }: TechnologySectionProps) {
  const { ref, isInView } = useInView();
  const t = translations[language].technology;

  const stages = [
    {
      icon: Target,
      title: t.steps.detection.title,
      description: t.steps.detection.description,
      delay: 0.2
    },
    {
      icon: Crosshair,
      title: t.steps.identification.title,
      description: t.steps.identification.description,
      delay: 0.3
    },
    {
      icon: Zap,
      title: t.steps.tracking.title,
      description: t.steps.tracking.description,
      delay: 0.4
    },
    {
      icon: Shield,
      title: t.steps.neutralization.title,
      description: t.steps.neutralization.description,
      delay: 0.5
    }
  ];

  return (
    <section id="technology" ref={ref} className="py-24 lg:py-32 bg-[var(--deep-space)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--laser-green)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--laser-blue)]/10 rounded-full blur-3xl"></div>

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

        {/* Stages */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stage.delay }}
              className="relative group"
            >
              <div className="bg-[var(--dark-space)] border border-[var(--laser-blue)]/30 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[var(--laser-blue)] hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]">
                {/* Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[var(--laser-blue)] to-[var(--laser-green)] rounded-xl flex items-center justify-center text-xl text-[var(--dark-space)]">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[var(--laser-blue)]/10 flex items-center justify-center group-hover:bg-[var(--laser-blue)]/20 transition-colors">
                    <stage.icon className="w-8 h-8 text-[var(--laser-blue)]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-[var(--foreground)] mb-4">{stage.title}</h3>
                <p className="text-[var(--neutral-gray)] leading-relaxed">{stage.description}</p>

                {/* Connecting line */}
                {index < stages.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[var(--laser-blue)] to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.6, delay: stage.delay + 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative h-[400px] bg-[var(--dark-space)] border border-[var(--laser-blue)]/30 rounded-2xl overflow-hidden"
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(var(--laser-blue) 1px, transparent 1px), linear-gradient(90deg, var(--laser-blue) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>

          {/* Animated laser beam */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--laser-blue)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--laser-blue)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--laser-green)" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <motion.line
              x1="10%"
              y1="80%"
              x2="90%"
              y2="20%"
              stroke="url(#laserGradient)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 0 10px var(--laser-blue))',
              }}
            />
          </svg>

          {/* Source point */}
          <motion.div
            className="absolute bottom-[20%] left-[10%] w-4 h-4 rounded-full bg-[var(--laser-blue)]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              boxShadow: '0 0 20px var(--laser-blue)',
            }}
          />

          {/* Target point */}
          <motion.div
            className="absolute top-[20%] right-[10%] w-6 h-6 rounded-full border-2 border-[var(--alert-red)]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-[var(--alert-red)]"
              animate={{
                opacity: [0.3, 0, 0.3],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Info labels */}
          <div className="absolute bottom-[20%] left-[10%] transform translate-y-10">
            <div className="text-sm text-[var(--laser-blue)] bg-[var(--dark-space)]/80 px-3 py-1 rounded">
              Laser System
            </div>
          </div>
          <div className="absolute top-[20%] right-[10%] transform -translate-y-10">
            <div className="text-sm text-[var(--alert-red)] bg-[var(--dark-space)]/80 px-3 py-1 rounded">
              Threat Detected
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}