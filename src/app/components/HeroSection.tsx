import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Language, translations } from '../translations';

interface HeroSectionProps {
  language: Language;
}

export function HeroSection({ language }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = translations[language].hero;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--dark-space)]">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--laser-blue) 1px, transparent 1px), linear-gradient(90deg, var(--laser-blue) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}></div>
      </div>

      {/* Laser beam effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-[var(--laser-blue)] to-transparent opacity-60 blur-sm"
        animate={{
          x: [0, 100, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          boxShadow: '0 0 40px var(--laser-blue)',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-1 h-96 bg-gradient-to-b from-[var(--laser-green)] to-transparent opacity-40 blur-sm"
        animate={{
          x: [0, -80, 0],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
        style={{
          boxShadow: '0 0 40px var(--laser-green)',
        }}
      />

      {/* Glowing particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[var(--laser-blue)] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <span className="text-[var(--laser-blue)] text-sm tracking-[0.2em] uppercase">
                {t.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl lg:text-7xl text-[var(--foreground)] leading-tight"
            >
              {t.title} {t.subtitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-[var(--neutral-gray)] leading-relaxed"
            >
              {t.description}
            </motion.p>


            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[var(--neutral-gray)]/20"
            >
              <div>
                <div className="text-3xl text-[var(--laser-blue)] mb-1">{t.stats.precisionValue}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.precision}</div>
              </div>
              <div>
                <div className="text-3xl text-[var(--laser-green)] mb-1">{t.stats.responseValue}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.response}</div>
              </div>
              <div>
                <div className="text-3xl text-[var(--foreground)] mb-1">{t.stats.rangeValue}</div>
                <div className="text-sm text-[var(--neutral-gray)]">{t.stats.range}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Laser Defense Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--laser-blue)]/20 to-[var(--laser-green)]/20 rounded-2xl backdrop-blur-sm border border-[var(--laser-blue)]/30 overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle, var(--laser-blue) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}></div>

              {/* Laser System (bottom left) */}
              <motion.div
                className="absolute bottom-[15%] left-[10%]"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {/* Laser base */}
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="20" y="35" width="20" height="15" fill="var(--laser-blue)" opacity="0.6" />
                  <rect x="15" y="50" width="30" height="5" fill="var(--laser-blue)" opacity="0.4" />
                  <circle cx="30" cy="30" r="8" fill="var(--laser-green)" opacity="0.8" />
                  <motion.circle
                    cx="30"
                    cy="30"
                    r={5}
                    fill="var(--laser-green)"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                </svg>
                <div className="text-xs text-[var(--laser-blue)] mt-2 text-center whitespace-nowrap">
                  LASER SYSTEM
                </div>
              </motion.div>

              {/* Drone */}
              <motion.div
                className="absolute"
                initial={{ x: -100, y: 150, opacity: 0 }}
                animate={{
                  x: [0, 400, 450, 450],
                  y: [150, 180, 550, 550],
                  rotate: [0, 0, 180, 180],
                  opacity: [1, 1, 1, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatDelay: 10,
                  times: [0, 0.6, 0.95, 1],
                  ease: 'easeInOut',
                }}
              >
                {/* Drone SVG */}
                <svg width="50" height="50" viewBox="0 0 50 50">
                  {/* Body */}
                  <motion.ellipse
                    cx="25"
                    cy="25"
                    rx="12"
                    ry="8"
                    opacity="0.8"
                    animate={{
                      fill: ['#1a1a1a', '#1a1a1a', 'var(--alert-red)', 'var(--alert-red)'],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.58, 0.62, 1],
                    }}
                  />
                  {/* Propellers */}
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
                    style={{ originX: '10px', originY: '10px' }}
                  >
                    <motion.line
                      x1="8" y1="10" x2="12" y2="10"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                    <motion.line
                      x1="10" y1="8" x2="10" y2="12"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
                    style={{ originX: '40px', originY: '10px' }}
                  >
                    <motion.line
                      x1="38" y1="10" x2="42" y2="10"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                    <motion.line
                      x1="40" y1="8" x2="40" y2="12"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
                    style={{ originX: '10px', originY: '40px' }}
                  >
                    <motion.line
                      x1="8" y1="40" x2="12" y2="40"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                    <motion.line
                      x1="10" y1="38" x2="10" y2="42"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                  </motion.g>
                  <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.3, repeat: Infinity, ease: 'linear' }}
                    style={{ originX: '40px', originY: '40px' }}
                  >
                    <motion.line
                      x1="38" y1="40" x2="42" y2="40"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                    <motion.line
                      x1="40" y1="38" x2="40" y2="42"
                      strokeWidth="2"
                      animate={{
                        stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        repeatDelay: 10,
                        times: [0, 0.58, 0.62, 1],
                      }}
                    />
                  </motion.g>
                  {/* Arms */}
                  <motion.line
                    x1="25" y1="25" x2="10" y2="10"
                    strokeWidth="2"
                    animate={{
                      stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.58, 0.62, 1],
                    }}
                  />
                  <motion.line
                    x1="25" y1="25" x2="40" y2="10"
                    strokeWidth="2"
                    animate={{
                      stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.58, 0.62, 1],
                    }}
                  />
                  <motion.line
                    x1="25" y1="25" x2="10" y2="40"
                    strokeWidth="2"
                    animate={{
                      stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.58, 0.62, 1],
                    }}
                  />
                  <motion.line
                    x1="25" y1="25" x2="40" y2="40"
                    strokeWidth="2"
                    animate={{
                      stroke: ['#333333', '#333333', 'var(--alert-red)', 'var(--alert-red)'],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.58, 0.62, 1],
                    }}
                  />
                </svg>

                {/* Red crosshair on hit */}
                <motion.svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="absolute top-0 left-0"
                  animate={{
                    opacity: [0, 0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatDelay: 10,
                    times: [0, 0.58, 0.6, 0.7, 0.75],
                  }}
                >
                  <line x1="25" y1="10" x2="25" y2="20" stroke="var(--alert-red)" strokeWidth="3" />
                  <line x1="25" y1="30" x2="25" y2="40" stroke="var(--alert-red)" strokeWidth="3" />
                  <line x1="10" y1="25" x2="20" y2="25" stroke="var(--alert-red)" strokeWidth="3" />
                  <line x1="30" y1="25" x2="40" y2="25" stroke="var(--alert-red)" strokeWidth="3" />
                  <circle cx="25" cy="25" r="15" stroke="var(--alert-red)" strokeWidth="2" fill="none" />
                </motion.svg>
              </motion.div>

              {/* Laser Beam - positioned to start from green circle center */}
              <svg className="absolute pointer-events-none" style={{ left: 'calc(10% + 30px)', top: 'calc(85% - 30px)', width: '100%', height: '100%', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--laser-green)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--laser-green)" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Line starts from (0,0) which is now positioned at circle center */}
                {/* Tracks drone until hit, then disappears */}
                <motion.line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="0"
                  animate={{
                    x2: [0, 200, 335, 335, 0],
                    y2: [0, -180, -275, -275, 0],
                    opacity: [0, 1, 1, 0, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatDelay: 10,
                    times: [0, 0.3, 0.6, 0.7, 1],
                    ease: 'linear',
                  }}
                  stroke="url(#laserBeam)"
                  strokeWidth="3"
                  style={{
                    filter: 'drop-shadow(0 0 8px var(--laser-green))',
                  }}
                />
              </svg>

              {/* Impact Effect - only at hit moment */}
              <motion.div
                className="absolute"
                style={{ left: 0, top: 0 }}
                animate={{
                  x: [0, 400, 400],
                  y: [150, 180, 180],
                  opacity: [0, 0, 1, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatDelay: 10,
                  times: [0, 0.58, 0.65, 0.7],
                }}
              >
                {/* Outer ring */}
                <motion.div
                  className="absolute left-[25px] top-[25px] -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1, 2.5, 0],
                    opacity: [0, 0, 1, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    times: [0, 0.58, 0.65, 0.7],
                  }}
                >
                  <div className="w-16 h-16 rounded-full border-4 border-[var(--laser-green)]"
                    style={{
                      boxShadow: '0 0 30px var(--laser-green)',
                    }}
                  />
                </motion.div>

                {/* Inner flash */}
                <motion.div
                  className="absolute left-[25px] top-[25px] -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1, 2, 0],
                    opacity: [0, 0, 1, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    times: [0, 0.58, 0.65, 0.7],
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--laser-green)]"
                    style={{
                      boxShadow: '0 0 40px var(--laser-green)',
                      filter: 'blur(8px)',
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Status Text */}
              <motion.div
                className="absolute top-8 left-8 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="bg-[var(--dark-space)]/80 px-4 py-2 rounded border border-[var(--laser-blue)]/30 space-y-1">
                  <motion.div
                    className="text-[var(--laser-blue)]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ● SYSTEM ACTIVE
                  </motion.div>
                  <div className="text-[var(--laser-green)]">
                    ● TARGET LOCKED
                  </div>
                  <motion.div
                    className="text-[var(--alert-red)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      repeatDelay: 10,
                      times: [0, 0.6, 0.65, 0.95, 1],
                    }}
                  >
                    ● NEUTRALIZED
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[var(--laser-blue)] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[var(--laser-blue)] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}