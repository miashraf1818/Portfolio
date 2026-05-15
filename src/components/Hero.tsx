import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import TextReveal from './TextReveal';

const roles = [
  'Python Developer',
  'Full-Stack Engineer',
  'GenAI Integration Developer',
  'LLM Architect',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mohammed_Ikram_Ashrafi_CV1.pdf';
    link.download = 'Mohammed_Ikram_Ashrafi_CV1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Floating particles for the hero
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(262, 83%, 50%, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(191, 95%, 50%, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsla(330, 85%, 45%, 0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.id % 3 === 0
                ? 'hsl(262, 83%, 68%)'
                : p.id % 3 === 1
                ? 'hsl(191, 95%, 62%)'
                : 'hsl(330, 85%, 60%)',
              boxShadow: `0 0 ${p.size * 4}px ${p.size}px ${
                p.id % 3 === 0
                  ? 'hsla(262, 83%, 68%, 0.3)'
                  : p.id % 3 === 1
                  ? 'hsla(191, 95%, 62%, 0.3)'
                  : 'hsla(330, 85%, 60%, 0.3)'
              }`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, p.id % 2 === 0 ? 20 : -20, 0],
              opacity: [0, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'hsla(142, 76%, 36%, 0.1)',
              border: '1px solid hsla(142, 76%, 36%, 0.3)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="status-dot" />
            <span className="text-sm font-medium" style={{ color: 'hsl(142, 76%, 55%)' }}>
              Available for work
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
              <span className="block" style={{ color: 'hsl(220, 20%, 93%)' }}>
                <TextReveal text="Hi, I'm" delay={0.4} />{' '}
                <motion.span
                  className="glow-text inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Mohammed Ikram
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Rotating role */}
          <motion.div
            className="h-12 md:h-14 mb-8 overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="text-xl md:text-2xl lg:text-3xl font-mono font-medium block"
                style={{ color: 'hsl(262, 83%, 75%)' }}
                initial={{ y: 30, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                exit={{ y: -30, opacity: 0, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'hsl(220, 10%, 55%)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Building cutting-edge, intelligent systems that merge 
            <span style={{ color: 'hsl(262, 83%, 75%)' }}> software engineering </span>
            with{' '}
            <span style={{ color: 'hsl(191, 95%, 65%)' }}>advanced AI technologies</span>. 
            Specializing in Python, Django, FastAPI, and LLM integration.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="#projects" className="btn-primary">
              <Sparkles className="w-4 h-4" />
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={handleResumeDownload} className="btn-outline">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5"
              style={{ borderColor: 'hsla(250, 15%, 30%, 0.5)' }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'hsl(262, 83%, 68%)' }}
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
