# Zohaib Rukhsar - Personal Portfolio & API Monorepo

> A production-ready, fully responsive, high-performance personal portfolio built with Next.js 14 (App Router) and an Express.js backend. Styled with a custom deep burgundy and champagne theme, bubble glassmorphism, and responsive bento grid layouts.

---

## 1. Monorepo Architecture

```text
portfolio/
├── frontend/                      # Next.js 14 (App Router) + TypeScript + Tailwind CSS
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO, JSON-LD, fonts & dark mode script
│   │   ├── page.tsx               # Main single-page portfolio layout
│   │   ├── not-found.tsx          # Custom 404 handler
│   │   ├── loading.tsx            # Global loading state
│   │   ├── error.tsx              # Error boundary
│   │   ├── sitemap.ts             # Dynamic XML sitemap generator
│   │   ├── robots.ts              # Robots.txt configuration
│   │   ├── opengraph-image.tsx    # Edge-rendered Open Graph social banner (next/og)
│   │   └── globals.css            # Custom burgundy palette & scrollbar styling
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, ScrollProgress, ThemeToggle, MobileMenu
│   │   ├── sections/              # Hero, About, Services, Skills, Experience, Projects, GithubRepos, Education, Contact
│   │   └── ui/                    # Section, BentoCard, Chip, Button, ProjectCard, ProjectModal, Bubble, TypingText, Reveal
│   ├── data/                      # profile.ts, skills.ts, experience.ts, projects.ts, services.ts
│   ├── lib/                       # api.ts, utils.ts, constants.ts
│   ├── hooks/                     # useActiveSection.ts, useReducedMotion.ts
│   ├── public/
│   │   ├── Zohaib_Rukhsar_Resume_Flutter_Developer.pdf   # Downloadable CV document
│   │   └── favicon.ico            # Site favicon
│   ├── .env.example               # Environment template for frontend
│   ├── next.config.mjs            # Remote image patterns for GitHub avatars
│   ├── tailwind.config.ts         # Custom burgundy color palette & utilities
│   ├── tsconfig.json              # Strict TypeScript configuration
│   ├── postcss.config.mjs         # PostCSS plugins
│   ├── vercel.json                # Vercel configuration
│   └── package.json               # Frontend dependencies & scripts
├── backend/                       # Node.js + Express (ESM JavaScript)
│   ├── api/
│   │   └── index.js               # Vercel serverless entry point
│   ├── src/
│   │   ├── app.js                 # Express application (helmet, cors, rate limits, routes)
│   │   ├── server.js              # Local development HTTP server
│   │   ├── config/env.js          # Environment parser & validator
│   │   ├── routes/                # health, contact, profile, projects, github
│   │   ├── controllers/           # contact, profile, projects, github
│   │   ├── services/              # mail.service.js (nodemailer), github.service.js (cached API)
│   │   ├── middleware/            # rateLimiter.js, errorHandler.js, validate.js
│   │   ├── validators/            # contact.schema.js (Zod)
│   │   └── data/                  # profile.js, projects.js
│   ├── .env.example               # Environment template for backend
│   ├── vercel.json                # Serverless route rewrites
│   └── package.json               # Backend dependencies & scripts
├── .gitignore
├── .editorconfig
├── package.json                   # Root monorepo workspace scripts
└── README.md                      # Comprehensive documentation
```

---

## 2. Quick Local Setup & Development

### Prerequisites
- **Node.js**: v18.17+ or v20+ recommended
- **npm**: v9+ (or pnpm / yarn)

### Step 1: Install Dependencies
Run the installation command at the monorepo root:

```bash
# Install root, backend, and frontend dependencies
npm run install:all
```

Alternatively, install individually:
```bash
npm install
cd backend && npm install
cd ../frontend && npm install
cd ..
```

### Step 2: Configure Environment Variables

**Backend (`backend/.env`):**
```bash
cp backend/.env.example backend/.env
```
Fill in the following values in `backend/.env`:
```ini
PORT=5000
FRONTEND_URL=http://localhost:3000
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_TO_EMAIL=zohaibmalikzm401@gmail.com
GITHUB_USERNAME=zohaib-malik6
GITHUB_TOKEN=
```

**Frontend (`frontend/.env.local`):**
```bash
cp frontend/.env.example frontend/.env.local
```
Fill in the following values in `frontend/.env.local`:
```ini
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Step 3: Run Development Servers
From the repository root, execute:
```bash
npm run dev
```
This spins up both:
- **Backend API**: `http://localhost:5000` (Health check: `http://localhost:5000/api/health`)
- **Frontend Next.js**: `http://localhost:3000`

---

## 3. How to Generate a Gmail App Password

For the contact form to dispatch emails via Gmail SMTP, you must configure a 16-character **App Password**:

1. Log into your Google Account at [myaccount.google.com](https://myaccount.google.com).
2. Go to **Security** on the left menu.
3. Under "How you sign in to Google", ensure **2-Step Verification** is turned **ON**.
4. In the search bar at the top, type `App passwords` and select the result.
5. In the "App name" field, enter `Portfolio Contact Form` and click **Create**.
6. Google will generate a 16-character passcode (e.g. `abcd efgh ijkl mnop`).
7. Copy this string (without spaces) and paste it into:
   - `SMTP_PASS` in `backend/.env`
   - Set `SMTP_USER` to your Gmail address.

*Note: If SMTP credentials are omitted, the backend responds with HTTP 503, and the frontend contact form gracefully falls back to opening the user's prefilled local mail client (`mailto:`).*

---

## 4. Vercel Deployment Guide

Deploy this repository as **TWO distinct Vercel projects** linked to the same GitHub repository.

### Project 1: Backend API (Serverless Express)

#### Option A: Via Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new) and import your Git repository.
2. In the project settings:
   - **Project Name**: `zohaib-portfolio-backend`
   - **Framework Preset**: `Other`
   - **Root Directory**: Click "Edit" and select `backend`.
3. Under **Environment Variables**, add:
   - `FRONTEND_URL`: Temporary placeholder (e.g. `http://localhost:3000` or your intended frontend domain).
   - `SMTP_USER`: Your Gmail address.
   - `SMTP_PASS`: Your 16-character Gmail App Password.
   - `CONTACT_TO_EMAIL`: `zohaibmalikzm401@gmail.com`
   - `GITHUB_USERNAME`: `zohaib-malik6`
   - `GITHUB_TOKEN`: *(Optional, for higher GitHub rate limits)*
4. Click **Deploy**. Note the assigned URL (e.g., `https://zohaib-portfolio-backend.vercel.app`).

#### Option B: Via Vercel CLI
```bash
vercel --cwd backend
```

---

### Project 2: Frontend (Next.js 14)

#### Option A: Via Vercel Dashboard
1. Return to [vercel.com/new](https://vercel.com/new) and import the same repository again.
2. In the project settings:
   - **Project Name**: `zohaib-portfolio-frontend`
   - **Framework Preset**: `Next.js`
   - **Root Directory**: Click "Edit" and select `frontend`.
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_API_URL`: The deployed Backend URL from Step 1 (e.g., `https://zohaib-portfolio-backend.vercel.app`).
   - `NEXT_PUBLIC_SITE_URL`: Your production custom domain or frontend Vercel URL (e.g., `https://zohaib-portfolio-frontend.vercel.app`).
4. Click **Deploy**.

#### Option B: Via Vercel CLI
```bash
vercel --cwd frontend
```

---

### Final Step: Update CORS on Backend
1. Once your frontend is live, copy its public URL (e.g., `https://zohaib-portfolio-frontend.vercel.app`).
2. Go to your Backend project in the Vercel Dashboard &rarr; **Settings** &rarr; **Environment Variables**.
3. Update `FRONTEND_URL` to match your frontend production URL.
4. Trigger a Redeployment on the Backend (**Deployments** &rarr; **Redeploy**).

---

## 5. Troubleshooting & Diagnostics

| Symptom | Root Cause | Fix |
| :--- | :--- | :--- |
| **CORS error on contact form** | Backend `FRONTEND_URL` doesn't match frontend domain | Ensure `FRONTEND_URL` in backend env matches your exact frontend URL (including `https://` without a trailing slash). |
| **503 Service Unavailable on `/api/contact`** | `SMTP_USER` or `SMTP_PASS` not set in backend env | The API gracefully returns 503 if credentials are missing. The frontend automatically opens `mailto:`. Set valid Gmail App credentials to enable automated sending. |
| **Images not loading (GitHub avatar)** | Hostname not in `remotePatterns` | `next.config.mjs` is configured for `github.com` and `avatars.githubusercontent.com`. If using an external image host, add it to `images.remotePatterns`. |
| **404 on Vercel backend endpoints** | Incorrect Root Directory setting | Ensure the Backend project has **Root Directory** set to `backend` in Vercel project settings so `backend/vercel.json` rewrites to `api/index.js`. |
| **Rate limit warning on GitHub repos** | GitHub unauthenticated IP threshold (60 req/hr) | Add a GitHub Personal Access Token to `GITHUB_TOKEN` in the backend environment. Cached responses persist for 10 minutes. |

---

## 6. Customization Checklist

- [ ] **Resume PDF**: Replace the placeholder `frontend/public/Zohaib_Rukhsar_Resume_Flutter_Developer.pdf` with your actual updated resume.
- [ ] **Google Play Link**: In `frontend/data/projects.ts` (and `backend/src/data/projects.js`), update the `playStore` URL on project `qr-vertex` to your live Google Play Store URL.
- [ ] **GitHub Repository Links**: Add specific repository links to individual projects in `projects.ts` once ready.
- [ ] **Social & Contact Details**: Verify WhatsApp number formatting in `frontend/data/profile.ts` (`+92 342 0442565`).
- [ ] **Custom Domain**: Point your custom domain (e.g. `zohaibrukhsar.dev`) in Vercel and update `NEXT_PUBLIC_SITE_URL`.

