# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Start full dev environment (client + server concurrently)
npm run dev

# Start only the Vite client (port 8080)
npm run dev-client

# Start only the chatbot Express server (port 3001)
npm run dev-server

# Production build
npm run build

# Lint
npm run lint

# Preview production build
npm run preview
```

There are no tests in this project.

## Architecture

This is the marketing/company website for **Shivakriti Tech**, a Vadodara-based AI/software company. The stack is React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui.

### Two-process dev setup

`npm run dev` runs both processes via `concurrently`:
- **Vite client** on port 8080 (`src/`)
- **Express chatbot server** on port 3001 (`server/server.js`) — uses Gemini 2.0 Flash via `@google/generative-ai`, reads its knowledge base from `public/kb.txt`

The chatbot server requires `server/.env` with `GEMINI_API_KEY`. The `<Chatbot />` component is currently commented out in [App.tsx](src/App.tsx).

### Frontend routing

Single-page app with `react-router-dom`. Routes defined in [App.tsx](src/App.tsx):
- `/` → [Index.tsx](src/pages/Index.tsx) — the main landing page, composed of section components
- `/blog`, `/blog/:id` → [Blog.tsx](src/pages/Blog.tsx) / [BlogPost.tsx](src/pages/BlogPost.tsx) — blog data lives in [src/lib/blog-data.ts](src/lib/blog-data.ts)
- `/privacy`, `/terms`, `/sitemap` → static legal/info pages

### Landing page sections

[Index.tsx](src/pages/Index.tsx) assembles section components in order: `Navbar → Hero → Services → CaseStudies → About → Contact → Footer`. Navigation to anchored sections from other routes uses `location.state.hash` + `scrollIntoView`.

### Contact form

[Contact.tsx](src/components/Contact.tsx) submits via **EmailJS** (`emailjs-com`). The form has client-side validation and an AI message refinement stub (currently shows a toast — needs API key wiring).

### UI components

`src/components/ui/` contains the full shadcn/ui component library. Custom components outside of `ui/` are the page sections. The `@` alias resolves to `src/`.

### Special integrations

- **`lightswind`** — provides the `<SmokeyCursor />` canvas effect rendered globally in [App.tsx](src/App.tsx). The local copy is at [src/components/lightswind/smokey-cursor.tsx](src/components/lightswind/smokey-cursor.tsx).
- **`shivakriti-tagger`** — dev-only Vite plugin (`componentTagger`) active in development mode.
- **`react-helmet-async`** — SEO meta tags managed per-page via `<Helmet>`.

### SEO / public assets

`public/kb.txt` — chatbot knowledge base (plain text, edit to update chatbot answers).  
`public/sitemap.xml`, `public/robots.txt`, `public/.htaccess` — served as-is.
