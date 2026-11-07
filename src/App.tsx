import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  ArrowLeft,
  X,
  Menu,
  Check,
  Video,
  Layers
} from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  fileName: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'social-stories', title: 'Instagram Story Designs', category: 'Social Media', fileName: 'images/story-designs.jpg' },
  { id: 'social-feed', title: 'Instagram Feed Posts', category: 'Social Media', fileName: 'images/feed-posts.jpg' },
  { id: 'photo-product', title: 'Product', category: 'Photography', fileName: 'images/product.jpg' },
  { id: 'photo-lifestyle', title: 'Lifestyle', category: 'Photography', fileName: 'images/lifestyle.jpg' },
  { id: 'photo-event', title: 'Event', category: 'Photography', fileName: 'images/event.jpg' },
  { id: 'photo-food', title: 'Food', category: 'Photography', fileName: 'images/food.jpg' },
  { id: 'photo-nature', title: 'Nature', category: 'Photography', fileName: 'images/nature.jpg' },
  { id: 'photo-sunset-1', title: 'Sunset Series I', category: 'Photography', fileName: 'images/sunset-1.jpg' },
  { id: 'photo-sunset-2', title: 'Sunset Series II', category: 'Photography', fileName: 'images/sunset-2.jpg' },
  { id: 'photo-kedarnath', title: 'Kedarnath Uttarakhand', category: 'Photography', fileName: 'images/kedarnath.jpg' },
  { id: 'adobe-logo', title: 'Logo Design - Sip Glitz', category: 'Adobe Projects', fileName: 'images/logo-sip-glitz.jpg' },
  { id: 'adobe-visiting-card', title: 'Visiting Card', category: 'Adobe Projects', fileName: 'images/visiting-card.jpg' },
  { id: 'adobe-poster', title: 'Poster', category: 'Adobe Projects', fileName: 'images/poster.jpg' },
  { id: 'adobe-brochure-front', title: 'Brochure Front', category: 'Adobe Projects', fileName: 'images/brochure-front.jpg' },
  { id: 'adobe-brochure-back', title: 'Brochure Back', category: 'Adobe Projects', fileName: 'images/brochure-back.jpg' },
  { id: 'adobe-software-fonts', title: 'Software & Fonts Used', category: 'Adobe Projects', fileName: 'images/software-fonts.jpg' },
  { id: 'brand-indima-spices', title: 'Indima Homemade Spices Price List', category: 'Brand', fileName: 'images/indima-pricelist.jpg' }
];

const CATEGORIES = ['All', 'Social Media', 'Photography', 'Adobe Projects', 'Brand'] as const;

const SKILLS = [
  'Social Media Management',
  'Content Creation',
  'Photo & Video Editing',
  'Canva Design',
  'MS Excel',
  'Digital Marketing Fundamentals',
  'Communication',
  'Creativity',
  'Teamwork',
  'Time Management'
];

const TAGLINE_PHRASES = [
  'Social Media Marketer',
  'Content Creator',
  'Canva Designer'
];

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Typing effect state
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Parallax stack refs
  const stackRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Touch swipe refs for lightbox
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  // Filtered portfolio
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Typing rotator logic
  useEffect(() => {
    const fullText = TAGLINE_PHRASES[currentPhraseIdx];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== fullText) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 90);
    } else if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
      }, 45);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentPhraseIdx((prev) => (prev + 1) % TAGLINE_PHRASES.length);
      timeout = setTimeout(() => {}, 400);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIdx]);

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setScrollProgress(total > 0 ? (current / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Lightbox keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  // Lock body scroll when lightbox or mobile menu is open
  useEffect(() => {
    if (lightboxIndex !== null || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIndex, mobileMenuOpen]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndRef.current = e.changedTouches[0].screenX;
    const diff = touchEndRef.current - touchStartRef.current;
    if (diff < -45) {
      // Swiped Left -> Next
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
    } else if (diff > 45) {
      // Swiped Right -> Prev
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E12] text-[#F5F5F7] relative selection:bg-[#FF4D8D] selection:text-white">
      {/* Grain Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Ambient Blurred Glowing Blobs */}
      <div className="ambient-blob blob-1" aria-hidden="true" />
      <div className="ambient-blob blob-2" aria-hidden="true" />
      <div className="ambient-blob blob-3" aria-hidden="true" />
      <div className="ambient-blob blob-4" aria-hidden="true" />

      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#0E0E12]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-5 md:px-9 flex items-center justify-between h-[76px]">
          {/* Brand */}
          <a href="#hero" className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-white">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF4D8D] to-[#8B5CF6] flex items-center justify-center text-white text-sm font-black shadow-[0_0_15px_rgba(255,77,141,0.4)]">
              P
            </span>
            <span>Poonam MR</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#9E9EA8]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Selected Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="btn btn-primary">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[76px] inset-x-0 bg-[#0E0E12]/98 backdrop-blur-2xl border-b border-white/10 p-6 z-40">
            <nav className="flex flex-col gap-4 text-lg font-semibold text-[#9E9EA8] mb-6">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">About</a>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">Selected Work</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">Experience</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">Skills</a>
              <a href="#education" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">Education</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-white/5 hover:text-white">Contact</a>
            </nav>
            <div className="flex flex-col gap-3">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary text-center">Hire Me</a>
              <a href="resume.pdf" download="Poonam_MR_Resume.pdf" className="btn btn-secondary text-center">Download Resume</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ==========================================================================
             1. HERO SECTION
             ========================================================================== */}
        <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32 min-h-[85vh] flex items-center">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
              {/* Left Column */}
              <div>
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#9E9EA8] mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
                  <span>Available for Internships</span>
                  <span className="text-white/20">·</span>
                  <span className="text-[#FF4D8D]">Bangalore</span>
                </div>

                <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white mb-5">
                  Poonam <span className="font-serif-accent">MR</span>
                </h1>

                <div className="text-xl sm:text-2xl font-bold text-[#FFD84D] h-10 flex items-center mb-6">
                  <span>{displayedText}</span>
                  <span className="typing-cursor" aria-hidden="true" />
                </div>

                <p className="text-base sm:text-lg text-[#9E9EA8] leading-relaxed max-w-xl mb-9">
                  Creative and motivated BBA student with internship experience in social media marketing, content creation and Canva designing. Eager to learn, grow and build a career in marketing and business.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#work" className="btn btn-primary">
                    See My Work
                    <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="btn btn-secondary">
                    Hire Me
                  </a>
                  <a href="resume.pdf" target="_blank" rel="noopener noreferrer" download="Poonam_MR_Resume.pdf" className="btn btn-glow-yellow">
                    <Download size={18} />
                    Resume
                  </a>
                </div>
              </div>

              {/* Right Column: 3D Mouse Parallax Tilted Work Cards Stack */}
              <div className="relative w-full max-w-[420px] h-[440px] mx-auto" ref={stackRef}>
                {/* Card 1 */}
                <div
                  className="stack-card stack-card-1"
                  style={{
                    transform: `translate(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px) rotate(-10deg)`,
                  }}
                >
                  <img
                    src="images/feed-posts.jpg"
                    alt="Instagram Feed Posts preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="stack-badge">Social Media</span>
                </div>

                {/* Card 2 */}
                <div
                  className="stack-card stack-card-2"
                  style={{
                    transform: `translate(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px) rotate(8deg)`,
                  }}
                >
                  <img
                    src="images/poster.jpg"
                    alt="Poster Design preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="stack-badge">Adobe Poster</span>
                </div>

                {/* Card 3 */}
                <div
                  className="stack-card stack-card-3"
                  style={{
                    transform: `translate(${mouseOffset.x * 20}px, ${mouseOffset.y * 20}px) rotate(-3deg)`,
                  }}
                >
                  <img
                    src="images/food.jpg"
                    alt="Food Photography preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="stack-badge">Photography</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             2. MARQUEE STRIP
             ========================================================================== */}
        <div className="marquee-container" aria-hidden="true">
          <div className="marquee-content">
            <span>Social Media <span className="marquee-star">✦</span> Canva <span className="marquee-star">✦</span> Reels <span className="marquee-star">✦</span> Captions <span className="marquee-star">✦</span> Photography <span className="marquee-star">✦</span> Branding <span className="marquee-star">✦</span> Video Editing <span className="marquee-star">✦</span></span>
            <span>Social Media <span className="marquee-star">✦</span> Canva <span className="marquee-star">✦</span> Reels <span className="marquee-star">✦</span> Captions <span className="marquee-star">✦</span> Photography <span className="marquee-star">✦</span> Branding <span className="marquee-star">✦</span> Video Editing <span className="marquee-star">✦</span></span>
          </div>
        </div>

        {/* ==========================================================================
             3. ABOUT BENTO GRID
             ========================================================================== */}
        <section id="about" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                The Creative Mind
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                About <span className="font-serif-accent">Poonam</span>
              </h2>
              <p className="text-[#9E9EA8] max-w-xl text-base sm:text-lg mt-3">
                A multidisciplinary marketer focused on aesthetics, campaign execution, and audience storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Tile 1: Wide Bio */}
              <div className="glass-card md:col-span-2 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF4D8D] mb-4 block">
                    Vision & Drive
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                    Creative and motivated BBA student with internship experience in social media marketing, content creation and Canva designing.
                  </h3>
                  <p className="text-[#9E9EA8] text-base leading-relaxed">
                    Eager to learn, grow and build a career in marketing and business. Proven record of managing brand social media schedules, producing high-impact Reels, editing product photography, and designing promotional collateral.
                  </p>
                </div>
              </div>

              {/* Tile 2: 20+ Posts & Reels */}
              <div className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="bento-icon-box bento-icon-pink">
                    <Video size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-[#FF4D8D] mb-2">
                    20+ posts & reels created
                  </h3>
                  <p className="text-sm text-[#9E9EA8] leading-relaxed">
                    Published marketing creatives, short-form reels, and story designs across campaigns.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#6B6B78] uppercase tracking-wider mt-6">
                  Production Volume
                </div>
              </div>

              {/* Tile 3: Bangalore Location */}
              <div className="glass-card p-8 flex flex-col justify-between">
                <div>
                  <div className="bento-icon-box bento-icon-yellow">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-white mb-2">
                    Bangalore
                  </h3>
                  <p className="text-sm text-[#9E9EA8] leading-relaxed">
                    Based in Rajajinagar, Bangalore, Karnataka. Ready for in-person or hybrid roles.
                  </p>
                </div>
                <div className="text-[11px] font-bold text-[#FFD84D] uppercase tracking-wider mt-6">
                  Location Hub
                </div>
              </div>

              {/* Tile 4: Creative Tools Stack */}
              <div className="glass-card p-8 flex flex-col justify-between md:col-span-1">
                <div>
                  <div className="bento-icon-box bento-icon-violet">
                    <Layers size={24} />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-white mb-2">
                    Creative Tools
                  </h3>
                  <p className="text-sm text-[#9E9EA8] mb-4">
                    Everyday production toolkit for design, visuals, and copy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'ChatGPT', 'Claude'].map((tool) => (
                      <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tile 5: Internship Status */}
              <div className="glass-card p-8 flex flex-col justify-between md:col-span-1">
                <div>
                  <div className="bento-icon-box bento-icon-pink">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-[#10B981] mb-2">
                    Open to internships
                  </h3>
                  <p className="text-sm text-[#9E9EA8] leading-relaxed">
                    Actively seeking opportunities in social media marketing, content creation, and brand design.
                  </p>
                </div>
                <a href="#contact" className="btn btn-secondary w-full text-center mt-6">
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             4. WORK SHOWCASE (THE STAR)
             ========================================================================== */}
        <section id="work" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                Portfolio Showcase
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Selected <span className="font-serif-accent">Work</span>
              </h2>
              <p className="text-[#9E9EA8] max-w-xl text-base sm:text-lg mt-3">
                Real-world social media design, photography series, Adobe design collateral, and brand marketing.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[44px] px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#FF4D8D] text-white shadow-[0_0_20px_rgba(255,77,141,0.35)]'
                      : 'bg-white/5 border border-white/10 text-[#9E9EA8] hover:text-white hover:bg-white/10'
                  }`}
                  role="tab"
                  aria-selected={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="gallery-card group"
                  tabIndex={0}
                  role="button"
                  aria-label={`View project ${item.title}`}
                >
                  <img
                    src={item.fileName}
                    alt={`${item.title} - ${item.category}`}
                    className="gallery-img"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback placeholder container
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.soft-gradient-placeholder')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'soft-gradient-placeholder';
                        fallback.innerHTML = `
                          <div class="placeholder-neon-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                          </div>
                          <span class="gallery-cat-tag">${item.category}</span>
                          <h4 class="gallery-card-title">${item.title}</h4>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-cat-tag">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
             5. WORK EXPERIENCE TIMELINE
             ========================================================================== */}
        <section id="experience" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                Career Path
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Work <span className="font-serif-accent">Experience</span>
              </h2>
              <p className="text-[#9E9EA8] max-w-xl text-base sm:text-lg mt-3">
                Real brand impact across social strategy, video workflows, and content creation.
              </p>
            </div>

            <div className="timeline-track">
              {/* Role 1 */}
              <div className="glass-card timeline-card">
                <span className="timeline-node" />
                <div className="text-xs font-bold text-[#FFD84D] uppercase tracking-wider mb-2">
                  Aug 2026 - Present
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Media Management & Video Editing
                </h3>
                <p className="text-base font-bold text-[#FF4D8D] mb-4">
                  San Art Studio, Basaveshwar Nagar, Bangalore
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-[#9E9EA8]">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Directing media management workflows, visual curation, and multi-platform video editing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Ensuring dynamic visual consistency and high-impact digital presence across campaigns.</span>
                  </li>
                </ul>
              </div>

              {/* Role 2 */}
              <div className="glass-card timeline-card">
                <span className="timeline-node node-yellow" />
                <div className="text-xs font-bold text-[#FFD84D] uppercase tracking-wider mb-2">
                  3 Months Duration
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Social Media Marketing Intern
                </h3>
                <p className="text-base font-bold text-[#FF4D8D] mb-4">
                  Think Stationary, Bangalore
                </p>
                <ul className="flex flex-col gap-2.5 text-sm text-[#9E9EA8]">
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Managed the brand's Instagram page, including posting schedules and audience engagement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Designed promotional creatives and marketing posts for social media using Canva.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Wrote captions and planned content aligned with the brand's voice and offers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Created short-form Reels to support the brand's content and reach.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Edited product photos and basic marketing visuals for campaigns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={18} className="text-[#FF4D8D] shrink-0 mt-0.5" />
                    <span>Supported day-to-day customer interaction and communication activities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             6. SKILLS CHIPS
             ========================================================================= */}
        <section id="skills" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                Capabilities
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Core <span className="font-serif-accent">Skills</span>
              </h2>
              <p className="text-[#9E9EA8] max-w-xl text-base sm:text-lg mt-3">
                Versatile competencies spanning digital strategy, visual design, and team collaboration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5">
              {SKILLS.map((skill) => (
                <div key={skill} className="skill-glowing-chip">
                  <span className="text-[#FFD84D]">✦</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
             7. EDUCATION
             ========================================================================== */}
        <section id="education" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                Foundation
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                Education <span className="font-serif-accent">& Degrees</span>
              </h2>
              <p className="text-[#9E9EA8] max-w-xl text-base sm:text-lg mt-3">
                Academic trajectory in business administration and foundational studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* BBA */}
              <div className="glass-card p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FF4D8D] mb-2 block">
                    Undergraduate
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Bachelor of Business Administration (BBA)
                  </h3>
                  <p className="text-sm text-[#9E9EA8]">
                    St. Claret College Autonomous, Jalahalli
                  </p>
                </div>
                <div className="text-xs font-bold text-[#FFD84D] mt-6">
                  2025 - 2028 (Pursuing)
                </div>
              </div>

              {/* PUC */}
              <div className="glass-card p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FF4D8D] mb-2 block">
                    Pre-University
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Pre-University Course (PUC)
                  </h3>
                  <p className="text-sm text-[#9E9EA8]">
                    Carmel Pre University College
                  </p>
                </div>
                <div className="text-xs font-bold text-[#FFD84D] mt-6">
                  Completed
                </div>
              </div>

              {/* Secondary */}
              <div className="glass-card p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#FF4D8D] mb-2 block">
                    Secondary
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Secondary Education
                  </h3>
                  <p className="text-sm text-[#9E9EA8]">
                    East West Academy
                  </p>
                </div>
                <div className="text-xs font-bold text-[#FFD84D] mt-6">
                  Completed
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
             8. CONTACT ("LET'S CREATE SOMETHING TOGETHER")
             ========================================================================== */}
        <section id="contact" className="section-pad">
          <div className="max-w-[1240px] mx-auto px-5 md:px-9">
            <div className="glass-card p-8 sm:p-14 bg-radial from-[#FF4D8D]/15 via-[#8B5CF6]/10 to-[#16161D]/80">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#FF4D8D] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-5">
                Let's <span className="font-serif-accent">create</span> something together
              </h2>
              <p className="text-[#9E9EA8] text-base sm:text-lg max-w-2xl leading-relaxed mb-9">
                I'm actively looking for internship and entry-level opportunities in digital marketing and content creation. Reach out to discuss campaigns, designs, or opportunities!
              </p>

              {/* Quick Contact Links */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9">
                <a href="tel:+919380985303" className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF4D8D] hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#FF4D8D]/15 text-[#FF4D8D] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#6B6B78] uppercase">Phone (Tap to call)</div>
                    <div className="text-sm font-bold text-white">+91 93809 85303</div>
                  </div>
                </a>

                <a href="mailto:magajipoonam8@gmail.com" className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD84D] hover:bg-white/10 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#FFD84D]/15 text-[#FFD84D] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#6B6B78] uppercase">Email (Tap to mail)</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[180px]">magajipoonam8@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#6B6B78] uppercase">Location</div>
                    <div className="text-sm font-bold text-white">Rajajinagar, Bangalore</div>
                  </div>
                </div>
              </div>

              {/* Buttons Bar */}
              <div className="flex flex-wrap gap-3.5">
                <a
                  href="https://wa.me/919380985303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Poonam_MR_Resume.pdf"
                  className="btn btn-primary"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==========================================================================
           FULLSCREEN LIGHTBOX MODAL
           ========================================================================== */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[10000] bg-[#0A0A0E]/96 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF4D8D] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close fullscreen preview"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null))}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF4D8D] text-white flex items-center justify-center transition-all cursor-pointer z-20"
              aria-label="Previous work"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Image Box */}
            <div className="w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={filteredItems[lightboxIndex].fileName}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null))}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF4D8D] text-white flex items-center justify-center transition-all cursor-pointer z-20"
              aria-label="Next work"
            >
              <ArrowRight size={20} />
            </button>

            {/* Caption & Counter */}
            <div className="w-full flex items-center justify-between pt-4 text-white">
              <div>
                <span className="text-xs font-bold text-[#FF4D8D] uppercase tracking-wider block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <div className="text-xs font-bold text-[#9E9EA8] bg-white/10 px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-[#09090C] mt-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-9 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display text-lg font-bold text-white">Poonam MR</div>
            <p className="text-xs text-[#9E9EA8] mt-1">
              Digital Marketing Intern · Content Creator · Canva Designer
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6B6B78]">© 2026 Poonam MR. All rights reserved.</p>
            <p className="text-[11px] text-[#6B6B78] mt-0.5">Rajajinagar, Bangalore, Karnataka, India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
