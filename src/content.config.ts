
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.md',
  }),

  schema: z.object({
    title: z.string(),

    category: z.enum([
      'reading',
      'research',
      'travel',
      'reflections',
    ]),

    date: z.coerce.date().optional(),

    status: z.enum([
      'exploring',
      'verified',
      'rejected',
    ]).optional(),
  }),
});

export const collections = { posts };
