"use server";

import { revalidatePath } from "next/cache";

import { createCategory } from "@/lib/categories";
import { NewCategorySchema } from "@/lib/z-schemas";

type CategoryState = {
  success?: string;
  error?: string;
};

export async function createCategoryAction(
  state: CategoryState,
  formData: FormData
) {
  try {
    const data = Object.fromEntries(formData.entries());
    const result = NewCategorySchema.safeParse(data);
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }

    const name =
      (data.name as string).charAt(0).toUpperCase() +
      (data.name as string).slice(1);

    const isPublished = data.published === "on";

    const category = await createCategory(name, isPublished);

    if (category instanceof Error) {
      return { error: category.message };
    }

    return { success: "Category Created Successfully!" };
  } catch (error: unknown) {
    return { error: (error as Error)?.message ?? "Failed to create category." };
  } finally {
    revalidatePath("/dashboard/categories");
  }
}
