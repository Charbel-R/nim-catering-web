import Link from "next/link";

import CreateCategoryForm from "@/components/forms/create-category-form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import prisma from "@/lib/db";

export default async function CategogiesPage() {
  const categories = await prisma.category.findMany();

  return (
    <section className="container px-4 py-6">
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/dashboard/categories/${category.slug}`}>
                <Card>
                  <CardHeader>{category.name}</CardHeader>
                  <CardDescription className="sr-only">
                    {category.name}
                  </CardDescription>
                  <CardFooter></CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CreateCategoryForm />
    </section>
  );
}
