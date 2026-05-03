import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Music, Music2 } from 'lucide-react';
import { Link } from './Link';
import { motion, AnimatePresence } from 'framer-motion';

const BG_SONG_SRC = '/assets/bg-song.mp3';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInitialPopup(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(BG_SONG_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    setShowInitialPopup(false);
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
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
  ];

  return (
    <>
      <nav
        className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl transition-all duration-300
                    ${isScrolled ? 'glass-nav shadow-lg shadow-black/20' : 'bg-transparent'}`}
      >
        <div className="flex items-center justify-between h-12 px-4">
          {/* Logo â€” click to toggle music */}
          <div
            className="relative cursor-pointer select-none inline-flex items-center w-fit"
            onClick={toggleMusic}
            onMouseEnter={() => setShowHint(true)}
            onMouseLeave={() => setShowHint(false)}
            title={isPlaying ? 'Pause music' : 'Play background music'}
          >
            {/* Pulse rings when playing */}
            {isPlaying && (
              <>
                <span className="absolute inset-0 rounded-full animate-ping bg-[var(--accent-cyan)]/30 scale-150" />
                <span className="absolute inset-0 rounded-full animate-ping bg-[var(--accent-cyan)]/15 scale-[2] animation-delay-150" />
              </>
            )}
            <img
              src="/assets/favicon.png"
              alt="Logo"
              className={`h-8 w-auto relative z-10 transition-all duration-300 ${isPlaying ? 'drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]' : ''}`}
            />

            {/* Music note badge */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute -top-1.5 -right-1.5 z-20 bg-[var(--accent-cyan)] rounded-full p-0.5"
                >
                  <Music className="h-2.5 w-2.5 text-[#000000]" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover tooltip & Initial Popup */}
            <AnimatePresence>
              {(showHint || showInitialPopup) && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-[44px] -left-2 whitespace-nowrap rounded-lg bg-[var(--accent-cyan)] px-3 py-1.5 text-[12px] font-medium text-[#000000] shadow-lg pointer-events-none z-30"
                >
                  <div className="absolute -top-1 left-5 w-2 h-2 bg-[var(--accent-cyan)] transform rotate-45" />
                  <div className="relative z-10">
                    {showInitialPopup && !showHint ? (
                      <span className="flex items-center gap-1.5"><Music className="h-3.5 w-3.5 animate-bounce" /> Tap to play music</span>
                    ) : isPlaying ? (
                      <span className="flex items-center gap-1.5"><Music2 className="h-3.5 w-3.5" /> Pause music</span>
                    ) : (
                      <span className="flex items-center gap-1.5"><Music className="h-3.5 w-3.5" /> Play music</span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-5 items-center relative">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--accent-cyan)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  />
                )}
              </Link>
            ))}

            <Link
              href="#contact"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg gradient-btn text-sm"
            >
              Request a Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-gray-200" /> : <Menu className="w-5 h-5 text-gray-200" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden glass-nav rounded-b-xl shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm text-center text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--accent-cyan)] transition-colors"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg gradient-btn text-sm"
                onClick={() => setIsOpen(false)}
              >
                Request a Project
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
