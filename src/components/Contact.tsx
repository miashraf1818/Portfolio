import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight, Send, MapPin } from 'lucide-react';

const socialLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'ikramshariff2005@gmail.com',
    href: 'mailto:ikramshariff2005@gmail.com?subject=PortfolioContact',
    color: 'hsl(262, 83%, 68%)',
    accent: 'hsla(262, 83%, 68%, 0.12)',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'mohammed-ikram-ashrafi',
    href: 'https://www.linkedin.com/in/mohammed-ikram-ashrafi/',
    color: 'hsl(191, 95%, 62%)',
    accent: 'hsla(191, 95%, 62%, 0.12)',
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'miashraf1818',
    href: 'https://github.com/miashraf1818',
    color: 'hsl(220, 20%, 85%)',
    accent: 'hsla(220, 20%, 85%, 0.12)',
  },
];

const opportunities = [
  'Freelance & Contract work',
  'Startup & Business collaborations',
  'Mentoring',
  'Speaking engagements',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="section-divider mb-24" />

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="flex items-center gap-3 mb-6" variants={itemVariants}>
            <div className="w-12 h-[1px]" style={{ background: 'hsl(262, 83%, 68%)' }} />
            <span className="text-sm font-mono font-medium tracking-wider uppercase" style={{ color: 'hsl(262, 83%, 75%)' }}>
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'hsl(220, 20%, 93%)' }}
            variants={itemVariants}
          >
            Let's build something{' '}
            <span className="glow-text">amazing</span>
          </motion.h2>

          <motion.p
            className="text-lg mb-16 max-w-2xl"
            style={{ color: 'hsl(220, 10%, 55%)' }}
            variants={itemVariants}
          >
            Ready to collaborate on your next project? I'm always open to discussing new opportunities
            and innovative ideas.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Social links */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="glass-card p-5 flex items-center gap-4 group block"
                  variants={itemVariants}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: link.accent, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: link.color }}>
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium truncate"
                      style={{ color: 'hsl(220, 20%, 85%)' }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: link.color }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Opportunities card */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'hsla(142, 76%, 50%, 0.12)', color: 'hsl(142, 76%, 50%)' }}
                  >
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: 'hsl(220, 20%, 93%)' }}>
                    Open to Opportunities
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {opportunities.map((opp, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'hsl(142, 76%, 50%)' }}
                      />
                      <span className="text-sm" style={{ color: 'hsl(220, 10%, 65%)' }}>
                        {opp}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 pt-4"
                  style={{ borderTop: '1px solid hsla(250, 15%, 15%, 0.5)' }}
                >
                  <MapPin className="w-4 h-4" style={{ color: 'hsl(220, 10%, 45%)' }} />
                  <span className="text-sm" style={{ color: 'hsl(220, 10%, 45%)' }}>
                    Based in India • Open to remote work worldwide
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Big CTA */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <a
              href="mailto:ikramshariff2005@gmail.com?subject=Let's%20Collaborate"
              className="btn-primary !text-lg !py-4 !px-10"
            >
              <Mail className="w-5 h-5" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
