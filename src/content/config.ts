import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    date: z.date(),
    coverImage: z.string().optional(),
    locale: z.enum(['en', 'pt', 'es']),
  }),
});

export const collections = { devlog };
