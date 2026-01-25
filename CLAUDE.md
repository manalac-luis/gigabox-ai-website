# Gigabox Research

## Project Overview
Marketing website for Gigabox Research, an AI research lab focused on building AI agents that democratize access to expert knowledge. The site showcases research papers, the Axiom platform, team, and contact information.

## Tech Stack
- **Framework**: Next.js 16.x (App Router)
- **UI**: React 19, Tailwind CSS 3.4, @tailwindcss/typography
- **Markdown**: gray-matter, remark, remark-html (for research papers)
- **Language**: TypeScript 5
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Forms**: HubSpot embedded form

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (hero, mission, research, applications, team, contact)
│   ├── globals.css         # CSS variables and base styles
│   ├── icon.jpg            # Favicon (auto-detected by Next.js)
│   ├── apple-icon.jpg      # Apple touch icon
│   ├── research/
│   │   ├── page.tsx        # Research papers index
│   │   └── [slug]/page.tsx # Individual paper pages (SSG)
│   ├── platform/page.tsx   # Axiom platform capabilities
│   ├── approach/page.tsx   # Research principles
│   ├── privacy/page.tsx    # Privacy policy
│   └── terms/page.tsx      # Terms of service
├── components/
│   ├── Header.tsx          # Fixed nav with logo + links
│   ├── Footer.tsx          # Copyright + legal links
│   ├── Team.tsx            # Team grid with photos + LinkedIn
│   ├── ContactForm.tsx     # HubSpot form embed
│   ├── ResearchCard.tsx    # Paper preview card
│   └── ApplicationCard.tsx # Application domain card
└── lib/
    └── markdown.ts         # Research paper parsing (getPaper, getAllPapers)

research-papers/            # Markdown files for research papers
├── persistent-memory-architecture.md
├── proactive-engagement-systems.md
├── addressing-loneliness-epidemic.md
└── multimodal-character-generation.md

public/
├── hero.jpg               # Hero image (AI network visualization)
├── og-image.jpg           # Social sharing image (1200x630)
├── Icon.jpg               # Source logo
└── team2/                 # Team headshots (Luis, Eric, Victor, Nikki, Hannah)
```

## Design System
- **Background**: #FAFAFA (off-white)
- **Foreground**: #0A0A0A (near black)
- **Accent**: #1E40AF (deep blue)
- **Secondary**: #3B82F6 (bright blue)
- **Font**: Inter
- **Aesthetic**: Minimal, research-focused (Anthropic/DeepMind style)

## Key Features
1. **Research Papers**: Markdown-based with frontmatter (title, date, abstract), rendered via remark
2. **Static Generation**: All pages are statically generated, research papers use generateStaticParams
3. **HubSpot Integration**: Contact form embedded via HubSpot script (portal 49061441)
4. **Responsive**: Mobile-first with collapsible header nav

## Routes
| Route | Description |
|-------|-------------|
| `/` | Home - hero, mission, research preview, applications, team, contact |
| `/research` | Research papers index |
| `/research/[slug]` | Individual paper (4 papers currently) |
| `/platform` | Axiom platform capabilities |
| `/approach` | 5 research principles |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Commands
```bash
npm run dev     # Start dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Git Remotes
- `origin_luis`: https://github.com/manalac-luis/gigabox-ai-website.git (active, Vercel-connected)
- `origin`: https://github.com/luis-gigabox/gigabox-tf.git (inactive)

## Important Notes
- Hash anchor links (`#contact`) use native `<a>` tags, not Next.js `Link` (for reliable same-page navigation)
- Contact section has `scroll-mt-20` to account for fixed header
- Research papers are in `/research-papers/` directory (not `/posts/`)
- Team photos are in `/public/team2/` (team1 was deleted)

## Work Log
See `docs/worklog.md` for session history and implementation details.
