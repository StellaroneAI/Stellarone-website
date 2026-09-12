# StellarOne Website

React + Vite single-page website for StellarOne Health Technologies.

## Local development

Use Node.js `22.x`.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build output is generated in `dist/`.

## Vercel deployment

This repository is configured for Vercel using `/home/runner/work/Stellarone-website/Stellarone-website/vercel.json`:

- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrite: `/(.*) -> /index.html`

### Deploy steps

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Keep root directory as repository root.
4. Ensure Node.js version is set to `22.x` in Vercel project settings.
5. Deploy.
