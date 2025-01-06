import { ShoppingBasket } from "lucide-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import prisma from "@/lib/db/db";
import { formatPrice } from "@/lib/price-formater";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = await prisma.category.findUnique({
    where: {
      slug: slug
    },
    include: {
      products: true
    }
  });

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <h1 className="text-xl">{category.name}</h1>
      <section className="mt-6 flex flex-col gap-2">
        {category.products.map((product) => (
          <Card key={product.id} className="flex justify-between px-4">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-5">
              <ShoppingBasket></ShoppingBasket>
              <div>{formatPrice(product.price)}</div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}
