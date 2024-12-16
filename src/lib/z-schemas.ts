import { z } from "zod";

export const NewProductSchema = z.object({
  name: z.string().min(2).max(50),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(160, { message: "Description must be at most 160 characters." }),
  price: z.string().default("0.00"),
  published: z.boolean().default(false).optional(),
  categoryid: z.string()
});

export const NewCategorySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),
  published: z.string().optional()
});
