# Pet Gallery Frontend (React + Tailwind)

A modern, minimalistic, light-themed pet website showcasing adorable pets with an image-centric design.

## Features
- Responsive homepage with a hero section highlighting featured pets
- Grid-based photo gallery using high-quality sample pet images (Unsplash)
- Modern light theme styled with Tailwind CSS
- Top navigation menu and sticky header
- Contact section with a simple form

## Tech
- React (CRA)
- Tailwind CSS (via PostCSS)
- Autoprefixer

## Quick Start
1. Install dependencies:
   - npm install
2. Start development:
   - npm start
3. Build for production:
   - npm run build

## Customization
- Colors are configured in `tailwind.config.js` under `theme.extend.colors`:
  - primary: #2563EB
  - secondary: #38BDF8
  - accent: #F472B6

- Update hero/gallery content in:
  - `src/components/Hero.jsx`
  - `src/components/Gallery.jsx`

## Image Credits
Sample images are loaded from Unsplash and are intended for placeholder/demo purposes only. Replace with your own images for production use.
