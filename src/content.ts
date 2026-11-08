/**
 * ==========================================================================
 * POONAM MR — ALL EDITABLE PORTFOLIO CONTENT IN ONE PLACE
 * ==========================================================================
 * Edit your headlines, bio, education, experience, case studies, skills, and
 * links right here in this single file.
 */

// 1. HERO SECTION
export const HERO_CONTENT = {
  headlineStart: "I turn ideas into content people ",
  headlineKeyWord: "actually engage",
  headlineEnd: " with.",
  fullHeadline: "I turn ideas into content people actually engage with.",
  subline: "Digital Media Marketing Intern & Content Creator, Bangalore",
  primaryCtaText: "See my work",
  secondaryCtaText: "Download resume",
  statusBadgeText: "Open to internships",
  statusLocation: "Bangalore",
  // 3 quick skill chips displayed in the hero bento cluster
  heroSkillChips: [
    "Short-Form Reels",
    "Content Strategy",
    "Visual Storytelling"
  ],
  // 2 featured images in hero cluster
  heroFeatureImages: [
    {
      id: "social-feed",
      src: "/images/feed-posts.jpg",
      tag: "Social Post",
      title: "Feed Campaigns"
    },
    {
      id: "social-stories",
      src: "/images/story-designs.jpg",
      tag: "Stories",
      title: "Interactive Formats"
    }
  ]
};

// 2. ABOUT SECTION
export const ABOUT_CONTENT = {
  sectionLabel: "01 - ABOUT",
  headingLead: "A fresher marketer with an eye for ",
  headingKeyWord: "what clicks.",
  bioParagraphs: [
    "Hey, I'm Poonam! I'm a BBA student and marketing fresher based in Bangalore with a passion for social media strategy and content creation.",
    "I love turning raw brand ideas into scroll-stopping visuals, short-form reels, and story sequences that build genuine audience connection.",
    "With hands-on experience managing official Instagram schedules, styling product photography, and editing campaign assets, I'm eager to experiment, learn fast, and create high-performing marketing content."
  ],
  // 3 highlight tiles in the About section
  highlightTiles: [
    {
      id: "highlight-content",
      title: "Content Creation",
      description: "Hook-driven short-form reels, visual carousels, and engaging copy written for audience retention.",
      iconName: "Video"
    },
    {
      id: "highlight-social",
      title: "Social Media",
      description: "Feed curation, calendar scheduling, audience engagement, and consistency across campaigns.",
      iconName: "TrendingUp"
    },
    {
      id: "highlight-photo",
      title: "Photography",
      description: "Natural light product staging, culinary framing, and aesthetic visual documentation.",
      iconName: "Camera"
    }
  ]
};

// 3. EDUCATION SECTION
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  years: string;
  relevantDetails: string;
}

export const EDUCATION_CONTENT: EducationItem[] = [
  {
    id: "edu-bba",
    degree: "Bachelor of Business Administration (BBA)",
    institution: "St. Claret College Autonomous, Jalahalli, Bangalore",
    years: "2025 - 2028 (Pursuing)",
    relevantDetails: "Focusing on Marketing Management, Business Communication, Consumer Behavior, and Digital Strategy."
  },
  {
    id: "edu-puc",
    degree: "Pre-University Course (PUC)",
    institution: "Carmel Pre University College, Bangalore",
    years: "Completed",
    relevantDetails: "Commerce stream with foundation in Business Studies, Accountancy, and Economics."
  },
  {
    id: "edu-school",
    degree: "Secondary Education",
    institution: "East West Academy, Bangalore",
    years: "Completed",
    relevantDetails: "Core academic coursework with active participation in creative and cultural events."
  }
];

// 4. EXPERIENCE & INTERNSHIPS SECTION
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
}

export const EXPERIENCE_CONTENT: ExperienceItem[] = [
  {
    id: "exp-san-art",
    role: "Media Management & Video Editing",
    company: "San Art Studio",
    location: "Basaveshwar Nagar, Bangalore",
    period: "Aug 2026 - Present",
    bullets: [
      "Directing end-to-end media management workflows, visual asset curation, and cross-platform video editing.",
      "Ensuring brand voice consistency, aesthetic polish, and high-impact digital presence across active campaigns."
    ]
  },
  {
    id: "exp-think-stat",
    role: "Social Media Marketing Intern",
    company: "Think Stationary",
    location: "Bangalore",
    period: "3 Months Duration",
    bullets: [
      "Managed the brand's official Instagram page, publishing schedules, and community audience engagement.",
      "Designed promotional creatives and marketing posts tailored for audience retention.",
      "Wrote compelling copy, captions, and planned content strategies aligned with brand product offers.",
      "Created short-form Reels to expand organic brand reach and foster customer discovery.",
      "Curated and edited product photography and basic marketing visuals for active campaigns.",
      "Supported day-to-day customer interaction and brand communication activities."
    ]
  }
];

export const CERTIFICATIONS_CONTENT: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Digital Marketing Fundamentals",
    issuer: "Certification / Coursework"
  },
  {
    id: "cert-2",
    title: "Social Media Strategy & Reels",
    issuer: "Practical Internship Training"
  },
  {
    id: "cert-3",
    title: "Visual Design & Asset Creation",
    issuer: "Studio Production Workshop"
  }
];

// 5. WORK & CASE STUDIES SECTION (All 17 verified images)
export interface PortfolioItem {
  id: string;
  title: string;
  category: "Social Posts" | "Stories" | "Product" | "Events" | "Photography" | "Branding";
  fileName: string;
  bentoSpan?: string; // Optional CSS Grid span classes
  goal: string;
  whatIDid: string;
  result: string; // Honest placeholder: "Add result here"
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "social-feed",
    title: "Instagram Feed Campaigns",
    category: "Social Posts",
    fileName: "/images/feed-posts.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-2", // Large Hero Tile
    goal: "Design a cohesive multi-post campaign grid to introduce new product arrivals.",
    whatIDid: "Structured 3-column feed layouts, coordinated color palettes, and wrote promotional copy.",
    result: "Add result here"
  },
  {
    id: "social-stories",
    title: "Interactive Story Formats",
    category: "Stories",
    fileName: "/images/story-designs.jpg",
    bentoSpan: "col-span-1 row-span-2", // Tall Tile
    goal: "Boost daily audience interaction and drive website link clicks via stories.",
    whatIDid: "Created vertical templates with poll stickers, swipe-up hooks, and announcement banners.",
    result: "Add result here"
  },
  {
    id: "photo-product",
    title: "Commercial Product Shoot",
    category: "Product",
    fileName: "/images/product.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Showcase fine product craftsmanship and premium textures for retail listings.",
    whatIDid: "Handled studio lighting, product staging, and post-production color balance.",
    result: "Add result here"
  },
  {
    id: "photo-lifestyle",
    title: "Lifestyle Editorial Staging",
    category: "Product",
    fileName: "/images/lifestyle.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Create relatable lifestyle imagery that puts the product in everyday context.",
    whatIDid: "Directed casual styling, outdoor natural light composition, and color grading.",
    result: "Add result here"
  },
  {
    id: "photo-event",
    title: "Live Event Documentation",
    category: "Events",
    fileName: "/images/event.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-1", // Wide Tile
    goal: "Document vibrant energy, guest reactions, and key speakers at a community event.",
    whatIDid: "Captured fast-paced live moments, candid attendee emotions, and keynote highlights.",
    result: "Add result here"
  },
  {
    id: "photo-food",
    title: "Culinary & Food Styling",
    category: "Photography",
    fileName: "/images/food.jpg",
    bentoSpan: "col-span-1 row-span-2", // Tall Tile
    goal: "Produce appetizing culinary visuals for cafe menu and promotional social feeds.",
    whatIDid: "Styled table props, utilized soft directional window light, and accented fresh textures.",
    result: "Add result here"
  },
  {
    id: "photo-nature",
    title: "Botanical Nature Study",
    category: "Photography",
    fileName: "/images/nature.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Capture subtle morning textures and atmospheric organic depth.",
    whatIDid: "Framed macro botanical details using natural shallow depth of field.",
    result: "Add result here"
  },
  {
    id: "photo-sunset-1",
    title: "Sunset Atmosphere I",
    category: "Photography",
    fileName: "/images/sunset-1.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Study natural twilight color transitions across the Bangalore horizon.",
    whatIDid: "Captured golden hour gradient transitions with high dynamic range exposure.",
    result: "Add result here"
  },
  {
    id: "photo-sunset-2",
    title: "Sunset Atmosphere II",
    category: "Photography",
    fileName: "/images/sunset-2.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Capture silhouette contrasts against deep evening orange skies.",
    whatIDid: "Framed horizon silhouettes and balanced highlights during dusk.",
    result: "Add result here"
  },
  {
    id: "photo-kedarnath",
    title: "Kedarnath Expedition",
    category: "Photography",
    fileName: "/images/kedarnath.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature Tile
    goal: "Document high-altitude temple grandeur and Himalayan pilgrim atmosphere.",
    whatIDid: "Hiked mountain routes with gear, capturing cold mountain light and architecture.",
    result: "Add result here"
  },
  {
    id: "adobe-logo",
    title: "Brand Identity — Sip Glitz",
    category: "Branding",
    fileName: "/images/logo-sip-glitz.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Design a recognizable modern logo mark for an artisanal beverage label.",
    whatIDid: "Developed vector marks, refined typography balance, and established color system.",
    result: "Add result here"
  },
  {
    id: "adobe-visiting-card",
    title: "Visiting Card Stationery",
    category: "Branding",
    fileName: "/images/visiting-card.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Create clean, print-ready corporate business cards with clear hierarchy.",
    whatIDid: "Engineered double-sided layout with bleed margins and legible contact structure.",
    result: "Add result here"
  },
  {
    id: "adobe-poster",
    title: "Promotional Event Poster",
    category: "Branding",
    fileName: "/images/poster.jpg",
    bentoSpan: "col-span-1 row-span-2", // Tall Tile
    goal: "Craft a high-impact advertising poster for public event announcements.",
    whatIDid: "Combined bold typography scales, graphic accents, and date/venue clarity.",
    result: "Add result here"
  },
  {
    id: "adobe-brochure-front",
    title: "Brochure Cover Design",
    category: "Branding",
    fileName: "/images/brochure-front.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Design an inviting front cover that immediately communicates brand mission.",
    whatIDid: "Balanced headline copy, brand badge, and imagery for clean folding alignment.",
    result: "Add result here"
  },
  {
    id: "adobe-brochure-back",
    title: "Brochure Information Architecture",
    category: "Branding",
    fileName: "/images/brochure-back.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Structure detailed service explanations and contact details for prospective clients.",
    whatIDid: "Created scannable bullet columns, icon points, and call-to-action blocks.",
    result: "Add result here"
  },
  {
    id: "adobe-software-fonts",
    title: "Type System & Font Stack",
    category: "Branding",
    fileName: "/images/software-fonts.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-1", // Wide Tile
    goal: "Document font pairings and software tools used across creative collateral.",
    whatIDid: "Curated editorial font hierarchy and toolset documentation.",
    result: "Add result here"
  },
  {
    id: "brand-indima-spices",
    title: "Indima Spices Price List",
    category: "Branding",
    fileName: "/images/indima-pricelist.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-1", // Wide Tile
    goal: "Produce an organized, legible price menu for home-crafted spice products.",
    whatIDid: "Formatted tables, packaging units, and clear pricing categories.",
    result: "Add result here"
  },
  {
    id: "photo-wildflowers",
    title: "Wildflower Macro Botanical Study",
    category: "Photography",
    fileName: "/images/wildflowers-botanical.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature Tile
    goal: "Capture vibrant floral textures, petal curvature, and fine botanical dew in natural diffused daylight.",
    whatIDid: "Composed close-up macro framing, balanced foreground petal depth, and captured crisp botanical micro-textures.",
    result: "Add result here"
  },
  {
    id: "photo-bangalore-night",
    title: "Bangalore Nightlife & City Lights",
    category: "Events",
    fileName: "/images/bangalore-nightlife.jpg",
    bentoSpan: "col-span-1 md:col-span-2 row-span-2", // Large Feature Tile
    goal: "Document bustling Bangalore commercial avenue atmosphere under festive fairy light canopies.",
    whatIDid: "Balanced ambient night exposure, vehicle motion trails, storefront illumination, and illuminated brand billboards.",
    result: "Add result here"
  },
  {
    id: "photo-forest-trek",
    title: "Western Ghats Forest Expedition",
    category: "Photography",
    fileName: "/images/forest-trek.jpg",
    bentoSpan: "col-span-1 row-span-2", // Tall Tile
    goal: "Document adventurous monsoon trail hiking through dense forest terrain and rocky climbs.",
    whatIDid: "Captured candid hiker movement, rocky pathway depth, and atmospheric green canopy depth in rain conditions.",
    result: "Add result here"
  },
  {
    id: "photo-mysore-lights",
    title: "Festive Street Illuminations & Chandeliers",
    category: "Events",
    fileName: "/images/mysore-illuminations.jpg",
    bentoSpan: "col-span-1 row-span-2", // Tall Tile
    goal: "Capture the grandeur of overhead illuminated light strings and cultural street festival celebrations.",
    whatIDid: "Controlled high-contrast night light glow, golden chandelier reflections, and vibrant evening traffic ambience.",
    result: "Add result here"
  },
  {
    id: "photo-sky-canopy",
    title: "Forest Canopy & Azure Skies",
    category: "Photography",
    fileName: "/images/sky-canopy.jpg",
    bentoSpan: "col-span-1 row-span-1", // Standard Tile
    goal: "Frame an upward perspective of treetop foliage reaching against open blue skies and clouds.",
    whatIDid: "Utilized low-angle vertical composition, balanced daylight dynamic range, and captured rich foliage greens.",
    result: "Add result here"
  }
];

export const WORK_CATEGORIES = [
  "All",
  "Social Posts",
  "Stories",
  "Product",
  "Events",
  "Photography",
  "Branding"
] as const;

// 6. SKILLS AND TOOLS SECTION
export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
  accentColor: string;
  iconName: string;
}

export const SKILLS_CONTENT: SkillGroup[] = [
  {
    id: "skill-content",
    title: "Content & Video Production",
    description: "Hands-on execution of high-retention short-form reels, visual carousels, and compelling brand narratives.",
    items: ["Short-Form Reels", "Video Pacing & Hooks", "Audience Retention Storytelling"],
    accentColor: "#FF5C39", // coral
    iconName: "Video"
  },
  {
    id: "skill-strategy",
    title: "Social Growth Strategy",
    description: "Translating brand objectives into consistent organic discovery, calendar pacing, and community engagement.",
    items: ["Campaign Pacing", "Social SEO & Keywords", "Audience Analytics Basics"],
    accentColor: "#6C4CF1", // violet
    iconName: "TrendingUp"
  },
  {
    id: "skill-tools",
    title: "Creative Tools & Platforms",
    description: "Proficiency across daily editing, design, discovery, and publishing tools (Canva is just one tool in the stack).",
    items: ["CapCut", "Canva", "Pinterest", "Photoshop", "Meta Business Suite"],
    accentColor: "#00F0FF", // cyan
    iconName: "Wrench"
  }
];

// 6B. 3D STEPPED CREATIVE TOOLS & EDITING SUITE (CapCut, Canva, Pinterest, and more)
export interface CreativeTool {
  id: string;
  name: string;
  category: string;
  pedestalLevel: number; // 1 to 6 (stepped height)
  accentColor: string;
  glowColor: string;
  badge: string;
  description: string;
  keyWorkflows: string[];
}

export const CREATIVE_TOOLS_CONTENT = {
  sectionLabel: "3D CREATIVE TOOLS STACK",
  titleLead: "Editing & Production Suite on ",
  titleKeyWord: "Stepped Pedestals",
  subline: "From high-energy video pacing in CapCut to viral moodboarding in Pinterest and branded visual design in Canva — each tool occupies a dedicated tier in Poonam's daily creative pipeline.",
  image: "/images/poonam-3d-tools-steps.jpg",
  tools: [
    {
      id: "tool-capcut",
      name: "CapCut",
      category: "Video Editing & Motion",
      pedestalLevel: 5,
      accentColor: "#00F0FF",
      glowColor: "rgba(0, 240, 255, 0.4)",
      badge: "Reels & Shorts",
      description: "Primary engine for dynamic video assembly: precise beat-matching, speed ramping, keyframe zooms, auto-captions with custom font styling, and atmospheric sound design.",
      keyWorkflows: ["Beat-synced jump cuts & speed ramps", "B-roll text overlays & animated sound effects", "Retention-focused first 3-second pacing"]
    },
    {
      id: "tool-canva",
      name: "Canva Pro",
      category: "Social Design & Layouts",
      pedestalLevel: 4,
      accentColor: "#7928CA",
      glowColor: "rgba(121, 40, 202, 0.4)",
      badge: "Graphics & Carousels",
      description: "Fast-turnaround graphic staging: multi-slide educational carousels, promotional story templates, event posters, and brand asset consistency.",
      keyWorkflows: ["Multi-slide Instagram carousels", "Brand kit consistency & typography", "Promotional banners & price lists"]
    },
    {
      id: "tool-pinterest",
      name: "Pinterest",
      category: "Trend Curation & Moodboards",
      pedestalLevel: 3,
      accentColor: "#E60023",
      glowColor: "rgba(230, 0, 35, 0.4)",
      badge: "Inspiration & Aesthetics",
      description: "Visual research and discovery hub: curating lighting moods, color palettes, editorial layout references, and seasonal trend forecasting before starting any shoot.",
      keyWorkflows: ["Campaign moodboarding & aesthetic boards", "Color palette & lighting study", "Visual hook reference curation"]
    },
    {
      id: "tool-photoshop",
      name: "Photoshop & Lightroom",
      category: "Image Grading & Retouching",
      pedestalLevel: 5,
      accentColor: "#31A8FF",
      glowColor: "rgba(49, 168, 255, 0.4)",
      badge: "Editorial Photo",
      description: "Pro-level image refinement: RAW exposure correction, selective color grading, skin retouching, generative object removal, and crisp print preparation.",
      keyWorkflows: ["RAW exposure & golden hour color grading", "Generative fill & background cleanup", "Print collateral bleed setup (cards, brochures)"]
    },
    {
      id: "tool-meta",
      name: "Instagram & Meta Suite",
      category: "Distribution & Community",
      pedestalLevel: 2,
      accentColor: "#FF5C39",
      glowColor: "rgba(255, 92, 57, 0.4)",
      badge: "Publishing & Reach",
      description: "Direct brand management: grid layout planning, scheduling prime-time feed releases, story polls and quiz stickers, and monitoring engagement velocity.",
      keyWorkflows: ["Grid aesthetic & 3-column planning", "Meta Business Suite scheduling", "Story sticker interaction & community DMs"]
    },
    {
      id: "tool-ai",
      name: "Claude & ChatGPT",
      category: "AI Ideation & Scripts",
      pedestalLevel: 6,
      accentColor: "#10B981",
      glowColor: "rgba(16, 185, 129, 0.4)",
      badge: "Copy & Strategy",
      description: "Creative brainstorm co-pilot: developing 10+ hook variations per reel, scripting educational voiceovers, and analyzing audience search intent.",
      keyWorkflows: ["Scroll-stopping reel hooks (0-3s)", "Captions tailored for comments & saves", "Content calendar brainstorm sprints"]
    }
  ]
};

// 7. AI CREATIVE WORKFLOW & IMAGE EDITING
export const AI_WORKFLOW_CONTENT = {
  sectionLabel: "AI CREATIVE WORKFLOW",
  titleLead: "Picture Editing & Creative Direction with ",
  titleKeyWord: "AI Tools",
  subline: "Harnessing Claude, ChatGPT, Midjourney, Gemini, and Photoshop AI to edit pictures, test prompt variations, brainstorm viral hooks, and produce campaign assets faster.",
  image: "/images/poonam-ai-workstation.jpg",
  tools: [
    {
      name: "ChatGPT",
      company: "OpenAI",
      focus: "Hooks, captions & copy ideation",
      color: "#10A37F",
      badgeClass: "text-[#10A37F] bg-[#10A37F]/10 border-[#10A37F]/30"
    },
    {
      name: "Claude",
      company: "Anthropic",
      focus: "Storytelling & strategy frameworks",
      color: "#D97706",
      badgeClass: "text-[#D97706] bg-[#D97706]/10 border-[#D97706]/30"
    },
    {
      name: "Midjourney",
      company: "AI Imaging",
      focus: "High-concept visual moodboards",
      color: "#6366F1",
      badgeClass: "text-[#6366F1] bg-[#6366F1]/10 border-[#6366F1]/30"
    },
    {
      name: "Gemini",
      company: "Google",
      focus: "Visual analysis & search trends",
      color: "#3B82F6",
      badgeClass: "text-[#3B82F6] bg-[#3B82F6]/10 border-[#3B82F6]/30"
    },
    {
      name: "Photoshop AI",
      company: "Adobe Firefly",
      focus: "Generative fill & photo retouching",
      color: "#0284C7",
      badgeClass: "text-[#0284C7] bg-[#0284C7]/10 border-[#0284C7]/30"
    }
  ],
  capabilities: [
    {
      title: "AI Picture Editing & Generative Retouching",
      description: "Using Photoshop Generative Fill and AI enhancers to expand backgrounds, clean complex textures, remove unwanted objects, and produce crisp social creatives."
    },
    {
      title: "Prompt Engineering & Visual Concepting",
      description: "Drafting descriptive visual prompts with lighting, composition, lens parameters, and mood direction to visualize campaign concepts before production."
    },
    {
      title: "Hook & Copy Synthesis (Claude & ChatGPT)",
      description: "Rapidly generating and testing 10+ hook variations per reel, crafting audience-tailored captions, and analyzing high-retention social content formats."
    }
  ]
};

// 8. CONTACT & SOCIAL LINKS
export const CONTACT_CONTENT = {
  sectionLabel: "06 - CONTACT",
  headingLead: "Let's build content people ",
  headingKeyWord: "actually talk about.",
  subline: "Open to digital marketing internships, entry-level social media roles, and creative brand collaborations in Bangalore or remote.",
  name: "Poonam MR",
  role: "Digital Media Marketing Intern & Content Creator",
  location: "Rajajinagar, Bangalore, Karnataka, India",
  email: "magajipoonam8@gmail.com",
  phone: "+91 93809 85303",
  whatsappUrl: "https://wa.me/919380985303",
  instagramUrl: "https://instagram.com/poonammr", // Placeholder link
  linkedinUrl: "https://linkedin.com/in/poonammr", // Placeholder link
  resumeUrl: "resume.pdf",
  resumeFileName: "Poonam_MR_Resume.pdf",
  footerCopyright: "© 2026 Poonam MR · Bangalore, India"
};
