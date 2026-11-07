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
  CONTACT_CONTENT,
  PortfolioItem
} from './content';

import {
  Mail,
  Phone,
  MapPin,
  Download,
  ArrowRight,
  ArrowLeft,
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
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filtered portfolio list
  const filteredPortfolio = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  // Keyboard navigation for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeModalItem) return;
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredPortfolio.findIndex((item) => item.id === activeModalItem.id);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % filteredPortfolio.length;
          setActiveModalItem(filteredPortfolio[nextIndex]);
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredPortfolio.findIndex((item) => item.id === activeModalItem.id);
        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length;
          setActiveModalItem(filteredPortfolio[prevIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem, filteredPortfolio]);

  // Lock body scroll when Modal or Mobile Menu is open
  useEffect(() => {
    if (activeModalItem || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalItem, mobileMenuOpen]);

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

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#1B1B1F] selection:bg-[#FF5C39] selection:text-white">
      {/* ==========================================================================
           STICKY NAVBAR (Cream Background, Anchor Links & Resume Button)
           ========================================================================== */}
      <header className="sticky top-0 z-40 bg-[#FFF8F0]/92 backdrop-blur-md border-b border-[#EADFD3] w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-6">
          {/* Brand Wordmark with 6px radius */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-display text-xl font-bold text-[#1B1B1F] shrink-0"
          >
            <span className="w-8 h-8 rounded-[var(--radius)] bg-[#FF5C39] text-white flex items-center justify-center font-black text-sm border border-[#1B1B1F]">
              P
            </span>
            <span>Poonam MR</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#5A5A66]">
            <a href="#about" className="hover:text-[#FF5C39] transition-colors">About</a>
            <a href="#education" className="hover:text-[#FF5C39] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#FF5C39] transition-colors">Experience</a>
            <a href="#work" className="hover:text-[#FF5C39] transition-colors">Work</a>
            <a href="#skills" className="hover:text-[#FF5C39] transition-colors">Skills & Tools</a>
            <a href="#contact" className="hover:text-[#FF5C39] transition-colors">Contact</a>
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
            className="md:hidden w-11 h-11 rounded-[var(--radius)] bg-white border border-[#EADFD3] flex items-center justify-center text-[#1B1B1F]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[76px] inset-x-0 bg-[#FFF8F0]/98 backdrop-blur-xl border-b border-[#EADFD3] p-6 z-50 shadow-xl">
            <nav className="flex flex-col gap-3 text-lg font-bold text-[#1B1B1F] mb-6">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">About</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">Education</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">Experience</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">Work</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">Skills & Tools</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-[#EADFD3]/50">Contact</a>
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
             1. HERO SECTION (Cream Background #FFF8F0, >=96px vertical padding)
             ========================================================================== */}
        <section id="hero" className="section-cream section-padding border-b border-[#EADFD3]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline, Personality Badge & Buttons (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                
                {/* Friendly Sticker-style Rotated Badge (6px radius) */}
                <div className="mb-6">
                  <span className="sticker-badge">
                    <span className="w-2 h-2 rounded-full bg-[#1B1B1F] animate-pulse" />
                    {HERO_CONTENT.statusBadgeText} · {HERO_CONTENT.statusLocation}
                  </span>
                </div>

                {/* Main Headline with Thick Coral Underline on "actually engage" */}
                <h1 className="heading-fluid text-[#1B1B1F] mb-6">
                  {HERO_CONTENT.headlineStart}
                  <span className="underline-coral text-[#FF5C39]">
                    {HERO_CONTENT.headlineKeyWord}
                  </span>
                  {HERO_CONTENT.headlineEnd}
                </h1>

                {/* Subline */}
                <p className="text-lg sm:text-xl text-[#5A5A66] font-medium leading-relaxed mb-8 max-w-xl">
                  {HERO_CONTENT.subline}
                </p>

                {/* Buttons: "See my work" and "Download resume" */}
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#work" className="btn-primary">
                    {HERO_CONTENT.primaryCtaText}
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href={CONTACT_CONTENT.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={CONTACT_CONTENT.resumeFileName}
                    className="btn-secondary"
                  >
                    <Download size={18} />
                    {HERO_CONTENT.secondaryCtaText}
                  </a>
                </div>
              </div>

              {/* Right Column: Small Hero Bento Cluster of 4 Tiles (5 Cols) */}
              <div className="lg:col-span-5 w-full">
                <div className="grid grid-cols-2 gap-4 auto-rows-[160px] sm:auto-rows-[185px]">
                  
                  {/* Hero Tile 1: Best Image 1 (Feed Posts) */}
                  <div
                    className="bento-card-light !p-0 overflow-hidden cursor-pointer group"
                    onClick={() => {
                      const found = PORTFOLIO_ITEMS.find((p) => p.id === 'social-feed');
                      if (found) setActiveModalItem(found);
                    }}
                    title="Click to view Instagram Feed Campaign"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={HERO_CONTENT.heroFeatureImages[0].src}
                        alt="Instagram Feed Campaign"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#1B1B1F]/90 via-[#1B1B1F]/40 to-transparent flex flex-col justify-end">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9F76B]">
                          {HERO_CONTENT.heroFeatureImages[0].tag}
                        </span>
                        <span className="font-display text-sm font-bold text-white leading-tight">
                          {HERO_CONTENT.heroFeatureImages[0].title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hero Tile 2: Best Image 2 (Story Designs) */}
                  <div
                    className="bento-card-light !p-0 overflow-hidden cursor-pointer group"
                    onClick={() => {
                      const found = PORTFOLIO_ITEMS.find((p) => p.id === 'social-stories');
                      if (found) setActiveModalItem(found);
                    }}
                    title="Click to view Story Concepts"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={HERO_CONTENT.heroFeatureImages[1].src}
                        alt="Instagram Story Designs"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="eager"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-[#1B1B1F]/90 via-[#1B1B1F]/40 to-transparent flex flex-col justify-end">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9F76B]">
                          {HERO_CONTENT.heroFeatureImages[1].tag}
                        </span>
                        <span className="font-display text-sm font-bold text-white leading-tight">
                          {HERO_CONTENT.heroFeatureImages[1].title}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hero Tile 3: Status Badge Tile (Lime Highlight #D9F76B) */}
                  <div className="bento-card-light bg-[#D9F76B] border-[#1B1B1F] flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1B1B1F]" />
                      <Sparkles size={16} className="text-[#1B1B1F]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1B1B1F]/70 block mb-0.5">
                        Availability
                      </span>
                      <h3 className="font-display text-base font-bold text-[#1B1B1F] leading-tight">
                        {HERO_CONTENT.statusBadgeText}
                      </h3>
                      <p className="text-xs text-[#1B1B1F]/80 font-medium mt-0.5">
                        Bangalore / Hybrid
                      </p>
                    </div>
                  </div>

                  {/* Hero Tile 4: 3 Skill Chips Tile */}
                  <div className="bento-card-light flex flex-col justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5C39]">
                      Core Capabilities
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {HERO_CONTENT.heroSkillChips.map((chip, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2.5 py-1 rounded-[var(--radius)] bg-[#FFF8F0] border border-[#EADFD3] text-[#1B1B1F] truncate"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==========================================================================
             2. ABOUT SECTION (White Background #FFFFFF, >=96px vertical padding)
             ========================================================================== */}
        <section id="about" className="section-white section-padding border-b border-[#EADFD3]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label */}
            <div className="section-badge-coral">
              <span>{ABOUT_CONTENT.sectionLabel}</span>
            </div>

            {/* Heading with Thick Lime Underline */}
            <h2 className="heading-fluid text-[#1B1B1F] mb-10">
              {ABOUT_CONTENT.headingLead}
              <span className="underline-lime text-[#1B1B1F]">
                {ABOUT_CONTENT.headingKeyWord}
              </span>
            </h2>

            {/* Bento Layout: Main Bio + 3 Small Highlight Tiles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Bio Narrative Card (7 Cols) */}
              <div className="lg:col-span-7 bento-card-light flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B1B1F] leading-snug mb-5" style={{ textWrap: 'balance' }}>
                    Digital Media Marketing Intern & Content Creator based in Bangalore.
                  </h3>

                  <div className="flex flex-col gap-4 text-base sm:text-lg text-[#5A5A66] leading-relaxed">
                    {ABOUT_CONTENT.bioParagraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EADFD3] flex items-center gap-2 text-sm font-semibold text-[#5A5A66]">
                  <MapPin size={18} className="text-[#FF5C39]" />
                  <span>{CONTACT_CONTENT.location}</span>
                </div>
              </div>

              {/* 3 Highlight Tiles (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
                {ABOUT_CONTENT.highlightTiles.map((tile, idx) => (
                  <div key={tile.id} className="bento-card-light flex-1 flex items-start gap-4">
                    <div className={idx === 0 ? "icon-chip-coral" : idx === 1 ? "icon-chip-violet" : "icon-chip-lime"}>
                      {renderIcon(tile.iconName)}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-[#1B1B1F] mb-1">
                        {tile.title}
                      </h4>
                      <p className="text-sm text-[#5A5A66] leading-relaxed">
                        {tile.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ==========================================================================
             3. EDUCATION SECTION (Cream Background #FFF8F0, >=96px vertical padding)
             ========================================================================== */}
        <section id="education" className="section-cream section-padding border-b border-[#EADFD3]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label */}
            <div className="section-badge-violet">
              <span>{EDUCATION_CONTENT[0] ? "02 - EDUCATION" : "02 - EDUCATION"}</span>
            </div>

            {/* Heading with Thick Coral Underline */}
            <h2 className="heading-fluid text-[#1B1B1F] mb-4">
              Academic Foundation &{' '}
              <span className="underline-coral text-[#FF5C39]">
                Coursework
              </span>
            </h2>
            <p className="text-lg text-[#5A5A66] max-w-xl mb-12">
              Formal business administration studies and pre-university credentials.
            </p>

            {/* Vertical Timeline with Cards */}
            <div className="timeline-stem flex flex-col gap-8 max-w-3xl">
              {EDUCATION_CONTENT.map((edu) => (
                <div key={edu.id} className="relative">
                  <span className="timeline-bullet-violet" />
                  <div className="bento-card-light">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#6C4CF1] bg-[#6C4CF1]/10 px-3 py-1 rounded-[var(--radius)]">
                        {edu.years}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1B1B1F] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#5A5A66] mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-[#5A5A66] leading-relaxed border-t border-[#EADFD3] pt-3">
                      <strong className="text-[#1B1B1F]">Relevant details:</strong> {edu.relevantDetails}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================================================
             4. EXPERIENCE & INTERNSHIPS (White Background #FFFFFF, >=96px padding)
             ========================================================================== */}
        <section id="experience" className="section-white section-padding border-b border-[#EADFD3]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label */}
            <div className="section-badge-coral">
              <span>03 - EXPERIENCE</span>
            </div>

            {/* Heading with Thick Lime Underline */}
            <h2 className="heading-fluid text-[#1B1B1F] mb-4">
              Hands-On Internship &{' '}
              <span className="underline-lime text-[#1B1B1F]">
                Studio Roles
              </span>
            </h2>
            <p className="text-lg text-[#5A5A66] max-w-xl mb-12">
              Direct social media page management, campaign asset design, and video workflows.
            </p>

            {/* Vertical Timeline for Experience */}
            <div className="timeline-stem flex flex-col gap-8 max-w-3xl mb-12">
              {EXPERIENCE_CONTENT.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="timeline-bullet-coral" />
                  <div className="bento-card-light">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF5C39] bg-[#FF5C39]/10 px-3 py-1 rounded-[var(--radius)]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold text-[#5A5A66]">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1B1B1F] mb-1">
                      {exp.role}
                    </h3>

                    <p className="text-base font-bold text-[#FF5C39] mb-4">
                      {exp.company}
                    </p>

                    <ul className="flex flex-col gap-2.5 text-sm text-[#5A5A66]">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={18} className="text-[#FF5C39] shrink-0 mt-0.5" />
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
              <h3 className="font-display text-xl font-bold text-[#1B1B1F] mb-4 flex items-center gap-2">
                <Award size={20} className="text-[#6C4CF1]" />
                Certifications & Course Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {CERTIFICATIONS_CONTENT.map((cert) => (
                  <div key={cert.id} className="bento-card-light !p-5 flex flex-col justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6C4CF1] mb-1">
                      {cert.issuer}
                    </span>
                    <h4 className="font-display text-base font-bold text-[#1B1B1F]">
                      {cert.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================================
             5. WORK SECTION (Dark Ink Background #1B1B1F, >=96px vertical padding)
             ========================================================================== */}
        <section id="work" className="section-ink section-padding border-b border-white/10">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label */}
            <div className="section-badge-lime">
              <span>04 - WORK</span>
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
                <p className="text-lg text-[#B2B4C2] mt-3 max-w-xl">
                  17 verified portfolio works. Click any card to inspect the Goal, What I did, and Results.
                </p>
              </div>
            </div>

            {/* Category Filter Buttons (with 6px radius) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none" role="tablist">
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

            {/* 4-Column Dense Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[260px] [grid-auto-flow:dense]">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  className={`work-bento-tile group ${item.bentoSpan}`}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${item.title}`}
                  onClick={() => setActiveModalItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveModalItem(item);
                    }
                  }}
                >
                  <img
                    src={item.fileName}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Dark Gradient Overlay for Guaranteed Contrast */}
                  <div className="work-tile-scrim">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D9F76B] mb-1">
                      {item.category}
                    </span>
                    <h3
                      className="font-display text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#FF5C39] transition-colors"
                      style={{ overflowWrap: 'anywhere', textWrap: 'balance' }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-[#B2B4C2] mt-2 pt-2 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Case Study</span>
                      <ArrowRight size={14} className="text-[#FF5C39]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================================================
             6. SKILLS AND TOOLS (White Background #FFFFFF, >=96px vertical padding)
             Renumbered from 06 to 05
             ========================================================================== */}
        <section id="skills" className="section-white section-padding border-b border-[#EADFD3]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label: 05 - SKILLS & TOOLS */}
            <div className="section-badge-violet">
              <span>05 - SKILLS & TOOLS</span>
            </div>

            {/* Heading with Thick Coral Underline */}
            <h2 className="heading-fluid text-[#1B1B1F] mb-4">
              Creative Strategy &{' '}
              <span className="underline-coral text-[#FF5C39]">
                Production Stack
              </span>
            </h2>
            <p className="text-lg text-[#5A5A66] max-w-xl mb-12">
              Grouped bento capabilities covering content, growth strategy, and daily tools.
            </p>

            {/* Bento Tiles Grouped as Content, Strategy, Tools */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILLS_CONTENT.map((group, idx) => (
                <div key={group.id} className="bento-card-light flex flex-col justify-between">
                  <div>
                    <div className={idx === 0 ? "icon-chip-coral mb-5" : idx === 1 ? "icon-chip-violet mb-5" : "icon-chip-lime mb-5"}>
                      {renderIcon(group.iconName)}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-[#1B1B1F] mb-2">
                      {group.title}
                    </h3>

                    <p className="text-sm text-[#5A5A66] leading-relaxed mb-6">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-4 border-t border-[#EADFD3]">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-[#1B1B1F]">
                        <CheckCircle2 size={16} className={idx === 0 ? "text-[#FF5C39]" : idx === 1 ? "text-[#6C4CF1]" : "text-[#1B1B1F]"} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================================================
             7. CONTACT (Cream Background #FFF8F0, Large Coral CTA Tile)
             Renumbered from 07 to 06
             ========================================================================== */}
        <section id="contact" className="section-cream section-padding">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Label: 06 - CONTACT */}
            <div className="section-badge-coral">
              <span>{CONTACT_CONTENT.sectionLabel}</span>
            </div>

            {/* Large Coral Call-to-Action Tile with 6px corners and sharp borders */}
            <div className="rounded-[var(--radius)] p-8 sm:p-12 md:p-16 bg-[#FF5C39] text-white border-2 border-[#1B1B1F] shadow-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Headline & Statement (7 Cols) */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius)] bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                    <Sparkles size={14} />
                    Ready for new opportunities
                  </span>

                  <h2 className="heading-fluid text-white mb-4">
                    {CONTACT_CONTENT.headingLead}
                    <span className="underline-lime text-white">
                      {CONTACT_CONTENT.headingKeyWord}
                    </span>
                  </h2>

                  <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mb-6">
                    {CONTACT_CONTENT.subline}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin size={18} />
                    <span>{CONTACT_CONTENT.location}</span>
                  </div>
                </div>

                {/* Right: Contact & Social Action Buttons (5 Cols) with 6px corners */}
                <div className="lg:col-span-5 flex flex-col gap-3.5">
                  <a
                    href={`mailto:${CONTACT_CONTENT.email}`}
                    className="p-4 rounded-[var(--radius)] bg-white text-[#1B1B1F] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 border border-[#1B1B1F] btn-contact-action"
                  >
                    <Mail size={18} className="text-[#FF5C39]" />
                    Email: {CONTACT_CONTENT.email}
                  </a>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={CONTACT_CONTENT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-[var(--radius)] bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/30 btn-contact-action"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>

                    <a
                      href={`tel:${CONTACT_CONTENT.phone.replace(/\s+/g, '')}`}
                      className="p-3.5 rounded-[var(--radius)] bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/30 btn-contact-action"
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
                      className="p-3.5 rounded-[var(--radius)] bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/30 btn-contact-action"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>

                    <a
                      href={CONTACT_CONTENT.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-[var(--radius)] bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/30 btn-contact-action"
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
                    className="p-4 rounded-[var(--radius)] bg-[#1B1B1F] text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/20 btn-contact-action"
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
           CASE STUDY MODAL (Lightbox with 6px corners & flat shadow)
           ========================================================================== */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-[#1B1B1F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-[var(--radius)] border-2 border-[#1B1B1F] shadow-[6px_6px_0_#1B1B1F] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#EADFD3] flex items-center justify-between gap-4 bg-[#FFF8F0]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5C39] block">
                  {activeModalItem.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1B1B1F]">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Close Button with 6px radius */}
              <button
                onClick={() => setActiveModalItem(null)}
                className="w-10 h-10 rounded-[var(--radius)] bg-white border border-[#EADFD3] hover:border-[#1B1B1F] hover:bg-[#FF5C39] hover:text-white text-[#1B1B1F] flex items-center justify-center transition-all cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto p-4 sm:p-6 flex flex-col gap-6">
              {/* Full Image */}
              <div className="w-full max-h-[55vh] flex items-center justify-center rounded-[var(--radius)] bg-[#1B1B1F] overflow-hidden border border-[#EADFD3]">
                <img
                  src={activeModalItem.fileName}
                  alt={activeModalItem.title}
                  className="max-h-[55vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Three Labeled Lines: Goal, What I did, Result */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-[var(--radius)] bg-[#FFF8F0] border border-[#EADFD3]">
                {/* 1. Goal */}
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF5C39] block mb-1">
                    Goal
                  </span>
                  <p className="text-sm text-[#1B1B1F] leading-relaxed">
                    {activeModalItem.goal}
                  </p>
                </div>

                {/* 2. What I did */}
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#6C4CF1] block mb-1">
                    What I did
                  </span>
                  <p className="text-sm text-[#1B1B1F] leading-relaxed">
                    {activeModalItem.whatIDid}
                  </p>
                </div>

                {/* 3. Result */}
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1B1B1F] block mb-1">
                    Result
                  </span>
                  <div className="text-xs font-bold px-3 py-1.5 rounded-[var(--radius)] bg-white border border-[#EADFD3] text-[#1B1B1F] inline-block">
                    {activeModalItem.result}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 sm:p-5 border-t border-[#EADFD3] flex items-center justify-between text-xs text-[#5A5A66] bg-[#FFF8F0]">
              <button
                onClick={() => {
                  const currentIndex = filteredPortfolio.findIndex((item) => item.id === activeModalItem.id);
                  if (currentIndex !== -1) {
                    const prevIndex = (currentIndex - 1 + filteredPortfolio.length) % filteredPortfolio.length;
                    setActiveModalItem(filteredPortfolio[prevIndex]);
                  }
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius)] bg-white border border-[#EADFD3] hover:border-[#1B1B1F] text-[#1B1B1F] font-bold transition-all cursor-pointer"
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <span className="font-semibold">
                {filteredPortfolio.findIndex((item) => item.id === activeModalItem.id) + 1} of {filteredPortfolio.length}
              </span>

              <button
                onClick={() => {
                  const currentIndex = filteredPortfolio.findIndex((item) => item.id === activeModalItem.id);
                  if (currentIndex !== -1) {
                    const nextIndex = (currentIndex + 1) % filteredPortfolio.length;
                    setActiveModalItem(filteredPortfolio[nextIndex]);
                  }
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-[var(--radius)] bg-white border border-[#EADFD3] hover:border-[#1B1B1F] text-[#1B1B1F] font-bold transition-all cursor-pointer"
              >
                Next
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================================================
           SIMPLE FOOTER
           ========================================================================== */}
      <footer className="border-t border-[#EADFD3] py-8 bg-[#FFF8F0] text-center text-xs text-[#5A5A66]">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-display text-sm font-bold text-[#1B1B1F]">
            {CONTACT_CONTENT.name} · {CONTACT_CONTENT.role}
          </div>
          <div>
            {CONTACT_CONTENT.footerCopyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
