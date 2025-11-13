import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code2 } from 'lucide-react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-card/30 relative overflow-hidden"
    >
      {/* Subtle code-themed background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl font-mono text-primary">{'{'}</div>
        <div className="absolute top-32 right-20 text-6xl font-mono text-primary">{'}'}</div>
        <div className="absolute bottom-20 left-1/4 text-5xl font-mono text-primary">{'<'}</div>
        <div className="absolute bottom-32 right-1/3 text-5xl font-mono text-primary">{'/>'}</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Code2 className="w-32 h-32 text-primary" />
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {["About", "Me"].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </h2>
          </div>
          <div className="space-y-8 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              {["A", "Python", "Developer", "with", "hands-on", "experience", "in", "full-stack", "web", "development,", "Generative", "AI", "(GenAI),", "and", "Large", "Language", "Model", "(LLM)", "integration.", "Proficient", "in", "Python,", "Django,", "FastAPI,", "and", "React,", "with", "expertise", "in", "building", "and", "deploying", "AI-powered,", "production-ready", "applications."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
            <p className="leading-relaxed">
              {["Strong", "foundation", "in", "backend", "architecture,", "RESTful", "API", "design,", "and", "Retrieval-Augmented", "Generation", "(RAG)", "pipelines", "leveraging", "LangChain,", "Pinecone,", "and", "HuggingFace.", "Skilled", "in", "containerization", "(Docker),", "production", "debugging", "(CORS,", "502,", "database", "pooling),", "and", "cloud", "deployment", "on", "Render", "and", "AWS."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
            <p className="leading-relaxed">
              {["Has", "delivered", "3", "production", "applications", "with", "proven", "reliability", "and", "scalability.", "Seeking", "Python", "Developer", "/", "AI", "Engineer", "roles", "to", "build", "cutting-edge,", "intelligent", "systems", "that", "merge", "software", "engineering", "with", "advanced", "AI", "technologies."].map((word, index) => (
                <React.Fragment key={index}>
                  {index > 0 && ' '}
                  <span className="hover:text-foreground hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] hover:scale-105 transition-all duration-300 cursor-default inline-block">
                    {word}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-8 justify-center items-center">
            <Badge 
              variant="secondary" 
              className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
            >
              Full-Stack Development
            </Badge>
            <Badge 
              variant="secondary" 
              className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
            >
              Python Backend Development
            </Badge>
            <Badge 
              variant="secondary" 
              className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
            >
              AI/ML Integration
            </Badge>
            <Badge 
              variant="secondary" 
              className="hover:scale-125 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 ease-out cursor-default hover:z-10 relative"
            >
              Cloud Deployment & DevOps
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
