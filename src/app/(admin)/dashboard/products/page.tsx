"use client";

import React, { useEffect, useState } from "react";

import AddProductDialog from "@/components/admin/products/add-product-dialog";
import { ProductsTable } from "@/components/admin/products/products-table";
import { getCategories } from "@/lib/db/categories";
import { getProducts } from "@/lib/db/products";
import { Category } from "@/types/category-type";
import { Product } from "@/types/product-type";

export default function ProductPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await getCategories();
      if (!categoriesData || categoriesData instanceof Error) {
        console.error("Failed to fetch categories:", categoriesData);
      } else {
        setCategories(categoriesData as Category[]);
      }
      const productsData = await getProducts();
      if (!productsData || productsData.length === 0) {
        console.error("Failed to fetch products:", productsData);
      } else {
        setProducts(productsData);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="container flex flex-col gap-7 px-4 py-6">
      <div className="flex items-center gap-10">
        <AddProductDialog categories={categories} />
      </div>
      <ProductsTable products={products} categories={categories} />
    </section>
  );
}
