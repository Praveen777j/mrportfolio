import React, { useState, useEffect } from 'react';
import {
  HERO_CONTENT,
  ABOUT_CONTENT,
  EDUCATION_CONTENT,
  EXPERIENCE_CONTENT,
  CERTIFICATIONS_CONTENT,
  PORTFOLIO_ITEMS,
  WORK_CATEGORIES,
  SKILLS_CONTENT,
  CREATIVE_TOOLS_CONTENT,
  AI_WORKFLOW_CONTENT,
  CONTACT_CONTENT
} from './content';

import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  X,
  Menu,
  Sparkles,
  Instagram,
  Linkedin,
  MessageCircle,
  TrendingUp,
  Video,
  Camera,
  Wrench,
  Award,
  CheckCircle2,
  Layers,
  Palette
} from 'lucide-react';

// Helper to normalize image paths
const getImagePath = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('/')) return path;
  return `/${path}`;
};

// Helper to render text with clear, breathable gaps after each sentence
const renderClearSentences = (text: string, pClassName = "text-[#CAD0E6]") => {
  if (!text) return null;
  const sentences = text
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (sentences.length <= 1) {
    return <p className={`leading-relaxed ${pClassName}`}>{text}</p>;
  }

  return (
    <div className="space-y-3">
      {sentences.map((sentence, idx) => (
        <p key={idx} className={`leading-relaxed ${pClassName}`}>
          {sentence}
        </p>
      ))}
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePedestalTool, setActivePedestalTool] = useState<string>('tool-capcut');

  // Filtered portfolio list
  const filteredPortfolio = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Lock body scroll when Mobile Menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Helper to resolve icon components safely
  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case 'Video':
        return <Video className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Camera':
        return <Camera className={className} />;
      case 'Wrench':
        return <Wrench className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  // AI Tool SVG Logos
  const ChatGptIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.5-2.9 6.07 6.07 0 0 0-4.28 2.17 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9 5.98 5.98 0 0 0 3.99 2.01 6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.74-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76c.24-.14.39-.4.39-.68v-6.74l2.02 1.17c.02.01.04.03.04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76c.24.14.54.14.78 0l5.84-3.37v2.33c0 .03-.01.05-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.48 4.48 0 0 1 2.37-1.97v5.67c0 .28.15.54.39.68l5.81 3.35-2.02 1.17c-.02 0-.05 0-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.85L13.1 8.36l2.02-1.16c.02 0 .05 0 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.67zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.67zm-12.64 4.14l-2.02-1.17a.08.08 0 0 1-.04-.05V6.07a4.5 4.5 0 0 1 7.38-3.46l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68zm1.1-2.37l2.6-1.5 2.61 1.5v3l-2.61 1.5-2.6-1.5z"/>
    </svg>
  );

  const ClaudeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.82 2.5a1.2 1.2 0 0 0-1.12.78l-1.9 5.08-4.9-2.37a1.2 1.2 0 0 0-1.63.53 1.2 1.2 0 0 0 .53 1.63l4.9 2.37-4.13 3.52a1.2 1.2 0 0 0 .15 1.71 1.2 1.2 0 0 0 1.71-.15l4.13-3.52.48 5.43a1.2 1.2 0 0 0 1.2 1.09 1.2 1.2 0 0 0 1.2-1.09l.48-5.43 4.13 3.52a1.2 1.2 0 0 0 1.71.15 1.2 1.2 0 0 0 .15-1.71l-4.13-3.52 4.9-2.37a1.2 1.2 0 0 0 .53-1.63 1.2 1.2 0 0 0-1.63-.53l-4.9 2.37-1.9-5.08a1.2 1.2 0 0 0-1.12-.78z"/>
    </svg>
  );

  const GeminiIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24C12 17.373 6.627 12 0 12c6.627 0 12-5.373 12-12 0 6.627 5.373 12 12 12-6.627 0-12 5.373-12 12z"/>
    </svg>
  );

  const MidjourneyIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.6 2.4c-2.4 2.8-5.7 7.2-6.6 8.7-1.3 2.1-1.6 3.5-1.1 4.5.6 1.3 2.1 1.8 3.8 1.2 1.9-.7 4.2-2.8 5.5-4.8 1.4-2.1 2.2-4.6 2.1-6.1-.1-1.6-1.3-3.1-3.7-3.5zm-5.4 12.3c-.8-.2-1.5-.7-1.7-1.3-.3-.7 0-1.7.9-3.2 1-1.6 3.5-4.9 5.4-7.2 1.5.5 2.2 1.4 2.2 2.3 0 1.1-.7 3.1-1.9 4.9-1.3 1.9-3.2 3.8-4.9 4.5zM3.5 17.2c2.1 1.8 5.7 2.8 9.5 2.5 3.8-.3 7-1.9 8.5-4 .4-.6.6-1.2.6-1.7 0-.7-.4-1.3-1.1-1.7-.5-.3-1.2-.4-1.9-.3-1.2.2-2.5.8-3.7 1.6-1.5 1-2.9 2.3-4.3 2.4-1.3.1-2.7-.9-3.9-1.9-.9-.7-1.8-1.5-2.7-1.8-.6-.2-1.2-.1-1.6.2-.5.4-.8 1-.7 1.7.1.6.4 1.1.9 1.5l.7.5z"/>
    </svg>
  );

  const PhotoshopAiIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2.5 4.5v9h2.3v-3.3h1.8c2.2 0 3.7-1.2 3.7-2.9 0-1.8-1.5-2.8-3.7-2.8H5.5zm2.3 1.8h1.6c1.1 0 1.7.5 1.7 1.1 0 .6-.6 1.1-1.7 1.1H7.8V9.3zm8.3 2.8c-1.5 0-2.3.8-2.3 1.9 0 1.2.8 1.7 2.1 2 1.1.2 1.5.5 1.5 1 0 .6-.6 1-1.5 1-1 0-1.7-.4-2-1.2l-1.5.9c.5 1.4 1.8 2.1 3.5 2.1 2 0 3.4-.9 3.4-2.5 0-1.3-.9-1.9-2.3-2.2-1-.2-1.4-.4-1.4-.8 0-.5.5-.8 1.2-.8.8 0 1.4.3 1.7.9l1.4-.9c-.6-1.1-1.7-1.4-2.8-1.4z"/>
    </svg>
  );

  // Creative Tools Logos (CapCut, Canva, Pinterest)
  const CapCutIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6.5C4 5.12 5.12 4 6.5 4h3.2L12 8.5 14.3 4h3.2C18.88 4 20 5.12 20 6.5v2.2L12 14.5 4 8.7V6.5zm0 11C4 18.88 5.12 20 6.5 20h3.2L12 15.5 14.3 20h3.2c1.38 0 2.5-1.12 2.5-2.5v-2.2L12 9.5 4 15.3v2.2z"/>
    </svg>
  );

  const CanvaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.85 14.6c-.95.42-2.02.6-3.15.6-3.6 0-5.7-2.4-5.7-5.9 0-3.7 2.4-6.3 6.1-6.3 1.3 0 2.3.3 2.9.7l-.8 1.9c-.5-.3-1.2-.5-2.1-.5-2.4 0-3.9 1.7-3.9 4.1 0 2.3 1.3 3.9 3.7 3.9.7 0 1.4-.1 1.9-.4l.95 1.9z"/>
    </svg>
  );

  const PinterestIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.2 9.42 7.7 11.1-.11-.94-.21-2.39.04-3.42.23-.98 1.49-6.32 1.49-6.32s-.38-.76-.38-1.88c0-1.76 1.02-3.08 2.29-3.08 1.08 0 1.6.81 1.6 1.78 0 1.09-.69 2.71-1.05 4.22-.3 1.26.63 2.29 1.88 2.29 2.25 0 3.98-2.38 3.98-5.81 0-3.04-2.18-5.16-5.3-5.16-3.61 0-5.73 2.71-5.73 5.5 0 1.09.42 2.26.94 2.89.1.13.12.24.09.37-.1.41-.32 1.28-.36 1.46-.06.24-.19.29-.44.17-1.63-.76-2.65-3.14-2.65-5.06 0-4.12 3-7.9 8.64-7.9 4.54 0 8.06 3.24 8.06 7.56 0 4.51-2.84 8.14-6.79 8.14-1.33 0-2.57-.69-3-.15l-.81 3.1c-.29 1.13-1.09 2.54-1.62 3.42 1.27.39 2.62.61 4.02.61 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
    </svg>
  );

  const renderAiIcon = (name: string, className = "w-4 h-4") => {
    switch (name) {
      case 'ChatGPT':
        return <ChatGptIcon className={className} />;
      case 'Claude':
        return <ClaudeIcon className={className} />;
      case 'Gemini':
        return <GeminiIcon className={className} />;
      case 'Midjourney':
        return <MidjourneyIcon className={className} />;
      case 'Photoshop AI':
        return <PhotoshopAiIcon className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const renderToolBrandIcon = (toolId: string, className = "w-5 h-5") => {
    switch (toolId) {
      case 'tool-capcut':
        return <CapCutIcon className={className} />;
      case 'tool-canva':
        return <CanvaIcon className={className} />;
      case 'tool-pinterest':
        return <PinterestIcon className={className} />;
      case 'tool-photoshop':
        return <PhotoshopAiIcon className={className} />;
      case 'tool-meta':
        return <Instagram className={className} />;
      case 'tool-ai':
        return <ChatGptIcon className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08090E] text-[#F0F2FA] selection:bg-[#00F0FF] selection:text-[#08090E]">
      {/* ==========================================================================
           STICKY NAVBAR (3D Dark Glass Background, Anchor Links & Glowing Resume Button)
           ========================================================================== */}
      <header className="sticky top-0 z-40 bg-[#08090E]/90 backdrop-blur-md border-b border-white/10 w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-6">
          {/* Brand Wordmark with 3D Avatar */}
          <a
            href="#hero"
            className="flex items-center gap-3 font-display text-lg sm:text-xl font-bold text-white shrink-0 group"
          >
            <div className="relative w-9 h-9 rounded-[var(--radius)] overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(0,240,255,0.3)] bg-[#14151B] transition-transform group-hover:scale-105">
              <img
                src="/images/poonam-3d-avatar.jpg"
                alt="Poonam MR"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00F0FF] border-2 border-[#08090E] shadow-[0_0_8px_#00F0FF]" />
            </div>
            <span className="group-hover:text-[#00F0FF] transition-colors">Poonam MR</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#9BA1BA]">
            <a href="#about" className="hover:text-[#00F0FF] transition-colors">About</a>
            <a href="#education" className="hover:text-[#00F0FF] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#00F0FF] transition-colors">Experience</a>
            <a href="#work" className="hover:text-[#00F0FF] transition-colors">Work</a>
            <a href="#skills" className="hover:text-[#00F0FF] transition-colors">Skills & Tools</a>
            <a href="#contact" className="hover:text-[#00F0FF] transition-colors">Contact</a>
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={CONTACT_CONTENT.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={CONTACT_CONTENT.resumeFileName}
              className="btn-primary py-2.5 px-5 text-sm"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-[var(--radius)] bg-white/10 border border-white/15 flex items-center justify-center text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[76px] inset-x-0 bg-[#0D101C]/98 backdrop-blur-xl border-b border-white/15 p-6 z-50 shadow-2xl">
            <nav className="flex flex-col gap-3 text-lg font-bold text-white mb-6">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">About</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">Education</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">Experience</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">Work</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">Skills & Tools</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/10 hover:text-[#00F0FF]">Contact</a>
            </nav>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT_CONTENT.resumeUrl}
                download={CONTACT_CONTENT.resumeFileName}
                className="btn-primary text-center justify-center"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-secondary text-center justify-center">
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="w-full">
        {/* ==========================================================================
             1. HERO SECTION (3D Theme Inspired by Reference)
             ========================================================================== */}
        <section id="hero" className="relative bg-[#0B0C10] text-white overflow-hidden border-b border-white/10 section-padding !pt-12 !pb-20 sm:!pt-16 sm:!pb-24">
          {/* Subtle Ambient Backlight and Lighting Waves */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#6C4CF1]/20 via-[#FF5C39]/20 to-transparent rounded-full blur-[110px] opacity-80" />
            <div className="absolute -bottom-10 inset-x-0 h-32 bg-gradient-to-t from-[#0B0C10] to-transparent z-10" />
          </div>

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Top Status Badge */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[var(--radius)] bg-white/10 text-white border border-white/15 text-xs font-bold tracking-wide backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D9F76B] animate-pulse" />
                <span>{HERO_CONTENT.statusBadgeText}</span>
                <span className="text-white/40">·</span>
                <span className="text-[#D9F76B]">{HERO_CONTENT.statusLocation}</span>
              </span>
            </div>

            {/* Monumental 3D Style Headline: HI, I'M POONAM MR */}
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="hero-3d-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#F0F2FA] to-[#989CAF] select-none">
                HI, I'M POONAM MR
              </h1>
            </div>

            {/* Central 3D Avatar Head */}
            <div className="flex justify-center items-center my-4 sm:my-8 relative">
              {/* Backlight halo */}
              <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-b from-[#FF5C39]/35 to-[#6C4CF1]/35 blur-2xl pointer-events-none" />

              <div className="relative group cursor-pointer animate-float">
                <div className="w-52 h-52 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(108,76,241,0.4)] transition-transform duration-500 group-hover:scale-105 group-hover:border-[#FF5C39] bg-[#14151B]">
                  <img
                    src="/images/poonam-3d-avatar.jpg"
                    alt="Poonam MR 3D Avatar"
                    className="w-full h-full object-cover vibrant-img"
                    loading="eager"
                  />
                </div>
                
                {/* 3D Character badge */}
                <div className="absolute -bottom-2 right-4 sm:right-6 px-3.5 py-1.5 rounded-[var(--radius)] bg-[#1B1B1F]/90 text-white border border-white/20 text-xs font-bold flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                  <span className="text-[#D9F76B]">✨</span>
                  <span>Content Creator</span>
                </div>
              </div>
            </div>

            {/* Bottom Meta & Action Bar (Matching screenshot bottom layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8 sm:mt-12 pt-8 border-t border-white/10">
              {/* Left Column: Creator Statement */}
              <div className="md:col-span-7 flex flex-col gap-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5C39]">
                  Digital Media Marketing Intern & Content Creator
                </span>
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                  I turn ideas into content people{' '}
                  <span className="underline-coral text-[#FF5C39]">
                    actually engage
                  </span>{' '}
                  with.
                </p>
                <p className="text-sm sm:text-base text-[#A8ABB9] max-w-xl mt-1">
                  BBA student & creator in Bangalore specializing in short-form reels, social campaigns, brand storytelling, and high-retention visual assets.
                </p>
              </div>

              {/* Right Column: CTA Buttons with Glowing Contact Me Pill */}
              <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-3.5">
                <a
                  href="#contact"
                  className="btn-glow-pill"
                >
                  <Sparkles size={16} />
                  <span>CONTACT ME</span>
                </a>

                <a
                  href="#work"
                  className="px-5 py-3 rounded-[var(--radius)] bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 transition-all flex items-center gap-2"
                >
                  <span>SEE MY WORK</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={CONTACT_CONTENT.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={CONTACT_CONTENT.resumeFileName}
                  className="px-5 py-3 rounded-[var(--radius)] bg-white text-[#1B1B1F] hover:bg-[#F2F2F6] text-sm font-bold border border-white transition-all flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>RESUME</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
             2. ABOUT SECTION (3D Dark Surface #0E1220, Spacious Layout)
             ========================================================================== */}
        <section id="about" className="section-white section-padding border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-grid-cyber opacity-35" />
          
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* Section Label */}
            <div className="section-badge-coral">
              <span>{ABOUT_CONTENT.sectionLabel}</span>
            </div>

            {/* Heading with Thick Lime Underline */}
            <h2 className="heading-fluid text-white mb-10 max-w-3xl">
              {ABOUT_CONTENT.headingLead}
              <span className="underline-lime text-white">
                {ABOUT_CONTENT.headingKeyWord}
              </span>
            </h2>

            {/* Bento Layout: Main Bio + 3 Small Highlight Tiles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Bio Narrative Card (7 Cols) */}
              <div className="lg:col-span-7 bento-card-light flex flex-col justify-between p-7 sm:p-9 md:p-10">
                <div>
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.4)] bg-[#14151B] shrink-0">
                      <img
                        src="/images/poonam-3d-avatar.jpg"
                        alt="Poonam MR"
                        className="w-full h-full object-cover vibrant-img"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                        Poonam MR
                      </h3>
                      <p className="text-xs font-extrabold text-[#FF5C39] uppercase tracking-wider mt-0.5">
                        Digital Media Marketing Intern & Content Creator
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-snug mb-6 max-w-xl" style={{ textWrap: 'balance' }}>
                    Fresher marketer & visual content creator based in Bangalore.
                  </h3>

                  <div className="flex flex-col gap-6 text-base sm:text-lg text-[#CAD0E6] max-w-2xl">
                    {ABOUT_CONTENT.bioParagraphs.map((para, idx) => (
                      <div key={idx} className="p-4 rounded-[var(--radius)] bg-white/[0.03] border border-white/10">
                        {renderClearSentences(para)}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex items-center gap-2 text-sm font-semibold text-[#9BA1BA]">
                  <MapPin size={18} className="text-[#FF5C39]" />
                  <span>{CONTACT_CONTENT.location}</span>
                </div>
              </div>

              {/* 3 Highlight Tiles (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
                {ABOUT_CONTENT.highlightTiles.map((tile, idx) => (
                  <div key={tile.id} className="bento-card-light flex-1 flex items-start gap-5 p-6 sm:p-7">
                    <div className={idx === 0 ? "icon-chip-coral" : idx === 1 ? "icon-chip-violet" : "icon-chip-lime"}>
                      {renderIcon(tile.iconName)}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-2">
                        {tile.title}
                      </h4>
                      <div className="text-sm text-[#CAD0E6]">
                        {renderClearSentences(tile.description)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
             3. EDUCATION SECTION (3D Deep Surface #0B0E18, Spacious Timeline)
             ========================================================================== */}
        <section id="education" className="section-cream section-padding border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-grid-cyber opacity-25" />

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* Section Label */}
            <div className="section-badge-violet">
              <span>02 - EDUCATION</span>
            </div>

            {/* Heading with Thick Coral Underline */}
            <h2 className="heading-fluid text-white mb-4">
              Academic Foundation &{' '}
              <span className="underline-coral text-white">
                Coursework
              </span>
            </h2>
            <p className="text-lg text-[#CAD0E6] max-w-2xl mb-12 leading-relaxed">
              Formal business administration studies and pre-university credentials in Bangalore.
            </p>

            {/* Vertical Timeline with Cards */}
            <div className="timeline-stem flex flex-col gap-8 max-w-3xl">
              {EDUCATION_CONTENT.map((edu) => (
                <div key={edu.id} className="relative">
                  <span className="timeline-bullet-violet" />
                  <div className="bento-card-light p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1 rounded-[var(--radius)]">
                        {edu.years}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#9BA1BA] mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[#CAD0E6] leading-relaxed border-t border-white/10 pt-4">
                      <strong className="text-white">Focus:</strong> {edu.relevantDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================================================
             4. EXPERIENCE & INTERNSHIPS (3D Dark Surface #0E1220, Spacious Timeline)
             ========================================================================== */}
        <section id="experience" className="section-white section-padding border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-grid-cyber opacity-35" />

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* Section Label */}
            <div className="section-badge-coral">
              <span>03 - EXPERIENCE</span>
            </div>

            {/* Heading with Thick Lime Underline */}
            <h2 className="heading-fluid text-white mb-4">
              Hands-On Internship &{' '}
              <span className="underline-lime text-white">
                Studio Roles
              </span>
            </h2>
            <p className="text-lg text-[#CAD0E6] max-w-2xl mb-12 leading-relaxed">
              Direct social media page management, campaign asset design, and video workflows.
            </p>

            {/* Vertical Timeline for Experience */}
            <div className="timeline-stem flex flex-col gap-8 max-w-3xl mb-14">
              {EXPERIENCE_CONTENT.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="timeline-bullet-coral" />
                  <div className="bento-card-light p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5C39] bg-[#FF5C39]/15 border border-[#FF5C39]/30 px-3 py-1 rounded-[var(--radius)]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-[#9BA1BA]">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1.5">
                      {exp.role}
                    </h3>

                    <p className="text-base font-bold text-[#FF5C39] mb-5">
                      {exp.company}
                    </p>

                    <ul className="flex flex-col gap-3 text-sm text-[#CAD0E6] leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#00F0FF] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications and Courses as Small Badge Tiles */}
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-5 flex items-center gap-2.5">
                <Award size={22} className="text-[#00F0FF]" />
                <span>Certifications & Course Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {CERTIFICATIONS_CONTENT.map((cert) => (
                  <div key={cert.id} className="bento-card-light !p-6 flex flex-col justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00F0FF] mb-2">
                      {cert.issuer}
                    </span>
                    <h4 className="font-display text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
             5. WORK / POSTS SECTION (Dark Ink Background #1B1B1F, 1 Post Per Page)
             ========================================================================== */}
        <section id="work" className="section-ink section-padding border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label */}
            <div className="section-badge-lime">
              <span>04 - WORK & CASE STUDIES</span>
            </div>

            {/* Heading with Thick Coral Underline */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h2 className="heading-fluid text-white">
                  Campaigns & Visual{' '}
                  <span className="underline-coral text-white">
                    Creatives
                  </span>
                </h2>
                <p className="text-lg text-[#B2B4C2] mt-3 max-w-2xl">
                  {filteredPortfolio.length} featured works. Scroll down to browse through each project in full detail, or filter by category.
                </p>
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none" role="tablist">
              {WORK_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`work-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Continuous Naturally Scrollable Feed of Truly Floating 3D Projects */}
            <div className="flex flex-col gap-12 sm:gap-16">
              {filteredPortfolio.map((item, idx) => {
                const floatDelay = `${(idx % 4) * 0.85}s`;
                return (
                  <article
                    key={item.id}
                    id={`project-${item.id}`}
                    className="work-single-showcase p-7 sm:p-9 lg:p-11"
                  >
                    {/* Project Top Meta Bar */}
                    <div className="flex items-center justify-between gap-4 pb-5 mb-8 border-b border-white/10 text-xs">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5C39] bg-[#FF5C39]/15 px-3.5 py-1.5 rounded-[var(--radius)] border border-[#FF5C39]/30 shadow-[0_0_12px_rgba(255,92,57,0.2)]">
                        {item.category}
                      </span>

                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9BA1BA]">
                        <span className="text-[#00F0FF]">PROJECT</span> #{String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Main Grid: Left = 3D Floating Photo Stage, Right = Clear Case Study Dossier */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                      
                      {/* Photo Stage (7 Cols): Real 3D Levitation Float with Floor Glow */}
                      <div className="lg:col-span-7 flex flex-col justify-center relative">
                        {/* Ambient Floor Glow beneath, pulsing in sync with float */}
                        <div 
                          className="floating-floor-glow" 
                          style={{ animationDelay: floatDelay }}
                        />

                        {/* Real 3D Floating Stage with Smooth Levitation */}
                        <div 
                          className="floating-3d-stage relative w-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] max-h-[620px] rounded-[var(--radius)] overflow-hidden flex items-center justify-center p-4 sm:p-6 group cursor-default"
                          style={{ animationDelay: floatDelay }}
                        >
                          {/* 3D Depth Lighting Sweep */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-black/30 pointer-events-none" />

                        <img
                          src={getImagePath(item.fileName)}
                          alt={item.title}
                          className="w-full h-full max-h-[580px] object-contain vibrant-img transition-transform duration-500 group-hover:scale-[1.025]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Case Study Breakdown (5 Cols) - Clear Understandable Words & Sentence Gaps */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <div>
                        {/* Title */}
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
                          {item.title}
                        </h3>

                        {/* Structured Objective & Execution Blocks with Clear Sentence Gaps */}
                        <div className="flex flex-col gap-5">
                          {/* 1. Creative Objective */}
                          <div className="p-5 rounded-[var(--radius)] bg-white/5 border border-white/10">
                            <span className="text-[11px] font-black uppercase tracking-wider text-[#FF5C39] block mb-2.5">
                              Creative Objective
                            </span>
                            <div className="text-sm">
                              {renderClearSentences(item.goal)}
                            </div>
                          </div>

                          {/* 2. What I Did */}
                          <div className="p-5 rounded-[var(--radius)] bg-white/5 border border-white/10">
                            <span className="text-[11px] font-black uppercase tracking-wider text-[#00F0FF] block mb-2.5">
                              Execution & Workflow
                            </span>
                            <div className="text-sm">
                              {renderClearSentences(item.whatIDid)}
                            </div>
                          </div>

                          {/* 3. Result - rendered when custom result is provided */}
                          {item.result && item.result !== "Add result here" && item.result !== "Add real result here" && (
                            <div className="p-4 rounded-[var(--radius)] bg-white/5 border border-white/10">
                              <span className="text-[11px] font-black uppercase tracking-wider text-[#D9F76B] block mb-1.5">
                                Campaign Result
                              </span>
                              <div className="text-xs font-bold px-3 py-1.5 rounded-[var(--radius)] bg-white text-[#08090E] inline-block shadow-md">
                                {item.result}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                  </article>
                );
              })}
            </div>

          </div>
        </section>


        {/* ==========================================================================
             5. SKILLS AND TOOLS (3D Dark Surface #0E1220, >=96px vertical padding)
             ========================================================================== */}
        <section id="skills" className="section-white section-padding border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-grid-cyber opacity-35" />

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* Section Label: 05 - SKILLS & TOOLS */}
            <div className="section-badge-violet">
              <span>05 - SKILLS & TOOLS</span>
            </div>

            {/* Heading with Thick Coral Underline */}
            <h2 className="heading-fluid text-white mb-4">
              Creative Strategy &{' '}
              <span className="underline-coral text-white">
                Production Stack
              </span>
            </h2>
            <p className="text-lg text-[#CAD0E6] max-w-2xl mb-12 leading-relaxed">
              Grouped bento capabilities covering short-form video pacing, growth strategy, and daily editing applications.
            </p>

            {/* Bento Tiles Grouped as Content, Strategy, Tools */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {SKILLS_CONTENT.map((group, idx) => (
                <div key={group.id} className="bento-card-light flex flex-col justify-between p-7 sm:p-8">
                  <div>
                    <div className={idx === 0 ? "icon-chip-coral mb-6" : idx === 1 ? "icon-chip-violet mb-6" : "icon-chip-lime mb-6"}>
                      {renderIcon(group.iconName)}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white mb-3">
                      {group.title}
                    </h3>

                    <p className="text-sm text-[#CAD0E6] leading-relaxed mb-6">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-5 border-t border-white/10">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white">
                        <CheckCircle2 size={16} className={idx === 0 ? "text-[#FF5C39]" : idx === 1 ? "text-[#00F0FF]" : "text-[#D9F76B]"} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ======================================================================
                 3D STEPPED PEDESTALS & CREATIVE TOOLS SUITE (Matching Screenshot 3)
                 CapCut, Canva, Pinterest, Photoshop, Meta Suite, and AI
                 ====================================================================== */}
            <div className="mb-16 rounded-[var(--radius)] p-7 sm:p-9 lg:p-12 bg-[#0C0F1B] text-white border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(0,240,255,0.15)] overflow-hidden relative">
              {/* Top ambient lighting halo */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Sub-Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-[#08090E] bg-[#00F0FF] px-3.5 py-1.5 rounded-[var(--radius)] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    {CREATIVE_TOOLS_CONTENT.sectionLabel}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5C39] bg-[#FF5C39]/15 px-3 py-1 rounded-[var(--radius)] border border-[#FF5C39]/30">
                    CapCut · Canva · Pinterest · Photoshop · Meta
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#9BA1BA]">
                  <Layers size={15} className="text-[#00F0FF]" />
                  <span>Stepped Pedestal Hierarchy</span>
                </div>
              </div>

              {/* Grid: Left = 3D Stepped Pedestals Artwork, Right = Tiered Tool Pedestals */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
                
                {/* 3D Stepped Pedestals Image Stage (6 Cols) */}
                <div className="lg:col-span-6 flex flex-col justify-between relative">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                      {CREATIVE_TOOLS_CONTENT.titleLead}
                      <span className="text-[#00F0FF]">
                        {CREATIVE_TOOLS_CONTENT.titleKeyWord}
                      </span>
                    </h3>

                    <div className="text-sm sm:text-base text-[#CAD0E6] mb-6">
                      {renderClearSentences(CREATIVE_TOOLS_CONTENT.subline)}
                    </div>
                  </div>

                  {/* 3D Floating Visual Stage with Floor Glow */}
                  <div className="relative w-full mt-2">
                    <div className="floating-floor-glow" />

                    <div className="floating-3d-stage relative w-full h-[300px] sm:h-[360px] md:h-[400px] rounded-[var(--radius)] overflow-hidden group shadow-2xl">
                      <img
                        src={CREATIVE_TOOLS_CONTENT.image}
                        alt="3D Stepped Pedestals for Creative Tools"
                        className="w-full h-full object-cover vibrant-img transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />

                      {/* Gradient Overlay for Sleek Look */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08090E]/90 via-transparent to-transparent pointer-events-none" />

                      {/* Bottom Status Tag */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 rounded-[var(--radius)] bg-[#0C0F1B]/90 text-white text-xs font-bold border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse shadow-[0_0_8px_#00F0FF]" />
                          <span>Interactive Pedestal Stack</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Stepped Tool Cards (6 Cols) */}
                <div className="lg:col-span-6 flex flex-col gap-4 justify-center">
                  {CREATIVE_TOOLS_CONTENT.tools.map((tool) => {
                    const isActive = activePedestalTool === tool.id;
                    return (
                      <div
                        key={tool.id}
                        onClick={() => setActivePedestalTool(tool.id)}
                        className={`p-4 sm:p-5 rounded-[var(--radius)] border transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#141829] border-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                            : 'bg-[#0F1222]/80 border-white/10 hover:border-white/25 hover:bg-[#121626]'
                        }`}
                      >
                        {/* Tool Card Header */}
                        <div className="flex items-center justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-[var(--radius)] flex items-center justify-center shrink-0 border"
                              style={{
                                backgroundColor: `${tool.accentColor}18`,
                                borderColor: `${tool.accentColor}50`,
                                color: tool.accentColor
                              }}
                            >
                              {renderToolBrandIcon(tool.id, "w-4 h-4")}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-display text-base font-extrabold text-white">
                                  {tool.name}
                                </h4>
                                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#CAD0E6]">
                                  Tier {tool.pedestalLevel}
                                </span>
                              </div>
                              <p className="text-xs text-[#9BA1BA]">
                                {tool.category}
                              </p>
                            </div>
                          </div>

                          <span
                            className="text-[11px] font-bold px-2.5 py-1 rounded-[var(--radius)] shrink-0 border"
                            style={{
                              color: tool.accentColor,
                              backgroundColor: `${tool.accentColor}12`,
                              borderColor: `${tool.accentColor}30`
                            }}
                          >
                            {tool.badge}
                          </span>
                        </div>

                        {/* Description with clear sentence gaps */}
                        <div className="text-xs text-[#CAD0E6] mb-3">
                          {renderClearSentences(tool.description)}
                        </div>

                        {/* Workflows Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
                          {tool.keyWorkflows.map((flow, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-medium text-[#CAD0E6] bg-white/5 border border-white/10 px-2.5 py-1 rounded"
                            >
                              • {flow}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

            {/* AI Creative Suite & Image Editing Workstation */}
            <div className="rounded-[var(--radius)] p-7 sm:p-9 lg:p-12 bg-[#0C0F1B] text-white border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_35px_rgba(108,76,241,0.15)] overflow-hidden relative">
              {/* Ambient lighting halo */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C4CF1]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Top Sub-Label & Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-[#08090E] bg-[#D9F76B] px-3.5 py-1.5 rounded-[var(--radius)] shadow-[0_0_15px_rgba(217,247,107,0.4)]">
                    {AI_WORKFLOW_CONTENT.sectionLabel}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF5C39] bg-[#FF5C39]/15 px-3 py-1 rounded-[var(--radius)] border border-[#FF5C39]/30">
                    Picture Editing & Multi-Model AI
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#9BA1BA]">
                  <Sparkles size={14} className="text-[#D9F76B]" />
                  <span>Multimodal Creator Stack</span>
                </div>
              </div>

              {/* Grid: Left = 3D Editing Workstation Illustration, Right = AI Symbols & Capabilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
                
                {/* 3D AI Workstation Image Stage (7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-center relative">
                  <div className="floating-floor-glow" />

                  <div className="floating-3d-stage relative w-full h-[320px] sm:h-[400px] md:h-[440px] rounded-[var(--radius)] overflow-hidden group shadow-2xl">
                    <img
                      src={AI_WORKFLOW_CONTENT.image}
                      alt="AI Creative Editing Workstation"
                      className="w-full h-full object-cover vibrant-img transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Sleek Look */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/90 via-transparent to-transparent pointer-events-none" />

                    {/* Studio Label at Bottom */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 rounded-[var(--radius)] bg-[#08090E]/90 text-white text-xs font-bold border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        <span>Chai & Pixels · Creative Studio</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: AI Tools Badges & Practical Workflows (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4">
                      {AI_WORKFLOW_CONTENT.titleLead}
                      <span className="text-[#D9F76B]">
                        {AI_WORKFLOW_CONTENT.titleKeyWord}
                      </span>
                    </h3>

                    <div className="text-sm sm:text-base text-[#CAD0E6] mb-6">
                      {renderClearSentences(AI_WORKFLOW_CONTENT.subline)}
                    </div>

                    {/* AI Tool Badges with Official Symbols */}
                    <div className="mb-6">
                      <span className="text-[11px] font-black uppercase tracking-wider text-white/60 block mb-2.5">
                        Active AI Stack & Daily Models
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {AI_WORKFLOW_CONTENT.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius)] text-xs font-bold border ${tool.badgeClass} transition-transform hover:scale-105`}
                            title={`${tool.company} — ${tool.focus}`}
                          >
                            {renderAiIcon(tool.name, "w-3.5 h-3.5 shrink-0")}
                            <span>{tool.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 3 Core Applied Workflows */}
                    <div className="flex flex-col gap-3.5">
                      {AI_WORKFLOW_CONTENT.capabilities.map((cap, i) => (
                        <div key={i} className="p-4 rounded-[var(--radius)] bg-white/5 border border-white/10">
                          <h4 className="text-xs font-extrabold text-white mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C39]" />
                            <span>{cap.title}</span>
                          </h4>
                          <div className="text-xs text-[#CAD0E6]">
                            {renderClearSentences(cap.description)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terminal-style Prompt Sample Box */}
                  <div className="mt-6 p-3.5 rounded-[var(--radius)] bg-[#08090E] border border-white/10 font-mono text-[11px] text-[#D9F76B] flex items-center gap-2">
                    <span className="text-white/40">PROMPT:</span>
                    <span className="truncate text-white/90">"Commercial studio lighting, sharp macro textures, high dynamic range..."</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
             6. CONTACT (3D Dark Theme #0B0E18, Glowing Neon Accents)
             ========================================================================== */}
        <section id="contact" className="section-cream section-padding relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-grid-cyber opacity-35" />

          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            
            {/* Section Label: 06 - CONTACT */}
            <div className="section-badge-coral">
              <span>{CONTACT_CONTENT.sectionLabel}</span>
            </div>

            {/* Large 3D Cyber Call-to-Action Box with glowing cyan/coral rim */}
            <div className="rounded-[var(--radius)] p-8 sm:p-12 md:p-16 bg-[#0E1222] text-white border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(255,92,57,0.2)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF5C39]/20 to-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Left: Headline & Statement (7 Cols) */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius)] bg-white/10 text-[#00F0FF] text-xs font-bold uppercase tracking-wider mb-5 border border-[#00F0FF]/30 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                    <Sparkles size={14} />
                    Ready for new opportunities
                  </span>

                  <h2 className="heading-fluid text-white mb-5">
                    {CONTACT_CONTENT.headingLead}
                    <span className="underline-coral text-white">
                      {CONTACT_CONTENT.headingKeyWord}
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-[#CAD0E6] leading-relaxed max-w-xl mb-7">
                    {CONTACT_CONTENT.subline}
                  </p>

                  <div className="flex items-center gap-2.5 text-sm text-[#9BA1BA]">
                    <MapPin size={18} className="text-[#FF5C39]" />
                    <span>{CONTACT_CONTENT.location}</span>
                  </div>
                </div>

                {/* Right: Contact & Social Action Buttons (5 Cols) with 6px corners */}
                <div className="lg:col-span-5 flex flex-col gap-3.5">
                  <a
                    href={`mailto:${CONTACT_CONTENT.email}`}
                    className="p-4 rounded-[var(--radius)] bg-white text-[#08090E] hover:bg-[#00F0FF] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 border border-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] btn-contact-action"
                  >
                    <Mail size={18} className="text-[#FF5C39]" />
                    Email: {CONTACT_CONTENT.email}
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={CONTACT_CONTENT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-[var(--radius)] bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all btn-contact-action"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>

                    <a
                      href={`tel:${CONTACT_CONTENT.phone.replace(/\s+/g, '')}`}
                      className="p-3.5 rounded-[var(--radius)] bg-white/10 hover:bg-[#00F0FF] hover:text-[#08090E] hover:border-[#00F0FF] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all btn-contact-action"
                    >
                      <Phone size={18} />
                      Direct Call
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={CONTACT_CONTENT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-[var(--radius)] bg-white/10 hover:bg-[#E1306C] hover:border-[#E1306C] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all btn-contact-action"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>

                    <a
                      href={CONTACT_CONTENT.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-[var(--radius)] bg-white/10 hover:bg-[#0077B5] hover:border-[#0077B5] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all btn-contact-action"
                    >
                      <Linkedin size={18} />
                      LinkedIn
                    </a>
                  </div>

                  <a
                    href={CONTACT_CONTENT.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={CONTACT_CONTENT.resumeFileName}
                    className="p-4 rounded-[var(--radius)] bg-gradient-to-r from-[#FF5C39] to-[#E64320] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 transition-all shadow-[0_4px_20px_rgba(255,92,57,0.35)] btn-contact-action"
                  >
                    <Download size={18} className="text-[#D9F76B]" />
                    Download Resume (PDF)
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>



      {/* ==========================================================================
           3D THEMED FOOTER
           ========================================================================== */}
      <footer className="border-t border-white/10 py-10 bg-[#08090E] text-center text-xs text-[#9BA1BA]">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-sm font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
            <span>{CONTACT_CONTENT.name} · {CONTACT_CONTENT.role}</span>
          </div>
          <div>
            {CONTACT_CONTENT.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
