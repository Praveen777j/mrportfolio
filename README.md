# Poonam MR — Creative Studio & Digital Marketing Portfolio

A bold, modern, visual-first portfolio website for **Poonam MR** — Digital Marketing Intern, Content Creator, and Canva Designer from Bangalore.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**, configured for zero-configuration deployment on **Vercel** via GitHub.

---

## 🌟 What This App Does

- **Dark Studio Visual Direction**: Deep charcoal background (`#0E0E12`), glowing glassmorphism cards, ambient neon orbs (hot pink `#FF4D8D`, electric yellow `#FFD84D`, violet `#8B5CF6`), and fluid typography.
- **Hero Section**: Dynamic typing/rotating tagline (*Social Media Marketer / Content Creator / Canva Designer*), and a 3D tilted card stack (`feed-posts.jpg`, `poster.jpg`, `food.jpg`) that shifts with mouse parallax.
- **Infinite Marquee**: Continuous ticker highlighting core competencies (*Social Media ✦ Canva ✦ Reels ✦ Captions ✦ Photography ✦ Branding ✦ Video Editing*).
- **About Bento Grid**: Multi-sized glass tiles detailing background, production stats (*20+ posts and reels created*), Bangalore location, creative tools stack (*Canva, Adobe Photoshop, Adobe Illustrator, ChatGPT, Claude*), and internship availability.
- **Work Showcase (The Star)**: Category filter pills (*All, Social Media, Photography, Adobe Projects, Brand*) with a responsive masonry grid of 17 high-resolution portfolio images and full-screen lightbox modal with mobile touch swipe, keyboard navigation, and soft-gradient fallback placeholders.
- **Career Experience Timeline**: Glowing vertical timeline for *San Art Studio* and *Think Stationary*.
- **Skills Cloud**: Interactive glowing neon pill chips.
- **Education & Credentials**: Cards for *St. Claret College Autonomous (BBA 2025–2028)*, *Carmel Pre University College*, and *East West Academy*.
- **Contact & Call to Action**: Tap-to-call (`+91 93809 85303`), tap-to-mail (`magajipoonam8@gmail.com`), WhatsApp direct chat, location, and resume download (`resume.pdf`).

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Deployment**: Vercel (with `vercel.json` SPA rewrites)

---

## 💻 How to Run Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Run TypeScript lint check**:
   ```bash
   npm run lint
   ```
4. **Create a production build**:
   ```bash
   npm run build
   ```
5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🔑 Environment Variables

No environment variables or API keys are required for this site.

---

## 🚀 How to Deploy to Vercel via GitHub

1. **Initialize Git & commit all files**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Poonam MR portfolio"
   git branch -M main
   ```
2. **Push to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
   git push -u origin main
   ```
3. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your GitHub repository.
   - Vercel automatically detects the Vite framework preset, `dist` output directory, and `npm run build` command.
   - Click **Deploy**. The site will build and deploy instantly with zero configuration!
