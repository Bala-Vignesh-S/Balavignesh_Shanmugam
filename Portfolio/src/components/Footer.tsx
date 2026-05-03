import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#github', label: 'GitHub' },
    { href: '#leetcode', label: 'Leetcode' },
    { href: '#badges', label: 'Badges' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[var(--bg-primary)] border-t border-white/5">
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex flex-col items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>{label}</FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-[var(--text-muted)] text-center">
            <p>© {currentYear} Balavignesh Shanmugam. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2 mt-1">
              Built with <FaReact className="w-5 h-5 text-[var(--accent-cyan)] animate-spin" style={{ animationDuration: '3s' }} /> using
              <SiVite className="w-5 h-5 text-purple-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
