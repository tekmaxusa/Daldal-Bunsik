# Daldal Bunsik

Korean bunsik (snack bar) restaurant site — menu, locations, and online ordering — built with **Vite**, **React**, and **Tailwind CSS**.

## Run locally

**Prerequisites:** Node.js 20+

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and set any `VITE_*` values you need (ordering, etc.)
3. Start dev server: `npm run dev` → [http://localhost:3000](http://localhost:3000)

## Production build

```bash
npm run build
```

## Docker

```bash
docker compose up --build
```

App is served at [http://localhost:3000](http://localhost:3000) (nginx).

## Deploy with GitHub Actions (GitHub Pages)

Workflow: [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml) — builds on every push to `main` and updates the **`gh-pages`** branch (avoids the “Failed to create deployment 404” that happens when Pages is not set to the official Actions source).

**One-time setup**

1. **Settings** → **Actions** → **General** → “Workflow permissions”: choose **Read and write** (needed so the workflow can push `gh-pages`).
2. **Settings** → **Pages** → **Build and deployment** → **Source**: **Deploy from a branch**
3. **Branch**: **`gh-pages`** / **/ (root)** → Save.
4. Push to `main` (or re-run the workflow). Site: **https://tekmaxusa.github.io/Daldal-Bunsik/**

If you rename the repository, change `VITE_BASE_URL` in the workflow to `/Your-Repo-Name/`.

## Repo

[https://github.com/tekmaxusa/Daldal-Bunsik](https://github.com/tekmaxusa/Daldal-Bunsik)
