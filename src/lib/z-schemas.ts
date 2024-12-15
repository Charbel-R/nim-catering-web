import { z } from "zod";

export const NewCategorySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be at most 50 characters." }),
  published: z.string().optional()
});
