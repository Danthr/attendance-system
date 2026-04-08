# AttendAI – Student Attendance & Analytics System

**IT Project Management Lab – Assignment 3**  
**Name:** Atharva Dange  
**PRN:** 1032221013

---

## Project Overview

A frontend React dashboard for an AI-Based Student Attendance & Analytics System. This project demonstrates a complete DevOps pipeline using GitHub Actions (CI) and Vercel (CD).

## Tech Stack

- **Frontend:** React + Vite
- **Testing:** Vitest + Testing Library
- **Linting:** ESLint
- **CI:** GitHub Actions
- **CD:** Vercel

## DevOps Pipeline

```
Push to GitHub → GitHub Actions (CI) → Vercel (CD) → Live URL
```

### CI Steps (GitHub Actions)
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Run ESLint
5. Run tests
6. Build project

### CD (Vercel)
- Auto-deploys on every push to `main`
- Generates a live public URL

## Running Locally

```bash
npm install
npm run dev
```

## Running Tests

```bash
npm test
```
