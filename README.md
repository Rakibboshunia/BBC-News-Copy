# 🗞️ Day-Night News — React Project

## Project Structure

```
daynnight-news/
├── index.html                  ← Vite entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                ← React root render
    ├── App.jsx                 ← Root component (assembles everything)
    │
    ├── data/
    │   └── newsData.js         ← All content/links/data
    │
    ├── styles/
    │   ├── global.css          ← CSS variables, fonts, animations
    │   └── components.css      ← All component styles
    │
    ├── components/             ← Reusable UI building blocks
    │   ├── Navbar.jsx          ← Top nav + category bar
    │   ├── Hero.jsx            ← Hero banner with live badge
    │   ├── SectionHeader.jsx   ← Reusable section title with accent bar
    │   ├── NewsCard.jsx        ← Card with image, tag, title, desc
    │   └── Footer.jsx          ← Footer with links
    │
    └── pages/                  ← Page-level sections
        ├── WorldNewsSection.jsx
        ├── AsiaNewsSection.jsx
        ├── MustSeeSection.jsx
        ├── MostWatchedSection.jsx
        ├── FullStorySection.jsx
        └── WorldPicturesSection.jsx
```

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **React 18** — UI library
- **Vite** — Lightning-fast bundler
- **Plain CSS** — CSS custom properties (no Tailwind needed)
- **Google Fonts** — Bebas Neue + Playfair Display + Source Serif 4

## Customization

- **Content** → edit `src/data/newsData.js`
- **Colors/Fonts** → edit CSS variables in `src/styles/global.css`
- **Component styles** → `src/styles/components.css`
- **Add a new section** → create in `src/pages/`, import in `App.jsx`
