import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, hsl(262, 83%, 68%), hsl(191, 95%, 62%))' }}
      />

      {/* Global ambient background */}
      <div className="gradient-mesh" />
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        {/* Premium Footer */}
        <footer className="relative pt-16 pb-8">
          <div className="section-divider mb-12" />
          
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Top row */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                {/* Logo */}
                <motion.a
                  href="#"
                  className="text-2xl font-bold font-mono"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                >
                  <span style={{ color: 'hsl(262, 83%, 68%)' }}>{'<'}</span>
                  <span style={{ color: 'hsl(220, 20%, 93%)' }}>MI</span>
                  <span style={{ color: 'hsl(262, 83%, 68%)' }}>{'/>'}</span>
                </motion.a>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Github className="w-4.5 h-4.5" />, href: 'https://github.com/miashraf1818', label: 'GitHub' },
                    { icon: <Linkedin className="w-4.5 h-4.5" />, href: 'https://www.linkedin.com/in/mohammed-ikram-ashrafi/', label: 'LinkedIn' },
                    { icon: <Mail className="w-4.5 h-4.5" />, href: 'mailto:ikramshariff2005@gmail.com', label: 'Email' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target={social.label !== 'Email' ? '_blank' : undefined}
                      rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'hsla(250, 20%, 14%, 0.8)',
                        border: '1px solid hsla(250, 15%, 22%, 0.6)',
                        color: 'hsl(220, 10%, 55%)',
                      }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid hsla(250, 15%, 12%, 0.8)' }}>
                <p className="text-sm" style={{ color: 'hsl(220, 10%, 40%)' }}>
                  © {new Date().getFullYear()} Mohammed Ikram Ashrafi. All rights reserved.
                </p>
                <p className="text-sm flex items-center gap-1.5" style={{ color: 'hsl(220, 10%, 40%)' }}>
                  Built with <Heart className="w-3.5 h-3.5" style={{ color: 'hsl(330, 85%, 60%)' }} /> and a lot of coffee
                </p>
              </div>
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            className="fixed bottom-8 right-8 w-11 h-11 rounded-xl flex items-center justify-center z-40 transition-all duration-300"
            style={{
              background: 'hsla(262, 83%, 58%, 0.9)',
              border: '1px solid hsla(262, 83%, 68%, 0.3)',
              color: 'white',
              boxShadow: '0 0 20px hsla(262, 83%, 68%, 0.2)',
            }}
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </footer>
      </div>
    </div>
  );
};

export default Index;
