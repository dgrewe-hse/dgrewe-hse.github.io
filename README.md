# dgrewe-hse.github.io

[![Deploy to GitHub Pages](https://github.com/dgrewe-hse/dgrewe-hse.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/dgrewe-hse/dgrewe-hse.github.io/actions/workflows/deploy.yml)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

Personal website of **Dennis Grewe** — professor, researcher, and engineer at [Esslingen University of Applied Sciences](https://www.hs-esslingen.de). The site collects academic publications, conference talks, and blog writing on topics spanning networked systems, software-defined vehicles, programming education, and digital finance.

Live at **[dgrewe-hse.github.io](https://dgrewe-hse.github.io)**

> All content published on this website — including blog posts, opinions, analyses, and commentary — represents **personal views only**. Nothing here reflects the position, strategy, endorsement, or opinion of any current or previous employer, institution, client, or affiliated organisation. This site is maintained independently and does not constitute professional financial, legal, or technical advice.

---

## License

Source code is available for reference. Content (blog posts, images) remains the intellectual property of the author. Please contact before reproducing.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (static export, App Router) |
| UI | [React 19](https://react.dev) + TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Content | Markdown files in `content/posts/` parsed with [gray-matter](https://github.com/jonschlinkert/gray-matter) and rendered via [marked](https://marked.js.org) |
| Hosting | [GitHub Pages](https://pages.github.com) via GitHub Actions |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (defaults to port 3000)
npm run dev

# Production build (outputs to ./out for static hosting)
npm run build

# Lint
npm run lint
```

---
