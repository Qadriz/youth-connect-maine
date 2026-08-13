# Youth Connect Maine

A nonprofit website for **Youth Connect Maine**, inspired by [Youth Connekt Africa](https://youthconnektafrica.org/) and built with the same Next.js template pattern used in the Ubuntu Exchange projects.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003)

## Docker

Production (recommended):

```bash
docker compose up --build -d
```

Open [http://localhost:3003](http://localhost:3003)

```bash
docker compose logs -f web
docker compose down
```

Development inside a container (hot reload):

```bash
docker compose --profile dev up web-dev
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with video hero, stats, programs, quotes, CTAs |
| `/about` | Mission, vision, values, story, leadership |
| `/programs` | Six core youth development programs |
| `/impact` | Impact measurement and pilot goals |
| `/get-involved` | Donate, mentor, partner, volunteer |
| `/donate` | Donation information and giving options |
| `/governance` | Board, policies, transparency |
| `/contact` | Contact form and organization info |

## Assets

- Logo: `public/logo.png`
- Hero video: `public/Maine.mp4` (~3.5 MB web-optimized; original was 45 MB)
- Hero poster: `public/Maine-poster.jpg`

## Brand Colors

- Navy `#1B3A5C` — primary
- Teal `#5DBCB0` — secondary / CTAs
- Accents: Orange, Lime, Magenta, Cyan (from logo figures)

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- lucide-react icons
