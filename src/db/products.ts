"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/db/db";

import { getCategoryNameFromId } from "./categories";

export async function getProducts() {
  return await prisma.product.findMany();
}

export async function createProduct(formData: FormData) {
  const category = (await getCategoryNameFromId(
    formData.get("categoryId") as string
  )) as { name: string };
  if (!category) {
    throw new Error("Category not found");
  }
  try {
    await prisma.product.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price: Number(formData.get("price")),
        isPublished:
          formData.get("isPublished") === "true"
            ? true
            : formData.get("isPublished") === "false"
              ? false
              : undefined,
        slug: (formData.get("name") as string)
          .replace(/\s+/g, "-")
          .toLowerCase(),
        categoryId: formData.get("categoryId") as string,
        categoryName: category.name
      }
    });
  } catch (error) {
    console.error(error);
  } finally {
    revalidatePath("/dashboard/products");
  }
}

export async function updateProduct(id: string, formData: FormData) {
  await prisma.product.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      isPublished:
        formData.get("published") === "true"
          ? true
          : formData.get("published") === "false"
            ? false
            : undefined,
      slug: (formData.get("name") as string).replace(/\s+/g, "-").toLowerCase(),
      categoryId: formData.get("categoryId") as string
    }
  });
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id }
  });
  revalidatePath("/dashboard/products");
}
