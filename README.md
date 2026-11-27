# Vaxmor — Premium Banking & Financial Services Website

> A high-fidelity design reference and screenshot archive for the **Vaxmor** brand — a modern private banking, lending, and investment-portfolio platform built on Webflow.

---

## Table of Contents

- [Overview](#overview)
- [Brand Identity](#brand-identity)
- [Site Pages](#site-pages)
- [Screenshots](#screenshots)
- [Design Highlights](#design-highlights)
- [Tech Stack](#tech-stack)
- [Getting Started (Local Dev)](#getting-started-local-dev)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**Vaxmor** is a premium financial-services brand offering:

| Service | Description |
|---|---|
| Private Banking | Personalised wealth management and concierge banking |
| Lending & Mortgages | Competitive mortgage rates and flexible lending solutions |
| Investment Portfolios | Curated portfolio strategies for high-net-worth individuals |

The site was designed and hosted on **Webflow** (`vaxmor.webflow.io`) and serves as a showcase of modern fintech UI/UX design — combining editorial typography, calm neutrals, and trust-first content architecture.

---

## Brand Identity

| Attribute | Value |
|---|---|
| Brand Name | Vaxmor |
| Sector | Fintech / Private Banking |
| Design Platform | Webflow |
| Tone | Premium, calm, authoritative |
| Audience | High-net-worth individuals, wealth managers |
| Primary Colours | Deep navy, warm white, gold accent |
| Typography | Serif display + clean sans-serif body |

---

## Site Pages

The following pages were captured and are archived in this repository:

| Page | URL Slug | Description |
|---|---|---|
| Home | `/` | Hero section, services overview, trust indicators |
| About Us | `/about-us` | Brand story, team, mission |
| Services: Private Banking | `/services/private-banking` | Dedicated service detail |
| Services: Lending & Mortgages | `/services/lending-and-mortgages` | Mortgage and lending detail |
| Services: Investment Portfolios | `/services/investment-portfolios` | Portfolio management detail |
| Blog | `/blog` | Financial insights and thought leadership |
| Pricing | `/pricing` | Plan tiers and feature comparison |
| Contact | `/contact-v1` | Enquiry form and office details |
| Style Guide | `/style-guide` | Design tokens, type scale, components |

---

## Screenshots

All screenshots were captured at full-page desktop resolution on **2026-11-27** and are stored in the repository root.

| File | Page |
|---|---|
| `screencapture-vaxmor-webflow-io-2026-11-27-02_06_20.png` | Home |
| `screencapture-vaxmor-webflow-io-about-us-2026-11-27-02_07_04.png` | About Us |
| `screencapture-vaxmor-webflow-io-blog-2026-11-27-02_07_27.png` | Blog |
| `screencapture-vaxmor-webflow-io-contact-v1-2026-11-27-02_08_38.png` | Contact |
| `screencapture-vaxmor-webflow-io-pricing-2026-11-27-02_08_04.png` | Pricing |
| `screencapture-vaxmor-webflow-io-services-investment-portfolios-2026-11-27-02_11_45.png` | Investment Portfolios |
| `screencapture-vaxmor-webflow-io-services-lending-and-mortgages-2026-11-27-02_11_06.png` | Lending & Mortgages |
| `screencapture-vaxmor-webflow-io-services-private-banking-2026-11-27-02_09_28.png` | Private Banking |
| `screencapture-vaxmor-webflow-io-style-guide-2026-11-27-02_12_44.png` | Style Guide |

---

## Design Highlights

### Layout System
- **Mobile-first** responsive grid with consistent vertical rhythm.
- **Hub-and-spoke navigation**: a persistent top nav links to all service sub-pages.
- Full-bleed hero sections with restrained typographic hierarchy (display type at least 2.5x body).

### Typography
- **Display**: Serif typeface (high contrast, editorial authority).
- **Body**: Clean sans-serif at comfortable line-height for long-form financial copy.

### Colour Palette
| Token | Hex | Usage |
|---|---|---|
| `color.brand.navy` | `#0D1B2A` | Primary backgrounds, headings |
| `color.brand.white` | `#F7F4EF` | Warm white surfaces |
| `color.brand.gold` | `#C9A84C` | Accents, CTA highlights |
| `color.neutral.mid` | `#6B7280` | Secondary text, borders |

### UX Principles Applied
- **Trust-first content**: regulatory badges, testimonials, and partner logos placed above the fold.
- **Progressive disclosure**: service pages reveal depth only when the user scrolls.
- **Minimal chrome**: no distracting UI noise — the content is the brand.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Design & CMS | Webflow |
| Hosting | Webflow CDN |
| Future: Front-end | Next.js / React (planned migration) |
| Future: Styling | Tailwind CSS with custom design tokens |
| Future: Backend | Node.js + Express or Edge Functions |
| Package Manager | npm |

---

## Getting Started (Local Dev)

> These steps apply when migrating Vaxmor from Webflow to a custom codebase.

### Prerequisites

- **Node.js** >= 18.x — [download](https://nodejs.org)
- **npm** >= 9.x (bundled with Node)
- **Git** >= 2.40

### Install

```bash
# 1. Clone the repository
git clone https://github.com/girishlade111/vaxmor.git
cd vaxmor

# 2. Install dependencies (once a package.json exists)
npm install

# 3. Start the development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL of the deployed site | Yes |
| `DATABASE_URL` | Postgres connection string | Yes |
| `API_SECRET_KEY` | Internal API signing key | Yes |

---

## Project Structure

```
vaxmor/
├── public/                  # Static assets (images, fonts, icons)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Hero, Features, Testimonials, CTA
│   │   └── ui/              # Buttons, Cards, Inputs, Modals
│   ├── pages/               # Next.js page routes
│   │   ├── index.tsx        # Home
│   │   ├── about.tsx        # About Us
│   │   ├── blog/            # Blog listing + posts
│   │   ├── services/        # Service sub-pages
│   │   ├── pricing.tsx      # Pricing
│   │   └── contact.tsx      # Contact
│   ├── styles/              # Global CSS / Tailwind config
│   ├── lib/                 # Utilities, API helpers, constants
│   └── tokens/              # Design tokens (colour, type, spacing)
├── screenshots/             # Full-page screenshots archive
├── .env.example             # Environment variable template
├── .gitignore               # Git ignore rules
├── package.json             # npm manifest
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

---

## Contributing

Contributions are welcome for the open-source skeleton of this project.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Commit with a clear message: `git commit -m "feat: add contact form validation"`.
4. Push to your fork: `git push origin feat/your-feature`.
5. Open a Pull Request against `main`.

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

Design assets and screenshots belong to the Vaxmor brand and are included here for reference and development purposes only.

---

> Built with care for premium financial UX. Vaxmor — where wealth meets clarity.
