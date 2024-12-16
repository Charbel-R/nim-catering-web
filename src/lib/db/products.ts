"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/db/db";

export async function createProduct(formData: FormData) {
  await prisma.product.create({
    data: {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      published:
        formData.get("published") === "true"
          ? true
          : formData.get("published") === "false"
            ? false
            : undefined,
      slug: (formData.get("name") as string).replace(/\s+/g, "-").toLowerCase(),
      categoryId: formData.get("category") as string
    }
  });
  revalidatePath("/dashboard/products");
}

export async function updateProduct(id: string, formData: FormData) {
  await prisma.product.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: Number(formData.get("price")),
      published:
        formData.get("published") === "true"
          ? true
          : formData.get("published") === "false"
            ? false
            : undefined,
      slug: (formData.get("name") as string).replace(/\s+/g, "-").toLowerCase(),
      categoryId: formData.get("category") as string
    }
  });
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id }
  });
  revalidatePath("/dashboard/products");
}
