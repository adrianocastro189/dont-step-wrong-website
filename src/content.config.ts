import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    date: z.date(),
    coverImage: z.string().optional(),
    locale: z.enum(['en', 'pt', 'es']),
  }),
});

export const collections = { devlog };
