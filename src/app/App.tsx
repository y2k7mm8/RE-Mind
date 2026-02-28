import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Rewards } from './components/Rewards';
import { HowItWorks } from './components/HowItWorks';
import { MiniTests } from './components/MiniTests';
import { CTA } from './components/CTA';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf9f7] dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ThemeToggle />
        <Hero />
        <Problem />
        <Solution />
        <Rewards />
        <MiniTests />
        <HowItWorks />
        <CTA />
      </div>
    </ThemeProvider>
  );
}