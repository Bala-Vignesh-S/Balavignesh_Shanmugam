import React from "react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

export function CertificationCard({ title, issuer, date, image, link }: CertificationCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block glass-card-hover overflow-hidden group"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-100 line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-[var(--accent-cyan)]">{issuer}</p>
        <p className="text-xs text-[var(--text-muted)] mt-1">{date}</p>
      </div>
    </a>
  );
}
