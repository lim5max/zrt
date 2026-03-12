# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React landing page for ZRT (Завод радиотехнологий) built with Vite. The project is located in the `landing-page/` subdirectory.

## Commands

All commands should be run from the `landing-page/` directory:

```bash
cd landing-page

npm run dev      # Start development server with HMR
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** for build tooling
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **Radix UI** / **Base UI** for accessible components
- **Lucide React** for icons

## Architecture

### Component Structure

The app follows a single-page layout with section-based components:

```
src/
├── App.jsx          # Main app component, composes all sections
├── main.jsx         # Entry point
├── components/      # Page sections and UI components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── Products.jsx
│   ├── About.jsx
│   ├── SuccessStories.jsx
│   ├── News.jsx
│   ├── Clients.jsx
│   ├── Footer.jsx
│   ├── ParticleLogo.jsx
│   └── ui/          # Reusable UI primitives (button, navigation-menu)
└── lib/
    └── utils.js     # Utility functions (cn for className merging)
```

### Styling

- Tailwind with custom theme extensions in `tailwind.config.js`
- Brand colors: `dark-blue` (#00263b), `turquoise` (#009bab)
- Fonts: PFDinTextPro (body), Outfit (headings)
- Additional CSS files: `index.css`, `components.css`, `components-redesign.css`, `footer.css`
- Path alias: `@/` maps to `./src/`

### UI Components

Uses `class-variance-authority` (cva) for component variants and `tailwind-merge` via the `cn()` utility in `src/lib/utils.js`.
