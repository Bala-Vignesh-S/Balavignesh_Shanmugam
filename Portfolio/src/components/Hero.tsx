import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const roles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Blockchain Developer",
    "Python Developer",
    "Problem Solver",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-cyan)]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-purple)]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-blue)]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 order-2 md:order-1">
            <div className="space-y-2">
              <div className="inline-block bg-[var(--accent-cyan)]/10 backdrop-blur-sm text-[var(--accent-cyan)] text-sm font-medium px-4 py-2 rounded-full border border-[var(--accent-cyan)]/20">
                Hey! <span className="inline-block origin-[70%_70%] animate-wave">ðŸ‘‹</span> I'm
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold gradient-text-glow flex items-center justify-center gap-2">
                Balavignesh Shanmugam
                <img 
                  src="/assets/verified-badge.png" 
                  alt="Verified Badge" 
                  className="w-7 h-7 lg:w-9 lg:h-9"
                />
              </h1>
              <div className="text-xl md:text-2xl text-[var(--text-secondary)]">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <ContactInfo />
            <ActionButtons />
            <SocialLinks />
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative order-1 md:order-2">
            {/* Floating glow elements */}
            <div className="absolute w-20 h-20 bg-[var(--accent-cyan)]/20 top-0 left-0 rounded-full blur-xl animate-floating" />
            <div className="absolute w-20 h-20 bg-[var(--accent-purple)]/20 bottom-0 right-0 rounded-full blur-xl animate-floating delay-150" />
            <div className="absolute w-16 h-16 bg-green-400/15 top-4 right-4 rounded-full blur-xl animate-floating delay-300" />
            <div className="absolute w-16 h-16 bg-amber-400/15 bottom-4 left-4 rounded-full blur-xl animate-floating delay-500" />

            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/10 to-[var(--accent-purple)]/10 rounded-full blur-3xl animate-pulse" />
            <img
              src={isHovering ? '/assets/profilegif.gif' : '/assets/pp.png'}
              alt="M Dinesh"
              className="relative w-full max-w-lg mx-auto rounded-full shadow-2xl shadow-[var(--accent-cyan)]/10 transform hover:scale-105 transition-transform duration-500 ring-2 ring-[var(--accent-cyan)]/20"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="p-2"
          >
            <ArrowDown className="w-6 h-6 text-[var(--accent-cyan)]/60" />
          </Link>
        </div>
      </div>
    </section>
  );
}