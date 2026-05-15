import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, ChevronRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'GenAI RAG Chatbot',
    subtitle: 'Enterprise AI Platform',
    description:
      'Enterprise-grade AI chatbot with Retrieval-Augmented Generation (RAG) using Llama 3.3-70B via Groq API. Built FastAPI backend with JWT and Google OAuth authentication, role-based access control, and complete RAG pipeline supporting PDF, DOCX, TXT, and Markdown documents.',
    highlights: [
      'Sub-200ms response time',
      'Pinecone vector DB with HuggingFace embeddings',
      'JWT + Google OAuth authentication',
      'Multi-format document processing',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Llama 3.3', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/miashraf1818/-genai-rag-chatbot',
    color: 'hsl(262, 83%, 68%)',
    accent: 'hsla(262, 83%, 68%, 0.12)',
  },
  {
    title: 'Anti-Ragging System',
    subtitle: 'Complaint Management Platform',
    description:
      'Comprehensive complaint management system with Django backend and React frontend. Implemented 4 distinct user roles (Admin, Principal, Squad Members, Students) with granular permissions and real-time updates.',
    highlights: [
      '4 distinct user roles with RBAC',
      'Real-time email notifications',
      'File uploads & evidence tracking',
      'Mobile-first responsive design',
    ],
    tech: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'JWT', 'Google OAuth', 'Tailwind CSS'],
    github: 'https://github.com/miashraf1818/antiragging-backend',
    color: 'hsl(191, 95%, 62%)',
    accent: 'hsla(191, 95%, 62%, 0.12)',
  },
  {
    title: 'AI Chatbot App',
    subtitle: 'Intelligent Conversational AI',
    description:
      'Full-stack AI chatbot integrating Google Gemini API for intelligent conversations. Features persistent chat history, admin dashboard with conversation analytics, and complete DevOps configuration.',
    highlights: [
      'Google Gemini API integration',
      'Persistent chat history in PostgreSQL',
      'Admin analytics dashboard',
      'Production-deployed on Render',
    ],
    tech: ['Python', 'Django', 'DRF', 'React', 'PostgreSQL', 'Gemini API', 'JWT', 'Render'],
    github: 'https://github.com/miashraf1818/ai-chatbot-advanced',
    color: 'hsl(330, 85%, 60%)',
    accent: 'hsla(330, 85%, 60%, 0.12)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-divider mb-24" />

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
              Featured Work
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'hsl(220, 20%, 93%)' }}
            variants={itemVariants}
          >
            Projects I've{' '}
            <span className="glow-text">shipped</span>
          </motion.h2>

          <motion.p
            className="text-lg mb-16 max-w-2xl"
            style={{ color: 'hsl(220, 10%, 55%)' }}
            variants={itemVariants}
          >
            Production-ready applications showcasing full-stack development, AI integration, and scalable architecture.
          </motion.p>

          {/* Project cards */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {projects.map((project, index) => (
              <Tilt 
                key={index} 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                perspective={1000} 
                scale={1.02} 
                transitionSpeed={1000} 
                glareEnable={true} 
                glareMaxOpacity={0.1} 
                glareColor={project.color} 
                glarePosition="all"
                className="rounded-2xl"
              >
                <motion.div
                  className="glass-card overflow-hidden group h-full"
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                {/* Top accent line */}
                <div
                  className="h-[2px] w-full transition-all duration-500"
                  style={{
                    background: hoveredProject === index
                      ? `linear-gradient(90deg, ${project.color}, transparent)`
                      : 'transparent',
                  }}
                />

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    {/* Left: Info */}
                    <div className="flex-1 space-y-4">
                      {/* Project number + subtitle */}
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                          style={{ background: project.accent, color: project.color }}
                        >
                          0{index + 1}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: project.color }}
                        >
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl md:text-3xl font-bold transition-colors duration-300"
                        style={{
                          color: hoveredProject === index ? project.color : 'hsl(220, 20%, 93%)',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: 'hsl(220, 10%, 55%)' }}
                      >
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {project.highlights.map((hl, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                            style={{ color: 'hsl(220, 10%, 65%)' }}
                          >
                            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: project.color }} />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="skill-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex lg:flex-col items-center gap-3 lg:pt-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline !py-2.5 !px-5 !text-sm group/btn"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
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

export default Projects;
