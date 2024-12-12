import React from "react";

import AddProductDrawer from "@/components/admin/products/add-product-drawer";
import { ProductsTable } from "@/components/admin/products/products-table";
import prisma from "@/lib/db";

export default async function ProductPage() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true
    }
  });

  const products = await prisma.product.findMany();

  return (
    <section className="container flex flex-col gap-7 px-4 py-6">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">All Menu items </h1>
        <AddProductDrawer categories={categories} />
      </div>
      <ProductsTable products={products} categories={categories} />
    </section>
  );
}
