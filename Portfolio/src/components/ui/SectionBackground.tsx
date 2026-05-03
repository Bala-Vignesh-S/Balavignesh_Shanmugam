import React from "react";

interface SectionBackgroundProps {
  children: React.ReactNode;
}

export function SectionBackground({ children }: SectionBackgroundProps) {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 bg-[#000000]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      {/* Section divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}