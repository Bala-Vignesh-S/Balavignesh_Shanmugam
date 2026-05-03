import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface TechStackItem {
  icon: React.ComponentType<{ className?: string; size?: number; color?: string }>;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: TechStackItem[];
  index: number;
}

export function ProjectCard({ title, description, image, link, github, techStack, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="glass-card overflow-hidden transition-all duration-300 group-hover:border-[var(--accent-cyan)]/20 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
        {/* Project Number Badge */}
        <div className="absolute top-3 left-3 z-10 w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center">
          <span className="text-xs font-bold text-[var(--accent-cyan)]">{String(index + 1).padStart(2, '0')}</span>
        </div>

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/600x400/0a0a1a/00d4ff?text=Project";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
          
          {/* Overlay links */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[var(--accent-cyan)]/20 backdrop-blur-sm border border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/30 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 hover:bg-white/20 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 6).map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-[var(--text-secondary)]"
              >
                <tech.icon size={12} color={tech.color} />
                {tech.name}
              </span>
            ))}
            {techStack.length > 6 && (
              <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-[var(--text-muted)]">
                +{techStack.length - 6}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
