import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Brain, Server, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: '3+ Production Apps',
    color: 'hsl(262, 83%, 68%)',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    label: 'GenAI & LLM Expert',
    color: 'hsl(191, 95%, 62%)',
  },
  {
    icon: <Server className="w-5 h-5" />,
    label: 'Full-Stack Dev',
    color: 'hsl(330, 85%, 60%)',
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    label: 'Cloud & DevOps',
    color: 'hsl(142, 76%, 50%)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section label */}
          <motion.div className="flex items-center gap-3 mb-6" variants={itemVariants}>
            <div className="w-12 h-[1px]" style={{ background: 'hsl(262, 83%, 68%)' }} />
            <span className="text-sm font-mono font-medium tracking-wider uppercase" style={{ color: 'hsl(262, 83%, 75%)' }}>
              About Me
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8"
            style={{ color: 'hsl(220, 20%, 93%)' }}
            variants={itemVariants}
          >
            A developer who turns{' '}
            <span className="glow-text">complex ideas</span>
            {' '}into elegant, AI-powered solutions.
          </motion.h2>

          {/* Description paragraphs */}
          <motion.div className="space-y-6 mb-12" variants={itemVariants}>
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(220, 10%, 55%)' }}>
              I'm a Python Developer with hands-on experience in full-stack web development, 
              Generative AI (GenAI), and Large Language Model (LLM) integration. Proficient in 
              Python, Django, FastAPI, and React, with expertise in building and deploying 
              AI-powered, production-ready applications.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(220, 10%, 55%)' }}>
              Strong foundation in backend architecture, RESTful API design, and Retrieval-Augmented 
              Generation (RAG) pipelines leveraging LangChain, Pinecone, and HuggingFace. Skilled in 
              containerization (Docker), production debugging, and cloud deployment on Render and AWS.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'hsl(220, 10%, 55%)' }}>
              Has delivered{' '}
              <span className="font-semibold" style={{ color: 'hsl(262, 83%, 75%)' }}>3 production applications</span>
              {' '}with proven reliability and scalability. Seeking Python Developer / AI Engineer 
              roles to build cutting-edge, intelligent systems that merge software engineering 
              with advanced AI technologies.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-5 flex flex-col items-center text-center gap-3"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'hsl(220, 20%, 85%)' }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
