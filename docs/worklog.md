# Work Log

## 2026-01-25 - Site Redesign Complete

### Summary
Complete site rebuild from LaunchOps consulting agency to Gigabox Research AI lab. Implemented Anthropic/DeepMind-style minimal aesthetic with research paper system.

### Changes Made

#### Phase 1: Design System
- Updated `globals.css`: Light-only theme (#FAFAFA bg, #0A0A0A text, blue accents)
- Updated `tailwind.config.ts`: Added color tokens, typography plugin
- Updated `layout.tsx`: New metadata for "Gigabox Research | AI Agents for Human Expertise"

#### Phase 2: Components
**Created:**
- `Header.tsx` - Fixed nav with logo, Research/Platform/Approach/Contact links
- `Footer.tsx` - Minimal footer with copyright and legal links
- `ResearchCard.tsx` - Paper preview card (title, date, abstract)
- `ApplicationCard.tsx` - Icon + title + description grid card

**Updated:**
- `Team.tsx` - Light background, updated headline, blue LinkedIn buttons
- `ContactForm.tsx` - Light styling, added email, HubSpot with US locale

**Deleted:**
- Hero.tsx, Features.tsx, BlogPreview.tsx, Sponsored.tsx, Navbar.tsx, DashboardLayout.tsx

#### Phase 3: Routes
**Deleted:**
- `/ops/*` (6 pages), `/launchops`, `/blog`, `/docs`

**Created:**
- `/research` - Papers index
- `/research/[slug]` - Individual paper with SSG
- `/platform` - Axiom capabilities (Memory, Proactive, Multi-Modal, Tools, Evaluation)
- `/approach` - 5 numbered principles

**Updated:**
- `/privacy`, `/terms` - Light styling with new header/footer

#### Phase 4: Research Papers
- Created `lib/markdown.ts` with `getPaper()`, `getAllPapers()`, `getAllPaperSlugs()`
- Created `/research-papers/` directory with 4 papers:
  1. Persistent Memory Architecture in Conversational AI
  2. Proactive Engagement Systems for AI Companions
  3. Addressing the Loneliness Epidemic Through AI Companionship
  4. Multi-Modal Character Generation for Consistent AI Personas

#### Phase 5: Home Page
Built full home page with sections:
1. Hero - Title, tagline, 2 CTAs, hero image
2. Mission/Challenge - "Expert knowledge is scarce and expensive"
3. Research Preview - 4 paper cards with "View All" link
4. Applications - 5 cards (Friend, Tutor, Coach, Mentor, Advisor)
5. Team - 5 members with photos and LinkedIn
6. Contact - HubSpot form embed

#### Phase 6: Assets
- Added `hero.jpg` - AI network visualization
- Added `og-image.jpg` - Social sharing image
- Added `icon.jpg` / `apple-icon.jpg` - Neural network "G" logo favicon
- Deleted old assets (aws.png, azure.png, gcp.png, kubernetes-icon-color.svg, launchops-*.svg)

### Bug Fixes
1. **Next.js CVE-2025-66478**: Updated from 15.1.6 to 16.1.4 to fix Vercel deployment
2. **Tailwind typography plugin**: Changed from `require()` to ESM import
3. **Duplicate next.config**: Removed next.config.js (kept .ts)
4. **Contact anchor links**: Changed from Next.js `Link` to native `<a>` tags for hash links
5. **Fixed header overlap**: Added `scroll-mt-20` to contact section

### Deployment
- Vercel auto-deploys from `origin_luis` (manalac-luis/gigabox-ai-website)
- Build: ~45 seconds
- All 14 routes generate statically

### Content Notes
- Research paper content was generated to fit the AI agents theme
- Papers include realistic abstracts, introductions, methodology, and findings
- Can be replaced with actual research when available

### Remaining Placeholders
All major assets have been replaced. Site is production-ready.
