import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mohammed_Ikram_Ashrafi_CV1.pdf';
    link.download = 'Mohammed_Ikram_Ashrafi_CV1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-bold font-mono relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ color: 'hsl(262, 83%, 68%)' }}>{'<'}</span>
              <span style={{ color: 'hsl(220, 20%, 93%)' }}>MI</span>
              <span style={{ color: 'hsl(262, 83%, 68%)' }}>{'/>'}</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] rounded-full"
                style={{ background: 'linear-gradient(90deg, hsl(262, 83%, 68%), hsl(191, 95%, 62%))' }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href
                      ? 'text-white'
                      : 'text-[hsl(220,10%,55%)] hover:text-[hsl(220,20%,85%)]'
                  }`}
                >
                  {activeSection === link.href && (
                    <motion.span
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'hsla(262, 83%, 68%, 0.12)', border: '1px solid hsla(262, 83%, 68%, 0.2)' }}
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleResumeDownload}
                className="btn-outline !py-2 !px-4 !text-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative z-50 p-2 rounded-lg"
              style={{ color: 'hsl(220, 20%, 85%)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: 'hsla(250, 30%, 3%, 0.95)', backdropFilter: 'blur(24px)' }}
            />
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-3xl font-semibold"
                  style={{ color: 'hsl(220, 20%, 85%)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  whileHover={{ color: 'hsl(262, 83%, 75%)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => {
                  handleResumeDownload();
                  setMobileOpen(false);
                }}
                className="btn-primary !text-lg mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
