"use server";

import prisma from "@/lib/db";

export async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    return error;
  }
}

export async function createCategory(name: string, isPublished?: boolean) {
  const slug = name.replace(/\s+/g, "-").toLowerCase();
  try {
    const existingCategory = await prisma.category.findUnique({
      where: { slug }
    });

    if (existingCategory) {
      return new Error("Category already exists");
    }

    await prisma.category.create({
      data: {
        name,
        published: isPublished || false,
        slug: slug
      }
    });
  } catch (error) {
    return error;
  }
}

export async function updateCategory(
  id: string,
  name: string,
  published?: boolean
) {
  try {
    await prisma.category.update({
      where: { id },
      data: {
        name,
        published: published,
        slug: name.replace(/\s+/g, "-").toLowerCase()
      }
    });
  } catch (error) {
    return error;
  }
}

export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: { id }
    });
  } catch (error) {
    return error;
  }
}
