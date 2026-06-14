# Editing the reunion site

Everything the site shows comes from this `content/` folder. Edit a file, commit, and push —
the site rebuilds within a minute or two. You don't need to touch anything outside `content/`.

> **Heads up:** the current content is a *first draft* with placeholder details (Maple Lake
> Lodge, Aug 14–16, "~40 of us", the cooks' names, etc.). Replace it with the real plan.

## Where things live

- **Front page, dates, countdown, the four "at a glance" cards** → `site.yaml`
- **A day's schedule** → a YAML file in `itinerary/` (one per day; `order` sets the sequence)
- **A day's meals** → a YAML file in `meals/` (one per day)
- **Any other page** (travel, lodging, packing, a family tree, a photos page…) → a Markdown
  file in `pages/`. It automatically gets its own page **and** a nav link.
- **Photos** → drop image files in `../public/images/` and reference them in Markdown as
  `![caption](/images/yourphoto.jpg)`

## Page frontmatter (top of each `pages/*.md`)

```yaml
---
title: Getting there      # shown in nav + as the page heading
order: 1                  # nav position (lower = earlier)
icon: "🚗"                # emoji shown on the home-page card
intro: One-line teaser.   # shown on the home-page card (optional)
hidden: false             # set true to keep a draft off the site entirely
---
```

## Adding a day to the itinerary or meals

Copy an existing file in `itinerary/` (or `meals/`), rename it (e.g. `04-monday.yaml`),
bump `order`, and edit the entries. That's it — the new day shows up automatically.

## The easiest way to edit

Just tell your Claude instance what you want ("add a Saturday 2pm lake hike," "change the
countdown to August 21," "add an FAQ page with the wifi password"). It edits the right file
here and pushes for you.
