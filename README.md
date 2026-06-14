# reunion_website_2026

The George Family Reunion site — a content-driven [Astro](https://astro.build) site served at
`reunion.sweetbriarai.com` (behind Cloudflare Access, family only).

## You probably just want to edit content

Everything the site shows lives in [`content/`](./content). You almost never need to touch
anything else. See **[content/README.md](./content/README.md)** for the authoring guide.

- Front page, dates, countdown, "at a glance" cards → `content/site.yaml`
- A day's schedule → `content/itinerary/NN-day.yaml`
- A day's meals → `content/meals/NN-day.yaml`
- Any other page → a Markdown file in `content/pages/` (auto-creates the page **and** a nav link)
- Photos → drop in `public/images/`, reference as `/images/yourphoto.jpg`

Edit, commit, push. The server polls this repo every ~60s and rebuilds the live site.

## How it's wired (for the curious)

`src/` is the Astro app. Pages and navigation are generated from the `content/` tree, so the
structure grows by adding files — no code changes needed. gmktek pulls this repo, runs
`npm ci && npm run build`, and serves the `dist/` output via nginx through the Cloudflare Tunnel.

## Local preview (optional)

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

Requires Node 20+.
