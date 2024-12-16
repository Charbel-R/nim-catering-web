"use server";

import { revalidatePath } from "next/cache";

import { createCategory } from "@/lib/db/categories";
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
    // Convert FormData to object
    const data = Object.fromEntries(formData.entries());
    // Validate the data
    const result = NewCategorySchema.safeParse(data);
    // If validation fails, return the error
    if (!result.success) {
      return { error: result.error.errors[0].message };
    }
    // Capitalize the first letter of the category name
    const name =
      (data.name as string).charAt(0).toUpperCase() +
      (data.name as string).slice(1);

    const isPublished = data.published === "on";
    // Create the category
    const category = await createCategory(name, isPublished);
    if (category instanceof Error) {
      return { error: category.message };
    }
    // Return success message if category is created
    return { success: "Category Created Successfully!" };
  } catch (error: unknown) {
    // Return error message if category creation fails
    return { error: (error as Error)?.message ?? "Failed to create category." };
  } finally {
    // Revalidate the categories page
    revalidatePath("/dashboard/categories");
    // Clear the form
  }
}
