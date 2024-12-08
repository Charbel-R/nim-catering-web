import { ShoppingBasket } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import prisma from "@/lib/db";
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
      <section className="mt-6 flex flex-col gap-4">
        <ul>
          {category.products.map((product) => (
            <Card key={product.id} className="mt-5 flex justify-between px-10">
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
        </ul>
      </section>
    </>
  );
}
