# e24 / WellPlus prototype

Static site. No build step, no dependencies to install.

- `index.html` — entry point
- `*.jsx` — transpiled in the browser by Babel standalone (loaded from CDN)
- `ds/` — design-system tokens and component bundle
- `assets/`, `uploads/` — images and the one local font

## Vercel

Framework preset: **Other**. Root directory: this folder. No build command, no output directory.

Deploys on push to `main`.
