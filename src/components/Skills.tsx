import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Layout,
  Cloud,
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const skillCategories = [
  {
    title: 'Programming & Frameworks',
    icon: <Code2 className="w-5 h-5" />,
    color: 'hsl(262, 83%, 68%)',
    accent: 'hsla(262, 83%, 68%, 0.12)',
    skills: ['Python', 'JavaScript', 'Django', 'FastAPI', 'Flask', 'React', 'DRF', 'SQLAlchemy', 'Async/Await'],
  },
  {
    title: 'AI/ML Technologies',
    icon: <Brain className="w-5 h-5" />,
    color: 'hsl(191, 95%, 62%)',
    accent: 'hsla(191, 95%, 62%, 0.12)',
    skills: ['LangChain', 'Llama 3.3', 'Gemini API', 'RAG Architecture', 'Pinecone', 'HuggingFace', 'Groq API', 'Embeddings', 'Semantic Search'],
  },
  {
    title: 'Frontend & Database',
    icon: <Layout className="w-5 h-5" />,
    color: 'hsl(330, 85%, 60%)',
    accent: 'hsla(330, 85%, 60%, 0.12)',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap', 'PostgreSQL', 'MySQL', 'SQLite', 'Responsive Design'],
  },
  {
    title: 'DevOps & Deployment',
    icon: <Cloud className="w-5 h-5" />,
    color: 'hsl(142, 76%, 50%)',
    accent: 'hsla(142, 76%, 50%, 0.12)',
    skills: ['Docker', 'Render', 'AWS EC2', 'Vercel', 'CI/CD', 'Git', 'GitHub', 'Postman', 'Production Debugging'],
  },
];

// Infinite marquee of tech names
const marqueeItems = [
  'Python', '•', 'Django', '•', 'FastAPI', '•', 'React', '•', 'LangChain', '•',
  'Pinecone', '•', 'Docker', '•', 'PostgreSQL', '•', 'AWS', '•', 'GenAI', '•',
  'LLMs', '•', 'RAG', '•', 'HuggingFace', '•', 'REST APIs', '•', 'TypeScript', '•',
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

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-divider mb-24" />

      {/* Marquee strip */}
      <div className="overflow-hidden mb-20 py-6 border-y" style={{ borderColor: 'hsla(250, 15%, 15%, 0.5)' }}>
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`text-2xl md:text-3xl font-bold tracking-tight flex-shrink-0 ${
                item === '•' ? 'text-[hsl(262,83%,68%)] text-base' : ''
              }`}
              style={{
                color: item === '•' ? 'hsl(262, 83%, 68%)' : 'hsla(220, 10%, 35%, 0.6)',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section header */}
          <motion.div className="flex items-center gap-3 mb-6" variants={itemVariants}>
            <div className="w-12 h-[1px]" style={{ background: 'hsl(262, 83%, 68%)' }} />
            <span className="text-sm font-mono font-medium tracking-wider uppercase" style={{ color: 'hsl(262, 83%, 75%)' }}>
              Tech Arsenal
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'hsl(220, 20%, 93%)' }}
            variants={itemVariants}
          >
            Skills &{' '}
            <span className="glow-text">Technologies</span>
          </motion.h2>

          <motion.p
            className="text-lg mb-16 max-w-2xl"
            style={{ color: 'hsl(220, 10%, 55%)' }}
            variants={itemVariants}
          >
            My technical toolkit for building modern, scalable, and intelligent applications.
          </motion.p>

          {/* Bento grid */}
          <motion.div className="bento-grid" variants={containerVariants}>
            {skillCategories.map((category, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1000}
                transitionSpeed={1000}
                scale={1.01}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glareColor={category.color}
                glarePosition="all"
                className="rounded-2xl"
              >
                <motion.div
                  className="glass-card p-6 md:p-8 flex flex-col group h-full"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: category.accent, color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: 'hsl(220, 20%, 93%)' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 + index * 0.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
