# Talent-IQ 🚀

A production-ready real-time technical interview platform supporting collaborative coding, video interviews, live chat, authentication, and event-driven background processing.

## Live Demo
https://talent-iq-rose.vercel.app

## Tech Stack
- React
- Node.js
- Express
- MongoDB
- Clerk Authentication
- Stream Chat
- Stream Video
- Inngest
- TanStack Query

## System Architecture

Client (React + TanStack Query)
        │
        ▼
Authentication (Clerk)
        │
        ▼
Backend (Node.js + Express)
        │
        ├── MongoDB
        ├── Stream Chat
        ├── Stream Video
        └── Inngest
