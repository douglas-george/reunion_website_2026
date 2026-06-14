import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(100),
    icon: z.string().default('📄'),
    intro: z.string().optional(),
    hidden: z.boolean().default(false),
  }),
});

const dayEvent = z.object({
  time: z.string(),
  title: z.string(),
  location: z.string().optional(),
  description: z.string().optional(),
});

const itinerary = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './content/itinerary' }),
  schema: z.object({
    day: z.string(),
    date: z.string(),
    order: z.number().default(100),
    events: z.array(dayEvent).default([]),
  }),
});

const mealBlock = z.object({
  name: z.string(),
  time: z.string().optional(),
  dishes: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  cook: z.string().optional(),
});

const meals = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './content/meals' }),
  schema: z.object({
    day: z.string(),
    date: z.string(),
    order: z.number().default(100),
    meals: z.array(mealBlock).default([]),
  }),
});

export const collections = { pages, itinerary, meals };
