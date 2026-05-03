
import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
}

export function ExperienceCard({ title, company, period, description, skills, logo }: ExperienceCardProps) {
  return (
    <div className="glass-card-hover p-5 sm:p-6">
      <div className="flex items-start gap-4 mb-3">
        {logo && (
          <img
            src={logo}
            alt={company}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-white/5 border border-white/10 flex-shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-100">{title}</h3>
          <p className="text-sm text-[var(--accent-cyan)]">{company}</p>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">{period}</p>
        </div>
      </div>
      <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[11px] rounded-full bg-[var(--accent-cyan)]/5 border border-[var(--accent-cyan)]/15 text-[var(--accent-cyan)]/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
