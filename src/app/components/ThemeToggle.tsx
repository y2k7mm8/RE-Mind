import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-full bg-slate-800/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50" />
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-slate-800 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-500 group-hover:rotate-90 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-600 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </motion.button>
  );
}