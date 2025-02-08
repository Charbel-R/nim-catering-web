import { z } from "zod";

export const NewProductSchema = z.object({
  name: z.string().min(2).max(50),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(160, { message: "Description must be at most 160 characters." }),
  price: z.string().min(1, { message: "Price must be higher that 0" }),
  isPublished: z.string().optional(),
  categoryId: z.string().min(1, { message: "Category is required." })
});

export const NewCategorySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),
  isPublished: z.string().optional()
});
