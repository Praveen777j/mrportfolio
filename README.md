# Poonam MR — Digital Media Marketing Intern & Content Creator Portfolio

A modern, attractive, clean single-page Bento Grid portfolio website for **Poonam MR** — Digital Media Marketing Intern and Content Creator based in Bangalore.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**, configured for zero-configuration deployment on **Vercel** via GitHub.

---

## 🎨 Theme & Visual Architecture

- **Exact Color Palette**:
  - Cream Background: `#FFF8F0`
  - Ink Accent / Work Background: `#1B1B1F`
  - Main Accent Coral: `#FF5C39`
  - Secondary Violet: `#6C4CF1`
  - Highlight Lime: `#D9F76B`
  - Card White: `#FFFFFF`
  - Soft Border: `#EADFD3`
- **Alternating Section Flow**:
  - `Hero` (Cream)
  - `01 - ABOUT` (White)
  - `02 - EDUCATION` (Cream)
  - `03 - EXPERIENCE` (White)
  - `04 - WORK` (Dark Ink)
  - `05 - SKILLS & TOOLS` (White)
  - `06 - CONTACT` (Cream with Large Coral CTA Tile)
- **Sharp Modern Shapes (`--radius: 6px`)**:
  - 6px border radius on all cards, boxes, tiles, text boxes, buttons, tags/pills, image frames, and the lightbox modal.
  - 1px solid border in soft border color (`#EADFD3`).
  - Small flat offset shadow (`4px 4px 0 #1B1B1F`) on hover only.
- **Typography**: Google Fonts `"Bricolage Grotesque"` (bold headings with `clamp(2.2rem, 6vw, 5rem)`) and `"Inter"` for high-contrast body text (16–18px).
- **Small Friendly Details**:
  - Rotated sticker-style badge: `"Open to internships"`
  - Thick lime (`#D9F76B`) or coral (`#FF5C39`) underline on one key word per heading
  - Pill-shaped category filter tags and rounded icon chips (Lucide icons only)

---

## 📝 Edit All Content in One Place: `src/content.ts`

All editable text, headlines, education, experience, case studies, skills, and links are organized inside a single file:
👉 **`src/content.ts`**

- **Headline & Hero**: `HERO_CONTENT`
- **About Narrative**: `ABOUT_CONTENT`
- **Education Timeline**: `EDUCATION_CONTENT`
- **Experience Timeline & Certifications**: `EXPERIENCE_CONTENT` & `CERTIFICATIONS_CONTENT`
- **Work Case Studies (17 verified images)**: `PORTFOLIO_ITEMS` (with `goal`, `whatIDid`, and honest `result: "Add result here"`)
- **Skills Bento (Content, Strategy, Tools)**: `SKILLS_CONTENT` (Canva is listed strictly as one tool in the Tools list)
- **Contact & Social Links**: `CONTACT_CONTENT`

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

## 🚀 How to Deploy to Vercel via GitHub

1. **Initialize Git & commit all files**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Poonam MR sharp bento grid portfolio"
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
   - Click **Deploy**. The site builds and deploys instantly with zero configuration!
