import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTheme } from '../ThemeContext';
import logoForDarkTheme from '../../imports/logo_dark2.png';
import logoForLightTheme from '../../imports/logo_light.png';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[var(--dark-space)] flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 rounded-2xl bg-[var(--laser-blue)]"
            style={{
              filter: 'blur(40px)',
            }}
          />
          <img
            src={theme === 'light' ? logoForLightTheme : logoForDarkTheme}
            alt="COMMON LASER TECHNOLOGIES"
            className="h-32 w-auto relative z-10 mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-[var(--neutral-gray)] text-sm">Loading defense systems...</p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 w-64 h-1 bg-[var(--deep-space)] rounded-full overflow-hidden mx-auto"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[var(--laser-blue)] to-transparent"
            style={{
              boxShadow: '0 0 20px var(--laser-blue)',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}