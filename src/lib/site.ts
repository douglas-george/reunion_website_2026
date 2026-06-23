import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export interface GlanceItem { icon: string; label: string; value: string; sub?: string; }

export interface SiteConfig {
  title: string;
  eyebrow?: string;
  tagline?: string;
  location: string;
  location_detail?: string;
  dates_label: string;
  countdown_target: string;
  headcount?: string;
  welcome_heading?: string;
  welcome_body?: string;
  footer_heading?: string;
  footer_body?: string;
  meal_intro?: string;
  meal_notes?: string[];
  glance?: GlanceItem[];
}

let cached: SiteConfig | null = null;

export function getSite(): SiteConfig {
  if (cached) return cached;
  const file = path.resolve('./content/site.yaml');
  cached = yaml.load(fs.readFileSync(file, 'utf8')) as SiteConfig;
  return cached;
}

export function initials(name?: string): string {
  if (!name) return '·';
  return name
    .replace(/&/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');
}
