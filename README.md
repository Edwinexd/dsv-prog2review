# Vival

<p align="center">
  <img src="public/vival_color.png" alt="Vival Logo" width="200">
</p>

AI-powered code review and oral examination system.

## Overview

Students submit Java code (via admin upload from Moodle) → GPT-5 reviews and generates discussion points → Students book seminar slots → ElevenLabs voice agent conducts 30-minute oral examination → Admins review transcripts and grade pass/fail.

## Tech Stack

- **Frontend/Backend:** Next.js 14+ (App Router, TypeScript, Turbopack)
- **Database:** PostgreSQL 16 (raw SQL, no ORM)
- **Cache/Queue:** Redis 7
- **IDs:** Snowflake IDs via [id-generator](https://github.com/Edthing/id-generator)
- **AI Review:** OpenAI GPT-5
- **Voice Agent:** ElevenLabs Conversational AI
- **Email:** dsv-wrapper (Python) via lambda@dsv.su.se
- **Deployment:** Kubernetes + Docker

## Quick Start

```bash
# Start Postgres + Redis
docker compose up -d

# Install dependencies
npm install

# Run migrations
npm run db:migrate

# Start dev server (with Turbopack)
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
DATABASE_URL=postgresql://vival:vival@localhost:5432/vival
REDIS_URL=redis://localhost:6379
ID_GENERATOR_URL=http://localhost:8080
OPENAI_API_KEY=sk-...
ELEVENLABS_API_KEY=...
ELEVENLABS_AGENT_ID=...
ADMIN_USERNAMES=edsu8469
BASE_URL=https://prog2review.dsv.su.se
MAIL_USER=lambda
MAIL_PASS=...
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (student)/          # Student portal
│   ├── admin/              # Admin portal
│   └── api/                # API routes
├── components/             # React components
├── lib/                    # Core utilities
│   ├── db/                 # Database (raw SQL)
│   ├── redis/              # Redis client
│   ├── id/                 # Snowflake ID generator client
│   ├── openai/             # GPT integration
│   └── elevenlabs/         # Voice agent
└── services/               # Business logic
```

## License

AGPL-3.0 License. See [LICENSE](LICENSE) for details.
