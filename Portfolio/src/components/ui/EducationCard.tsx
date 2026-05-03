import React from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
  logo: string;
  index: number;
  isLast?: boolean;
  showConnector?: boolean;
}

export function EducationCard({ degree, institution, period, score, logo, index, isLast, showConnector }: EducationCardProps) {
  return (
    <div className="glass-card-hover p-5 sm:p-6">
      <div className="flex items-start gap-4 mb-3">
        <img
          src={logo}
          alt={institution}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover bg-white/5 border border-white/10 flex-shrink-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-100">{degree}</h3>
          <p className="text-sm text-[var(--accent-cyan)]">{institution}</p>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-xs text-[var(--text-muted)]">{period}</p>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]">
              {score}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
