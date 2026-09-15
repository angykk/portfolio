# Portfolio

A terminal-inspired, interactive developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's where

- `components/Terminal.tsx` — the hero. A boot sequence followed by a live prompt (`whoami`, `projects`, `skills`, `experience`, `contact`, `help`, `clear`). Edit `BOOT_LINES` and the `runCommand` switch to change copy or add commands.
- `components/About.tsx` — bio + the "neofetch" fact card. Edit the `facts` array and the two paragraphs.
- `components/Projects.tsx` — file-listing style project list. Edit the `projects` array; each entry expands on click.
- `components/Skills.tsx` — package.json-styled stack list. Edit `dependencies` / `devDependencies`.
- `components/Experience.tsx` — git-log styled timeline. Edit the `commits` array.
- `components/Contact.tsx` — email + links. Update `EMAIL` and `links`. Drop a real `resume.pdf` into `public/` for that link to work.
- `app/layout.tsx` — page title/description (`metadata`) and fonts.
- `tailwind.config.ts` — color tokens (`bg`, `panel`, `ink`, `dim`, `pink`, `green`) if you want to shift the palette.

## Deploying

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any Node host:

```bash
npm run build
npm start
```
