"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db";

export async function createCategory(formData: FormData) {
  await prisma.category.create({
    data: {
      name: formData.get("name") as string,
      slug: (formData.get("name") as string).replace(/\s+/g, "-").toLowerCase()
    }
  });
  revalidatePath("/dashboard/categories");
}

export async function updateCategory(id: string, formData: FormData) {
  await prisma.category.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      slug: (formData.get("name") as string).replace(/\s+/g, "-").toLowerCase()
    }
  });
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({
    where: { id }
  });
}
