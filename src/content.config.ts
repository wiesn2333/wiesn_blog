import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
    articles: defineCollection({
        loader: glob({ base: "src/content/articles", pattern: "**.{md,mdx}" }),
        schema: z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),
            tags: z.array(z.string()),
        }),
    }),
};
