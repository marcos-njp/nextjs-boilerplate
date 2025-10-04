import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import ConnectSection from './components/ConnectSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-zinc-50/50 to-zinc-100 dark:from-zinc-900 dark:via-zinc-900/50 dark:to-zinc-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <main className="container mx-auto px-4 py-16 max-w-5xl relative">
        <div className="space-y-24">
          <HeroSection />
          <AboutSection />
          <TechStackSection />
          <ConnectSection />
        </div>
      </main>
    </div>
  );
}
