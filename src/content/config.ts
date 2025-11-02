import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { image } from 'astro:assets';

const postsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: ({ image }) => z.object({
      author: z.string(),
      title: z.string(),
      pubDate: z.date(),
      description: z.string().optional(),
      ogImage: z.string(),
      image: image(),
      published: z.boolean().default(false),
      featured: z.boolean().default(false),
      tags: z.string().array().default([]),
    }),
});

export const collections = {
    posts: postsCollection,
};
